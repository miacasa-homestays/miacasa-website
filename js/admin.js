// ================================================================
// ADMIN.JS - Fixed for login screen
// ================================================================

window.API_URL = '/api/log-booking';
let adminLang = localStorage.getItem('mia_admin_lang') || 'en';

// Translation object for admin panel
const ADMIN_TRANSLATION_KEYS = {
  "login-logo": "admin-login-logo",
  "login-sub": "admin-login-sub",
  "lbl-username": "admin-lbl-username",
  "lbl-password": "admin-lbl-password",
  "btn-signin": "admin-btn-signin",
  "login-error": "admin-login-error",
  "admin-page-title": "admin-admin-page-title",
  "admin-page-sub": "admin-admin-page-sub",
  "tab-rooms": "admin-tab-rooms",
  "tab-prices": "admin-tab-prices",
  "logout": "admin-logout",
  "rs-form-title": "admin-rs-form-title",
  "lbl-rs-room": "admin-lbl-rs-room",
  "lbl-rs-from": "admin-lbl-rs-from",
  "lbl-rs-to": "admin-lbl-rs-to",
  "lbl-rs-status": "admin-lbl-rs-status",
  "lbl-rs-note": "admin-lbl-rs-note",
  "btn-rs-apply": "admin-btn-rs-apply",
  "rs-list-title": "admin-rs-list-title",
  "no-rules": "admin-no-rules",
  "ov-form-title": "admin-ov-form-title",
  "lbl-ov-room": "admin-lbl-ov-room",
  "lbl-ov-rule-type": "admin-lbl-ov-rule-type",
  "lbl-ov-from": "admin-lbl-ov-from",
  "lbl-ov-to": "admin-lbl-ov-to",
  "lbl-ov-weekdays": "admin-lbl-ov-weekdays",
  "lbl-ov-months": "admin-lbl-ov-months",
  "lbl-ov-price": "admin-lbl-ov-price",
  "lbl-ov-note": "admin-lbl-ov-note",
  "btn-ov-add": "admin-btn-ov-add",
  "ov-list-title": "admin-ov-list-title",
  "no-overrides": "admin-no-overrides",
  "room-spring": "admin-room-spring",
  "room-summer": "admin-room-summer",
  "room-autumn": "admin-room-autumn",
  "room-oq": "admin-room-oq",
  "th-room": "admin-th-room",
  "th-from": "admin-th-from",
  "th-to": "admin-th-to",
  "th-status": "admin-th-status",
  "th-note": "admin-th-note",
  "th-price": "admin-th-price",
  "th-usd": "admin-th-usd",
  "th-rule": "admin-th-rule",
  "rule-once": "admin-rule-once",
  "rule-weekday": "admin-rule-weekday",
  "opt-rs-closed": "admin-opt-rs-closed",
  "opt-rs-open": "admin-opt-rs-open",
  "maintenance-on": "admin-maintenance-on",
  "maintenance-off": "admin-maintenance-off",
  "maintenance-on-status": "admin-maintenance-on-status",
  "maintenance-off-status": "admin-maintenance-off-status"
};
const ADMIN_TRANSLATIONS = window.buildMiaTranslations(ADMIN_TRANSLATION_KEYS);

const PRICE_RULE_PREFIX = 'MIA_PRICE_RULE:';
const USD_EXCHANGE_RATE = 25000;

const WEEKDAY_NAMES = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  vn: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
};
const MONTH_NAMES = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  vn: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12']
};

// ================================================================
// TOKEN MANAGEMENT
// ================================================================

function getToken() {
  return sessionStorage.getItem('mia_admin_token') || '';
}

function setToken(token) {
  sessionStorage.setItem('mia_admin_token', token);
}

function clearToken() {
  sessionStorage.removeItem('mia_admin_token');
  sessionStorage.removeItem('mia_admin_logged_in');
  sessionStorage.removeItem('mia_admin_user');
}

// ================================================================
// SHOW/HIDE LOGIN SCREEN
// ================================================================

function showLoginScreen() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('admin-wrap').style.display = 'none';
}

function showAdminPanel() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('admin-wrap').style.display = 'block';
}

// ================================================================
// AUTHENTICATED FETCH HELPER - SEND TOKEN IN BODY
// ================================================================

async function authenticatedFetch(payload) {
  const token = getToken();
  
  // If no token, show login screen and return null
  if (!token) {
    console.warn('No admin token found - showing login screen');
    showLoginScreen();
    return null;
  }
  
  try {
    // Send token in the body, not in the header
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // No Authorization header - send token in body instead
      },
      body: JSON.stringify({
        ...payload,
        token: token  // Add token to the request body
      })
    });
    
    // Handle 401 - Token expired or invalid
    if (response.status === 401) {
      console.warn('Authentication failed (401) - showing login screen');
      clearToken();
      showLoginScreen();
      return null;
    }
    
    // Handle other errors
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error('Authenticated fetch failed:', error);
    return null;
  }
}

