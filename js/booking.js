// ================================================================
// BOOKING.JS - Booking engine with availability check
// ================================================================

'use strict';

// ================================================================
// CONFIGURATION - Use values from prices.js or provide fallbacks
// ================================================================

// These are already defined in prices.js, so we just ensure they exist
// on the window object with fallback values if prices.js hasn't loaded yet

// Ensure CONFIG_EXCHANGE_RATE exists (not in prices.js, so we define it here)
if (typeof window.CONFIG_EXCHANGE_RATE === 'undefined') {
    window.CONFIG_EXCHANGE_RATE = 25000;  // 1 USD = 25,000 VND
}

// Use CONFIG_CURRENCY from prices.js if available, otherwise provide fallback
if (typeof window.CONFIG_CURRENCY === 'undefined') {
    window.CONFIG_CURRENCY = '₫';
}

// Use CONFIG_CURRENCY_CODE from prices.js if available, otherwise provide fallback
if (typeof window.CONFIG_CURRENCY_CODE === 'undefined') {
    window.CONFIG_CURRENCY_CODE = 'VND';
}

// CONFIG_DEFAULT_LANG might not be defined elsewhere
if (typeof window.CONFIG_DEFAULT_LANG === 'undefined') {
    window.CONFIG_DEFAULT_LANG = 'en';
}

// Helper to get config values safely
function getConfigCurrency() {
    return window.CONFIG_CURRENCY || '₫';
}

function getConfigCurrencyCode() {
    return window.CONFIG_CURRENCY_CODE || 'VND';
}

function getConfigExchangeRate() {
    return window.CONFIG_EXCHANGE_RATE || 25000;
}

function getConfigDefaultLang() {
    return window.CONFIG_DEFAULT_LANG || 'en';
}

// ================================================================
// API URL - Single declaration with fallback
// ================================================================

window.API_URL = window.API_URL || '/api/log-booking';

// ================================================================
// SECURITY - Escape guest-supplied text before inserting via innerHTML
// ================================================================
function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
window.escapeHtml = escapeHtml;

// ================================================================
// CONFIG - Use centralized config values
// ================================================================

// Ensure config is available
if (typeof window.config === 'undefined' && typeof window.MiaCasaConfig !== 'undefined') {
    window.config = window.MiaCasaConfig;
}

// ================================================================
// API CONFIGURATION
// ================================================================

// Safely access PRICES with fallback
const EXTRA_GUEST_FEE = (typeof PRICES !== 'undefined' && PRICES['extra-guest-hanoi']) ? PRICES['extra-guest-hanoi'] : 150000;
const INCLUDED_GUESTS = 2;

// ================================================================
// TRANSLATION HELPER
// ================================================================

function miaT(key, fallback) {
    if (typeof window.getMiaTranslation === 'function') {
        const translated = window.getMiaTranslation(key);
        if (translated) return translated;
    }
    return fallback;
}


// ================================================================
// PRICES FALLBACK
// ================================================================

// Make sure PRICES is loaded
if (typeof PRICES === 'undefined') {
    window.PRICES = {
        'hanoi-spring': 750000,
        'hanoi-summer': 750000,
        'hanoi-autumn': 750000,
        'oldquarter': 1200000,
        'extra-guest-hanoi': 150000,
        'extra-guest-oldquarter': 200000
    };
}

// Room capacity mapping
const ROOM_CAPACITY = {
    "Spring Room": 3,
    "Summer Room": 3,
    "Autumn Room": 3,
    "Entire Apartment (3 queen beds)": 6
};

// ================================================================
// OPTIMIZATION: Caching & Debouncing
// ================================================================
const availabilityCache = new Map();
let availabilityCheckInProgress = false;
let lastAvailabilityResult = null;
let availabilityDebounceTimer = null;
let slowConnectionTimeout = null;

let currentAvailabilityStatus = { available: false, checked: false };

// PROPERTIES DATA
const PROPERTIES = [
    {
        id: 'hanoi',
        name: 'MiaCasa Hanoi',
        badge: 'Rooms with Kitchenette',
        location: '92 Ngh. 51 Ng. Linh Quang, Văn Chương, Văn Miếu – Quốc Tử Giám, Hà Nội',
        desc: 'Three private boho rooms — Spring, Summer, and Autumn — each with attached bathroom and kitchenette.',
        maxGuests: 8,
        maxGuestsPerRoom: 3,
        rating: '4.9',
        priceNote: 'From ' + (typeof PRICES !== 'undefined' ? PRICES['hanoi-spring'].toLocaleString() : '750,000') + getConfigCurrency() + ' / room / night',
        vn: {
            badge: 'Phòng có bếp nhỏ',
            desc: 'Ba phòng boho riêng tư — Xuân, Hạ và Thu — mỗi phòng có phòng tắm riêng và bếp nhỏ.',
            priceNote: 'Từ ' + (typeof PRICES !== 'undefined' ? PRICES['hanoi-spring'].toLocaleString('vi-VN') : '750.000') + getConfigCurrency() + ' / phòng / đêm',
            rooms: ['Phòng Xuân', 'Phòng Hạ', 'Phòng Thu']
        },
        heroImg: 'https://res.cloudinary.com/dczfocztf/image/upload/c_scale,w_600,f_auto,q_60/v1775638632/DSC_6634_pwmg8r.jpg',
        pageUrl: 'miacasa-hanoi.html',
        rooms: ['Spring Room', 'Summer Room', 'Autumn Room']
    },
    {
        id: 'oldquarter',
        name: 'MiaCasaOldQuarter',
        badge: 'Whole Apartment',
        location: '38 P. Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội',
        desc: 'A whole apartment in the heart of the Old Quarter. Two beds on the main level and one in the upper attic.',
        maxGuests: 6,
        rating: '4.8',
        priceNote: 'From ' + (typeof PRICES !== 'undefined' ? PRICES.oldquarter.toLocaleString() : '1,200,000') + getConfigCurrency() + ' / night · Base rate for 2 guests',
        vn: {
            badge: 'Toàn bộ căn hộ',
            desc: 'Toàn bộ căn hộ giữa lòng Phố Cổ. Hai giường ở tầng chính và một giường ở gác xép phía trên.',
            priceNote: 'Từ ' + (typeof PRICES !== 'undefined' ? PRICES.oldquarter.toLocaleString('vi-VN') : '1.200.000') + getConfigCurrency() + ' / đêm · Giá cơ bản cho 2 khách',
            rooms: ['Toàn bộ căn hộ (3 giường đôi)']
        },
        heroImg: 'https://res.cloudinary.com/dczfocztf/image/upload/c_scale,w_600,f_auto,q_60/v1775735576/att.dQ-7EPkykJ12fIQMeB_uBO8MXd0D5gsS8gmaVrRL7Rg_e86yd8.jpg',
        pageUrl: 'miacasa-oldquarter.html',
        rooms: ['Entire Apartment (3 queen beds)']
    }
];

// ── BOOKING FORM LANGUAGE RENDER ──────────────────────────────

/**
 * Re-render the booking form dropdowns with current language
 * This ensures room names and guest counts update when language changes
 */
function renderBookingFormLanguage() {
    const lang = window.currentLang || getConfigDefaultLang();  // ✅ FIXED
    
    // Get the current property
    const prop = PROPERTIES.find(p => p.id === activeProp);
    if (!prop) return;
    
    // 1. Update room options
    const roomSelect = document.getElementById('room-type-sel');
    if (roomSelect) {
        // Store current selection
        const currentVal = roomSelect.value;
        
        // Get translated room names
        const rooms = getField(prop, 'rooms', lang);
        
        // Rebuild options
        roomSelect.innerHTML = rooms.map(r => `<option value="${r}">${r}</option>`).join('');
        
        // Restore selection if still valid
        if (currentVal && rooms.includes(currentVal)) {
            roomSelect.value = currentVal;
        } else if (rooms.length > 0) {
            roomSelect.value = rooms[0];
        }
    }
    
    // 2. Update guest options
    const guestSelect = document.getElementById('guests-sel');
    if (guestSelect) {
        const currentVal = guestSelect.value;
        const maxGuests = prop.maxGuestsPerRoom || prop.maxGuests || 3;
        const guestWord = lang === 'vn' ? 'Khách' : 'Guest';
        const guestWordPl = lang === 'vn' ? 'Khách' : 'Guests';
        
        guestSelect.innerHTML = '';
        for (let i = 1; i <= maxGuests; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i + ' ' + (i === 1 ? guestWord : guestWordPl);
            guestSelect.appendChild(opt);
        }
        
        // Restore selection
        if (currentVal && parseInt(currentVal) <= maxGuests) {
            guestSelect.value = currentVal;
        } else {
            guestSelect.value = Math.min(maxGuests, 2);
        }
    }
    
    // 3. Update property selector buttons (if they exist)
    document.querySelectorAll('.prop-select-btn').forEach(btn => {
        const propId = btn.id?.replace('bsb-', '');
        const propData = PROPERTIES.find(p => p.id === propId);
        if (propData && btn) {
            const badge = getField(propData, 'badge', lang);
            const nameSpan = btn.querySelector('.pbn');
            const badgeSpan = btn.querySelector('.pbs');
            if (nameSpan) nameSpan.textContent = propData.name;
            if (badgeSpan) badgeSpan.textContent = badge + ' · ' + propData.rating + '★';
        }
    });
    
    // 4. Update pricing note
    const pricingNote = document.getElementById('pricing-note');
    if (pricingNote && prop) {
        const priceNote = getField(prop, 'priceNote', lang);
        pricingNote.innerHTML = `💡 ${priceNote}. ${lang === 'vn' ? 'Giá phụ thuộc vào ngày, số lượng khách và độ dài lưu trú.' : 'Final pricing depends on dates, number of guests, and length of stay.'}`;
    }
}

