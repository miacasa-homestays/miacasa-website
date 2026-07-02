// ================================================================
// MAIN.JS - Core functionality for public pages
// Depends on: lang.js (TRANSLATIONS, currentLang, setLang)
// ================================================================

'use strict';

// ================================================================
// ENSURE CURRENT LANG - Use config if available
// ================================================================

if (typeof window.currentLang === 'undefined') {
  // Try to get from config first
  if (typeof getCurrentLang === 'function') {
    window.currentLang = getCurrentLang();
  } else {
    window.currentLang = 'en';
    try {
      var savedLang = localStorage.getItem('mia_lang');
      if (savedLang) {
        window.currentLang = savedLang;
      }
    } catch(e) {}
  }
}

// ================================================================
// CONFIG - Use centralized config values
// ================================================================

// Ensure config is available
if (typeof window.config === 'undefined' && typeof window.MiaCasaConfig !== 'undefined') {
  window.config = window.MiaCasaConfig;
}

// ================================================================
// HASH SCROLL HANDLING - Fix for blog CTA links like #booking
// ================================================================

function initHashScroll() {
    // Don't interfere with gallery hashes on property pages
    const isPropertyPage = window.location.pathname.includes('miacasa-hanoi') || 
                          window.location.pathname.includes('miacasa-oldquarter');
    
    // Function to scroll to a hash element - MODIFIED to wait for booking form
    function scrollToHashElement(hash, attempts = 0) {
        if (!hash || hash.length <= 1) return false;
        
        // Clean the hash (remove leading # if present)
        const targetId = hash.startsWith('#') ? hash.substring(1) : hash;
        const target = document.getElementById(targetId);
        
        // SPECIAL CASE: For #booking, wait for booking form to be ready
        if (targetId === 'booking') {
            const bookingForm = document.getElementById('booking-prop-sel');
            // Check if booking form has been rendered (has buttons)
            if (!bookingForm || bookingForm.children.length === 0) {
                if (attempts < 15) {
                    console.log(`⏳ Waiting for booking form... attempt ${attempts + 1}/15`);
                    setTimeout(() => {
                        scrollToHashElement(hash, attempts + 1);
                    }, 200);
                    return false;
                } else {
                    console.warn('⚠️ Booking form not ready after max attempts, scrolling anyway');
                    // Fall through to scroll
                }
            }
        }
        
        if (target) {
            // Calculate position with offset for fixed nav
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.offsetHeight : 80;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            console.log(`✅ Scrolled to: #${targetId}`);
            return true;
        } else if (attempts < 15) {
            // Retry with increasing delay
            setTimeout(() => {
                scrollToHashElement(hash, attempts + 1);
            }, (attempts + 1) * 150);
            return false;
        } else {
            console.warn(`⚠️ Could not find element: #${targetId}`);
            return false;
        }
    }
    
    // Check if we have a hash in the URL
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
        // Only handle booking hashes (or any hash on non-property pages)
        if (hash === '#booking' || hash === '#contact' || !isPropertyPage) {
            console.log(`📍 Hash detected: ${hash}, waiting for booking form to be ready...`);
            
            // Set scroll restoration to manual to prevent interference
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }
            
            // Start scrolling attempts with a longer initial delay
            setTimeout(() => {
                scrollToHashElement(hash);
            }, 500);
            
            // Also try after window fully loads
            window.addEventListener('load', function() {
                setTimeout(() => {
                    scrollToHashElement(hash);
                }, 800);
            });
        }
    }
    
    // Listen for hash changes (user clicking links)
    window.addEventListener('hashchange', function() {
        const newHash = window.location.hash;
        if (newHash && newHash.length > 1) {
            // Don't interfere with gallery hashes on property pages
            if (newHash === '#booking' || newHash === '#contact' || !isPropertyPage) {
                console.log(`🔗 Hash changed to: ${newHash}`);
                setTimeout(() => {
                    scrollToHashElement(newHash);
                }, 300);
            }
        }
    });
}

