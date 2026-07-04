// ================================================================
// API/LOG-BOOKING.JS - Vercel Serverless Function
// ================================================================

const crypto = require('crypto');

// ── Environment variables ──────────────────────────────────────────
// Set these in Vercel/Netlify dashboard:
//   GOOGLE_SHEETS_URL  - Google Apps Script deployment URL
//   ADMIN_USER         - Admin login username
//   ADMIN_PASSWORD     - Admin login password (change via env vars)
//   GAS_ADMIN_TOKEN    - Shared secret for Google Apps Script admin calls
const GOOGLE_SHEETS_URL  = process.env.GOOGLE_SHEETS_URL;
const ADMIN_USER         = process.env.ADMIN_USER;
const ADMIN_PASSWORD     = process.env.ADMIN_PASSWORD;
const GAS_ADMIN_TOKEN    = process.env.GAS_ADMIN_TOKEN;

// ── Development mode ────────────────────────────────────────────────
const IS_DEV = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';
const DEBUG = IS_DEV; // Set to false in production

function debugLog(...args) {
    if (DEBUG) console.log(...args);
}

// No separate TOKEN_SECRET — ADMIN_PASSWORD doubles as the signing key.
// One consequence: changing ADMIN_PASSWORD invalidates all existing
// tokens immediately (forces a fresh login), same as any normal login
// system. Fine for a single-admin site where credentials are never shared.

// ── Allowed origins for CORS ──────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://www.miacasahanoi.com',
  'https://miacasahanoi.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:8080'
];

// ── Session token ────────────────────────────────────────────────
// Token includes a timestamp for expiry. Valid for 7 days.
function makeSessionToken() {
  const timestamp = Date.now();
  const signature = crypto
    .createHmac('sha256', ADMIN_PASSWORD || 'fallback')
    .update(ADMIN_USER || 'admin')
    .digest('hex');
  return signature + '|' + timestamp;
}

