// Pre-load cached price overrides from localStorage
(function () {
  try {
    var raw = localStorage.getItem('mia_price_overrides_v1');
    if (!raw) return;
    var parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.data)) {
      window._cachedPriceOverrides = parsed.data;
    }
  } catch (e) {}
}());