// Register with the translation hook - FIXED VERSION (no recursion)
(function registerTranslationHook() {
    const hookFn = function(lang) {
        renderBookingFormLanguage();
        // Also refresh availability to update any UI text
        //updateAvailabilityAndUI();
    };
    
    // Check if lang.js already loaded and has registerTranslationHook
    if (typeof window.registerTranslationHook === 'function' && 
        window.registerTranslationHook !== registerTranslationHook) {
        window.registerTranslationHook(hookFn);
    } else {
        // Store pending hooks for when lang.js loads
        if (!window._pendingHooks) {
            window._pendingHooks = [];
        }
        window._pendingHooks.push(hookFn);
    }
})();

// Make function globally available
window.renderBookingFormLanguage = renderBookingFormLanguage;

// PRICING ENGINE
const SPECIAL_RANGES = [
    ['2025-01-28', '2025-02-04'], ['2026-02-14', '2026-02-21'],
    ['2025-08-30', '2025-09-03'], ['2026-08-30', '2026-09-03'],
    ['2025-12-23', '2025-12-27'], ['2026-12-23', '2026-12-27']
];

function isSpecialDay(dateStr) {
    const d = new Date(dateStr);
    for (const [s, e] of SPECIAL_RANGES) {
        if (d >= new Date(s) && d <= new Date(e)) return true;
    }
    return false;
}

function isWeekendNight(dateStr) {
    const day = new Date(dateStr).getDay();
    return day === 5 || day === 6;
}

function nightRate(dateStr, propId, room) {
    // 1. Check server-side price overrides first (admin panel → Price Overrides)
    //    Override is matched by room name + date range.
    if (room) {
        const overridePrice = getOverridePrice(room, dateStr);
        if (overridePrice !== null) return overridePrice;
    }

    // 2. Fall back to standard seasonal/weekend rates from prices.js
    const hanoiRates = {
        weekday: typeof PRICES !== 'undefined' ? PRICES['hanoi-spring'] : 750000,
        weekend: typeof PRICES !== 'undefined' ? PRICES['hanoi-weekend'] : 800000,
        special: typeof PRICES !== 'undefined' ? PRICES['hanoi-special'] : 900000
    };
    const oqRates = {
        weekday: typeof PRICES !== 'undefined' ? PRICES.oldquarter : 1200000,
        weekend: typeof PRICES !== 'undefined' ? PRICES['oldquarter-weekend'] : 1350000,
        special: typeof PRICES !== 'undefined' ? PRICES['oldquarter-special'] : 1400000
    };
    const r = propId === 'hanoi' ? hanoiRates : oqRates;
    if (isSpecialDay(dateStr)) return r.special;
    if (isWeekendNight(dateStr)) return r.weekend;
    return r.weekday;
}

function calcTotal(propId, checkIn, checkOut, guests) {
    const ci = new Date(checkIn), co = new Date(checkOut);
    if (isNaN(ci) || isNaN(co) || co <= ci) return null;

    // Get the selected room name so nightRate() can match overrides precisely
    const room = document.getElementById('room-type-sel')?.value || null;

    let nights = 0, baseTotal = 0;
    const d = new Date(ci);
    while (d < co) {
        baseTotal += nightRate(d.toISOString().slice(0, 10), propId, room);
        nights++;
        d.setDate(d.getDate() + 1);
    }

    let extra = 0;
    if (guests > INCLUDED_GUESTS) {
        const extraFee = propId === 'hanoi' ? (typeof PRICES !== 'undefined' ? PRICES['extra-guest-hanoi'] : 150000) : (typeof PRICES !== 'undefined' ? PRICES['extra-guest-oldquarter'] : 200000);
        extra = (guests - INCLUDED_GUESTS) * extraFee * nights;
    }
    return { nights, baseTotal, extra, total: baseTotal + extra };
}

// BOOKING ID GENERATOR
const ROOM_CODE = {
    'Spring Room': 'SPR', 'Summer Room': 'SUM', 'Autumn Room': 'AUT',
    'Entire Apartment (3 queen beds)': 'OLQ'
};
const PROP_CODE = { 'hanoi': 'MCH', 'oldquarter': 'MCOQ' };

function getBookingCounter(key) {
    const v = parseInt(localStorage.getItem('mia_ctr_' + key) || '0') + 1;
    localStorage.setItem('mia_ctr_' + key, v);
    return v;
}

function makeBookingId(propId, room) {
    const pc = PROP_CODE[propId] || 'MIA';
    const rc = ROOM_CODE[room] || 'GEN';
    const n = getBookingCounter(pc + '_' + rc);
    return pc + '-' + rc + '-' + String(n).padStart(4, '0');
}

// ================================================================
// PRICE OVERRIDES — fetched once from the server on page load
// ================================================================
const PRICE_OVERRIDE_CACHE_KEY = 'mia_price_overrides_v1';
const PRICE_RULE_PREFIX = 'MIA_PRICE_RULE:';

let _priceOverrides = [];

(function initPriceOverrides() {
    try {
        if (window._cachedPriceOverrides && Array.isArray(window._cachedPriceOverrides)) {
            _priceOverrides = window._cachedPriceOverrides
                .map(function (row) {
                    return {
                        id:    row[0],
                        room:  String(row[1] || '').trim(),
                        from:  String(row[2] || '').trim(),
                        to:    String(row[3] || '').trim(),
                        price: Number(row[4]) || 0,
                        note:  row[5] || '',
                        rule:  null
                    };
                })
                .filter(function (o) { return o.room && o.from && o.to && o.price > 0; });
        }
    } catch (e) { /* ignore */ }
})();
let _overridesFetched = false;
let _captchaValidated  = false;

function _parseOverrideRows(rows) {
    return rows
        .map(row => ({
            id:    row[0],
            room:  String(row[1] || '').trim(),
            from:  String(row[2] || '').trim(),
            to:    String(row[3] || '').trim(),
            price: Number(row[4]) || 0,
            note:  row[5] || '',
            rule:  parsePriceOverrideRule(row[5])
        }))
        .filter(o => o.room && o.from && o.to && o.price > 0);
}

async function fetchPriceOverrides() {
    if (_overridesFetched) return;
    _overridesFetched = true;

    try {
        const cached = localStorage.getItem(PRICE_OVERRIDE_CACHE_KEY);
        if (cached) {
            const { data } = JSON.parse(cached);
            if (Array.isArray(data) && data.length > 0) {
                _priceOverrides = data;
                refreshAllPriceDisplays();
            }
        }
    } catch (e) { /* ignore cache read errors */ }

    try {
        const res = await fetch('/api/log-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'getPriceOverrides' })
        });

        if (!res.ok) return;

        const json = await res.json();
        const rows = json?.data?.data || json?.data || [];

        if (Array.isArray(rows)) {
            const fresh = _parseOverrideRows(rows);
            const changed = JSON.stringify(fresh) !== JSON.stringify(_priceOverrides);
            _priceOverrides = fresh;

            try {
                localStorage.setItem(PRICE_OVERRIDE_CACHE_KEY, JSON.stringify({
                    ts: Date.now(),
                    data: fresh
                }));
            } catch (e) { /* ignore */ }

            if (changed) refreshAllPriceDisplays();
        }

    } catch (e) {
        // Network failed — cached or PRICES fallback already shown
    }
}