function timingSafeStringEqual(a, b) {
  // Compare equal-length HMACs so length itself never leaks via
  // timingSafeEqual's built-in length check.
  const hashA = crypto.createHash('sha256').update(String(a)).digest();
  const hashB = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

function isValidToken(token) {
  if (!token) return false;
  
  // Check token format: signature|timestamp
  const parts = token.split('|');
  if (parts.length === 2) {
    const signature = parts[0];
    const timestamp = parseInt(parts[1], 10);
    // 7 days expiry
    if (Date.now() - timestamp > 7 * 24 * 60 * 60 * 1000) {
      return false;
    }
    const expected = makeSessionToken();
    const expectedParts = expected.split('|');
    return timingSafeStringEqual(signature, expectedParts[0]);
  }
  
  // Fallback for old tokens (no expiry) - backwards compatible
  return timingSafeStringEqual(token, makeSessionToken().split('|')[0]);
}

// ── Simple in-memory rate limiter for login attempts ───────────────
// Resets whenever the serverless instance cold-starts — this won't stop a
// determined distributed attacker, but it kills casual brute-forcing from
// a single source, which is the realistic threat here.
const LOGIN_ATTEMPTS = new Map(); // key -> { count, firstAttemptAt }
const LOGIN_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const LOGIN_MAX_ATTEMPTS = 8;

function getClientKey(req) {
  const fwd = req.headers['x-forwarded-for'];
  return (fwd ? fwd.split(',')[0].trim() : req.socket?.remoteAddress) || 'unknown';
}

function isRateLimited(key) {
  const now = Date.now();
  const entry = LOGIN_ATTEMPTS.get(key);
  if (!entry || now - entry.firstAttemptAt > LOGIN_WINDOW_MS) {
    LOGIN_ATTEMPTS.set(key, { count: 1, firstAttemptAt: now });
    return false;
  }
  entry.count += 1;
  return entry.count > LOGIN_MAX_ATTEMPTS;
}

function resetRateLimit(key) {
  LOGIN_ATTEMPTS.delete(key);
}

async function callGAS(payload) {
  if (!GOOGLE_SHEETS_URL) {
    return { status: 'error', message: 'Configuration error: Google Sheets URL not set' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeout);
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch(e) {
      debugLog('GAS returned non-JSON:', text.slice(0, 200));
      return { status: 'error', message: 'Google Script returned an invalid response. Please try again.' };
    }
  } catch(e) {
    clearTimeout(timeout);
    if (e.name === 'AbortError') {
      return { status: 'error', message: 'Request timed out. Please try again.' };
    }
    throw e;
  }
}

async function callAdminGAS(payload) {
  return callGAS({ ...payload, token: GAS_ADMIN_TOKEN });
}

// Helper function to parse body (Vercel doesn't auto-parse JSON)
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch(e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

// Vercel serverless function handler
module.exports = async function handler(req, res) {
  // Set CORS headers — restricted to known site origins, not '*'.
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (!origin) {
    // no-op: not a cross-origin browser request
  }
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  // Parse request body (Vercel doesn't auto-parse)
  let body;
  try {
    body = await parseBody(req);
  } catch(e) {
    return res.status(400).json({ status: 'error', message: 'Invalid JSON body' });
  }

  const { action, token } = body;

  try {
    // ── PUBLIC ACTIONS (no token needed) ──────────────────────────

    if (action === 'login') {
      const clientKey = getClientKey(req);
      if (isRateLimited(clientKey)) {
        return res.status(429).json({ status: 'error', message: 'Too many login attempts. Please try again in a few minutes.' });
      }

      const { username, password } = body;
      if (!ADMIN_USER || !ADMIN_PASSWORD) {
        return res.status(200).json({ status: 'error', message: 'Admin credentials not configured.' });
      }
      if (!username || !password) {
        return res.status(200).json({ status: 'error', message: 'Incorrect username or password.' });
      }

      const userOk = timingSafeStringEqual(username, ADMIN_USER);
      const passOk = timingSafeStringEqual(password, ADMIN_PASSWORD);

      if (userOk && passOk) {
        resetRateLimit(clientKey);
        return res.status(200).json({ status: 'ok', token: makeSessionToken() });
      }
      return res.status(200).json({ status: 'error', message: 'Incorrect username or password.' });
    }

    if (action === 'checkRoomAvailability') {
      const { room, checkIn, checkOut } = body;
      const result = await callGAS({ action: 'checkRoomAvailability', room, checkIn, checkOut });
      return res.status(200).json({ available: result.available === true, otherPropertyName: result.otherPropertyName || null });
    }

    if (action === 'getMaintenanceMode') {
      const result = await callGAS({ action: 'getMaintenanceMode' });
      return res.status(200).json(result);
    }

    if (action === 'createBooking') {
      const result = await callGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'getInvoice') {
      const result = await callGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'requestCancellation') {
      const result = await callGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'getPriceOverrides') {
      const result = await callGAS({ action: 'getPriceOverrides' });
      return res.status(200).json(result);
    }

    // ── ADMIN ACTIONS (token required) ────────────────────────────

    if (!isValidToken(token)) {
      return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }

    if (action === 'setMaintenanceMode') {
      const result = await callAdminGAS({ action: 'setMaintenanceMode', value: body.value });
      return res.status(200).json(result);
    }

    if (action === 'getRoomStatus') {
      const result = await callAdminGAS({ action: 'getRoomStatus' });
      return res.status(200).json(result);
    }

    if (action === 'updateRoomStatus') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'deleteRoomStatus') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'addPriceOverride') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'deletePriceOverride') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'getPendingCancellations') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    if (action === 'confirmRefund') {
      const result = await callAdminGAS(body);
      return res.status(200).json(result);
    }

    // Unknown action — forward to GAS
    const result = await callGAS(body);
    return res.status(200).json(result);

  } catch (error) {
    debugLog('Function error:', error);
    const message = !GOOGLE_SHEETS_URL
      ? 'GOOGLE_SHEETS_URL is not set. Add it in Vercel → Project Settings → Environment Variables.'
      : 'An internal error occurred. Please try again later.';
    return res.status(500).json({ status: 'error', message });
  }
};