// ================================================================
// MiaCasa Homestays — Google Apps Script (UPDATED with verifyBooking)
// ================================================================

// ================================================================
// SPREADSHEET CONFIGURATION
// ================================================================
const SPREADSHEET_ID = '1MEWkt1K6w0bVyxNrreVifgpYeyjO_hmHUp6AjD7OBUg';
const getSpreadsheet = () => SpreadsheetApp.openById(SPREADSHEET_ID);
const SHEET_NAME   = 'Bookings';
const ADMIN_USER   = "miacasahanoi@gmail.com";
const ADMIN_PASS   = "0869922261@Mi";
const ADMIN_TOKEN  = "super_secure_token_123";

// Kept as hardcoded constants intentionally — the real source of truth for
// credentials is Vercel's environment variables (ADMIN_USER/ADMIN_PASSWORD/
// GAS_ADMIN_TOKEN in log-booking.js). These three values must stay in sync
// with those. Not moved to PropertiesService, per architecture decision.

// Single source of truth for VND->USD conversion within this file
// (was previously hardcoded as 25000 in two separate places).
const EXCHANGE_RATE = 25000;

const HEADERS = [
  'Timestamp','Booking ID','Property','Room',
  'Check-in','Check-out','Nights','Guests',
  'Amount (VND)','Amount (USD ~)','Guest Name','Guest Email','Guest Phone',
  'Payment Method','Booked At','Payment Status','Payment Sent','Checkin Sent',
  'Cancellation Requested','Cancellation Date','Refund Processed','Refund Amount','Refund Date','Refund Note',
  'Payment Proof URL'
];

const COL = {
  timestamp:1, bookingId:2, property:3, room:4,
  checkIn:5, checkOut:6, nights:7, guests:8,
  amountVND:9, amountUSD:10, guestName:11, guestEmail:12, guestPhone:13,
  paymentMethod:14, bookedAt:15, paymentStatus:16, paymentSent:17, checkinSent:18,
  cancellationRequested:19, cancellationDate:20, refundProcessed:21, refundAmount:22, refundDate:23, refundNote:24,
  paymentProofUrl:25
};

const COLORS = {
  pending:   {bg:'#FFF3CD',text:'#856404'},
  paid:      {bg:'#D1FAE5',text:'#065F46'},
  cancelled: {bg:'#FEE2E2',text:'#991B1B'},
  refunded:  {bg:'#E0E7FF',text:'#3730A3'},
  yes:       {bg:'#D1FAE5',text:'#065F46'},
  no:        {bg:'#F3F4F6',text:'#6B7280'},
  hanoi:     {bg:'#FDF6EC'},
  oldquarter:{bg:'#EEF2FF'},
  header:    {bg:'#2c2416',text:'#f5efe6'},
};

// ================================================================
// FORMATTING HELPERS
// ================================================================

function formatCurrency(amount, currency) {
  if (!amount) return 'Not specified';
  if (currency === 'VND') {
    return Number(amount).toLocaleString('vi-VN') + '₫';
  }
  return Number(amount).toLocaleString('en-US') + ' USD';
}

function getSheetUrl() {
  return `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`;
}

function getGuestPhoneFromRow(bookingRow) {
  const phone = bookingRow[COL.guestPhone - 1] || '';
  return phone.replace(/[^0-9+]/g, '');
}

// ================================================================
// LANGUAGE HELPERS
// ================================================================

function detectGuestLanguage(bookingData) {
  if (bookingData.language) return bookingData.language;
  const email = (bookingData.guestEmail || '').toLowerCase();
  const name = (bookingData.guestName || '').toLowerCase();
  if (email.endsWith('.vn') ||
      name.includes('nguyễn') || name.includes('trần') ||
      name.includes('lê') || name.includes('phạm') ||
      name.includes('hoàng') || name.includes('vũ') ||
      name.includes('đặng') || name.includes('bùi') ||
      name.includes('đỗ') || name.includes('hồ')) {
    return 'vn';
  }
  return 'en';
}

function getTranslation(lang, enText, vnText) {
  return lang === 'vn' ? vnText : enText;
}

// ================================================================
// SECURITY HELPERS (added)
// ================================================================
// GAS has no crypto.timingSafeEqual, so we hash both sides with SHA-256
// and compare digests byte-by-byte in constant time — same approach used
// in log-booking.js, adapted for the Apps Script runtime.
function timingSafeStringEqual(a, b) {
  const bytesA = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(a));
  const bytesB = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(b));
  let diff = 0;
  for (let i = 0; i < bytesA.length; i++) {
    diff |= bytesA[i] ^ bytesB[i];
  }
  return diff === 0;
}

// Simple rate limiter for login attempts, backed by CacheService (shared
// across script executions, ~6hr max TTL — plenty for a 10-minute window).
// Mirrors the same protection already added to log-booking.js, since this
// GAS web app has its own public URL that can be hit directly, bypassing
// Vercel entirely.
const LOGIN_WINDOW_SECONDS = 10 * 60;
const LOGIN_MAX_ATTEMPTS = 8;

function isLoginRateLimited(key) {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'login_attempts_' + key;
  const current = Number(cache.get(cacheKey) || '0');
  if (current >= LOGIN_MAX_ATTEMPTS) return true;
  cache.put(cacheKey, String(current + 1), LOGIN_WINDOW_SECONDS);
  return false;
}

function resetLoginRateLimit(key) {
  CacheService.getScriptCache().remove('login_attempts_' + key);
}

// ================================================================
// OPTIONS handler for CORS preflight
// ================================================================
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ================================================================
// doPost — handles all POST requests
// ================================================================
function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    const action = data.action || '';

    // Public actions
    if (action === 'login')                return jsonOut(handleLogin(data));
    if (action === 'getInvoice')           return jsonOut(handleInvoiceRequest(data));
    if (action === 'getMaintenanceMode')   return jsonOut(getMaintenanceMode());
    if (action === 'checkRoomAvailability') return jsonOut(checkRoomAvailability(data));
    if (action === 'requestCancellation')  return requestCancellation(data);
    if (action === 'createBooking')        return jsonOut(handleBookingSave(data));
    if (action === 'sendAdminNotification') return jsonOut(sendAdminNotificationOnly(data));

    // Verify Booking for Review
    if (action === 'verifyBooking') {
      return jsonOut(handleVerifyBooking(data));
    }

    // Admin actions
    if (action === 'setMaintenanceMode') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(setMaintenanceMode(data));
    }
    if (action === 'getRoomStatus') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(getRoomStatus());
    }
    if (action === 'updateRoomStatus') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(updateRoomStatus(data));
    }
    if (action === 'deleteRoomStatus') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(deleteRoomStatus(data));
    }
    if (action === 'getPriceOverrides') {
      return jsonOut(getPriceOverrides());
    }
    if (action === 'addPriceOverride') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(addPriceOverride(data));
    }
    if (action === 'deletePriceOverride') {
      if (!isAuth(data)) return jsonOut(unauth());
      return jsonOut(deletePriceOverride(data));
    }
    if (action === 'getPendingCancellations') {
      if (!isAuth(data)) return jsonOut(unauth());
      return getPendingCancellations(data);
    }
    if (action === 'confirmRefund') {
      if (!isAuth(data)) return jsonOut(unauth());
      return confirmRefund(data);
    }

    return jsonOut({status:'error', message:'Unknown action: ' + action});

  } catch(err) {
    console.error('FATAL ERROR:', err.toString());
    return jsonOut({status:'error', message:err.toString()});
  }
}

// ================================================================
// doGet — handles all GET requests
// ================================================================
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || '';

  if (action === 'getIcal') {
    return handleGetIcal(e.parameter);
  }

  if (e && e.parameter && e.parameter.test === 'true') {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'ok',
        message: 'MiaCasa API is working',
        timestamp: new Date().toISOString(),
        spreadsheetId: SPREADSHEET_ID
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return jsonOut({
    status: 'ok',
    message: 'MiaCasa API is live',
    timestamp: new Date().toISOString()
  });
}