function parseLocalDate(dateStr) {
    if (!dateStr) return null;
    const iso = new Date(dateStr);
    if (!isNaN(iso)) {
        iso.setHours(0, 0, 0, 0);
        return iso;
    }
    const parts = String(dateStr).split('-').map(Number);
    if (parts.length !== 3 || parts.some(n => !Number.isFinite(n))) {
        return null;
    }
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function parsePriceOverrideRule(note) {
    const raw = String(note || '');
    const index = raw.indexOf(PRICE_RULE_PREFIX);
    if (index === -1) return null;

    try {
        const rule = JSON.parse(raw.slice(index + PRICE_RULE_PREFIX.length).trim());
        if (rule && rule.type === 'weekday' && Array.isArray(rule.days)) {
            return {
                type: 'weekday',
                days: rule.days.map(Number).filter(n => n >= 0 && n <= 6),
                months: Array.isArray(rule.months)
                    ? rule.months.map(Number).filter(n => n >= 1 && n <= 12)
                    : []
            };
        }
    } catch (e) {}

    return null;
}

function overrideAppliesToDate(override, date) {
    const from = parseLocalDate(override.from);
    const to = parseLocalDate(override.to);
    if (!from || !to || date < from || date > to) return false;

    if (!override.rule) return true;

    if (override.rule.type === 'weekday') {
        const dayMatches = override.rule.days.includes(date.getDay());
        const months = override.rule.months || [];
        const monthMatches = months.length === 0 || months.includes(date.getMonth() + 1);
        return dayMatches && monthMatches;
    }

    return false;
}

function overridePriority(override) {
    if (!override.rule) return 20;
    if (override.rule.type === 'weekday') return 10;
    return 0;
}

function getEffectiveFromPrice(propId) {
    const basePrice = propId === 'hanoi'
        ? (typeof PRICES !== 'undefined' ? PRICES['hanoi-spring'] : 750000)
        : (typeof PRICES !== 'undefined' ? PRICES.oldquarter : 1200000);

    if (!_priceOverrides.length) return basePrice;

    const rooms = propId === 'hanoi'
        ? ['Spring Room', 'Summer Room', 'Autumn Room']
        : ['Entire Apartment (3 queen beds)', 'Entire Apartment (3 king beds)'];

    const today = new Date();
    today.setHours(0,0,0,0);
    const horizon = new Date(today);
    horizon.setDate(horizon.getDate() + 90);

    let lowest = basePrice;
    for (const o of _priceOverrides) {
        if (!rooms.includes(o.room)) continue;
        if (o.price <= 0) continue;
        const from = parseLocalDate(o.from);
        const to   = parseLocalDate(o.to);
        if (!from || !to) continue;
        if (to < today || from > horizon) continue;
        if (o.price < lowest) lowest = o.price;
    }
    return lowest;
}

function refreshAllPriceDisplays() {
    const hanoiFrom = getEffectiveFromPrice('hanoi');
    const oqFrom    = getEffectiveFromPrice('oldquarter');
    const lang = window.currentLang || localStorage.getItem('mia_lang') || getConfigDefaultLang();
    const currencySymbol = getConfigCurrency();

    const selHanoi = document.getElementById('selector-hanoi-price');
    if (selHanoi) selHanoi.textContent = hanoiFrom.toLocaleString('vi-VN');

    const selOQ = document.getElementById('selector-oldquarter-price');
    if (selOQ) selOQ.textContent = oqFrom.toLocaleString('vi-VN');

    const cmpHanoi = document.getElementById('compare-hanoi-price');
    if (cmpHanoi) cmpHanoi.textContent = hanoiFrom.toLocaleString('vi-VN');

    const cmpOQ = document.getElementById('compare-oldquarter-price');
    if (cmpOQ) cmpOQ.textContent = oqFrom.toLocaleString('vi-VN');

    document.querySelectorAll('.room-card-price-amount').forEach(el => {
        const prop = el.dataset.prop;
        if (prop === 'hanoi') el.textContent = hanoiFrom.toLocaleString('vi-VN') + currencySymbol;
        if (prop === 'oldquarter') el.textContent = oqFrom.toLocaleString('vi-VN') + currencySymbol;
    });

    const airbnbHanoi = (typeof PRICES !== 'undefined' && PRICES['airbnb-price-hanoi']) ? PRICES['airbnb-price-hanoi'] : 880000;
    const airbnbOQ    = (typeof PRICES !== 'undefined' && PRICES['airbnb-price-oldquarter']) ? PRICES['airbnb-price-oldquarter'] : 1410000;
    const savedHanoi  = Math.round(((airbnbHanoi - hanoiFrom) / airbnbHanoi) * 100);
    const savedOQ     = Math.round(((airbnbOQ - oqFrom) / airbnbOQ) * 100);

    const saveHanoiEl = document.getElementById('selector-hanoi-save');
    if (saveHanoiEl) {
        saveHanoiEl.textContent = lang === 'vn'
            ? `Tiết kiệm ${savedHanoi}% so với Airbnb`
            : `Save ${savedHanoi}% vs Airbnb`;
    }
    const saveOQEl = document.getElementById('selector-oldquarter-save');
    if (saveOQEl) {
        saveOQEl.textContent = lang === 'vn'
            ? `Tiết kiệm ${savedOQ}% so với Airbnb`
            : `Save ${savedOQ}% vs Airbnb`;
    }

    const estHanoi = document.getElementById('price-est-hanoi-val');
    if (estHanoi) estHanoi.textContent = (hanoiFrom * 2).toLocaleString('vi-VN') + currencySymbol;
    const estOQ = document.getElementById('price-est-oq-val');
    if (estOQ) estOQ.textContent = (oqFrom * 2).toLocaleString('vi-VN') + currencySymbol;
}

function getOverridePrice(room, dateStr) {
    if (!_priceOverrides.length) return null;
    const d = parseLocalDate(dateStr);
    if (!d) return null;

    let bestMatch = null;
    for (const o of _priceOverrides) {
        if (o.room !== room) continue;
        if (!overrideAppliesToDate(o, d)) continue;

        if (
            !bestMatch ||
            overridePriority(o) > overridePriority(bestMatch) ||
            (overridePriority(o) === overridePriority(bestMatch) && Number(o.id) > Number(bestMatch.id))
        ) {
            bestMatch = o;
        }
    }

    return bestMatch ? bestMatch.price : null;
}

// ================================================================
// UI HELPERS - Use config for currency
// ================================================================

function fmtVND(n) { 
    const currencySymbol = getConfigCurrency();
    return n.toLocaleString('vi-VN') + currencySymbol; 
}

function fmtUSD(n) { 
    const rate = getConfigExchangeRate();
    return '$' + (n / rate).toFixed(0); 
}

function fmtDateVN(dateStr) {
    if (!dateStr) return '—';
    const parts = dateStr.split('-');
    if (parts.length === 3) return parts[2] + '/' + parts[1] + '/' + parts[0];
    return dateStr;
}

let activeProp = 'hanoi';
window.activeProp = activeProp;
let currentBookingId = '';
let currentBookingKey = '';
let lastPriceResult = null;
let selectedPayTab = 'paypal';

// ================================================================
// AVAILABILITY CHECK - Calls the API endpoint
// ================================================================

async function checkRoomAvailability(room, checkIn, checkOut) {
    const cacheKey = `${room}_${checkIn}_${checkOut}`;
    const cached = availabilityCache.get(cacheKey);
    
    if (cached && (Date.now() - cached.timestamp) < 120000) {
        return cached.data;
    }
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                action: 'checkRoomAvailability', 
                room, 
                checkIn, 
                checkOut 
            })
        });
        const data = await response.json();
        
        availabilityCache.set(cacheKey, {
            data: data,
            timestamp: Date.now()
        });
        
        return data;
    } catch (error) {
        console.error('Availability check failed:', error);
        return { available: true };
    }
}

// Background availability check (does not block UI)
async function checkAvailabilityInBackground(room, ci, co) {
    if (!room || !ci || !co) return;
    if (availabilityCheckInProgress) return;
    
    availabilityCheckInProgress = true;
    
    const availabilityMsgDiv = document.getElementById('availability-message');
    if (availabilityMsgDiv && availabilityMsgDiv.innerHTML === miaT('checking-availability', '⏳ Checking availability...')) {
        // Message already showing, don't change
    } else if (availabilityMsgDiv) {
        availabilityMsgDiv.innerHTML = miaT('checking-availability', '⏳ Checking availability...');
        availabilityMsgDiv.className = 'loading';
        availabilityMsgDiv.style.display = 'block';
    }
    
    // Set a timeout to show if it's taking too long
    slowConnectionTimeout = setTimeout(() => {
        if (availabilityMsgDiv && availabilityMsgDiv.innerHTML === miaT('checking-availability', '⏳ Checking availability...')) {
            availabilityMsgDiv.innerHTML = miaT('booking-still-checking', '⏳ Still checking... you can continue filling your details');
        }
    }, 2000);
    
    try {
        const availability = await checkRoomAvailability(room, ci, co);
        clearTimeout(slowConnectionTimeout);
        currentAvailabilityStatus = availability;
        lastAvailabilityResult = availability;
        availabilityCheckInProgress = false;
        
        if (availability.available) {
            if (availabilityMsgDiv) {
                availabilityMsgDiv.innerHTML = miaT('booking-room-available-proceed', '✅ Room available! You can proceed.');
                availabilityMsgDiv.className = 'available';
            }
            // Show payment section if user details are already filled
            if (areUserDetailsFilled()) {
                const paymentSection = document.getElementById('mia-payment-section');
                if (paymentSection) paymentSection.style.display = 'block';
                if (typeof generateQRCode === 'function') generateQRCode();
            }
        } else {
            if (availabilityMsgDiv) {
                availabilityMsgDiv.innerHTML = availability.bothPropertiesBooked 
                    ? miaT('both-booked', '❌ Both properties are booked for these dates. Please try different dates.')
                    : miaT('room-not-available', '❌ This room is booked. Try our other property or choose different dates.');
                availabilityMsgDiv.className = 'unavailable';
            }
            const paymentSection = document.getElementById('mia-payment-section');
            if (paymentSection) paymentSection.style.display = 'none';
        }
        
        // Update price again with confirmed availability
        const guests = document.getElementById('guests-sel')?.value;
        if (availability.available && ci && co && guests) {
            const result = calcTotal(activeProp, ci, co, parseInt(guests));
            if (result) {
                lastPriceResult = result;
                updatePriceDisplayContent(result, ci, co, room);
                const priceBox = document.getElementById('mia-price-box');
                if (priceBox) priceBox.style.display = 'block';
            }
        }
    } catch (error) {
        clearTimeout(slowConnectionTimeout);
        console.error('Availability check error:', error);
        availabilityCheckInProgress = false;
        const availabilityMsgDiv = document.getElementById('availability-message');
        if (availabilityMsgDiv) {
            availabilityMsgDiv.innerHTML = miaT('booking-availability-error', '⚠️ Unable to check availability. Please try again.');
            availabilityMsgDiv.className = 'error';
        }
    }
}

// Debounced version to prevent multiple rapid calls
function debouncedUpdateAvailability() {
    clearTimeout(availabilityDebounceTimer);
    availabilityDebounceTimer = setTimeout(() => {
        updateAvailabilityAndUI();
    }, 500);
}

function setMinDates() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    if (checkin) checkin.min = todayStr;
    if (checkout) checkout.min = todayStr;
}

function areUserDetailsFilled() {
    const name = document.getElementById('guest-name')?.value?.trim();
    const email = document.getElementById('guest-email')?.value?.trim();
    const phone = document.getElementById('guest-phone-number')?.value?.trim();
    return !!(name && email && phone);
}

