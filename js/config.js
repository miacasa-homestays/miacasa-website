// /js/config.js - Universal configuration
// All API calls go through the Netlify function proxy (/api/log-booking)
// The Google Sheets URL is stored as a server-side environment variable only

// ================================================================
// CONFIGURATION - Centralized hardcoded values
// ================================================================

window.MiaCasaConfig = {
  // Contact Information
  phone: '+84869922261',
  phoneDisplay: '+84 869 922 261',
  email: 'miacasahanoi@gmail.com',
  whatsappUrl: 'https://wa.me/84869922261',
  
  // Social Media
  facebook: 'https://www.facebook.com/profile.php?id=61558873260616',
  instagram: 'https://www.instagram.com/miacasahanoi/',
  tiktok: 'https://www.tiktok.com/@miacasahanoi',
  
  // Default Language
  defaultLang: 'en',
  
  // Currency
  currency: '₫',
  currencyCode: 'VND',
  
  // Exchange Rate (VND to USD)
  exchangeRate: 25000,
  
  // Booking
  minGuests: 1,
  maxGuests: 6,
  
  // Response Times (in hours)
  responseTime: 2,
  
  // Maintenance Mode - set to true to enable
  maintenanceMode: false
};

// ================================================================
// API HELPER - Routes through Netlify serverless function
// ================================================================

/**
 * Generic API call function
 * @param {string} action - The action to perform (e.g., 'logBooking', 'getMaintenanceMode')
 * @param {object} data - Additional data to send with the request
 * @returns {Promise<object>} - The API response
 */
async function callAPI(action, data = {}) {
  const payload = { action, ...data };

  try {
    const response = await fetch('/api/log-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// ================================================================
// HELPER FUNCTIONS
// ================================================================

/**
 * Get current language from localStorage or default
 */
function getCurrentLang() {
  try {
    const saved = localStorage.getItem('mia_lang');
    if (saved) {
      return saved;
    }
  } catch (e) {
    // Ignore
  }
  return window.MiaCasaConfig.defaultLang || 'en';
}

/**
 * Set current language
 */
function setCurrentLang(lang) {
  try {
    localStorage.setItem('mia_lang', lang);
  } catch (e) {
    // Ignore
  }
}

/**
 * Format currency
 */
function formatCurrency(amount) {
  const currency = window.MiaCasaConfig.currency || '₫';
  return amount.toLocaleString('vi-VN') + currency;
}

/**
 * Format phone number for display
 */
function formatPhoneNumber(phone) {
  // +84869922261 -> +84 869 922 261
  return phone.replace(/(\+\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
}

// ================================================================
// INITIALIZATION - Set up global variables
// ================================================================

// Ensure currentLang is globally available
if (typeof window.currentLang === 'undefined') {
  window.currentLang = getCurrentLang();
}

// Make config globally available
if (typeof window.config === 'undefined') {
  window.config = window.MiaCasaConfig;
}

// Also expose helper functions globally
window.callAPI = callAPI;
window.getCurrentLang = getCurrentLang;
window.setCurrentLang = setCurrentLang;
window.formatCurrency = formatCurrency;
window.formatPhoneNumber = formatPhoneNumber;

// REMOVED: Node.js process check - browser safe version instead
// Log that config is loaded (only in development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('MiaCasa Config loaded:', window.MiaCasaConfig);
  console.log('Current language:', window.currentLang);
}