// ================================================================
// Helper Functions
// ================================================================
function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function isAuth(data) {
  return !!(data && data.token && timingSafeStringEqual(data.token, ADMIN_TOKEN));
}

function unauth() {
  return {status:'error', message:'Unauthorized'};
}

function handleLogin(data) {
  // Rate-limited + timing-safe. NOTE: log-booking.js on Vercel handles admin
  // login itself and never forwards 'login' to this script — this endpoint
  // exists only because the GAS web app URL is independently reachable and
  // was previously unprotected. Hardened rather than removed, since removing
  // it would be an architecture change; this keeps the existing surface but
  // closes the brute-force/timing gaps it had.
  const key = (data && data.username) ? String(data.username) : 'unknown';
  if (isLoginRateLimited(key)) {
    return {status:'error', message:'Too many login attempts. Please try again later.'};
  }
  const usernameOk = data && data.username && timingSafeStringEqual(data.username, ADMIN_USER);
  const passwordOk = data && data.password && timingSafeStringEqual(data.password, ADMIN_PASS);
  if (usernameOk && passwordOk) {
    resetLoginRateLimit(key);
    return {status:'ok', token: ADMIN_TOKEN};
  }
  return {status:'error', message:'Invalid credentials'};
}

// ================================================================
// VERIFY BOOKING FOR REVIEW
// ================================================================
function handleVerifyBooking(data) {
  try {
    const bookingId = data.bookingId ? data.bookingId.toString().trim().toUpperCase() : '';
    
    if (!bookingId) {
      return { status: 'error', message: 'Booking ID is required' };
    }
    
    const sheet = getSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return { status: 'error', message: 'Sheet not found' };
    }
    
    const rows = sheet.getDataRange().getValues();
    
    for (let i = 1; i < rows.length; i++) {
      const existingId = rows[i][COL.bookingId - 1];
      if (existingId && existingId.toString().trim().toUpperCase() === bookingId) {
        const guestName = rows[i][COL.guestName - 1] || '';
        const guestEmail = rows[i][COL.guestEmail - 1] || '';
        const property = rows[i][COL.property - 1] || '';
        const room = rows[i][COL.room - 1] || '';
        const checkIn = rows[i][COL.checkIn - 1] || '';
        const checkOut = rows[i][COL.checkOut - 1] || '';
        const paymentStatus = rows[i][COL.paymentStatus - 1] || '';
        
        const statusLower = paymentStatus.toString().toLowerCase();
        if (statusLower === 'cancelled' || statusLower === 'refunded') {
          return {
            status: 'ok',
            verified: false,
            message: 'This booking has been cancelled or refunded.',
            data: { guestName, guestEmail, property, room }
          };
        }
        
        const checkOutDate = new Date(checkOut);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        checkOutDate.setHours(0, 0, 0, 0);
        
        if (checkOutDate > today) {
          return {
            status: 'ok',
            verified: false,
            message: 'Please leave a review after your stay is completed.',
            data: { guestName, guestEmail, property, room, checkOut }
          };
        }
        
        return {
          status: 'ok',
          verified: true,
          message: 'Booking verified successfully',
          data: {
            guestName: guestName,
            guestEmail: guestEmail,
            property: property,
            room: room,
            checkIn: checkIn,
            checkOut: checkOut,
            paymentStatus: paymentStatus
          }
        };
      }
    }
    
    return {
      status: 'ok',
      verified: false,
      message: 'Booking not found. Please check your Booking ID and try again.'
    };
    
  } catch (error) {
    Logger.log('Error in handleVerifyBooking: ' + error.toString());
    return {
      status: 'error',
      message: 'Error verifying booking: ' + error.toString()
    };
  }
}

// ================================================================
// SAVE PAYMENT PROOF TO GOOGLE DRIVE
// ================================================================

function savePaymentProofToDrive(bookingId, base64Image) {
  try {
    let imageData = base64Image;
    if (base64Image && base64Image.includes(',')) {
      imageData = base64Image.split(',')[1];
    }
    
    const blob = Utilities.newBlob(Utilities.base64Decode(imageData), 'image/jpeg', `${bookingId}_payment_proof.jpg`);
    
    let folder;
    const folders = DriveApp.getFoldersByName('MiaCasa_Payment_Proofs');
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder('MiaCasa_Payment_Proofs');
    }
    
    const file = folder.createFile(blob);
    file.setDescription(`Payment proof for booking ${bookingId} - uploaded by guest`);
    // NOTE: still "anyone with link" so admin can open it from the email
    // notification without needing to be signed into a specific Google
    // account. Flagged as worth revisiting, not changed here since it's a
    // deliberate-looking tradeoff, not a clear bug.
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const fileUrl = file.getUrl();
    
    Logger.log('Payment proof saved:', fileUrl);
    return fileUrl;
    
  } catch (error) {
    Logger.log('Failed to save payment proof:', error);
    return '';
  }
}

// ================================================================
// AVAILABILITY CHECKING
// ================================================================
function checkRoomAvailability(data) {
  try {
    const { room, checkIn, checkOut } = data;
    if (!room || !checkIn || !checkOut) {
      return { available: true, error: 'Missing fields' };
    }
    const bookingsSheet = getSpreadsheet().getSheetByName('Bookings');
    const roomStatusSheet = getSpreadsheet().getSheetByName('RoomStatus');
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (roomStatusSheet) {
      const statusRows = roomStatusSheet.getDataRange().getValues();
      for (let i = 1; i < statusRows.length; i++) {
        const statusRoom = statusRows[i][1];
        const fromDate = new Date(statusRows[i][2]);
        const toDate = new Date(statusRows[i][3]);
        const status = statusRows[i][4];
        if (statusRoom === room && status === 'closed') {
          if (checkInDate < toDate && checkOutDate > fromDate) {
            return { available: false, reason: 'Room is blocked' };
          }
        }
      }
    }

    if (bookingsSheet) {
      const bookingRows = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bookingRows.length; i++) {
        // FIX: was using raw indices (3/5/6/15) instead of the COL map,
        // the one place in the file bypassing it. Now consistent with
        // every other function here.
        const bookingRoom = bookingRows[i][COL.room - 1];
        const bookingCheckIn = new Date(bookingRows[i][COL.checkIn - 1]);
        const bookingCheckOut = new Date(bookingRows[i][COL.checkOut - 1]);
        const paymentStatus = bookingRows[i][COL.paymentStatus - 1];
        if (paymentStatus === 'cancelled') continue;
        if (bookingRoom === room) {
          if (checkInDate < bookingCheckOut && checkOutDate > bookingCheckIn) {
            return { available: false };
          }
        }
      }
    }
    return { available: true };
  } catch (error) {
    console.error('Availability check error:', error);
    return { available: true };
  }
}