function updateGuestOptions() {
    const room = document.getElementById('room-type-sel')?.value;
    const guestSelect = document.getElementById('guests-sel');
    if (!room || !guestSelect) return;
    
    const maxGuests = ROOM_CAPACITY[room] || 2;
    const currentValue = parseInt(guestSelect.value || '1');
    guestSelect.innerHTML = '';
    for (let i = 1; i <= maxGuests; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i + (i === 1 ? ' guest' : ' guests');
        guestSelect.appendChild(opt);
    }
    guestSelect.value = Math.min(currentValue, maxGuests);
    //updateAvailabilityAndUI();
}

function updatePriceDisplayContent(result, ci, co, room) {
    const propName = PROPERTIES.find(p => p.id === activeProp)?.name || activeProp;
    const prVal = document.getElementById('ps-pr-val');
    const datesVal = document.getElementById('ps-dates-val');
    const extraRow = document.getElementById('ps-extrarow');
    const extraVal = document.getElementById('ps-extra-val');
    const totalVal = document.getElementById('ps-total-val');
    const bidVal = document.getElementById('ps-bid');
    
    if (prVal) prVal.textContent = propName + ' · ' + room;
    if (datesVal) datesVal.textContent = fmtDateVN(ci) + ' → ' + fmtDateVN(co) + ' (' + result.nights + ' night' + (result.nights > 1 ? 's' : '') + ')';
    
    if (result.extra > 0) {
        if (extraRow) extraRow.style.display = 'flex';
        if (extraVal) extraVal.textContent = fmtVND(result.extra) + ' (~' + fmtUSD(result.extra) + ')';
    } else {
        if (extraRow) extraRow.style.display = 'none';
    }
    
    if (totalVal) totalVal.textContent = fmtVND(result.total) + ' (~' + fmtUSD(result.total) + ')';
    if (bidVal) bidVal.textContent = currentBookingId;
}

function showCancellationMessage(checkInDate) {
    const msgDiv = document.getElementById('cancellation-message');
    if (!msgDiv) return;
    
    const cancellationDate = new Date(checkInDate);
    cancellationDate.setDate(cancellationDate.getDate() - 2);
    const lang = window.currentLang || getConfigDefaultLang();  // ✅ FIXED
    const formattedDate = cancellationDate.toLocaleDateString(lang === 'vn' ? 'vi-VN' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    msgDiv.innerHTML = lang === 'vn' 
        ? `✓ Hủy miễn phí đến ${formattedDate}`
        : `✓ Free cancellation until ${formattedDate}`;
    msgDiv.style.display = 'block';
}

// ================================================================
// UPDATED: Non-blocking updateAvailabilityAndUI
// ================================================================
async function updateAvailabilityAndUI() {
    const room = document.getElementById('room-type-sel')?.value;
    const ci = document.getElementById('checkin')?.value;
    const co = document.getElementById('checkout')?.value;
    const guests = document.getElementById('guests-sel')?.value;
    
    const availabilityMsgDiv = document.getElementById('availability-message');
    const cancellationMsgDiv = document.getElementById('cancellation-message');
    const priceBox = document.getElementById('mia-price-box');
    const paymentSection = document.getElementById('mia-payment-section');
    const guestDetailsSection = document.getElementById('guest-details');
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkInDateObj = ci ? new Date(ci) : null;
    if (checkInDateObj) checkInDateObj.setHours(0, 0, 0, 0);

    // Past date check
    if (ci && checkInDateObj < today) {
        if (availabilityMsgDiv) {
            availabilityMsgDiv.innerHTML = miaT('booking-past-dates', '❌ Cannot select past dates');
            availabilityMsgDiv.style.display = 'block';
        }
        if (priceBox) priceBox.style.display = 'none';
        if (paymentSection) paymentSection.style.display = 'none';
        if (guestDetailsSection) guestDetailsSection.style.display = 'none';
        return;
    }
    
    // Check if all required inputs are filled
    if (!room || !ci || !co || !guests) {
        if (availabilityMsgDiv) {
            if (!ci || !co) availabilityMsgDiv.innerHTML = miaT('booking-select-dates', '📅 Please select check-in and check-out dates');
            else if (!room) availabilityMsgDiv.innerHTML = miaT('booking-select-room', '🏠 Please select a room');
            else if (!guests) availabilityMsgDiv.innerHTML = miaT('booking-select-guests', '👥 Please select number of guests');
            else availabilityMsgDiv.innerHTML = miaT('booking-complete-details', '📋 Please complete all booking details');
            availabilityMsgDiv.style.display = 'block';
        }
        if (priceBox) priceBox.style.display = 'none';
        if (paymentSection) paymentSection.style.display = 'none';
        if (cancellationMsgDiv) cancellationMsgDiv.style.display = 'none';
        if (guestDetailsSection) guestDetailsSection.style.display = 'none';
        return;
    }
    
    // Validate date order
    if (new Date(co) <= new Date(ci)) {
        if (availabilityMsgDiv) {
            availabilityMsgDiv.innerHTML = miaT('booking-date-order-error', '⚠️ Check-out date must be after check-in date');
            availabilityMsgDiv.style.display = 'block';
        }
        if (priceBox) priceBox.style.display = 'none';
        if (guestDetailsSection) guestDetailsSection.style.display = 'none';
        return;
    }
    
    // SHOW GUEST DETAILS SECTION IMMEDIATELY (don't wait for availability)
    if (guestDetailsSection && guestDetailsSection.style.display !== 'block') {
        guestDetailsSection.style.display = 'block';
        //console.log('✅ Guest details section shown immediately');
    }
    
    // Generate booking ID immediately
    const newKey = activeProp + '|' + room;
    if (!currentBookingId || currentBookingKey !== newKey) {
        currentBookingId = makeBookingId(activeProp, room);
        currentBookingKey = newKey;
    }
    
    // Calculate and show price immediately (estimate)
    const result = calcTotal(activeProp, ci, co, parseInt(guests));
    if (result) {
        lastPriceResult = result;
        updatePriceDisplayContent(result, ci, co, room);
        if (priceBox) priceBox.style.display = 'block';
    }
    
    // Show cancellation message immediately
    if (ci) showCancellationMessage(ci);
    
    // Check availability in background (non-blocking)
    // But first, check if we have a recent cached result
    const cacheKey = `${room}_${ci}_${co}`;
    const cached = availabilityCache.get(cacheKey);
    
    if (cached && (Date.now() - cached.timestamp) < 120000) {
        // Use cached result instantly
        currentAvailabilityStatus = cached.data;
        lastAvailabilityResult = cached.data;
        
        if (cached.data.available) {
            if (availabilityMsgDiv) {
                availabilityMsgDiv.innerHTML = miaT('booking-room-available-proceed', '✅ Room available! You can proceed.');
                availabilityMsgDiv.className = 'available';
            }
            // Show payment section if user details are already filled
            if (areUserDetailsFilled()) {
                if (paymentSection) paymentSection.style.display = 'block';
                if (typeof generateQRCode === 'function') generateQRCode();
            }
        } else {
            if (availabilityMsgDiv) {
                availabilityMsgDiv.innerHTML = cached.data.bothPropertiesBooked 
                    ? miaT('both-booked', '❌ Both properties are booked for these dates. Please try different dates.')
                    : miaT('room-not-available', '❌ This room is booked. Try our other property or choose different dates.');
                availabilityMsgDiv.className = 'unavailable';
            }
            if (paymentSection) paymentSection.style.display = 'none';
        }
    } else {
        // No cache - show loading and check in background
        if (availabilityMsgDiv) {
            availabilityMsgDiv.innerHTML = miaT('checking-availability', '⏳ Checking availability...');
            availabilityMsgDiv.className = 'loading';
            availabilityMsgDiv.style.display = 'block';
        }
        // Check in background (non-blocking)
        checkAvailabilityInBackground(room, ci, co);
    }
    
    // Show payment section if user details are filled AND we have availability confirmation
    if (areUserDetailsFilled() && lastAvailabilityResult && lastAvailabilityResult.available) {
        if (paymentSection && paymentSection.style.display !== 'block') {
            paymentSection.style.display = 'block';
            if (typeof generateQRCode === 'function') generateQRCode();
        }
    } else if (!areUserDetailsFilled()) {
        if (paymentSection) paymentSection.style.display = 'none';
    }
}

function resetBookingForm() {
  // Reset CAPTCHA validation flag
  _captchaValidated = false;
  
  // Hide confirmation boxes and remove pending messages
  const confirmBox = document.getElementById('mia-confirm-box');
  const priceBox = document.getElementById('mia-price-box');
  const paymentSection = document.getElementById('mia-payment-section');
  const pendingMessage = document.getElementById('payment-pending-message');
  const paymentWaiting = document.getElementById('payment-waiting');
  
  if (confirmBox) confirmBox.style.display = 'none';
  if (priceBox) priceBox.style.display = 'none';
  if (paymentSection) paymentSection.style.display = 'none';
  if (pendingMessage) pendingMessage.style.display = 'none';
  if (paymentWaiting) paymentWaiting.remove();
  
  // Clear guest details
  const guestName = document.getElementById('guest-name');
  const guestEmail = document.getElementById('guest-email');
  const guestPhone = document.getElementById('guest-phone-number');
  
  if (guestName) guestName.value = '';
  if (guestEmail) guestEmail.value = '';
  if (guestPhone) guestPhone.value = '';
  
  // Clear dates
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  if (checkin) checkin.value = '';
  if (checkout) checkout.value = '';
  
  // Reset CAPTCHA - generate new numbers and clear answer
  const captchaNum1 = document.getElementById('captcha-num1');
  const captchaNum2 = document.getElementById('captcha-num2');
  const captchaAnswer = document.getElementById('captcha-answer');
  
  if (captchaNum1 && captchaNum2) {
    // Generate new random numbers (1-10)
    captchaNum1.textContent = Math.floor(Math.random() * 10) + 1;
    captchaNum2.textContent = Math.floor(Math.random() * 10) + 1;
  }
  if (captchaAnswer) captchaAnswer.value = '';
  
  // Clear CAPTCHA error
  const captchaError = document.getElementById('captcha-error');
  if (captchaError) captchaError.style.display = 'none';
  
  // Clear payment error
  const payError = document.getElementById('pay-error');
  if (payError) payError.style.display = 'none';
  
  // Reset availability message
  const availabilityMsg = document.getElementById('availability-message');
  if (availabilityMsg) {
    availabilityMsg.innerHTML = '';
    availabilityMsg.style.display = 'none';
  }
  
  // Reset cancellation message
  const cancellationMsg = document.getElementById('cancellation-message');
  if (cancellationMsg) cancellationMsg.style.display = 'none';
  
  // Reset booking variables
  lastPriceResult = null;
  currentBookingId = '';
  currentBookingKey = '';
  currentAvailabilityStatus = { available: false, checked: false };
  lastAvailabilityResult = null;
  
  // Clear availability cache
  availabilityCache.clear();
  
  // Reset payment tab to PayPal (default)
  selectPayTab('paypal');
  
  // Reset any disabled buttons
  const cashBtn = document.getElementById('cash-confirm-btn');
  const paypalBtn = document.getElementById('paypal-pay-btn');
  const vietqrBtn = document.getElementById('vietqr-submit-btn');
  
  if (cashBtn) {
    cashBtn.disabled = false;
    cashBtn.textContent = window.currentLang === 'vn' ? 'Xác nhận đặt phòng →' : 'Confirm Booking →';
  }
  if (paypalBtn) {
    paypalBtn.disabled = false;
    paypalBtn.textContent = window.currentLang === 'vn' ? 'Thanh toán PayPal' : 'Pay with PayPal';
  }
  if (vietqrBtn) {
    vietqrBtn.disabled = false;
    vietqrBtn.textContent = window.currentLang === 'vn' ? 'Gửi bằng chứng thanh toán →' : 'Submit Payment Proof →';
  }
  
  // Re-run availability check to reset UI
  updateAvailabilityAndUI();
  
  // Scroll back to booking form
  /* const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } */
  
  console.log('✅ Booking form reset complete');
}

// ================================================================
// RENDER FUNCTIONS
// ================================================================

function getField(p, field, lang) {
    if (lang === 'vn' && p.vn && p.vn[field] !== undefined) return p.vn[field];
    return p[field];
}

function renderBookingSelector() {
    const sel = document.getElementById('booking-prop-sel');
    if (!sel) return;
    
    const lang = window.currentLang || getConfigDefaultLang();  // ✅ FIXED
    sel.innerHTML = '';
    
    // Check URL for property parameter to set initial active state
    const urlParams = new URLSearchParams(window.location.search);
    const propertyParam = urlParams.get('property');
    const shouldSelectOldQuarter = (propertyParam === 'oldquarter');
    
    PROPERTIES.forEach((p, i) => {
        const badge = getField(p, 'badge', lang);
        const btn = document.createElement('button');
        
        // Set active based on URL parameter, not just index
        let isActive = false;
        if (shouldSelectOldQuarter && p.id === 'oldquarter') {
            isActive = true;
        } else if (!shouldSelectOldQuarter && i === 0) {
            isActive = true;
        }
        
        btn.className = 'prop-select-btn' + (isActive ? ' active' : '');
        btn.id = 'bsb-' + p.id;
        btn.onclick = () => selectProp(p.id);
        btn.innerHTML = `<span class="pbn">${p.name}</span><span class="pbs">${badge} · ${p.rating}★</span>`;
        sel.appendChild(btn);
        console.log(`🔘 Created button: ${btn.id}, active: ${isActive}`);
    });
}

// ================================================================
// CORE FUNCTIONS
// ================================================================

function selectProp(id) {
    console.log('🏠 selectProp called with id:', id);
    console.log('📍 Current activeProp before:', activeProp);
    
    activeProp = id;
    document.querySelectorAll('.prop-select-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('bsb-' + id);
    if (activeBtn) {
        activeBtn.classList.add('active');
        console.log('✅ Active button found and activated:', activeBtn.id);
    } else {
        console.warn('⚠️ Active button not found for id:', id);
        // Try to find it again after a small delay
        setTimeout(() => {
            const retryBtn = document.getElementById('bsb-' + id);
            if (retryBtn) {
                retryBtn.classList.add('active');
                console.log('✅ Retry: Active button activated:', retryBtn.id);
            }
        }, 100);
    }
    
    // Update URL with property parameter (but don't reload)
    const url = new URL(window.location);
    url.searchParams.set('property', id);
    window.history.replaceState({}, '', url);
    console.log('🔗 URL updated to:', url.toString());
    
    const p = PROPERTIES.find(x => x.id === id);
    const lang = window.currentLang || getConfigDefaultLang();  // ✅ FIXED
    
    // CRITICAL FIX: Call renderBookingFormLanguage FIRST to set up the dropdowns with correct language
    renderBookingFormLanguage();
    
    // Then update the pricing note separately
    const priceNote = getField(p, 'priceNote', lang);
    const pricingNote = document.getElementById('pricing-note');
    if (pricingNote) {
        pricingNote.innerHTML = `💡 ${priceNote}. ${lang === 'vn' ? 'Giá phụ thuộc vào ngày, số lượng khách và độ dài lưu trú. Chúng tôi luôn đưa ra mức giá tốt nhất có thể.' : 'Final pricing depends on dates, number of guests, and length of stay. We\'ll always share the best available direct rate.'}`;
    }
    
    updateAvailabilityAndUI();
}

// Helper function to format currency
function formatCurrency(amount, currency) {
    if (currency === 'VND' || currency === getConfigCurrencyCode()) {  // ✅ FIXED
        return amount.toLocaleString('vi-VN') + getConfigCurrency();  // ✅ FIXED
    }
    return amount.toLocaleString('en-US') + ' USD';
}

function generateQRCode() {
    const qrContainer = document.getElementById('qr-img');
    if (!qrContainer) return;
    
    const amount = lastPriceResult?.total;
    const bookingId = currentBookingId;
    
    if (amount && bookingId) {
        const qrUrl = `https://img.vietqr.io/image/SACOMBANK-021091408386-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(bookingId)}&accountName=Ba%20Thi%20Bich%20Ngoc`;
        qrContainer.innerHTML = `<img loading="lazy" decoding="async" src="${qrUrl}" style="width:200px;height:200px;border-radius:4px;" alt="VietQR">`;
    } else {
        qrContainer.innerHTML = `<p style="font-size:0.75rem;">${miaT('booking-loading-qr', 'Loading QR code...')}</p>`;
    }
}

// ================================================================
// VIETQR PAYMENT WITH PROOF UPLOAD
// ================================================================

// Helper: Convert file to base64 with compression
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                // Create canvas for compression
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Calculate new dimensions (max 800px)
                const maxSize = 800;
                if (width > height && width > maxSize) {
                    height = (height * maxSize) / width;
                    width = maxSize;
                } else if (height > maxSize) {
                    width = (width * maxSize) / height;
                    height = maxSize;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Compress to JPEG at 60% quality (much smaller than PNG)
                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
                resolve(compressedDataUrl);
            };
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
    });
}

