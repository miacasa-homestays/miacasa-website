// ================================================================
// API/LOG-BOOKING.JS - Vercel Serverless Function
// ================================================================
// Required env vars in Vercel (Project → Settings → Environment Variables):
//   GOOGLE_SHEETS_URL  — your Google Apps Script deployment URL
//   ADMIN_USER         — admin login email
//   ADMIN_PASSWORD     — admin login password
//   GAS_ADMIN_TOKEN    — token from your Google Apps Script
// ================================================================

const crypto = require('crypto');

const GOOGLE_SHEETS_URL  = process.env.GOOGLE_SHEETS_URL;
const ADMIN_USER         = process.env.ADMIN_USER;
const ADMIN_PASSWORD     = process.env.ADMIN_PASSWORD;
const GAS_ADMIN_TOKEN    = process.env.GAS_ADMIN_TOKEN;

function makeSessionToken() {
  return crypto
    .createHmac('sha256', ADMIN_PASSWORD || 'fallback')
    .update(ADMIN_USER || 'admin')
    .digest('hex');
}

function isValidToken(token) {
  if (!token) return false;
  return token === makeSessionToken();
}

async function callGAS(payload) {
  if (!GOOGLE_SHEETS_URL) {
    console.error('GOOGLE_SHEETS_URL not set');
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
      console.error('GAS returned non-JSON:', text.slice(0, 200));
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

// Vercel serverless function handler
module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
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

  const body = req.body;
  const { action, token } = body;

  try {
    // ── PUBLIC ACTIONS (no token needed) ──────────────────────────

    if (action === 'login') {
      const { username, password } = body;
      if (!ADMIN_USER || !ADMIN_PASSWORD) {
        return res.status(200).json({ status: 'error', message: 'Admin credentials not configured. Set ADMIN_USER and ADMIN_PASSWORD in Vercel environment variables.' });
      }
      if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
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
    console.error('Function error:', error);
    const message = !GOOGLE_SHEETS_URL
      ? 'GOOGLE_SHEETS_URL is not set. Add it in Vercel → Project Settings → Environment Variables.'
      : error.message;
    return res.status(500).json({ status: 'error', message });
  }
};