// ================================================================
// BOOKING SAVE
// ================================================================
function handleBookingSave(data) {
  const sheet = getOrCreateSheet();
  const amountVND = Number(data.amount) || 0;

  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    const ids = sheet.getRange(2, COL.bookingId, lastRow - 1).getValues();
    if (ids.some(r => r[0] === data.bookingId)) {
      return {status:'error', message:'Duplicate booking ID'};
    }
  }

  const guestLanguage = detectGuestLanguage(data);
  data.language = guestLanguage;

  let paymentProofUrl = '';
  if (data.paymentProof && data.paymentMethod === 'vietqr') {
    paymentProofUrl = savePaymentProofToDrive(data.bookingId, data.paymentProof);
    Logger.log('Payment proof saved to:', paymentProofUrl);
  }

  sheet.appendRow([
    new Date(),
    data.bookingId||'', data.property||'', data.room||'',
    data.checkIn||'', data.checkOut||'',
    Number(data.nights)||'', Number(data.guests)||'',
    amountVND, (amountVND/EXCHANGE_RATE).toFixed(2),
    data.guestName||'', data.guestEmail||'', data.guestPhone||'',
    data.paymentMethod||'', data.bookedAt||'',
    data.paymentStatus||'pending', 'NO', 'NO',
    '', '', '', '', '', '',
    paymentProofUrl
  ]);

  const newRow = sheet.getLastRow();

  const phoneCell = sheet.getRange(newRow, COL.guestPhone);
  phoneCell.setNumberFormat('@STRING@');
  phoneCell.setValue(data.guestPhone||'');

  colorCodeRow(sheet, newRow, data.property||'', data.paymentStatus||'pending', 'NO', 'NO');
  sheet.autoResizeColumns(1, HEADERS.length);

  // FIX: PayPal (and any other non-cash, non-pending-vietqr method) used to
  // fall through to sendNewBookingEmail(), which only sent a literal
  // "TEST BODY" placeholder to the admin and NOTHING to the guest. Now every
  // payment path sends the real bilingual confirmation to both guest and
  // admin via sendConfirmationToGuest, which has been generalized to label
  // the payment method correctly instead of assuming "cash".
  if (data.paymentMethod === 'vietqr' && data.paymentStatus === 'pending_verification') {
    sendPaymentPendingEmailToGuest(data, paymentProofUrl);
  } else {
    sendConfirmationToGuest(data);
  }

  return {status:'ok', bookingId:data.bookingId};
}

// ================================================================
// COLOR CODING
// ================================================================
function colorCodeRow(sheet, rowNum, property, paymentStatus, paymentSent, checkinSent) {
  sheet.getRange(rowNum, 1, 1, HEADERS.length)
    .setBackground((property||'').toLowerCase().includes('oldquarter') ? COLORS.oldquarter.bg : COLORS.hanoi.bg);

  const s = (paymentStatus||'pending').toLowerCase();
  const sc = ['paid','pay','payed','done'].includes(s) ? COLORS.paid
           : s==='cancelled' ? COLORS.cancelled
           : s==='refunded'  ? COLORS.refunded
           : COLORS.pending;
  sheet.getRange(rowNum, COL.paymentStatus).setBackground(sc.bg).setFontColor(sc.text).setFontWeight('bold');

  const psc = (paymentSent||'').toUpperCase()==='YES' ? COLORS.yes : COLORS.no;
  sheet.getRange(rowNum, COL.paymentSent).setBackground(psc.bg).setFontColor(psc.text).setFontWeight('bold');

  const csc = (checkinSent||'').toUpperCase()==='YES' ? COLORS.yes : COLORS.no;
  sheet.getRange(rowNum, COL.checkinSent).setBackground(csc.bg).setFontColor(csc.text).setFontWeight('bold');

  sheet.getRange(rowNum, COL.amountVND).setFontWeight('bold');
  sheet.getRange(rowNum, COL.bookingId).setFontWeight('bold');
}

function recolorAllRows() {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  for (let r = 2; r <= lastRow; r++) {
    colorCodeRow(sheet, r,
      sheet.getRange(r, COL.property).getValue(),
      sheet.getRange(r, COL.paymentStatus).getValue(),
      sheet.getRange(r, COL.paymentSent).getValue(),
      sheet.getRange(r, COL.checkinSent).getValue()
    );
  }
}

function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  if (sheet.getName() !== SHEET_NAME) return;
  const row = e.range.getRow();
  if (row === 1) return;
  colorCodeRow(sheet, row,
    sheet.getRange(row, COL.property).getValue(),
    sheet.getRange(row, COL.paymentStatus).getValue(),
    sheet.getRange(row, COL.paymentSent).getValue(),
    sheet.getRange(row, COL.checkinSent).getValue()
  );
}

// ================================================================
// ROOM STATUS
// ================================================================
function getRoomSheet() {
  const ss = getSpreadsheet();
  let s = ss.getSheetByName('RoomStatus');
  if (!s) { s = ss.insertSheet('RoomStatus'); s.appendRow(['ID','Room','From','To','Status','Note']); }
  return s;
}

function getRoomStatus() {
  const sheet = getRoomSheet();
  const rows = sheet.getDataRange().getValues().slice(1);
  return {status:'ok', data:rows};
}

function updateRoomStatus(data) {
  if (!data.room || !data.from || !data.to || !data.status)
    return {status:'error', message:'Missing fields'};
  const sheet = getRoomSheet();
  const id = Date.now();
  sheet.appendRow([id, data.room, data.from, data.to, data.status, data.note||'']);
  return {status:'ok', id};
}

function deleteRoomStatus(data) {
  const sheet = getRoomSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.id)) { sheet.deleteRow(i + 1); return {status:'ok'}; }
  }
  return {status:'error', message:'Not found'};
}

// ================================================================
// PRICE OVERRIDES
// ================================================================
function getPriceSheet() {
  const ss = getSpreadsheet();
  let s = ss.getSheetByName('PriceOverrides');
  if (!s) { s = ss.insertSheet('PriceOverrides'); s.appendRow(['ID','Room','From','To','Price','Note']); }
  return s;
}

function getPriceOverrides() {
  const rows = getPriceSheet().getDataRange().getValues().slice(1);
  return {status:'ok', data:rows};
}

function addPriceOverride(data) {
  if (!data.room || !data.from || !data.to || !data.price)
    return {status:'error', message:'Missing fields'};
  const id = Date.now();
  getPriceSheet().appendRow([id, data.room, data.from, data.to, data.price, data.note||'']);
  return {status:'ok', id};
}

function deletePriceOverride(data) {
  const sheet = getPriceSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.id)) { sheet.deleteRow(i + 1); return {status:'ok'}; }
  }
  return {status:'error', message:'Not found'};
}

// ================================================================
// MAINTENANCE MODE
// ================================================================
function getOrCreateConfigSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName('Config');
  if (!sheet) {
    sheet = ss.insertSheet('Config');
    sheet.appendRow(['Key', 'Value']);
    sheet.appendRow(['maintenance', 'off']);
  }
  return sheet;
}

function getMaintenanceMode() {
  const sheet = getOrCreateConfigSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === 'maintenance') {
      return { status: 'ok', value: String(rows[i][1]).toLowerCase() };
    }
  }
  return { status: 'ok', value: 'off' };
}

function setMaintenanceMode(data) {
  const sheet = getOrCreateConfigSheet();
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === 'maintenance') {
      sheet.getRange(i + 1, 2).setValue(data.value);
      return { status: 'ok' };
    }
  }
  sheet.appendRow(['maintenance', data.value]);
  return { status: 'ok' };
}