// Submit bank transfer proof
async function submitBankTransferProof() {
    // On the first submission, validate all fields INCLUDING captcha.
    // On retry (e.g. wrong file type), captcha is already validated so skip it.
    if (!_captchaValidated) {
        const err = validateBookingForm();
        if (err) {
            if (err !== '__captcha__') showPayError(err);
            return;
        }
        _captchaValidated = true;
    } else {
        const err = validateBookingFieldsOnly();
        if (err) { showPayError(err); return; }
    }
    
    if (!currentBookingId) { 
        showPayError('Booking ID not generated yet. Please select dates first.'); 
        return; 
    }
    
    const fileInput = document.getElementById('payment-proof');
    const file = fileInput?.files[0];
    
    if (!file) {
        showPayError(window.currentLang === 'vn' 
            ? 'Vui lòng tải lên ảnh chụp màn hình chuyển khoản.' 
            : 'Please upload a screenshot of your bank transfer.');
        return;
    }
    
    if (!file.type.startsWith('image/')) {
        showPayError(window.currentLang === 'vn' 
            ? 'Vui lòng tải lên file ảnh (PNG, JPG, JPEG).' 
            : 'Please upload an image file (PNG, JPG, JPEG).');
        return;
    }
    
    // Reduce max size to 1MB (from 2MB) since base64 increases size by ~33%
    if (file.size > 1 * 1024 * 1024) {
        showPayError(window.currentLang === 'vn' 
            ? 'File ảnh quá lớn. Vui lòng chọn ảnh nhỏ hơn 1MB.' 
            : 'Image file too large. Please choose an image smaller than 1MB.');
        return;
    }
    
    // Disable button
    const btn = document.getElementById('vietqr-submit-btn');
    const originalText = btn ? btn.textContent : '';
    if (btn) {
        btn.disabled = true;
        btn.textContent = window.currentLang === 'vn' ? 'Đang xử lý...' : 'Processing...';
    }
    
    try {
        const base64Image = await fileToBase64(file);
        const data = collectBookingData();
        
        const payload = {
            ...data,
            action: 'createBooking',
            paymentMethod: 'vietqr',
            paymentStatus: 'pending_verification',
            paymentProof: base64Image,
            language: window.currentLang || getConfigDefaultLang(),  // ✅ FIXED
            bookedAt: new Date().toISOString()
        };
        
        const res = await callSheetsAPI(payload);
        
        if (res.status !== 'ok') throw new Error(res.message || 'Failed to save booking');
        
        saveBookingToLocal({ ...data, paymentStatus: 'pending_verification' });
        showPendingVerificationMessage(data);
        
        const qrPanel = document.getElementById('vietqr-panel');
        const paymentSection = document.getElementById('mia-payment-section');
        const priceBox = document.getElementById('mia-price-box');
        
        if (qrPanel) qrPanel.style.display = 'none';
        if (paymentSection) paymentSection.style.display = 'none';
        if (priceBox) priceBox.style.display = 'none';
        
        await sendAdminPaymentNotification(data);
        
    } catch (error) {
        console.error('ERROR in submitBankTransferProof:', error);
        showPayError(error.message);
        if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
        }
    }
}

