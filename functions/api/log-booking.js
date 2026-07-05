// ================================================================
// FUNCTIONS/LOG-BOOKING.JS - Cloudflare Pages Function Proxy to Google Script
// ================================================================
// Kept in sync with api/log-booking.js (Vercel) and
// netlify/functions/log-booking.js (Netlify).
//
// Cloudflare Pages Functions use a different convention than Vercel/Netlify:
// exported onRequestPost/onRequestOptions handlers instead of a single
// generic handler, and env vars come from `context.env`, not `process.env`.
// Requires "nodejs_compat" in wrangler.jsonc (already set) so `node:crypto`
// is available.
//
// Required env vars (Cloudflare dashboard → Pages project → Settings →
// Environment variables):
//   GOOGLE_SHEETS_URL  — Google Apps Script deployment URL
//   ADMIN_USER         — admin login username
//   ADMIN_PASSWORD     — admin login password (also doubles as the
//                        session-token signing key — see makeSessionToken)
//   GAS_ADMIN_TOKEN    — shared secret forwarded to GAS for admin calls
// ================================================================

import crypto from 'node:crypto';

const ALLOWED_ORIGINS = [
  'https://www.miacasahanoi.com',
  'https://miacasahanoi.com'
];

function makeSessionToken(adminUser, adminPassword) {
  return crypto
    .createHmac('sha256', adminPassword || 'fallback')
    .update(adminUser || 'admin')
    .digest('hex');
}

function timingSafeStringEqual(a, b) {
  const hashA = crypto.createHash('sha256').update(String(a)).digest();
  const hashB = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

function isValidToken(token, adminUser, adminPassword) {
  if (!token) return false;
  return timingSafeStringEqual(token, makeSessionToken(adminUser, adminPassword));
}

// ── Simple in-memory rate limiter for login attempts ───────────────
// Lives for the lifetime of the Worker isolate — same caveat as the
// Vercel/Netlify versions: resets periodically, stops casual
// brute-forcing from one source rather than a distributed attack.
const LOGIN_ATTEMPTS = new Map();
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 8;

function getClientKey(request) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown';
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

function corsHeaders(request) {
  const origin = request.headers.get('origin');
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
    'Vary': 'Origin'
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function jsonResponse(request, data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: corsHeaders(request) });
}

async function callGAS(googleSheetsUrl, payload) {
  if (!googleSheetsUrl) {
    return { status: 'error', message: 'Configuration error: Google Sheets URL not set' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeout);
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('GAS returned non-JSON:', text.slice(0, 200));
      return { status: 'error', message: 'Google Script returned an invalid response. Please try again.' };
    }
  } catch (e) {
    clearTimeout(timeout);
    if (e.name === 'AbortError') {
      return { status: 'error', message: 'Request timed out. Please try again.' };
    }
    throw e;
  }
}

// ── Cloudflare Pages Functions entry points ─────────────────────────

export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: corsHeaders(context.request) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const GOOGLE_SHEETS_URL = env.GOOGLE_SHEETS_URL;
  const ADMIN_USER = env.ADMIN_USER;
  const ADMIN_PASSWORD = env.ADMIN_PASSWORD;
  const GAS_ADMIN_TOKEN = env.GAS_ADMIN_TOKEN;

  const callAdminGAS = (payload) => callGAS(GOOGLE_SHEETS_URL, { ...payload, token: GAS_ADMIN_TOKEN });

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse(request, { status: 'error', message: 'Invalid JSON body' }, 400);
  }

  const { action, token } = body;

  try {
    // ── PUBLIC ACTIONS (no token needed) ──────────────────────────

    if (action === 'login') {
      const clientKey = getClientKey(request);
      if (isRateLimited(clientKey)) {
        return jsonResponse(request, { status: 'error', message: 'Too many login attempts. Please try again in a few minutes.' }, 429);
      }

      const { username, password } = body;
      if (!ADMIN_USER || !ADMIN_PASSWORD) {
        return jsonResponse(request, { status: 'error', message: 'Admin credentials not configured.' });
      }
      if (!username || !password) {
        return jsonResponse(request, { status: 'error', message: 'Incorrect username or password.' });
      }

      const userOk = timingSafeStringEqual(username, ADMIN_USER);
      const passOk = timingSafeStringEqual(password, ADMIN_PASSWORD);

      if (userOk && passOk) {
        resetRateLimit(clientKey);
        return jsonResponse(request, { status: 'ok', token: makeSessionToken(ADMIN_USER, ADMIN_PASSWORD) });
      }
      return jsonResponse(request, { status: 'error', message: 'Incorrect username or password.' });
    }

    if (action === 'checkRoomAvailability') {
      const { room, checkIn, checkOut } = body;
      const result = await callGAS(GOOGLE_SHEETS_URL, { action: 'checkRoomAvailability', room, checkIn, checkOut });
      return jsonResponse(request, { available: result.available === true, otherPropertyName: result.otherPropertyName || null });
    }

    if (action === 'getMaintenanceMode') {
      const result = await callGAS(GOOGLE_SHEETS_URL, { action: 'getMaintenanceMode' });
      return jsonResponse(request, result);
    }

    if (action === 'createBooking') {
      const result = await callGAS(GOOGLE_SHEETS_URL, body);
      return jsonResponse(request, result);
    }

    if (action === 'getInvoice') {
      const result = await callGAS(GOOGLE_SHEETS_URL, body);
      return jsonResponse(request, result);
    }

    if (action === 'requestCancellation') {
      const result = await callGAS(GOOGLE_SHEETS_URL, body);
      return jsonResponse(request, result);
    }

    if (action === 'getPriceOverrides') {
      const result = await callGAS(GOOGLE_SHEETS_URL, { action: 'getPriceOverrides' });
      return jsonResponse(request, result);
    }

    // ── ADMIN ACTIONS (token required) ────────────────────────────

    if (!isValidToken(token, ADMIN_USER, ADMIN_PASSWORD)) {
      return jsonResponse(request, { status: 'error', message: 'Unauthorized' }, 401);
    }

    if (action === 'setMaintenanceMode') {
      const result = await callAdminGAS({ action: 'setMaintenanceMode', value: body.value });
      return jsonResponse(request, result);
    }

    if (action === 'getRoomStatus') {
      const result = await callAdminGAS({ action: 'getRoomStatus' });
      return jsonResponse(request, result);
    }

    if (action === 'updateRoomStatus') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    if (action === 'deleteRoomStatus') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    if (action === 'addPriceOverride') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    if (action === 'deletePriceOverride') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    if (action === 'getPendingCancellations') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    if (action === 'confirmRefund') {
      const result = await callAdminGAS(body);
      return jsonResponse(request, result);
    }

    // Unknown action — forward and let GAS decide
    const result = await callGAS(GOOGLE_SHEETS_URL, body);
    return jsonResponse(request, result);

  } catch (error) {
    console.error('Function error:', error);
    const message = !GOOGLE_SHEETS_URL
      ? 'GOOGLE_SHEETS_URL is not set. Add it in Cloudflare Pages → Settings → Environment variables.'
      : error.message;
    return jsonResponse(request, { status: 'error', message }, 500);
  }
}