// ================================================================
// LOGIN & LOGOUT
// ================================================================

async function doLogin() {
  const usernameInput = document.getElementById('login-user');
  const rememberCheckbox = document.getElementById('remember-username');
  const enteredUsername = usernameInput?.value.trim();
  const remember = rememberCheckbox?.checked;
  
  if (remember && enteredUsername) {
    localStorage.setItem('admin_username', enteredUsername);
    localStorage.setItem('admin_remember_username', 'true');
  } else if (rememberCheckbox && !remember) {
    localStorage.removeItem('admin_username');
    localStorage.setItem('admin_remember_username', 'false');
  }

  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  const errEl = document.getElementById('login-error');

  if (!user || !pass) {
    errEl.textContent = adminLang === 'vn' ? 'Vui lòng nhập tên đăng nhập và mật khẩu.' : 'Please enter username and password.';
    errEl.style.display = 'block';
    return;
  }

  const loginBtn = document.getElementById('btn-signin');
  loginBtn.disabled = true;
  loginBtn.textContent = adminLang === 'vn' ? 'Đang đăng nhập...' : 'Signing in...';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', username: user, password: pass })
    });
    
    const json = await response.json();
    
    if (json.status === 'ok' && json.token) {
      // Store the token exactly as received
      setToken(json.token);
      sessionStorage.setItem('mia_admin_logged_in', '1');
      sessionStorage.setItem('mia_admin_user', user);
      
      showAdminPanel();
      
      // Load admin data after successful login
      updatePriceRuleFields();
      await Promise.all([renderRoomStatusList(), renderOverrides(), loadMaintenanceStatus()]);
    } else {
      errEl.textContent = json.message || (adminLang === 'vn' ? 'Tên đăng nhập hoặc mật khẩu không đúng.' : 'Incorrect username or password.');
      errEl.style.display = 'block';
    }
  } catch (error) {
    console.error('Login error:', error);
    errEl.textContent = adminLang === 'vn' ? 'Không thể kết nối.' : 'Cannot connect.';
    errEl.style.display = 'block';
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = adminLang === 'vn' ? 'Đăng nhập' : 'Sign In';
  }
}

function doLogout() {
  clearToken();
  showLoginScreen();
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-error').style.display = 'none';
}

// ================================================================
// TAB SWITCHING
// ================================================================

function switchTab(name, btn) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
  
  if (name === 'rooms') renderRoomStatusList();
  else if (name === 'prices') {
    renderOverrides();
    setTimeout(() => initCalendar(), 100);
  }
  else if (name === 'cancellations') loadPendingCancellations();
}

// ================================================================
// ROOM STATUS MANAGEMENT
// ================================================================

async function getRoomStatus() {
  const result = await authenticatedFetch({ action: 'getRoomStatus' });
  return result?.data || [];
}

async function addRoomStatus() {
  const room = document.getElementById('rs-room').value;
  const from = document.getElementById('rs-from').value;
  const to = document.getElementById('rs-to').value;
  const status = document.getElementById('rs-status').value;
  const note = document.getElementById('rs-note').value.trim();
  const errBar = document.getElementById('rooms-error-bar');
  const saveBar = document.getElementById('rooms-save-bar');
  
  errBar.style.display = 'none';
  saveBar.style.display = 'none';

  if (!room || !from || !to) {
    errBar.textContent = adminLang === 'vn' ? 'Vui lòng chọn phòng và cả hai ngày.' : 'Please select a room and both dates.';
    errBar.style.display = 'block';
    return;
  }
  
  if (new Date(to) < new Date(from)) {
    errBar.textContent = adminLang === 'vn' ? 'Ngày kết thúc phải bằng hoặc sau ngày bắt đầu.' : 'End date must be on or after start date.';
    errBar.style.display = 'block';
    return;
  }

  const applyBtn = document.getElementById('btn-rs-apply');
  applyBtn.disabled = true;
  applyBtn.textContent = adminLang === 'vn' ? 'Đang xử lý...' : 'Processing...';

  try {
    const result = await authenticatedFetch({ 
      action: 'updateRoomStatus', 
      room, from, to, status, note 
    });

    if (result?.status === 'ok') {
      saveBar.textContent = adminLang === 'vn' ? '✓ Đã cập nhật trạng thái phòng' : '✓ Room status updated';
      saveBar.style.display = 'block';
      setTimeout(() => saveBar.style.display = 'none', 4000);
      document.getElementById('rs-note').value = '';
      document.getElementById('rs-from').value = '';
      document.getElementById('rs-to').value = '';
      await renderRoomStatusList();
    } else {
      errBar.textContent = 'Error: ' + (result?.message || 'Unknown error');
      errBar.style.display = 'block';
    }
  } catch (error) {
    errBar.textContent = 'Error: ' + error.message;
    errBar.style.display = 'block';
  } finally {
    applyBtn.disabled = false;
    applyBtn.textContent = adminLang === 'vn' ? 'Áp dụng' : 'Apply';
  }
}