// Show pending verification message (NOT confirmation)
function showPendingVerificationMessage(bookingData) {
    const bookingSection = document.querySelector('#booking .container');
    if (!bookingSection) return;
    
    const existingMessage = document.getElementById('payment-pending-message');
    if (existingMessage) existingMessage.remove();
    
    const pendingDiv = document.createElement('div');
    pendingDiv.id = 'payment-pending-message';
    pendingDiv.style.cssText = `
        background: #fef3c7;
        border: 1px solid #f59e0b;
        border-radius: 16px;
        padding: 1.5rem;
        margin: 2rem auto;
        text-align: center;
        max-width: 500px;
        width: 100%;
        box-sizing: border-box;
    `;
    
    pendingDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏳</div>
        <p style="font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; color: #d97706;">
            ${window.currentLang === 'vn' ? 'Đang chờ xác nhận thanh toán' : 'Pending Payment Verification'}
        </p>
        <p style="font-size: 0.85rem; margin-bottom: 0.5rem;">
            ${window.currentLang === 'vn'
                ? `Mã đặt phòng: <strong>${escapeHtml(bookingData.bookingId)}</strong>`
                : `Booking ID: <strong>${escapeHtml(bookingData.bookingId)}</strong>`}
        </p>
        <div style="background: white; border-radius: 12px; padding: 0.75rem; margin: 0.75rem 0; text-align: left;">
            <p style="font-size: 0.8rem;">📧 <strong>${escapeHtml(bookingData.guestEmail)}</strong></p>
            <p style="font-size: 0.8rem;">💰 ${formatCurrency(bookingData.amount, 'VND')}</p>
        </div>
        <div style="background: #fff3e0; border-radius: 8px; padding: 0.75rem; margin: 0.75rem 0;">
            <p style="font-size: 0.75rem; margin-bottom: 0.25rem;">
                ${window.currentLang === 'vn'
                    ? '📸 Bằng chứng thanh toán của bạn đã được gửi đi.'
                    : '📸 Your payment proof has been submitted.'}
            </p>
            <p style="font-size: 0.7rem; color: #d97706;">
                ${window.currentLang === 'vn'
                    ? '⚠️ Quá trình xác minh thanh toán có thể mất 1-2 giờ trong giờ làm việc.'
                    : '⚠️ Payment verification may take 1-2 hours during business hours.'}
            </p>
        </div>
        <p style="font-size: 0.75rem; margin-bottom: 0.5rem;">
            ${window.currentLang === 'vn'
                ? 'Chúng tôi sẽ gửi email xác nhận đặt phòng NGAY SAU KHI thanh toán được xác minh.'
                : 'We will send a booking confirmation email AS SOON AS the payment is verified.'}
        </p>
        <button onclick="resetBookingForm()" style="margin-top: 0.75rem; background: none; border: 1px solid #c17a5a; color: #c17a5a; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
            ${window.currentLang === 'vn' ? '← Quay lại' : '← Back'}
        </button>
    `;
    
    bookingSection.appendChild(pendingDiv);
    //pendingDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Send notification to admin about pending payment
async function sendAdminPaymentNotification(bookingData) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'sendAdminNotification',
                bookingId: bookingData.bookingId,
                guestName: bookingData.guestName,
                guestEmail: bookingData.guestEmail,
                amount: bookingData.amount,
                property: bookingData.property,
                room: bookingData.room,
                checkIn: bookingData.checkIn,
                checkOut: bookingData.checkOut
            })
        });
    } catch (error) {
        console.error('Failed to send admin notification:', error);
    }
}

function collectBookingData() {
    const propName = PROPERTIES.find(p => p.id === activeProp)?.name || activeProp;
    const room = document.getElementById('room-type-sel')?.value;
    const ci = document.getElementById('checkin')?.value;
    const co = document.getElementById('checkout')?.value;
    const guests = parseInt(document.getElementById('guests-sel')?.value) || 1;
    const guestName = document.getElementById('guest-name')?.value?.trim() || '';
    const guestEmail = document.getElementById('guest-email')?.value?.trim() || '';
    const phoneCode = document.getElementById('guest-phone-code')?.value || '+84';
    const phoneNum = document.getElementById('guest-phone-number')?.value?.trim() || '';
    const guestPhone = phoneCode + ' ' + phoneNum;
    const result = lastPriceResult || calcTotal(activeProp, ci, co, guests);
    
    return {
        bookingId: currentBookingId, property: propName, room: room,
        checkIn: ci, checkOut: co, guests: guests, nights: result?.nights || 0,
        amount: result?.total || 0, guestName, guestEmail, guestPhone,
        bookedAt: new Date().toISOString(), paymentMethod: selectedPayTab, paymentStatus: 'pending'
    };
}

function saveBookingToLocal(data) {
    localStorage.setItem('mia_booking_' + data.bookingId, JSON.stringify(data));
}

function showBookingConfirmation(data) {
    const paySection = document.getElementById('mia-payment-section');
    const priceBox = document.getElementById('mia-price-box');
    const confBox = document.getElementById('mia-confirm-box');
    
    if (paySection) paySection.style.display = 'none';
    if (priceBox) priceBox.style.display = 'none';
    
    if (confBox) {
        confBox.style.display = 'block';
        const bidEl = document.getElementById('conf-bid');
        const detailsEl = document.getElementById('conf-details');
        if (bidEl) bidEl.textContent = miaT('booking-id-label', 'Booking ID:') + ' ' + data.bookingId;
        if (detailsEl) {
            detailsEl.innerHTML = `<div><strong>Property:</strong> ${data.property}</div><div><strong>Room:</strong> ${data.room}</div><div><strong>Check-in:</strong> ${fmtDateVN(data.checkIn)}</div><div><strong>Check-out:</strong> ${fmtDateVN(data.checkOut)}</div><div><strong>Guests:</strong> ${data.guests}</div><div><strong>Total:</strong> ${fmtVND(data.amount)} (~${fmtUSD(data.amount)})</div>`;
        }
    }
}

function showPaymentRedirectConfirmation(data, paymentLabel) {
    showBookingConfirmation(data);
    const titleEl = document.querySelector('#mia-confirm-box .booking-confirm-title');
    const detailsEl = document.getElementById('conf-details');
    if (titleEl) {
        titleEl.textContent = `✓ Booking saved. Complete payment on ${paymentLabel}.`;
    }
    if (detailsEl) {
        detailsEl.insertAdjacentHTML(
            'beforeend',
            `<div style="margin-top:0.75rem;color:#065f46;">We opened ${paymentLabel} in a new tab. If it did not open, please allow pop-ups or contact us on WhatsApp.</div>`
        );
    }
}


function showPayError(msg) {
    const el = document.getElementById('pay-error');
    if (el) {
        el.textContent = msg;
        el.style.display = 'block';
        setTimeout(() => { el.style.display = 'none'; }, 5000);
    }
}

async function callSheetsAPI(payload) {
    try {
        const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return await res.json();
    } catch (err) {
        return { status: 'error', message: err.toString() };
    }
}

// Validates only the booking form fields — no captcha.
// Used by steps that come AFTER the captcha has already been validated
// (e.g. proof upload in the VietQR flow).
function validateBookingFieldsOnly() {
    const ci   = document.getElementById('checkin')?.value;
    const co   = document.getElementById('checkout')?.value;
    const name = document.getElementById('guest-name')?.value?.trim();
    const email= document.getElementById('guest-email')?.value?.trim();
    const phone= document.getElementById('guest-phone-number')?.value?.trim();
    const lang = window.currentLang || 'en';

    if (!ci || !co)                     return lang === 'vn' ? 'Vui lòng chọn ngày nhận và trả phòng.' : 'Please select check-in and check-out dates.';
    if (new Date(co) <= new Date(ci))   return lang === 'vn' ? 'Ngày trả phòng phải sau ngày nhận phòng.' : 'Check-out must be after check-in.';
    if (!document.getElementById('room-type-sel')?.value) return lang === 'vn' ? 'Vui lòng chọn phòng.' : 'Please select a room.';
    if (!name)                          return lang === 'vn' ? 'Vui lòng nhập họ tên.' : 'Please enter your full name.';
    if (!email || !email.includes('@')) return lang === 'vn' ? 'Vui lòng nhập email hợp lệ.' : 'Please enter a valid email address.';
    if (!phone)                         return lang === 'vn' ? 'Vui lòng nhập số điện thoại.' : 'Please enter your phone number.';
    return null;
}

function validateBookingForm() {
    const ci   = document.getElementById('checkin')?.value;
    const co   = document.getElementById('checkout')?.value;
    const name = document.getElementById('guest-name')?.value?.trim();
    const email= document.getElementById('guest-email')?.value?.trim();
    const phone= document.getElementById('guest-phone-number')?.value?.trim();
    const lang = window.currentLang || 'en';

    if (!ci || !co)                      return lang === 'vn' ? 'Vui lòng chọn ngày nhận và trả phòng.' : 'Please select check-in and check-out dates.';
    if (new Date(co) <= new Date(ci))    return lang === 'vn' ? 'Ngày trả phòng phải sau ngày nhận phòng.' : 'Check-out must be after check-in.';
    if (!document.getElementById('room-type-sel')?.value) return lang === 'vn' ? 'Vui lòng chọn phòng.' : 'Please select a room.';
    if (!name)                           return lang === 'vn' ? 'Vui lòng nhập họ tên.' : 'Please enter your full name.';
    if (!email || !email.includes('@'))  return lang === 'vn' ? 'Vui lòng nhập email hợp lệ.' : 'Please enter a valid email address.';
    if (!phone)                          return lang === 'vn' ? 'Vui lòng nhập số điện thoại.' : 'Please enter your phone number.';

    // CAPTCHA validation with error message
    if (typeof validateCaptcha === 'function') {
        const num1 = parseInt(document.getElementById('captcha-num1')?.textContent || '0');
        const num2 = parseInt(document.getElementById('captcha-num2')?.textContent || '0');
        const userAnswer = parseInt(document.getElementById('captcha-answer')?.value);
        const expectedAnswer = num1 + num2;
        
        if (isNaN(userAnswer) || userAnswer !== expectedAnswer) {
            const errorEl = document.getElementById('captcha-error');
            if (errorEl) {
                errorEl.textContent = lang === 'vn' 
                    ? `Sai câu trả lời. ${num1} + ${num2} = ?` 
                    : `Incorrect answer. ${num1} + ${num2} = ?`;
                errorEl.style.display = 'block';
            }
            return '__captcha__';
        } else {
            const errorEl = document.getElementById('captcha-error');
            if (errorEl) errorEl.style.display = 'none';
        }
    }

    return null;
}

// Check payment status (could be called by PayPal IPN or manually by guest)
async function checkPaymentStatus(bookingId) {
    const waitingDiv = document.getElementById('payment-waiting');
    if (waitingDiv) {
        waitingDiv.innerHTML = `
            <div style="text-align: center; padding: 1rem;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⏳</div>
                <p>${window.currentLang === 'vn' ? 'Đang kiểm tra thanh toán...' : 'Checking payment status...'}</p>
            </div>
        `;
    }
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'checkPaymentStatus',
                bookingId: bookingId
            })
        });
        const result = await response.json();
        
        if (result.status === 'paid') {
            // Payment confirmed - show real confirmation
            if (waitingDiv) waitingDiv.remove();
            showRealBookingConfirmation(result.bookingData);
        } else if (result.status === 'pending') {
            // Still pending
            if (waitingDiv) {
                waitingDiv.innerHTML = `
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏳</div>
                    <p>${window.currentLang === 'vn' 
                        ? 'Thanh toán chưa được xác nhận. Vui lòng đợi hoặc liên hệ chúng tôi qua WhatsApp.' 
                        : 'Payment not yet confirmed. Please wait or contact us via WhatsApp.'}</p>
                    <a href="https://wa.me/84869922261" target="_blank" class="btn-outline" style="display: inline-block; margin-top: 0.5rem;">💬 WhatsApp</a>
                `;
            }
        }
    } catch (error) {
        console.error('Status check failed:', error);
    }
}

// Real confirmation (only after payment is confirmed)
function showRealBookingConfirmation(bookingData) {
    const waitingDiv = document.getElementById('payment-waiting');
    if (waitingDiv) waitingDiv.remove();
    
    const bookingSection = document.querySelector('#booking .container');
    if (!bookingSection) return;
    
    const confirmDiv = document.createElement('div');
    confirmDiv.id = 'mia-confirm-box';
    confirmDiv.style.cssText = `
        background: #d1fae5;
        border: 1px solid #065f46;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 1rem 0;
        text-align: center;
    `;
    confirmDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
        <p style="font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem;">
            ${window.currentLang === 'vn' 
                ? 'Đặt phòng đã được xác nhận!' 
                : 'Booking confirmed!'}
        </p>
        <p style="font-size: 0.85rem; color: #065f46; margin-bottom: 1rem;">
            ${window.currentLang === 'vn'
                ? `Mã đặt phòng: <strong>${escapeHtml(bookingData.bookingId)}</strong>`
                : `Booking ID: <strong>${escapeHtml(bookingData.bookingId)}</strong>`}
        </p>
        <p style="font-size: 0.8rem;">
            ${window.currentLang === 'vn'
                ? 'Email xác nhận đã được gửi đến hộp thư của bạn.'
                : 'A confirmation email has been sent to your inbox.'}
        </p>
    `;
    
    bookingSection.appendChild(confirmDiv);
    
    // Also update the booking status in the sheet via API
    updateBookingStatusToPaid(bookingData.bookingId);
}