// ================================================================
// ICAL GENERATOR
// ================================================================
function handleGetIcal(params) {
  const room = (params.room || '').trim();
  if (!room) {
    return ContentService
      .createTextOutput('ERROR: room parameter required')
      .setMimeType(ContentService.MimeType.TEXT);
  }

  const lines = [];
  lines.push('BEGIN:VCALENDAR');
  lines.push('VERSION:2.0');
  lines.push('PRODID:-//MiaCasa Homestays//EN');
  lines.push('CALSCALE:GREGORIAN');
  lines.push('METHOD:PUBLISH');
  lines.push('X-WR-CALNAME:MiaCasa - ' + room);
  lines.push('X-WR-TIMEZONE:Asia/Ho_Chi_Minh');

  const now = fmtIcalDate(new Date());

  const bookSheet = getSpreadsheet().getSheetByName(SHEET_NAME);
  if (bookSheet) {
    const rows = bookSheet.getDataRange().getValues().slice(1);
    rows.forEach(function(row) {
      const rowRoom = (row[COL.room-1]||'').trim();
      const bookingId = row[COL.bookingId-1]||'';
      const checkIn = row[COL.checkIn-1];
      const checkOut = row[COL.checkOut-1];
      const guestName = row[COL.guestName-1]||'Guest';
      const status = (row[COL.paymentStatus-1]||'').toLowerCase();
      if (rowRoom !== room || status === 'cancelled' || !checkIn || !checkOut) return;

      lines.push('BEGIN:VEVENT');
      lines.push('UID:booking-' + bookingId + '@miacasahanoi.com');
      lines.push('DTSTAMP:' + now);
      lines.push('DTSTART;VALUE=DATE:' + fmtIcalDateOnly(new Date(checkIn)));
      lines.push('DTEND;VALUE=DATE:' + fmtIcalDateOnly(new Date(checkOut)));
      lines.push('SUMMARY:BOOKED - ' + guestName);
      lines.push('DESCRIPTION:Booking ID: ' + bookingId);
      lines.push('STATUS:CONFIRMED');
      lines.push('END:VEVENT');
    });
  }

  const roomSheet = getSpreadsheet().getSheetByName('RoomStatus');
  if (roomSheet) {
    const rows = roomSheet.getDataRange().getValues().slice(1);
    rows.forEach(function(row, idx) {
      const rowRoom = (row[1]||'').trim();
      const from = row[2];
      const to = row[3];
      const status = (row[4]||'').toLowerCase();
      const note = row[5]||'Blocked';
      const id = row[0]||idx;
      if (rowRoom !== room || status !== 'closed' || !from || !to) return;

      const toDate = new Date(to);
      toDate.setDate(toDate.getDate() + 1);

      lines.push('BEGIN:VEVENT');
      lines.push('UID:closure-' + id + '@miacasahanoi.com');
      lines.push('DTSTAMP:' + now);
      lines.push('DTSTART;VALUE=DATE:' + fmtIcalDateOnly(new Date(from)));
      lines.push('DTEND;VALUE=DATE:' + fmtIcalDateOnly(toDate));
      lines.push('SUMMARY:NOT AVAILABLE - ' + note);
      lines.push('STATUS:CONFIRMED');
      lines.push('END:VEVENT');
    });
  }

  lines.push('END:VCALENDAR');

  return ContentService
    .createTextOutput(lines.join('\r\n'))
    .setMimeType(ContentService.MimeType.ICAL);
}

function fmtIcalDate(d) {
  return d.getUTCFullYear()
    + pad(d.getUTCMonth()+1)
    + pad(d.getUTCDate())
    + 'T'
    + pad(d.getUTCHours())
    + pad(d.getUTCMinutes())
    + pad(d.getUTCSeconds())
    + 'Z';
}

function fmtIcalDateOnly(d) {
  return d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate());
}

function pad(n) { return n < 10 ? '0'+n : String(n); }

// ================================================================
// INVOICE
// ================================================================
function handleInvoiceRequest(data) {
  const sheet = getSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) return {status:'error', message:'Sheet not found.'};
  const rows = sheet.getDataRange().getValues();
  const today = new Date(); today.setHours(0,0,0,0);

  for (let i = 1; i < rows.length; i++) {
    const bookingId = rows[i][COL.bookingId-1];
    const guestEmail = (rows[i][COL.guestEmail-1]||'').toLowerCase();
    const checkOut = new Date(rows[i][COL.checkOut-1]); checkOut.setHours(0,0,0,0);
    const payStatus = (rows[i][COL.paymentStatus-1]||'').toLowerCase();

    if (bookingId === data.bookingId && guestEmail === (data.email||'').toLowerCase()) {
      if (checkOut > today) return {status:'error', message:'Invoice available only after checkout.'};
      if (payStatus === 'cancelled') { sendInvoiceEmail(rows[i], true); return {status:'success'}; }
      if (!['paid','pay','payed','done'].includes(payStatus)) return {status:'error', message:'Payment not completed yet.'};
      sendInvoiceEmail(rows[i], false);
      return {status:'success'};
    }
  }
  return {status:'error', message:'Booking not found or email mismatch.'};
}

function sendInvoiceEmail(row, isCancelled) {
  const bookingId = row[COL.bookingId-1], guestName = row[COL.guestName-1], email = row[COL.guestEmail-1];
  const amount = isCancelled ? 0 : row[COL.amountVND-1];
  const vnd = Number(amount).toLocaleString('vi-VN'), usd = (Number(amount)/EXCHANGE_RATE).toFixed(0);

  const doc = DocumentApp.create('Invoice_'+bookingId);
  const body = doc.getBody();
  body.appendParagraph('MiaCasa Homestays — Invoice').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('');
  const table = body.appendTable([
    ['Booking ID', bookingId], ['Guest Name', guestName],
    ['Property', row[COL.property-1]], ['Room', row[COL.room-1]],
    ['Check-in', String(row[COL.checkIn-1])], ['Check-out', String(row[COL.checkOut-1])],
    ['Guests', String(row[COL.guests-1])],
    ['Total Paid', isCancelled ? 'CANCELLED' : vnd+'₫ (~$'+usd+' USD)'],
  ]);
  table.setBorderWidth(0.5);
  for (let r = 0; r < table.getNumRows(); r++) table.getCell(r, 0).setBackgroundColor('#f5efe6').setBold(true);
  if (isCancelled) body.appendParagraph('\nNOTE: Booking was cancelled.').setForegroundColor('#991B1B');
  body.appendParagraph('\nThank you for staying with MiaCasa Homestays!').setItalic(true);
  doc.saveAndClose();
  const pdf = DriveApp.getFileById(doc.getId()).getAs('application/pdf');
  MailApp.sendEmail({
    to: email,
    subject: 'Invoice — ' + bookingId + ' | MiaCasa Homestays',
    body: 'Hi ' + guestName + ',\n\nPlease find your invoice attached.\n\nWarm regards,\nMiaCasa Homestays',
    attachments: [pdf]
  });
  DriveApp.getFileById(doc.getId()).setTrashed(true);
}