async function deleteRoomStatus(id) {
  if (!confirm(adminLang === 'vn' ? 'Xóa quy tắc này?' : 'Delete this rule?')) return;
  try {
    await authenticatedFetch({ action: 'deleteRoomStatus', id });
    await renderRoomStatusList();
  } catch (error) {
    alert(adminLang === 'vn' ? 'Xóa thất bại.' : 'Delete failed.');
  }
}

async function renderRoomStatusList() {
  const container = document.getElementById('room-status-list');
  if (!container) return;
  
  container.innerHTML = '<p>Loading...</p>';
  
  // Check if we have a token before trying to fetch
  if (!getToken()) {
    container.innerHTML = '<p style="color:#991B1B;">Please log in to view room status.</p>';
    return;
  }
  
  try {
    const rows = await getRoomStatus();
    if (!rows || rows.length === 0) {
      container.innerHTML = `<p class="no-overrides">${ADMIN_TRANSLATIONS[adminLang]['no-rules']}</p>`;
      return;
    }
    const AL = ADMIN_TRANSLATIONS[adminLang];
    container.innerHTML = `<table class="overrides-table"><thead><tr><th>${AL['th-room']}</th><th>${AL['th-from']}</th><th>${AL['th-to']}</th><th>${AL['th-status']}</th><th>${AL['th-note']}</th><th></th></tr></thead><tbody>${
      rows.map(r => {
        const isClosed = r[3] === 'closed';
        return `<tr><td>${escapeHtml(r[0])}</td><td>${formatDateForDisplay(r[1])}</td><td>${formatDateForDisplay(r[2])}</td><td><span style="color:${isClosed ? '#991B1B' : '#065F46'}">${isClosed ? '🔒 Closed' : '🔓 Open'}</span></td><td>${escapeHtml(r[4] || '—')}</td><td><button class="del-btn" onclick="deleteRoomStatus('${r[5]}')">✕</button></td></tr>`
      }).join('')
    }</tbody></table>`;
  } catch (error) {
    container.innerHTML = '<p style="color:#991B1B;">Failed to load.</p>';
  }
}

// ================================================================
// PRICE OVERRIDES MANAGEMENT
// ================================================================

async function fetchOverrides() {
  const result = await authenticatedFetch({ action: 'getPriceOverrides' });
  return result?.data || [];
}

function updatePriceRuleFields() {
  const mode = document.getElementById('ov-rule-type')?.value || 'single';
  const weekdayField = document.getElementById('ov-weekday-field');
  const monthField = document.getElementById('ov-month-field');
  
  if (mode === 'single') {
    if (weekdayField) weekdayField.style.display = 'none';
    if (monthField) monthField.style.display = 'none';
  } else {
    const ruleType = document.getElementById('ov-rule-type')?.value;
    const isRecurring = ruleType === 'weekday';
    if (weekdayField) weekdayField.style.display = isRecurring ? 'flex' : 'none';
    if (monthField) monthField.style.display = isRecurring ? 'flex' : 'none';
  }
}