// ================================================================
// NAVIGATION
// ================================================================

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navLinks || !hamburger) return;
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (navLinks && hamburger && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close menu on window resize (if screen becomes larger) - with debouncing
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768) {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }, 250);
});

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else if (currentPath === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// ================================================================
// BACK TO TOP BUTTON
// ================================================================

function initBackToTop() {
    // Check if button already exists
    if (document.querySelector('.back-to-top')) return;
    
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================================================================
// CALENDAR MODAL
// ================================================================

let activeModal = null;

function openCalendarModal(calendarUrl, title) {
    // Remove existing modal if any
    if (activeModal) {
        activeModal.remove();
        activeModal = null;
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal').remove(); activeModal = null;">×</button>
            <iframe src="${calendarUrl}" title="${title} Calendar"></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    activeModal = modal;
    modal.style.display = 'flex';
    
    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            activeModal = null;
        }
    });
    
    // Close on Escape key
    const escapeHandler = function(e) {
        if (e.key === 'Escape' && activeModal) {
            activeModal.remove();
            activeModal = null;
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// ================================================================
// REVIEWS PAGINATION (Load More)
// ================================================================

// This will be populated by the reviews data from each page
window.reviewsData = window.reviewsData || [];
window.reviewsShown = window.reviewsShown || 6;
window.activeReviewFilter = window.activeReviewFilter || 'all';

function loadMoreReviews() {
    window.reviewsShown += 3;
    if (typeof renderReviews === 'function') {
        renderReviews();
    }
}

// ================================================================
// SCROLL REVEAL
// ================================================================

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08 });

function initScrollReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        scrollObserver.observe(el);
    });
}

// ================================================================
// CHATBOT FUNCTIONALITY
// ================================================================

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    if (!chatbot) {
        console.warn('Chatbot element not found');
        return;
    }
    chatbot.classList.toggle('open');
}

function sendChat() {
    const input = document.getElementById('chat-input');
    const message = input?.value?.trim();
    if (!message) return;
    
    addChatMessage(message, 'user');
    if (input) input.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        const reply = getChatbotReply(message);
        addChatMessage(reply, 'bot');
    }, 500);
}

function quickReply(message) {
    addChatMessage(message, 'user');
    setTimeout(() => {
        const reply = getChatbotReply(message);
        addChatMessage(reply, 'bot');
    }, 300);
}

