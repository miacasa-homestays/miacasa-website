// ================================================================
// PRICES.JS - Centralized Price Configuration
// Admin can update prices here and they will reflect site-wide
// ================================================================

'use strict';

// ================================================================
// CONFIG - Use centralized config values for currency
// ================================================================

// Ensure config is available
if (typeof window.config === 'undefined' && typeof window.MiaCasaConfig !== 'undefined') {
  window.config = window.MiaCasaConfig;
}

// Get currency from config or use default
const CONFIG_CURRENCY = window.config?.currency || '₫';
const CONFIG_CURRENCY_CODE = window.config?.currencyCode || 'VND';

// ================================================================
// PRICE CONFIGURATION
// ================================================================

const PRICES = {
    // Base prices (per night)
    'hanoi-spring': 750000,
    'hanoi-summer': 750000,
    'hanoi-autumn': 750000,
    'hanoi-weekend': 800000,
    'hanoi-special': 900000,
    'oldquarter': 1200000,
    'oldquarter-weekend': 1350000,
    'oldquarter-special': 1400000,
    
    // Extra guest charges (per person per night beyond base)
    'extra-guest-hanoi': 100000,
    'extra-guest-oldquarter': 100000,
    
    // Discounts
    'weekly-discount': 10,
    'monthly-discount': 15,
    'direct-booking-savings': 15,
    
    // Platform comparison prices
    'airbnb-price-hanoi': 880000,
    'airbnb-price-oldquarter': 1410000,
    'booking-price-hanoi': 850000,
    'booking-price-oldquarter': 1380000
};

// ================================================================
// HELPER FUNCTIONS
// ================================================================

function getPrice(property, roomType = null) {
  if (property === 'hanoi') {
    return PRICES['hanoi-spring']; // All Hanoi rooms same price
  }
  if (property === 'oldquarter') {
    return PRICES.oldquarter;
  }
  return 0;
}

function getExtraGuestCharge(property) {
  if (property === 'hanoi') return PRICES['extra-guest-hanoi'];
  if (property === 'oldquarter') return PRICES['extra-guest-oldquarter'];
  return 0;
}

function getFormattedPrice(property, roomType = null, lang = 'en') {
  const price = getPrice(property, roomType);
  const currencySymbol = CONFIG_CURRENCY;
  const formatter = new Intl.NumberFormat(lang === 'vn' ? 'vi-VN' : 'en-US');
  return `${formatter.format(price)}${currencySymbol}`;
}

function getSavingsBadge(property, lang = 'en') {
  if (property === 'hanoi') {
    const airbnbPrice = PRICES['airbnb-price-hanoi'];
    const ourPrice = PRICES['hanoi-spring'];
    const saved = Math.round(((airbnbPrice - ourPrice) / airbnbPrice) * 100);
    return lang === 'vn' ? `Tiết kiệm ${saved}% so với Airbnb` : `Save ${saved}% vs Airbnb`;
  } else {
    const airbnbPrice = PRICES['airbnb-price-oldquarter'];
    const ourPrice = PRICES.oldquarter;
    const saved = Math.round(((airbnbPrice - ourPrice) / airbnbPrice) * 100);
    return lang === 'vn' ? `Tiết kiệm ${saved}% so với Airbnb` : `Save ${saved}% vs Airbnb`;
  }
}

/**
 * Get discounted price based on length of stay
 * @param {number} nights - Number of nights
 * @param {number} basePrice - Base price per night
 * @returns {number} - Discounted price per night
 */
function getDiscountedPrice(nights, basePrice) {
  if (nights >= 28) {
    return basePrice * (1 - PRICES['monthly-discount'] / 100);
  }
  if (nights >= 7) {
    return basePrice * (1 - PRICES['weekly-discount'] / 100);
  }
  return basePrice;
}

/**
 * Calculate total price with discounts
 * @param {string} property - Property ID ('hanoi' or 'oldquarter')
 * @param {number} nights - Number of nights
 * @param {number} guests - Number of guests
 * @param {string} roomType - Room type (optional)
 * @returns {object} - Price breakdown
 */
function calculateTotalPrice(property, nights, guests, roomType = null) {
  const basePrice = getPrice(property, roomType);
  const discountedPrice = getDiscountedPrice(nights, basePrice);
  const extraGuestFee = getExtraGuestCharge(property);
  
  // Assumes 2 guests included in base price
  const includedGuests = 2;
  const extraGuests = Math.max(0, guests - includedGuests);
  const extraCharge = extraGuests * extraGuestFee * nights;
  
  const subtotal = discountedPrice * nights;
  const total = subtotal + extraCharge;
  
  return {
    basePrice,
    discountedPrice,
    nights,
    subtotal,
    extraCharge,
    total,
    currency: CONFIG_CURRENCY_CODE
  };
}

// ================================================================
// EXPOSE FUNCTIONS GLOBALLY
// ================================================================

// Make PRICES available globally
window.PRICES = PRICES;

// Expose helper functions
window.getPrice = getPrice;
window.getExtraGuestCharge = getExtraGuestCharge;
window.getFormattedPrice = getFormattedPrice;
window.getSavingsBadge = getSavingsBadge;
window.getDiscountedPrice = getDiscountedPrice;
window.calculateTotalPrice = calculateTotalPrice;

// Export for Node.js/CommonJS (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    PRICES, 
    getPrice, 
    getFormattedPrice, 
    getSavingsBadge, 
    getExtraGuestCharge,
    getDiscountedPrice,
    calculateTotalPrice
  };
}