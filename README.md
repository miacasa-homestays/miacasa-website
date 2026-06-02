```markdown
# MiaCasa Homestays Website

A fast, multilingual boutique homestay website for MiaCasa Hanoi built with vanilla HTML, CSS, and JavaScript.

## Project Focus

- Direct bookings without OTA commissions
- Dynamic room pricing with admin-controlled overrides
- Multilingual support (English / Vietnamese / Chinese)
- SEO-optimized travel content
- Mobile-first responsive design
- Lightweight performance-focused architecture
- Google Sheets-powered booking management

## Live Website

- **Production:** [miacasahanoi.com](https://miacasahanoi.com)

## Features

### Property Booking System
- Multiple properties:
  - MiaCasa Hanoi (3 private studio rooms)
  - MiaCasa Old Quarter (Entire 3-bedroom apartment)
- Room selection with real-time availability
- Dynamic nightly pricing
- Seasonal and weekend rates
- Admin-controlled price overrides
- Booking total calculation
- Extra guest pricing
- Unique Booking ID generation
- Availability checking

### Admin Features
- Google Sheets integration for pricing
- Price override management
- Booking logging system
- Recurring pricing rules (weekday/month)
- Admin dashboard for maintenance mode

### SEO & Content
- SEO-optimized blog system
- Structured travel guides
- Multilingual blog support
- Internal linking strategy
- Open Graph metadata
- JSON-LD structured data
- Mobile-optimized layouts

### UI / UX
- Fully responsive design
- Language toggle (EN / VN / ZH)
- Sticky booking CTA on mobile
- Smooth scroll navigation
- Lightweight animations
- Performance-optimized images
- FAQ accordion section
- Guest reviews with pagination
- WhatsApp chat integration
- AI-powered chatbot assistant

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)

### Backend / Services
- Google Apps Script (API endpoints)
- Google Sheets (Pricing database)
- EmailJS (Booking confirmations)
- Cloudinary (Image CDN)

### Infrastructure
- Vercel / Netlify hosting
- Porkbun DNS management
- Cloudinary media hosting

## Project Structure

## Project Structure

```text
/
├── index.html                 # Homepage
├── miacasa-hanoi.html         # Property: Hanoi location
├── miacasa-oldquarter.html    # Property: Old Quarter location
├── our-story.html             # About / Brand story
├── blog.html                  # Blog listing page
├── blog-old-quarter-guide.html # Blog post
├── admin.html                 # Admin dashboard
├── cancel.html                # Cancellation requests
├── invoice.html               # Invoice requests
├── maintenance.html           # Maintenance mode page
├── css/
│   └── style.css              # Global styles
├── js/
│   ├── main.js                # Core functionality
│   ├── lang.js                # Translations (EN/VN/ZH)
│   ├── booking.js             # Booking form logic
│   ├── prices.js              # Google Sheets pricing
│   ├── admin.js               # Admin panel
│   └── maintenance.js         # Maintenance mode
├── api/
│   └── log-booking            # Booking logging endpoint
└── images/                    # Static assets
```

## Dynamic Pricing Logic

The booking system supports:
- Base weekday pricing
- Weekend pricing
- Special event pricing
- Admin override pricing
- Recurring weekday/month pricing rules

### Pricing Priority (highest to lowest)
1. Price Override (specific date range)
2. Special Day Rate
3. Weekend Rate
4. Default Weekday Rate

Overrides are fetched from Google Sheets and become the single source of truth across:
- Booking engine
- Property cards
- Compare sections
- Price estimate widgets

## Language System

The website supports:
- English (default)
- Vietnamese (Tiếng Việt)
- Simplified Chinese (中文)

Language switching is handled using:
- `data-t` attribute for textContent (plain text)
- `data-th` attribute for innerHTML (HTML rendering)
- CSS classes `.en-only`, `.vn-only`, `.zh-only`
- `document.documentElement.setAttribute("data-lang", lang)`

## Performance

### Current Lighthouse Scores

**Desktop:**
- Performance: 100
- LCP: ~0.6s
- CLS: 0.014

**Mobile:**
- Performance: ~90+
- LCP: ~3.8s (on Slow 4G)
- CLS: 0.012

### Optimizations Implemented
- WebP image delivery
- Lazy loading for below-fold images
- Minimal JavaScript footprint
- Optimized CSS with critical path
- Cloudinary CDN with automatic compression
- Responsive images with srcset
- No external dependencies (except CDNs)

## Deployment

### Vercel / Netlify
The site is deployed via Vercel (primary) and Netlify (legacy).

**Custom Domain Setup**
Domain managed via Porkbun with DNS configuration:
- ALIAS @ → apex-loadbalancer.netlify.com
- CNAME www → miacasahanoi.netlify.app

### Local Development

```bash
# Clone the repository
git clone https://github.com/miacasa-homestays/miacasa-website.git

# Navigate to project
cd miacasa-website

# Start local server (any of these)
python -m http.server 8000
# or
npx serve
# or
Use VS Code Live Server extension
```

## Environment Variables / Integrations

The project integrates with:
- Google Apps Script endpoints (booking logging, maintenance mode)
- Google Sheets (pricing data)
- EmailJS (email confirmations)
- Cloudinary (image hosting)
- PayPal (payment processing)

**Required configuration before deployment:**
- Google Sheets API access (public or with key)
- EmailJS credentials
- Cloudinary cloud name

## Common Issues & Troubleshooting

| Issue | Solution |
|-------|----------|
| Translations not showing | Check `data-t` vs `data-th` usage |
| Booking form not submitting | Verify EmailJS credentials in console |
| Prices not updating | Check Google Sheets is published to web |
| Maintenance mode stuck | Clear browser cache, check admin config |
| Images not loading | Verify Cloudinary URLs and transforms |
| Mobile menu not working | Check hamburger event listeners |

## Future Improvements

- [ ] Online payment integration (Stripe)
- [ ] Real-time availability sync
- [ ] Full CMS integration
- [ ] AI-powered travel recommendations
- [ ] Enhanced analytics dashboard
- [ ] Multi-currency support
- [ ] User accounts with booking history
- [ ] Automated check-in system
- [ ] Mobile app (React Native)

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile browsers | Latest versions |

## License

Private project for MiaCasa Homestays. All rights reserved.

## Author

Built for MiaCasa Homestays in Hanoi.

---

**Made with ♡ in Hanoi** 🇻🇳 