// ================================================================
// SHEET HELPERS
// ================================================================
function getOrCreateSheet() {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    const hr = sheet.getRange(1, 1, 1, HEADERS.length);
    hr.setFontWeight('bold').setBackground(COLORS.header.bg).setFontColor(COLORS.header.text);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// ================================================================
// CANCELLATION MANAGEMENT
// ================================================================
function requestCancellation(data) {
  const { bookingId, guestEmail, guestName, reason } = data;
  const sheet = getOrCreateSheet();
  const rows = sheet.getDataRange().getValues();

  let bookingFound = false;
  let rowIndex = -1;
  let bookingRow = null;

  for (let i = 1; i < rows.length; i++) {
    const existingId = rows[i][COL.bookingId - 1];
    if (existingId && existingId.toString() === bookingId) {
      bookingFound = true;
      rowIndex = i;
      bookingRow = rows[i];
      break;
    }
  }

  if (!bookingFound) {
    return jsonOut({ status: 'error', message: 'Booking ID not found. Please check and try again.' });
  }

  const existingEmail = bookingRow[COL.guestEmail - 1] || '';
  if (existingEmail.toLowerCase() !== guestEmail.toLowerCase()) {
    return jsonOut({ status: 'error', message: 'Booking ID and email do not match.' });
  }

  const existingName = (bookingRow[COL.guestName - 1] || '').toLowerCase();
  if (!existingName.includes(guestName.toLowerCase())) {
    return jsonOut({ status: 'error', message: 'Booking ID and name do not match.' });
  }

  const paymentStatus = (bookingRow[COL.paymentStatus - 1] || '').toLowerCase();
  if (paymentStatus === 'cancelled' || paymentStatus === 'refunded') {
    return jsonOut({ status: 'error', message: 'This booking has already been cancelled.' });
  }

  const checkInDate = new Date(bookingRow[COL.checkIn - 1]);
  const today = new Date();
  if (checkInDate < today) {
    return jsonOut({ status: 'error', message: 'Cannot cancel a booking after check-in date.' });
  }

  const hoursUntilCheckIn = (checkInDate - today) / (1000 * 60 * 60);
  const isFreeCancellation = hoursUntilCheckIn >= 48;
  const amount = Number(bookingRow[COL.amountVND - 1]) || 0;

  ensureCancellationColumns(sheet);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const cancellationRequestedCol = headers.indexOf('Cancellation Requested') + 1;
  const cancellationDateCol = headers.indexOf('Cancellation Date') + 1;
  const refundNoteCol = headers.indexOf('Refund Note') + 1;

  if (cancellationRequestedCol > 0) sheet.getRange(rowIndex + 1, cancellationRequestedCol).setValue('PENDING');
  if (cancellationDateCol > 0) sheet.getRange(rowIndex + 1, cancellationDateCol).setValue(new Date().toISOString());
  if (refundNoteCol > 0) sheet.getRange(rowIndex + 1, refundNoteCol).setValue(`Cancellation requested: ${reason || 'No reason'} | Free eligible: ${isFreeCancellation}`);

  try {
    const guestPhone = getGuestPhoneFromRow(bookingRow);
    MailApp.sendEmail({
      to: ADMIN_USER,
      subject: `⚠️ CANCELLATION REQUEST: ${bookingId}`,
      body: `CANCELLATION REQUEST\n\nBooking ID: ${bookingId}\nGuest: ${guestName}\nEmail: ${guestEmail}\nProperty: ${bookingRow[COL.property-1]||''}\nCheck-in: ${bookingRow[COL.checkIn-1]||''}\nCheck-out: ${bookingRow[COL.checkOut-1]||''}\nAmount: ${amount.toLocaleString('vi-VN')}₫\nFree eligible: ${isFreeCancellation ? 'YES' : 'NO'}\nReason: ${reason||'Not given'}\n\nSheet: ${getSheetUrl()}\nWhatsApp: https://wa.me/${guestPhone||'84869922261'}`
    });
  } catch(e) { console.log('Admin email error:', e); }

  try {
    MailApp.sendEmail({
      to: guestEmail,
      subject: isFreeCancellation ? `✅ Free Cancellation Confirmed - ${bookingId}` : `⚠️ Cancellation Request Received - ${bookingId}`,
      body: `Dear ${guestName},\n\nWe received your cancellation request for booking ${bookingId}.\n\n${isFreeCancellation ? `You are eligible for a FULL REFUND of ${amount.toLocaleString('vi-VN')}₫. The host will process your refund within 3-5 business days.` : `Your check-in is within 48 hours so a cancellation fee may apply. The host will contact you within 24 hours.`}\n\nQuestions? WhatsApp: +84 869 922 261\n\nBest regards,\nLinh & Ngọc\nMiaCasa Homestays`
    });
  } catch(e) { console.log('Guest email error:', e); }

  return jsonOut({
    status: 'pending',
    message: isFreeCancellation
      ? 'Free cancellation confirmed. Your refund will be processed within 3-5 business days.'
      : 'Cancellation request submitted. Host will review within 24 hours.',
    isFreeCancellation: isFreeCancellation
  });
}

function getPendingCancellations(data) {
  const sheet = getOrCreateSheet();
  const rows = sheet.getDataRange().getValues();
  const headers = rows[0];

  const cancellationRequestedCol = headers.indexOf('Cancellation Requested');
  if (cancellationRequestedCol === -1) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'ok', cancellations: [] })).setMimeType(ContentService.MimeType.JSON);
  }

  const pending = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][cancellationRequestedCol] === 'PENDING') {
      pending.push({
        bookingId: rows[i][COL.bookingId-1]||'',
        guestName: rows[i][COL.guestName-1]||'',
        guestEmail: rows[i][COL.guestEmail-1]||'',
        property: rows[i][COL.property-1]||'',
        room: rows[i][COL.room-1]||'',
        checkIn: rows[i][COL.checkIn-1]||'',
        amount: rows[i][COL.amountVND-1]||0,
        paymentMethod: rows[i][COL.paymentMethod-1]||''
      });
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', cancellations: pending })).setMimeType(ContentService.MimeType.JSON);
}

function ensureCancellationColumns(sheet) {
  let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const neededColumns = ['Cancellation Requested','Cancellation Date','Refund Processed','Refund Amount','Refund Date','Refund Note'];
  let lastCol = sheet.getLastColumn();
  neededColumns.forEach(colName => {
    if (!headers.includes(colName)) {
      sheet.getRange(1, lastCol + 1).setValue(colName);
      lastCol++;
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    }
  });
}

function confirmRefund(data) {
  const { bookingId, refundAmount, refundNote } = data;
  if (!bookingId) return jsonOut({ status: 'error', message: 'Booking ID required' });

  const sheet = getOrCreateSheet();
  const rows = sheet.getDataRange().getValues();
  let bookingRowIndex = -1;
  let bookingRow = null;

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][COL.bookingId - 1] === bookingId) {
      bookingRowIndex = i;
      bookingRow = rows[i];
      break;
    }
  }

  if (bookingRowIndex === -1) return jsonOut({ status: 'error', message: 'Booking not found' });

  const guestEmail = bookingRow[COL.guestEmail-1];
  const guestName = bookingRow[COL.guestName-1];
  const amount = refundAmount || bookingRow[COL.amountVND-1];
  const paymentMethod = bookingRow[COL.paymentMethod-1];

  sheet.getRange(bookingRowIndex + 1, COL.paymentStatus).setValue('refunded');

  const headers = rows[0];
  const cancellationRequestedCol = headers.indexOf('Cancellation Requested') + 1;
  const refundProcessedCol = headers.indexOf('Refund Processed') + 1;
  const refundAmountCol = headers.indexOf('Refund Amount') + 1;
  const refundDateCol = headers.indexOf('Refund Date') + 1;
  const refundNoteCol2 = headers.indexOf('Refund Note') + 1;

  if (cancellationRequestedCol > 0) sheet.getRange(bookingRowIndex + 1, cancellationRequestedCol).setValue('COMPLETED');
  if (refundProcessedCol > 0) sheet.getRange(bookingRowIndex + 1, refundProcessedCol).setValue('YES');
  if (refundAmountCol > 0) sheet.getRange(bookingRowIndex + 1, refundAmountCol).setValue(amount);
  if (refundDateCol > 0) sheet.getRange(bookingRowIndex + 1, refundDateCol).setValue(new Date().toISOString());
  if (refundNoteCol2 > 0) sheet.getRange(bookingRowIndex + 1, refundNoteCol2).setValue(`Refund processed: ${refundNote||'By admin'}`);

  try {
    MailApp.sendEmail({
      to: guestEmail,
      subject: `✅ Refund Confirmed - Booking ${bookingId}`,
      body: `Dear ${guestName},\n\nYour refund for booking ${bookingId} has been processed.\n\nAmount: ${Number(amount).toLocaleString('vi-VN')}₫\nPayment method: ${paymentMethod}\n\nPlease allow 3-7 business days for the refund to appear.\n\nBest regards,\nMiaCasa Homestays`
    });
  } catch(e) { console.log('Email error:', e); }

  return jsonOut({ status: 'ok', message: 'Refund confirmed. Guest notified.' });
}

// ================================================================
// EMAIL NOTIFICATIONS
// ================================================================

// FIX: this used to be split into a broken sendNewBookingEmail() (PayPal —
// sent only a "TEST BODY" placeholder to admin, nothing to guest) and a
// working sendConfirmationToGuest() (cash only, with "NEW CASH BOOKING"
// hardcoded into the admin notification). Consolidated into one function
// that handles any payment method correctly, with the admin notification
// subject/body now built from the actual payment method instead of assuming
// cash. sendNewBookingEmail() has been removed — nothing else called it
// except test helpers, which now call this instead.

function paymentMethodLabel(method, lang) {
  if (method === 'paypal') return 'PayPal';
  if (method === 'vietqr') return lang === 'vn' ? 'Chuyển khoản ngân hàng' : 'Bank Transfer';
  if (method === 'cash') return lang === 'vn' ? 'Tiền mặt (Thanh toán tại chỗ)' : 'Cash (Pay at Property)';
  return method || (lang === 'vn' ? 'Đang xử lý' : 'Pending');
}