function addChatMessage(message, type) {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) {
        console.warn('Chat messages container not found');
        return;
    }
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${type}`;
    msgDiv.textContent = message;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getChatbotReply(message) {
    const m = message.toLowerCase();
    
    // These will be populated by the booking.js or page-specific data
    if (window.chatbotResponses) {
        if (m.includes('price') || m.includes('cost') || m.includes('how much')) {
            return window.chatbotResponses.price();
        }
        if (m.includes('property') || m.includes('stay') || m.includes('room')) {
            return window.chatbotResponses.props();
        }
        if (m.includes('where') || m.includes('location') || m.includes('address')) {
            return window.chatbotResponses.locs();
        }
        if (m.includes('cancel') || m.includes('refund')) {
            return window.chatbotResponses.cancel();
        }
        if (m.includes('check')) {
            return window.chatbotResponses.checkin();
        }
        if (m.includes('wifi') || m.includes('internet')) {
            return window.chatbotResponses.wifi();
        }
        if (m.includes('book')) {
            return window.chatbotResponses.book();
        }
    }
    
    // Use config for contact info if available
    const email = window.config?.email || 'miacasahanoi@gmail.com';
    const lang = window.currentLang || 'en';
    
    if (lang === 'vn') {
        return `Cảm ơn! Liên hệ qua ${email} hoặc biểu mẫu Liên hệ. Chúng tôi trả lời trong vòng 2 giờ! 🌿`;
    }
    return `Thanks! Reach us at ${email} or use the Contact form. We reply within 2 hours! 🌿`;
}

// ================================================================
// MATH CAPTCHA - Enhanced
// Stores expected answer in a JS closure — never in the DOM.
// Two independent instances: 'booking' and 'contact'.
// ================================================================

const _captchaState = {};  // { booking: {a,b}, contact: {a,b} }
const _captchaAttempts = {}; // Track failed attempts for rate limiting

function generateCaptcha(formId) {
    // Generate numbers between 1-9 for simplicity (no negative numbers)
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    _captchaState[formId] = { a, b };
    
    // Reset attempts counter when new CAPTCHA is generated
    _captchaAttempts[formId] = 0;

    const ids = formId === 'booking'
        ? { n1: 'captcha-num1',         n2: 'captcha-num2',         ans: 'captcha-answer',         err: 'captcha-error'         }
        : { n1: 'contact-captcha-num1', n2: 'contact-captcha-num2', ans: 'contact-captcha-answer', err: 'contact-captcha-error' };

    const n1El  = document.getElementById(ids.n1);
    const n2El  = document.getElementById(ids.n2);
    const ansEl = document.getElementById(ids.ans);
    const errEl = document.getElementById(ids.err);

    if (n1El)  n1El.textContent  = a;
    if (n2El)  n2El.textContent  = b;
    if (ansEl) {
        ansEl.value = '';
        ansEl.classList.remove('error');
        ansEl.focus(); // Focus the input for better UX
    }
    if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
    }
    
    // Auto-clear after 5 minutes of inactivity
    autoClearCaptcha(formId);
}

function validateCaptcha(formId) {
    const lang = window.currentLang || 'en';
    const ids = formId === 'booking'
        ? { ans: 'captcha-answer',         err: 'captcha-error'         }
        : { ans: 'contact-captcha-answer', err: 'contact-captcha-error' };

    const state = _captchaState[formId];
    const ansEl = document.getElementById(ids.ans);
    const errEl = document.getElementById(ids.err);
    
    // Initialize attempts counter if not exists
    if (!_captchaAttempts[formId]) {
        _captchaAttempts[formId] = 0;
    }
    
    // Rate limiting: block after 5 failed attempts
    if (_captchaAttempts[formId] >= 5) {
        if (errEl) {
            errEl.textContent = lang === 'vn'
                ? 'Quá nhiều lần thử sai. Vui lòng tải lại trang.'
                : 'Too many failed attempts. Please refresh the page.';
            errEl.style.display = 'block';
            errEl.style.color = '#dc2626';
        }
        return false;
    }
    
    if (!state) {
        generateCaptcha(formId);
        if (errEl) {
            errEl.textContent = lang === 'vn'
                ? 'Vui lòng trả lời câu hỏi bảo mật.'
                : 'Please answer the security question.';
            errEl.style.display = 'block';
            errEl.style.color = '#dc2626';
        }
        return false;
    }

    const userAnswer = parseInt(ansEl?.value, 10);
    const expectedAnswer = state.a + state.b;

    if (isNaN(userAnswer) || userAnswer !== expectedAnswer) {
        _captchaAttempts[formId] += 1; // Increment failed attempts
        if (errEl) {
            errEl.textContent = lang === 'vn'
                ? `Sai câu trả lời. ${state.a} + ${state.b} = ? (${_captchaAttempts[formId]}/5)`
                : `Incorrect answer. ${state.a} + ${state.b} = ? (${_captchaAttempts[formId]}/5)`;
            errEl.style.display = 'block';
            errEl.style.color = '#dc2626';
        }
        if (ansEl) {
            ansEl.classList.add('error');
            ansEl.value = '';
            ansEl.focus();
        }
        return false;
    }

    // Success - clear error
    if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
    }
    if (ansEl) {
        ansEl.classList.remove('error');
    }
    // Reset attempts on success
    _captchaAttempts[formId] = 0;
    return true;
}

// Auto-clear CAPTCHA after 5 minutes of inactivity
function autoClearCaptcha(formId) {
    setTimeout(function() {
        if (_captchaState[formId]) {
            const ids = formId === 'booking'
                ? { ans: 'captcha-answer', err: 'captcha-error' }
                : { ans: 'contact-captcha-answer', err: 'contact-captcha-error' };
            const ansEl = document.getElementById(ids.ans);
            const errEl = document.getElementById(ids.err);
            if (ansEl) ansEl.value = '';
            if (errEl) {
                errEl.textContent = '';
                errEl.style.display = 'none';
            }
            // Reset attempts on timeout
            _captchaAttempts[formId] = 0;
        }
    }, 300000); // 5 minutes
}

// Auto-clear CAPTCHA on page unload
window.addEventListener('beforeunload', function() {
    for (var key in _captchaState) {
        delete _captchaState[key];
    }
    for (var key in _captchaAttempts) {
        delete _captchaAttempts[key];
    }
});

window.generateCaptcha = generateCaptcha;
window.validateCaptcha  = validateCaptcha;

// ================================================================
// CONTACT FORM - WhatsApp
// ================================================================

function sendWhatsApp() {
    const name = document.getElementById('contact-name')?.value?.trim() || '';
    const email = document.getElementById('contact-email')?.value?.trim() || '';
    const prop = document.getElementById('contact-prop-sel')?.value || '';
    const subject = document.getElementById('contact-subject')?.value || '';
    const message = document.getElementById('contact-message')?.value?.trim() || '';
    
    if (!name || !message) {
        showContactNotice(window.currentLang === 'vn' ? 'Vui lòng điền tên và tin nhắn.' : 'Please fill in your name and message.', true);
        return;
    }

    // Validate math captcha before proceeding
    if (!validateCaptcha('contact')) return;

    // Use config values if available
    const phone = window.config?.phone || '84869922261';
    const emailAddr = window.config?.email || 'miacasahanoi@gmail.com';
    const whatsappUrl = window.config?.whatsappUrl || `https://wa.me/${phone}`;
    
    const text = `Hi MiaCasa! 👋\n\n*Name:* ${name}\n*Email:* ${email || 'not provided'}\n*Property:* ${prop}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
    const url = whatsappUrl + '?text=' + encodeURIComponent(text);
    const opened = window.open(url, '_blank');
    
    if (!opened) {
        window.location.href = `mailto:${emailAddr}?subject=${encodeURIComponent('MiaCasa enquiry: ' + subject)}&body=${encodeURIComponent(text)}`;
        showContactNotice(window.currentLang === 'vn' ? 'WhatsApp bị chặn, chúng tôi đã mở email thay thế.' : 'WhatsApp was blocked, so we opened an email fallback instead.');
        return;
    }
    
    const confirmMsg = document.getElementById('contact-confirm');
    if (confirmMsg) {
        confirmMsg.style.display = 'block';
        setTimeout(() => {
            confirmMsg.style.display = 'none';
        }, 3000);
    }
}

function showContactNotice(message, isError = false) {
    const form = document.querySelector('.contact-form-box');
    if (!form) return;

    let notice = document.getElementById('contact-inline-notice');
    if (!notice) {
        notice = document.createElement('div');
        notice.id = 'contact-inline-notice';
        notice.className = 'confirm-msg';
        const submitBtn = document.getElementById('btn-whatsapp');
        if (submitBtn) {
            submitBtn.insertAdjacentElement('beforebegin', notice);
        } else {
            // Fallback: append to form
            form.appendChild(notice);
        }
    }

    notice.textContent = message;
    notice.style.display = 'block';
    notice.style.margin = '0.75rem 0';
    notice.style.background = isError ? 'rgba(139,32,32,0.08)' : '#d1fae5';
    notice.style.color = isError ? '#8B2020' : '#065f46';
    notice.style.borderLeft = isError ? '3px solid #8B2020' : '3px solid #065f46';
}

// ================================================================
// MAINTENANCE MODE CHECK
// ================================================================

async function checkMaintenanceMode() {
    try {
        const res = await fetch('/api/log-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'getMaintenanceMode' })
        });
        
        if (!res.ok) {
            console.warn('Maintenance check failed:', res.status);
            return; // Don't redirect on error
        }
        
        const json = await res.json();
        if (json.value === 'on') {
            window.location.href = '/maintenance.html';
        }
    } catch (e) {
        console.warn('Maintenance check unavailable:', e);
        // Don't redirect on network errors
    }
}

// ================================================================
// POPULATE CONTACT FORM DROPDOWNS
// ================================================================

function populateContactDropdowns() {
    // Populate property dropdown in contact form
    const propSelect = document.getElementById('contact-prop-sel');
    if (propSelect && propSelect.options.length <= 1) {
        const lang = window.currentLang || 'en';
        const properties = [
            { value: 'MiaCasa Hanoi', textEn: 'MiaCasa Hanoi (Near Train Street)', textVn: 'MiaCasa Hà Nội (Gần Phố Tàu)' },
            { value: 'MiaCasa Old Quarter', textEn: 'MiaCasa Old Quarter (Hoan Kiem)', textVn: 'MiaCasa Phố Cổ (Hoàn Kiếm)' },
            { value: 'Not sure yet', textEn: 'Not sure yet', textVn: 'Chưa chắc chắn' }
        ];
        
        propSelect.innerHTML = '';
        
        properties.forEach(prop => {
            const option = document.createElement('option');
            option.value = prop.value;
            option.textContent = lang === 'vn' ? prop.textVn : prop.textEn;
            propSelect.appendChild(option);
        });
    }
    
    // Populate booking room dropdown if it exists and is empty
    const roomSelect = document.getElementById('room-type-sel');
    if (roomSelect && roomSelect.options.length <= 1) {
        const lang = window.currentLang || 'en';
        
        let activeProp = 'hanoi';
        const activeBtn = document.querySelector('.prop-select-btn.active');
        if (activeBtn && activeBtn.id) {
            const id = activeBtn.id.replace('bsb-', '');
            if (id === 'oldquarter') activeProp = 'oldquarter';
            else activeProp = 'hanoi';
        }
        
        let rooms = [];
        if (activeProp === 'hanoi') {
            rooms = [
                { value: 'Spring Room', textEn: '🌸 Spring Room', textVn: '🌸 Phòng Xuân' },
                { value: 'Summer Room', textEn: '☀️ Summer Room', textVn: '☀️ Phòng Hạ' },
                { value: 'Autumn Room', textEn: '🍂 Autumn Room', textVn: '🍂 Phòng Thu' }
            ];
        } else {
            rooms = [
                { value: 'Entire Apartment (3 queen beds)', textEn: '🏠 Entire Old Quarter Apartment (up to 6 guests)', textVn: '🏠 Toàn bộ căn hộ Phố Cổ (tối đa 6 khách)' }
            ];
        }
        
        roomSelect.innerHTML = '';
        rooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.value;
            option.textContent = lang === 'vn' ? room.textVn : room.textEn;
            roomSelect.appendChild(option);
        });
    } 
    
    // Populate guests dropdown if it exists and is empty
    const guestsSelect = document.getElementById('guests-sel');
    if (guestsSelect && guestsSelect.options.length <= 1) {
        for (let i = 1; i <= 6; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i === 1 ? '1 guest' : `${i} guests`;
            guestsSelect.appendChild(option);
        }
    }
}

// Update dropdowns when language changes
function updateDropdownsOnLangChange() {
    const propSelect = document.getElementById('contact-prop-sel');
    const roomSelect = document.getElementById('room-type-sel');
    const lang = window.currentLang || 'en';
    
    if (propSelect) {
        const properties = [
            { value: 'MiaCasa Hanoi', textEn: 'MiaCasa Hanoi (Near Train Street)', textVn: 'MiaCasa Hà Nội (Gần Phố Tàu)' },
            { value: 'MiaCasa Old Quarter', textEn: 'MiaCasa Old Quarter (Hoan Kiem)', textVn: 'MiaCasa Phố Cổ (Hoàn Kiếm)' },
            { value: 'Not sure yet', textEn: 'Not sure yet', textVn: 'Chưa chắc chắn' }
        ];
        
        const currentValue = propSelect.value;
        propSelect.innerHTML = '';
        properties.forEach(prop => {
            const option = document.createElement('option');
            option.value = prop.value;
            option.textContent = lang === 'vn' ? prop.textVn : prop.textEn;
            propSelect.appendChild(option);
        });
        if (currentValue) propSelect.value = currentValue;
    }
    
    const activeProp = window.activeProp || 'hanoi';
    if (roomSelect && roomSelect.options.length <= 1) {
        const lang = window.currentLang || 'en';
        
        let rooms = [];
        if (activeProp === 'hanoi') {
            rooms = [
                { value: 'Spring Room', textEn: '🌸 Spring Room', textVn: '🌸 Phòng Xuân' },
                { value: 'Summer Room', textEn: '☀️ Summer Room', textVn: '☀️ Phòng Hạ' },
                { value: 'Autumn Room', textEn: '🍂 Autumn Room', textVn: '🍂 Phòng Thu' }
            ];
        } else {
            rooms = [
                { value: 'Entire Apartment (3 queen beds)', textEn: '🏠 Entire Old Quarter Apartment (up to 6 guests)', textVn: '🏠 Toàn bộ căn hộ Phố Cổ (tối đa 6 khách)' }
            ];
        }
        
        roomSelect.innerHTML = '';
        rooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.value;
            option.textContent = lang === 'vn' ? room.textVn : room.textEn;
            roomSelect.appendChild(option);
        });
    } 
}

// Register language change hook
if (typeof registerTranslationHook === 'function') {
    registerTranslationHook(updateDropdownsOnLangChange);
}

// ================================================================
// FAQ ACCORDION - Accessible pattern
// ================================================================

function initFaqAccordion() {
    document.querySelectorAll('.faq-q').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            var targetId = btn.getAttribute('aria-controls');
            var panel = document.getElementById(targetId);
            
            btn.setAttribute('aria-expanded', String(!expanded));
            
            if (panel) {
                panel.style.display = expanded ? 'none' : 'block';
                var icon = btn.querySelector('.plus-icon');
                if (icon) {
                    icon.textContent = expanded ? '+' : '−';
                }
            }
        });
        
        // Keyboard support
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

// ================================================================
// SECTION NAVIGATION - SCROLL TO SECTION (FIX)
// ================================================================

function initSectionNavigation() {
    document.querySelectorAll('.section-nav a, .fab-nav-menu a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var href = this.getAttribute('href');
            if (href && href !== '#') {
                // Extract the ID from href
                var targetId = href;
                // Handle "/#booking" format
                if (targetId.includes('/#')) {
                    targetId = targetId.split('/#')[1];
                    targetId = '#' + targetId;
                }
                // If it doesn't start with #, add it
                if (!targetId.startsWith('#')) {
                    targetId = '#' + targetId;
                }
                
                var target = document.querySelector(targetId);
                if (target) {
                    // Close mobile menu if open
                    var mobileMenu = document.getElementById('mobileNavMenu');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('show');
                        mobileMenu.setAttribute('hidden', '');
                    }
                    
                    // Calculate scroll position with nav offset
                    var nav = document.querySelector('nav');
                    var navHeight = nav ? nav.offsetHeight : 80;
                    var targetPosition = target.offsetTop - navHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ================================================================
// INITIALIZATION - CLEAN VERSION (No scroll blockers)
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    // ============================================================
    // PREVENT BROWSER SCROLL RESTORATION - ONLY ON HOMEPAGE
    // ============================================================
    // Only run this on the homepage, not on subpages
    // Check if we're on the homepage and there's no hash
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    const hasHash = window.location.hash && window.location.hash.length > 1;
    
    if (isHomepage && !hasHash) {
        // Force scroll to top only when no hash is present
        window.scrollTo(0, 0);
        
        // Disable scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        // Check again after a tiny delay
        setTimeout(function() {
            if (window.scrollY > 0) {
                window.scrollTo(0, 0);
            }
        }, 50);
    }
    
    // ============================================================
    // INITIALIZE HASH SCROLL HANDLING (Fixes blog CTA links)
    // Wait for booking form to be ready before scrolling
    // ============================================================
    // Delay hash scroll to allow booking form to initialize first
    setTimeout(function() {
        initHashScroll();
    }, 300);
    
    // ============================================================
    // INITIALIZE SECTION NAVIGATION
    // ============================================================
    initSectionNavigation();
    
    // ============================================================
    // REST OF INITIALIZATION
    // ============================================================
    
    setActiveNavLink();
    initBackToTop();
    initScrollReveal();
    checkMaintenanceMode();
    initFaqAccordion();
    
    populateContactDropdowns();
    
    if (document.getElementById('captcha-num1')) {
        generateCaptcha('booking');
    }
    if (document.getElementById('contact-captcha-num1')) {
        generateCaptcha('contact');
    }
    
    const captchaInput = document.getElementById('captcha-answer');
    if (captchaInput) {
        captchaInput.addEventListener('input', function() {
            const errorEl = document.getElementById('captcha-error');
            if (errorEl) {
                errorEl.style.display = 'none';
                errorEl.textContent = '';
            }
        });
    }
    
    const contactCaptchaInput = document.getElementById('contact-captcha-answer');
    if (contactCaptchaInput) {
        contactCaptchaInput.addEventListener('input', function() {
            const errorEl = document.getElementById('contact-captcha-error');
            if (errorEl) {
                errorEl.style.display = 'none';
                errorEl.textContent = '';
            }
        });
    }
    
    const refreshBookingBtn = document.getElementById('refresh-captcha');
    if (refreshBookingBtn) {
        refreshBookingBtn.addEventListener('click', function() {
            generateCaptcha('booking');
        });
    }
    
    const refreshContactBtn = document.getElementById('refresh-contact-captcha');
    if (refreshContactBtn) {
        refreshContactBtn.addEventListener('click', function() {
            generateCaptcha('contact');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links')?.classList.remove('show');
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            document.querySelector('.nav-links')?.classList.remove('show');
        }
    });
    
    var chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendChat();
        });
    }
});

// Register translation hook for dynamic content
if (typeof registerTranslationHook === 'function') {
    registerTranslationHook(function(lang) {
        var backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            backToTop.setAttribute('aria-label', lang === 'vn' ? 'Lên đầu trang' : 'Back to top');
        }
    });
}

// ================================================================
// MOBILE NAVIGATION (FAB)
// ================================================================

function toggleMobileNav() {
    var menu = document.getElementById('mobileNavMenu');
    if (menu) {
        var isHidden = menu.hasAttribute('hidden');
        if (isHidden) {
            menu.removeAttribute('hidden');
            menu.classList.add('show');
        } else {
            menu.setAttribute('hidden', '');
            menu.classList.remove('show');
        }
    }
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
    var fabNav = document.querySelector('.fab-nav');
    var menu = document.getElementById('mobileNavMenu');
    if (fabNav && menu && !fabNav.contains(event.target) && menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.setAttribute('hidden', '');
    }
});

// ================================================================
// SCROLL SPY - Highlight active section in nav
// ================================================================

function updateActiveNav() {
    var sections = document.querySelectorAll('section[id], .nav-anchor');
    var navLinks = document.querySelectorAll('.section-nav a, .fab-nav-menu a');
    
    var current = '';
    var scrollPosition = window.scrollY + 100;
    
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href) {
            // Extract ID from href (handle both "#booking" and "/#booking")
            var linkId = href;
            if (linkId.includes('/#')) {
                linkId = linkId.split('/#')[1];
                linkId = '#' + linkId;
            }
            if (!linkId.startsWith('#')) {
                linkId = '#' + linkId;
            }
            if (linkId === '#' + current) {
                link.classList.add('active');
            }
        }
    });
}

// Only listen to scroll events, NOT load events
window.addEventListener('scroll', updateActiveNav);
// window.addEventListener('load', updateActiveNav); // REMOVED - this was causing auto-scroll