// Update booking status in Google Sheets
async function updateBookingStatusToPaid(bookingId) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'updatePaymentStatus',
                bookingId: bookingId,
                status: 'paid'
            })
        });
    } catch (error) {
        console.error('Failed to update status:', error);
    }
}

// ================================================================
// CASH PAYMENT FUNCTION - Add to booking.js
// ================================================================

async function confirmCashBooking() {
  const err = validateBookingForm();
  if (err) { if (err !== '__captcha__') showPayError(err); return; }
  if (!currentBookingId) { 
    showPayError('Booking ID not generated yet. Please select dates first.'); 
    return; 
  }

  const data = collectBookingData();
  const payload = {
    ...data,
    action: 'createBooking',
    paymentMethod: 'cash',
    paymentStatus: 'confirmed',
    language: window.currentLang || 'en',
    bookedAt: new Date().toISOString()
  };

  const btn = document.getElementById('cash-confirm-btn');
  const originalText = btn ? btn.textContent : '';
  if (btn) {
    btn.disabled = true;
    btn.textContent = window.currentLang === 'vn' ? 'Đang xử lý...' : 'Processing...';
  }

  try {
    const res = await callSheetsAPI(payload);
    if (res.status !== 'ok') throw new Error(res.message || 'Failed to save booking');
    
    saveBookingToLocal(data);
    showCashBookingConfirmation(data);
    
    // Reset CAPTCHA validation flag for next booking
    _captchaValidated = false;
    
    const paymentSection = document.getElementById('mia-payment-section');
    if (paymentSection) paymentSection.style.display = 'none';
    
  } catch (error) {
    showPayError(error.message);
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }
}