function sendConfirmationToGuest(bookingData) {
  const recipient = bookingData.guestEmail;
  if (!recipient) return;

  const lang = bookingData.language || detectGuestLanguage(bookingData);
  
  const checkInDate = bookingData.checkIn ? new Date(bookingData.checkIn) : null;
  let cancellationDeadline = 'N/A';
  if (checkInDate && !isNaN(checkInDate)) {
    const deadline = new Date(checkInDate);
    deadline.setDate(deadline.getDate() - 2);
    cancellationDeadline = deadline.toLocaleDateString(lang === 'vn' ? 'vi-VN' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  const propertyName = bookingData.property || 'MiaCasa Homestays';
  const checkOutTime = propertyName.includes('Old Quarter') 
    ? (lang === 'vn' ? '11:00 sáng' : '11:00 AM') 
    : (lang === 'vn' ? '12:00 trưa' : '12:00 PM');
  
  const isOldQuarter = propertyName.includes('Old Quarter');
  const propertyUrl = isOldQuarter 
    ? 'https://miacasahanoi.com/miacasa-oldquarter'
    : 'https://miacasahanoi.com/miacasa-hanoi';

  const subject = lang === 'vn'
    ? `✨ Xác Nhận Đặt Phòng: ${bookingData.bookingId} | MiaCasa Homestays`
    : `✨ Booking Confirmed: ${bookingData.bookingId} | MiaCasa Homestays`;

  const paymentLabel = paymentMethodLabel(bookingData.paymentMethod, lang);

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Booking Confirmation</title></head>
<body style="font-family:Georgia,serif;background:#faf6f0;padding:20px;margin:0;">
<div style="max-width:680px;margin:0 auto;background:white;border-radius:24px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.05);">
<div style="background:linear-gradient(135deg,#2c2416 0%,#c17a5a 100%);padding:2rem;text-align:center;color:white;">
<div style="font-size:2rem;letter-spacing:8px;opacity:0.4;margin-bottom:0.5rem;">✿ ✤ ✿</div>
<h1 style="font-size:1.5rem;font-weight:300;">MiaCasa <span style="font-weight:600;">Homestays</span></h1>
<div style="font-size:1.8rem;font-weight:300;margin-top:0.5rem;">${lang === 'vn' ? `Xin chào ${bookingData.guestName || 'Quý khách'},` : `Hi ${bookingData.guestName || 'Guest'},`}</div>
</div>
<div style="padding:0 2rem 2rem;">
<p style="font-size:1rem;color:#2c2416;text-align:center;margin:0.5rem 0;font-weight:500;">✨ ${lang === 'vn' ? 'Đặt phòng của bạn đã được xác nhận ✨' : 'Your booking is confirmed ✨'}</p>
<div style="text-align:center;padding:1rem 0 0.5rem;font-size:1rem;letter-spacing:6px;color:#c17a5a;">✤ ✿ ✤</div>
<div style="font-size:0.75rem;letter-spacing:3px;text-transform:uppercase;color:#c17a5a;margin:1.5rem 0 0.75rem;">✦ ${lang === 'vn' ? 'CHI TIẾT ĐẶT PHÒNG' : 'BOOKING DETAILS'} ✦</div>
<div style="background:#f5efe6;border-radius:16px;padding:1.25rem;margin:0.5rem 0;">
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">🆔 ${lang === 'vn' ? 'Mã đặt phòng' : 'Booking ID'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.bookingId || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📍 ${lang === 'vn' ? 'Chỗ nghỉ' : 'Property'}:</span><span style="color:#2c2416;font-weight:600;">${propertyName}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">🛏 ${lang === 'vn' ? 'Phòng' : 'Room'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.room || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📅 ${lang === 'vn' ? 'Nhận phòng' : 'Check-in'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.checkIn || 'N/A'} ${lang === 'vn' ? '(từ 14:00)' : '(from 2:00 PM)'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📅 ${lang === 'vn' ? 'Trả phòng' : 'Check-out'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.checkOut || 'N/A'} ${lang === 'vn' ? `(trước ${checkOutTime})` : `(by ${checkOutTime})`}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">👥 ${lang === 'vn' ? 'Số khách' : 'Guests'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.guests || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">💰 ${lang === 'vn' ? 'Tổng tiền' : 'Total'}:</span><span style="color:#2c2416;font-weight:600;">${formatCurrency(bookingData.amount, 'VND')}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;"><span style="color:#6b5c47;font-weight:500;">💳 ${lang === 'vn' ? 'Thanh toán' : 'Payment'}:</span><span style="color:#2c2416;font-weight:600;">${paymentLabel}</span></div>
</div>
<a href="${propertyUrl}" style="display:block;background:#c17a5a;color:white;text-align:center;padding:1rem;border-radius:50px;text-decoration:none;font-size:1rem;font-weight:500;margin:1.5rem 0;">🌿 ${lang === 'vn' ? 'Khám phá chi tiết chỗ nghỉ →' : 'View property details →'}</a>
<div style="background:#f5efe6;border-left:3px solid #c17a5a;padding:1rem 1.25rem;margin:1.25rem 0;font-size:0.9rem;font-style:italic;color:#6b5c47;border-radius:0 12px 12px 0;">✨ <strong>${lang === 'vn' ? 'Mã đặt phòng:' : 'Booking ID:'} ${bookingData.bookingId}</strong><br>${lang === 'vn' ? 'Trả lời email này bất cứ lúc nào nếu bạn cần hỗ trợ.' : 'Simply reply to this email anytime if you need anything before your arrival.'}</div>
</div>
<div style="background:#faf6f0;padding:1.5rem;text-align:center;border-top:1px solid #e0ddd5;">
<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;">
<a href="https://miacasahanoi.com/miacasa-hanoi" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">MiaCasa Hanoi</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/miacasa-oldquarter" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">MiaCasa Old Quarter</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/our-story" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">Our Story</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/#contact" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">Contact</a>
</div>
<div style="margin:1rem 0;"><a href="https://www.instagram.com/miacasahanoi/" style="text-decoration:none;font-size:1.2rem;margin:0 0.5rem;opacity:0.6;">📷</a><a href="https://www.facebook.com/profile.php?id=61558873260616" style="text-decoration:none;font-size:1.2rem;margin:0 0.5rem;opacity:0.6;">📘</a></div>
<div style="font-size:0.6rem;color:#b0a088;">© 2025 MiaCasa Homestays · Made with ♡ in Hanoi<br><a href="https://miacasahanoi.com" style="color:#b0a088;text-decoration:none;">miacasahanoi.com</a></div>
</div>
</div>
</body>
</html>`;

  const textBody = lang === 'vn' 
    ? `Xin chào ${bookingData.guestName || 'Quý khách'},

Cảm ơn bạn đã chọn MiaCasa Homestays! Đặt phòng của bạn đã được xác nhận.

Mã đặt phòng: ${bookingData.bookingId || 'N/A'}
Chỗ nghỉ: ${propertyName}
Phòng: ${bookingData.room || 'N/A'}
Nhận phòng: ${bookingData.checkIn || 'N/A'} (từ 14:00)
Trả phòng: ${bookingData.checkOut || 'N/A'} (trước ${checkOutTime})
Số đêm: ${bookingData.nights || 'N/A'}
Số khách: ${bookingData.guests || 'N/A'}
Tổng tiền: ${formatCurrency(bookingData.amount, 'VND')}
Thanh toán: ${paymentLabel}

Chúng tôi sẽ gửi hướng dẫn nhận phòng qua WhatsApp 24 giờ trước khi bạn đến.
WhatsApp: +84 869 922 261

Hủy miễn phí đến: ${cancellationDeadline}
Để hủy: https://miacasahanoi.com/cancel-booking

Trân trọng,
Linh & Ngọc — MiaCasa Homestays
https://miacasahanoi.com`

    : `Dear ${bookingData.guestName || 'Guest'},

Thank you for choosing MiaCasa Homestays! Your booking is confirmed.

Booking ID: ${bookingData.bookingId || 'N/A'}
Property: ${propertyName}
Room: ${bookingData.room || 'N/A'}
Check-in: ${bookingData.checkIn || 'N/A'} (from 2:00 PM)
Check-out: ${bookingData.checkOut || 'N/A'} (by ${checkOutTime})
Nights: ${bookingData.nights || 'N/A'}
Guests: ${bookingData.guests || 'N/A'}
Total: ${formatCurrency(bookingData.amount, 'VND')}
Payment: ${paymentLabel}

We will send check-in instructions via WhatsApp 24 hours before your arrival.
WhatsApp: +84 869 922 261

Free cancellation until: ${cancellationDeadline}
To cancel: https://miacasahanoi.com/cancel-booking

Warm regards,
Linh & Ngọc — MiaCasa Homestays
https://miacasahanoi.com`;

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody
  });
  
  // Admin notification — subject/body now driven by the real payment
  // method instead of being hardcoded to "CASH BOOKING" regardless of how
  // the guest actually paid.
  const methodTag = (bookingData.paymentMethod || 'unknown').toUpperCase();
  const adminSubject = lang === 'vn'
    ? `💰 ĐẶT PHÒNG MỚI (${methodTag}): ${bookingData.bookingId}`
    : `💰 NEW BOOKING (${methodTag}): ${bookingData.bookingId}`;

  const adminBody = lang === 'vn'
    ? `ĐẶT PHÒNG MỚI

Mã đặt phòng: ${bookingData.bookingId}
Khách: ${bookingData.guestName}
Email: ${bookingData.guestEmail}
Điện thoại: ${bookingData.guestPhone}
Chỗ nghỉ: ${bookingData.property}
Phòng: ${bookingData.room}
Nhận phòng: ${bookingData.checkIn}
Trả phòng: ${bookingData.checkOut}
Số khách: ${bookingData.guests}
Số tiền: ${formatCurrency(bookingData.amount, 'VND')}

Phương thức thanh toán: ${paymentLabel}

Sheet: ${getSheetUrl()}
WhatsApp: https://wa.me/${(bookingData.guestPhone || '84869922261').replace(/[^0-9]/g, '')}

--- 
Vui lòng kiểm tra và cập nhật trạng thái đặt phòng trong spreadsheet.`
    : `NEW BOOKING

Booking ID: ${bookingData.bookingId}
Guest: ${bookingData.guestName}
Email: ${bookingData.guestEmail}
Phone: ${bookingData.guestPhone}
Property: ${bookingData.property}
Room: ${bookingData.room}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Guests: ${bookingData.guests}
Amount: ${formatCurrency(bookingData.amount, 'VND')}

Payment Method: ${paymentLabel}

Sheet: ${getSheetUrl()}
WhatsApp: https://wa.me/${(bookingData.guestPhone || '84869922261').replace(/[^0-9]/g, '')}

---
Please verify and update booking status in the spreadsheet.`;

  MailApp.sendEmail(ADMIN_USER, adminSubject, adminBody);
}

