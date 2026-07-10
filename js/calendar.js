// ================================================================
// CALENDAR.JS - Calendar management with language support
// Updated to use Google Script for iCal feeds
// ================================================================

// ================================================================
// DEBUG FLAG - Enable/disable console logs
// ================================================================
const CALENDAR_DEBUG = false; // Set to true to enable debug logs

// ================================================================
// SCROLL PRESERVATION FIX - Prevent calendar init from overriding hash scrolling
// ================================================================

// Store the current scroll position and hash before any calendar operations.
// NOTE: this used to be paired with FIVE separate scroll-to-hash triggers
// (DOMContentLoaded x3, window.load, and a 5-second polling interval) that
// raced each other and could yank the page back to the anchor even after
// the visitor had deliberately scrolled away. That's been consolidated
// below into a single retry-until-found sequence — see ensureScrollToHash.
(function preserveScroll() {
    // Check if we have a hash in the URL (like #gallery)
    const hasHash = window.location.hash && window.location.hash.length > 1;
    
    // If there's a hash, store it and prevent scroll restoration
    if (hasHash) {
        // Store the hash to reapply if needed
        window._preservedHash = window.location.hash;
        
        // Set scroll restoration to manual to prevent automatic scroll resets
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        if (CALENDAR_DEBUG) console.log('📍 Hash detected, preserving scroll for:', window._preservedHash);
    }
    
    // Store the current scroll position before any DOM manipulations
    window._scrollPosition = window.scrollY || 0;
    window._hasHash = hasHash;
})();

window.API_URL = '/api/log-booking';
const ROOM_CALS = [
    {
        id: 'spring',
        name: 'Spring Room',
        name_vn: 'Phòng Xuân',
        property: 'MiaCasa Hanoi',
        embedSrc: '87a5f7749b35560f564c62ec0ee8cf00101a6e331907f34effbd803846638607%40group.calendar.google.com',
        icalLinks: [
            { platform: 'Google', platform_vn: 'Google', url: `https://calendar.google.com/calendar/ical/87a5f7749b35560f564c62ec0ee8cf00101a6e331907f34effbd803846638607%40group.calendar.google.com/public/basic.ics` },
            { platform: 'Airbnb', platform_vn: 'Airbnb', url: `https://www.airbnb.co.in/calendar/ical/1368525470549843347.ics?t=ab8805eed77f47349e0a8b4bc253ed31` },
            { platform: 'Booking', platform_vn: 'Booking', url: `https://ical.booking.com/v1/export/t/e655bb8a-06ee-4c83-afba-de8d58d9acda.ics` },
            { platform: 'MiaCasa', platform_vn: 'MiaCasa', isDynamic: true, roomId: 'Spring Room' }
        ]
    },
    {
        id: 'summer',
        name: 'Summer Room',
        name_vn: 'Phòng Hạ',
        property: 'MiaCasa Hanoi',
        embedSrc: '26d50548c42e4b8e731240566110420643aa4bce48233af14e62233a888438c0%40group.calendar.google.com',
        icalLinks: [
            { platform: 'Google', platform_vn: 'Google', url: `https://calendar.google.com/calendar/ical/26d50548c42e4b8e731240566110420643aa4bce48233af14e62233a888438c0%40group.calendar.google.com/public/basic.ics` },
            { platform: 'Airbnb', platform_vn: 'Airbnb', url: `https://www.airbnb.co.in/calendar/ical/1150577368273097590.ics?t=74f453c9face42b39955c6b180edbb13` },
            { platform: 'Booking', platform_vn: 'Booking', url: `https://ical.booking.com/v1/export/t/4b9f52e0-6940-4e88-9a46-edc2f0cc8edb.ics` },
            { platform: 'MiaCasa', platform_vn: 'MiaCasa', isDynamic: true, roomId: 'Summer Room' }
        ]
    },
    {
        id: 'autumn',
        name: 'Autumn Room',
        name_vn: 'Phòng Thu',
        property: 'MiaCasa Hanoi',
        embedSrc: 'b7be4b233604c94b69c4a7f95e13e61e9bac756c20b255d402d817071481ff24%40group.calendar.google.com',
        icalLinks: [
            { platform: 'Google', platform_vn: 'Google', url: `https://calendar.google.com/calendar/ical/b7be4b233604c94b69c4a7f95e13e61e9bac756c20b255d402d817071481ff24%40group.calendar.google.com/public/basic.ics` },
            { platform: 'Airbnb', platform_vn: 'Airbnb', url: `https://www.airbnb.co.in/calendar/ical/1149901131702910023.ics?t=ac0829aecf2b49479aa6006fee841048` },
            { platform: 'Booking', platform_vn: 'Booking', url: `https://ical.booking.com/v1/export/t/a9e95444-5fd3-49ee-b0a0-15e2a3f82af9.ics` },
            { platform: 'MiaCasa', platform_vn: 'MiaCasa', isDynamic: true, roomId: 'Autumn Room' }
        ]
    },
    {
        id: 'oldquarter',
        name: 'MiaCasa Old Quarter',
        name_vn: 'MiaCasa Phố Cổ',
        property: 'MiaCasaOldQuarter',
        embedSrc: '81d1ef063261354d380e1f80b38325d413a118e15b1819b9b8aff47fa1069f79%40group.calendar.google.com',
        icalLinks: [
            { platform: 'Google', platform_vn: 'Google', url: `https://calendar.google.com/calendar/ical/81d1ef063261354d380e1f80b38325d413a118e15b1819b9b8aff47fa1069f79%40group.calendar.google.com/public/basic.ics` },
            { platform: 'Airbnb', platform_vn: 'Airbnb', url: `https://www.airbnb.co.in/calendar/ical/1444661721704448383.ics?t=cce83927bc29402eb49e1b816d4293bb` },
            { platform: 'Booking', platform_vn: 'Booking', url: `https://ical.booking.com/v1/export/t/eb318a0d-65ba-45e8-b3e0-53d59c08b135.ics` },
            { platform: 'MiaCasa', platform_vn: 'MiaCasa', isDynamic: true, roomId: 'Entire Apartment (3 queen beds)' }
        ]
    }
];