function showCashBookingConfirmation(bookingData) {
    //console.log('=== showCashBookingConfirmation DEBUG ===');
    //console.log('bookingData received:', bookingData);
    //console.log('bookingData.bookingId:', bookingData?.bookingId);
    
    const priceBox = document.getElementById('mia-price-box');
    const paymentSection = document.getElementById('mia-payment-section');
    const bookingSection = document.querySelector('#booking .container');
    
    if (!bookingSection) {
        console.error('Booking section not found!');
        return;
    }
    
    if (priceBox) priceBox.style.display = 'none';
    if (paymentSection) paymentSection.style.display = 'none';
    
    const existingConfirm = document.getElementById('mia-confirm-box');
    if (existingConfirm) existingConfirm.remove();
    
    const checkOutTime = bookingData.property && bookingData.property.includes('Old Quarter') 
        ? (window.currentLang === 'vn' ? '11:00 sáng' : '11:00 AM') 
        : (window.currentLang === 'vn' ? '12:00 trưa' : '12:00 PM');
    
    // Format amount safely
    let amountDisplay;
    if (typeof formatCurrency === 'function') {
        amountDisplay = formatCurrency(bookingData.amount, 'VND');
    } else {
        amountDisplay = bookingData.amount.toLocaleString('vi-VN') + '₫';
    }
    
    const confirmDiv = document.createElement('div');
    confirmDiv.id = 'mia-confirm-box';
    confirmDiv.style.cssText = `
        background: #d1fae5;
        border: 2px solid #065f46;
        border-radius: 16px;
        padding: 1.5rem;
        margin: 2rem auto;
        text-align: center;
        display: block;
        visibility: visible;
        opacity: 1;
        z-index: 1000;
        max-width: 500px;
        width: 100%;
        box-sizing: border-box;
    `;
    
    confirmDiv.innerHTML = `
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
        <p style="font-size: 1rem; font-weight: 500; margin-bottom: 0.5rem; color: #065f46;">
            ${window.currentLang === 'vn' ? 'Đặt phòng đã được xác nhận!' : 'Booking Confirmed!'}
        </p>
        <p style="font-size: 0.85rem; margin-bottom: 1rem;">
            ${window.currentLang === 'vn'
                ? `Mã đặt phòng: <strong style="background: white; padding: 0.2rem 0.5rem; border-radius: 4px;">${escapeHtml(bookingData.bookingId)}</strong>`
                : `Booking ID: <strong style="background: white; padding: 0.2rem 0.5rem; border-radius: 4px;">${escapeHtml(bookingData.bookingId)}</strong>`}
        </p>
        <div style="background: white; border-radius: 12px; padding: 1rem; margin: 1rem 0; text-align: left;">
            <p style="margin-bottom: 0.5rem; font-weight: 500; font-size: 0.85rem;">${window.currentLang === 'vn' ? '📋 Chi tiết đặt phòng:' : '📋 Booking Details:'}</p>
            <p style="font-size: 0.8rem; margin-bottom: 0.25rem;">🏠 <strong>${bookingData.property || 'MiaCasa'}</strong> · ${bookingData.room || ''}</p>
            <p style="font-size: 0.8rem; margin-bottom: 0.25rem;">📅 ${bookingData.checkIn} → ${bookingData.checkOut}</p>
            <p style="font-size: 0.8rem; margin-bottom: 0.25rem;">👥 ${bookingData.guests} ${window.currentLang === 'vn' ? 'khách' : 'guest(s)'}</p>
            <p style="font-size: 0.8rem;">💰 ${window.currentLang === 'vn' ? 'Thanh toán khi nhận phòng' : 'Pay at property'} · ${amountDisplay}</p>
        </div>
        
        <!-- ENHANCED EMAIL NOTIFICATION SECTION -->
        <div style="background: #e6f7ec; border-radius: 8px; padding: 0.75rem; margin: 0.75rem 0; text-align: left;">
            <p style="font-size: 0.75rem; margin-bottom: 0.25rem; color: #065f46; font-weight: 500;">
                ${window.currentLang === 'vn' ? '📧 Email xác nhận đã được gửi đến:' : '📧 Confirmation email sent to:'}
            </p>
            <p style="font-size: 0.8rem; color: #065f46; word-break: break-all;">
                <strong>${escapeHtml(bookingData.guestEmail)}</strong>
            </p>
            <p style="font-size: 0.65rem; color: #6b5c47; margin-top: 0.25rem;">
                ${window.currentLang === 'vn' 
                    ? 'Vui lòng kiểm tra hộp thư (cả mục Spam nếu không thấy)' 
                    : 'Please check your inbox (and spam folder if you don\'t see it)'}
            </p>
        </div>
        
        <p style="font-size: 0.75rem; color: #6b5c47; margin-bottom: 1rem;">
            ${window.currentLang === 'vn'
                ? `Chúng tôi sẽ gửi hướng dẫn nhận phòng qua WhatsApp 24 giờ trước khi bạn đến.`
                : `We'll send check-in instructions via WhatsApp 24 hours before arrival.`}
        </p>
        <button onclick="resetBookingForm()" style="margin-top: 0.5rem; background: none; border: 1px solid #c17a5a; color: #c17a5a; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">
            ${window.currentLang === 'vn' ? '📅 Đặt phòng mới →' : '📅 New Booking →'}
        </button>
    `;
    
    bookingSection.appendChild(confirmDiv);
    
    // Force visibility and scroll
    //confirmDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    //console.log('Confirmation box added to DOM');
}



// Update existing selectPayTab function
function selectPayTab(type) {
    selectedPayTab = type;
    
    const paypalPanel = document.getElementById('paypal-panel');
    const vietqrPanel = document.getElementById('vietqr-panel');
    const cashPanel = document.getElementById('cash-panel');
    const paypalTab = document.getElementById('pay-tab-paypal');
    const vietqrTab = document.getElementById('pay-tab-vietqr');
    const cashTab = document.getElementById('pay-tab-cash');
    
    // Hide all panels
    if (paypalPanel) paypalPanel.style.display = 'none';
    if (vietqrPanel) vietqrPanel.style.display = 'none';
    if (cashPanel) cashPanel.style.display = 'none';
    
    // Remove active class from all tabs
    if (paypalTab) paypalTab.classList.remove('active');
    if (vietqrTab) vietqrTab.classList.remove('active');
    if (cashTab) cashTab.classList.remove('active');
    
    if (type === 'paypal') {
        if (paypalPanel) paypalPanel.style.display = 'block';
        if (paypalTab) paypalTab.classList.add('active');
    } else if (type === 'vietqr') {
        if (vietqrPanel) vietqrPanel.style.display = 'block';
        if (vietqrTab) vietqrTab.classList.add('active');
        if (typeof generateQRCode === 'function') generateQRCode();
        
        // SHOW THE FILE UPLOAD SECTION
        const transferDetails = document.getElementById('transfer-details');
        if (transferDetails) {
            transferDetails.style.display = 'block';
        }
        
        // Also scroll to make it visible
        //setTimeout(() => {
            //transferDetails?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        //}, 100);
        
    } else if (type === 'cash') {
        if (cashPanel) cashPanel.style.display = 'block';
        if (cashTab) cashTab.classList.add('active');
    }
}

// ================================================================
// PAYPAL PAYMENT FUNCTION
// ================================================================

async function processPayPal() {
    const err = validateBookingForm();
    if (err) { 
        if (err !== '__captcha__') showPayError(err); 
        return; 
    }
    if (!currentBookingId) { 
        showPayError('Booking ID not generated yet. Please select dates first.'); 
        return; 
    }

    const data = collectBookingData();
    const payload = {
        ...data,
        action: 'createBooking',
        paymentMethod: 'paypal',
        paymentStatus: 'pending_payment',
        language: window.currentLang || 'en',
        bookedAt: new Date().toISOString()
    };

    // Disable button
    const btn = document.getElementById('paypal-pay-btn');
    const originalText = btn ? btn.textContent : '';
    if (btn) {
        btn.disabled = true;
        btn.textContent = window.currentLang === 'vn' ? 'Đang chuyển đến PayPal...' : 'Redirecting to PayPal...';
    }

    try {
        const res = await callSheetsAPI(payload);
        if (res.status !== 'ok') throw new Error(res.message || 'Failed to save booking');
        
        const amountUSD = (data.amount / getConfigExchangeRate()).toFixed(2);  // ✅ FIXED
        const paypalLink = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=miacasahanoi@gmail.com&amount=${amountUSD}&currency_code=USD&item_name=MiaCasa%20Booking%20${currentBookingId}&invoice=${currentBookingId}`;
        
        saveBookingToLocal({ ...data, paymentStatus: 'pending_payment' });
        
        // Open PayPal in new tab
        window.open(paypalLink, '_blank');
        
        showPaymentRedirectConfirmation(data, 'PayPal');
        
    } catch (error) {
        showPayError(error.message);
        if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
        }
    }
}

// ================================================================
// INITIALIZATION
// ================================================================

function initializeProperties() {
    console.log('🔍 initializeProperties called');
    console.log('📍 Current URL:', window.location.href);

    renderBookingSelector();

    // Check URL for property parameter
    const urlParams = new URLSearchParams(window.location.search);
    const propertyParam = urlParams.get('property');
    console.log('📌 Property parameter from URL:', propertyParam);

    // Set active property based on URL parameter, default to 'hanoi'
    let initialProperty = 'hanoi';
    if (propertyParam === 'oldquarter') {
        initialProperty = 'oldquarter';
    }

    console.log('🏠 Setting initial property to:', initialProperty);

    // Select the property (this will update UI)
    selectProp(initialProperty);
    setMinDates();
    updateGuestOptions();
}

function setupPaymentEventListeners() {
    const paypalTab = document.getElementById('pay-tab-paypal');
    const vietqrTab = document.getElementById('pay-tab-vietqr');
    const cashTab = document.getElementById('pay-tab-cash');
    const paypalPayBtn = document.getElementById('paypal-pay-btn');
    const vietqrSubmitBtn = document.getElementById('vietqr-submit-btn');
    const cashConfirmBtn = document.getElementById('cash-confirm-btn');
    
    if (paypalTab) paypalTab.onclick = () => selectPayTab('paypal');
    if (vietqrTab) vietqrTab.onclick = () => selectPayTab('vietqr');
    if (cashTab) cashTab.onclick = () => selectPayTab('cash');
    if (paypalPayBtn) paypalPayBtn.onclick = () => processPayPal();
    if (vietqrSubmitBtn) vietqrSubmitBtn.onclick = () => submitBankTransferProof();
    if (cashConfirmBtn) cashConfirmBtn.onclick = () => confirmCashBooking();
}

function setupAutoPayment() {
    const inputs = ['guest-name', 'guest-email', 'guest-phone-number', 'checkin', 'checkout', 'room-type-sel', 'guests-sel'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => debouncedUpdateAvailability());
            el.addEventListener('input', () => debouncedUpdateAvailability());
            el.addEventListener('keyup', () => debouncedUpdateAvailability());
        }
    });
}

// Start everything - with proper initialization order
function startBookingEngine() {
    console.log('🚀 Starting booking engine...');
    fetchPriceOverrides();
    initializeProperties();
    setupPaymentEventListeners();
    setupAutoPayment();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Small delay to ensure DOM is fully ready
        setTimeout(startBookingEngine, 100);
    });
} else {
    // Small delay to ensure DOM is fully ready
    setTimeout(startBookingEngine, 100);
}

// Make functions available globally
window.renderBookingSelector = window.renderBookingSelector || renderBookingSelector;
window.selectProp = window.selectProp || selectProp;
//window.selectAndScroll = selectAndScroll;
window.updateAvailabilityAndUI = window.updateAvailabilityAndUI || updateAvailabilityAndUI;
window.updateGuestOptions = window.updateGuestOptions || updateGuestOptions;
window.resetBookingForm = window.resetBookingForm || resetBookingForm;
window.selectPayTab = window.selectPayTab || selectPayTab;
window.generateQRCode = window.generateQRCode || generateQRCode;
window.processPayPal = window.processPayPal || processPayPal;
window.submitBankTransferProof = window.submitBankTransferProof || submitBankTransferProof;
window.confirmCashBooking = window.confirmCashBooking || confirmCashBooking;
window.renderBookingFormLanguage = window.renderBookingFormLanguage || renderBookingFormLanguage;
window.fmtVND = window.fmtVND || fmtVND;
window.fmtUSD = window.fmtUSD || fmtUSD;
window.formatCurrency = window.formatCurrency || formatCurrency;