function sendPaymentPendingEmailToGuest(bookingData, paymentProofUrl) {
  const recipient = bookingData.guestEmail;
  if (!recipient) return;
  
  const lang = bookingData.language || detectGuestLanguage(bookingData);
  const checkInDate = bookingData.checkIn ? new Date(bookingData.checkIn) : null;
  let cancellationDeadline = 'N/A';
  if (checkInDate && !isNaN(checkInDate)) {
    const deadline = new Date(checkInDate);
    deadline.setDate(deadline.getDate() - 2);
    cancellationDeadline = deadline.toLocaleDateString(lang === 'vn' ? 'vi-VN' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  const propertyName = bookingData.property || 'MiaCasa Homestays';
  const checkOutTime = propertyName.includes('Old Quarter') 
    ? (lang === 'vn' ? '11:00 sáng' : '11:00 AM') 
    : (lang === 'vn' ? '12:00 trưa' : '12:00 PM');
  
  const isOldQuarter = propertyName.includes('Old Quarter');
  const propertyUrl = isOldQuarter 
    ? 'https://miacasahanoi.com/miacasa-oldquarter'
    : 'https://miacasahanoi.com/miacasa-hanoi';

  const subject = lang === 'vn'
    ? `⏳ Đang xác nhận thanh toán - ${bookingData.bookingId} | MiaCasa`
    : `⏳ Payment Verification Pending - ${bookingData.bookingId} | MiaCasa`;

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Payment Pending | MiaCasa Homestays</title></head>
<body style="font-family:Georgia,serif;background:#faf6f0;padding:20px;margin:0;">
<div style="max-width:680px;margin:0 auto;background:white;border-radius:24px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.05);">
<div style="background:linear-gradient(135deg,#2c2416 0%,#c17a5a 100%);padding:2rem;text-align:center;color:white;">
<div style="font-size:2rem;letter-spacing:8px;opacity:0.4;margin-bottom:0.5rem;">✿ ✤ ✿</div>
<h1 style="font-size:1.5rem;font-weight:300;">MiaCasa <span style="font-weight:600;">Homestays</span></h1>
<div style="font-size:1.8rem;font-weight:300;margin-top:0.5rem;">${lang === 'vn' ? `Xin chào ${bookingData.guestName || 'Quý khách'},` : `Hi ${bookingData.guestName || 'Guest'},`}</div>
</div>
<div style="padding:0 2rem 2rem;">
<p style="font-size:1rem;color:#2c2416;text-align:center;margin:0.5rem 0;font-weight:500;">⏳ ${lang === 'vn' ? 'Đang xác nhận thanh toán của bạn' : 'Verifying your payment'}</p>
<div style="text-align:center;padding:1rem 0 0.5rem;font-size:1rem;letter-spacing:6px;color:#c17a5a;">✤ ✿ ✤</div>

<div style="background:#fef3c7;border-radius:16px;padding:1rem;margin-bottom:1.5rem;text-align:center;border-left:4px solid #f59e0b;">
<p style="font-size:0.85rem;color:#92400e;margin:0;">⏳ ${lang === 'vn' ? 'Chúng tôi đã nhận được bằng chứng thanh toán của bạn và đang xác minh với ngân hàng.' : 'We have received your payment proof and are verifying it with our bank.'}</p>
</div>

<div style="font-size:0.75rem;letter-spacing:3px;text-transform:uppercase;color:#c17a5a;margin:1.5rem 0 0.75rem;">✦ ${lang === 'vn' ? 'THÔNG TIN ĐẶT PHÒNG' : 'BOOKING DETAILS'} ✦</div>
<div style="background:#f5efe6;border-radius:16px;padding:1.25rem;margin:0.5rem 0;">
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">🆔 ${lang === 'vn' ? 'Mã đặt phòng' : 'Booking ID'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.bookingId || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📍 ${lang === 'vn' ? 'Chỗ nghỉ' : 'Property'}:</span><span style="color:#2c2416;font-weight:600;">${propertyName}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">🛏 ${lang === 'vn' ? 'Phòng' : 'Room'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.room || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📅 ${lang === 'vn' ? 'Nhận phòng' : 'Check-in'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.checkIn || 'N/A'} ${lang === 'vn' ? '(từ 14:00)' : '(from 2:00 PM)'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">📅 ${lang === 'vn' ? 'Trả phòng' : 'Check-out'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.checkOut || 'N/A'} ${lang === 'vn' ? `(trước ${checkOutTime})` : `(by ${checkOutTime})`}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px dashed rgba(193,122,90,0.2);"><span style="color:#6b5c47;font-weight:500;">👥 ${lang === 'vn' ? 'Số khách' : 'Guests'}:</span><span style="color:#2c2416;font-weight:600;">${bookingData.guests || 'N/A'}</span></div>
<div style="display:flex;justify-content:space-between;padding:0.75rem 0;"><span style="color:#6b5c47;font-weight:500;">💰 ${lang === 'vn' ? 'Tổng tiền' : 'Total'}:</span><span style="color:#2c2416;font-weight:600;">${formatCurrency(bookingData.amount, 'VND')}</span></div>
</div>

<div style="background:#fff3e0;border-radius:12px;padding:1rem;margin:1rem 0;">
<p style="font-size:0.8rem;margin-bottom:0.25rem;font-weight:500;">📸 ${lang === 'vn' ? 'Bằng chứng thanh toán đã được gửi' : 'Payment proof submitted'}</p>
<p style="font-size:0.7rem;color:#6b5c47;margin:0;">${lang === 'vn' ? 'Chúng tôi sẽ xác nhận trong vòng 1-2 giờ.' : 'We will confirm within 1-2 hours.'}</p>
</div>

<div style="background:#f5efe6;border-left:3px solid #f59e0b;padding:1rem 1.25rem;margin:1.25rem 0;font-size:0.9rem;font-style:italic;color:#6b5c47;border-radius:0 12px 12px 0;">
✨ <strong>${lang === 'vn' ? 'Mã đặt phòng:' : 'Booking ID:'} ${bookingData.bookingId}</strong><br>
${lang === 'vn' 
  ? 'Bạn sẽ nhận được email xác nhận NGAY SAU KHI thanh toán được xác minh thành công.'
  : 'You will receive a confirmation email AS SOON AS your payment is verified.'}
</div>

<div style="background:#f0fdf4;border-radius:12px;padding:0.75rem;margin:1rem 0;text-align:center;">
<p style="font-size:0.75rem;margin:0;">💬 ${lang === 'vn' ? 'Có câu hỏi? Liên hệ qua WhatsApp:' : 'Questions? Contact us on WhatsApp:'} <strong>+84 869 922 261</strong></p>
</div>

<a href="${propertyUrl}" style="display:block;background:#c17a5a;color:white;text-align:center;padding:0.8rem;border-radius:50px;text-decoration:none;font-size:0.9rem;font-weight:500;margin:1rem 0;">🌿 ${lang === 'vn' ? 'Xem chi tiết chỗ nghỉ →' : 'View property details →'}</a>
</div>

<div style="background:#faf6f0;padding:1.5rem;text-align:center;border-top:1px solid #e0ddd5;">
<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;">
<a href="https://miacasahanoi.com/miacasa-hanoi" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">MiaCasa Hanoi</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/miacasa-oldquarter" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">MiaCasa Old Quarter</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/our-story" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">Our Story</a>
<span style="color:#d4c8bc;">•</span>
<a href="https://miacasahanoi.com/#contact" style="color:#6b5c47;text-decoration:none;font-size:0.7rem;">Contact</a>
</div>
<div style="margin:1rem 0;"><a href="https://www.instagram.com/miacasahanoi/" style="text-decoration:none;font-size:1.2rem;margin:0 0.5rem;opacity:0.6;">📷</a><a href="https://www.facebook.com/profile.php?id=61558873260616" style="text-decoration:none;font-size:1.2rem;margin:0 0.5rem;opacity:0.6;">📘</a></div>
<div style="font-size:0.6rem;color:#b0a088;">© 2025 MiaCasa Homestays · Made with ♡ in Hanoi<br><a href="https://miacasahanoi.com" style="color:#b0a088;text-decoration:none;">miacasahanoi.com</a></div>
</div>
</div>
</body>
</html>`;

  const textBody = lang === 'vn' 
    ? `Kính gửi ${bookingData.guestName},

Chúng tôi đã nhận được bằng chứng thanh toán của bạn cho đặt phòng ${bookingData.bookingId}.

Chúng tôi đang xác minh thanh toán với ngân hàng. Sau khi xác nhận (thường trong vòng 1-2 giờ), bạn sẽ nhận được email xác nhận đặt phòng chính thức.

Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ chúng tôi qua WhatsApp: +84 869 922 261

Trân trọng,
MiaCasa Homestays
https://miacasahanoi.com`
    : `Dear ${bookingData.guestName},

We have received your payment proof for booking ${bookingData.bookingId}.

We are now verifying the payment with our bank. Once confirmed (usually within 1-2 hours), you will receive a formal booking confirmation email.

If you have any questions, please contact us via WhatsApp: +84 869 922 261

Best regards,
MiaCasa Homestays
https://miacasahanoi.com`;

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody
  });
  
  MailApp.sendEmail(ADMIN_USER,
    `💰 PAYMENT PENDING: ${bookingData.bookingId}`,
    `Booking ID: ${bookingData.bookingId}
Guest: ${bookingData.guestName}
Email: ${bookingData.guestEmail}
Amount: ${bookingData.amount.toLocaleString('vi-VN')}₫
Payment Proof: ${paymentProofUrl}

Please verify payment in your bank account and update booking status to "paid" in the spreadsheet.
Sheet: ${getSheetUrl()}`
  );
}