// Global flag to track if calendar has initialized
let calendarInitialized = false;

function initCalendars() {
    if (CALENDAR_DEBUG) console.log('initCalendars called');
    
    // Store current state before modifying DOM
    const currentHash = window.location.hash;
    const hasHash = currentHash && currentHash.length > 1;
    const currentScroll = window.scrollY || 0;
    
    if (CALENDAR_DEBUG) console.log('📌 Calendar init - preserving:', { hash: currentHash, scroll: currentScroll });
    
    const calTabsCont = document.getElementById('cal-tabs');
    const calFramesCont = document.getElementById('cal-frames');
    
    if (!calTabsCont || !calFramesCont) {
        if (CALENDAR_DEBUG) console.log('Calendar containers not found');
        return;
    }
    
    // Get language from localStorage
    const currentLang = localStorage.getItem('mia_lang') || 'en';
    if (CALENDAR_DEBUG) console.log('Current language for calendars:', currentLang);
    
    calTabsCont.innerHTML = '';
    calFramesCont.innerHTML = '';
    
    ROOM_CALS.forEach((room, index) => {
        // Choose name based on language
        const roomName = currentLang === 'vn' ? room.name_vn : room.name;
        
        // Tab button
        const tab = document.createElement('button');
        tab.className = 'cal-tab' + (index === 0 ? ' active' : '');
        tab.textContent = roomName;
        tab.onclick = () => switchCalendar(room.id, tab);
        calTabsCont.appendChild(tab);
        
        // Calendar panel
        const panel = document.createElement('div');
        panel.className = 'cal-frame-wrap' + (index === 0 ? ' active' : '');
        panel.id = 'cal-' + room.id;
        
        const googleCalUrl = `https://calendar.google.com/calendar/embed?src=${room.embedSrc}&mode=MONTH&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23ffffff&color=%23c17a5a&hl=${currentLang === 'vn' ? 'vi' : 'en'}`;
        
        // Set text based on language
        let viewText, descText, openText, subscribeText, availabilityText;
        
        if (currentLang === 'vn') {
            viewText = `Xem lịch ${roomName}`;
            descText = 'Mở lịch trong cửa sổ mới — đồng bộ thời gian thực';
            openText = 'Mở lịch →';
            subscribeText = 'Đăng ký / đồng bộ với ứng dụng lịch của bạn';
            availabilityText = 'Lịch trống theo thời gian thực';
        } else {
            viewText = `View ${roomName} Calendar`;
            descText = 'Opens calendar in modal — live availability synced in real time';
            openText = 'Open Calendar →';
            subscribeText = 'Subscribe / sync with your calendar app';
            availabilityText = 'Live availability';
        }
        
        // Build iCal links - including dynamic MiaCasa feed from Google Script
        const icalLinksHtml = (room.icalLinks || []).map(link => {
            let url = link.url;
            let platformName = currentLang === 'vn' ? (link.platform_vn || link.platform) : link.platform;
            
            // For dynamic MiaCasa feed from Google Script
            if (link.isDynamic && link.roomId) {
                const encodedRoom = encodeURIComponent(link.roomId);
                // Check if GOOGLE_SCRIPT_URL is defined
                if (typeof GOOGLE_SCRIPT_URL !== 'undefined' && GOOGLE_SCRIPT_URL) {
                    url = `${GOOGLE_SCRIPT_URL}?action=getIcal&room=${encodedRoom}`;
                } else {
                    // Fallback to API_URL
                    url = `${API_URL}?action=getIcal&room=${encodedRoom}`;
                }
                platformName = currentLang === 'vn' ? 'Lịch MiaCasa' : 'MiaCasa iCal';
            }
            
            return `<a href="${url}" target="_blank" rel="noopener" 
                       style="display:inline-flex;align-items:center;gap:6px;padding:0.35rem 0.85rem;border:1px solid var(--border);border-radius:2px;font-size:0.72rem;color:var(--ink-light);text-decoration:none;transition:all 0.2s;"
                       onmouseover="this.style.borderColor='var(--terracotta)';this.style.color='var(--terracotta)'"
                       onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--ink-light)'">
                        ${platformName} ${currentLang === 'vn' ? '↓' : '↓'}
                    </a>`;
        }).join('');
        
        panel.innerHTML = `
            <div class="cal-frame-header">
                <span class="cal-frame-title">${roomName}</span>
                <span class="cal-frame-sub">${room.property} · ${availabilityText}</span>
            </div>
            <div style="padding:1.5rem;background:white;">
                <button onclick="openCalendarModal('${googleCalUrl}', '${roomName.replace(/'/g, "\\'")}')" 
                        style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding:1.25rem 1.5rem;background:var(--sand);border:1px solid var(--border);border-radius:4px;text-decoration:none;margin-bottom:1.5rem;transition:box-shadow 0.2s;width:100%;cursor:pointer;">
                    <div style="text-align:left;">
                        <div style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:600;color:var(--ink);margin-bottom:3px;">${viewText}</div>
                        <div style="font-size:0.78rem;color:var(--ink-light);">${descText}</div>
                    </div>
                    <div style="background:var(--terracotta);color:white;padding:0.55rem 1.2rem;border-radius:2px;font-size:0.78rem;font-weight:500;letter-spacing:0.06em;white-space:nowrap;">${openText}</div>
                </button>
                ${icalLinksHtml ? `<div style="margin-bottom:0.75rem;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink-light);">${subscribeText}</div>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">${icalLinksHtml}</div>` : ''}
            </div>
        `;
        calFramesCont.appendChild(panel);
    });
    
    // Mark as initialized
    calendarInitialized = true;
    
    // Restore scroll position after calendar initialization - ONLY if calendar exists
    if (hasHash) {
        if (CALENDAR_DEBUG) console.log('🔄 Restoring scroll after calendar init for hash:', currentHash);
        // Use a more robust approach with multiple attempts
        restoreScrollToHash(currentHash);
    }
}

// Centralized function to restore scroll to a hash
function restoreScrollToHash(hash) {
    if (!hash || hash.length <= 1) return false;
    
    if (CALENDAR_DEBUG) console.log('📍 Attempting to scroll to:', hash);
    
    // Try to find the element
    const target = document.querySelector(hash);
    if (target) {
        // Get the element's position
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop;
        
        // Use window.scrollTo for more reliable scrolling
        window.scrollTo({
            top: targetPosition - 20, // Small offset for better visibility
            behavior: 'smooth'
        });
        
        if (CALENDAR_DEBUG) console.log('✅ Scrolled to:', hash, 'Position:', targetPosition);
        return true;
    } else {
        if (CALENDAR_DEBUG) console.warn('⚠️ Element not found for hash:', hash);
        // Fallback: set the hash directly
        window.location.hash = hash;
        return false;
    }
}

// Function to handle scroll restoration with retries.
// Deduped: if a retry loop for this exact hash is already running, a new
// call just resets the deadline instead of starting a second competing
// loop. Once the target is found and scrolled to, this stops for good —
// it does NOT keep re-checking afterward, so it never fights a visitor
// who scrolls away on purpose.
let _scrollLoop = null; // { hash, attempts, timeoutId }

function ensureScrollToHash(hash, maxAttempts = 10) {
    if (!hash || hash.length <= 1) return;

    // Only proceed if the calendar exists on the page
    const calendarContainer = document.getElementById('cal-tabs');
    if (!calendarContainer) {
        if (CALENDAR_DEBUG) console.log('⚠️ Calendar not found on page, skipping scroll preservation');
        return;
    }

    if (_scrollLoop && _scrollLoop.hash === hash) {
        // Already retrying for this hash — let that loop continue.
        return;
    }
    if (_scrollLoop) {
        clearTimeout(_scrollLoop.timeoutId);
    }
    _scrollLoop = { hash, attempts: 0, timeoutId: null };

    function tryScroll() {
        if (!_scrollLoop || _scrollLoop.hash !== hash) return; // superseded
        _scrollLoop.attempts++;
        const success = restoreScrollToHash(hash);

        if (!success && _scrollLoop.attempts < maxAttempts) {
            if (CALENDAR_DEBUG) console.log(`🔄 Retry ${_scrollLoop.attempts}/${maxAttempts} for hash:`, hash);
            _scrollLoop.timeoutId = setTimeout(tryScroll, _scrollLoop.attempts * 200);
        } else if (success) {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
            if (CALENDAR_DEBUG) console.log('✅ Scroll restoration complete for:', hash);
            _scrollLoop = null;
        } else {
            if (CALENDAR_DEBUG) console.log('⚠️ Could not scroll to hash after max attempts:', hash);
            _scrollLoop = null;
        }
    }

    _scrollLoop.timeoutId = setTimeout(tryScroll, 100);
}

function switchCalendar(id, activeTab) {
    // Store current hash before switching
    const currentHash = window.location.hash;
    const hasHash = currentHash && currentHash.length > 1;
    
    document.querySelectorAll('.cal-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.cal-frame-wrap').forEach(f => f.classList.remove('active'));
    activeTab.classList.add('active');
    const target = document.getElementById('cal-' + id);
    if (target) target.classList.add('active');
    
    // Restore hash after switching tabs - ONLY if calendar exists
    if (hasHash) {
        const calendarContainer = document.getElementById('cal-tabs');
        if (calendarContainer) {
            requestAnimationFrame(() => {
                // Use the robust scroll restoration
                ensureScrollToHash(currentHash);
                if (CALENDAR_DEBUG) console.log('📍 Restored hash after tab switch:', currentHash);
            });
        }
    }
}

// Function to refresh calendars when language changes
function refreshCalendars() {
    if (CALENDAR_DEBUG) console.log('Refreshing calendars due to language change');
    // Store hash before refresh
    const currentHash = window.location.hash;
    const hasHash = currentHash && currentHash.length > 1;
    
    // Only refresh if calendar exists
    const calendarContainer = document.getElementById('cal-tabs');
    if (!calendarContainer) {
        if (CALENDAR_DEBUG) console.log('⚠️ Calendar not found on page, skipping refresh');
        return;
    }
    
    initCalendars();
    
    // Restore hash after refresh with robust scrolling
    if (hasHash) {
        setTimeout(() => {
            ensureScrollToHash(currentHash);
        }, 200);
    }
}

// ================================================================
// MOBILE CALENDAR OPTIMIZATIONS
// ================================================================

function openCalendarModal(calendarUrl, roomName) {
    // Check if we're on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // On mobile, open Google Calendar in a new tab (better experience)
        window.open(calendarUrl, '_blank');
    } else {
        // On desktop, use modal
        const modal = document.getElementById('calendar-modal');
        const iframe = document.getElementById('calendar-iframe');
        const modalTitle = document.getElementById('calendar-modal-title');
        
        if (modal && iframe && modalTitle) {
            modalTitle.textContent = roomName;
            iframe.src = calendarUrl;
            modal.style.display = 'flex';
        }
    }
}

// Add touch-friendly styles for calendar tabs on mobile
function addMobileCalendarStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .cal-tabs {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            .cal-tab {
                flex: 1;
                min-width: calc(50% - 0.5rem);
                padding: 0.75rem 0.5rem;
                font-size: 0.7rem;
                white-space: normal;
                word-break: keep-all;
            }
            .cal-frame-header {
                flex-direction: column;
                text-align: center;
                gap: 0.5rem;
            }
            .cal-frame-header .cal-frame-title {
                font-size: 1rem;
            }
            .cal-frame-header .cal-frame-sub {
                font-size: 0.7rem;
            }
            [onclick="openCalendarModal"] {
                flex-direction: column !important;
                text-align: center !important;
            }
            [onclick="openCalendarModal"] div:first-child {
                text-align: center !important;
            }
            .cal-frame-wrap .ical-links {
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);
}

// ================================================================
// INITIALIZATION AND EVENT LISTENERS
// ================================================================

// Call this when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addMobileCalendarStyles();

    // Only attempt scroll preservation if calendar exists on page
    const calendarContainer = document.getElementById('cal-tabs');
    const hash = window.location.hash;
    
    if (calendarContainer && hash && hash.length > 1) {
        if (CALENDAR_DEBUG) console.log('🎯 DOM ready, ensuring scroll to:', hash);
        ensureScrollToHash(hash);
    } else if (hash && hash.length > 1) {
        if (CALENDAR_DEBUG) console.log('ℹ️ Calendar not found, skipping scroll preservation for:', hash);
    }
});

// Listen for language change events
window.addEventListener('languageChanged', function(e) {
    if (CALENDAR_DEBUG) console.log('languageChanged event received:', e.detail);
    
    // Only refresh if calendar exists
    const calendarContainer = document.getElementById('cal-tabs');
    if (calendarContainer) {
        setTimeout(refreshCalendars, 100);
    } else if (CALENDAR_DEBUG) {
        console.log('ℹ️ Calendar not found, skipping refresh');
    }
});

// Also listen for storage events (in case language changes in another tab)
window.addEventListener('storage', function(e) {
    if (e.key === 'mia_lang') {
        if (CALENDAR_DEBUG) console.log('Storage event - language changed to:', e.newValue);
        
        // Only refresh if calendar exists
        const calendarContainer = document.getElementById('cal-tabs');
        if (calendarContainer) {
            setTimeout(refreshCalendars, 100);
        }
    }
});

// Listen for hash changes (user clicking on navigation links)
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        if (CALENDAR_DEBUG) console.log('🔗 Hash changed to:', hash);
        
        // Only attempt scroll if calendar exists
        const calendarContainer = document.getElementById('cal-tabs');
        if (calendarContainer) {
            // If calendar hasn't initialized yet, wait
            if (!calendarInitialized) {
                setTimeout(() => {
                    ensureScrollToHash(hash);
                }, 300);
            } else {
                ensureScrollToHash(hash);
            }
        } else if (CALENDAR_DEBUG) {
            console.log('ℹ️ Calendar not found, skipping scroll for hash change');
        }
    }
});

// Log initialization with debug flag
if (CALENDAR_DEBUG) {
    console.log('calendar.js loaded (debug mode enabled)');
} else {
    console.log('calendar.js loaded');
}