function formatDateInput(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

async function deleteOverride(id) {
  if (!confirm(adminLang === 'vn' ? 'Xóa?' : 'Delete?')) return;
  try {
    await authenticatedFetch({ action: 'deletePriceOverride', id });
    await renderOverrides();
  } catch (error) {
    alert('Delete failed');
  }
}

async function renderOverrides() {
  const container = document.getElementById('overrides-list');
  if (!container) return;
  
  container.innerHTML = '<p>Loading...</p>';
  
  // Check if we have a token before trying to fetch
  if (!getToken()) {
    container.innerHTML = '<p style="color:#991B1B;">Please log in to view price overrides.</p>';
    return;
  }
  
  try {
    const overrides = await fetchOverrides();
    if (!overrides || overrides.length === 0) {
      container.innerHTML = `<p class="no-overrides">${ADMIN_TRANSLATIONS[adminLang]['no-overrides']}</p>`;
      return;
    }
    const AL = ADMIN_TRANSLATIONS[adminLang];
    container.innerHTML = `<table class="overrides-table"><thead><tr><th>${AL['th-room']}</th><th>${AL['th-rule']}</th><th>${AL['th-from']}</th><th>${AL['th-to']}</th><th>${AL['th-price']}</th><th>${AL['th-usd']}</th><th>${AL['th-note']}</th><th></th></tr></thead><tbody>${
      overrides.map(o => `<tr><td>${escapeHtml(o[1])}</td><td><span class="rule-pill">Specific dates</span></td><td>${formatDateForDisplay(o[2])}</td><td>${formatDateForDisplay(o[3])}</td><td>${formatVND(o[4])}</td><td>~$${Math.round(o[4]/USD_EXCHANGE_RATE)}</td><td>${escapeHtml(o[5] || '—')}</td><td><button class="del-btn" onclick="deleteOverride(${o[0]})">✕</button></td></tr>`
      ).join('')
    }</tbody></table>`;
  } catch (error) {
    container.innerHTML = '<p style="color:#991B1B;">Failed to load.</p>';
  }
}

// ================================================================
// MAINTENANCE MODE
// ================================================================

async function getMaintenanceMode() {
  const result = await authenticatedFetch({ action: 'getMaintenanceMode' });
  return result?.value === 'on';
}

async function setMaintenanceMode(enabled) {
  const result = await authenticatedFetch({ 
    action: 'setMaintenanceMode', 
    value: enabled ? 'on' : 'off' 
  });
  return result?.status === 'ok';
}

async function toggleMaintenance() {
  const el = document.getElementById('maintenance-status');
  const btn = document.getElementById('maintenance-btn');
  const currentIsOn = (el.textContent === 'ON' || el.textContent === 'BẬT');
  const newValue = !currentIsOn;
  const originalText = btn.textContent;
  
  btn.disabled = true;
  btn.textContent = adminLang === 'vn' ? 'Đang xử lý...' : 'Processing...';

  try {
    const success = await setMaintenanceMode(newValue);
    if (success) {
      if (newValue) {
        el.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-on-status'] || 'ON';
        el.className = 'status-on';
        btn.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-on'] || 'Turn Maintenance Off';
      } else {
        el.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-off-status'] || 'OFF';
        el.className = 'status-off';
        btn.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-off'] || 'Turn Maintenance On';
      }
    } else {
      btn.textContent = originalText;
      alert('Failed to update maintenance mode.');
    }
  } catch (error) {
    btn.textContent = originalText;
    alert('An error occurred.');
  } finally {
    btn.disabled = false;
  }
}

async function loadMaintenanceStatus() {
  try {
    const isOn = await getMaintenanceMode();
    const el = document.getElementById('maintenance-status');
    const btn = document.getElementById('maintenance-btn');
    if (isOn) {
      el.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-on-status'] || 'ON';
      el.className = 'status-on';
      btn.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-on'] || 'Turn Maintenance Off';
    } else {
      el.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-off-status'] || 'OFF';
      el.className = 'status-off';
      btn.textContent = ADMIN_TRANSLATIONS[adminLang]['maintenance-off'] || 'Turn Maintenance On';
    }
  } catch (error) {}
}

// ================================================================
// HELPER FUNCTIONS
// ================================================================

function formatDateForDisplay(dateStr) {
  if (!dateStr) return '—';
  const parts = dateStr.split('-');
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : dateStr;
}

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ================================================================
// LANGUAGE SUPPORT
// ================================================================

function setAdminLang(lang) {
  adminLang = lang;
  localStorage.setItem('mia_admin_lang', lang);
  const enBtn = document.getElementById('lang-en');
  const vnBtn = document.getElementById('lang-vn');
  const zhBtn = document.getElementById('lang-zh');

  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (vnBtn) vnBtn.classList.toggle('active', lang === 'vn');
  if (zhBtn) zhBtn.classList.toggle('active', lang === 'zh');

  const L = ADMIN_TRANSLATIONS[lang];
  if (!L) return;
  
  const elements = ['login-logo', 'login-sub', 'lbl-username', 'lbl-password', 'btn-signin', 'admin-page-title', 'admin-page-sub', 'logout-btn', 'rs-form-title', 'lbl-rs-room', 'lbl-rs-from', 'lbl-rs-to', 'lbl-rs-status', 'lbl-rs-note', 'btn-rs-apply', 'rs-list-title', 'ov-form-title', 'lbl-ov-room', 'lbl-ov-rule-type', 'lbl-ov-from', 'lbl-ov-to', 'lbl-ov-weekdays', 'lbl-ov-months', 'lbl-ov-price', 'lbl-ov-note', 'btn-ov-add', 'ov-list-title'];
  elements.forEach(id => {
    const el = document.getElementById(id);
    if (el && L[id]) el.textContent = L[id];
  });
  
  const tabs = document.querySelectorAll('.admin-tab');
  if (tabs[0]) tabs[0].textContent = L['tab-rooms'];
  if (tabs[1]) tabs[1].textContent = L['tab-prices'];
  
  const rsSel = document.getElementById('rs-status');
  if (rsSel && rsSel.options.length >= 2) {
    rsSel.options[0].text = L['opt-rs-open'];
    rsSel.options[1].text = L['opt-rs-closed'];
  }
  
  renderRoomStatusList();
  renderOverrides();
  loadMaintenanceStatus();
}

// ================================================================
// CANCELLATION MANAGEMENT
// ================================================================

async function loadPendingCancellations() {
  const container = document.getElementById('cancellations-list');
  if (!container) return;
  container.innerHTML = '<div style="text-align: center; padding: 2rem;">Loading...</div>';
  
  // Check if we have a token before trying to fetch
  if (!getToken()) {
    container.innerHTML = '<div style="background: #f5efe6; border-radius: 8px; padding: 2rem; text-align: center;"><p>Please log in to view cancellations.</p></div>';
    return;
  }
  
  try {
    const result = await authenticatedFetch({ action: 'getPendingCancellations' });
    const cancellations = result?.cancellations || [];
    
    if (!cancellations || cancellations.length === 0) {
      container.innerHTML = '<div style="background: #f5efe6; border-radius: 8px; padding: 2rem; text-align: center;"><p>✅ No pending cancellation requests</p></div>';
      document.getElementById('pending-count').innerHTML = '';
      return;
    }
    document.getElementById('pending-count').innerHTML = `(${cancellations.length} pending)`;
    container.innerHTML = cancellations.map(c => `
      <div class="cancel-card" id="cancel-card-${c.bookingId}" style="background: white; border: 1px solid #e0ddd5; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div><strong>${c.bookingId}</strong><p><strong>Guest:</strong> ${escapeHtml(c.guestName)} (${escapeHtml(c.guestEmail)})</p><p><strong>Property:</strong> ${c.property} - ${c.room}</p><p><strong>Check-in:</strong> ${c.checkIn}</p><p><strong>Amount:</strong> ${Number(c.amount).toLocaleString('vi-VN')}₫</p></div>
          <div><button onclick="showRefundForm('${c.bookingId}')" class="add-override-btn" style="background: #059669;">✅ Approve Refund</button><button onclick="rejectCancellation('${c.bookingId}')" class="add-override-btn" style="margin-top: 0.5rem; background: #dc2626;">❌ Reject</button></div>
        </div>
        <div id="refund-form-${c.bookingId}" style="display: none; margin-top: 1rem;"><button onclick="confirmRefund('${c.bookingId}')" class="add-override-btn" style="background: #059669;">Confirm Refund</button></div>
      </div>
    `).join('');
  } catch (error) {
    container.innerHTML = '<div style="background: #fee2e2; padding: 1rem;">Error loading</div>';
  }
}

function showRefundForm(bookingId) {
  document.getElementById(`refund-form-${bookingId}`).style.display = 'block';
}

async function confirmRefund(bookingId) {
  if (!confirm('Have you manually processed the refund?')) return;
  const result = await authenticatedFetch({ action: 'confirmRefund', bookingId });
  if (result?.status === 'ok') {
    alert('✅ Refund confirmed');
    document.getElementById(`cancel-card-${bookingId}`)?.remove();
    loadPendingCancellations();
  } else {
    alert('❌ Error: ' + (result?.message || 'Unknown error'));
  }
}

async function rejectCancellation(bookingId) {
  if (!confirm('Reject this cancellation?')) return;
  document.getElementById(`cancel-card-${bookingId}`)?.remove();
  loadPendingCancellations();
}

// ================================================================
// CALENDAR PICKER - WORKING CLICK + DRAG
// ================================================================

// ================================================================
// CALENDAR — STATE
// ================================================================
let currentCalendarDate = new Date();
let selectedDates   = new Set();
let isDragging      = false;
let dragStartKey    = null;
let dragCurrentKey  = null;
let mouseDidMove    = false;

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDateKey(date) {
  return date.getFullYear() + '-' +
    String(date.getMonth() + 1).padStart(2,'0') + '-' +
    String(date.getDate()).padStart(2,'0');
}

function parseDateKey(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function datesBetween(aKey, bKey) {
  const a = parseDateKey(aKey);
  const b = parseDateKey(bKey);
  const start = a <= b ? a : b;
  const end   = a <= b ? b : a;
  const result = [];
  const cur = new Date(start);
  while (cur <= end) {
    result.push(formatDateKey(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return result;
}

// ── Render ────────────────────────────────────────────────────────────────────
function renderCalendar() {
  const year  = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  const monthNames = adminLang === 'vn'
    ? ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6',
       'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12']
    : ['January','February','March','April','May','June',
       'July','August','September','October','November','December'];

  const weekdays = adminLang === 'vn'
    ? ['CN','T2','T3','T4','T5','T6','T7']
    : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  const el = document.getElementById('calendar-month-year');
  if (el) el.textContent = monthNames[month] + ' ' + year;

  const wdEl = document.getElementById('calendar-weekdays');
  if (wdEl) wdEl.innerHTML = weekdays.map(d => `<div class="calendar-weekday">${d}</div>`).join('');

  const daysEl = document.getElementById('calendar-days');
  if (!daysEl) return;

  const dragRange = new Set(
    (isDragging && dragStartKey && dragCurrentKey)
      ? datesBetween(dragStartKey, dragCurrentKey)
      : []
  );

  const today       = formatDateKey(new Date());
  const firstDow    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays    = new Date(year, month, 0).getDate();

  let html = '';

  for (let i = firstDow - 1; i >= 0; i--) {
    html += `<div class="calendar-day other-month">${prevDays - i}</div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const key = formatDateKey(new Date(year, month, d));
    const isSelected  = selectedDates.has(key);
    const isInDrag    = dragRange.has(key);
    const isToday     = key === today;

    let cls = 'calendar-day';
    if (isSelected)            cls += ' selected';
    if (isInDrag && !isSelected) cls += ' in-range';
    if (isToday)               cls += ' today';

    html += `<div class="${cls}" data-date="${key}">${d}</div>`;
  }

  const total = 42;
  const filled = firstDow + daysInMonth;
  for (let i = 1; i <= total - filled; i++) {
    html += `<div class="calendar-day other-month">${i}</div>`;
  }

  daysEl.innerHTML = html;
}

// ── Toggle / update display ───────────────────────────────────────────────────
function toggleDateSelection(key) {
  if (selectedDates.has(key)) {
    selectedDates.delete(key);
  } else {
    selectedDates.add(key);
  }
  updateSelectedDatesDisplay();
  renderCalendar();
}

function commitDragRange() {
  if (dragStartKey && dragCurrentKey) {
    datesBetween(dragStartKey, dragCurrentKey).forEach(k => selectedDates.add(k));
  }
  isDragging     = false;
  dragStartKey   = null;
  dragCurrentKey = null;
  updateSelectedDatesDisplay();
  renderCalendar();
}

function clearAllSelectedDates() {
  selectedDates.clear();
  updateSelectedDatesDisplay();
  renderCalendar();
}

function removeDateFromSelection(key) {
  selectedDates.delete(key);
  updateSelectedDatesDisplay();
  renderCalendar();
}

function updateSelectedDatesDisplay() {
  const container  = document.getElementById('selected-dates-container');
  const chipsEl    = document.getElementById('selected-dates-chips');
  const countSpan  = document.getElementById('selected-count');
  const count      = selectedDates.size;

  if (countSpan) {
    countSpan.textContent = count > 0
      ? (adminLang === 'vn' ? `Đã chọn ${count} ngày` : `${count} date${count > 1 ? 's' : ''} selected`)
      : '';
  }

  if (!container || !chipsEl) return;

  if (count === 0) {
    container.style.display = 'none';
    chipsEl.innerHTML = '';
    return;
  }

  container.style.display = 'block';

  const sorted = [...selectedDates].sort();
  const groups = [];
  let gs = sorted[0], gp = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    const diff = (parseDateKey(sorted[i]) - parseDateKey(gp)) / 86400000;
    if (diff === 1) { gp = sorted[i]; }
    else { groups.push([gs, gp]); gs = sorted[i]; gp = sorted[i]; }
  }
  groups.push([gs, gp]);

  chipsEl.innerHTML = groups.map(([s, e]) => {
    const label = s === e ? s : `${s} → ${e}`;
    const dList = datesBetween(s, e).map(k => `'${k}'`).join(',');
    return `<span class="date-chip">${label}<span class="remove-date" onclick="event.stopPropagation();[${dList}].forEach(k=>removeDateFromSelection(k))">✕</span></span>`;
  }).join('');
}

// ── Event delegation ──────────────────────────────────────────────────
function attachCalendarEvents() {
  const daysEl = document.getElementById('calendar-days');
  if (!daysEl || daysEl._calEventsAttached) return;
  daysEl._calEventsAttached = true;

  daysEl.addEventListener('mousedown', (e) => {
    const key = e.target.dataset.date;
    if (!key || e.target.classList.contains('other-month')) return;
    e.preventDefault();
    isDragging     = true;
    mouseDidMove   = false;
    dragStartKey   = key;
    dragCurrentKey = key;
    renderCalendar();
  });

  daysEl.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const key = e.target.dataset.date;
    if (!key || e.target.classList.contains('other-month')) return;
    if (key !== dragCurrentKey) {
      mouseDidMove   = true;
      dragCurrentKey = key;
      renderCalendar();
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    if (mouseDidMove) {
      commitDragRange();
    } else {
      const key = dragStartKey;
      isDragging = false; dragStartKey = null; dragCurrentKey = null;
      if (key) toggleDateSelection(key);
      else renderCalendar();
    }
  });

  daysEl.addEventListener('touchstart', (e) => {
    const key = e.target.dataset.date;
    if (!key || e.target.classList.contains('other-month')) return;
    isDragging     = true;
    mouseDidMove   = false;
    dragStartKey   = key;
    dragCurrentKey = key;
    renderCalendar();
  }, { passive: true });

  daysEl.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const key = el && el.dataset.date;
    if (!key || el.classList.contains('other-month')) return;
    if (key !== dragCurrentKey) {
      mouseDidMove   = true;
      dragCurrentKey = key;
      renderCalendar();
    }
  }, { passive: true });

  daysEl.addEventListener('touchend', () => {
    if (!isDragging) return;
    if (mouseDidMove) {
      commitDragRange();
    } else {
      const key = dragStartKey;
      isDragging = false; dragStartKey = null; dragCurrentKey = null;
      if (key) toggleDateSelection(key);
      else renderCalendar();
    }
  });
}

// ── Public API ────────────────────────────────────────────────────────────────
function changeMonth(delta) {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
  renderCalendar();
}

function initCalendar() {
  currentCalendarDate = new Date();
  selectedDates.clear();
  isDragging = false; dragStartKey = null; dragCurrentKey = null; mouseDidMove = false;
  updateSelectedDatesDisplay();
  renderCalendar();
  attachCalendarEvents();
}

function toggleCalendarMode() {
  const mode = document.getElementById('ov-rule-type')?.value || 'single';
  const calendarModeDiv = document.getElementById('calendar-mode');
  const rangeModeDiv = document.getElementById('range-mode');
  const weekdayField = document.getElementById('ov-weekday-field');
  const monthField = document.getElementById('ov-month-field');
  const selectedDatesSection = document.getElementById('selected-dates-section');
  
  if (mode === 'single') {
    if (calendarModeDiv) calendarModeDiv.style.display = 'block';
    if (rangeModeDiv) rangeModeDiv.style.display = 'none';
    if (selectedDatesSection) selectedDatesSection.style.display = 'block';
    initCalendar();
  } else {
    if (calendarModeDiv) calendarModeDiv.style.display = 'none';
    if (rangeModeDiv) rangeModeDiv.style.display = 'block';
    if (selectedDatesSection) selectedDatesSection.style.display = 'none';
    
    const ruleType = document.getElementById('ov-rule-type')?.value;
    const isRecurring = ruleType === 'weekday';
    
    if (weekdayField) weekdayField.style.display = isRecurring ? 'flex' : 'none';
    if (monthField) monthField.style.display = isRecurring ? 'flex' : 'none';
    
    selectedDates.clear();
    updateSelectedDatesDisplay();
    
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setDate(today.getDate() + 30);
    const fromInput = document.getElementById('ov-from');
    const toInput = document.getElementById('ov-to');
    if (fromInput && !fromInput.value) fromInput.value = formatDateInput(today);
    if (toInput && !toInput.value) toInput.value = formatDateInput(nextMonth);
  }
}

function setDefaultDates() {
  const today = new Date();
  const fromInput = document.getElementById('ov-from');
  const toInput = document.getElementById('ov-to');
  if (fromInput) fromInput.value = formatDateInput(today);
  if (toInput) {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    toInput.value = formatDateInput(tomorrow);
  }
}

window.addOverride = async function() {
  const mode = document.getElementById('ov-rule-type')?.value || 'single';
  const room = document.getElementById('ov-room').value;
  const price = parseInt(document.getElementById('ov-price').value);
  const note = document.getElementById('ov-note').value.trim();
  const errBar = document.getElementById('price-error-bar');
  const saveBar = document.getElementById('price-save-bar');
  
  errBar.style.display = 'none';
  saveBar.style.display = 'none';
  
  if (!room || !price) {
    errBar.textContent = adminLang === 'vn' ? 'Vui lòng chọn phòng và nhập giá.' : 'Please select a room and enter a price.';
    errBar.style.display = 'block';
    return;
  }
  
  if (price < 100000) {
    errBar.textContent = adminLang === 'vn' ? 'Giá phải lớn hơn 100,000 VND.' : 'Price must be greater than 100,000 VND.';
    errBar.style.display = 'block';
    return;
  }
  
  const addBtn = document.getElementById('btn-ov-add');
  addBtn.disabled = true;
  addBtn.textContent = adminLang === 'vn' ? 'Đang xử lý...' : 'Processing...';
  
  try {
    if (mode === 'single') {
      const selectedDateArray = Array.from(selectedDates);
      if (selectedDateArray.length === 0) {
        errBar.textContent = adminLang === 'vn' ? 'Vui lòng chọn ít nhất một ngày.' : 'Please select at least one date.';
        errBar.style.display = 'block';
        addBtn.disabled = false;
        addBtn.textContent = adminLang === 'vn' ? 'Thêm' : 'Add Override';
        return;
      }
      
      let successCount = 0;
      for (const dateKey of selectedDateArray) {
        const result = await authenticatedFetch({ 
          action: 'addPriceOverride', 
          room, from: dateKey, to: dateKey, price, note 
        });
        if (result?.status === 'ok') successCount++;
      }
      
      if (successCount > 0) {
        saveBar.textContent = adminLang === 'vn' 
          ? `✓ Đã thêm ${successCount} giá tùy chỉnh`
          : `✓ Added ${successCount} override(s)`;
        saveBar.style.display = 'block';
        setTimeout(() => saveBar.style.display = 'none', 4000);
        selectedDates.clear();
        updateSelectedDatesDisplay();
        renderCalendar();
        await renderOverrides();
      } else {
        errBar.textContent = adminLang === 'vn' ? 'Không thể thêm giá.' : 'Failed to add overrides.';
        errBar.style.display = 'block';
      }
    } else {
      const from = document.getElementById('ov-from').value;
      const to = document.getElementById('ov-to').value;
      if (!from || !to) {
        errBar.textContent = adminLang === 'vn' ? 'Vui lòng chọn khoảng ngày.' : 'Please select a date range.';
        errBar.style.display = 'block';
        return;
      }
      const result = await authenticatedFetch({ 
        action: 'addPriceOverride', 
        room, from, to, price, note 
      });
      if (result?.status === 'ok') {
        saveBar.textContent = adminLang === 'vn' ? '✓ Đã thêm giá tùy chỉnh' : '✓ Override added successfully';
        saveBar.style.display = 'block';
        setTimeout(() => saveBar.style.display = 'none', 4000);
        await renderOverrides();
      } else {
        errBar.textContent = 'Error: ' + (result?.message || 'Unknown error');
        errBar.style.display = 'block';
      }
    }
  } catch (error) {
    errBar.textContent = 'Error: ' + error.message;
    errBar.style.display = 'block';
  } finally {
    addBtn.disabled = false;
    addBtn.textContent = adminLang === 'vn' ? 'Thêm' : 'Add Override';
  }
};

// ================================================================
// INITIALIZATION - FIXED
// ================================================================

// Check if already logged in
if (sessionStorage.getItem('mia_admin_logged_in') && getToken()) {
  showAdminPanel();
  updatePriceRuleFields();
  setTimeout(() => {
    renderRoomStatusList();
    renderOverrides();
    loadMaintenanceStatus();
  }, 100);
} else {
  showLoginScreen();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setDefaultDates();
  setAdminLang(adminLang);
  
  const loginUser = document.getElementById('login-user');
  const loginPass = document.getElementById('login-pass');
  if (loginPass) loginPass.addEventListener('keypress', (e) => { if (e.key === 'Enter') doLogin(); });
  
  if (document.getElementById('panel-prices')?.classList.contains('active')) {
    setTimeout(() => initCalendar(), 100);
  }
  
  // Load saved username
  setTimeout(function() {
    const savedUsername = localStorage.getItem('admin_username');
    const rememberChecked = localStorage.getItem('admin_remember_username') === 'true';
    const usernameInput = document.getElementById('login-user');
    const rememberCheckbox = document.getElementById('remember-username');
    
    if (usernameInput && savedUsername && rememberChecked) {
      usernameInput.value = savedUsername;
      if (rememberCheckbox) rememberCheckbox.checked = true;
    } else if (usernameInput && savedUsername) {
      usernameInput.value = savedUsername;
      if (rememberCheckbox) rememberCheckbox.checked = false;
    }
  }, 200);
});

// Global exports
window.doLogin = doLogin;
window.doLogout = doLogout;
window.switchTab = switchTab;
window.addRoomStatus = addRoomStatus;
window.deleteRoomStatus = deleteRoomStatus;
window.addOverride = window.addOverride;
window.deleteOverride = deleteOverride;
window.toggleMaintenance = toggleMaintenance;
window.setAdminLang = setAdminLang;
window.loadPendingCancellations = loadPendingCancellations;
window.showRefundForm = showRefundForm;
window.confirmRefund = confirmRefund;
window.rejectCancellation = rejectCancellation;
window.changeMonth = changeMonth;
window.clearAllSelectedDates = clearAllSelectedDates;
window.toggleCalendarMode = toggleCalendarMode;
window.initCalendar = initCalendar;
window.removeDateFromSelection = removeDateFromSelection;