// FIX: was a stub that claimed success without sending anything. Now sends
// a real admin email with whatever payload it's given, so a caller relying
// on this action actually gets a notification instead of a false positive.
function sendAdminNotificationOnly(data) {
  try {
    const subject = data.subject || `🔔 Notification: ${data.bookingId || 'N/A'}`;
    const body = data.message || JSON.stringify(data, null, 2);
    MailApp.sendEmail(ADMIN_USER, subject, body);
    return {status:'ok', message:'Notification sent'};
  } catch (error) {
    Logger.log('sendAdminNotificationOnly error: ' + error.toString());
    return {status:'error', message: error.toString()};
  }
}

// ================================================================
// TEST / DEBUG FUNCTIONS
// ================================================================
function testCreateBooking() {
  const testData = {
    action: 'createBooking',
    bookingId: 'TEST-' + Date.now(),
    property: 'MiaCasa Hanoi',
    room: 'Spring Room',
    checkIn: '2026-06-01',
    checkOut: '2026-06-03',
    nights: 2,
    guests: 2,
    amount: 1500000,
    guestName: 'Test Guest',
    guestEmail: ADMIN_USER,
    guestPhone: '+84 869 922 261',
    paymentMethod: 'vietqr',
    bookedAt: new Date().toISOString()
  };
  const result = handleBookingSave(testData);
  Logger.log(JSON.stringify(result));
  return result;
}

function testAvailability() {
  const result = checkRoomAvailability({
    room: 'Spring Room',
    checkIn: '2026-07-01',
    checkOut: '2026-07-03'
  });
  Logger.log(JSON.stringify(result));
}

function testEmail() {
  MailApp.sendEmail('miacasahanoi@gmail.com', 'Test Email', 'If you receive this, email works.');
  SpreadsheetApp.openById(SPREADSHEET_ID).toast('Test email sent!', 'Test', 5);
}
function checkQuota() {
  var quota = MailApp.getRemainingDailyQuota();
  SpreadsheetApp.openById(SPREADSHEET_ID).toast('Remaining quota: ' + quota, 'Quota', 10);
  Logger.log('Remaining email quota: ' + quota);
}

function testBookingEmail() {
  const testData = {
    bookingId: 'TEST-EMAIL-' + Date.now(),
    guestName: 'Debug Test',
    guestEmail: 'miacasahanoi@gmail.com',
    guestPhone: '+84 123456789',
    property: 'MiaCasa Hanoi',
    room: 'Spring Room',
    checkIn: '2026-06-15',
    checkOut: '2026-06-17',
    nights: 2,
    guests: 2,
    amount: 1500000,
    paymentMethod: 'paypal',
    language: 'en'
  };
  
  sendConfirmationToGuest(testData);
  SpreadsheetApp.openById(SPREADSHEET_ID).toast('testBookingEmail completed!', 'Test', 5);
}
