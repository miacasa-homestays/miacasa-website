/**
 * MiaCasa — Global Translation System (lang.js)
 * Include this on every page BEFORE any page-specific scripts.
 * 
 * HTML elements use:
 *   data-t="key"   → el.textContent = translation
 *   data-th="key"  → el.innerHTML   = translation (for <em>, <br> etc.)
 * 
 * To add a new page: add keys here, add data-t/data-th to the HTML.
 * setLang(lang) is global and persists via localStorage.
 */

const TRANSLATIONS = {
  /* ── NAV (all pages) ──────────────────────────────────────────── */
  'nav-home':        {en:'Home',                         vn:'Trang chủ', zh:'首页'},
  'nav-hanoi':       {en:'MiaCasa Hanoi',                vn:'MiaCasa Hà Nội', zh:'MiaCasa Hanoi'},
  'nav-oq':          {en:'MiaCasa Old Quarter',          vn:'MiaCasa Phố Cổ', zh:'MiaCasa Old Quarter'},
  'nav-story':       {en:'Our Story',                    vn:'Câu chuyện', zh:'我们的故事'},
  'nav-contact':     {en:'Contact Us',                   vn:'Liên hệ', zh:'联系我们'},
  'nav-stays':       {en:'Stays',                        vn:'Chỗ nghỉ', zh:'住宿'},
  'nav-book':        {en:'Book',                         vn:'Đặt phòng', zh:'预订'},
  'nav-gallery':     {en:'Gallery',                      vn:'Ảnh', zh:'相册'},
  'nav-about':       {en:'About',                        vn:'Giới thiệu', zh:'关于我们'},
  'nav-rooms':       {en:'Rooms',                        vn:'Phòng', zh:'房间'},
  'nav-apartment':   {en:'Apartment',                    vn:'Căn hộ', zh:'公寓'},
  'nav-blog':        {en:'Blog',                         vn:'Nhật ký', zh:'博客'},
  'nav-book-now':    {en:'Book Now',                     vn:'Đặt ngay', zh:'立即预订'},
  'nav-amenities':   {en:'Amenities',                    vn:'Tiện nghi', zh:'设施'},
  'nav-location':    {en:'Location',                     vn:'Vị trí', zh:'位置'},
  'nav-rules':       {en:'Rules',                        vn:'Nội quy', zh:'入住须知'},
  'nav-faq':         {en:'FAQ',                          vn:'Câu hỏi', zh:'常见问题'},
  'nav-reviews':     {en:'Reviews',                      vn:'Đánh giá', zh:'评价'},
  'sticky-book':     {en:'📅 Book Now',                  vn:'📅 Đặt ngay', zh:'📅 立即预订'},
  'book-now-home':   {en:'Book Now →',                   vn:'Đặt ngay →', zh:'立即预订 →'},

  /* ── HOMEPAGE HERO ────────────────────────────────────────────── */
  'hero-tag':        {en:'Hanoi, Vietnam',               vn:'Hà Nội, Việt Nam', zh:'越南河内'},
  'hero-h1':         {en:'Boutique Homestays<br>in <em>Hanoi</em>', vn:'Homestay Boutique<br>tại <em>Hà Nội</em>', zh:'位于<em>河内</em>的精品民宿'},
  'hero-sub':        {
                      en:'Warm, local stays in the heart of the city — perfect for couples, solo travelers, and small groups.',
                      vn:'Chỗ nghỉ ấm áp, đậm chất địa phương — lý tưởng cho các cặp đôi, khách solo và nhóm nhỏ.',
                      zh:'温馨且充满本地特色的住宿，位于城市中心，非常适合情侣、独自旅行者和小团体。'
                     },
  'hero-cta1':       {en:'View MiaCasa Hanoi',           vn:'Xem MiaCasa Hà Nội', zh:'查看 MiaCasa Hanoi'},
  'hero-cta2':       {en:'View MiaCasa Old Quarter',     vn:'Xem MiaCasa Phố Cổ', zh:'查看 MiaCasa Old Quarter'},
  'hero-cta3':       {en:'Explore Stays',                vn:'Khám phá chỗ nghỉ', zh:'探索住宿'},
  'hero-badge-rated': {
    en: 'Rated across Airbnb & Booking.com',
    vn: 'Được đánh giá trên Airbnb và Booking.com',
    zh: '在 Airbnb 和 Booking.com 上获得好评'
  },
  'hero-badge-stars': {
    en: '★ 4.9 — 200+ Happy Guests',
    vn: '★ 4.9 — 200+ Khách hài lòng',
    zh: '★ 4.9 — 200+ 满意客人'
  },

  /* ── HOMEPAGE WELCOME ─────────────────────────────────────────── */
  'welcome-tag':     {en:'A Different Kind of Stay',     vn:'Trải nghiệm khác biệt', zh:'与众不同的住宿体验'},
  'welcome-title':   {en:'A Different Kind<br>of <em>Stay</em>', vn:'Một Trải Nghiệm<br><em>Khác Biệt</em>', zh:'一种不同的<br><em>住宿体验</em>'},
  'wl-p1':           {
                      en:'At MiaCasa, we believe travel should feel personal, not transactional.',
                      vn:'Tại MiaCasa, chúng tôi tin rằng du lịch nên mang tính cá nhân, không phải giao dịch.',
                      zh:'在 MiaCasa，我们相信旅行应该是温暖且个性化的，而不仅仅是一场交易。'
                     },
  'wl-p2':           {
                      en:'Our homes are designed to be comfortable, calm, and genuinely local — whether you are here for a short visit or a longer stay. Choose a <a href="/miacasa-hanoi" style="color:var(--terracotta);text-decoration:none;font-weight:500;">quiet room near Hanoi Railway Station</a>, or book our <a href="/miacasa-oldquarter" style="color:var(--terracotta);text-decoration:none;font-weight:500;">entire apartment in the Old Quarter</a>.',
                      vn:'Những ngôi nhà được thiết kế để thoải mái, yên tĩnh và đậm chất địa phương — dù bạn ở ngắn hay dài ngày.',
                      zh:'我们的住宿空间舒适、安静且充满本地特色，无论是短住还是长住都非常适合。您可以选择<a href="/miacasa-hanoi" style="color:var(--terracotta);text-decoration:none;font-weight:500;">靠近河内火车站的安静房间</a>，或预订<a href="/miacasa-oldquarter" style="color:var(--terracotta);text-decoration:none;font-weight:500;">位于老城区的整套公寓</a>。'
                     },
  'wl-cta':          {en:'Learn about Our Story →',      vn:'Tìm hiểu câu chuyện của chúng tôi →', zh:'了解我们的故事 →'},

  /* ── HOMEPAGE WHY BOOK DIRECT ─────────────────────────────────── */
  'sec-direct':      {en:'Why Book Direct',              vn:'Tại sao đặt trực tiếp', zh:'为什么直接预订'},
  'direct-title':    {en:'Better rates,<br><em>direct connection</em>', vn:'Giá tốt hơn,<br><em>kết nối trực tiếp</em>', zh:'更优惠的价格，<br><em>直接联系</em>'},
  'direct-1':        {en:'Save 10–15% compared to booking platforms',  vn:'Tiết kiệm 10–15% so với các nền tảng đặt phòng', zh:'相比预订平台节省 10–15%'},
  'direct-2':        {en:'Direct support via WhatsApp',                vn:'Hỗ trợ trực tiếp qua WhatsApp', zh:'通过 WhatsApp 直接联系'},
  'direct-3':        {en:'Flexible check-in and personalized help',    vn:'Check-in linh hoạt và hỗ trợ cá nhân hoá', zh:'灵活入住与个性化帮助'},
  'direct-4':        {en:'No hidden fees',                             vn:'Không phí ẩn', zh:'无隐藏费用'},
  'direct-headline': {en:'📌 Why book direct with MiaCasa', vn:'📌 Tại sao đặt trực tiếp với MiaCasa', zh:'📌 为什么直接在 MiaCasa 预订'},
  'direct-cta':      {en:'Same stay. Better price. Book direct.', vn:'Cùng một chỗ nghỉ. Giá tốt hơn. Đặt trực tiếp.', zh:'同样住宿，更优惠价格。直接预订。'},

  /* ── HOMEPAGE BOOKING SECTION ─────────────────────────────────── */
  'sec-book':        {en:'Reservations',                vn:'Đặt phòng', zh:'预订'},
  'book-title':      {en:'Book Your Stay <em>Direct</em>', vn:'Đặt phòng <em>trực tiếp</em>', zh:'<em>直接</em>预订您的住宿'},
  'book-sub':        {en:'Better rates. No platform fees. Instant confirmation.', vn:'Giá tốt hơn. Không phí nền tảng. Xác nhận ngay lập tức.', zh:'更优惠价格，无平台费用，即时确认。'},
  'choose-stay':     {en:'Choose your stay',            vn:'Chọn chỗ nghỉ của bạn', zh:'选择您的住宿'},
  'instant-punch':   {en:'⚡ Instant booking. No platform fees. Confirm in minutes.', vn:'⚡ Đặt phòng ngay lập tức. Không phí nền tảng. Xác nhận trong vài phút.', zh:'⚡ 即时预订。无平台费用。几分钟内确认。'}, 
  'brand-clarify': {
    en: '⭐ Better price direct · No platform fees · Instant confirmation',
    vn: '⭐ Giá tốt hơn khi đặt trực tiếp · Không phí nền tảng · Xác nhận ngay lập tức',
    zh: '⭐ 直接预订更优惠 · 无平台费用 · 即时确认'
  },
  'booking-badge-warning': {
    en: '🔥 High demand — weekends fill up fast',
    vn: '🔥 Nhu cầu cao — cuối tuần kín phòng nhanh',
    zh: '🔥 需求旺盛 — 周末很快订满'
  },
  // Add these to your lang.js translations object
  // New translations for the updated selector
  'choose-title': { en: 'Two Different Homes,<br><em>Choose Your Hanoi Experience</em>', vn: 'Hai Ngôi Nhà Khác Nhau,<br><em>Chọn Trải Nghiệm Hà Nội Của Bạn</em>', zh:'两种不同住宿，<br><em>选择您的河内体验</em>' },
  'diff-addresses': { en: 'Different addresses', vn: 'Địa chỉ khác nhau', zh:'不同地址' },
  'both-no-elevator': { en: 'No elevator in either property', vn: 'Không có thang máy ở cả hai chỗ nghỉ', zh:'两处住宿均无电梯' },
  'oq-badge-1': { en: '🏠 ENTIRE APARTMENT', vn: '🏠 TOÀN BỘ CĂN HỘ', zh:'🏠 整套公寓' },
  'oq-location': { en: 'Hoàn Kiếm · Old Quarter', vn: 'Hoàn Kiếm · Phố Cổ', zh:'还剑郡 · 老城区' },
  'oq-feat1': { en: '🛏️ 3 queen beds · Sleeps up to 6', vn: '🛏️ 3 giường đôi · Ngủ tối đa 6 người', zh:'🛏️ 3 张大床 · 最多入住 6 人' },
  'oq-feat2': { en: '🌿 Private terrace · Smart lock', vn: '🌿 Sân thượng riêng · Khóa thông minh', zh:'🌿 私人露台 · 智能门锁' },
  'oq-feat3': { en: '🚶 2 min walk to Hoàn Kiếm Lake', vn: '🚶 Đi bộ 2 phút đến Hồ Hoàn Kiếm', zh:'🚶 步行 2 分钟到还剑湖' },
  'oq-feat4': { en: '🔑 Private entrance — no shared spaces', vn: '🔑 Lối vào riêng — không gian riêng tư', zh:'🔑 独立入口 — 无共享空间' },
  'h-badge-1': { en: '🛏️ PRIVATE ROOMS', vn: '🛏️ PHÒNG RIÊNG', zh:'🛏️ 独立房间' },
  'h-location': { en: 'Đống Đa · Near Train Street', vn: 'Đống Đa · Gần Phố Tàu', zh:'栋多郡 · 靠近火车街' },
  'h-feat1': { en: '🛏️ 3 private rooms · Up to 3 guests each', vn: '🛏️ 3 phòng riêng · Tối đa 3 khách mỗi phòng', zh:'🛏️ 3 间独立房间 · 每间最多 3 位客人' },
  'h-feat2': { en: '🍳 Kitchenette · Free laundry', vn: '🍳 Bếp nhỏ · Giặt ủi miễn phí', zh:'🍳 小厨房 · 免费洗衣' },
  'h-feat3': { en: '🚂 15 min walk to Train Street', vn: '🚂 Đi bộ 15 phút đến Phố Tàu', zh:'🚂 步行 15 分钟到火车街' },
  'h-feat4': { en: '🏡 Quiet, local residential neighborhood', vn: '🏡 Khu phố yên tĩnh, địa phương', zh:'🏡 安静的本地社区' },
  'from': { en: 'from', vn: 'từ', zh:'起' },
  'per-night': { en: '₫ /night', vn: '₫ /đêm', zh:'₫ /晚' },
  'instant-confirm': { en: '✓ Instant confirmation · ✓ Best rate', vn: '✓ Xác nhận ngay · ✓ Giá tốt nhất', zh:'✓ 即时确认 · ✓ 最优价格' },
  'selector-oq-btn': { en: 'Book Entire Apartment →', vn: 'Đặt Toàn Bộ Căn Hộ →', zh:'预订整套公寓 →' },
  'selector-h-btn': { en: 'Book a Room →', vn: 'Đặt Phòng →', zh:'预订房间 →' },
  'which-for-you': { en: '🤔 Which property is right for you?', vn: '🤔 Chỗ nghỉ nào phù hợp với bạn?', zh:'🤔 哪个住宿更适合您？' },

  // Update these existing ones if they don't match
  'selector-oq-title': { en: 'MiaCasa Old Quarter', vn: 'MiaCasa Phố Cổ', zh:'MiaCasa Old Quarter' },
  'selector-h-title': { en: 'MiaCasa Hanoi', vn: 'MiaCasa Hà Nội', zh:'MiaCasa Hanoi' },
  'selector-oq-desc': { en: 'Hoàn Kiếm · Old Quarter', vn: 'Hoàn Kiếm · Phố Cổ', zh:'还剑郡 · 老城区' },
  'selector-h-desc': { en: 'Đống Đa · Near Train Street', vn: 'Đống Đa · Gần Phố Tàu', zh:'栋多郡 · 靠近火车街' },

  // UPDATE these in your lang.js (change the values)
  'selector-oq-explore': { en: 'View Details →', vn: 'Xem chi tiết →', zh:'查看详情 →' },
  'selector-h-explore': { en: 'View Details →', vn: 'Xem chi tiết →', zh:'查看详情 →' },

  // Add these to your language object
  'two-properties-tag': { en: 'Two Properties', vn: 'Hai Chỗ Nghỉ', zh:'两处住宿' },
  'diff-addresses': { en: 'Different addresses', vn: 'Địa chỉ khác nhau', zh:'不同地址' },
  'both-entire': { en: 'Both can be entire homes', vn: 'Cả hai đều có thể là toàn bộ nhà', zh:'两者都可整套预订' },
  'oq-badge-1': { en: '🏠 ALWAYS AN ENTIRE APARTMENT', vn: '🏠 LUÔN LÀ TOÀN BỘ CĂN HỘ', zh:'🏠 始终为整套公寓' },
  'oq-location': { en: 'Hoàn Kiếm · Old Quarter', vn: 'Hoàn Kiếm · Phố Cổ', zh:'还剑郡 · 老城区' },
  'oq-feat4': { en: '🔑 Book the whole apartment — just for you', vn: '🔑 Đặt toàn bộ căn hộ — chỉ riêng bạn', zh:'🔑 整套公寓仅供您独享' },
  'h-badge-1': { en: '🛏️ PRIVATE ROOMS OR ENTIRE HOME*', vn: '🛏️ PHÒNG RIÊNG HOẶC TOÀN BỘ NHÀ*', zh:'🛏️ 独立房间或整套住房*' },
  'h-location': { en: 'Đống Đa · Near Train Street', vn: 'Đống Đa · Gần Phố Tàu', zh:'栋多郡 · 靠近火车街' },
  'h-feat4': { en: '🔑 Book 1 room OR book all 3 for the whole home*', vn: '🔑 Đặt 1 phòng HOẶC đặt cả 3 để có toàn bộ nhà*', zh:'🔑 预订 1 间房或预订全部 3 间获得整套住房*' },
  'note-title': { en: '📌 *About MiaCasa Hanoi:', vn: '📌 *Về MiaCasa Hà Nội:', zh:'📌 *关于 MiaCasa Hanoi：' },
  'from': { en: 'from', vn: 'từ', zh:'起' },
  /* ── HOUSE RULES ──────────────────────────────────────────────── */
'sec-rules': {
  en:'House Rules',
  vn:'Nội quy',
  zh:'入住须知'
},
'rules-title': {
  en:'A few things to keep in <em>mind</em>',
  vn:'Một vài điều cần <em>lưu ý</em>',
  zh:'一些需要<em>注意</em>的事项'
},
'rules-sub': {
  en:'To ensure everyone has a wonderful stay, we ask all guests to respect these simple guidelines.',
  vn:'Để đảm bảo mọi người có kỳ lưu trú tuyệt vời, chúng tôi đề nghị khách tuân thủ các quy định đơn giản sau.',
  zh:'为了确保每位客人都拥有愉快的住宿体验，请遵守以下简单规定。'
},

'rule-checkinout': {
  en:'Check-in / Check-out',
  vn:'Nhận / Trả phòng',
  zh:'入住 / 退房'
},
'rule-cio-1': {
  en:'Check-in from 2:00 PM (self check-in)',
  vn:'Nhận phòng từ 14:00 (tự check-in)',
  zh:'下午 2:00 起入住（自助入住）'
},
'rule-cio-2': {
  en:'MiaCasa Hanoi: check-out by 12:00 PM (noon)',
  vn:'MiaCasa Hanoi: trả phòng trước 12:00 (trưa)',
  zh:'MiaCasa Hanoi：中午 12:00 前退房'
},
'rule-cio-3': {
  en:'MiaCasaOldQuarter: check-out by 11:00 AM',
  vn:'MiaCasaOldQuarter: trả phòng trước 11:00',
  zh:'MiaCasa Old Quarter：上午 11:00 前退房'
},
'rule-cio-4': {
  en:'Early/late check-in available on request',
  vn:'Nhận / trả phòng sớm / muộn theo yêu cầu',
  zh:'可根据要求安排提前入住或延迟退房'
},
'rule-cio-5': {
  en:'Luggage storage available at MiaCasa Hanoi — longer durations may incur an extra charge',
  vn:'Có thể gửi hành lý tại MiaCasa Hanoi — thời gian dài có thể tính thêm phí',
  zh:'MiaCasa Hanoi 提供行李寄存服务，长时间寄存可能需额外收费'
},

'rule-noise': {
  en:'Noise & Guests',
  vn:'Tiếng ồn & Khách',
  zh:'噪音与访客'
},
'rule-noise-1': {
  en:'Quiet hours 10:00 PM – 7:00 AM',
  vn:'Giờ yên tĩnh 22:00 – 7:00',
  zh:'安静时段：晚上 10:00 至早上 7:00'
},
'rule-noise-2': {
  en:'No unregistered overnight guests',
  vn:'Không đón khách qua đêm chưa đăng ký',
  zh:'未经登记不得留宿访客'
},
'rule-noise-3': {
  en:'Be mindful of neighbours',
  vn:'Tôn trọng hàng xóm',
  zh:'请体谅邻居'
},
'rule-noise-4': {
  en:'Groups of 4+ need prior notice',
  vn:'Nhóm từ 4 người trở lên cần thông báo trước',
  zh:'4 人及以上团体需提前通知'
},

'rule-smoking': {
  en:'Smoking & Pets',
  vn:'Hút thuốc & Thú cưng',
  zh:'吸烟与宠物'
},
'rule-smoke-1': {
  en:'No smoking indoors',
  vn:'Không hút thuốc trong nhà',
  zh:'室内禁止吸烟'
},
'rule-smoke-2': {
  en:'Balcony/terrace smoking only',
  vn:'Chỉ hút thuốc ở ban công / sân thượng',
  zh:'仅可在阳台或露台吸烟'
},
'rule-smoke-3': {
  en:'Pets welcome — additional charge applies, please inform the host in advance',
  vn:'Chào đón thú cưng — phụ phí áp dụng, vui lòng báo chủ nhà trước',
  zh:'欢迎宠物入住，需额外收费，请提前通知房东'
},
'rule-smoke-4': {
  en:'Candles permitted with care',
  vn:'Cho phép dùng nến cẩn thận',
  zh:'可使用蜡烛，请注意安全'
},

'rule-propcare': {
  en:'Property Care',
  vn:'Bảo quản tài sản',
  zh:'房屋维护'
},
'rule-prop-1': {
  en:'Treat the space as your own home',
  vn:'Đối xử với không gian như ngôi nhà của bạn',
  zh:'请像对待自己家一样爱护房屋'
},
'rule-prop-2': {
  en:'Report damages promptly',
  vn:'Báo cáo hư hỏng ngay lập tức',
  zh:'如有损坏请及时告知'
},
'rule-prop-3': {
  en:'No shoes inside — slippers provided',
  vn:'Không đi giày trong nhà — có dép',
  zh:'室内请勿穿鞋，提供拖鞋'
},
'rule-prop-4': {
  en:'Use designated rubbish bins',
  vn:'Dùng thùng rác đúng nơi quy định',
  zh:'请使用指定垃圾桶'
},

'rule-legal': {
  en:'Legal Requirement',
  vn:'Yêu cầu pháp lý',
  zh:'法律要求'
},
'rule-legal-1': {
  en:'Vietnamese law requires all guests to provide a copy of their passport or national ID',
  vn:'Pháp luật Việt Nam yêu cầu tất cả khách phải cung cấp bản sao hộ chiếu hoặc CMND/CCCD',
  zh:'根据越南法律，所有客人需提供护照或身份证复印件'
},
'rule-legal-2': {
  en:'Please send a photo to the host via WhatsApp or email before or upon check-in',
  vn:'Vui lòng gửi ảnh cho chủ nhà qua WhatsApp hoặc email trước hoặc khi nhận phòng',
  zh:'请在入住前或入住时通过 WhatsApp 或电子邮件发送照片给房东'
},
'rule-legal-3': {
  en:'Bookings cannot be confirmed without this document',
  vn:'Đặt phòng không thể xác nhận nếu thiếu tài liệu này',
  zh:'缺少该文件将无法确认预订'
},
'rule-legal-4': {
  en:'Information is used solely for local authority registration',
  vn:'Thông tin chỉ dùng để đăng ký với cơ quan chức năng địa phương',
  zh:'信息仅用于当地政府登记'
},

'rule-payment': {
  en:'Payments & Cancellation',
  vn:'Thanh toán & Hủy phòng',
  zh:'付款与取消政策'
},
'rule-pay-1': {
  en:'Free cancellation up to 48h prior',
  vn:'Miễn phí hủy trước 48 giờ',
  zh:'入住前 48 小时可免费取消'
},
'rule-pay-2': {
  en:'Bank transfer or PayPal accepted',
  vn:'Chấp nhận chuyển khoản ngân hàng hoặc PayPal',
  zh:'接受银行转账或 PayPal'
},
'rule-pay-3': {
  en:'Security deposit for long stays',
  vn:'Đặt cọc bảo đảm cho lưu trú dài ngày',
  zh:'长期住宿需支付押金'
},

'rule-eco': {
  en:'Eco Guidelines',
  vn:'Hướng dẫn sinh thái',
  zh:'环保建议'
},
'rule-eco-1': {
  en:'Turn off A/C when leaving',
  vn:'Tắt điều hoà khi ra ngoài',
  zh:'离开时请关闭空调'
},
'rule-eco-2': {
  en:'Mineral water provided (2 bottles per room per stay)',
  vn:'Cung cấp nước khoáng (2 chai mỗi phòng mỗi lần ở)',
  zh:'提供矿泉水（每间房每次入住 2 瓶）'
},
'rule-eco-3': {
  en:'We minimise single-use plastics where possible',
  vn:'Chúng tôi giảm thiểu đồ nhựa dùng một lần',
  zh:'我们尽量减少一次性塑料使用'
},
'rule-eco-4': {
  en:'Towel reuse encouraged',
  vn:'Khuyến khích tái sử dụng khăn tắm',
  zh:'鼓励重复使用毛巾'
},
  // ── PROPERTY-SPECIFIC RULES ────────────────────────────────────

  // MiaCasa Hanoi - Check-out (replaces rule-cio-2)
  'h-rule-cio-2': {
    en: 'Check-out by 12:00 PM (noon)',
    vn: 'Trả phòng trước 12:00 (trưa)',
    zh: '中午 12:00 前退房'
  },

  // MiaCasa Hanoi - Early/Late Check-in/out
  'h-rule-cio-4': {
    en: 'Early check-in (before 2:00 PM) or late check-out (after 12:00 PM) available on request — subject to availability and additional fee. Please contact us in advance.',
    vn: 'Nhận phòng sớm (trước 14:00) hoặc trả phòng muộn (sau 12:00) theo yêu cầu — tùy theo tình trạng phòng và phí bổ sung. Vui lòng liên hệ trước.',
    zh: '可提前入住（下午2:00前）或延迟退房（中午12:00后）— 视空房情况而定，需额外付费。请提前联系我们。'
  },

  // MiaCasa Old Quarter - Check-out (replaces rule-cio-3)
  'oq-rule-cio-2': {
    en: 'Check-out by 11:00 AM',
    vn: 'Trả phòng trước 11:00',
    zh: '上午 11:00 前退房'
  },

  // MiaCasa Old Quarter - Early/Late Check-in/out
  'oq-rule-cio-4': {
    en: 'Early check-in (before 2:00 PM) or late check-out (after 11:00 AM) available on request — subject to availability and additional fee. Please contact us in advance.',
    vn: 'Nhận phòng sớm (trước 14:00) hoặc trả phòng muộn (sau 11:00) theo yêu cầu — tùy theo tình trạng phòng và phí bổ sung. Vui lòng liên hệ trước.',
    zh: '可提前入住（下午2:00前）或延迟退房（上午11:00后）— 视空房情况而定，需额外付费。请提前联系我们。'
  },

  // MiaCasa Old Quarter - Luggage Storage Note (replaces rule-cio-5)
  'oq-rule-cio-5': {
    en: '⚠️ No luggage storage at Old Quarter property. You can store luggage at MiaCasa Hanoi (about 2km away) — please contact us in advance.',
    vn: '⚠️ Không có dịch vụ gửi hành lý tại Phố Cổ. Bạn có thể gửi hành lý tại MiaCasa Hà Nội (cách khoảng 2km) — vui lòng liên hệ trước.',
    zh: '⚠️ 老城区住宿不提供行李寄存。您可以将行李寄存在 MiaCasa Hanoi（约2公里外）— 请提前联系我们。'
  },


  /* ── CONTACT FORM ─────────────────────────────────────────────── */
'invoice-text':    {en:'Need an invoice for your stay?', vn:'Cần hóa đơn cho kỳ lưu trú của bạn?', zh:'需要您的住宿发票吗？'},
'invoice-link':    {en:'Click here →', vn:'Bấm vào đây →', zh:'点击这里 →'},
'cancel-text':     {en:'✈️ Need to cancel your booking?', vn:'✈️ Cần hủy đặt phòng?', zh:'✈️ 需要取消预订吗？'},
'cancel-link':     {en:'Request cancellation →', vn:'Yêu cầu hủy →', zh:'申请取消 →'},
'sec-contact':     {en:'Get in Touch', vn:'Liên hệ', zh:'联系我们'},
'contact-title':   {en:"We'd love to <em>hear from you</em>", vn:'Chúng tôi rất mong <em>được nghe từ bạn</em>', zh:'我们很乐意<em>听到您的声音</em>'},
'contact-sub':     {en:'Questions, special requests, or just want to say hello — reach out anytime.', vn:'Câu hỏi, yêu cầu đặc biệt, hoặc chỉ muốn chào hỏi — hãy liên hệ bất cứ lúc nào.', zh:'疑问、特殊要求，或只是想打个招呼 — 随时联系我们。'},
'contact-findus':  {en:'Find us in Hanoi', vn:'Tìm chúng tôi tại Hà Nội', zh:'在河内找到我们'},
'contact-whatsapp-lbl': {en:'WhatsApp / Phone', vn:'WhatsApp / Điện thoại', zh:'WhatsApp / 电话'},
'contact-email-lbl': {en:'Email', vn:'Email', zh:'电子邮箱'},

/* ── our-story.html ───────────────────────────────────────────── */
'story-hero-em':    {en:'Story', vn:'Câu chuyện', zh:'故事'},
'story-h-began':    {en:'How It Began', vn:'Mọi chuyện bắt đầu như thế nào', zh:'故事的开端'},
'story-h-building': {en:'Building MiaCasa', vn:'Xây dựng MiaCasa', zh:'打造 MiaCasa'},
'story-h-hosts':    {en:'Meet the Hosts', vn:'Gặp gỡ chủ nhà', zh:'认识房东'},
'story-h-milestone':{en:'A Milestone of Guest Trust', vn:'Một cột mốc của niềm tin từ khách', zh:'客人信任的里程碑'},
'story-h-different':{en:'What Makes MiaCasa Different', vn:'Điều gì làm MiaCasa khác biệt', zh:'MiaCasa 的不同之处'},
'story-h-spaces':   {en:'Our Spaces', vn:'Không gian của chúng tôi', zh:'我们的空间'},
'story-h-hanoi':    {en:'Building MiaCasa Hanoi', vn:'Xây dựng MiaCasa Hà Nội', zh:'打造 MiaCasa Hanoi'},
'story-h-oq':       {en:'Creating MiaCasa Old Quarter', vn:'Tạo nên MiaCasa Phố Cổ', zh:'打造 MiaCasa Old Quarter'},
'story-h-same':     {en:'What Stays the Same', vn:'Những điều vẫn không thay đổi', zh:'始终不变的部分'},
'story-h-improving':{en:'Always Improving', vn:'Không ngừng cải thiện', zh:'不断提升'},

/* ── FOOTER (shared across pages) ─────────────────────────────── */
'footer-brand-desc': {
  en:'Two distinct homestays in Hanoi — crafted with love for travellers who want a real home, not just a bed.',
  vn:'Hai homestay khác biệt tại Hà Nội — được tạo nên bằng sự tận tâm cho những du khách muốn một mái nhà thực sự, không chỉ là một chỗ ngủ.',
  zh:'河内两处独特的民宿 — 为寻求真正家的旅行者用心打造，而不仅仅是一张床。'
},
'footer-stays':     {en:'Our Stays', vn:'Chỗ nghỉ', zh:'我们的住宿'},
'footer-info':      {en:'Information', vn:'Thông tin', zh:'信息'},
'footer-contact':   {en:'Contact', vn:'Liên hệ', zh:'联系方式'},
'story-seo-cta-note': {
  en:'Free cancellation · Instant confirmation · No platform fees',
  vn:'Miễn phí hủy phòng · Xác nhận tức thì · Không phí nền tảng',
  zh:'免费取消 · 即时确认 · 无平台费用'
},
'contact-response-lbl': {en:'Response time', vn:'Thời gian phản hồi', zh:'回复时间'},
'contact-response-val': {
  en:'Within 2 hours · 7am – 10pm ICT',
  vn:'Trong vòng 2 giờ · 7h – 22h giờ Việt Nam',
  zh:'2小时内回复 · 上午7点 – 晚上10点 (ICT)'
},
'hosts-tag': {en:'Your Hosts', vn:'Chủ nhà của bạn', zh:'您的房东'},
'hosts-title': {
  en:'Hosted by <em>Linh &amp; Ngọc</em>',
  vn:'Được đón tiếp bởi <em>Linh &amp; Ngọc</em>',
  zh:'由<em>Linh &amp; Ngọc</em>接待'
},
'hosts-desc': {
  en:'Two friends who built every room themselves. Real people who answer your messages and care how your stay goes.',
  vn:'Hai người bạn đã tự tay xây dựng từng căn phòng. Những con người thật sự luôn trả lời tin nhắn và quan tâm đến trải nghiệm lưu trú của bạn.',
  zh:'两位朋友亲手打造了每一个房间。真实的人，回复您的消息并关心您的住宿体验。'
},
'hosts-story': {en:'Read our story →', vn:'Đọc câu chuyện của chúng tôi →', zh:'阅读我们的故事 →'},
'urgency-signal': {
  en:'🔥 Popular pick — booked most weekends this season',
  vn:'🔥 Được yêu thích — thường kín phòng vào cuối tuần mùa này',
  zh:'🔥 热门选择 — 本季多数周末已被预订'
},

// FAQ Section Translations
'faq-tag': {
  en: 'Common Questions',
  vn: 'Câu Hỏi Thường Gặp',
  zh: '常见问题'
},
'faq-title': {
  en: 'Frequently Asked <em>Questions</em>',
  vn: 'Những Câu Hỏi <em>Thường Gặp</em>',
  zh: '常见<em>问题</em>'
},
'faq-sub': {
  en: 'Quick answers to help you plan your stay in Hanoi.',
  vn: 'Câu trả lời nhanh giúp bạn lên kế hoạch cho chuyến đi tại Hà Nội.',
  zh: '快速解答，帮助您规划河内之旅。'
},

// FAQ Questions and Answers
'faq-q-couples': {
  en: 'Which property is better for couples?',
  vn: 'Chỗ nghỉ nào phù hợp hơn cho các cặp đôi?',
  zh: '哪个房源更适合情侣？'
},
'faq-a-couples': {
  en: 'Both properties are great for couples! MiaCasa Hanoi offers a cozy studio in a quiet neighborhood near Train Street. MiaCasa Old Quarter is a full private apartment right in the center of the action near Hoàn Kiếm Lake. It depends on whether you prefer peaceful local life or vibrant city energy.',
  vn: 'Cả hai chỗ nghỉ đều tuyệt vời cho các cặp đôi! MiaCasa Hà Nội cung cấp phòng studio ấm cúng trong khu phố yên tĩnh gần Phố Tàu. MiaCasa Phố Cổ là căn hộ riêng hoàn toàn ngay trung tâm sầm uất gần Hồ Hoàn Kiếm. Tùy thuộc vào việc bạn thích cuộc sống địa phương yên bình hay năng lượng sôi động của thành phố.',
  zh: '两个房源都非常适合情侣！MiaCasa Hanoi 在火车街附近安静的社区提供舒适的独立单间。MiaCasa Old Quarter 是位于还剑湖附近繁华中心的整套私人公寓。取决于您是喜欢宁静的本地生活还是充满活力的城市节奏。'
},
'faq-q-hotel': {
  en: 'Is MiaCasa a hotel or homestay?',
  vn: 'MiaCasa là khách sạn hay homestay?',
  zh: 'MiaCasa 是酒店还是民宿？'
},
'faq-a-hotel': {
  en: 'MiaCasa is a boutique homestay, not a hotel. You get a private, independent stay with local hosts who care about your experience. We\'re always available online or nearby if you need anything during your stay.',
  vn: 'MiaCasa là homestay cao cấp, không phải khách sạn. Bạn có một chỗ nghỉ riêng tư, độc lập với chủ nhà địa phương quan tâm đến trải nghiệm của bạn. Chúng tôi luôn sẵn sàng trực tuyến hoặc gần đó nếu bạn cần bất cứ điều gì trong thời gian lưu trú.',
  zh: 'MiaCasa 是一家精品民宿，不是酒店。您将享受私密、独立的住宿体验，当地房东关心您的入住体验。在您住宿期间，我们随时在线或在附近为您提供帮助。'
},
'faq-q-direct': {
  en: 'Is direct booking cheaper than Airbnb?',
  vn: 'Đặt phòng trực tiếp có rẻ hơn Airbnb không?',
  zh: '直接预订比 Airbnb 更便宜吗？'
},
'faq-a-direct': {
  en: 'Yes! Direct booking through our website saves you 10-15% because there are no platform commissions. You get the same trusted experience at a better price with instant confirmation.',
  vn: 'Có! Đặt phòng trực tiếp qua website của chúng tôi giúp bạn tiết kiệm 10-15% vì không có phí nền tảng. Bạn nhận được trải nghiệm đáng tin cậy với giá tốt hơn và xác nhận ngay lập tức.',
  zh: '是的！通过我们网站直接预订可节省 10-15%，因为没有任何平台佣金。您将以更优惠的价格获得同样值得信赖的体验，并立即确认预订。'
},
'faq-q-elevator': {
  en: 'Do both properties have elevators?',
  vn: 'Cả hai chỗ nghỉ đều có thang máy không?',
  zh: '两个房源都有电梯吗？'
},
'faq-a-elevator': {
  en: 'Both properties are in traditional Hanoi homes and do NOT have elevators. MiaCasa Hanoi is on the 2nd floor (some stairs). MiaCasa Old Quarter is on the 3rd floor with steep, narrow stairs. Our hosts are happy to help carry luggage up and down!',
  vn: 'Cả hai chỗ nghỉ đều nằm trong những ngôi nhà truyền thống của Hà Nội và KHÔNG có thang máy. MiaCasa Hà Nội ở tầng 2 (có cầu thang). MiaCasa Phố Cổ ở tầng 3 với cầu thang hẹp và dốc. Chủ nhà của chúng tôi sẵn lòng giúp mang hành lý lên xuống!',
  zh: '两个房源都在传统河内房屋中，没有电梯。MiaCasa Hanoi 在二楼（有一些楼梯）。MiaCasa Old Quarter 在三楼，楼梯陡峭狭窄。我们的房东很乐意帮您搬运行李上下楼！'
},
'faq-q-airport': {
  en: 'Do you offer airport pickup?',
  vn: 'Bạn có cung cấp dịch vụ đón sân bay không?',
  zh: '你们提供机场接机服务吗？'
},
'faq-a-airport': {
  en: 'Yes! We can arrange airport pickup from Noi Bai International Airport. Just contact us after booking and we\'ll help arrange transportation for you.',
  vn: 'Có! Chúng tôi có thể sắp xếp đón sân bay từ Sân bay Quốc tế Nội Bài. Chỉ cần liên hệ với chúng tôi sau khi đặt phòng và chúng tôi sẽ giúp sắp xếp phương tiện di chuyển cho bạn.',
  zh: '是的！我们可以安排内排国际机场的接机服务。只需在预订后联系我们，我们将帮助您安排交通。'
},
'faq-q-cancellation': {
  en: "What's the cancellation policy?",
  vn: 'Chính sách hủy phòng là gì?',
  zh: '取消政策是什么？'
},
'faq-a-cancellation': {
  en: 'Free cancellation up to 48 hours before check-in. After that, the first night\'s rate applies. Contact us directly for any special circumstances.',
  vn: 'Miễn phí hủy phòng đến 48 giờ trước khi nhận phòng. Sau đó, áp dụng giá của đêm đầu tiên. Liên hệ trực tiếp với chúng tôi cho bất kỳ trường hợp đặc biệt nào.',
  zh: '入住前 48 小时可免费取消。之后将收取首晚房费。如有特殊情况，请直接联系我们。'
},
  
/* ── CONTACT FORM LABELS ──────────────────────────────────────── */
'lbl-cname':       {en:'Name', vn:'Họ và tên', zh:'姓名'},
'lbl-cemail':      {en:'Email', vn:'Email', zh:'电子邮箱'},
'lbl-cprop':       {en:'Property', vn:'Chỗ nghỉ', zh:'住宿'},
'lbl-csubject':    {en:'Subject', vn:'Chủ đề', zh:'主题'},
'lbl-cmsg':        {en:'Message', vn:'Tin nhắn', zh:'留言'},
'ph-cname':        {en:'Your name', vn:'Tên của bạn', zh:'您的姓名'},
'ph-cemail':       {en:'your@email.com', vn:'email@cuaban.com', zh:'您的电子邮箱'},
'ph-cmsg':         {en:'Tell us how we can help...', vn:'Hãy cho chúng tôi biết chúng tôi có thể giúp gì...', zh:'告诉我们如何帮助您...'},
'btn-whatsapp':    {en:'Send via WhatsApp →', vn:'Gửi qua WhatsApp →', zh:'通过 WhatsApp 发送 →'},
'subject-booking': {en:'Booking Enquiry', vn:'Hỏi về đặt phòng', zh:'预订咨询'},
'subject-special': {en:'Special Request', vn:'Yêu cầu đặc biệt', zh:'特殊要求'},
'subject-calendar': {
  en:'Calendar Sync / Channel Manager',
  vn:'Đồng bộ lịch / Quản lý kênh',
  zh:'日历同步 / 渠道管理'
},
'subject-other':   {en:'Other', vn:'Khác', zh:'其他'},
'contact-confirm': {
  en:'✓ Message sent! We\'ll be in touch soon.',
  vn:'✓ Đã gửi tin nhắn! Chúng tôi sẽ liên hệ sớm.',
  zh:'✓ 消息已发送！我们会尽快与您联系。'
},
'prop-hanoi':      {en:'MiaCasa Hanoi', vn:'MiaCasa Hà Nội', zh:'MiaCasa 河内'},
'prop-oldquarter': {en:'MiaCasa Old Quarter', vn:'MiaCasa Phố Cổ', zh:'MiaCasa 老城区'},

'captcha-label': {
  en:'Security Check: What is {num1} + {num2}?',
  vn:'Kiểm tra bảo mật: {num1} + {num2} bằng bao nhiêu?',
  zh:'安全验证：{num1} + {num2} 等于多少？'
},
'captcha-placeholder': {
  en:'Enter answer',
  vn:'Nhập câu trả lời',
  zh:'请输入答案'
},
'captcha-refresh': {
  en:'⟳ Refresh',
  vn:'⟳ Làm mới',
  zh:'⟳ 刷新'
},

'whatsapp-link':   {en:'💬 WhatsApp', vn:'💬 WhatsApp', zh:'💬 WhatsApp'},
'call-link':       {en:'📞 Call +84 869 922 261', vn:'📞 Gọi +84 869 922 261', zh:'📞 致电 +84 869 922 261'},

/* ── FOOTER TRANSLATIONS ──────────────────────────────────────── */
'footer-stays-title': {en:'Our Stays', vn:'Chỗ nghỉ', zh:'我们的住宿'},
'footer-info-title': {en:'Information', vn:'Thông tin', zh:'信息'},
'footer-also-title': {en:'Also on', vn:'Cũng có trên', zh:'也见于'},
'footer-hanoi':    {en:'MiaCasa Hanoi', vn:'MiaCasa Hà Nội', zh:'MiaCasa 河内'},
'footer-oq':       {en:'MiaCasa Old Quarter', vn:'MiaCasa Phố Cổ', zh:'MiaCasa 老城区'},
'footer-book':     {en:'Book Direct', vn:'Đặt trực tiếp', zh:'直接预订'},
'footer-avail':    {en:'Availability', vn:'Lịch trống', zh:'空房情况'},
'footer-amenities': {en:'Amenities', vn:'Tiện nghi', zh:'设施'},
'footer-rules':    {en:'House Rules', vn:'Nội quy', zh:'入住须知'},
'footer-gallery':  {en:'Gallery', vn:'Thư viện ảnh', zh:'图库'},
'footer-reviews':  {en:'Reviews', vn:'Đánh giá', zh:'评价'},
'footer-tagline': {
  en:'Two distinct homestays in Hanoi — crafted with love for travellers who want a real home, not just a bed.',
  vn:'Hai homestay độc đáo tại Hà Nội — được tạo nên bằng sự tận tâm cho những du khách muốn một mái nhà thực sự, không chỉ là một chỗ ngủ.',
  zh:'河内两处独特的民宿 — 为寻求真正家的旅行者用心打造，而不仅仅是一张床。'
},
'footer-copy': {
  en:'© 2025 MiaCasa Homestays. All rights reserved.',
  vn:'© 2025 MiaCasa Homestays. Bảo lưu mọi quyền.',
  zh:'© 2025 MiaCasa Homestays。版权所有。'
},
'footer-made': {
  en:'Made with ♡ in Hanoi',
  vn:'Được tạo nên với ♡ tại Hà Nội',
  zh:'用♡在河内打造'
},
'footer-airbnb-h': {
  en:'Airbnb – MiaCasa Hanoi',
  vn:'Airbnb – MiaCasa Hà Nội',
  zh:'Airbnb – MiaCasa 河内'
},
'footer-airbnb-oq': {
  en:'Airbnb – MiaCasaOldQuarter',
  vn:'Airbnb – MiaCasa Phố Cổ',
  zh:'Airbnb – MiaCasa 老城区'
},
'footer-booking-h': {
  en:'Booking.com – MiaCasa Hanoi',
  vn:'Booking.com – MiaCasa Hà Nội',
  zh:'Booking.com – MiaCasa 河内'
},
'footer-booking-oq': {
  en:'Booking.com – MiaCasaOldQuarter',
  vn:'Booking.com – MiaCasa Phố Cổ',
  zh:'Booking.com – MiaCasa 老城区'
},
'footer-agoda-h': {
  en:'Agoda – MiaCasa Hanoi',
  vn:'Agoda – MiaCasa Hà Nội',
  zh:'Agoda – MiaCasa 河内'
},
'footer-hanoi-title': {
  en:'MiaCasa Hanoi',
  vn:'MiaCasa Hà Nội',
  zh:'MiaCasa 河内'
},
'footer-hanoi-address': {
  en:'92 Ngh. 51 Ng. Linh Quang, Văn Chương, Hanoi, Vietnam',
  vn:'92 Ngõ 51 Linh Quang, Văn Chương, Hà Nội, Việt Nam',
  zh:'越南河内市栋多郡文社坊灵光巷51号92号'
},
'footer-oq-title': {
  en:'MiaCasa Old Quarter',
  vn:'MiaCasa Phố Cổ',
  zh:'MiaCasa 老城区'
},
'footer-oq-address': {
  en:'38 P. Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hanoi, Vietnam',
  vn:'38 Phố Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội, Việt Nam',
  zh:'越南河内市还剑郡行帆坊梁玉眷街38号'
},
'footer-contact-title': {en:'Contact Us', vn:'Liên hệ', zh:'联系我们'},
'footer-whatsapp': {
  en:'WhatsApp +84 869 922 261',
  vn:'WhatsApp +84 869 922 261',
  zh:'WhatsApp +84 869 922 261'
},
'footer-call': {
  en:'Call +84 869 922 261',
  vn:'Gọi +84 869 922 261',
  zh:'电话 +84 869 922 261'
},
'footer-response': {
  en:'⏱️ Responses within 2 hours (7am - 10pm ICT)',
  vn:'⏱️ Phản hồi trong vòng 2 giờ (7h - 22h giờ Việt Nam)',
  zh:'⏱️ 2小时内回复（ICT时间 上午7点 - 晚上10点）'
},

  /* ── MIACASA HANOI PAGE ───────────────────────────────────────── */

'h-tag': {
  en:'MiaCasa Hanoi · Văn Miếu, Hanoi',
  vn:'MiaCasa Hà Nội · Văn Miếu, Hà Nội',
  zh:'MiaCasa Hanoi · 文庙, 河内'
},

'h-h1': {
  en:'A Calm Stay Near<br><em>Hanoi Railway Station</em>',
  vn:'Chỗ Nghỉ Yên Tĩnh Gần<br><em>Ga Hà Nội</em>',
  zh:'靠近<br><em>河内火车站</em>的宁静住宿'
},

'h-sub': {
  en:'Located near Văn Miếu and the Train Street area — a peaceful base to explore Hanoi.',
  vn:'Nằm gần Văn Miếu và khu vực Phố Tàu Hỏa — điểm xuất phát yên tĩnh để khám phá Hà Nội.',
  zh:'位于文庙和火车街附近 — 探索河内的宁静基地。'
},

'h-cta1': {
  en:'Check Availability',
  vn:'Kiểm tra lịch trống',
  zh:'查看空房'
},

'h-cta2': {
  en:'Book via WhatsApp',
  vn:'Đặt qua WhatsApp',
  zh:'通过 WhatsApp 预订'
},

'h-about-tag': {
  en:'About the Stay',
  vn:'Về chỗ nghỉ',
  zh:'关于住宿'
},

'h-about-title': {
  en:'A quiet, local<br><em>stay in Hanoi</em>',
  vn:'Chỗ nghỉ yên tĩnh,<br><em>đậm chất địa phương</em>',
  zh:'宁静的本地<br><em>河内住宿</em>'
},

'h-about-p1': {
  en:"MiaCasa Hanoi is designed for travelers who want a quieter, more local experience while staying close to Hanoi's main attractions.",
  vn:'MiaCasa Hanoi được thiết kế cho những du khách muốn trải nghiệm yên tĩnh, đậm chất địa phương hơn trong khi vẫn gần các điểm tham quan chính của Hà Nội.',
  zh:'MiaCasa Hanoi 专为希望在靠近河内主要景点的同时，享受更安静、更本地化体验的旅客而设计。'
},
'h-about-p2': {
  en:'Located near Hanoi Railway Station and Văn Miếu – Quốc Tử Giám, the property offers easy access to the Old Quarter without the constant noise and crowds.',
  vn:'Nằm gần Ga Hà Nội và Văn Miếu – Quốc Tử Giám, chỗ nghỉ giúp dễ dàng tiếp cận Phố Cổ mà không có tiếng ồn và đông đúc liên tục.',
  zh:'酒店靠近河内火车站和文庙-国子监，方便前往老城区，同时远离持续的噪音和人群。'
},
'h-about-p3': {
  en:'Each room is thoughtfully designed with natural light, wooden accents, and a warm, minimalist aesthetic.',
  vn:'Mỗi phòng được thiết kế tinh tế với ánh sáng tự nhiên, điểm nhấn gỗ và phong cách tối giản ấm áp.',
  zh:'每间客房都经过精心设计，采用自然光线、木质装饰和温暖的极简美学。'
},

'h-who-title': {
  en: 'Who <em>stays here</em>',
  vn: 'Ai <em>phù hợp</em>',
  zh: '谁<em>适合入住</em>'
},
'h-who-1': {
  en:'Couples looking for a calm stay',
  vn:'Các cặp đôi tìm kiếm chỗ nghỉ yên tĩnh',
  zh:'寻求宁静住宿的情侣'
},
'h-who-2': {
  en:'Solo travelers and digital nomads',
  vn:'Khách du lịch một mình và người làm việc từ xa',
  zh:'独自旅行者和数字游民'
},
'h-who-3': {
  en:'Guests who prefer local neighborhoods over tourist-heavy areas',
  vn:'Khách thích khu dân cư địa phương hơn những khu vực đông khách du lịch',
  zh:'偏爱本地社区而非旅游区的客人'
},
'h-room1': {
  en:'🌸 Spring Room — light, airy, and calming',
  vn:'🌸 Phòng Xuân — sáng, thoáng và thư thái',
  zh:'🌸 春房 — 明亮、通风、宁静'
},
'h-room2': {
  en:'☀️ Summer Room — warm tones with a cozy feel',
  vn:'☀️ Phòng Hạ — tông màu ấm với cảm giác ấm cúng',
  zh:'☀️ 夏房 — 暖色调，温馨舒适'
},
'h-room3': {
  en:'🍂 Autumn Room — soft, relaxed, and restful',
  vn:'🍂 Phòng Thu — nhẹ nhàng, thư giãn và nghỉ ngơi',
  zh:'🍂 秋房 — 柔和、放松、宁静'
},

/* Room specification translations */

'h-room-s1': {
  en:'🛏 1 king bed · up to 3 guests',
  vn:'🛏 1 giường King · tối đa 3 khách',
  zh:'🛏 1张特大床 · 最多3位客人'
},

'h-room-s2': {
  en:'🚿 En-suite bathroom',
  vn:'🚿 Phòng tắm riêng',
  zh:'🚿 独立卫浴'
},

'h-room-s3': {
  en:'🍳 Private kitchenette · induction stove',
  vn:'🍳 Bếp nhỏ riêng · bếp từ',
  zh:'🍳 私人小厨房 · 电磁炉'
},

'h-room-s3-alt': {
  en:'🍳 Private kitchenette · induction stove',
  vn:'🍳 Bếp nhỏ riêng · bếp từ',
  zh:'🍳 私人小厨房 · 电磁炉'
},

'h-room-s4': {
  en:'📺 Netflix projector · AC · Fan',
  vn:'📺 Máy chiếu Netflix · Điều hòa · Quạt',
  zh:'📺 Netflix投影仪 · 空调 · 风扇'
},

'h-room-price': {
  en:'From',
  vn:'từ',
  zh:'起'
},

'h-rooms-tag': {
  en: 'Rooms',
  vn: 'Phòng nghỉ',
  zh: '房间'
},

'h-rooms-title': {
  en: 'Three private<br><em>rooms</em>',
  vn: 'Ba phòng<br><em>riêng tư</em>',
  zh: '三间独立<br><em>客房</em>'
},

'h-rooms-sub': {
  en: 'Each room has an en-suite bathroom and kitchenette, designed with simplicity and natural materials.',
  vn: 'Mỗi phòng có phòng tắm riêng và bếp nhỏ, được thiết kế đơn giản với vật liệu tự nhiên.',
  zh: '每间客房均配有独立卫浴和小厨房，采用简约设计和天然材料。'
},

'h-amen-tag': {
  en:"What's Included",
  vn:'Tiện nghi',
  zh:'设施包含'
},

'h-amen-title': {
  en:'Every comfort,<br><em>thoughtfully provided</em>',
  vn:'Mọi tiện nghi,<br><em>được chuẩn bị chu đáo</em>',
  zh:'每一处舒适，<br><em>用心提供</em>'
},


'h-am1': {
  en:'High-speed WiFi',
  vn:'WiFi tốc độ cao',
  zh:'高速WiFi'
},

'h-am1s': {
  en:'100 Mbps — great for remote work',
  vn:'100 Mbps — phù hợp làm việc từ xa',
  zh:'100 Mbps — 适合远程办公'
},

'h-am2': {
  en:'Air conditioning & fan',
  vn:'Điều hòa & quạt',
  zh:'空调与风扇'
},

'h-am2s': {
  en:'Climate control in every room',
  vn:'Kiểm soát nhiệt độ trong mọi phòng',
  zh:'每间客房均可调节温度'
},

'h-am3': {
  en:'Ensuite private bathroom',
  vn:'Phòng tắm riêng',
  zh:'独立卫浴'
},

'h-am3s': {
  en:'Premium toiletries & fluffy towels',
  vn:'Đồ dùng vệ sinh cao cấp & khăn tắm mềm mại',
  zh:'高级洗浴用品及柔软毛巾'
},

'h-am4': {
  en:'In-room kitchenette',
  vn:'Bếp nhỏ trong phòng',
  zh:'客房内小厨房'
},

'h-am4s': {
  en:'Mini fridge, kettle & cooking basics',
  vn:'Tủ lạnh mini, ấm đun nước & dụng cụ nấu ăn cơ bản',
  zh:'迷你冰箱、水壶及基本炊具'
},

'h-am5': {
  en:'Self check-in 24h',
  vn:'Tự nhận phòng 24h',
  zh:'24小时自助入住'
},

'h-am5s': {
  en:'Code lockbox — arrive any time',
  vn:'Hộp khóa mã — đến bất cứ lúc nào',
  zh:'密码锁盒 — 随时抵达'
},

'h-am6': {
  en:'Café downstairs',
  vn:'Quán cà phê tầng dưới',
  zh:'楼下咖啡馆'
},

'h-am6s': {
  en:'Your daily coffee ritual sorted',
  vn:'Thói quen cà phê hằng ngày đã sẵn sàng',
  zh:'每日咖啡仪式已备好'
},

'h-am7': {
  en:'Local guide & curated map',
  vn:'Hướng dẫn địa phương & bản đồ gợi ý',
  zh:'本地指南与精选地图'
},

'h-am7s': {
  en:'Hidden gems, cafés & tips from the host',
  vn:'Địa điểm bí mật, quán cà phê & mẹo từ chủ nhà',
  zh:'隐藏宝藏、咖啡馆及房东小贴士'
},

'h-am8': {
  en:'Free laundry',
  vn:'Giặt ủi miễn phí',
  zh:'免费洗衣'
},

'h-am8s': {
  en:'Washing machine & dryer with detergent',
  vn:'Máy giặt và máy sấy kèm bột giặt',
  zh:'洗衣机、烘干机及洗衣液'
},
// MiaCasa Hanoi - WiFi Projector Amenity
  'h-am9': {
    en: 'WiFi Projector',
    vn: 'Máy chiếu WiFi',
    zh: 'WiFi投影仪'
  },
  'h-am9s': {
    en: 'Pre-logged in Netflix & YouTube',
    vn: 'Đã đăng nhập sẵn Netflix & YouTube',
    zh: '预登录Netflix和YouTube'
  },
// MiaCasa Hanoi - Room spec (updated)
  'h-room-s4': {
    en: '📺 WiFi projector · Pre-logged in Netflix & YouTube · AC · Fan',
    vn: '📺 Máy chiếu WiFi · Đã đăng nhập sẵn Netflix & YouTube · Điều hòa · Quạt',
    zh: '📺 WiFi投影仪 · 预登录Netflix和YouTube · 空调 · 风扇'
  },
/* FINAL location section (duplicates resolved) */

'h-loc-tag': {
  en:'Location',
  vn:'Vị trí',
  zh:'位置'
},

'h-loc-title': {
  en:'Near Train Street<br><em>& Old Quarter</em>',
  vn:'Gần Phố Tàu<br><em>& Phố Cổ</em>',
  zh:'靠近火车街<br><em>与老城区</em>'
},

'h-loc-addr': {
  en:'📍 92 Ngh. 51 Ng. Linh Quang, Văn Chương, Hanoi',
  vn:'📍 92 Ngõ 51 Ng. Linh Quang, Văn Chương, Hà Nội',
  zh:'📍 河内市栋多郡文社坊灵光巷51号92号'
},

'h-loc-li1': {
  en:'~15 min walk to Hanoi Train Street (Railway Street)',
  vn:'~15 phút đi bộ đến Phố Tàu Hà Nội',
  zh:'~步行15分钟到河内火车街'
},

'h-loc-li2': {
  en:'~12 min walk to Văn Miếu – Quốc Tử Giám (Temple of Literature)',
  vn:'~12 phút đi bộ đến Văn Miếu – Quốc Tử Giám',
  zh:'~步行12分钟到文庙 – 国子监'
},

'h-loc-li3': {
  en:'~10 min by Grab to the Old Quarter and Hoàn Kiếm Lake',
  vn:'~10 phút đi Grab đến Phố Cổ và Hồ Hoàn Kiếm',
  zh:'~打车10分钟到老城区和还剑湖'
},

'h-loc-li4': {
  en:'~14 min walk to Hanoi Railway Station (trains to Sapa, Hội An)',
  vn:'~14 phút đi bộ đến Ga Hà Nội (tàu đi Sapa, Hội An)',
  zh:'~步行14分钟到河内火车站（前往沙巴、会安的火车）'
},

'h-loc-seo': {
  en:'Staying near Hanoi Railway Station means you are 5–10 minutes from the Old Quarter, close to Văn Miếu (Temple of Literature), and well connected for trains and day trips. The neighbourhood of Văn Chương is quiet and residential — a welcome contrast to the buzzing streets of the Old Quarter. If you prefer to be right in the centre of Hàng Buồm and Hoàn Kiếm, our <a href="/miacasa-oldquarter" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Old Quarter apartment</a> may suit you better.',
  vn:'Ở gần Ga Hà Nội nghĩa là bạn chỉ cách Phố Cổ 5–10 phút, gần Văn Miếu – Quốc Tử Giám và thuận tiện cho việc đi tàu cũng như các chuyến đi trong ngày. Khu phố Văn Chương yên tĩnh và mang đậm tính dân cư — một sự tương phản dễ chịu với những con phố nhộn nhịp của Phố Cổ. Nếu bạn muốn ở ngay trung tâm Hàng Buồm và Hồ Hoàn Kiếm, căn hộ <a href="/miacasa-oldquarter" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Phố Cổ</a> có thể phù hợp hơn với bạn.',
  zh:'住在河内火车站附近，距离老城区仅5-10分钟，靠近文庙，且方便乘坐火车和一日游。文罗坊的社区安静宜居 — 与老城区繁华街道形成鲜明对比。如果您更喜欢住在行帆坊和还剑区的中心，我们的<a href="/miacasa-oldquarter" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Old Quarter公寓</a>可能更适合您。'
},

'h-book-tag': {
  en:'Reservations',
  vn:'Đặt phòng',
  zh:'预订'
},

'h-book-title': {
  en:'Book your <em>stay</em>',
  vn:'Đặt <em>phòng ngay</em>',
  zh:'预订您的<em>住宿</em>'
},

'h-book-sub': {
  en:'Book your stay in Hanoi direct — select your dates below or message us on WhatsApp for the best rate.',
  vn:'Đặt phòng trực tiếp tại Hà Nội — chọn ngày bên dưới hoặc nhắn tin qua WhatsApp để có giá tốt nhất.',
  zh:'直接预订您的河内住宿 — 下方选择日期或通过WhatsApp联系我们获取最优价格。'
},

'h-book-note': {
  en:'From PRICE_PLACEHOLDER₫/night · Direct booking homestay Hanoi — best rate, no platform fees',
  vn:'Từ PRICE_PLACEHOLDER₫/đêm · Đặt trực tiếp homestay Hà Nội — giá tốt nhất, không phí nền tảng',
  zh:'每晚PRICE_PLACEHOLDER₫起 · 河内民宿直接预订 — 最优价格，无平台费用'
},

'quiet-mornings': {
  en:'☕ Quiet mornings away from traffic',
  vn:'☕ Buổi sáng yên tĩnh, tránh xa tiếng xe cộ',
  zh:'☕ 远离车流的安静早晨'
},

'live-like-local': {
  en:'🏡 Live like a local in a real neighborhood',
  vn:'🏡 Sống như người địa phương trong một khu dân cư thực thụ',
  zh:'🏡 在真实社区里像当地人一样生活'
},

'slower-experience': {
  en:'🌿 Slower, more personal Hanoi experience',
  vn:'🌿 Trải nghiệm Hà Nội chậm rãi và mang tính cá nhân hơn',
  zh:'🌿 更慢节奏、更有温度的河内体验'
},

'floating-book': {
  en:'📅 Book Now',
  vn:'📅 Đặt ngay',
  zh:'📅 立即预订'
},

'oquarter-summary-1': {
  en:'In the heart of Old Quarter',
  vn:'Giữa lòng Phố Cổ',
  zh:'位于老城区中心'
},

'oquarter-summary-2': {
  en:'Walk to everything',
  vn:'Đi bộ đến mọi nơi',
  zh:'步行即可到达各处'
},

'oquarter-summary-3': {
  en:'Rooftop terrace & BBQ',
  vn:'Sân thượng & BBQ',
  zh:'屋顶露台与烧烤区'
},

'oquarter-summary-4': {
  en:'Best for groups & social travelers',
  vn:'Phù hợp cho nhóm & du khách thích giao lưu',
  zh:'适合团体与喜欢社交的旅客'
},

'hero-h1-new': {
  en:'Boutique stays in Hanoi,<br><em>designed for comfort & location</em>',
  vn:'Chỗ nghỉ boutique tại Hà Nội,<br><em>thiết kế cho sự thoải mái & vị trí thuận tiện</em>',
  zh:'河内精品住宿，<br><em>兼顾舒适与地理位置</em>'
},

'hero-sub-new': {
  en:'Choose between vibrant Old Quarter energy or a quiet local retreat.',
  vn:'Chọn giữa sự sôi động của Phố Cổ hoặc một nơi nghỉ dưỡng yên tĩnh đậm chất địa phương.',
  zh:'选择充满活力的老城区或宁静的本地隐居之所。'
},

'hero-check-dates': {
  en:'Check your dates →',
  vn:'Kiểm tra ngày của bạn →',
  zh:'查看您的日期 →'
},

'hero-compare': {
  en:'Compare properties',
  vn:'So sánh chỗ nghỉ',
  zh:'对比房源'
},

'h-cta-wa': {
  en:'📱 Book via WhatsApp',
  vn:'📱 Đặt qua WhatsApp',
  zh:'📱 通过WhatsApp预订'
},

'h-cta-av': {
  en:'Check Availability',
  vn:'Kiểm tra lịch trống',
  zh:'查看空房'
},

'h-cross-name': {
  en:'Also explore: MiaCasa Old Quarter',
  vn:'Khám phá thêm: MiaCasa Phố Cổ',
  zh:'也可探索：MiaCasa Old Quarter'
},

'h-cross-sub': {
  en:'Old Quarter · Hoan Kiem · Entire apartment for groups',
  vn:'Phố Cổ · Hoàn Kiếm · Toàn bộ căn hộ cho nhóm',
  zh:'老城区 · 还剑郡 · 团体整租公寓'
},

'hanoi-trust-1': {
  en:'🌿 Quiet local neighborhood near Train Street & Văn Miếu',
  vn:'🌿 Khu dân cư yên tĩnh gần Phố Tàu & Văn Miếu',
  zh:'🌿 靠近火车街和文庙的安静本地社区'
},

'hanoi-trust-2': {
  en:'🍳 Private rooms with kitchenette — ideal for longer stays',
  vn:'🍳 Phòng riêng có bếp nhỏ — lý tưởng cho lưu trú dài ngày',
  zh:'🍳 带小厨房的独立房间 — 适合长期住宿'
},

'hanoi-trust-3': {
  en:'⭐ Highly rated for cleanliness, comfort & host support',
  vn:'⭐ Được đánh giá cao về độ sạch sẽ, sự thoải mái & hỗ trợ từ chủ nhà',
  zh:'⭐ 清洁度、舒适度和房东服务备受好评'
},

/* ── MIACASA OLD QUARTER PAGE ─────────────────────────────────── */

'oq-tag': {
  en:'MiaCasa Old Quarter · Hoan Kiem, Hanoi',
  vn:'MiaCasa Phố Cổ · Hoàn Kiếm, Hà Nội',
  zh:'MiaCasa Old Quarter · 还剑郡, 河内'
},

'oq-h1': {
  en:'Stay in the Heart<br><em>of Hoàn Kiếm</em>',
  vn:'Ở Ngay Trung Tâm<br><em>Hoàn Kiếm</em>',
  zh:'住在<br><em>还剑区</em>中心'
},

'oq-sub': {
  en:"A full apartment in Hanoi's Old Quarter — perfect for groups and families.",
  vn:'Toàn bộ căn hộ giữa Phố Cổ Hà Nội — lý tưởng cho nhóm bạn và gia đình.',
  zh:'河内老城区的整套公寓 — 适合团体和家庭。'
},

'oq-cta1': {
  en:'Check Availability',
  vn:'Kiểm tra lịch trống',
  zh:'查看空房'
},

'oq-cta2': {
  en:'Book via WhatsApp',
  vn:'Đặt qua WhatsApp',
  zh:'通过WhatsApp预订'
},

'oq-about-tag': {
  en:'About the Stay',
  vn:'Về chỗ nghỉ',
  zh:'关于住宿'
},

'oq-about-title': {
  en:'In the vibrant<br><em>Old Quarter</em>',
  vn:'Giữa lòng<br><em>Phố Cổ sôi động</em>',
  zh:'位于充满活力的<br><em>老城区</em>'
},

'oq-about-p1': {
  en:"Located in the vibrant Old Quarter, MiaCasa Old Quarter places you right in the center of Hanoi's culture, food, and nightlife.",
  vn:'Nằm trong khu Phố Cổ sôi động, MiaCasa Phố Cổ đưa bạn đến ngay trung tâm văn hóa, ẩm thực và cuộc sống về đêm của Hà Nội.',
  zh:'MiaCasa Old Quarter位于充满活力的老城区，将您置于河内文化、美食和夜生活的中心。'
},

'oq-about-p2': {
  en:'The apartment features three queen beds, making it ideal for families or small groups who want to stay together in one comfortable space.',
  vn:'Căn hộ có ba giường Queen, lý tưởng cho gia đình hoặc nhóm nhỏ muốn ở cùng nhau trong một không gian thoải mái.',
  zh:'公寓配有三张大号床，非常适合希望在一个舒适空间内共住的家庭或小团体。'
},

'oq-about-p3': {
  en:'Step outside and you are instantly surrounded by local cafés, street food, and historic streets.',
  vn:'Chỉ cần bước ra ngoài là bạn đã được bao quanh bởi quán cà phê địa phương, đồ ăn đường phố và những con phố lịch sử.',
  zh:'踏出房门，您即刻被本地咖啡馆、街头美食和历史悠久的街道所环绕。'
},

'oq-who-tag': {
  en:'Perfect For',
  vn:'Phù hợp cho',
  zh:'适合人群'
},

'oq-who-title': {
  en:'Who <em>stays here</em>',
  vn:'Ai <em>phù hợp</em>',
  zh:'谁<em>适合入住</em>'
},

'oq-who-1': {
  en:'Families',
  vn:'Gia đình',
  zh:'家庭'
},

'oq-who-2': {
  en:'Groups of friends',
  vn:'Nhóm bạn bè',
  zh:'朋友团体'
},

'oq-who-3': {
  en:'Travelers who want to stay in the center of everything',
  vn:'Du khách muốn ở ngay trung tâm mọi thứ',
  zh:'想住在一切中心的旅行者'
},

'oq-apt-tag': {
  en:'The Apartment',
  vn:'Căn hộ',
  zh:'公寓'
},

'oq-apt-title': {
  en:'Entire apartment,<br><em>yours alone</em>',
  vn:'Toàn bộ căn hộ,<br><em>chỉ dành riêng cho bạn</em>',
  zh:'整套公寓，<br><em>仅供您独享</em>'
},

'oq-apt-sub': {
  en:'Complete privacy for your group — across two levels with an open terrace above the Old Quarter.',
  vn:'Không gian riêng tư hoàn toàn cho nhóm của bạn — gồm hai tầng và sân thượng mở nhìn ra Phố Cổ.',
  zh:'为您的团体提供完全私密的空间 — 跨越两层，带开放式露台，俯瞰老城区。'
},

'oq-feat1': {
  en:'3 queen beds',
  vn:'3 giường Queen',
  zh:'3张大号床'
},

'oq-feat1s': {
  en:'2 on main level + 1 attic bed — sleeps up to 6',
  vn:'2 giường tầng chính + 1 giường gác mái — tối đa 6 khách',
  zh:'主层2张 + 阁楼1张 — 最多可住6人'
},

'oq-feat2': {
  en:'Open Terrace',
  vn:'Sân thượng mở',
  zh:'开放式露台'
},

'oq-feat2s': {
  en:'Your quiet corner above the Old Quarter',
  vn:'Góc thư giãn riêng của bạn trên Phố Cổ',
  zh:'您在老城区上方的宁静角落'
},

'oq-feat3': {
  en:'Smart Lock',
  vn:'Khóa thông minh',
  zh:'智能门锁'
},

'oq-feat3s': {
  en:'Keypad entry — arrive any time, no key needed',
  vn:'Nhập mã để vào — đến bất cứ lúc nào, không cần chìa khóa',
  zh:'密码输入 — 随时抵达，无需钥匙'
},

'oq-amen-tag': {
  en:"What's Included",
  vn:'Tiện nghi',
  zh:'设施包含'
},

'oq-amen-title': {
  en:'Everything you need,<br><em>right here</em>',
  vn:'Mọi thứ bạn cần,<br><em>ngay tại đây</em>',
  zh:'您所需的一切，<br><em>尽在此处</em>'
},

'oq-amen-sub': {
  en:'Everything you need for a comfortable stay in the heart of the Old Quarter.',
  vn:'Mọi thứ bạn cần cho một kỳ nghỉ thoải mái ngay trung tâm Phố Cổ.',
  zh:'在老城区中心享受舒适住宿所需的一切。'
},

'oq-am1': {
  en:'High-speed WiFi',
  vn:'WiFi tốc độ cao',
  zh:'高速WiFi'
},

'oq-am1s': {
  en:'100 Mbps — great for remote work',
  vn:'100 Mbps — phù hợp làm việc từ xa',
  zh:'100 Mbps — 适合远程办公'
},

'oq-am2': {
  en:'Air conditioning',
  vn:'Điều hòa',
  zh:'空调'
},

'oq-am2s': {
  en:'Climate control throughout',
  vn:'Điều hòa toàn bộ căn hộ',
  zh:'全屋温度控制'
},

'oq-am3': {
  en:'Full apartment access',
  vn:'Toàn bộ căn hộ riêng',
  zh:'整套公寓使用权'
},

'oq-am3s': {
  en:'Complete privacy — just your group',
  vn:'Riêng tư hoàn toàn — chỉ dành cho nhóm của bạn',
  zh:'完全私密 — 仅供您的团体使用'
},

'oq-am4': {
  en:'Open outdoor terrace',
  vn:'Sân thượng ngoài trời',
  zh:'开放式户外露台'
},

'oq-am4s': {
  en:'Your quiet corner above the Old Quarter',
  vn:'Góc thư giãn riêng trên Phố Cổ',
  zh:'您在老城区上方的宁静角落'
},

'oq-am5': {
  en:'Smart lock · Self check-in',
  vn:'Khóa thông minh · Tự nhận phòng',
  zh:'智能门锁 · 自助入住'
},

'oq-am5s': {
  en:'Keypad entry — arrive any time',
  vn:'Nhập mã — đến bất cứ lúc nào',
  zh:'密码输入 — 随时抵达'
},

'oq-am6': {
  en:'White noise machine',
  vn:'Máy tạo tiếng ồn trắng',
  zh:'白噪音助眠机'
},

'oq-am6s': {
  en:'Helps mask street noise for better sleep',
  vn:'Giúp giảm tiếng ồn đường phố để ngủ ngon hơn',
  zh:'帮助掩盖街道噪音，助您安睡'
},

'oq-am7': {
  en:'Street food at your door',
  vn:'Ẩm thực đường phố ngay trước cửa',
  zh:'街头美食近在咫尺'
},

'oq-am7s': {
  en:'The best of Hanoi within walking distance',
  vn:'Tinh hoa ẩm thực Hà Nội trong khoảng cách đi bộ',
  zh:'步行即可享用河内最地道美食'
},

// MiaCasa Old Quarter - WiFi Projector Amenity (updated)
  'oq-am8': {
    en: 'WiFi Projector',
    vn: 'Máy chiếu WiFi',
    zh: 'WiFi投影仪'
  },
  'oq-am8s': {
    en: 'Pre-logged in Netflix & YouTube',
    vn: 'Đã đăng nhập sẵn Netflix & YouTube',
    zh: '预登录Netflix和YouTube'
  },

/* ── LOCATION ───────────────────────────────────────── */

'oq-loc-tag': {
  en:'Location',
  vn:'Vị trí',
  zh:'位置'
},

'oq-loc-title': {
  en:'Heart of<br><em>Hoan Kiem & Old Quarter</em>',
  vn:'Trung tâm<br><em>Hoàn Kiếm & Phố Cổ</em>',
  zh:'<br><em>还剑郡与老城区</em>中心'
},

'oq-loc-addr': {
  en:'📍 38 P. Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hanoi',
  vn:'📍 38 Phố Lương Ngọc Quyến, Hàng Buồm, Hoàn Kiếm, Hà Nội',
  zh:'📍 河内市还剑郡行帆坊梁玉眷街38号'
},

'oq-loc-li1': {
  en:'~5 min walk to Hoàn Kiếm Lake',
  vn:'~5 phút đi bộ đến Hồ Hoàn Kiếm',
  zh:'~步行5分钟到还剑湖'
},

'oq-loc-li2': {
  en:"~3 min walk to Lương Văn Can Street (Old Quarter's busiest street)",
  vn:'~3 phút đi bộ đến phố Lương Văn Can (khu sầm uất của Phố Cổ)',
  zh:'~步行3分钟到梁文干街（老城区最繁华的街道）'
},

'oq-loc-li3': {
  en:'~10 min walk to Đồng Xuân Market',
  vn:'~10 phút đi bộ đến Chợ Đồng Xuân',
  zh:'~步行10分钟到同春市场'
},

'oq-loc-li4': {
  en:'~12 min by Grab to Hanoi Railway Station',
  vn:'~12 phút đi Grab đến Ga Hà Nội',
  zh:'~打车12分钟到河内火车站'
},

'oq-loc-seo': {
  en:'Staying in Hoàn Kiếm means walking distance to Hoàn Kiếm Lake, easy access to night markets and street food, and a fully immersive Old Quarter experience. If you prefer a quieter, residential base away from the tourist crowds, our <a href="/miacasa-hanoi" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Hanoi rooms near Train Street</a> are a great alternative.',
  vn:'Ở Hoàn Kiếm, bạn có thể dễ dàng đi bộ đến Hồ Hoàn Kiếm, khám phá chợ đêm và ẩm thực đường phố, đồng thời tận hưởng trọn vẹn không khí Phố Cổ. Nếu bạn thích một nơi yên tĩnh hơn, mang tính địa phương và tránh xa đám đông du lịch, các phòng <a href="/miacasa-hanoi" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Hà Nội gần Phố Tàu</a> sẽ là lựa chọn phù hợp.',
  zh:'住在还剑郡，步行即可到达还剑湖，轻松前往夜市和街头美食，享受完全沉浸式的老城区体验。如果您更喜欢安静、远离游客人群的住宅区，我们的<a href="/miacasa-hanoi" style="color:var(--terracotta);text-decoration:none;font-weight:500;">MiaCasa Hanoi靠近火车街的房间</a>是绝佳选择。'
},

'oq-book-tag': {
  en:'Reservations',
  vn:'Đặt phòng',
  zh:'预订'
},

'oq-book-title': {
  en:'Book your <em>stay</em>',
  vn:'Đặt <em>phòng ngay</em>',
  zh:'预订您的<em>住宿</em>'
},

'oq-book-sub': {
  en:'Book this Old Quarter apartment direct — check availability below or message us for the best rate.',
  vn:'Đặt trực tiếp căn hộ Phố Cổ — kiểm tra lịch trống bên dưới hoặc nhắn qua WhatsApp để nhận giá tốt nhất.',
  zh:'直接预订这套老城区公寓 — 下方查看空房或通过WhatsApp联系我们获取最优价格。'
},

'oq-book-note': {
  en:'From PRICE_PLACEHOLDER₫/night · Apartment in Old Quarter Hanoi for rent — direct booking, best price guaranteed',
  vn:'Từ PRICE_PLACEHOLDER₫/đêm · Căn hộ Phố Cổ Hà Nội — đặt trực tiếp, giá tốt nhất',
  zh:'每晚PRICE_PLACEHOLDER₫起 · 河内老城区公寓出租 — 直接预订，保证最优价格'
},

'oq-cta-wa': {
  en:'📱 Book via WhatsApp',
  vn:'📱 Đặt qua WhatsApp',
  zh:'📱 通过WhatsApp预订'
},

'oq-cta-av': {
  en:'Check Availability',
  vn:'Kiểm tra lịch trống',
  zh:'查看空房'
},

'oq-cross-name': {
  en:'Also explore: MiaCasa Hanoi',
  vn:'Khám phá thêm: MiaCasa Hà Nội',
  zh:'也可探索：MiaCasa Hanoi'
},

'oq-cross-sub': {
  en:'Near Train Street · Private rooms · Ideal for couples & solo travellers',
  vn:'Gần Phố Tàu · Phòng riêng · Lý tưởng cho cặp đôi & khách đi một mình',
  zh:'靠近火车街 · 独立房间 · 适合情侣和独行旅客'
},

'oquarter-trust-1': {
  en:'📍 Right in the heart of the Old Quarter — walk everywhere',
  vn:'📍 Ngay trung tâm Phố Cổ — dễ dàng đi bộ khắp nơi',
  zh:'📍 就在老城区中心 — 步行即可到达各处'
},

'oquarter-trust-2': {
  en:'🏠 Spacious apartment with private terrace',
  vn:'🏠 Căn hộ rộng rãi với sân thượng riêng',
  zh:'🏠 宽敞公寓带私人露台'
},

'oquarter-trust-3': {
  en:'⭐ Highly rated by guests for location & hosting',
  vn:'⭐ Được khách đánh giá cao về vị trí & trải nghiệm lưu trú',
  zh:'⭐ 客人对地理位置和接待服务评价极高'
},

'oquarter-authentic': {
  en:"🏙️ In the heart of Hanoi's Old Quarter — lively evenings and real city energy. Best suited for guests who want to experience Hanoi, not escape it.",
  vn:'🏙️ Giữa lòng Phố Cổ Hà Nội — nhộn nhịp về đêm và tràn đầy năng lượng thành phố. Phù hợp nhất với những ai muốn thực sự trải nghiệm Hà Nội.',
  zh:'🏙️ 位于河内老城区中心 — 夜晚热闹非凡，充满真实城市活力。最适合想要体验河内而非逃离城市的客人。'
},

'oldquarter-notice': {
  en:'⚠ Heads up: The neighbourhood is lively and can be noisy at night. Access is via steep stairs — not ideal for young children, elderly guests, or anyone with mobility concerns.',
  vn:'⚠ Lưu ý: Khu vực khá sôi động và có thể ồn vào ban đêm. Lối lên bằng cầu thang dốc — không phù hợp với trẻ nhỏ, người lớn tuổi hoặc khách gặp khó khăn khi di chuyển.',
  zh:'⚠ 温馨提示：该社区热闹活跃，晚上可能有些噪音。需通过陡峭楼梯进入 — 不适合幼童、年长客人或行动不便者。'
},

  /* ── OUR STORY PAGE ────────────────────────────────────────────── */
/* ── ADDITIONAL CONTACT FORM & FOOTER TRANSLATIONS ─────────────── */

'prop-hanoi': {
  en:'MiaCasa Hanoi',
  vn:'MiaCasa Hà Nội',
  zh:'MiaCasa 河内'
},

'prop-oldquarter': {
  en:'MiaCasa Old Quarter',
  vn:'MiaCasa Phố Cổ',
  zh:'MiaCasa 河内老城区'
},

'captcha-label': {
  en:'Security Check: What is {num1} + {num2}?',
  vn:'Kiểm tra bảo mật: {num1} + {num2} bằng bao nhiêu?',
  zh:'安全验证：{num1} + {num2} 等于多少？'
},

'captcha-placeholder': {
  en:'Enter answer',
  vn:'Nhập câu trả lời',
  zh:'请输入答案'
},

'captcha-refresh': {
  en:'⟳ Refresh',
  vn:'⟳ Làm mới',
  zh:'⟳ 刷新'
},

'whatsapp-link': {
  en:'💬 WhatsApp',
  vn:'💬 WhatsApp',
  zh:'💬 WhatsApp'
},

'call-link': {
  en:'📞 Call +84 869 922 261',
  vn:'📞 Gọi +84 869 922 261',
  zh:'📞 致电 +84 869 922 261'
},

'footer-brand-p': {
  en:'Two distinct homestays in Hanoi — crafted with love for travellers who want a real home, not just a bed.',
  vn:'Hai homestay độc đáo tại Hà Nội — được tạo ra với tình yêu cho những du khách muốn có một ngôi nhà thực sự, không chỉ là một chỗ ngủ.',
  zh:'河内两处独特的民宿——为希望拥有真正家的旅客用心打造，而不仅仅是一张床。'
},

'footer-rating': {
  en:'⭐ 4.9★ · 200+ happy guests',
  vn:'⭐ 4.9★ · Hơn 200 khách hài lòng',
  zh:'⭐ 4.9★ · 200+ 位满意住客'
},

'footer-our-stays': {
  en:'Our Stays',
  vn:'Chỗ ở của chúng tôi',
  zh:'我们的住宿'
},

'footer-hanoi-link': {
  en:'MiaCasa Hanoi',
  vn:'MiaCasa Hà Nội',
  zh:'MiaCasa 河内'
},

'footer-oq-link': {
  en:'MiaCasa Old Quarter',
  vn:'MiaCasa Phố Cổ',
  zh:'MiaCasa 河内老城区'
},

'footer-book-direct': {
  en:'Book Direct',
  vn:'Đặt trực tiếp',
  zh:'直接预订'
},

'footer-info': {
  en:'Information',
  vn:'Thông tin',
  zh:'信息'
},

'footer-story': {
  en:'Our Story',
  vn:'Câu chuyện của chúng tôi',
  zh:'我们的故事'
},

'footer-blog': {
  en:'Blog',
  vn:'Blog',
  zh:'博客'
},

'footer-contact': {
  en:'Contact',
  vn:'Liên hệ',
  zh:'联系我们'
},

'social-facebook': {
  en:'Facebook',
  vn:'Facebook',
  zh:'Facebook'
},

'social-instagram': {
  en:'Instagram',
  vn:'Instagram',
  zh:'Instagram'
},

'social-tiktok': {
  en:'TikTok',
  vn:'TikTok',
  zh:'TikTok'
},

'footer-copyright': {
  en:'© 2025 MiaCasa Homestays',
  vn:'© 2025 MiaCasa Homestays',
  zh:'© 2025 MiaCasa Homestays'
},

'story-hero-title': {
  en:'How MiaCasa Began',
  vn:'Hành trình bắt đầu của MiaCasa',
  zh:'MiaCasa 的起源'
},

'story-hero-subtitle': {
  en:'A small idea, built with care in Hanoi',
  vn:'Một ý tưởng nhỏ, được xây dựng với sự chăm chút tại Hà Nội',
  zh:'一个小小的想法，在河内被用心打造'
},

'story-tag': {
  en:'MiaCasa Homestays',
  vn:'MiaCasa Homestays',
  zh:'MiaCasa 民宿'
},

'story-h1': {
  en:'Our <em>Story</em>',
  vn:'Câu Chuyện<br><em>Của Chúng Tôi</em>',
  zh:'我们的<br><em>故事</em>'
},

'story-lead': {
  en:'MiaCasa didn\'t start as a business. It started as an idea of home.',
  vn:'MiaCasa không bắt đầu như một công việc kinh doanh. Nó bắt đầu từ một ý tưởng về cảm giác như ở nhà.',
  zh:'MiaCasa 并非始于一门生意，而是始于“家”的想法。'
},

'story-back': {
  en:'← Back to MiaCasa Homestays',
  vn:'← Quay lại MiaCasa Homestays',
  zh:'← 返回 MiaCasa 民宿'
},

'story-p1': {
  en:'When we first thought about opening a homestay in Hanoi, the goal wasn\'t to build something big or commercial. It was simple — to create a space that felt calm, lived-in, and real. A place where someone arriving in a new city could actually feel at ease.',
  vn:'Khi chúng tôi lần đầu nghĩ đến việc mở một homestay tại Hà Nội, mục tiêu không phải là xây dựng một nơi thật lớn hay mang tính thương mại. Rất đơn giản — chúng tôi muốn tạo ra một không gian yên tĩnh, có cảm giác "sống thật", nơi mà bất kỳ ai đến một thành phố mới cũng có thể cảm thấy thoải mái.',
  zh:'当我们第一次想到在河内开设民宿时，目标并不是打造一家大型商业住宿。我们的想法很简单——创造一个平静、真实、充满生活感的空间，让初到陌生城市的人真正感到安心。'
},

'story-mobile-line1': {
  en:'MiaCasa is a small homestay in Hanoi, built by locals who care deeply about how a place  feels.',
  vn:'MiaCasa là một homestay nhỏ tại Hà Nội, được xây dựng bởi người địa phương, những người quan tâm sâu sắc đến cảm giác của không gian .',
  zh:'MiaCasa 是河内一家小型民宿，由真正关心空间感受 的当地人打造。'
},

'story-mobile-line2': {
  en:'Whether it\'s a quiet room near the train station or a full apartment in the Old Quarter, every stay is designed with intention.',
  vn:'Dù là căn phòng yên tĩnh gần ga tàu hay toàn bộ căn hộ ở Phố Cổ, mỗi kỳ lưu trú đều được thiết kế có chủ ý.',
  zh:'无论是靠近火车站的安静房间，还是老城区的整套公寓，每一次入住都经过用心设计。'
},

'story-mobile-line3': {
  en:'What started as a simple idea grew into two distinct homes in Hanoi.',
  vn:'Một ý tưởng nhỏ giản đơn đã phát triển thành hai không gian sống khác biệt tại Hà Nội.',
  zh:'一个简单的想法，逐渐发展成河内两处独特的住所。'
},

'story-mobile-line4': {
  en:'One is in the quieter Văn Miếu area.',
  vn:'Một ở khu Văn Miếu yên tĩnh.',
  zh:'其中一处位于较安静的文庙区域。'
},

'story-mobile-line5': {
  en:'The other sits in the heart of the Old Quarter.',
  vn:'Một ở giữa lòng Phố Cổ sôi động.',
  zh:'另一处位于热闹老城区的中心。'
},

'story-mobile-line6': {
  en:'Stay near Văn Miếu for a calm, local atmosphere.',
  vn:'Ở gần Văn Miếu để tận hưởng bầu không khí yên bình, đậm chất địa phương.',
  zh:'选择文庙附近，享受安静而充满本地氛围的住宿体验。'
},

'story-mobile-line7': {
  en:'Or choose the Old Quarter if you want to be in the center of everything.',
  vn:'Hoặc chọn Phố Cổ nếu bạn muốn ở ngay trung tâm mọi hoạt động.',
  zh:'如果想身处一切中心，也可以选择老城区。'
},

'story-mobile-line8': {
  en:'This was never meant to be just a place to stay.',
  vn:'Đây không chỉ đơn thuần là một nơi để ngủ.',
  zh:'这里从来不只是一个睡觉的地方。'
},
  'story-mobile-line9': {
  en:'It\'s meant to feel calm, thoughtful, and genuinely lived in.',
  vn:'Đó là nơi bạn cảm thấy bình yên, được chăm chút, và thực sự như sống trong chính ngôi nhà của mình.',
  zh:'它旨在让人感到平静、用心，并真正拥有家的生活感。'
},
'story-p1-line1':  {
  en:'When we first thought about opening a homestay in Hanoi,',
  vn:'Khi chúng tôi lần đầu nghĩ đến việc mở một homestay tại Hà Nội,',
  zh:'当我们第一次想到在河内开设一家民宿时，'
},
'story-p1-line2':  {
  en:'the goal wasn\'t to build something big or commercial.',
  vn:'mục tiêu không phải là xây dựng một nơi thật lớn hay mang tính thương mại.',
  zh:'我们的目标并不是打造一个庞大或商业化的项目。'
},
'story-p1-line3':  {
  en:'It was simple — to create a space that felt calm, lived-in, and real.',
  vn:'Rất đơn giản — chúng tôi muốn tạo ra một không gian yên tĩnh, có cảm giác "sống thật".',
  zh:'我们的想法很简单——打造一个让人感到平静、有生活气息且真实的空间。'
},
'story-p1-line4':  {
  en:'A place where someone arriving in a new city could actually feel at ease.',
  vn:'Một nơi mà bất kỳ ai đến một thành phố mới cũng có thể cảm thấy thoải mái.',
  zh:'一个让初到陌生城市的人真正感到安心自在的地方。'
},
'story-quote':     {
  en:'Not a hotel. Not just a listing. A home.',
  vn:'Không phải khách sạn. Không chỉ là một chỗ ở. Mà là một ngôi nhà.',
  zh:'不是酒店。也不只是一个住宿选择。而是一个家。'
},
'story-convert':   {
  en:'If this feels like the kind of place you\'d want to stay in Hanoi, you can explore our spaces below.',
  vn:'Nếu bạn cảm thấy đây là nơi phù hợp cho chuyến đi của mình, bạn có thể khám phá các không gian của MiaCasa bên dưới.',
  zh:'如果这里正是您在河内想入住的地方，欢迎在下方探索我们的空间。'
},
'story-hanoi-subtitle': {
  en:'Quiet neighborhood · Close to Văn Miếu & Train Street',
  vn:'Khu phố yên tĩnh · Gần Văn Miếu & Phố Tàu',
  zh:'安静社区 · 靠近文庙与火车街'
},
'story-oq-subtitle': {
  en:'Right in the center · Walk to Hoàn Kiếm Lake',
  vn:'Ngay trung tâm · Đi bộ đến Hồ Hoàn Kiếm',
  zh:'位于市中心 · 步行可达还剑湖'
},
'story-seo-1':     {
  en:'MiaCasa is a small homestay in Hanoi built by locals who care deeply about how a space feels — whether it\'s a quiet room near the Train Station or a full apartment in the Old Quarter.',
  vn:'MiaCasa là một homestay nhỏ tại Hà Nội, được xây dựng bởi những người địa phương luôn quan tâm đến cảm giác không gian — dù là phòng yên tĩnh gần Ga Hà Nội hay căn hộ trọn vẹn ở Phố Cổ.',
  zh:'MiaCasa 是一家位于河内的小型民宿，由关心居住体验的本地人打造——无论是靠近火车站的安静房间，还是位于老城区的整套公寓。'
},
'story-seo-2':     {
  en:'MiaCasa is a locally run homestay in Hanoi designed for travelers looking for a more personal stay — away from crowded tourist zones, close to local life.',
  vn:'MiaCasa là homestay địa phương tại Hà Nội, được thiết kế cho du khách muốn trải nghiệm cá nhân hơn — xa khu du lịch đông đúc, gần cuộc sống thực của người dân.',
  zh:'MiaCasa 是一家由本地经营的河内民宿，专为寻求更个性化住宿体验的旅客打造——远离拥挤景区，更贴近本地生活。'
},
'story-seo-3':     {
  en:'What started as a small idea has grown into two distinct homestays in Hanoi — one in the quieter Văn Miếu area, and one in the heart of the Old Quarter.',
  vn:'Một ý tưởng nhỏ đã phát triển thành hai homestay riêng biệt tại Hà Nội — một ở khu vực Văn Miếu yên tĩnh, và một ở trung tâm Phố Cổ.',
  zh:'一个小小的想法，逐渐发展成河内两家风格不同的民宿——一家位于宁静的文庙区域，另一家位于热闹的老城区中心。'
},
'story-seo-4':     {
  en:'Today, MiaCasa includes two homestays in Hanoi — one near Văn Miếu for a quieter stay, and one in the Old Quarter for those who want to be in the center of everything.',
  vn:'Hôm nay, MiaCasa bao gồm hai homestay tại Hà Nội — một gần Văn Miếu cho kỳ nghỉ yên tĩnh, và một ở Phố Cổ cho những ai muốn ở trung tâm mọi thứ.',
  zh:'如今，MiaCasa 在河内拥有两家民宿——一家靠近文庙，适合安静入住；另一家位于老城区，适合喜欢热闹中心地段的旅客。'
},
'story-how-title': {
  en:'How It Began',
  vn:'Mọi thứ bắt đầu như thế nào',
  zh:'故事的开始'
},
'story-how-p1':    {
  en:'The first space we worked on became what is now MiaCasa Hanoi.',
  vn:'Không gian đầu tiên mà chúng tôi thực hiện chính là MiaCasa Hanoi.',
  zh:'我们打造的第一个空间，后来成为了今天的 MiaCasa Hanoi。'
},
'story-how-p2':    {
  en:'It wasn\'t perfect. The walls needed painting. The furniture was chosen piece by piece. Some things were changed more than once. It took time, effort, and a lot of small decisions that no one really sees.',
  vn:'Nó không hoàn hảo ngay từ đầu. Tường cần sơn lại, nội thất được chọn từng món một, có những thứ phải thay đổi nhiều lần. Tất cả mất thời gian, công sức, và rất nhiều quyết định nhỏ mà không ai thấy.',
  zh:'一开始并不完美。墙面需要重新粉刷，家具是一件件精心挑选的，有些东西甚至修改了不止一次。这花费了大量时间、精力，以及许多别人看不见的小决定。'
},
'story-how-p3':    {
  en:'But that was the point. We didn\'t want to rush it. We wanted it to feel right.',
  vn:'Nhưng đó chính là điều chúng tôi mong muốn. Chúng tôi không làm vội. Chúng tôi muốn làm cho đúng.',
  zh:'但这正是我们的初衷。我们不想仓促完成，而是希望一切都恰到好处。'
},
'story-building-title': {
  en:'Building MiaCasa',
  vn:'Xây dựng MiaCasa',
  zh:'打造 MiaCasa'
},
'story-building-p1': {
  en:'Creating a space that feels like home doesn\'t happen overnight.',
  vn:'Tạo ra một không gian có cảm giác như ở nhà không phải là chuyện một sớm một chiều.',
  zh:'打造一个有“家”感觉的空间，并不是一夜之间完成的。'
},
'story-building-p1b': {
  en:'It happens piece by piece, decision by decision.',
  vn:'Nó được hình thành từng chút một, từng quyết định nhỏ.',
  zh:'它是一点一点、一个决定接一个决定慢慢成形的。'
},
'story-before-title': {
  en:'Before',
  vn:'Trước',
  zh:'之前'
},
'story-before-desc': {
  en:'Empty walls. Raw space. A blank canvas.',
  vn:'Tường trống. Không gian thô. Một bức tranh trống.',
  zh:'空白的墙面，未经装饰的空间，一张等待描绘的画布。'
},
'story-messy-title': {
  en:'Messy Stage',
  vn:'Giai đoạn lộn xộn',
  zh:'施工阶段'
},
'story-messy-desc': {
  en:'Paint, tools, dust — real process.',
  vn:'Sơn, dụng cụ, bụi — quá trình thực sự.',
  zh:'油漆、工具、灰尘——真实的打造过程。'
},
'story-furniture-title': {
  en:'Furniture Arriving',
  vn:'Bàn ghế đến',
  zh:'家具进场'
},
'story-furniture-desc': {
  en:'Piece by piece, choice by choice.',
  vn:'Từng món một, từng lựa chọn.',
  zh:'一件一件挑选，一步一步完成。'
},
'story-during-title': {
  en:'During',
  vn:'Trong quá trình',
  zh:'进行中'
},
'story-during-desc': {
  en:'Painting. Arranging. Making it ours.',
  vn:'Sơn tường. Sắp xếp. Biến nó thành của chúng tôi.',
  zh:'粉刷、布置，让它真正成为我们的空间。'
},
'story-after-title': {
  en:'Almost Finished',
  vn:'Gần hoàn thiện',
  zh:'接近完成'
},
'story-after-desc': {
  en:'Warm, calm, and ready.',
  vn:'Ấm áp, yên tĩnh và sẵn sàng.',
  zh:'温暖、安静，并准备迎接客人。'
},
'story-pause-1':   {
  en:'Slowly. Carefully. One detail at a time.',
  vn:'Chậm rãi. Cẩn trọng. Từng chi tiết một.',
  zh:'慢慢地、细心地，一次专注一个细节。'
},
'story-pause-2':   {
  en:'Piece by piece. Choice by choice.',
  vn:'Từng món một. Từng lựa chọn.',
  zh:'一步一步，一个选择接着一个选择。'
},
'story-mission':   {
  en:'They didn\'t just want to create a place to stay — they wanted to create a space that feels calm, thoughtful, and genuinely lived in.',
  vn:'Họ không chỉ muốn tạo ra một nơi để ở — họ muốn tạo ra một không gian yên tĩnh, có chiều sâu và cảm giác thực sự sống động.',
  zh:'他们不仅仅想打造一个住宿空间，更希望创造一个让人感到平静、用心且真正有生活气息的地方。'
},
'story-hosts-title': {
  en:'Meet the Hosts',
  vn:'Gặp gỡ chủ nhà',
  zh:'认识房东'
},
'story-hosts-p1':  {
  en:'MiaCasa is built and run by Linh and Ngọc — long-time friends who became business partners through a shared vision.',
  vn:'MiaCasa được xây dựng và vận hành bởi Linh và Ngọc — hai người bạn lâu năm và hiện là đối tác kinh doanh.',
  zh:'MiaCasa 由 Linh 和 Ngọc 创立并运营——两位多年好友，因为共同理念而成为合作伙伴。'
},
'story-linh-detail': {
  en:'Professional interior designer who focuses on creating spaces that feel calm, warm, and quietly beautiful — the kind of places she would want to stay in herself.',
  vn:'Nhà thiết kế nội thất chuyên nghiệp, tập trung tạo ra những không gian yên tĩnh, ấm áp và đẹp một cách nhẹ nhàng — nơi mà chính cô ấy cũng muốn ở.',
  zh:'专业室内设计师，专注于打造宁静、温暖、低调而美丽的空间——也是她自己愿意入住的地方。'
},
'story-ngoc-detail': {
  en:'Works in hospitality and brings a deep understanding of what guests actually need — from comfort to small thoughtful touches that make a stay memorable.',
  vn:'Làm việc trong ngành dịch vụ, thấu hiểu những gì khách thực sự cần — từ sự thoải mái đến những chi tiết nhỏ chu đáo làm nên kỳ nghỉ đáng nhớ.',
  zh:'拥有酒店服务经验，深刻理解客人真正需要什么——从舒适体验到令人难忘的小细节。'
},
'story-hosts-p2':  {
  en:'Together, they built MiaCasa from scratch — learning, adjusting, and improving along the way. Linh shapes how it looks. Ngọc shapes how it feels.',
  vn:'Cùng nhau, họ xây dựng MiaCasa từ những bước đầu tiên — vừa làm, vừa học, vừa điều chỉnh. Linh định hình không gian. Ngọc định hình cảm giác.',
  zh:'她们一起从零开始打造 MiaCasa，一路学习、调整与改善。Linh 负责空间设计，Ngọc 负责入住体验。'
},
'story-hanoi-title': {
  en:'Building MiaCasa Hanoi',
  vn:'Xây dựng MiaCasa Hanoi',
  zh:'打造 MiaCasa Hanoi'
},
'story-hanoi-p1':  {
  en:'MiaCasa Hanoi became a calm, quiet space — tucked away from the noise, but still close to everything that makes Hanoi special. It\'s designed for travelers who want a slower, more grounded stay. A place to come back to after a long day in the city.',
  vn:'MiaCasa Hanoi dần trở thành một không gian yên tĩnh, nhẹ nhàng — tách khỏi sự ồn ào nhưng vẫn đủ gần để khám phá Hà Nội. Đây là nơi dành cho những ai muốn một nhịp sống chậm hơn, một nơi để trở về sau một ngày dài.',
  zh:'MiaCasa Hanoi 逐渐成为一个宁静舒适的空间——远离喧嚣，却依然靠近河内最精彩的一切。它为喜欢慢节奏、沉浸式旅行的客人而设计，是结束一天城市探索后放松休息的地方。'
},
'story-hanoi-gallery': {
  en:'From Empty Space to MiaCasa Hanoi',
  vn:'Từ không gian trống đến MiaCasa Hanoi',
  zh:'从空房间到 MiaCasa Hanoi'
},
  'story-oq-title': {
  en:'Creating MiaCasa Old Quarter',
  vn:'Tạo nên MiaCasa Old Quarter',
  zh:'打造 MiaCasa 老城区'
},

'story-oq-p1': {
  en:'After MiaCasa Hanoi, the idea was to create something with a different energy. That became MiaCasa Old Quarter.',
  vn:'Sau MiaCasa Hanoi, chúng tôi muốn tạo ra một không gian với năng lượng khác. Đó là MiaCasa Old Quarter.',
  zh:'在 MiaCasa Hanoi 之后，我们希望打造一个拥有不同氛围的空间。这便成为了 MiaCasa 老城区。'
},

'story-oq-p2': {
  en:'Here, the focus is not quiet — it\'s connection. A full apartment in the heart of the Old Quarter, surrounded by street food, night walks, and the constant rhythm of the city. It\'s designed for groups and families — people who want to experience Hanoi together.',
  vn:'Ở đây không phải là sự yên tĩnh — mà là sự kết nối. Một căn hộ trọn vẹn giữa lòng Phố Cổ, nơi mọi thứ luôn sống động: đồ ăn đường phố, những buổi tối dạo phố, và nhịp sống không ngừng. Phù hợp cho nhóm bạn và gia đình — những người muốn trải nghiệm Hà Nội cùng nhau.',
  zh:'这里的重点不是安静，而是连接与陪伴。位于老城区中心的一整套公寓，周围环绕着街头美食、夜晚散步与城市不断流动的节奏。特别适合家庭和朋友团体，一起体验河内的魅力。'
},

'story-oq-p3': {
  en:'Same care. Different feeling.',
  vn:'Cùng một sự chăm chút. Nhưng một cảm giác khác.',
  zh:'同样的用心，不一样的感觉。'
},

'story-oq-gallery': {
  en:'Bringing the Old Quarter Space to Life',
  vn:'Hành trình hoàn thiện không gian Phố Cổ',
  zh:'让老城区空间焕发生机'
},

'story-same-title': {
  en:'What Stays the Same',
  vn:'Những điều không thay đổi',
  zh:'始终不变的部分'
},

'story-same-p1': {
  en:'Even though the spaces are different, the intention behind them is the same.',
  vn:'Dù mỗi không gian có một phong cách riêng, nhưng tinh thần vẫn giống nhau.',
  zh:'虽然空间风格不同，但背后的理念始终一致。'
},

'story-same-1': {
  en:'Thoughtful spaces instead of over-designed ones',
  vn:'Không gian có sự chăm chút, không quá cầu kỳ',
  zh:'精心打造的空间，而非过度设计'
},

'story-same-2': {
  en:'Honest communication instead of scripted service',
  vn:'Giao tiếp chân thành, không theo kịch bản',
  zh:'真诚沟通，而非公式化服务'
},

'story-same-3': {
  en:'Real hospitality instead of transactions',
  vn:'Sự hiếu khách thật sự, không chỉ là dịch vụ',
  zh:'真正的待客之道，而不只是交易'
},

'story-same-p2': {
  en:'We also offer direct booking through this website — so guests can avoid platform fees and connect with us more directly.',
  vn:'Chúng tôi cũng cung cấp đặt phòng trực tiếp qua website này — giúp bạn tránh phí trung gian và kết nối dễ dàng hơn với chúng tôi.',
  zh:'我们也提供官网直接预订，让客人避免平台费用，并与我们更直接地联系。'
},

'story-different-title': {
  en:'What Makes Us Different',
  vn:'Điều gì làm nên sự khác biệt',
  zh:'我们的不同之处'
},

'story-diff-1-title': {
  en:'🎨 Designed by a professional',
  vn:'🎨 Thiết kế chuyên nghiệp',
  zh:'🎨 专业设计'
},

'story-diff-1-desc': {
  en:'Interior designer behind every detail',
  vn:'Từng chi tiết đều được nhà thiết kế chăm chút',
  zh:'每一个细节都由室内设计师精心打造'
},

'story-diff-2-title': {
  en:'🏠 Locally hosted',
  vn:'🏠 Chủ nhà tại chỗ',
  zh:'🏠 本地房东接待'
},

'story-diff-2-desc': {
  en:'Not managed remotely. We\'re here.',
  vn:'Không qua trung gian. Chúng tôi ở đây.',
  zh:'不是远程管理，我们就在这里。'
},

'story-diff-3-title': {
  en:'💰 Direct booking',
  vn:'💰 Đặt phòng trực tiếp',
  zh:'💰 直接预订'
},

'story-diff-3-desc': {
  en:'No platform fees, best rate',
  vn:'Không phí nền tảng, giá tốt nhất',
  zh:'无平台费用，价格更优惠'
},

'story-diff-4-title': {
  en:'✨ Thoughtful details',
  vn:'✨ Chi tiết chu đáo',
  zh:'✨ 用心细节'
},

'story-diff-4-desc': {
  en:'Small touches that make a difference',
  vn:'Những điều nhỏ tạo nên sự khác biệt',
  zh:'细微之处，带来不同体验'
},

'story-why-title': {
  en:'Why guests choose MiaCasa',
  vn:'Tại sao khách chọn MiaCasa',
  zh:'为什么客人选择 MiaCasa'
},

'story-why-1-title': {
  en:'🎨 Designed with intention',
  vn:'🎨 Thiết kế có chủ ý',
  zh:'🎨 用心设计'
},

'story-why-1-desc': {
  en:'Not just furnished — thoughtfully created',
  vn:'Không chỉ được trang bị — mà được tạo ra một cách chu đáo',
  zh:'不仅仅是布置，而是经过深思熟虑打造'
},

'story-why-2-title': {
  en:'🏠 Locally hosted',
  vn:'🏠 Chủ nhà tại chỗ',
  zh:'🏠 本地房东接待'
},

'story-why-2-desc': {
  en:'Not managed remotely. We\'re here.',
  vn:'Không qua trung gian. Chúng tôi ở đây.',
  zh:'不是远程管理，我们就在这里。'
},

'story-why-3-title': {
  en:'💰 Direct booking',
  vn:'💰 Đặt phòng trực tiếp',
  zh:'💰 官网直接预订'
},

'story-why-3-desc': {
  en:'No platform fees, best rate guaranteed',
  vn:'Không phí nền tảng, giá tốt nhất đảm bảo',
  zh:'无平台费用，保证最佳价格'
},

'story-why-4-title': {
  en:'✨ Spaces that feel lived-in',
  vn:'✨ Không gian sống động',
  zh:'✨ 有生活感的空间'
},

'story-why-4-desc': {
  en:'Real homes, not staged showrooms',
  vn:'Nhà thực sự, không phải phòng trưng bày',
  zh:'真实的家，而非摆拍样板间'
},
  'story-belief':    {en:'We believe where you stay should feel personal, not transactional.', vn:'Chúng tôi tin rằng nơi bạn ở nên mang lại cảm giác cá nhân, không chỉ là một giao dịch.', zh:'我们相信，住宿应该让人感到温暖和真实，而不只是一次交易。'},
'story-properties-title': {en:'Our Spaces', vn:'Không gian của chúng tôi', zh:'我们的空间'},
'story-hanoi-bullet-1': {en:'Ideal for couples & solo travelers', vn:'Lý tưởng cho cặp đôi & khách solo', zh:'适合情侣和独自旅行者'},
'story-hanoi-bullet-2': {en:'3 private rooms with kitchenettes', vn:'3 phòng riêng với bếp nhỏ', zh:'3间带小厨房的独立房间'},
'story-hanoi-bullet-3': {en:'~15 min walk to Train Street', vn:'~15 phút đi bộ đến Phố Tàu', zh:'步行约15分钟到火车街'},
'story-oq-bullet-1': {en:'Best for groups & families', vn:'Phù hợp cho nhóm & gia đình', zh:'最适合团体和家庭入住'},
'story-oq-bullet-2': {en:'Entire 3-bedroom apartment, sleeps up to 6', vn:'Toàn bộ căn hộ 3 phòng ngủ, ngủ tối đa 6 người', zh:'整套三居室公寓，最多可入住6人'},
'story-oq-bullet-3': {en:'Open terrace', vn:'Sân thượng mở', zh:'开放式露台'},
'story-growing-title': {en:'Always Improving', vn:'Không ngừng hoàn thiện', zh:'不断提升'},
'story-growing-p1': {en:'MiaCasa has welcomed guests from around the world, with a hosting experience built on care, consistency, and attention to detail.', vn:'MiaCasa đã chào đón khách từ khắp nơi trên thế giới, với trải nghiệm lưu trú được xây dựng trên sự quan tâm, nhất quán và chú trọng đến từng chi tiết.', zh:'MiaCasa 已迎接来自世界各地的客人，我们的入住体验建立在关怀、一致性和对细节的重视之上。'},
'story-growing-p2': {en:'The spaces are thoughtfully designed and well maintained. What continues to grow is the care, the warmth, and the small touches that turn a good stay into a memorable one.', vn:'Không gian được thiết kế chu đáo và bảo trì tốt. Điều tiếp tục phát triển là sự quan tâm, sự ấm áp và những điểm nhỏ làm nên một kỳ nghỉ đáng nhớ.', zh:'空间经过精心设计并维护良好。不断成长的是我们的关怀、温暖，以及那些让一次不错的入住变得难忘的小细节。'},
'story-growing-p3': {en:'Each stay helps us refine the experience even further.', vn:'Mỗi lần lưu trú đều giúp chúng tôi hoàn thiện trải nghiệm hơn nữa.', zh:'每一次入住都帮助我们进一步完善体验。'},
'story-growing-p4': {en:'When you stay with us, you\'re not just booking a room. You\'re stepping into a home we\'ve built with intention — and continue to look after, one detail at a time.', vn:'Khi bạn ở cùng chúng tôi, bạn không chỉ đặt một căn phòng. Bạn đang bước vào một ngôi nhà được xây dựng với chủ ý — và tiếp tục được chăm chút, từng chi tiết một.', zh:'当您入住我们这里时，您不仅仅是在预订一个房间，而是在进入一个我们用心打造并持续细心照顾的家，一点一滴地完善。'},
'story-growing-quote': {en:'We\'re glad you\'re here.', vn:'Chúng tôi rất vui vì bạn ở đây.', zh:'很高兴您来到这里。'},
'story-closing': {en:'If you\'re planning a trip to Hanoi, we\'d love to host you.', vn:'Nếu bạn đang lên kế hoạch cho chuyến đi tới Hà Nội, chúng tôi rất mong được đón tiếp bạn.', zh:'如果您正在计划前往河内旅行，我们很期待接待您。'},
'story-closing-emphasis': {en:'Experience MiaCasa for yourself.', vn:'Trải nghiệm MiaCasa cho chính bạn.', zh:'亲自体验 MiaCasa。'},
'story-closing-sub': {en:'Whether you\'re traveling solo, as a couple, or with family — there\'s a space for you.', vn:'Dù bạn đi một mình, cùng bạn đời hay cả gia đình — đều có không gian phù hợp cho bạn.', zh:'无论您是独自旅行、情侣出行还是家庭旅行，这里都有适合您的空间。'},
'story-anchor': {en:'A small homestay brand built in Hanoi by two friends who care about thoughtful spaces.', vn:'Một thương hiệu homestay nhỏ được xây dựng tại Hà Nội bởi hai người bạn, những người quan tâm đến không gian có chiều sâu.', zh:'一个由两位好友在河内创立的小型民宿品牌，用心打造温暖舒适的空间。'},
'story-cta-view-h': {en:'Explore MiaCasa Hanoi →', vn:'Khám phá MiaCasa Hà Nội →', zh:'探索 MiaCasa Hanoi →'},
'story-cta-view-oq': {en:'Explore Old Quarter →', vn:'Khám phá Phố Cổ →', zh:'探索老城区 →'},
'story-cta-avail': {en:'Check Availability', vn:'Xem lịch trống', zh:'查看可订情况'},
'story-cta-wa': {en:'WhatsApp', vn:'WhatsApp', zh:'WhatsApp'},
'story-cta-h': {en:'Explore MiaCasa Hanoi →', vn:'Khám phá MiaCasa Hà Nội →', zh:'探索 MiaCasa Hanoi →'},
'story-cta-oq': {en:'Explore MiaCasa Old Quarter →', vn:'Khám phá MiaCasa Phố Cổ →', zh:'探索 MiaCasa Old Quarter →'},
'story-before': {en:'📷 Before', vn:'📷 Trước', zh:'📷 改造前'},
'story-during': {en:'📷 During', vn:'📷 Trong quá trình', zh:'📷 改造中'},
'story-after': {en:'📷 After', vn:'📷 Sau', zh:'📷 完成后'},
'story-oq-before': {en:'📷 Before', vn:'📷 Trước', zh:'📷 改造前'},
'story-oq-during': {en:'📷 During', vn:'📷 Trong quá trình', zh:'📷 改造中'},
'story-oq-after': {en:'📷 After', vn:'📷 Sau', zh:'📷 完成后'},
'story-grounding': {en:'A small homestay brand built in Hanoi by two friends who care about thoughtful spaces.', vn:'Một thương hiệu homestay nhỏ được xây dựng tại Hà Nội bởi hai người bạn, những người quan tâm đến không gian có chiều sâu.', zh:'一个由两位好友在河内创立的小型民宿品牌，用心打造温暖舒适的空间。'},

/* ── FAQ ──────────────────────────────────────────────────────── */
'faq-tag': {en:"FAQ", vn:"Câu hỏi thường gặp", zh:"常见问题"},
'faq-choosetitle': {en:'Not sure which property to choose?', vn:'Chưa biết chọn chỗ nghỉ nào?', zh:'不确定该选择哪一处住宿？'},
'faq-choose-oq': {en:'Choose MiaCasa Old Quarter if you want to stay in the center, close to attractions and nightlife.', vn:'Chọn MiaCasa Phố Cổ nếu bạn muốn ở trung tâm, gần các điểm tham quan và cuộc sống về đêm.', zh:'如果您想住在市中心，靠近景点和夜生活，请选择 MiaCasa Old Quarter。'},
'faq-choose-h': {en:'Choose MiaCasa Hanoi if you prefer a quieter, more local experience.', vn:'Chọn MiaCasa Hà Nội nếu bạn thích không khí yên tĩnh và đậm chất địa phương hơn.', zh:'如果您喜欢更安静、更有本地氛围的体验，请选择 MiaCasa Hanoi。'},
'faq-help-title': {en:"Not sure which property to choose?", vn:"Không chắc nên chọn chỗ nghỉ nào?", zh:"不确定该选择哪一处住宿？"},
'faq-help-oq': {en:"Choose MiaCasa Old Quarter if you want to stay in the center, close to attractions and nightlife", vn:"Chọn MiaCasa Phố Cổ nếu bạn muốn ở trung tâm, gần các điểm tham quan và cuộc sống về đêm", zh:"如果您想住在市中心，靠近景点和夜生活，请选择 MiaCasa Old Quarter"},
'faq-help-h': {en:"Choose MiaCasa Hanoi if you prefer a quieter, more local experience", vn:"Chọn MiaCasa Hanoi nếu bạn thích trải nghiệm yên tĩnh và đậm chất địa phương hơn", zh:"如果您喜欢更安静、更有本地氛围的体验，请选择 MiaCasa Hanoi"},

'h-faq-q1':        {en:"How far is MiaCasa Hanoi from the Old Quarter?", vn:"MiaCasa Hanoi cách Phố Cổ bao xa?", zh:"MiaCasa Hanoi 距离老城区有多远？"},
'h-faq-a1':        {en:"MiaCasa Hanoi is about 10–15 minutes by Grab or taxi from the Old Quarter and Hoàn Kiếm Lake. Close enough to explore easily, while staying in a quieter, more local neighborhood.", vn:"MiaCasa Hanoi cách Phố Cổ và Hồ Hoàn Kiếm khoảng 10–15 phút bằng Grab hoặc taxi. Gần đủ để dễ dàng khám phá, trong khi vẫn ở trong một khu phố yên tĩnh và đậm chất địa phương hơn.", zh:"从 MiaCasa Hanoi 前往老城区和还剑湖，乘坐 Grab 或出租车约需 10 至 15 分钟。距离景点足够近，方便游览，同时又位于更安静、更具本地生活氛围的社区。"},

'h-faq-q2':        {en:"Is the area quiet?", vn:"Khu vực có yên tĩnh không?", zh:"附近区域安静吗？"},
'h-faq-a2':        {en:"Yes. The homestay is located in a peaceful residential area, away from busy tourist streets. Ideal if you prefer a calm environment after a day exploring Hanoi.", vn:"Có. Homestay nằm trong một khu dân cư yên tĩnh, cách xa những con phố du lịch tấp nập. Lý tưởng nếu bạn thích môi trường bình yên sau một ngày khám phá Hà Nội.", zh:"是的。民宿位于安静的居民区，远离繁忙的游客街区。如果您在探索河内一天后喜欢安静的环境，这里非常适合您。"},

'h-faq-q3':        {en:"Is it near Railway Street?", vn:"Có gần Phố Tàu Hỏa không?", zh:"离火车街近吗？"},
'h-faq-a3':        {en:"Yes — within walking distance or a very short ride to Hanoi Railway Street. Convenient if you want to visit without staying in the crowded area.", vn:"Có — chỉ cần đi bộ hoặc đi xe rất ngắn đến Phố Tàu Hỏa Hà Nội. Rất tiện nếu bạn muốn ghé thăm nhưng không muốn ở trong khu đông đúc.", zh:"是的，步行即可到达或只需短程车程即可到达河内火车街。如果您想游览火车街，但不想住在拥挤区域，这里会很方便。"},

'h-faq-q4':        {en:"Is MiaCasa Hanoi suitable for long stays or remote work?", vn:"MiaCasa Hanoi có phù hợp cho lưu trú dài ngày hoặc làm việc từ xa không?", zh:"MiaCasa Hanoi 适合长期住宿或远程办公吗？"},
'h-faq-a4':        {en:"Absolutely. Many guests choose this property for longer stays because of the quiet surroundings, comfortable rooms, and reliable WiFi.", vn:"Hoàn toàn phù hợp. Nhiều khách chọn chỗ nghỉ này cho kỳ lưu trú dài ngày vì không gian yên tĩnh, phòng thoải mái và WiFi ổn định.", zh:"当然适合。许多客人因为这里环境安静、房间舒适以及 WiFi 稳定而选择长期入住。"},

'h-faq-q5':        {en:"Are there local food options nearby?", vn:"Gần đây có nhiều lựa chọn ăn uống địa phương không?", zh:"附近有当地餐饮选择吗？"},
'h-faq-a5':        {en:"Yes — plenty of authentic local eateries, cafés, and small shops within walking distance. A great area to experience everyday Hanoi life.", vn:"Có — rất nhiều quán ăn địa phương đích thực, quán cà phê và cửa hàng nhỏ trong tầm đi bộ. Khu vực tuyệt vời để trải nghiệm cuộc sống Hà Nội hàng ngày.", zh:"有，步行范围内有许多地道的本地餐馆、咖啡馆和小店，是体验真实河内日常生活的好地方。"},

'h-faq-q6':        {en:"How do I check in?", vn:"Tôi nhận phòng như thế nào?", zh:"如何办理入住？"},
'h-faq-a6':        {en:"We offer self check-in with clear instructions sent before your arrival. Simple and flexible, especially for late arrivals.", vn:"Chúng tôi cung cấp dịch vụ tự nhận phòng với hướng dẫn rõ ràng được gửi trước khi bạn đến. Đơn giản và linh hoạt, đặc biệt cho những người đến muộn.", zh:"我们提供自助入住，并会在您到达前发送清晰的说明。简单灵活，特别适合晚到的客人。"},

'h-faq-q7':        {en:"Can I book directly through the website?", vn:"Tôi có thể đặt phòng trực tiếp qua website không?", zh:"我可以直接通过网站预订吗？"},
'h-faq-a7':        {en:"Yes. Booking directly gives you better rates compared to platforms like Airbnb or Booking.com.", vn:"Có. Đặt phòng trực tiếp qua website của chúng tôi sẽ cho bạn mức giá tốt hơn so với các nền tảng như Airbnb hoặc Booking.com.", zh:"可以。通过我们的网站直接预订，通常会比 Airbnb 或 Booking.com 等平台获得更优惠的价格。"},

'h-faq-q8':        {en:'Is there a laundry?', vn:'Có máy giặt không?', zh:'有洗衣设施吗？'},
'h-faq-a8':        {en:'Yes, free washing machine and dryer with detergent provided.', vn:'Có, máy giặt và máy sấy miễn phí kèm bột giặt.', zh:'有，提供免费洗衣机、烘干机以及洗衣液。'},

'oq-faq-q1':       {en:"Is MiaCasaOldQuarter located in the center of Hanoi?", vn:"MiaCasaOldQuarter có nằm ở trung tâm Hà Nội không?", zh:"MiaCasa Old Quarter 位于河内市中心吗？"},
'oq-faq-a1':       {en:"Yes. The apartment is in the heart of the Old Quarter, within walking distance of Hoàn Kiếm Lake, night markets, and major attractions.", vn:"Có. Căn hộ nằm ngay trung tâm Phố Cổ, trong tầm đi bộ đến Hồ Hoàn Kiếm, chợ đêm và các điểm tham quan chính.", zh:"是的。公寓位于河内老城区中心，步行即可到达还剑湖、夜市和主要景点。"},

'oq-faq-q2':       {en:"Is it noisy at night?", vn:"Ban đêm có ồn không?", zh:"晚上会很吵吗？"},
'oq-faq-a2':       {en:"Being in the Old Quarter, the area can be lively, especially evenings and weekends. If you enjoy city energy, great fit. If you prefer quiet, MiaCasa Hanoi may be a better option.", vn:"Ở Phố Cổ, khu vực có thể khá sôi động, đặc biệt vào buổi tối và cuối tuần. Nếu bạn thích năng lượng thành phố, rất phù hợp. Nếu bạn thích yên tĩnh, MiaCasa Hanoi có thể là lựa chọn tốt hơn.", zh:"由于位于老城区，附近在晚上和周末可能会比较热闹。如果您喜欢城市氛围，这里非常适合。如果您更喜欢安静，MiaCasa Hanoi 可能是更好的选择。"},

'oq-faq-q3':       {en:"Is this property suitable for families or groups?", vn:"Chỗ nghỉ này có phù hợp cho gia đình hoặc nhóm không?", zh:"这里适合家庭或团体入住吗？"},
'oq-faq-a3':       {en:"Yes. The apartment has multiple beds and a spacious layout, making it ideal for families or small groups traveling together.", vn:"Có. Căn hộ có nhiều giường và bố cục rộng rãi, lý tưởng cho gia đình hoặc nhóm nhỏ đi cùng nhau.", zh:"适合。公寓有多张床和宽敞的布局，非常适合家庭或小团体一起入住。"},

'oq-faq-q4':       {en:"How far is it from Hoàn Kiếm Lake?", vn:"Cách Hồ Hoàn Kiếm bao xa?", zh:"距离还剑湖有多远？"},
'oq-faq-a4':       {en:"Just a short walk — typically around 5 to 10 minutes depending on your pace.", vn:"Chỉ cần đi bộ một chút — thường khoảng 5 đến 10 phút tùy tốc độ của bạn.", zh:"步行即可到达，通常约需 5 至 10 分钟，取决于您的步行速度。"},

'oq-faq-q5':       {en:"Are restaurants and cafés nearby?", vn:"Gần đây có nhà hàng và quán cà phê không?", zh:"附近有餐厅和咖啡馆吗？"},
'oq-faq-a5':       {en:"You will be surrounded by some of the best food, cafés, and street eats Hanoi has to offer — all within walking distance.", vn:"Bạn sẽ được bao quanh bởi những món ăn ngon nhất Hà Nội, quán cà phê và ẩm thực đường phố — tất cả trong tầm đi bộ.", zh:"周围遍布河内最棒的美食、咖啡馆和街头小吃，全部都在步行范围内。"},

'oq-faq-q6':       {en:"How do I check in?", vn:"Tôi nhận phòng như thế nào?", zh:"如何办理入住？"},
'oq-faq-a6':       {en:"We provide simple self check-in instructions before your arrival, so you can arrive at your convenience.", vn:"Chúng tôi cung cấp hướng dẫn tự nhận phòng đơn giản trước khi bạn đến, để bạn có thể đến theo sự tiện lợi của mình.", zh:"我们会在您到达前提供简单的自助入住说明，方便您按照自己的时间到达入住。"},

'oq-faq-q7':       {en:"Can I book directly for better prices?", vn:"Tôi có thể đặt trực tiếp để được giá tốt hơn không?", zh:"直接预订会更便宜吗？"},
'oq-faq-a7':       {en:"Yes. Direct bookings through our website are more affordable since they avoid third-party platform fees.", vn:"Có. Đặt phòng trực tiếp qua website thường có giá phải chăng hơn vì tránh được phí nền tảng bên thứ ba.", zh:"是的。通过我们的网站直接预订通常更优惠，因为无需支付第三方平台费用。"},

'hanoi-feel-title': {en:'🌅 Experience Hanoi differently', vn:'🌅 Trải nghiệm Hà Nội khác biệt', zh:'🌅 用不同方式体验河内'},
'hanoi-feel-1':    {en:'☕ Quiet mornings away from traffic', vn:'☕ Buổi sáng yên tĩnh, xa khói bụi', zh:'☕ 远离车流的安静早晨'},
'hanoi-feel-2':    {en:'🏡 Live like a local in a real neighborhood', vn:'🏡 Sống như người địa phương', zh:'🏡 在真实社区里像当地人一样生活'},
'hanoi-feel-3':    {en:'🌿 Slower, more personal Hanoi experience', vn:'🌿 Trải nghiệm Hà Nội chậm rãi hơn', zh:'🌿 更慢节奏、更有温度的河内体验'},

/* ── COMPARE STAYS SECTION (homepage) ────────────────────────── */
'compare-tag':     {en:'Compare Stays', vn:'So sánh chỗ nghỉ', zh:'住宿对比'},
'compare-title':   {en:'Not sure <em>which to choose?</em>', vn:'Chưa biết <em>nên chọn nơi nào?</em>', zh:'不确定<em>该选哪一个？</em>'},
'compare-sub':     {en:'Both are women-owned, locally run, and book direct for the best price. The difference is in the vibe.', vn:'Cả hai đều do phụ nữ làm chủ, vận hành địa phương, và đặt trực tiếp để có giá tốt nhất. Sự khác biệt nằm ở không khí.', zh:'两家住宿均由女性经营、本地管理，直接预订可享最佳价格。区别在于不同的氛围。'},

'compare-h-title': {en:'Quiet, local, residential', vn:'Yên tĩnh, đậm chất địa phương', zh:'安静、本地化、住宅社区'},
'compare-h-li1':   {en:'Near Train Street &amp; Văn Miếu', vn:'Gần Phố Tàu Hỏa &amp; Văn Miếu', zh:'靠近火车街和文庙'},
'compare-h-li2':   {en:'3 private en-suite rooms · up to 3 guests each', vn:'3 phòng riêng có phòng tắm · tối đa 3 khách mỗi phòng', zh:'3 间独立套房 · 每间最多可住 3 位客人'},
'compare-h-li3':   {en:'Best for couples, solo travelers, remote workers', vn:'Phù hợp cho cặp đôi, khách solo, người làm việc từ xa', zh:'适合情侣、独自旅行者和远程工作者'},
'compare-h-li4':   {en:'From <span id="compare-hanoi-price">550,000</span>₫ / night', vn:'Từ <span id="compare-hanoi-price">550.000</span>₫ / đêm', zh:'每晚 <span id="compare-hanoi-price">550,000</span>₫ 起'},
'compare-h-cta':   {en:'Explore MiaCasa Hanoi →', vn:'Khám phá MiaCasa Hà Nội →', zh:'探索 MiaCasa Hanoi →'},

'compare-oq-title':{en:'Central, vibrant, Old Quarter', vn:'Trung tâm, sôi động, Phố Cổ', zh:'市中心、充满活力、老城区'},
'compare-oq-li1':  {en:'Heart of Hoàn Kiếm · steps from the lake', vn:'Trung tâm Hoàn Kiếm · ngay cạnh hồ', zh:'位于还剑区中心 · 距离湖边仅几步之遥'},
'compare-oq-li2':  {en:'Entire apartment · 3 queen beds · up to 6 guests', vn:'Toàn bộ căn hộ · 3 giường đôi · tối đa 6 khách', zh:'整套公寓 · 3 张大床 · 最多可住 6 位客人'},
'compare-oq-li3':  {en:'Best for families, groups, Old Quarter lovers', vn:'Phù hợp cho gia đình, nhóm bạn, người yêu Phố Cổ', zh:'适合家庭、团体和喜爱老城区的旅客'},
'compare-oq-li4':  {en:'From <span id="compare-oldquarter-price">900,000</span>₫ / night', vn:'Từ <span id="compare-oldquarter-price">900.000</span>₫ / đêm', zh:'每晚 <span id="compare-oldquarter-price">900,000</span>₫ 起'},
'compare-oq-cta':  {en:'Explore Old Quarter →', vn:'Khám phá MiaCasa Phố Cổ →', zh:'探索 MiaCasa Old Quarter →'},

  /* ── CHOOSE YOUR STAY SELECTOR ─────────────────────────────────── */
'choose-title':        {en:'Choose Your Stay', vn:'Chọn Chỗ Nghỉ Của Bạn', zh:'选择您的住宿'},
'selector-oq-title':   {en:'Entire Apartment', vn:'Toàn Bộ Căn Hộ', zh:'整套公寓'},
'selector-oq-desc':    {en:'MiaCasa Old Quarter · Hoàn Kiếm', vn:'MiaCasa Phố Cổ · Hoàn Kiếm', zh:'MiaCasa Old Quarter · 还剑区'},
'selector-oq-feat1':   {en:'3 queen beds · Sleeps up to 6', vn:'3 giường đôi · Ngủ tối đa 6 người', zh:'3 张大床 · 最多可住 6 人'},
'selector-oq-feat2':   {en:'Private terrace · Smart lock', vn:'Sân thượng riêng · Khóa thông minh', zh:'私人露台 · 智能门锁'},
'selector-oq-feat3':   {en:'Steps from Hoàn Kiếm Lake', vn:'Cách Hồ Hoàn Kiếm vài bước', zh:'距离还剑湖仅几步之遥'},
'selector-oq-btn':     {en:'Book Your Dates →', vn:'Đặt Ngày Của Bạn →', zh:'预订您的日期 →'},

'selector-h-title':    {en:'Rooms or Full Home', vn:'Phòng Hoặc Toàn Bộ Căn Hộ', zh:'单间或整套住宿'},
'selector-h-desc':     {en:'MiaCasa Hanoi · Văn Miếu', vn:'MiaCasa Hà Nội · Văn Miếu', zh:'MiaCasa Hanoi · 文庙区'},
'selector-h-feat1':    {en:'3 private rooms · Up to 3 guests each', vn:'3 phòng riêng · Tối đa 3 khách mỗi phòng', zh:'3 间独立房间 · 每间最多 3 位客人'},
'selector-h-feat2':    {en:'Kitchenette · Free laundry', vn:'Bếp nhỏ · Giặt ủi miễn phí', zh:'小厨房 · 免费洗衣'},
'selector-h-feat3':    {en:'15 min walk to Train Street', vn:'15 phút đi bộ đến Phố Tàu', zh:'步行 15 分钟到火车街'},
'selector-h-btn':      {en:'Book Your Dates →', vn:'Đặt Ngày Của Bạn →', zh:'预订您的日期 →'},

/* ── TRUST BADGES ──────────────────────────────────────────────── */
'trust-instant':       {en:'✓ Instant confirmation', vn:'✓ Xác nhận ngay lập tức', zh:'✓ 即时确认'},
'trust-best-rate':     {en:'✓ Best rate guaranteed', vn:'✓ Giá tốt nhất đảm bảo', zh:'✓ 最优价格保证'},
'trust-support':       {en:'✓ Support within 2 hours', vn:'✓ Hỗ trợ trong 2 giờ', zh:'✓ 2 小时内回复支持'},

/* ── UPDATED CTA BUTTONS ───────────────────────────────────────── */
'secondary-book':      {en:'Book Your Dates →', vn:'Đặt Ngày Của Bạn →', zh:'预订您的日期 →'},
'booking-book-dates':  {en:'Book Your Dates →', vn:'Đặt Ngày Của Bạn →', zh:'预订您的日期 →'},

/* ── DIFFERENTIATORS STRIP ─────────────────────────────────────── */
'diff-private':        {en:'🏠 Private stays, host nearby', vn:'🏠 Ở riêng tư, chủ nhà gần bên', zh:'🏠 私密住宿，房东就在附近'},
'diff-self':           {en:'🔓 Self check-in, arrive anytime', vn:'🔓 Tự nhận phòng, đến bất cứ lúc nào', zh:'🔓 自助入住，随时到达'},
'diff-flex':           {en:'🛏️ Flexible: 1 room, 2 rooms, or full home', vn:'🛏️ Linh hoạt: 1 phòng, 2 phòng, hoặc cả căn hộ', zh:'🛏️ 灵活选择：1 间房、2 间房或整套住宿'},
'diff-rate':           {en:'💰 Best rate when you book direct', vn:'💰 Giá tốt nhất khi đặt trực tiếp', zh:'💰 直接预订享最优价格'},
'cafes-breadcrumb-current': {en:"Best Cafés in Hanoi", vn:"Quán cà phê đẹp ở Hà Nội", zh:"河内最佳咖啡馆"},

/* -- Dynamic booking/admin status messages -- */
'booking-still-checking': {en:"⏳ Still checking... you can continue filling your details", vn:"⏳ Vẫn đang kiểm tra... bạn có thể tiếp tục điền thông tin", zh:"⏳ 正在检查中……您可以继续填写信息"},
'booking-room-available-proceed': {en:"✅ Room available! You can proceed.", vn:"✅ Phòng còn trống! Bạn có thể tiếp tục.", zh:"✅ 房间可用！您可以继续。"},
'booking-availability-error': {en:"⚠️ Unable to check availability. Please try again.", vn:"⚠️ Không thể kiểm tra lịch trống. Vui lòng thử lại.", zh:"⚠️ 无法检查房态，请重试。"},
'booking-past-dates': {en:"❌ Cannot select past dates", vn:"❌ Không thể chọn ngày trong quá khứ", zh:"❌ 无法选择过去的日期"},
'booking-select-dates': {en:"📅 Please select check-in and check-out dates", vn:"📅 Vui lòng chọn ngày nhận và trả phòng", zh:"📅 请选择入住和退房日期"},
'booking-select-room': {en:"🏠 Please select a room", vn:"🏠 Vui lòng chọn phòng", zh:"🏠 请选择房间"},
'booking-select-guests': {en:"👥 Please select number of guests", vn:"👥 Vui lòng chọn số lượng khách", zh:"👥 请选择客人人数"},
'booking-complete-details': {en:"📋 Please complete all booking details", vn:"📋 Vui lòng điền đầy đủ thông tin đặt phòng", zh:"📋 请填写完整预订信息"},
'booking-date-order-error': {en:"⚠️ Check-out date must be after check-in date", vn:"⚠️ Ngày trả phòng phải sau ngày nhận phòng", zh:"⚠️ 退房日期必须晚于入住日期"},
'booking-loading-qr': {en:"Loading QR code...", vn:"Đang tải mã QR...", zh:"正在加载二维码……"},
'booking-id-label': {en:"Booking ID:", vn:"Mã đặt phòng:", zh:"预订编号："},

/* -- Restored homepage stays keys -- */
'sec-stays': {en:"Our Stays", vn:"Chỗ nghỉ của chúng tôi", zh:"我们的住宿"},
'stays-title': {en:"Two stays, <em>one spirit</em>", vn:"Hai chỗ nghỉ, <em>một tinh thần</em>", zh:"两种住宿，<em>同一种理念</em>"},
'stays-sub': {en:"Choose the quiet neighbourhood charm of MiaCasa Hanoi, or the electric energy of MiaCasa Old Quarter.", vn:"Chọn nét yên tĩnh của MiaCasa Hanoi hoặc năng lượng sôi động của MiaCasa Old Quarter.", zh:"选择 MiaCasa Hanoi 安静的社区氛围，或 MiaCasa Old Quarter 充满活力的城市能量。"},

/* -- Missing existing data-t keys completed -- */
'blog-header-title': {
  en: 'MiaCasa Journal',
  vn: 'Nhật ký MiaCasa',
  zh: 'MiaCasa 日志'
},
'blog-header-sub': {
  en: 'Hanoi Travel Guides & Local Tips',
  vn: 'Hướng dẫn du lịch Hà Nội & Mẹo địa phương',
  zh: '河内旅行指南与本地贴士'
},
'blog-header-desc': {
  en: 'Honest travel advice, local recommendations, and neighborhood guides from hosts who live in Hanoi.',
  vn: 'Lời khuyên du lịch chân thật, gợi ý địa phương và hướng dẫn khu phố từ những người chủ sống tại Hà Nội.',
  zh: '来自河内房东的真实旅行建议、本地推荐和社区指南。'
},
'blog-header-tags': {
  en: '🍜 Food · ☕ Cafés · 🚂 Attractions · 📍 Neighborhoods · 🏠 Where to Stay',
  vn: '🍜 Ẩm thực · ☕ Cà phê · 🚂 Điểm tham quan · 📍 Khu phố · 🏠 Nơi ở',
  zh: '🍜 美食 · ☕ 咖啡 · 🚂 景点 · 📍 社区 · 🏠 住宿推荐'
},
'cafes-category': {en:"☕ CAFÉ GUIDE", vn:"☕ HƯỚNG DẪN CÀ PHÊ", zh:"☕ 咖啡馆指南"},
'cafes-title': {en:"Best Cafés in Hanoi for Coffee, Work & Quiet Mornings (2026)", vn:"Những quán cà phê đẹp ở Hà Nội để uống cà phê, làm việc và tận hưởng buổi sáng yên tĩnh (2026)", zh:"河内最适合咖啡、办公与安静早晨的咖啡馆（2026）"},
'cafes-excerpt': {en:"Discover Hanoi's best cafés for egg coffee, remote work, quiet mornings, and hidden local atmosphere — from Old Quarter gems to calm cafés near Văn Miếu.", vn:"Khám phá những quán cà phê đáng ghé ở Hà Nội cho cà phê trứng, làm việc từ xa, buổi sáng yên tĩnh và không khí địa phương — từ Phố Cổ đến khu Văn Miếu.", zh:"探索河内最值得去的咖啡馆，适合蛋咖啡、远程办公、安静早晨和本地氛围——从老城区宝藏咖啡馆到文庙附近的安静小店。"},
'cafes-meta': {en:"📅 May 1, 2026 · ☕ 6 min read", vn:"📅 1 Tháng 5, 2026 · ☕ Đọc 6 phút", zh:"📅 2026年5月1日 · ☕ 阅读约6分钟"},

'blog-card-3days-category': {en:"📌 ITINERARY", vn:"📌 LỊCH TRÌNH", zh:"📌 行程指南"},
'blog-card-3days-title': {en:"3 Days in Hanoi: A Complete Itinerary (2026)", vn:"3 ngày ở Hà Nội: Lịch trình đầy đủ (2026)", zh:"河内 3 日游：完整行程指南（2026）"},
'blog-card-3days-excerpt': {en:"3 days in Hanoi itinerary: what to eat, where to go, and how to choose between Old Quarter and quiet local neighborhoods.", vn:"Lịch trình 3 ngày ở Hà Nội: ăn gì, đi đâu và cách chọn giữa Phố Cổ và khu dân cư yên tĩnh.", zh:"河内 3 日行程：吃什么、去哪里，以及如何在老城区和安静本地社区之间做选择。"},
'blog-card-3days-meta': {en:"📅 April 15, 2026 · ☕ 7 min read", vn:"📅 15 Tháng 4, 2026 · ☕ Đọc 7 phút", zh:"📅 2026年4月15日 · ☕ 阅读约7分钟"},

'blog-card-train-category': {en:"🚂 LOCAL GUIDE", vn:"🚂 HƯỚNG DẪN ĐỊA PHƯƠNG", zh:"🚂 本地指南"},
'blog-card-train-title': {en:"Train Street Hanoi: Full Guide (2026)", vn:"Train Street Hà Nội: Hướng dẫn đầy đủ (2026)", zh:"河内火车街完整指南（2026）"},
'blog-card-train-excerpt': {en:"Complete guide to Train Street Hanoi: train times, safety tips, how to visit without crowds, and where to stay nearby.", vn:"Hướng dẫn đầy đủ về Train Street Hà Nội: giờ tàu, mẹo an toàn, cách đi tránh đông và nơi ở gần đó.", zh:"河内火车街完整指南：列车时间、安全建议、避开人群的方法以及附近住宿推荐。"},
'blog-card-train-meta': {en:"📅 April 22, 2026 · ☕ 6 min read", vn:"📅 22 Tháng 4, 2026 · ☕ Đọc 6 phút", zh:"📅 2026年4月22日 · ☕ 阅读约6分钟"},

'blog-card-stay-category': {en:"🏠 ACCOMMODATION", vn:"🏠 CHỖ Ở", zh:"🏠 住宿指南"},
'blog-card-stay-title': {en:"Where to Stay in Hanoi: Old Quarter vs Local Areas", vn:"Nên ở đâu tại Hà Nội: Phố Cổ hay khu địa phương", zh:"河内住哪里：老城区 vs 本地社区"},
'blog-card-stay-excerpt': {en:"Not sure where to stay? Compare Old Quarter vs quieter local areas to find your perfect match.", vn:"Chưa biết nên ở đâu? So sánh Phố Cổ với khu địa phương yên tĩnh hơn để chọn nơi phù hợp.", zh:"不知道该住哪里？对比老城区和更安静的本地社区，找到最适合您的住宿。"},
'blog-card-stay-meta': {en:"📅 April 29, 2026 · ☕ 8 min read", vn:"📅 29 Tháng 4, 2026 · ☕ Đọc 8 phút", zh:"📅 2026年4月29日 · ☕ 阅读约8分钟"},

'subscribe-title': {en:"📬 New posts, straight to your inbox", vn:"📬 Bài viết mới gửi thẳng đến hộp thư của bạn", zh:"📬 最新文章直达您的邮箱"},
'subscribe-text': {en:"Get Hanoi travel tips and new blog updates. No spam. Unsubscribe anytime.", vn:"Nhận mẹo du lịch Hà Nội và cập nhật bài viết mới. Không spam. Hủy đăng ký bất cứ lúc nào.", zh:"获取河内旅行建议和博客更新。不发送垃圾邮件，可随时取消订阅。"},
'subscribe-button': {en:"Subscribe →", vn:"Đăng ký →", zh:"订阅 →"},
'subscribe-footer': {en:"Powered by Mailchimp (free up to 500 subscribers)", vn:"Được hỗ trợ bởi Mailchimp", zh:"由 Mailchimp 提供支持（免费支持最多 500 位订阅者）"},
'subscribe-email-placeholder': {en:"Your email address", vn:"Địa chỉ email của bạn", zh:"您的邮箱地址"},

'guest-info-title': {en:"Your Information", vn:"Thông tin của bạn", zh:"您的信息"},
'tease-tag': {en:"A Glimpse Inside", vn:"Một góc nhìn bên trong", zh:"内部一瞥"},
'tease-sub': {en:"Handcrafted spaces designed to feel lived-in and effortlessly beautiful.", vn:"Những không gian được chăm chút thủ công, có cảm giác sống động và đẹp tự nhiên.", zh:"精心打造的空间，既有生活气息，又自然舒适。"},
'tease-title': {en:"A peek <em>inside</em>", vn:"Một góc nhìn <em>bên trong</em>", zh:"看看<em>内部</em>"},

'h-gal-tag': {en:"Gallery", vn:"Thư viện ảnh", zh:"图片集"},
'h-faq-tag': {en:"FAQ", vn:"Câu hỏi thường gặp", zh:"常见问题"},
'h-reviews-tag': {en:"Guest Reviews", vn:"Đánh giá của khách", zh:"住客评价"},
'h-reviews-sub': {en:"Rated 4.9★ — Loved by guests from around the world.", vn:"Được đánh giá 4.9★ — Yêu thích bởi khách từ khắp nơi trên thế giới.", zh:"评分 4.9★ —— 深受世界各地住客喜爱。"},
'h-gal-title': {en:"A look<br><em>inside</em>", vn:"Một góc nhìn<br><em>bên trong</em>", zh:"看看<br><em>内部</em>"},
'h-faq-title': {en:"Frequently Asked<br><em>Questions</em>", vn:"Câu hỏi<br><em>thường gặp</em>", zh:"常见<br><em>问题</em>"},
'h-reviews-title': {en:"What <em>Guests Say</em>", vn:"Khách <em>nói gì</em>", zh:"<em>住客评价</em>"},

'oq-summary-1': {en:"In the heart of Old Quarter", vn:"Giữa lòng Phố Cổ", zh:"位于老城区中心"},
'oq-summary-2': {en:"Walk to everything", vn:"Đi bộ đến mọi nơi", zh:"步行即可到达各处"},
'oq-summary-3': {en:"Rooftop terrace & BBQ", vn:"Sân thượng & BBQ", zh:"屋顶露台与烧烤区"},
'oq-summary-4': {en:"Best for groups & social travelers", vn:"Phù hợp cho nhóm & du khách thích giao lưu", zh:"适合团体与喜欢社交的旅客"},

'oq-gal-tag': {en:"Gallery", vn:"Thư viện ảnh", zh:"图片集"},
'sec-reviews': {en:"Guest Reviews", vn:"Đánh giá của khách", zh:"住客评价"},
'reviews-sub': {en:"Genuine words from people who've called MiaCasa home.", vn:"Những chia sẻ chân thật từ những vị khách từng xem MiaCasa như ngôi nhà của mình.", zh:"来自曾把 MiaCasa 当作家的住客的真实分享。"},
'reviews-loadmore': {en:"Load more reviews", vn:"Xem thêm đánh giá", zh:"查看更多评价"},
'oq-gal-title': {en:"A look<br><em>inside</em>", vn:"Một góc nhìn<br><em>bên trong</em>", zh:"看看<br><em>内部</em>"},
'reviews-title': {en:"Stories from our <em>guests</em>", vn:"Câu chuyện từ <em>khách của chúng tôi</em>", zh:"来自<em>住客</em>的故事"},
/* ── AUTHOR EXPERTISE SECTION ────────────────────────────────────── */

'author-title': {
  en: 'Written by the MiaCasa Team',
  vn: 'Được viết bởi Đội ngũ MiaCasa',
  zh: '由 MiaCasa 团队撰写'
},
'author-desc': {
  en: 'Local hosts in Hanoi who have welcomed hundreds of guests. We share neighborhood recommendations, cafés, and honest travel advice from years of living in and exploring the city.',
  vn: 'Chủ nhà địa phương tại Hà Nội đã chào đón hàng trăm du khách. Chúng tôi chia sẻ các gợi ý về khu phố, quán cà phê và lời khuyên du lịch chân thật từ nhiều năm sống và khám phá thành phố.',
  zh: '河内本地房东，已接待数百位客人。我们分享社区推荐、咖啡馆和真实的旅行建议，来自多年在河内生活和探索的经验。'
},
'author-blog': {
  en: 'Read more from us',
  vn: 'Đọc thêm từ chúng tôi',
  zh: '阅读更多'
},
'author-homestay': {
  en: 'Stay with us',
  vn: 'Ở cùng chúng tôi',
  zh: '入住我们的民宿'
},
'related-posts-title': {
  en: '📖 You might also like',
  vn: '📖 Có thể bạn cũng thích',
  zh: '📖 你可能也喜欢'
},
'related-train': {
  en: 'Train Street Hanoi: Full Guide',
  vn: 'Train Street Hà Nội: Hướng Dẫn Chi Tiết',
  zh: '河内火车街：完整指南'
},
'related-3days': {
  en: '3 Days in Hanoi: Complete Itinerary',
  vn: '3 Ngày Ở Hà Nội: Lịch Trình Chi Tiết',
  zh: '河内3日游：完整行程'
},
'related-stay': {
  en: 'Where to Stay in Hanoi: Old Quarter vs Local',
  vn: 'Nên Ở Đâu Ở Hà Nội: Phố Cổ Hay Khu Yên Tĩnh',
  zh: '河内住哪里：老城区 vs 本地社区'
},
'related-cafes': {
  en: 'Best Cafés in Hanoi for Coffee & Work',
  vn: 'Quán Cà Phê Đẹp Nhất Hà Nội Để Làm Việc',
  zh: '河内最佳咖啡馆：咖啡与工作'
},
'related-oq': {
  en: 'Hanoi Old Quarter Guide: Streets, Food & Tips',
  vn: 'Hướng Dẫn Phố Cổ Hà Nội: Đường Phố, Ẩm Thực & Mẹo',
  zh: '河内老城区指南：街道、美食与贴士'
},
'related-food': {
  en: 'What to Eat in Hanoi: 10 Dishes You Can\'t Miss',
  vn: 'Ăn Gì Ở Hà Nội: 10 Món Không Thể Bỏ Lỡ',
  zh: '河内吃什么：10种不容错过的美食'
},
/* ── BLOG - 3 DAYS IN HANOI - NEW TRANSLATIONS ──────────────────── */

'blog-3days-hero-caption': {
  en: "Hanoi's highlights in 3 days: Hoàn Kiếm Lake, Văn Miếu, Train Street, and West Lake",
  vn: 'Những điểm nhấn của Hà Nội trong 3 ngày: Hồ Hoàn Kiếm, Văn Miếu, Phố Tàu, và Hồ Tây',
  zh: '河内3日精华：还剑湖、文庙、火车街和西湖'
},
'blog-3days-toc-title': {
  en: '📚 In this itinerary:',
  vn: '📚 Trong lịch trình này:',
  zh: '📚 此行程包含：'
},
'blog-3days-toc-day1': {
  en: 'Day 1: Old Quarter & Street Food',
  vn: 'Ngày 1: Phố Cổ & Ẩm Thực Đường Phố',
  zh: '第1天：老城区与街头美食'
},
'blog-3days-toc-day2': {
  en: 'Day 2: Culture, Cafés & Train Street',
  vn: 'Ngày 2: Văn Hóa, Cà Phê & Phố Tàu',
  zh: '第2天：文化、咖啡馆与火车街'
},
'blog-3days-toc-day3': {
  en: 'Day 3: West Lake & Slow Hanoi',
  vn: 'Ngày 3: Hồ Tây & Hà Nội Chậm Rãi',
  zh: '第3天：西湖与慢河内'
},
'blog-3days-toc-veg': {
  en: '🌱 Vegetarian Options',
  vn: '🌱 Lựa Chọn Chay',
  zh: '🌱 素食选择'
},
'blog-3days-toc-stay': {
  en: 'Where to Stay',
  vn: 'Nơi Ở',
  zh: '住宿推荐'
},
'blog-3days-toc-faq': {
  en: 'FAQs',
  vn: 'Câu Hỏi Thường Gặp',
  zh: '常见问题'
},
  'auto-blog-hanoi-3-days-001': {en:"Home", vn:"Trang chủ", zh:"首页"},
'auto-blog-hanoi-3-days-002': {en:"Blog", vn:"Blog", zh:"博客"},
'auto-blog-hanoi-3-days-003': {en:"3 Days in Hanoi Itinerary", vn:"Lịch Trình 3 Ngày Ở Hà Nội", zh:"河内三日行程"},
'auto-blog-hanoi-3-days-004': {en:"📍 HANOI TRAVEL GUIDE", vn:"📍 CẨM NANG DU LỊCH HÀ NỘI", zh:"📍 河内旅行指南"},
'auto-blog-hanoi-3-days-005': {en:"3 Days in Hanoi: A Complete Itinerary (2026)", vn:"Lịch Trình 3 Ngày Ở Hà Nội (2026)", zh:"河内三日游：完整行程指南（2026）"},
'auto-blog-hanoi-3-days-006': {en:"📅 April 15, 2026 · ☕ 7 min read · ✍️ By MiaCasa Team", vn:"📅 15 Tháng 4, 2026 · ☕ 7 phút đọc · ✍️ MiaCasa Team", zh:"📅 2026年4月15日 · ☕ 阅读约7分钟 · ✍️ MiaCasa团队"},
'auto-blog-hanoi-3-days-007': {en:"Hoàn Kiếm Lake at sunset — the perfect way to end a day in Hanoi", vn:"Hồ Hoàn Kiếm lúc hoàng hôn — cách hoàn hảo để kết thúc một ngày ở Hà Nội", zh:"黄昏时分的还剑湖 —— 结束河内一天的完美方式"},
'auto-blog-hanoi-3-days-008': {en:"Planning 3 days in Hanoi? This itinerary helps you experience the city beyond the usual tourist checklist—with local food, quieter neighborhoods, and places that make Hanoi memorable.", vn:"Đi Hà Nội 3 ngày nên làm gì? Lịch trình này giúp bạn trải nghiệm thành phố không theo danh sách thông thường—với ẩm thực địa phương, những khu phố yên tĩnh, và những nơi khiến Hà Nội đáng nhớ.", zh:"计划在河内待三天？这份行程将带你体验超越常规打卡景点的河内，包括当地美食、安静社区以及让河内令人难忘的地方。"},
'auto-blog-hanoi-3-days-009': {en:"Day 1: Old Quarter, Street Food, and First Impressions", vn:"Ngày 1: Phố Cổ, Ẩm Thực Đường Phố và Ấn Tượng Đầu Tiên", zh:"第1天：老城区、街头美食与初印象"},
'auto-blog-hanoi-3-days-010': {en:"Start your trip in the heart of the chaotic, colorful historic center of Hanoi—the Old Quarter.", vn:"Bắt đầu chuyến đi tại trung tâm Phố Cổ hỗn độn, đầy màu sắc của Hà Nội.", zh:"从河内充满色彩与活力的历史中心——老城区开始你的旅程。"},
'auto-blog-hanoi-3-days-011': {en:"Morning", vn:"Buổi sáng", zh:"早晨"},
'auto-blog-hanoi-3-days-012': {en:"Begin at Hoàn Kiếm Lake (Lake of the Restored Sword) before the crowds arrive", vn:"Bắt đầu tại Hồ Hoàn Kiếm từ sớm, trước khi đông đúc", zh:"在人群到来之前，先前往还剑湖开始一天"},
'auto-blog-hanoi-3-days-013': {en:"Walk across the red Thê Húc Bridge to Ngọc Sơn Temple", vn:"Đi qua Cầu Thê Húc màu đỏ sang Đền Ngọc Sơn", zh:"走过红色的栖旭桥前往玉山祠"},
'auto-blog-hanoi-3-days-014': {en:"Then wander into the maze of 36 ancient streets, each named after the trade once practiced there", vn:"Sau đó, đi bộ vào mê cung 36 phố phường — mỗi con phố từng gắn với một nghề thủ công riêng", zh:"随后漫步进入老城区36条古街的迷宫，每条街都以曾经的行业命名"},
'auto-blog-hanoi-3-days-015': {en:"Afternoon", vn:"Buổi chiều", zh:"下午"},
'auto-blog-hanoi-3-days-016': {en:"Continue exploring the Old Quarter's narrow alleyways", vn:"Tiếp tục khám phá những con ngõ nhỏ ở Phố Cổ", zh:"继续探索老城区狭窄的小巷"},
'auto-blog-hanoi-3-days-017': {en:"Sit at a sidewalk café and watch daily life unfold—scooters, street vendors, and local conversations", vn:"Ngồi cà phê vỉa hè, quan sát cuộc sống hàng ngày: xe máy, người bán hàng rong, những câu chuyện thường nhật", zh:"坐在街边咖啡馆，看着河内日常生活展开——摩托车、小贩与街头交谈"},
'auto-blog-hanoi-3-days-018': {en:"Visit Đồng Xuân Market for a glimpse of local commerce", vn:"Ghế Chợ Đồng Xuân để cảm nhận không khí buôn bán địa phương", zh:"前往同春市场，感受当地商业氛围"},
'auto-blog-hanoi-3-days-019': {en:"What to Eat Today", vn:"Ăn gì hôm nay", zh:"今天吃什么"},
'auto-blog-hanoi-3-days-020': {en:"Phở for breakfast — find a busy street stall, not a restaurant", vn:"Phở bữa sáng — tìm hàng đông khách, không phải nhà hàng sang", zh:"早餐来一碗河粉（Phở）——找人气街边摊，而不是餐厅"},
'auto-blog-hanoi-3-days-021': {en:"Bánh mì for lunch — the perfect sandwich", vn:"Bánh mì bữa trưa — món sandwich hoàn hảo", zh:"午餐吃越南法棍（Bánh mì）——完美的三明治"},
'auto-blog-hanoi-3-days-022': {en:"Bún chả for dinner — grilled pork with noodles (what Obama ate with Bourdain)", vn:"Bún chả bữa tối — món Obama từng ăn với Bourdain", zh:"晚餐尝试烤肉米粉（Bún chả）——奥巴马与波登一起吃过的美食"},
'auto-blog-hanoi-3-days-023': {en:"Evening", vn:"Tối", zh:"晚上"},
'auto-blog-hanoi-3-days-024': {en:"Walk through the night market (weekends only) or find a rooftop café with lake views. The Old Quarter glows at night.", vn:"Đi bộ qua chợ đêm (cuối tuần) hoặc ngồi cà phê tầng thượng nhìn ra hồ. Phố Cổ về đêm rất đẹp.", zh:"逛周末夜市，或找一家可俯瞰湖景的屋顶咖啡馆。老城区的夜晚格外迷人。"},
'auto-blog-hanoi-3-days-025': {en:"Day 2: Culture, Cafés, and Train Street", vn:"Ngày 2: Văn Hóa, Cà Phê và Train Street", zh:"第2天：文化、咖啡馆与火车街"},
'auto-blog-hanoi-3-days-026': {en:"Slow things down on your second day. This is when Hanoi starts to feel real.", vn:"Chậm lại một chút vào ngày thứ hai. Đây là lúc Hà Nội bắt đầu trở nên chân thật.", zh:"第二天放慢脚步，这时你会开始感受到真正的河内。"},
'auto-blog-hanoi-3-days-027': {en:"Morning: Văn Miếu Area", vn:"Buổi sáng: Khu Văn Miếu", zh:"早晨：文庙区域"},
'auto-blog-hanoi-3-days-028': {en:"Visit Văn Miếu – Quốc Tử Giám (Temple of Literature), Vietnam's first university — one of Hanoi's most peaceful sites", vn:"Tham quan Văn Miếu – Quốc Tử Giám — trường đại học đầu tiên của Việt Nam, một trong những nơi yên bình nhất Hà Nội", zh:"参观文庙国子监——越南第一所大学，也是河内最宁静的地方之一"},
'auto-blog-hanoi-3-days-029': {en:"Afterward, walk through the surrounding streets. This area feels calmer, more residential, and genuinely local", vn:"Sau đó, đi bộ quanh các con phố lân cận. Khu vực này yên tĩnh và mang đậm chất địa phương", zh:"之后漫步周边街道，这一区域更安静、更有社区感，也更贴近当地生活"},
'auto-blog-hanoi-3-days-030': {en:"Stop at a small café that doesn't cater to tourists", vn:"Dừng chân tại một quán cà phê nhỏ, không phải nơi đông khách du lịch", zh:"在一家不以游客为主的小咖啡馆停下来休息"},
'auto-blog-hanoi-3-days-031': {en:"💡 Tip: MiaCasa Hanoi is located in this neighborhood — you can see what local life actually looks like.", vn:"💡 Gợi ý: MiaCasa Hanoi nằm ngay trong khu phố này — bạn sẽ thấy cuộc sống địa phương thực sự.", zh:"💡 小贴士：MiaCasa Hanoi 就位于这个社区，你能真正体验当地人的生活。"},
'auto-blog-hanoi-3-days-032': {en:"Afternoon: Train Street", vn:"Buổi chiều: Train Street (Phố Tàu)", zh:"下午：火车街"},
'auto-blog-hanoi-3-days-033': {en:"Head to one of Hanoi's most unique attractions — Train Street, where trains pass just inches from homes and cafés.", vn:"Đến một trong những địa điểm độc đáo nhất Hà Nội — Phố Tàu, nơi tàu hỏa chạy sát ngay bên những ngôi nhà và quán cà phê.", zh:"前往河内最独特的景点之一——火车街，火车从居民住宅和咖啡馆旁几乎贴身驶过。"},
'auto-blog-hanoi-3-days-034': {en:"Read our full guide to Train Street Hanoi →", vn:"Đọc hướng dẫn chi tiết về Phố Tàu Hà Nội →", zh:"阅读我们的河内火车街完整指南 →"},
'auto-blog-hanoi-3-days-035': {en:"How to experience it safely:", vn:"Cách trải nghiệm an toàn:", zh:"如何安全体验："},
'auto-blog-hanoi-3-days-036': {en:"Find a café along the tracks, order a drink, and wait", vn:"Chọn một quán cà phê dọc đường ray, gọi đồ uống và chờ", zh:"在铁轨旁找一家咖啡馆，点一杯饮料，然后等待"},
'auto-blog-hanoi-3-days-037': {en:"Trains typically pass around late afternoon and evening (ask locals for exact times)", vn:"Tàu thường chạy vào chiều tối (hỏi người địa phương để biết giờ chính xác)", zh:"火车通常在傍晚和晚上经过（可向当地人询问准确时间）"},
'auto-blog-hanoi-3-days-038': {en:"Follow every instruction from café owners — they know when it's safe", vn:"Làm theo mọi hướng dẫn từ chủ quán — họ biết khi nào an toàn", zh:"遵循咖啡馆老板的所有指示——他们最清楚何时安全"},
'auto-blog-hanoi-3-days-039': {en:"📅 Trains typically run at 4:00pm, 7:00pm, and 9:00pm, but schedules change. Ask a local café owner—they always know.", vn:"📅 Tàu thường chạy lúc 16:00, 19:00 và 21:00, nhưng lịch có thể thay đổi. Hãy hỏi chủ quán cà phê địa phương — họ luôn biết.", zh:"📅 火车通常在16:00、19:00和21:00运行，但时间会变化。询问当地咖啡馆老板，他们最清楚。"},
'auto-blog-hanoi-3-days-040': {en:"When the train passes, everything changes for a few seconds. Then life continues as if nothing happened. It's unforgettable.", vn:"Khi tàu chạy qua, mọi thứ thay đổi trong vài giây — rồi lại trở lại bình thường. Đó là trải nghiệm khó quên.", zh:"火车经过时，一切在几秒钟内改变，然后生活又恢复如常。这是难以忘记的体验。"},
'auto-blog-hanoi-3-days-041': {en:"📍 From MiaCasa Hanoi, it's a 15-minute walk. Many guests visit at 6am or 8pm to avoid crowds.", vn:"📍 Từ MiaCasa Hanoi, đi bộ 15 phút. Nhiều khách của chúng tôi đến lúc 6h sáng hoặc 8h tối để tránh đông đúc.", zh:"📍 从 MiaCasa Hanoi 步行15分钟即可到达。许多客人选择早上6点或晚上8点前往以避开人群。"},
'auto-blog-hanoi-3-days-042': {en:"Evening", vn:"Tối", zh:"晚上"},
'auto-blog-hanoi-3-days-043': {en:"Take a Grab to Hồ Tây (West Lake) for sunset. Walk along the water, find a lakeside café, and enjoy Hanoi at its calmest.", vn:"Đi Grab ra Hồ Tây ngắm hoàng hôn. Đi bộ dọc hồ, tìm quán cà phê ven hồ, và tận hưởng Hà Nội lúc yên tĩnh nhất.", zh:"乘坐Grab前往西湖看日落。沿湖散步，找一家湖边咖啡馆，享受最宁静的河内。"},
'auto-blog-hanoi-3-days-044': {en:"Dinner: Try chả cá (turmeric fish with dill) or revisit a favorite street food spot.", vn:"Bữa tối: Thử chả cá hoặc quay lại món ăn đường phố yêu thích.", zh:"晚餐：尝试炸鱼饼（莳萝黄姜鱼）或回到你喜欢的小吃摊。"},
'auto-blog-hanoi-3-days-045': {en:"Day 3: West Lake and a Slower Hanoi", vn:"Ngày 3: Hồ Tây và Hà Nội Chậm Rãi", zh:"第3天：西湖与慢节奏河内"},
'auto-blog-hanoi-3-days-046': {en:"By the third day, you'll want to slow down. That's exactly the right instinct.", vn:"Đến ngày thứ ba, bạn sẽ muốn chậm lại. Đó chính xác là cảm giác đúng.", zh:"到了第三天，你会想放慢节奏，这正是正确的感觉。"},
'auto-blog-hanoi-3-days-047': {en:"Morning", vn:"Buổi sáng", zh:"上午"},
'auto-blog-hanoi-3-days-048': {en:"Head to Hồ Tây (West Lake) — Hanoi's largest lake, surrounded by quiet neighborhoods", vn:"Ra Hồ Tây — hồ lớn nhất Hà Nội, quanh là những khu phố yên tĩnh", zh:"前往西湖——河内最大的湖，周围是安静的居民区"},
'auto-blog-hanoi-3-days-049': {en:"Visit Trấn Quốc Pagoda, the oldest Buddhist temple in Hanoi (1,500 years old)", vn:"Thăm Chùa Trấn Quốc, ngôi chùa Phật giáo cổ nhất Hà Nội (hơn 1.500 năm tuổi)", zh:"参观镇国寺——河内最古老的佛教寺庙（距今约1500年历史）"},
'auto-blog-hanoi-3-days-050': {en:"Walk along the water or cycle the lakeside path", vn:"Đi bộ dọc hồ hoặc đạp xe quanh bờ", zh:"沿湖散步或骑行湖边道路"},
'auto-blog-hanoi-3-days-051': {en:"Stop at a café overlooking the lake — order cà phê trứng (egg coffee) if you haven't yet", vn:"Dừng ở quán cà phê ven hồ — gọi cà phê trứng nếu chưa thử", zh:"在湖景咖啡馆停下——如果还没试过，可以点一杯蛋咖啡"},
'auto-blog-hanoi-3-days-052': {en:"Afternoon", vn:"Buổi chiều", zh:"下午"},
'auto-blog-hanoi-3-days-053': {en:"Return to the city center at your own pace", vn:"Quay lại trung tâm thành phố theo nhịp của riêng bạn", zh:"按自己的节奏返回市中心"},
'auto-blog-hanoi-3-days-054': {en:"Do some light shopping — look for silk, handicrafts, or local art", vn:"Mua sắm nhẹ — lụa, đồ thủ công, hoặc tranh nghệ thuật", zh:"轻松购物——寻找丝绸、手工艺品或当地艺术品"},
'auto-blog-hanoi-3-days-055': {en:"Revisit any streets or cafés that caught your attention earlier", vn:"Quay lại những con phố hoặc quán cà phê yêu thích", zh:"重访之前让你印象深刻的街道或咖啡馆"},
'auto-blog-hanoi-3-days-056': {en:"Try any food you missed (bánh cuốn, bún riêu, or chè for dessert)", vn:"Thử món ăn còn thiếu (bánh cuốn, bún riêu, hoặc chè)", zh:"尝试之前错过的美食（如越南蒸粉卷、蟹汤粉或甜品）"},
'auto-blog-hanoi-3-days-057': {en:"Evening", vn:"Tối", zh:"晚上"},
'auto-blog-hanoi-3-days-058': {en:"End your trip with a relaxed dinner — no rushing, no schedule. Just enjoy Hanoi one last time.", vn:"Kết thúc chuyến đi bằng bữa tối thư giãn — không vội vàng. Chỉ là tận hưởng Hà Nội lần cuối.", zh:"用一顿轻松的晚餐结束旅程——不赶时间，只是最后一次享受河内。"},
'auto-blog-hanoi-3-days-059': {en:"💡 Consider a local cooking class or water puppet show if time allows.", vn:"💡 Cân nhắc tham gia lớp học nấu ăn địa phương hoặc xem múa rối nước nếu có thời gian.", zh:"💡 如果时间允许，可以考虑参加烹饪课程或观看水上木偶戏。"},
'auto-blog-hanoi-3-days-060': {en:"Where to Stay During Your 3 Days in Hanoi", vn:"Nên Ở Đâu Trong 3 Ngày Ở Hà Nội?", zh:"在河内3天应该住哪里"},
'auto-blog-hanoi-3-days-061': {en:"Where you stay shapes your entire experience. Choose based on your travel style:", vn:"Chỗ ở ảnh hưởng rất nhiều đến trải nghiệm của bạn. Lựa chọn dựa trên phong cách du lịch:", zh:"住宿会影响你的整体体验，请根据旅行风格选择："},
'auto-blog-hanoi-3-days-062': {en:"🛵 Want to be in the center of everything?", vn:"🛵 Muốn ở ngay trung tâm?", zh:"🛵 想住在一切的中心？"},
'auto-blog-hanoi-3-days-063': {en:"Choose MiaCasa Old Quarter", vn:"Chọn MiaCasa Old Quarter", zh:"选择 MiaCasa Old Quarter"},
'auto-blog-hanoi-3-days-064': {en:"— a full apartment in the heart of Hoàn Kiếm, steps from the lake and nightlife. Best for groups and travelers who want energy at their doorstep.", vn:"— toàn bộ căn hộ giữa lòng Hoàn Kiếm, đi bộ ra hồ và phố đi bộ. Phù hợp cho nhóm và ai thích năng lượng sôi động.", zh:"——位于还剑郡中心的整套公寓，步行可达湖泊和夜生活区。适合喜欢热闹的团体旅客。"},
'auto-blog-hanoi-3-days-065': {en:"🌿 Prefer a quieter, more local experience?", vn:"🌿 Thích yên tĩnh, gần gũi địa phương?", zh:"🌿 更喜欢安静、当地化的体验？"},
'auto-blog-hanoi-3-days-066': {en:"Choose MiaCasa Hanoi", vn:"Chọn MiaCasa Hanoi", zh:"选择 MiaCasa Hanoi"},
'auto-blog-hanoi-3-days-067': {en:"— three private rooms near Văn Miếu and Train Street. A calm, residential neighborhood that's still a quick ride from everything. Best for couples, solo travelers, and anyone who needs good sleep.", vn:"— ba phòng riêng gần Văn Miếu và Train Street. Khu phố yên tĩnh, vẫn gần mọi thứ. Phù hợp cho cặp đôi, khách solo, hoặc ai cần ngủ ngon.", zh:"——靠近文庙和火车街的三间私人房间。安静的住宅区，但交通便利。适合情侣、独行旅客以及需要良好睡眠的人。"},
'auto-blog-hanoi-3-days-068': {en:"Final Thoughts", vn:"Lời Kết", zh:"最终总结"},
'auto-blog-hanoi-3-days-069': {en:"Three days in Hanoi is not about doing everything.", vn:"Ba ngày ở Hà Nội không phải để làm hết mọi thứ.", zh:"在河内的三天并不是为了做完所有事情。"},
'auto-blog-hanoi-3-days-070': {en:"It's about finding a rhythm — between busy streets and quiet moments, between food and conversation, between chaos and calm.", vn:"Mà là để tìm nhịp điệu riêng — giữa phố đông và khoảnh khắc yên tĩnh, giữa ẩm thực và câu chuyện, giữa xô bồ và bình yên.", zh:"而是找到一种节奏——在繁忙街道与安静时刻之间，在美食与对话之间，在喧嚣与平静之间。"},
'auto-blog-hanoi-3-days-071': {en:"That's what makes the city memorable.", vn:"Đó là điều khiến Hà Nội đáng nhớ.", zh:"这正是让这座城市令人难忘的原因。"},
'auto-blog-hanoi-3-days-072': {en:"Enjoy your trip. And if you stay with us, we'd love to host you.", vn:"Chúc bạn có chuyến đi tuyệt vời. Và nếu ở cùng chúng tôi, chúng tôi rất vui được đón bạn.", zh:"祝你旅途愉快。如果你选择入住我们这里，我们非常欢迎你。"},
'auto-blog-hanoi-3-days-073': {en:"🏠 Hosted by locals in Hanoi", vn:"🏠 Do người địa phương làm chủ", zh:"🏠 由河内本地人运营"},
'auto-blog-hanoi-3-days-074': {en:"⭐ 4.9★ from 200+ guests", vn:"⭐ 4.9★ từ hơn 200 khách", zh:"⭐ 200多位客人评分4.9★"},
'auto-blog-hanoi-3-days-075': {en:"💰 Direct booking = better rate", vn:"💰 Đặt trực tiếp = giá tốt hơn", zh:"💰 直接预订 = 更优惠价格"},
'auto-blog-hanoi-3-days-076': {en:"← Back to all blog posts", vn:"← Quay lại tất cả bài viết", zh:"← 返回所有博客文章"},
// 3 Days Itinerary - Extended
'auto-blog-hanoi-3-days-085': {
  en: 'Hanoi is a city of contrasts. Modern skyscrapers stand alongside ancient temples. Bustling markets coexist with peaceful lakes. The energy of the streets is matched only by the tranquility of its green spaces. Three days is enough time to experience the best of what Hanoi has to offer, provided you plan wisely.',
  vn: 'Hà Nội là thành phố của những sự tương phản. Nhà cao tầng hiện đại bên cạnh những ngôi chùa cổ kính. Khu chợ nhộn nhịp bên cạnh những hồ nước yên bình. Năng lượng của đường phố chỉ được sánh bằng sự tĩnh lặng của không gian xanh. Ba ngày là đủ để trải nghiệm những điều tốt nhất mà Hà Nội mang lại, nếu bạn lên kế hoạch hợp lý.',
  zh: '河内是一座充满对比的城市。现代摩天大楼与古老寺庙并存。繁华市场与宁静湖泊共存。街道的活力与绿色空间的宁静相得益彰。如果规划得当，三天时间足够体验河内最精华的部分。'
},
'auto-blog-hanoi-3-days-086': {
  en: 'Begin at Hoàn Kiếm Lake (Lake of the Restored Sword) before the crowds arrive. The lake is the spiritual heart of Hanoi, and early morning is the best time to experience its peaceful beauty. Walk across the red Thê Húc Bridge to Ngọc Sơn Temple, a small but significant temple located on an island in the lake. The temple is dedicated to the military leader Trần Hưng Đạo and offers a glimpse into Vietnam\'s rich history.',
  vn: 'Bắt đầu tại Hồ Hoàn Kiếm từ sớm, trước khi đông đúc. Hồ là trái tim tinh thần của Hà Nội, và buổi sáng sớm là thời điểm tốt nhất để cảm nhận vẻ đẹp yên bình của nó. Đi qua Cầu Thê Húc màu đỏ sang Đền Ngọc Sơn, một ngôi đền nhỏ nhưng quan trọng nằm trên một hòn đảo trong hồ. Đền thờ danh tướng Trần Hưng Đạo và mang đến cái nhìn về lịch sử phong phú của Việt Nam.',
  zh: '在人群到来之前，先前往还剑湖开始一天。还剑湖是河内的精神中心，清晨是体验其宁静之美的最佳时间。走过红色的栖旭桥前往玉山祠，这座位于湖中小岛上的小巧但重要的寺庙。寺庙供奉着军事领袖陈兴道，让人一窥越南丰富的历史。'
},
'auto-blog-hanoi-3-days-087': {
  en: 'These streets form the backbone of the Old Quarter and are a living museum of Hanoi\'s commercial history. The names are still visible on street signs — Hàng Bạc (Silver Street), Hàng Gai (Silk Street), Hàng Mã (Paper Offerings Street) — and give a sense of what life was like centuries ago.',
  vn: 'Những con phố này là xương sống của Phố Cổ và là bảo tàng sống về lịch sử thương mại của Hà Nội. Tên phố vẫn còn trên biển — Hàng Bạc, Hàng Gai, Hàng Mã — và mang lại cảm giác về cuộc sống hàng thế kỷ trước.',
  zh: '这些街道构成了老城区的主干，也是河内商业历史的活博物馆。街名至今仍保留在路牌上——银街、丝绸街、纸扎街——让人感受到几个世纪前的生活气息。'
},
'auto-blog-hanoi-3-days-088': {
  en: 'The broth should be clear, aromatic, and deeply flavorful. Add fresh herbs, chili, and a squeeze of lime to taste.',
  vn: 'Nước dùng phải trong, thơm và đậm đà. Thêm rau thơm, ớt và một chút chanh tùy khẩu vị.',
  zh: '汤底要清澈、香气浓郁、味道深厚。根据口味加入香草、辣椒和青柠汁。'
},
'auto-blog-hanoi-3-days-089': {
  en: 'This dish consists of grilled pork patties and slices served with rice noodles, fresh herbs, and a tangy dipping sauce. It\'s a Hanoi specialty that has gained international fame.',
  vn: 'Món này gồm thịt nướng và chả ăn với bún, rau thơm và nước chấm chua ngọt. Đây là đặc sản Hà Nội đã nổi tiếng quốc tế.',
  zh: '这道菜包括烤猪肉饼和肉片，配以米粉、新鲜香草和酸甜蘸酱。这是河内特色菜，已享誉国际。'
},
'auto-blog-hanoi-3-days-090': {
  en: 'Slow things down on your second day. This is when Hanoi starts to feel real. The initial excitement of arrival gives way to a deeper appreciation for the city\'s rhythms and hidden corners.',
  vn: 'Chậm lại một chút vào ngày thứ hai. Đây là lúc Hà Nội bắt đầu trở nên chân thật. Sự háo hức ban đầu nhường chỗ cho sự trân trọng sâu sắc hơn đối với nhịp điệu và những góc khuất của thành phố.',
  zh: '第二天放慢脚步，这时你会开始感受到真正的河内。初到时的兴奋让位于对城市节奏和隐秘角落的更深刻欣赏。'
},
'auto-blog-hanoi-3-days-091': {
  en: 'Visit Văn Miếu – Quốc Tử Giám (Temple of Literature), Vietnam\'s first university — one of Hanoi\'s most peaceful sites. The temple complex is a serene oasis in the middle of the city, with ancient trees, tranquil ponds, and well-preserved architecture.',
  vn: 'Tham quan Văn Miếu – Quốc Tử Giám — trường đại học đầu tiên của Việt Nam, một trong những nơi yên bình nhất Hà Nội. Khu di tích là một ốc đảo thanh bình giữa lòng thành phố, với cây cổ thụ, ao tĩnh lặng và kiến trúc được bảo tồn tốt.',
  zh: '参观文庙国子监——越南第一所大学，也是河内最宁静的地方之一。这座寺庙建筑群是城市中心的一片宁静绿洲，有古树、宁静的池塘和保存完好的建筑。'
},
'auto-blog-hanoi-3-days-092': {
  en: 'By the third day, you\'ll want to slow down. That\'s exactly the right instinct. The best way to experience Hanoi is not to rush through it but to let it unfold at its own pace.',
  vn: 'Đến ngày thứ ba, bạn sẽ muốn chậm lại. Đó chính xác là cảm giác đúng. Cách tốt nhất để trải nghiệm Hà Nội không phải là đi vội vã mà là để thành phố tự mở ra theo nhịp của nó.',
  zh: '到了第三天，你会想放慢节奏，这正是正确的感觉。体验河内的最佳方式不是匆忙地穿过它，而是让它以自己的节奏展开。'
},
'auto-blog-hanoi-3-days-093': {
  en: 'Head to Hồ Tây (West Lake) — Hanoi\'s largest lake, surrounded by quiet neighborhoods. The lake is a popular spot for locals who come to exercise, relax, and enjoy the views.',
  vn: 'Ra Hồ Tây — hồ lớn nhất Hà Nội, quanh là những khu phố yên tĩnh. Hồ là điểm đến phổ biến cho người dân đến tập thể dục, thư giãn và ngắm cảnh.',
  zh: '前往西湖——河内最大的湖，周围是安静的居民区。湖是当地人来锻炼、放松和欣赏风景的热门地点。'
},
'auto-blog-hanoi-3-days-094': {
  en: 'Return to the city center at your own pace. Do some light shopping — look for silk, handicrafts, or local art. Revisit any streets or cafés that caught your attention earlier. Try any food you missed (bánh cuốn, bún riêu, or chè for dessert). This is your chance to experience Hanoi without a schedule, allowing the city to reveal itself naturally.',
  vn: 'Quay lại trung tâm thành phố theo nhịp của riêng bạn. Mua sắm nhẹ — lụa, đồ thủ công, hoặc tranh nghệ thuật. Quay lại những con phố hoặc quán cà phê yêu thích. Thử món ăn còn thiếu (bánh cuốn, bún riêu, hoặc chè). Đây là cơ hội để trải nghiệm Hà Nội mà không cần lịch trình, để thành phố tự mở ra một cách tự nhiên.',
  zh: '按自己的节奏返回市中心。轻松购物——寻找丝绸、手工艺品或当地艺术品。重访之前让你印象深刻的街道或咖啡馆。尝试之前错过的美食（如越南蒸粉卷、蟹汤粉或甜品）。这是你无需计划地体验河内的机会，让城市自然地展现自己。'
},
// ── BLOG - 3 DAYS HANOI - DAY 2 FOOD ──────────────────────────

  'auto-blog-hanoi-3-days-095': {
    en: '🍜 What to Eat on Day 2',
    vn: '🍜 Ăn gì ngày thứ 2',
    zh: '🍜 第二天吃什么'
  },
  'auto-blog-hanoi-3-days-096': {
    en: '🍳 Breakfast: Bánh cuốn (steamed rice rolls) — a Hanoi breakfast classic. Thin, delicate rice rolls filled with minced pork and wood ear mushrooms, served with fried shallots and fish sauce.',
    vn: '🍳 Bữa sáng: Bánh cuốn — món ăn sáng kinh điển của Hà Nội. Những cuốn bánh mỏng mịn nhân thịt heo băm và mộc nhĩ, ăn kèm hành phi và nước mắm.',
    zh: '🍳 早餐：越南蒸粉卷（Bánh cuốn）— 河内经典早餐。薄而细腻的米卷包裹着猪肉末和木耳，配以炸葱和鱼露。'
  },
  'auto-blog-hanoi-3-days-097': {
    en: '☕ Mid-morning: Cà phê trứng (egg coffee) at a hidden café — the perfect pick-me-up. Creamy, rich, and surprisingly comforting, this Hanoi specialty is best enjoyed in a quiet corner away from the crowds.',
    vn: '☕ Giữa buổi: Cà phê trứng tại một quán ẩn — thức uống hoàn hảo để tiếp thêm năng lượng. Béo ngậy, đậm đà và dễ chịu, đặc sản Hà Nội này được thưởng thức tốt nhất trong một góc yên tĩnh tránh xa đám đông.',
    zh: '☕ 上午：在隐藏咖啡馆享用蛋咖啡（Cà phê trứng）— 完美的提神饮品。奶香浓郁、口感丰富，这种河内特色最好在远离人群的安静角落享用。'
  },
  'auto-blog-hanoi-3-days-098': {
    en: '🍲 Lunch: Bún riêu (crab noodle soup) — a tangy, tomato-based broth with crab, tofu, and fresh herbs. This lesser-known Hanoi specialty is a favorite among locals and offers a lighter alternative to bún chả or phở.',
    vn: '🍲 Bữa trưa: Bún riêu — nước dùng chua thanh từ cà chua với cua, đậu phụ và rau thơm. Món đặc sản Hà Nội ít được biết đến này được người dân địa phương yêu thích và là lựa chọn nhẹ nhàng hơn so với bún chả hay phở.',
    zh: '🍲 午餐：蟹汤粉（Bún riêu）— 酸甜的番茄汤底配以螃蟹、豆腐和新鲜香草。这道不太为人所知的河内特色菜深受当地人喜爱，是比烤肉米粉或河粉更清淡的选择。'
  },
  'auto-blog-hanoi-3-days-099': {
    en: '🍖 Dinner: Chả cá (turmeric fish with dill) — a Hanoi specialty where fish is grilled at your table with fresh dill and spring onions. The combination of turmeric, dill, and fish is unique to Hanoi and completely unforgettable.',
    vn: '🍖 Bữa tối: Chả cá — đặc sản Hà Nội với cá được nướng ngay tại bàn cùng thì là và hành lá tươi. Sự kết hợp giữa nghệ, thì là và cá độc đáo của Hà Nội và hoàn toàn khó quên.',
    zh: '🍖 晚餐：煎鱼饼（Chả cá）— 河内特色菜，鱼肉在餐桌上与新鲜莳萝和葱一起烤制。姜黄、莳萝和鱼的组合是河内独有的，令人难以忘怀。'
  },

  // ── BLOG - 3 DAYS HANOI - DAY 3 FOOD ──────────────────────────

  'auto-blog-hanoi-3-days-100': {
    en: '🍜 What to Eat on Day 3',
    vn: '🍜 Ăn gì ngày thứ 3',
    zh: '🍜 第三天吃什么'
  },
  'auto-blog-hanoi-3-days-101': {
    en: '🍳 Breakfast: Xôi (sticky rice) with toppings — a hearty way to start your day. Choose from savory options like xôi mặn (with pork, egg, and sausage) or sweet versions with mung bean and coconut.',
    vn: '🍳 Bữa sáng: Xôi — cách bắt đầu ngày mới đầy năng lượng. Chọn từ các lựa chọn mặn như xôi mặn (với thịt, trứng và xúc xích) hoặc các phiên bản ngọt với đậu xanh và dừa.',
    zh: '🍳 早餐：糯米饭（Xôi）— 开始新一天的丰盛方式。选择咸味如猪肉糯米饭（配猪肉、鸡蛋和香肠）或甜味版本配绿豆和椰子。'
  },
  'auto-blog-hanoi-3-days-102': {
    en: '☕ Late morning: Slow coffee by West Lake — sit back, relax, and watch the lake. Hanoi\'s coffee culture is best experienced unhurriedly, and the lakeside cafés offer the perfect setting for reflection.',
    vn: '☕ Cuối buổi sáng: Cà phê bên Hồ Tây — ngồi thư giãn và ngắm nhìn mặt hồ. Văn hóa cà phê Hà Nội được trải nghiệm tốt nhất một cách thư thái, và những quán cà phê ven hồ mang đến khung cảnh hoàn hảo để chiêm nghiệm.',
    zh: '☕ 上午晚些时候：在西湖边享受慢咖啡 — 坐下来放松，欣赏湖景。河内的咖啡文化最好在不慌不忙中体验，湖边的咖啡馆提供了完美的反思场景。'
  },
  'auto-blog-hanoi-3-days-103': {
    en: '🍜 Lunch: Bún bò Nam Bộ (Southern-style beef noodle salad) — a refreshing combination of noodles, beef, herbs, and a sweet-sour dressing. A lighter option that doesn\'t compromise on flavor.',
    vn: '🍜 Bữa trưa: Bún bò Nam Bộ — sự kết hợp tươi mát giữa bún, thịt bò, rau thơm và nước sốt chua ngọt. Một lựa chọn nhẹ nhàng nhưng không kém phần hương vị.',
    zh: '🍜 午餐：南部风味牛肉米粉沙拉（Bún bò Nam Bộ）— 米粉、牛肉、香草和酸甜酱汁的清爽组合。清淡但不失风味的选择。'
  },
  'auto-blog-hanoi-3-days-104': {
    en: '🍮 Dessert: Chè (sweet dessert soup) — a perfect way to end your Hanoi food journey. Try chè xoài (mango sweet soup with coconut milk) or chè đậu đen (black bean sweet soup) from a street vendor.',
    vn: '🍮 Tráng miệng: Chè — cách hoàn hảo để kết thúc hành trình ẩm thực Hà Nội của bạn. Thử chè xoài (chè xoài với nước cốt dừa) hoặc chè đậu đen từ một quầy hàng rong.',
    zh: '🍮 甜点：甜品汤（Chè）— 结束您河内美食之旅的完美方式。尝试街头小贩的芒果西米露（椰奶芒果甜汤）或黑豆甜汤。'
  },
  'auto-blog-hanoi-3-days-105': {
    en: '🍽️ Final dinner: Choose your favorite from the past three days — revisit a dish you loved or try something new. Hanoi\'s food scene is worth returning for, so save room for one last memorable meal.',
    vn: '🍽️ Bữa tối cuối cùng: Chọn món yêu thích của bạn trong ba ngày qua — quay lại món bạn đã yêu thích hoặc thử một món mới. Ẩm thực Hà Nội đáng để quay lại, vì vậy hãy để dành chỗ cho một bữa ăn đáng nhớ cuối cùng.',
    zh: '🍽️ 最后一顿晚餐：选择过去三天里您最喜欢的菜 — 重新品尝您喜欢的菜或尝试新菜。河内的美食值得再次光顾，所以为最后一顿难忘的餐食留点空间。'
  },

  // ── BLOG - 3 DAYS HANOI - VEGETARIAN OPTIONS ──────────────────

  'auto-blog-hanoi-3-days-106': {
    en: '🌱 Vegetarian? Hanoi has plenty of options too!',
    vn: '🌱 Ăn chay? Hà Nội cũng có rất nhiều lựa chọn!',
    zh: '🌱 素食者？河内也有很多选择！'
  },
  'auto-blog-hanoi-3-days-107': {
    en: '🥣 Phở chay (vegetarian phở) — available at many phở stalls, especially near temples. The broth is made from mushrooms and vegetables, and it\'s just as flavorful as the meat version.',
    vn: '🥣 Phở chay — có sẵn tại nhiều quán phở, đặc biệt gần chùa. Nước dùng được nấu từ nấm và rau củ, hương vị cũng đậm đà không kém phiên bản thịt.',
    zh: '🥣 素食河粉（Phở chay）— 许多河粉摊都有提供，尤其是寺庙附近。汤底由蘑菇和蔬菜熬制，味道不亚于肉汤版本。'
  },
  'auto-blog-hanoi-3-days-108': {
    en: '🥖 Bánh mì chay (vegetarian bánh mì) — filled with tofu, mushrooms, and pickled vegetables instead of meat. Many bánh mì stalls offer this option, and it\'s equally delicious.',
    vn: '🥖 Bánh mì chay — nhân đậu phụ, nấm và rau củ muối thay vì thịt. Nhiều quán bánh mì có lựa chọn này, và hương vị cũng ngon không kém.',
    zh: '🥖 素食法棍（Bánh mì chay）— 夹入豆腐、蘑菇和腌菜代替肉类。许多法棍摊位提供这种选择，同样美味。'
  },
  'auto-blog-hanoi-3-days-109': {
    en: '🍲 Bún riêu chay (vegetarian crab noodle soup) — tofu and tomato-based broth instead of crab. A lighter but equally satisfying alternative to the traditional version.',
    vn: '🍲 Bún riêu chay — đậu phụ và nước dùng cà chua thay vì cua. Một lựa chọn nhẹ nhàng hơn nhưng cũng không kém phần hấp dẫn so với phiên bản truyền thống.',
    zh: '🍲 素食蟹汤粉（Bún riêu chay）— 用豆腐和番茄汤底代替螃蟹。比传统版本更清淡，但同样令人满足。'
  },
  'auto-blog-hanoi-3-days-110': {
    en: '🍛 Cơm chay (vegetarian rice dishes) — many temples and specialized vegetarian restaurants serve affordable and delicious rice plates with a variety of vegetable and tofu dishes.',
    vn: '🍛 Cơm chay — nhiều chùa và nhà hàng chay chuyên biệt phục vụ đĩa cơm giá phải chăng và ngon miệng với nhiều món rau củ và đậu phụ.',
    zh: '🍛 素食米饭（Cơm chay）— 许多寺庙和专门的素食餐厅提供价格实惠、美味的米饭套餐，配以各种蔬菜和豆腐菜肴。'
  },
  'auto-blog-hanoi-3-days-111': {
    en: '🌿 Vegetarian-friendly tip: Look for "Ăn chay" signs, and don\'t be afraid to ask "Có món chay không?" (Do you have vegetarian dishes?) — locals are usually helpful!',
    vn: '🌿 Mẹo cho người ăn chay: Tìm biển "Ăn chay" và đừng ngại hỏi "Có món chay không?" — người dân địa phương thường rất nhiệt tình!',
    zh: '🌿 素食小贴士：寻找"Ăn chay"（素食）标志，不要害怕问"Có món chay không?"（有素食吗？）— 当地人通常很乐意帮助！'
  },
// FAQ - 3 Days Itinerary
'faq-q-3days': {
  en: 'Are 3 days enough for Hanoi?',
  vn: '3 ngày có đủ để tham quan Hà Nội không?',
  zh: '3天足够游览河内吗？'
},
'faq-a-3days': {
  en: 'Yes, 3 days are enough to experience Hanoi\'s highlights including the Old Quarter, Hoàn Kiếm Lake, Train Street, Văn Miếu (Temple of Literature), and West Lake, plus enjoy the local food scene.',
  vn: 'Có, 3 ngày đủ để trải nghiệm những điểm nổi bật của Hà Nội bao gồm Phố Cổ, Hồ Hoàn Kiếm, Train Street, Văn Miếu – Quốc Tử Giám, và Hồ Tây, cùng với thưởng thức ẩm thực địa phương.',
  zh: '是的，3天足够体验河内的亮点，包括老城区、还剑湖、火车街、文庙国子监和西湖，还能享受当地美食。'
},
'faq-q-area': {
  en: 'What is the best area to stay in Hanoi for 3 days?',
  vn: 'Khu vực nào tốt nhất để ở trong 3 ngày tại Hà Nội?',
  zh: '在河内住3天，哪个区域最好？'
},
'faq-a-area': {
  en: 'The Old Quarter is best for first-time visitors who want to be in the center of food, nightlife, and attractions. For a quieter, more local experience, stay near Văn Miếu or Ba Đình areas — like MiaCasa Hanoi. If you prefer to be in the heart of the action, MiaCasa Old Quarter puts you steps from Hoàn Kiếm Lake and the nightlife.',
  vn: 'Phố Cổ là tốt nhất cho du khách lần đầu muốn ở trung tâm ẩm thực, cuộc sống về đêm và các điểm tham quan. Để có trải nghiệm yên tĩnh và địa phương hơn, hãy ở gần khu Văn Miếu hoặc Ba Đình — như MiaCasa Hanoi. Nếu bạn muốn ở trung tâm của mọi hoạt động, MiaCasa Old Quarter đặt bạn cách Hồ Hoàn Kiếm và cuộc sống về đêm chỉ vài bước chân.',
  zh: '对于首次来访的游客，老城区是最好的选择，这里位于美食、夜生活和景点的中心。如果想要更安静、更本地化的体验，可以住在文庙或巴亭附近——比如MiaCasa Hanoi。如果您想置身于活动中心，MiaCasa Old Quarter将您置于距离还剑湖和夜生活仅几步之遥的位置。'
},
'faq-q-train': {
  en: 'Is Train Street worth visiting?',
  vn: 'Train Street có đáng để tham quan không?',
  zh: '火车街值得参观吗？'
},
'faq-a-train': {
  en: 'Yes, Train Street is one of Hanoi\'s most unique attractions. Visit early morning or late evening to avoid crowds. Always follow safety instructions from local café owners.',
  vn: 'Có, Train Street là một trong những điểm tham quan độc đáo nhất của Hà Nội. Ghé thăm vào sáng sớm hoặc tối muộn để tránh đông đúc. Luôn tuân thủ hướng dẫn an toàn từ chủ quán cà phê địa phương.',
  zh: '是的，火车街是河内最独特的景点之一。建议清晨或深夜前往以避开人群。务必遵守当地咖啡馆老板的安全指示。'
},
'faq-q-food': {
  en: 'What should I eat in Hanoi?',
  vn: 'Nên ăn gì ở Hà Nội?',
  zh: '在河内应该吃什么？'
},
'faq-a-food': {
  en: 'Must-try dishes include: Phở (noodle soup), Bún chả (grilled pork with noodles), Bánh mì (Vietnamese sandwich), and Cà phê trứng (egg coffee).',
  vn: 'Các món nhất định phải thử bao gồm: Phở, Bún chả, Bánh mì và Cà phê trứng.',
  zh: '必尝美食包括：河粉（Phở）、烤肉米粉（Bún chả）、越南法棍三明治（Bánh mì）和蛋咖啡（Cà phê trứng）。'
},
'faq-q-vegetarian': {
    en: 'Are there vegetarian options in Hanoi?',
    vn: 'Có lựa chọn chay ở Hà Nội không?',
    zh: '河内有素食选择吗？'
  },
  'faq-a-vegetarian': {
    en: 'Yes! Hanoi has a growing vegetarian food scene. Look for "Ăn chay" signs, try phở chay (vegetarian phở), bánh mì chay (vegetarian bánh mì), and cơm chay (vegetarian rice plates). Many Buddhist temples also serve affordable vegetarian meals.',
    vn: 'Có! Hà Nội có phong trào ẩm thực chay ngày càng phát triển. Tìm biển "Ăn chay", thử phở chay, bánh mì chay và cơm chay. Nhiều chùa Phật giáo cũng phục vụ các bữa ăn chay với giá cả phải chăng.',
    zh: '是的！河内的素食餐饮业正在不断发展。寻找"Ăn chay"（素食）标志，尝试素食河粉、素食法棍和素食米饭套餐。许多佛教寺庙也提供价格实惠的素食餐。'
  },
'auto-blog-train-street-001': {en:"Home", vn:"Trang chủ", zh:"首页"},
'auto-blog-train-street-002': {en:"Blog", vn:"Blog", zh:"博客"},
'auto-blog-train-street-003': {en:"Train Street Hanoi Guide", vn:"Hướng Dẫn Train Street Hà Nội", zh:"河内火车街指南"},
'auto-blog-train-street-004': {en:"🚂 HANOI LOCAL GUIDE", vn:"🚂 CẨM NANG ĐỊA PHƯƠNG HÀ NỘI", zh:"🚂 河内本地指南"},
'auto-blog-train-street-005': {en:"Train Street Hanoi: Full Guide (2026)", vn:"Train Street Hà Nội: Hướng Dẫn Chi Tiết (2026)", zh:"河内火车街：完整指南（2026）"},
'auto-blog-train-street-006': {en:"📅 April 22, 2026 · ☕ 6 min read · ✍️ By MiaCasa Team", vn:"📅 22 Tháng 4, 2026 · ☕ 6 phút đọc · ✍️ MiaCasa Team", zh:"📅 2026年4月22日 · ☕ 6分钟阅读 · ✍️ MiaCasa团队"},
'auto-blog-train-street-007': {en:"The train passing through Train Street — just inches from local homes and cafés", vn:"Đoàn tàu chạy qua Train Street — chỉ cách nhà dân và quán cà phê vài inch", zh:"火车穿过火车街——距离居民和咖啡馆仅几英寸"},
'auto-blog-train-street-008': {en:"Train Street is one of the most unusual places in Hanoi.", vn:"Train Street là một trong những nơi độc đáo nhất ở Hà Nội.", zh:"火车街是河内最不寻常的地方之一。"},
'auto-blog-train-street-009': {en:"A narrow residential street. Homes just inches from the tracks. Cafés set up right beside them. And a train that passes through it all, just a few times each day.", vn:"Một con phố nhỏ. Nhà dân sát đường ray. Quán cà phê ngay bên cạnh. Và đoàn tàu chạy qua chỉ cách vài bước chân.", zh:"一条狭窄的居民街。房屋紧贴铁轨。咖啡馆就在旁边。火车每天只经过几次。"},
'auto-blog-train-street-010': {en:"It's not built for tourists—but that's exactly why people come.", vn:"Nơi này không được xây dựng cho du lịch—nhưng chính điều đó lại khiến nó trở nên đặc biệt.", zh:"这里不是为游客建造的——但这正是它吸引人的原因。"},
'auto-blog-train-street-011': {en:"What is Train Street?", vn:"Train Street là gì?", zh:"什么是火车街？"},
'auto-blog-train-street-012': {en:"Train Street is a stretch of railway running through a residential neighborhood in central Hanoi.", vn:"Đây là đoạn đường ray chạy xuyên qua khu dân cư ở trung tâm Hà Nội.", zh:"火车街是一段穿过河内市中心居民区的铁路。"},
'auto-blog-train-street-013': {en:"Locals live, cook, and run small cafés right next to the tracks. When the train approaches, everything shifts. Chairs are moved. People step back. Then the train passes—and life continues.", vn:"Người dân sinh sống, nấu ăn và kinh doanh ngay cạnh đường ray. Khi tàu đến, mọi thứ thay đổi—ghế được dọn đi, mọi người đứng lùi lại. Khi tàu qua, cuộc sống tiếp tục như bình thường.", zh:"当地居民在铁轨旁生活、做饭并经营小咖啡馆。火车接近时，一切都会改变：椅子被移开，人们后退，然后火车驶过，一切恢复正常。"},
'auto-blog-train-street-014': {en:"Is Train Street still open in 2026?", vn:"Train Street còn mở không năm 2026?", zh:"2026年火车街还开放吗？"},
'auto-blog-train-street-015': {en:"This is one of the most common questions.", vn:"Đây là câu hỏi rất nhiều người quan tâm.", zh:"这是最常见的问题之一。"},
'auto-blog-train-street-016': {en:"Access to Train Street has been restricted at times for safety reasons. In practice, many visitors still enter through cafés or local access points. The situation can depend on:", vn:"Việc vào Train Street đôi khi bị hạn chế vì lý do an toàn. Tuy nhiên, trên thực tế, nhiều du khách vẫn có thể vào thông qua các quán cà phê hoặc lối vào địa phương. Tình hình có thể phụ thuộc vào:", zh:"出于安全原因，火车街有时会限制进入。但实际上，许多游客仍可通过咖啡馆或当地入口进入，具体情况取决于："},
'auto-blog-train-street-017': {en:"Local conditions", vn:"Thời điểm", zh:"当地情况"},
'auto-blog-train-street-018': {en:"Time of day", vn:"Tình hình thực tế", zh:"时间段"},
'auto-blog-train-street-019': {en:"Whether you enter through a café", vn:"Cách bạn vào", zh:"是否通过咖啡馆进入"},
'auto-blog-train-street-020': {en:"Train Street Hanoi Train Times (2026 Guide)", vn:"Giờ Tàu Train Street Hà Nội (2026)", zh:"火车街列车时间（2026指南）"},
'auto-blog-train-street-021': {en:"Train times are not fixed, and this is important to understand.", vn:"Giờ tàu không cố định, và điều này rất quan trọng.", zh:"火车时间并不固定，这一点非常重要。"},
'auto-blog-train-street-022': {en:"Trains usually pass several times a day, most often:", vn:"Thông thường, tàu chạy vài lần mỗi ngày, thường là:", zh:"火车通常每天经过几次，常见时间为："},
'auto-blog-train-street-023': {en:"Morning: around 8:30 AM – 12:00 PM", vn:"Buổi sáng: khoảng 8:30 – 12:00", zh:"上午：约8:30–12:00"},
'auto-blog-train-street-024': {en:"Afternoon: around 3:00 PM – 4:30 PM", vn:"Buổi chiều: khoảng 15:00 – 16:30", zh:"下午：约15:00–16:30"},
'auto-blog-train-street-025': {en:"Evening: around 7:00 PM – 10:00 PM", vn:"Buổi tối: khoảng 19:00 – 22:00", zh:"晚上：约19:00–22:00"},
'auto-blog-train-street-026': {en:"You may also see specific times listed online, such as 4:10 PM, 7:20 PM, or 9:50 PM—but delays are common and schedules can change.", vn:"Bạn cũng có thể thấy một số giờ cụ thể trên mạng như 16:10, 19:20 hoặc 21:50—nhưng tàu có thể trễ và lịch có thể thay đổi.", zh:"你可能会在网上看到具体时间，如16:10、19:20或21:50，但延误很常见，时间可能变化。"},
'auto-blog-train-street-027': {en:"Unlike many guides that list exact times, Train Street operates on a flexible timetable.", vn:"Không giống nhiều bài viết liệt kê giờ cố định, Train Street hoạt động theo lịch linh hoạt.", zh:"与许多列出固定时间的指南不同，火车街采用灵活时间表。"},
'auto-blog-train-street-028': {en:"👉 The best way to know the exact timing is simple: Ask a café owner when you arrive—they always have the most accurate information.", vn:"👉 Cách tốt nhất để biết giờ chính xác: Hỏi trực tiếp quán cà phê khi bạn đến—họ luôn có thông tin chính xác nhất.", zh:"👉 最好的方法很简单：到达后直接询问咖啡馆老板，他们的信息最准确。"},
'auto-blog-train-street-029': {en:"Where is Train Street?", vn:"Train Street ở đâu?", zh:"火车街在哪里？"},
'auto-blog-train-street-030': {en:"Train Street is located near Hanoi Railway Station, not far from the Old Quarter.", vn:"Train Street nằm gần Ga Hà Nội, không xa Phố Cổ.", zh:"火车街位于河内火车站附近，离老城区不远。"},
'auto-blog-train-street-031': {en:"The most visited sections are along:", vn:"Khu vực phổ biến nhất:", zh:"最常访问的区域包括："},
'auto-blog-train-street-032': {en:"Trần Phú Street", vn:"Trần Phú", zh:"陈富街"},
'auto-blog-train-street-033': {en:"Phùng Hưng Street", vn:"Phùng Hưng", zh:"冯兴街"},
  'auto-blog-train-street-034': {en:"📍 From <a href=\"miacasa-hanoi.html\" style=\"color: #c17a5a; text-decoration: underline;\">MiaCasa Hanoi</a>, it's about a 15-minute walk. <a href=\"index.html?property=hanoi#booking\" style=\"color: #c17a5a; text-decoration: underline;\">Book Your Dates →</a>", vn:"📍 Từ <a href=\"miacasa-hanoi.html\" style=\"color: #c17a5a; text-decoration: underline;\">MiaCasa Hanoi</a>, chỉ mất khoảng 15 phút đi bộ. <a href=\"index.html?property=hanoi#booking\" style=\"color: #c17a5a; text-decoration: underline;\">Xem lịch trống →</a>", zh:"📍 从 <a href=\"miacasa-hanoi.html\" style=\"color: #c17a5a; text-decoration: underline;\">MiaCasa Hanoi</a> 步行约15分钟即可到达。 <a href=\"index.html?property=hanoi#booking\" style=\"color: #c17a5a; text-decoration: underline;\">查看可预订日期 →</a>"},

'auto-blog-train-street-035': {en:"How to visit Train Street safely", vn:"Cách tham quan an toàn", zh:"如何安全参观火车街"},
'auto-blog-train-street-036': {en:"This is not a controlled tourist attraction—it's an active railway.", vn:"Đây là đường tàu đang hoạt động, không phải khu du lịch có kiểm soát.", zh:"这里不是受控旅游景点——而是一条仍在运行的铁路。"},
'auto-blog-train-street-037': {en:"Always listen to café staff or locals", vn:"Luôn nghe theo hướng dẫn của quán hoặc người dân", zh:"务必听从咖啡馆工作人员或当地人的指示"},
'auto-blog-train-street-038': {en:"Stay clear of the tracks when told", vn:"Không đứng gần đường ray khi được yêu cầu", zh:"在被提醒时远离铁轨"},
'auto-blog-train-street-039': {en:"Do not stand in the middle for photos", vn:"Không đứng giữa đường ray để chụp ảnh", zh:"不要站在铁轨中间拍照"},
'auto-blog-train-street-040': {en:"Avoid blocking the train", vn:"Không cản trở tàu", zh:"避免阻挡火车通行"},
'auto-blog-train-street-041': {en:"Choose a café instead of standing freely", vn:"Chọn quán cà phê thay vì đứng tự do", zh:"选择在咖啡馆内观看，而不是随意站在铁轨旁"},
'auto-blog-train-street-042': {en:"If something feels unsafe, step back.", vn:"Nếu thấy không an toàn, hãy lùi lại.", zh:"如果感觉不安全，请后退。"},
'auto-blog-train-street-043': {en:"Best way to experience Train Street", vn:"Trải nghiệm tốt nhất", zh:"最佳体验方式"},
'auto-blog-train-street-044': {en:"The best way is simple.", vn:"Cách tốt nhất rất đơn giản.", zh:"最好的方式很简单。"},
'auto-blog-train-street-045': {en:"Find a small café along the tracks. Sit down. Order a drink. Wait.", vn:"Chọn một quán cà phê nhỏ dọc đường ray. Ngồi xuống. Gọi đồ uống. Chờ.", zh:"找一家铁轨旁的小咖啡馆，坐下，点一杯饮料，等待。"},
'auto-blog-train-street-046': {en:"A safer experience", vn:"An toàn hơn", zh:"更安全的体验"},
'auto-blog-train-street-047': {en:"A better view", vn:"Có góc nhìn tốt hơn", zh:"更好的观景视角"},
'auto-blog-train-street-048': {en:"A more relaxed atmosphere", vn:"Cảm nhận rõ không khí", zh:"更轻松的氛围"},
'auto-blog-train-street-049': {en:"You'll also notice how the entire street prepares before the train arrives.", vn:"Bạn sẽ thấy cả con phố chuẩn bị như thế nào trước khi tàu đến.", zh:"你也会看到整条街在火车到来前如何准备。"},
'auto-blog-train-street-050': {en:"What does it feel like?", vn:"Cảm giác khi tàu đi qua", zh:"火车经过是什么感觉？"},
'auto-blog-train-street-051': {en:"A few minutes before the train arrives, everything changes.", vn:"Trước khi tàu đến vài phút, mọi thứ thay đổi.", zh:"火车到来前几分钟，一切都会改变。"},
'auto-blog-train-street-052': {en:"People move. Chairs disappear. The space clears.", vn:"Không gian được dọn dẹp. Mọi người di chuyển.", zh:"人们移动，椅子被收起，空间被清空。"},
'auto-blog-train-street-053': {en:"Then suddenly, the train is there—loud, close, and surprisingly fast.", vn:"Rồi đoàn tàu xuất hiện—gần, nhanh và ồn.", zh:"然后火车突然出现——声音巨大、距离很近、速度很快。"},
'auto-blog-train-street-054': {en:"It passes in seconds.", vn:"Chỉ vài giây sau,", zh:"它在几秒内就驶过。"},
'auto-blog-train-street-055': {en:"Then just as quickly, the street returns to normal.", vn:"mọi thứ trở lại bình thường.", zh:"随后街道又迅速恢复正常。"},
'auto-blog-train-street-056': {en:"Best time to visit", vn:"Thời điểm nên đi", zh:"最佳参观时间"},
'auto-blog-train-street-057': {en:"🌅 Early morning", vn:"🌅 Sáng sớm", zh:"🌅 清晨"},
'auto-blog-train-street-058': {en:"Fewer people", vn:"Ít đông", zh:"人较少"},
'auto-blog-train-street-059': {en:"More local atmosphere", vn:"Không khí địa phương", zh:"更本地化的氛围"},
'auto-blog-train-street-060': {en:"🌆 Evening", vn:"🌆 Buổi tối", zh:"🌆 傍晚"},
'auto-blog-train-street-061': {en:"Livelier cafés", vn:"Nhiều quán mở", zh:"咖啡馆更热闹"},
'auto-blog-train-street-062': {en:"Better lighting and energy", vn:"Không khí sôi động", zh:"灯光与氛围更好"},
'auto-blog-train-street-063': {en:"Staying near Train Street", vn:"Ở gần Train Street", zh:"住在火车街附近"},
'auto-blog-train-street-064': {en:"If you want to visit easily, staying nearby makes a big difference.", vn:"Ở gần sẽ thuận tiện hơn rất nhiều nếu bạn muốn ghé thăm.", zh:"如果想方便参观，住在附近会有很大帮助。"},
'auto-blog-train-street-065': {en:"MiaCasa Hanoi is located in the Văn Miếu area, within walking distance of Train Street.", vn:"MiaCasa Hanoi nằm trong khu Văn Miếu, cách Train Street vài phút đi bộ.", zh:"MiaCasa Hanoi 位于文庙区域，步行即可到达火车街。"},
'auto-blog-train-street-066': {en:"Visit early or late", vn:"Đi sớm hoặc muộn", zh:"早点或晚点前往"},
'auto-blog-train-street-067': {en:"Avoid crowds", vn:"Tránh đông", zh:"避开人群"},
'auto-blog-train-street-068': {en:"Experience the area more naturally", vn:"Trải nghiệm tự nhiên hơn", zh:"更自然地体验该区域"},
'auto-blog-train-street-069': {en:"Final thoughts", vn:"Kết luận", zh:"最终总结"},
'auto-blog-train-street-070': {en:"Train Street is not just about the train.", vn:"Train Street không chỉ là nơi xem tàu.", zh:"火车街不仅仅是看火车的地方。"},
'auto-blog-train-street-071': {en:"It's about the contrast—between daily life and something unexpected passing through it.", vn:"Đó là sự giao thoa giữa cuộc sống hàng ngày và một điều bất ngờ.", zh:"它是日常生活与突如其来的火车之间的对比。"},
'auto-blog-train-street-072': {en:"If you visit with respect and awareness, it can be one of the most unique experiences in Hanoi.", vn:"Nếu trải nghiệm đúng cách, đây sẽ là một trong những điểm đáng nhớ nhất ở Hà Nội.", zh:"如果带着尊重和安全意识参观，这将是河内最独特的体验之一。"},
'auto-blog-train-street-073': {en:"🏠 Hosted by locals in Hanoi", vn:"🏠 Do người địa phương làm chủ", zh:"🏠 由河内本地人运营"},
'auto-blog-train-street-074': {en:"⭐ 4.9★ from 200+ guests", vn:"⭐ 4.9★ từ hơn 200 khách", zh:"⭐ 来自200多位客人的4.9★评分"},
'auto-blog-train-street-075': {en:"💰 Direct booking = better rate", vn:"💰 Đặt trực tiếp = giá tốt hơn", zh:"💰 直接预订 = 更优惠价格"},
'auto-blog-train-street-076': {en:"✨ Planning your trip to Hanoi?", vn:"✨ Đang lên kế hoạch cho chuyến đi Hà Nội?", zh:"✨ 正在计划你的河内之旅？"},
'auto-blog-train-street-077': {en:"Read our complete 3-day itinerary for food, culture, and where to stay.", vn:"Đọc lịch trình 3 ngày chi tiết về ẩm thực, văn hóa và nơi ở.", zh:"阅读我们完整的3日行程，包括美食、文化和住宿建议。"},
'auto-blog-train-street-078': {en:"📖 Read the 3-day Hanoi itinerary →", vn:"📖 Đọc lịch trình 3 ngày ở Hà Nội →", zh:"📖 阅读河内3日行程 →"},
'auto-blog-train-street-079': {en:"📖 You might also like", vn:"📖 Có thể bạn cũng thích", zh:"📖 你可能也喜欢"},
'auto-blog-train-street-080': {en:"3 Days in Hanoi", vn:"3 Ngày Ở Hà Nội", zh:"河内三日游"},
'auto-blog-train-street-081': {en:"Complete itinerary with food, culture, and where to stay", vn:"Lịch trình chi tiết với ẩm thực, văn hóa và nơi ở", zh:"包含美食、文化与住宿的完整行程"},
'auto-blog-train-street-082': {en:"Where to Stay in Hanoi", vn:"Nên Ở Đâu Ở Hà Nội", zh:"河内住宿推荐"},
'auto-blog-train-street-083': {en:"Old Quarter vs quiet local areas", vn:"Phố Cổ hay khu phố yên tĩnh", zh:"老城区 vs 安静本地区域"},
'auto-blog-train-street-084': {en:"← Back to all blog posts", vn:"← Quay lại tất cả bài viết", zh:"← 返回所有博客文章"},
// Train Street - Extended
'auto-blog-train-street-085': {
  en: 'The allure of Train Street lies in its authenticity. It is not a theme park or a manufactured attraction; it is a living, breathing neighborhood where daily life continues in the shadow of a railway.',
  vn: 'Sức hấp dẫn của Train Street nằm ở tính chân thật. Đây không phải là công viên giải trí hay điểm tham quan nhân tạo; mà là một khu phố sống động, nơi cuộc sống hàng ngày tiếp diễn bên cạnh đường ray.',
  zh: '火车街的魅力在于它的真实性。这不是一个主题公园或人造景点；而是一个充满活力的社区，日常生活就在铁路旁继续。'
},
'auto-blog-train-street-086': {
  en: 'The street has become increasingly famous in recent years, with travelers from around the world coming to witness the spectacle of a train passing through such a narrow space. Yet despite its fame, Train Street remains a functional railway line, carrying passengers and goods to destinations across Vietnam.',
  vn: 'Con phố đã trở nên nổi tiếng trong những năm gần đây, với du khách từ khắp nơi trên thế giới đến để chứng kiến cảnh tượng đoàn tàu chạy qua không gian hẹp như vậy. Dù nổi tiếng, Train Street vẫn là tuyến đường sắt hoạt động, chở hành khách và hàng hóa đi khắp Việt Nam.',
  zh: '这条街近年来变得越来越出名，来自世界各地的旅行者前来目睹火车穿过如此狭窄空间的景象。尽管有名，火车街仍然是一条运营中的铁路线，运送乘客和货物前往越南各地。'
},
'auto-blog-train-street-087': {
  en: 'The authorities have implemented measures to ensure safety while still allowing visitors to experience this unique attraction. The key is to be respectful of the local community and follow all safety guidelines.',
  vn: 'Chính quyền đã triển khai các biện pháp để đảm bảo an toàn trong khi vẫn cho phép du khách trải nghiệm điểm tham quan độc đáo này. Điều quan trọng là tôn trọng cộng đồng địa phương và tuân thủ mọi hướng dẫn an toàn.',
  zh: '当局已采取措施确保安全，同时允许游客体验这一独特景点。关键是尊重当地社区并遵守所有安全指南。'
},
'auto-blog-train-street-088': {
  en: 'The proximity to the Old Quarter makes it easy to incorporate a visit to Train Street into your Hanoi itinerary. Many travelers combine a visit with exploring the surrounding neighborhood, which is full of interesting cafés and local shops.',
  vn: 'Vị trí gần Phố Cổ giúp dễ dàng kết hợp chuyến tham quan Train Street vào lịch trình Hà Nội của bạn. Nhiều du khách kết hợp thăm quan với khám phá khu phố xung quanh, nơi có nhiều quán cà phê thú vị và cửa hàng địa phương.',
  zh: '靠近老城区的位置使得参观火车街很容易融入您的河内行程。许多旅行者将参观与探索周边社区结合起来，那里有许多有趣的咖啡馆和当地商店。'
},
'auto-blog-train-street-089': {
  en: 'The train moves surprisingly fast and is much larger than it appears from a distance. It can be dangerous to be too close when it passes. Always maintain a safe distance and follow instructions from locals.',
  vn: 'Tàu di chuyển rất nhanh và lớn hơn nhiều so với vẻ ngoài từ xa. Có thể nguy hiểm nếu đứng quá gần khi tàu đi qua. Luôn giữ khoảng cách an toàn và làm theo hướng dẫn của người dân.',
  zh: '火车的移动速度惊人，比从远处看起来要大得多。火车经过时靠得太近可能很危险。始终保持安全距离并遵循当地人的指示。'
},
'auto-blog-train-street-090': {
  en: 'The feeling is indescribable. The train seems impossibly close, and the noise is overwhelming. But just as quickly as it arrives, it disappears, and the street returns to its usual rhythm. It is a moment of pure intensity that lingers long after the train has gone.',
  vn: 'Cảm giác thật khó tả. Đoàn tàu dường như gần đến mức không tưởng, và tiếng ồn thật ấn tượng. Nhưng nhanh như khi nó đến, nó biến mất, và con phố trở lại nhịp điệu thường ngày. Đó là một khoảnh khắc căng thẳng mãnh liệt kéo dài trong tâm trí rất lâu sau khi tàu đã đi.',
  zh: '这种感觉难以形容。火车似乎近得不可思议，噪音令人难忘。但它来得快去得也快，街道又恢复了往常的节奏。这是一个纯粹紧张的时刻，在火车离开后很久仍留在记忆中。'
},
'auto-blog-train-street-091': {
  en: 'The best time ultimately depends on your preference. If you want a quieter experience, go early in the morning. If you enjoy a lively atmosphere, visit in the evening.',
  vn: 'Thời điểm tốt nhất phụ thuộc vào sở thích của bạn. Nếu bạn muốn trải nghiệm yên tĩnh hơn, hãy đi vào sáng sớm. Nếu bạn thích không khí sôi động, hãy tham quan vào buổi tối.',
  zh: '最佳时间最终取决于您的偏好。如果您想要更安静的体验，请早上去。如果您喜欢热闹的氛围，请在晚上参观。'
},
'auto-blog-train-street-092': {
  en: 'The train passes quickly, but the experience is unforgettable.',
  vn: 'Tàu đi qua rất nhanh, nhưng trải nghiệm thì khó quên.',
  zh: '火车经过得很快，但体验令人难忘。'
},
'auto-blog-train-street-093': {
  en: 'The early morning light also provides beautiful photo opportunities.',
  vn: 'Ánh sáng buổi sáng cũng mang đến cơ hội chụp ảnh đẹp.',
  zh: '清晨的光线也提供了美丽的拍照机会。'
},
'auto-blog-train-street-094': {
  en: 'The evening brings a different atmosphere, with more people out and about.',
  vn: 'Buổi tối mang đến bầu không khí khác, với nhiều người đi lại hơn.',
  zh: '傍晚带来不同的氛围，更多的人外出活动。'
},
/* ── BLOG - WHERE TO STAY - NEW SECTIONS ────────────────────────── */

'blog-stay-consider-title': {
  en: 'What to Consider When Choosing Your Stay',
  vn: 'Những Điều Cần Cân Nhắc Khi Chọn Nơi Ở',
  zh: '选择住宿时需要考虑的因素'
},
'blog-stay-consider-1': {
  en: 'Noise levels: Old Quarter is lively 24/7, quiet areas are peaceful',
  vn: 'Mức độ ồn: Phố Cổ nhộn nhịp 24/7, khu yên tĩnh thì thanh bình',
  zh: '噪音水平：老城区24/7热闹，安静区域则平和'
},
'blog-stay-consider-2': {
  en: 'Walking distance: Old Quarter = walk everywhere, quiet areas = short Grab rides',
  vn: 'Khoảng cách đi bộ: Phố Cổ = đi bộ mọi nơi, khu yên tĩnh = đi Grab ngắn',
  zh: '步行距离：老城区 = 步行可达各处，安静区域 = 短途Grab出行'
},
'blog-stay-consider-3': {
  en: 'Group size: Old Quarter apartments for groups, quiet areas for couples',
  vn: 'Quy mô nhóm: Phố Cổ cho nhóm đông, khu yên tĩnh cho cặp đôi',
  zh: '团体规模：老城区适合团体，安静区域适合情侣'
},
'blog-stay-consider-4': {
  en: 'Budget: Quiet areas often offer better value for money',
  vn: 'Ngân sách: Khu yên tĩnh thường có giá trị tốt hơn',
  zh: '预算：安静区域通常性价比更高'
},
'blog-stay-consider-5': {
  en: 'Length of stay: Quiet areas are better for 3+ days',
  vn: 'Thời gian lưu trú: Khu yên tĩnh tốt hơn cho 3+ ngày',
  zh: '住宿时长：安静区域更适合3天以上的入住'
},
'blog-stay-style-title': {
  en: 'How to Choose Based on Your Travel Style',
  vn: 'Cách Chọn Dựa Trên Phong Cách Du Lịch Của Bạn',
  zh: '如何根据您的旅行风格选择'
},
'blog-stay-oq-choose': {
  en: '🏙️ Choose Old Quarter If...',
  vn: '🏙️ Chọn Phố Cổ Nếu...',
  zh: '🏙️ 选择老城区如果...'
},
'blog-stay-oq-1': {
  en: 'You want to be in the center of everything',
  vn: 'Bạn muốn ở trung tâm của mọi thứ',
  zh: '你想置身于一切的中心'
},
'blog-stay-oq-2': {
  en: 'You enjoy nightlife and street energy',
  vn: 'Bạn thích cuộc sống về đêm và năng lượng đường phố',
  zh: '你喜欢夜生活和街头活力'
},
'blog-stay-oq-3': {
  en: "You're a first-time visitor",
  vn: "Bạn là du khách lần đầu",
  zh: '你是初次到访的游客'
},
'blog-stay-oq-4': {
  en: "You're traveling with friends or family",
  vn: 'Bạn đi du lịch cùng bạn bè hoặc gia đình',
  zh: '你和朋友或家人一起旅行'
},
'blog-stay-oq-5': {
  en: "You're only in Hanoi for 1-2 days",
  vn: 'Bạn chỉ ở Hà Nội 1-2 ngày',
  zh: '你只在河内停留1-2天'
},
'blog-stay-quiet-choose': {
  en: '🌿 Choose Quiet Areas If...',
  vn: '🌿 Chọn Khu Yên Tĩnh Nếu...',
  zh: '🌿 选择安静区域如果...'
},
'blog-stay-quiet-1': {
  en: 'You need good sleep',
  vn: 'Bạn cần ngủ ngon',
  zh: '你需要良好的睡眠'
},
'blog-stay-quiet-2': {
  en: 'You prefer local neighborhoods',
  vn: 'Bạn thích khu phố địa phương',
  zh: '你更喜欢本地社区'
},
'blog-stay-quiet-3': {
  en: "You're staying for more than 3 days",
  vn: 'Bạn ở lại hơn 3 ngày',
  zh: '你停留超过3天'
},
'blog-stay-quiet-4': {
  en: "You're a digital nomad or remote worker",
  vn: 'Bạn là dân số hoặc làm việc từ xa',
  zh: '你是数字游民或远程工作者'
},
'blog-stay-quiet-5': {
  en: 'You want to experience real local life',
  vn: 'Bạn muốn trải nghiệm cuộc sống địa phương thực sự',
  zh: '你想体验真正的当地生活'
},
'blog-stay-table-title': {
  en: 'Quick Comparison Table',
  vn: 'Bảng So Sánh Nhanh',
  zh: '快速对比表'
},
'blog-stay-table-feature': {
  en: 'Feature',
  vn: 'Đặc điểm',
  zh: '特点'
},
'blog-stay-table-oq': {
  en: 'Old Quarter',
  vn: 'Phố Cổ',
  zh: '老城区'
},
'blog-stay-table-quiet': {
  en: 'Quiet Areas (Văn Miếu)',
  vn: 'Khu Yên Tĩnh (Văn Miếu)',
  zh: '安静区域（文庙）'
},
'blog-stay-table-energy': {
  en: 'Energy',
  vn: 'Năng lượng',
  zh: '活力'
},
'blog-stay-table-energy-oq': {
  en: 'High - 24/7',
  vn: 'Cao - 24/7',
  zh: '高 - 24/7'
},
'blog-stay-table-energy-quiet': {
  en: 'Low - peaceful',
  vn: 'Thấp - yên bình',
  zh: '低 - 平和'
},
'blog-stay-table-walk': {
  en: 'Walkability',
  vn: 'Đi bộ',
  zh: '步行便利性'
},
'blog-stay-table-sleep': {
  en: 'Sleep Quality',
  vn: 'Chất lượng giấc ngủ',
  zh: '睡眠质量'
},
'blog-stay-table-local': {
  en: 'Local Experience',
  vn: 'Trải nghiệm địa phương',
  zh: '本地体验'
},
'blog-stay-table-value': {
  en: 'Value for Money',
  vn: 'Giá trị',
  zh: '性价比'
},
'blog-stay-table-food': {
  en: 'Food Options',
  vn: 'Lựa chọn ẩm thực',
  zh: '餐饮选择'
},
'blog-stay-table-ideal': {
  en: 'Ideal for',
  vn: 'Phù hợp cho',
  zh: '适合人群'
},
'blog-stay-table-ideal-oq': {
  en: 'Short stays, groups, nightlife lovers',
  vn: 'Lưu trú ngắn, nhóm, yêu thích cuộc sống về đêm',
  zh: '短期住宿、团体、夜生活爱好者'
},
'blog-stay-table-ideal-quiet': {
  en: 'Long stays, couples, remote workers',
  vn: 'Lưu trú dài, cặp đôi, làm việc từ xa',
  zh: '长期住宿、情侣、远程工作者'
},
/* ── BLOG - WHERE TO STAY - TABLE COLOR CODING ──────────────────── */

'blog-stay-table-walk-oq': {
  en: '👣 Walk everywhere',
  vn: '👣 Đi bộ mọi nơi',
  zh: '👣 步行可达各处'
},
'blog-stay-table-walk-quiet': {
  en: '🚗 Short Grab rides',
  vn: '🚗 Đi Grab ngắn',
  zh: '🚗 短途 Grab 出行'
},
'blog-stay-table-sleep-oq': {
  en: '😴 Good (earplugs recommended)',
  vn: '😴 Tốt (nên mang nút tai)',
  zh: '😴 良好（建议戴耳塞）'
},
'blog-stay-table-sleep-quiet': {
  en: '🛌 Excellent',
  vn: '🛌 Tuyệt vời',
  zh: '🛌 极好'
},
'blog-stay-table-local-oq': {
  en: '🌆 Vibrant & touristy',
  vn: '🌆 Sôi động & đông du khách',
  zh: '🌆 充满活力 & 游客众多'
},
'blog-stay-table-local-quiet': {
  en: '🏡 Authentic local life',
  vn: '🏡 Cuộc sống địa phương chân thực',
  zh: '🏡 真实的本地生活'
},
'blog-stay-table-value-oq': {
  en: '💰 Fair',
  vn: '💰 Hợp lý',
  zh: '💰 合理'
},
'blog-stay-table-value-quiet': {
  en: '💰💰 Better value',
  vn: '💰💰 Giá trị tốt hơn',
  zh: '💰💰 性价比更高'
},
'blog-stay-table-food-oq': {
  en: '🍜 Endless choices',
  vn: '🍜 Vô số lựa chọn',
  zh: '🍜 无尽的选择'
},
'blog-stay-table-food-quiet': {
  en: '🍛 Plenty, less crowded',
  vn: '🍛 Nhiều, ít đông đúc hơn',
  zh: '🍛 丰富，人少'
},
'auto-blog-where-to-stay-001': {en:"Home", vn:"Trang chủ", zh:"首页"},
'auto-blog-where-to-stay-002': {en:"Blog", vn:"Blog", zh:"博客"},
  'auto-blog-where-to-stay-003': {en:"Where to Stay in Hanoi", vn:"Nên Ở Đâu Ở Hà Nội", zh:"河内住宿推荐"},
'auto-blog-where-to-stay-004': {en:"🏠 ACCOMMODATION GUIDE", vn:"🏠 HƯỚNG DẪN CHỖ Ở", zh:"🏠 住宿指南"},
'auto-blog-where-to-stay-005': {en:"Where to Stay in Hanoi: Old Quarter vs Local Areas", vn:"Nên Ở Đâu Khi Đến Hà Nội: Phố Cổ Hay Khu Yên Tĩnh", zh:"河内住宿选择：老城区 vs 本地安静区域"},
'auto-blog-where-to-stay-006': {en:"📅 April 29, 2026 · ☕ 8 min read · ✍️ By MiaCasa Team", vn:"📅 29 Tháng 4, 2026 · ☕ 8 phút đọc · ✍️ MiaCasa Team", zh:"📅 2026年4月29日 · ☕ 8分钟阅读 · ✍️ MiaCasa团队"},
'auto-blog-where-to-stay-007': {en:"Choosing where to stay in Hanoi can completely shape your experience.", vn:"Chỗ ở sẽ ảnh hưởng rất nhiều đến trải nghiệm của bạn ở Hà Nội.", zh:"选择在河内的住宿会彻底影响你的旅行体验。"},
'auto-blog-where-to-stay-008': {en:"Some travelers want to be in the center of everything. Others prefer a quieter, more local atmosphere.", vn:"Có người muốn ở ngay trung tâm. Có người thích không gian yên tĩnh hơn.", zh:"有些旅行者想住在城市中心，有些则更喜欢安静、当地化的氛围。"},
'auto-blog-where-to-stay-009': {en:"Most people end up choosing between two very different areas:", vn:"Hầu hết mọi người sẽ lựa chọn giữa hai khu vực rất khác nhau:", zh:"大多数人最终会在两个完全不同的区域之间选择："},
'auto-blog-where-to-stay-010': {en:"The Old Quarter", vn:"Phố Cổ", zh:"老城区"},
'auto-blog-where-to-stay-011': {en:"A quieter residential neighborhood", vn:"Khu dân cư yên tĩnh", zh:"更安静的住宅区"},
'auto-blog-where-to-stay-012': {en:"Want energy, food, nightlife?", vn:"Thích sôi động, ẩm thực, nightlife?", zh:"想要活力、美食和夜生活？"},
'auto-blog-where-to-stay-013': {en:"Old Quarter", vn:"Phố Cổ", zh:"老城区"},
'auto-blog-where-to-stay-014': {en:"Book Your Dates →", vn:"Xem lịch trống →", zh:"查看可预订日期 →"},
'auto-blog-where-to-stay-015': {en:"Want calm, space, better sleep?", vn:"Thích yên tĩnh, thoải mái, ngủ ngon?", zh:"想要安静、空间和更好的睡眠？"},
'auto-blog-where-to-stay-016': {en:"Local areas (like Văn Miếu)", vn:"Khu Văn Miếu", zh:"本地区域（如文庙附近）"},
'auto-blog-where-to-stay-017': {en:"Book Your Dates →", vn:"Xem lịch trống →", zh:"查看可预订日期 →"},
'auto-blog-where-to-stay-018': {en:"Staying in the Old Quarter", vn:"Ở Phố Cổ", zh:"住在老城区"},
'auto-blog-where-to-stay-019': {en:"The Old Quarter is the heart of Hanoi. Everything happens here: street food, cafés, nightlife, markets. You can walk almost everywhere.", vn:"Phố Cổ là trung tâm của Hà Nội. Mọi thứ đều ở đây: ẩm thực đường phố, quán cà phê, chợ, nightlife. Bạn có thể đi bộ hầu hết mọi nơi.", zh:"老城区是河内的中心。一切都在这里发生：街头美食、咖啡馆、夜生活和市场，几乎可以步行到任何地方。"},
'auto-blog-where-to-stay-020': {en:"Best for:", vn:"Phù hợp với:", zh:"适合人群："},
'auto-blog-where-to-stay-021': {en:"First-time visitors", vn:"Người lần đầu đến Hà Nội", zh:"首次来河内的游客"},
'auto-blog-where-to-stay-022': {en:"Short stays", vn:"Lịch trình ngắn", zh:"短期停留"},
'auto-blog-where-to-stay-023': {en:"Travelers who want everything nearby", vn:"Thích sự tiện lợi", zh:"希望一切都在附近的旅行者"},
'auto-blog-where-to-stay-024': {en:"Things to consider:", vn:"Lưu ý:", zh:"需要考虑："},
'auto-blog-where-to-stay-025': {en:"It can be noisy", vn:"Có thể ồn", zh:"可能比较吵"},
'auto-blog-where-to-stay-026': {en:"Streets are crowded", vn:"Đông đúc", zh:"街道拥挤"},
'auto-blog-where-to-stay-027': {en:"Rooms are often smaller", vn:"Không gian nhỏ", zh:"房间通常较小"},
'auto-blog-where-to-stay-028': {en:"Staying in a quieter area (Văn Miếu and nearby)", vn:"Ở khu yên tĩnh (Văn Miếu và lân cận)", zh:"住在更安静的区域（文庙及周边）"},
'auto-blog-where-to-stay-029': {en:"Just a few minutes away, the atmosphere changes completely. Areas like Văn Miếu feel calmer, more local, and less crowded.", vn:"Chỉ cách trung tâm vài phút nhưng không khí hoàn toàn khác. Khu Văn Miếu yên tĩnh, địa phương hơn, ít đông đúc.", zh:"只需几分钟，氛围就完全不同。像文庙这样的区域更安静、更本地化，也不那么拥挤。"},
'auto-blog-where-to-stay-030': {en:"You'll still be close to Train Street and the Old Quarter (just a short ride away).", vn:"Bạn vẫn gần Train Street và Phố Cổ (chỉ cách một quãng ngắn).", zh:"你仍然靠近火车街和老城区（短途即可到达）。"},
'auto-blog-where-to-stay-031': {en:"Best for:", vn:"Phù hợp với:", zh:"适合人群："},
'auto-blog-where-to-stay-032': {en:"Couples", vn:"Cặp đôi", zh:"情侣"},
'auto-blog-where-to-stay-033': {en:"Remote workers", vn:"Người làm việc từ xa", zh:"远程工作者"},
'auto-blog-where-to-stay-034': {en:"Light sleepers", vn:"Người ngủ nhẹ", zh:"睡眠浅的人"},
'auto-blog-where-to-stay-035': {en:"Longer stays", vn:"Lưu trú dài ngày", zh:"长期停留"},
'auto-blog-where-to-stay-036': {en:"Which one should you choose?", vn:"Nên chọn khu nào?", zh:"你应该选择哪一个？"},
'auto-blog-where-to-stay-037': {en:"There's no single \"best\" place. It depends on how you want to experience Hanoi.", vn:"Không có lựa chọn \"tốt nhất\". Chỉ có lựa chọn phù hợp với bạn.", zh:"没有唯一“最佳”地点，取决于你想如何体验河内。"},
'auto-blog-where-to-stay-038': {en:"If you want energy → stay in the Old Quarter", vn:"Nếu thích sôi động → ở Phố Cổ", zh:"如果想要活力 → 住老城区"},
'auto-blog-where-to-stay-039': {en:"If you want balance → stay in a quieter neighborhood", vn:"Nếu thích cân bằng → ở khu yên tĩnh", zh:"如果想要平衡 → 住安静区域"},
'auto-blog-where-to-stay-040': {en:"Two ways to stay with MiaCasa", vn:"Hai lựa chọn tại MiaCasa", zh:"MiaCasa 的两种住宿选择"},
'auto-blog-where-to-stay-041': {en:"MiaCasa offers both options, depending on your travel style.", vn:"MiaCasa có cả hai lựa chọn, phù hợp với phong cách du lịch của bạn.", zh:"MiaCasa 提供两种选择，取决于你的旅行风格。"},
'auto-blog-where-to-stay-042': {en:"🛵 MiaCasa Old Quarter", vn:"🛵 MiaCasa Phố Cổ", zh:"🛵 MiaCasa 老城区"},
'auto-blog-where-to-stay-043': {en:"Stay in the center of everything.", vn:"Ở ngay trung tâm.", zh:"住在一切的中心"},
'auto-blog-where-to-stay-044': {en:"Full apartment", vn:"Toàn bộ căn hộ", zh:"整套公寓"},
'auto-blog-where-to-stay-045': {en:"Steps from Hoàn Kiếm Lake", vn:"Cách Hồ Hoàn Kiếm vài bước", zh:"距离还剑湖仅几步之遥"},
'auto-blog-where-to-stay-046': {en:"Ideal for groups and short stays", vn:"Lý tưởng cho nhóm và lưu trú ngắn", zh:"适合团体和短期停留"},
'auto-blog-where-to-stay-047': {en:"👉 Book Your Dates →", vn:"👉 Đặt ngày lưu trú →", zh:"👉 立即预订 →"},
'auto-blog-where-to-stay-048': {en:"🌿 MiaCasa Hanoi", vn:"🌿 MiaCasa Hà Nội", zh:"🌿 MiaCasa 河内"},
'auto-blog-where-to-stay-049': {en:"A quieter, more local experience.", vn:"Không gian yên tĩnh, gần gũi.", zh:"更安静、更本地化的体验"},
'auto-blog-where-to-stay-050': {en:"Private rooms", vn:"Phòng riêng", zh:"私人房间"},
'auto-blog-where-to-stay-051': {en:"Near Văn Miếu and Train Street", vn:"Gần Văn Miếu và Train Street", zh:"靠近文庙和火车街"},
'auto-blog-where-to-stay-052': {en:"Calm neighborhood, better sleep", vn:"Khu phố yên tĩnh, ngủ ngon hơn", zh:"安静区域，睡眠更好"},
'auto-blog-where-to-stay-053': {en:"👉 Book Your Dates →", vn:"👉 Đặt ngày lưu trú →", zh:"👉 立即预订 →"},
'auto-blog-where-to-stay-054': {en:"Final thoughts", vn:"Kết luận", zh:"最终总结"},
'auto-blog-where-to-stay-055': {en:"Where you stay in Hanoi is not just about location.", vn:"Chỗ ở không chỉ là vị trí.", zh:"在河内住宿不仅仅是地点问题。"},
'auto-blog-where-to-stay-056': {en:"It's about how you want to feel during your trip.", vn:"Mà là cảm giác bạn muốn có trong chuyến đi.", zh:"更关乎你在旅途中想要的感受。"},
'auto-blog-where-to-stay-057': {en:"Busy and energetic. Or calm and local.", vn:"Sôi động. Hoặc yên tĩnh.", zh:"热闹活力，或安静本地化。"},
'auto-blog-where-to-stay-058': {en:"Choose the one that fits you—and the city will feel completely different.", vn:"Chọn nơi phù hợp—và Hà Nội sẽ hoàn toàn khác biệt.", zh:"选择适合你的地方，整座城市都会变得不同。"},
'auto-blog-where-to-stay-059': {en:"🏠 Hosted by locals in Hanoi", vn:"🏠 Do người địa phương làm chủ", zh:"🏠 由河内本地人运营"},
'auto-blog-where-to-stay-060': {en:"⭐ 4.9★ from 200+ guests", vn:"⭐ 4.9★ từ hơn 200 khách", zh:"⭐ 来自200多位客人的4.9★评分"},
'auto-blog-where-to-stay-061': {en:"💰 Direct booking = better rate", vn:"💰 Đặt trực tiếp = giá tốt hơn", zh:"💰 直接预订 = 更优惠价格"},
'auto-blog-where-to-stay-062': {en:"📖 You might also like", vn:"📖 Có thể bạn cũng thích", zh:"📖 你可能也喜欢"},
'auto-blog-where-to-stay-063': {en:"3 Days in Hanoi", vn:"3 Ngày Ở Hà Nội", zh:"河内三日游"},
'auto-blog-where-to-stay-064': {en:"Complete itinerary with food, culture, and where to stay", vn:"Lịch trình chi tiết với ẩm thực, văn hóa và nơi ở", zh:"包含美食、文化与住宿的完整行程"},
'auto-blog-where-to-stay-065': {en:"Train Street Guide", vn:"Hướng Dẫn Train Street", zh:"火车街指南"},
'auto-blog-where-to-stay-066': {en:"Times, safety tips, and how to visit without crowds", vn:"Giờ tàu, mẹo an toàn, và cách tham quan tránh đông đúc", zh:"时间、安全提示以及避开人群的参观方式"},
'auto-blog-where-to-stay-067': {en:"← Back to all blog posts", vn:"← Quay lại tất cả bài viết", zh:"← 返回所有博客文章"},
// Where to Stay - Extended
'auto-blog-where-to-stay-068': {
  en: 'Hanoi is a city that rewards thoughtful planning. The neighborhood you choose for your stay will influence not just your sleep quality, but your entire experience of the city. Whether you\'re a first-time visitor eager to explore the bustling streets or a returning traveler seeking a more local rhythm, Hanoi has a neighborhood that fits.',
  vn: 'Hà Nội là thành phố đền đáp sự lên kế hoạch kỹ lưỡng. Khu phố bạn chọn để ở không chỉ ảnh hưởng đến chất lượng giấc ngủ mà còn ảnh hưởng đến toàn bộ trải nghiệm của bạn về thành phố. Dù bạn là du khách lần đầu háo hức khám phá những con phố nhộn nhịp hay du khách quay lại tìm kiếm nhịp sống địa phương hơn, Hà Nội đều có một khu phố phù hợp với bạn.',
  zh: '河内是一座回报精心规划的城市。您选择的住宿社区不仅会影响您的睡眠质量，还会影响您对这座城市的整体体验。无论您是渴望探索繁华街道的初次到访者，还是寻求更本地化节奏的回头客，河内都有一个适合您的社区。'
},
'auto-blog-where-to-stay-069': {
  en: 'Most people end up choosing between two very different areas:',
  vn: 'Hầu hết mọi người sẽ lựa chọn giữa hai khu vực rất khác nhau:',
  zh: '大多数人最终会在两个完全不同的区域之间选择：'
},
'auto-blog-where-to-stay-070': {
  en: 'The Old Quarter has been the commercial heart of Hanoi for over a thousand years. Its 36 streets were traditionally named after the goods sold there — silver, silk, paper, and more. Today, those streets are still alive with commerce, but now they also host some of the city\'s best restaurants, bars, and boutiques.',
  vn: 'Phố Cổ đã là trung tâm thương mại của Hà Nội trong hơn một nghìn năm. 36 con phố của nó được đặt tên theo các mặt hàng bán ở đó — bạc, lụa, giấy và nhiều hơn nữa. Ngày nay, những con phố đó vẫn sống động với thương mại, nhưng bây giờ chúng cũng là nơi có một số nhà hàng, quán bar và cửa hàng tốt nhất của thành phố.',
  zh: '老城区一千多年来一直是河内的商业中心。它的36条街道传统上以在那里出售的商品命名——银、丝绸、纸张等。如今，这些街道仍然充满商业活力，但现在它们也拥有城市中一些最好的餐厅、酒吧和精品店。'
},
'auto-blog-where-to-stay-071': {
  en: 'Staying here means you\'re never far from something interesting. A bowl of phở at dawn, a late-night beer on Tạ Hiện Street, a quiet moment by Hoàn Kiếm Lake — everything is within walking distance. The energy is infectious, and the convenience is unmatched.',
  vn: 'Ở đây có nghĩa là bạn không bao giờ xa những điều thú vị. Một bát phở lúc bình minh, một ly bia đêm trên phố Tạ Hiện, một khoảnh khắc yên tĩnh bên Hồ Hoàn Kiếm — mọi thứ đều trong khoảng cách đi bộ. Năng lượng thật sôi động và sự tiện lợi là vô song.',
  zh: '住在这里意味着您永远离有趣的事物不远。黎明的一碗河粉，谢现街深夜的一杯啤酒，还剑湖边的宁静时刻——一切都在步行距离之内。这里的活力感染人心，便利性无与伦比。'
},
'auto-blog-where-to-stay-072': {
  en: 'The Old Quarter is not for everyone. If you\'re a light sleeper or prefer peace and quiet, you might find the constant hum of the city overwhelming. But if you thrive on energy and want to be where the action is, there\'s no better place to stay.',
  vn: 'Phố Cổ không phải dành cho tất cả mọi người. Nếu bạn là người ngủ nhẹ hoặc thích yên tĩnh, bạn có thể thấy tiếng ồn liên tục của thành phố quá sức chịu đựng. Nhưng nếu bạn sống nhờ năng lượng và muốn ở nơi có hoạt động sôi động, không có nơi nào tốt hơn để ở.',
  zh: '老城区并不适合所有人。如果您睡眠浅或喜欢安静，您可能会觉得城市持续的喧嚣让人难以承受。但如果您在活力中茁壮成长并想身处活动中心，没有比这更好的住宿地点了。'
},
'auto-blog-where-to-stay-073': {
  en: 'The Văn Miếu area is named after the Temple of Literature, Vietnam\'s first university. This neighborhood has a different energy — slower, more residential, and deeply connected to the city\'s history. The streets are tree-lined, the pace is relaxed, and the people you\'ll encounter are more likely to be locals than tourists.',
  vn: 'Khu Văn Miếu được đặt tên theo Văn Miếu – Quốc Tử Giám, trường đại học đầu tiên của Việt Nam. Khu phố này có một năng lượng khác — chậm hơn, nhiều nhà ở hơn và gắn bó sâu sắc với lịch sử của thành phố. Những con phố có nhiều cây xanh, nhịp sống thư thái và những người bạn gặp có nhiều khả năng là người dân địa phương hơn là du khách.',
  zh: '文庙区以越南第一所大学文庙国子监命名。这个社区有着不同的能量——更慢、更多住宅、与城市历史紧密相连。街道两旁绿树成荫，节奏放松，您遇到的人更可能是当地人而不是游客。'
},
'auto-blog-where-to-stay-074': {
  en: 'The quieter areas of Hanoi offer a different kind of magic. You\'ll wake up to the sound of birds rather than motorbikes. You\'ll find local cafés where the same people gather every morning. And you\'ll experience a side of the city that most tourists never see.',
  vn: 'Những khu vực yên tĩnh hơn của Hà Nội mang đến một loại phép thuật khác. Bạn sẽ thức dậy với tiếng chim thay vì tiếng xe máy. Bạn sẽ tìm thấy những quán cà phê địa phương nơi những người giống nhau tụ tập mỗi sáng. Và bạn sẽ trải nghiệm một khía cạnh của thành phố mà hầu hết du khách không bao giờ thấy.',
  zh: '河内更安静的区域提供了另一种魔力。您将醒来听到鸟鸣而不是摩托车声。您会发现当地咖啡馆，每天早晨相同的人聚集在那里。您将体验到大多数游客从未见过的城市的一面。'
},
'auto-blog-where-to-stay-075': {
  en: 'Think about what matters most to you. Do you want to step out of your door and be surrounded by energy, food, and activity? Or do you prefer to retreat to a quiet space after a day of exploration? Both options are valid, and both can lead to a memorable trip.',
  vn: 'Hãy nghĩ về điều quan trọng nhất đối với bạn. Bạn có muốn bước ra khỏi cửa và được bao quanh bởi năng lượng, ẩm thực và hoạt động? Hay bạn thích rút lui về một không gian yên tĩnh sau một ngày khám phá? Cả hai lựa chọn đều hợp lệ và cả hai đều có thể dẫn đến một chuyến đi đáng nhớ.',
  zh: '想想什么对您最重要。您想走出家门就被活力、美食和活动包围吗？还是您更喜欢在一天的探索之后退回到安静的空间？两种选择都有效，两者都可以带来难忘的旅行。'
},
'auto-blog-where-to-stay-076': {
  en: 'Many travelers choose to split their stay — a few nights in the Old Quarter for the excitement, followed by a few nights in a quieter area for rest and reflection. This gives you the best of both worlds.',
  vn: 'Nhiều du khách chọn chia kỳ lưu trú của họ — vài đêm ở Phố Cổ cho sự sôi động, tiếp theo là vài đêm ở khu vực yên tĩnh hơn để nghỉ ngơi và suy ngẫm. Điều này mang lại cho bạn những điều tốt nhất của cả hai thế giới.',
  zh: '许多旅行者选择分开住宿——在老城区住几晚体验热闹，然后在更安静的区域住几晚休息和反思。这为您提供了两全其美的选择。'
},
'auto-blog-where-to-stay-077': {
  en: 'This is the choice for travelers who want to be in the thick of it. You\'ll have a private apartment in the heart of the Old Quarter, surrounded by the city\'s best food, nightlife, and culture.',
  vn: 'Đây là lựa chọn cho những du khách muốn ở trung tâm của mọi thứ. Bạn sẽ có một căn hộ riêng ngay giữa lòng Phố Cổ, được bao quanh bởi ẩm thực, cuộc sống về đêm và văn hóa tốt nhất của thành phố.',
  zh: '这是为想要置身于一切中心的旅行者的选择。您将在老城区中心拥有一套私人公寓，周围环绕着城市最好的美食、夜生活和文化。'
},
'auto-blog-where-to-stay-078': {
  en: 'This is the choice for travelers who want to experience Hanoi like a local. You\'ll stay in a quiet residential neighborhood, close to the city\'s cultural landmarks but away from the crowds. Perfect for couples, remote workers, and anyone who values a good night\'s sleep.',
  vn: 'Đây là lựa chọn cho những du khách muốn trải nghiệm Hà Nội như người dân địa phương. Bạn sẽ ở trong một khu dân cư yên tĩnh, gần các địa danh văn hóa của thành phố nhưng tránh xa đám đông. Hoàn hảo cho các cặp đôi, người làm việc từ xa và bất kỳ ai coi trọng giấc ngủ ngon.',
  zh: '这是为想要像当地人一样体验河内的旅行者的选择。您将住在一个安静的住宅区，靠近城市的文化地标但远离人群。非常适合情侣、远程工作者和任何重视良好睡眠的人。'
},
'auto-blog-where-to-stay-079': {
  en: 'The Old Quarter and the quieter neighborhoods offer two completely different experiences of Hanoi. One is loud, vibrant, and full of energy. The other is calm, local, and deeply authentic. Neither is better — they\'re just different.',
  vn: 'Phố Cổ và những khu phố yên tĩnh hơn mang đến hai trải nghiệm hoàn toàn khác nhau về Hà Nội. Một nơi thì ồn ào, sôi động và tràn đầy năng lượng. Nơi kia thì yên tĩnh, địa phương và vô cùng chân thực. Không nơi nào tốt hơn — chúng chỉ khác nhau.',
  zh: '老城区和更安静的社区提供了两种完全不同的河内体验。一个热闹、充满活力和能量。另一个平静、本地化和非常真实。没有哪个更好——它们只是不同。'
},
'auto-blog-where-to-stay-080': {
  en: 'Whatever you choose, we hope you fall in love with Hanoi the way we have. It\'s a city that rewards curiosity, patience, and an open heart. And wherever you stay, you\'ll find that the people, the food, and the rhythm of daily life make it a place you\'ll never forget.',
  vn: 'Dù bạn chọn gì, chúng tôi hy vọng bạn sẽ yêu Hà Nội theo cách chúng tôi đã yêu. Đó là thành phố đền đáp sự tò mò, kiên nhẫn và một trái tim rộng mở. Và dù bạn ở đâu, bạn sẽ thấy rằng con người, ẩm thực và nhịp sống hàng ngày khiến nó trở thành một nơi bạn sẽ không bao giờ quên.',
  zh: '无论您选择什么，我们希望您能像我们一样爱上河内。这是一座回报好奇心、耐心和开放心态的城市。无论您住在哪里，您都会发现这里的人、食物和日常生活的节奏使它成为一个您永远不会忘记的地方。'
},
/* ── BLOG - WHERE TO STAY - TABLE COLOR CODING ──────────────────── */

'blog-stay-table-walk-oq': {
  en: '👣 Walk everywhere',
  vn: '👣 Đi bộ mọi nơi',
  zh: '👣 步行可达各处'
},
'blog-stay-table-walk-quiet': {
  en: '🚗 Short Grab rides',
  vn: '🚗 Đi Grab ngắn',
  zh: '🚗 短途 Grab 出行'
},
'blog-stay-table-sleep-oq': {
  en: '😴 Good (earplugs recommended)',
  vn: '😴 Tốt (nên mang nút tai)',
  zh: '😴 良好（建议戴耳塞）'
},
'blog-stay-table-sleep-quiet': {
  en: '🛌 Excellent',
  vn: '🛌 Tuyệt vời',
  zh: '🛌 极好'
},
'blog-stay-table-local-oq': {
  en: '🌆 Vibrant & touristy',
  vn: '🌆 Sôi động & đông du khách',
  zh: '🌆 充满活力 & 游客众多'
},
'blog-stay-table-local-quiet': {
  en: '🏡 Authentic local life',
  vn: '🏡 Cuộc sống địa phương chân thực',
  zh: '🏡 真实的本地生活'
},
'blog-stay-table-value-oq': {
  en: '💰 Fair',
  vn: '💰 Hợp lý',
  zh: '💰 合理'
},
'blog-stay-table-value-quiet': {
  en: '💰💰 Better value',
  vn: '💰💰 Giá trị tốt hơn',
  zh: '💰💰 性价比更高'
},
'blog-stay-table-food-oq': {
  en: '🍜 Endless choices',
  vn: '🍜 Vô số lựa chọn',
  zh: '🍜 无尽的选择'
},
'blog-stay-table-food-quiet': {
  en: '🍛 Plenty, less crowded',
  vn: '🍛 Nhiều, ít đông đúc hơn',
  zh: '🍛 丰富，人少'
},
'blog-stay-table-walk-oq': {
  en: '👣 Walk everywhere',
  vn: '👣 Đi bộ mọi nơi',
  zh: '👣 步行可达各处'
},
'blog-stay-table-walk-quiet': {
  en: '🚗 Short Grab rides',
  vn: '🚗 Đi Grab ngắn',
  zh: '🚗 短途 Grab 出行'
},
'blog-stay-table-sleep-oq': {
  en: '😴 Good (earplugs recommended)',
  vn: '😴 Tốt (nên mang nút tai)',
  zh: '😴 良好（建议戴耳塞）'
},
'blog-stay-table-sleep-quiet': {
  en: '🛌 Excellent',
  vn: '🛌 Tuyệt vời',
  zh: '🛌 极好'
},
'blog-stay-table-local-oq': {
  en: '🌆 Vibrant & touristy',
  vn: '🌆 Sôi động & đông du khách',
  zh: '🌆 充满活力 & 游客众多'
},
'blog-stay-table-local-quiet': {
  en: '🏡 Authentic local life',
  vn: '🏡 Cuộc sống địa phương chân thực',
  zh: '🏡 真实的本地生活'
},
'blog-stay-table-value-oq': {
  en: '💰 Fair',
  vn: '💰 Hợp lý',
  zh: '💰 合理'
},
'blog-stay-table-value-quiet': {
  en: '💰💰 Better value',
  vn: '💰💰 Giá trị tốt hơn',
  zh: '💰💰 性价比更高'
},
'blog-stay-table-food-oq': {
  en: '🍜 Endless choices',
  vn: '🍜 Vô số lựa chọn',
  zh: '🍜 无尽的选择'
},
'blog-stay-table-food-quiet': {
  en: '🍛 Plenty, less crowded',
  vn: '🍛 Nhiều, ít đông đúc hơn',
  zh: '🍛 丰富，人少'
},
'blog-stay-table-energy-oq': {
  en: '⚡ High - 24/7',
  vn: '⚡ Cao - 24/7',
  zh: '⚡ 高 - 24/7'
},
'blog-stay-table-energy-quiet': {
  en: '🌿 Low - peaceful',
  vn: '🌿 Thấp - yên bình',
  zh: '🌿 低 - 平和'
},
  // ── BLOG - WHAT TO EAT IN HANOI ──────────────────────────────────

  // Meta & Header
  'hanoi-food-title': {
    en: 'What to Eat in Hanoi (2026): 10 Local Dishes You Shouldn\'t Miss | MiaCasa',
    vn: 'Ăn Gì Ở Hà Nội (2026): 10 Món Ăn Địa Phương Không Thể Bỏ Lỡ | MiaCasa',
    zh: '河内吃什么（2026）：10种不容错过的当地美食 | MiaCasa'
  },
  'hanoi-food-category': {
    en: '🍜 HANOI FOOD GUIDE',
    vn: '🍜 HƯỚNG DẪN ẨM THỰC HÀ NỘI',
    zh: '🍜 河内美食指南'
  },
  'hanoi-food-title-h1': {
    en: 'What to Eat in Hanoi (2026): 10 Local Dishes You Shouldn\'t Miss',
    vn: 'Ăn Gì Ở Hà Nội (2026): 10 Món Ăn Địa Phương Không Thể Bỏ Lỡ',
    zh: '河内吃什么（2026）：10种不容错过的当地美食'
  },
  'hanoi-food-subtitle': {
    en: 'A local food guide to Hanoi\'s street food, traditional dishes, and everyday meals.',
    vn: 'Hướng dẫn ẩm thực địa phương về đồ ăn đường phố, món ăn truyền thống và bữa ăn hàng ngày ở Hà Nội.',
    zh: '河内街头美食、传统菜肴和日常餐点的本地美食指南。'
  },
  'hanoi-food-meta': {
    en: '📅 June 21, 2026 · ☕ 10 min read · ✍️ By MiaCasa Team',
    vn: '📅 21 Tháng 6, 2026 · ☕ Đọc 10 phút · ✍️ Đội ngũ MiaCasa',
    zh: '📅 2026年6月21日 · ☕ 阅读10分钟 · ✍️ MiaCasa团队'
  },
  // ── BLOG CARD - WHAT TO EAT IN HANOI ─────────────────────────────

'hanoi-food-meta-short': {
  en: '📅 June 21, 2026 · ☕ 10 min read',
  vn: '📅 21 Tháng 6, 2026 · ☕ Đọc 10 phút',
  zh: '📅 2026年6月21日 · ☕ 阅读10分钟'
},
  // ── BLOG - WHAT TO EAT IN HANOI - BREADCRUMB ──────────────────

  'hanoi-food-breadcrumb': {
    en: 'What to Eat in Hanoi',
    vn: 'Ăn Gì Ở Hà Nội',
    zh: '河内吃什么'
  },
  // Table of Contents
  'hanoi-toc-title': {
    en: '📚 In this guide:',
    vn: '📚 Trong hướng dẫn này:',
    zh: '📚 本指南包含：'
  },
  'hanoi-toc-intro': {
    en: 'Hanoi Is a City You Taste Before You Understand',
    vn: 'Hà Nội Là Thành Phố Bạn Nếm Trước Khi Hiểu',
    zh: '河内是一座你先品尝后理解的城市'
  },
  'hanoi-toc-pho': {
    en: '1. Pho: Hanoi\'s Most Famous Dish',
    vn: '1. Phở: Món Ăn Nổi Tiếng Nhất Hà Nội',
    zh: '1. 河粉：河内最著名的菜肴'
  },
  'hanoi-toc-bun-cha': {
    en: '2. Bun Cha: The Dish That Locals Love',
    vn: '2. Bún Chả: Món Ăn Được Người Địa Phương Yêu Thích',
    zh: '2. 烤肉米粉：当地人喜爱的菜肴'
  },
  'hanoi-toc-banh-mi': {
    en: '3. Banh Mi: Vietnam\'s Famous Sandwich',
    vn: '3. Bánh Mì: Bánh Sandwich Nổi Tiếng Việt Nam',
    zh: '3. 越南法棍：越南著名的三明治'
  },
  'hanoi-toc-egg-coffee': {
    en: '4. Egg Coffee: Hanoi\'s Most Famous Drink',
    vn: '4. Cà Phê Trứng: Đồ Uống Nổi Tiếng Nhất Hà Nội',
    zh: '4. 蛋咖啡：河内最著名的饮品'
  },
  'hanoi-toc-bun-bo': {
    en: '5. Bun Bo Nam Bo',
    vn: '5. Bún Bò Nam Bộ',
    zh: '5. 南部牛肉米粉'
  },
  'hanoi-toc-cha-ca': {
    en: '6. Cha Ca: One of Hanoi\'s Historic Dishes',
    vn: '6. Chả Cá: Một Trong Những Món Ăn Lịch Sử Của Hà Nội',
    zh: '6. 煎鱼饼：河内的历史名菜之一'
  },
  'hanoi-toc-banh-cuon': {
    en: '7. Banh Cuon',
    vn: '7. Bánh Cuốn',
    zh: '7. 越南蒸粉卷'
  },
  'hanoi-toc-xoi': {
    en: '8. Xoi: Sticky Rice for Breakfast',
    vn: '8. Xôi: Món Xôi Cho Bữa Sáng',
    zh: '8. 糯米饭：早餐的糯米饭'
  },
  'hanoi-toc-nem-ran': {
    en: '9. Nem Ran: Northern Spring Rolls',
    vn: '9. Nem Rán: Chả Giò Miền Bắc',
    zh: '9. 炸春卷：北方春卷'
  },
  'hanoi-toc-bun-rieu': {
    en: '10. Bun Rieu',
    vn: '10. Bún Riêu',
    zh: '10. 蟹汤粉'
  },
  'hanoi-toc-etiquette': {
    en: 'Street Food Etiquette',
    vn: 'Nghi Thức Ẩm Thực Đường Phố',
    zh: '街头美食礼仪'
  },
  'hanoi-toc-safe': {
    en: 'Is Street Food Safe?',
    vn: 'Đồ Ăn Đường Phố Có An Toàn Không?',
    zh: '街头食品安全吗？'
  },
  'hanoi-toc-morning-evening': {
    en: 'Morning Food vs Evening Food',
    vn: 'Đồ Ăn Sáng Và Đồ Ăn Tối',
    zh: '早餐与晚餐'
  },
  'hanoi-toc-faq': {
    en: 'Frequently Asked Questions',
    vn: 'Câu Hỏi Thường Gặp',
    zh: '常见问题'
  },
  'hanoi-toc-final': {
    en: 'Final Thoughts',
    vn: 'Lời Kết',
    zh: '最后的话'
  },
  // ── BLOG - WHAT TO EAT IN HANOI - PROPERTY CTAs ──────────────────

  'hanoi-cta-pho': {
    en: '🍜 Want to wake up to pho at dawn? Stay at MiaCasa Hanoi — just a short walk from the best local pho spots.',
    vn: '🍜 Muốn thức dậy với phở lúc bình minh? Ở tại MiaCasa Hà Nội — chỉ cách vài bước đến những quán phở ngon nhất.',
    zh: '🍜 想清晨醒来就能吃到河粉？入住 MiaCasa Hanoi — 离最好的本地河粉店仅几步之遥。'
  },
  'hanoi-cta-egg-coffee': {
    en: '☕ Start your morning with a hidden egg coffee experience. MiaCasa Hanoi is surrounded by the city\'s best cafés.',
    vn: '☕ Bắt đầu buổi sáng với trải nghiệm cà phê trứng ẩn. MiaCasa Hà Nội được bao quanh bởi những quán cà phê ngon nhất thành phố.',
    zh: '☕ 从隐藏的蛋咖啡体验开始你的早晨。MiaCasa Hanoi 周围环绕着城市最好的咖啡馆。'
  },
  'hanoi-cta-oq-food': {
    en: '🏙️ Craving street food at every turn? MiaCasa Old Quarter puts you in the heart of Hanoi\'s food scene — walk to bún chả, bánh mì, and more.',
    vn: '🏙️ Thèm đồ ăn đường phố mọi lúc? MiaCasa Phố Cổ đưa bạn vào trung tâm ẩm thực Hà Nội — đi bộ đến bún chả, bánh mì và hơn thế nữa.',
    zh: '🏙️ 随时想吃街头美食？MiaCasa Old Quarter 将您置于河内美食中心 — 步行即可到达烤肉米粉、越南法棍等。'
  },
  'hanoi-cta-food-guide': {
    en: '📍 Stay where the food is. Both properties are steps from Hanoi\'s best street food — choose your base and start eating.',
    vn: '📍 住在美食中心。Cả hai chỗ nghỉ đều gần những món ăn đường phố ngon nhất Hà Nội — chọn nơi ở và bắt đầu thưởng thức.',
    zh: '📍 住在美食中心。两处住宿都靠近河内最好的街头美食 — 选择您的基地，开始美食之旅。'
  },
  'hanoi-cta-explore': {
    en: '✨ Explore both properties →',
    vn: '✨ Khám phá cả hai chỗ nghỉ →',
    zh: '✨ 探索两处住宿 →'
  },
  'hanoi-cta-book-food': {
    en: '📅 Book your foodie stay →',
    vn: '📅 Đặt phòng cho chuyến ăn uống của bạn →',
    zh: '📅 预订您的美食之旅住宿 →'
  },
  // ── BLOG - WHAT TO EAT IN HANOI - CTA BUTTONS ──────────────────

'hanoi-cta-pho-btn': {
  en: 'View MiaCasa Hanoi →',
  vn: 'Xem MiaCasa Hà Nội →',
  zh: '查看 MiaCasa Hanoi →'
},
'hanoi-cta-egg-btn': {
  en: 'View MiaCasa Hanoi →',
  vn: 'Xem MiaCasa Hà Nội →',
  zh: '查看 MiaCasa Hanoi →'
},
'hanoi-cta-oq-btn': {
  en: 'View Old Quarter →',
  vn: 'Xem Phố Cổ →',
  zh: '查看老城区 →'
},
'hanoi-cta-btn-hanoi': {
  en: '🌿 MiaCasa Hanoi',
  vn: '🌿 MiaCasa Hà Nội',
  zh: '🌿 MiaCasa Hanoi'
},
'hanoi-cta-btn-oq': {
  en: '🏙️ MiaCasa Old Quarter',
  vn: '🏙️ MiaCasa Phố Cổ',
  zh: '🏙️ MiaCasa Old Quarter'
},
'hanoi-cta-btn-avail': {
  en: '📅 Check Availability',
  vn: '📅 Kiểm tra lịch trống',
  zh: '📅 查看空房情况'
},
  // Introduction
  'hanoi-intro-p1': {
    en: 'People often remember their first impression of Hanoi through food.',
    vn: 'Mọi người thường nhớ ấn tượng đầu tiên về Hà Nội qua ẩm thực.',
    zh: '人们通常通过美食来记住对河内的第一印象。'
  },
  'hanoi-intro-p2': {
    en: 'Maybe it is the smell of broth coming from a tiny pho shop at six in the morning. Maybe it is smoke rising from a grill on a narrow street. Or perhaps it is sitting on a small plastic stool with a cup of strong coffee while thousands of motorbikes pass by.',
    vn: 'Có thể là mùi nước dùng từ một quán phở nhỏ lúc sáu giờ sáng. Có thể là khói từ bếp nướng trên một con phố nhỏ. Hoặc có lẽ là ngồi trên chiếc ghế nhựa nhỏ với tách cà phê đậm trong khi hàng nghìn xe máy lướt qua.',
    zh: '也许是清晨六点小河粉店里飘出的汤香。也许是窄街上烧烤升起的烟雾。又或者是坐在小塑料凳上，端着一杯浓咖啡，看着成千上万的摩托车经过。'
  },
  'hanoi-intro-p3': {
    en: 'Food in Hanoi is not separated from daily life.',
    vn: 'Ẩm thực ở Hà Nội không tách rời khỏi cuộc sống hàng ngày.',
    zh: '河内的美食与日常生活密不可分。'
  },
  'hanoi-intro-p4': {
    en: 'Restaurants spill onto sidewalks. Grandmothers prepare breakfast at dawn. Office workers gather for lunch at the same family-run shops every day. Small cafés hide inside old apartment buildings. Entire streets become known for a single dish.',
    vn: 'Nhà hàng tràn ra vỉa hè. Những bà cụ chuẩn bị bữa sáng từ lúc bình minh. Nhân viên văn phòng tụ tập ăn trưa tại cùng quán ăn gia đình mỗi ngày. Những quán cà phê nhỏ ẩn mình trong các tòa nhà cũ. Cả con phố trở nên nổi tiếng với một món ăn duy nhất.',
    zh: '餐厅延伸到人行道上。老奶奶在黎明时分准备早餐。上班族每天在同一家家庭式餐厅吃午餐。小咖啡馆藏身于老旧的公寓楼中。整条街道因一道菜而闻名。'
  },
  'hanoi-intro-p5': {
    en: 'Many visitors arrive expecting Vietnamese food to be the same everywhere in the country. It is not.',
    vn: 'Nhiều du khách đến với kỳ vọng ẩm thực Việt Nam giống nhau ở mọi nơi. Thực tế không phải vậy.',
    zh: '许多游客以为越南菜在全国各地都一样。事实并非如此。'
  },
  'hanoi-intro-p6': {
    en: 'Northern Vietnamese cuisine, especially in Hanoi, tends to be:',
    vn: 'Ẩm thực miền Bắc Việt Nam, đặc biệt là ở Hà Nội, thường có xu hướng:',
    zh: '越南北部美食，尤其是河内，往往：'
  },
  'hanoi-intro-li1': {
    en: 'Less sweet',
    vn: 'Ít ngọt hơn',
    zh: '不那么甜'
  },
  'hanoi-intro-li2': {
    en: 'More balanced',
    vn: 'Cân bằng hơn',
    zh: '更平衡'
  },
  'hanoi-intro-li3': {
    en: 'Lighter in seasoning',
    vn: 'Gia vị nhẹ hơn',
    zh: '调味更清淡'
  },
  'hanoi-intro-li4': {
    en: 'Focused on fresh herbs and broth',
    vn: 'Tập trung vào rau thơm tươi và nước dùng',
    zh: '注重新鲜香草和汤底'
  },
  'hanoi-intro-li5': {
    en: 'Deeply connected to local traditions',
    vn: 'Gắn bó sâu sắc với truyền thống địa phương',
    zh: '与当地传统紧密相连'
  },
  'hanoi-intro-p7': {
    en: 'The best meals in Hanoi are not always found on social media.',
    vn: 'Những bữa ăn ngon nhất ở Hà Nội không phải lúc nào cũng được tìm thấy trên mạng xã hội.',
    zh: '河内最好的美食并不总是在社交媒体上能找到。'
  },
  'hanoi-intro-p8': {
    en: 'Sometimes the most memorable dish comes from a place with no English menu, a few plastic stools, and three generations of one family cooking together.',
    vn: 'Đôi khi món ăn đáng nhớ nhất đến từ một nơi không có menu tiếng Anh, vài chiếc ghế nhựa và ba thế hệ trong một gia đình cùng nấu ăn.',
    zh: '有时最令人难忘的菜肴来自一个没有英文菜单、只有几个塑料凳子和三代人一起做饭的地方。'
  },
  'hanoi-intro-p9': {
    en: 'This guide covers the foods that first-time visitors should try, along with practical advice from a local perspective.',
    vn: 'Hướng dẫn này bao gồm những món ăn mà du khách lần đầu nên thử, cùng với lời khuyên thực tế từ góc nhìn địa phương.',
    zh: '本指南涵盖了初次到访者应该尝试的美食，以及来自本地视角的实用建议。'
  },

  // Pho
  'hanoi-pho-title': {
    en: '1. Pho: Hanoi\'s Most Famous Dish',
    vn: '1. Phở: Món Ăn Nổi Tiếng Nhất Hà Nội',
    zh: '1. 河粉：河内最著名的菜肴'
  },
  'hanoi-pho-p1': {
    en: 'If there is one dish everyone associates with Vietnam, it is pho.',
    vn: 'Nếu có một món ăn mà mọi người đều liên tưởng đến Việt Nam, đó là phở.',
    zh: '如果有一道菜让人联想到越南，那就是河粉。'
  },
  'hanoi-pho-p2': {
    en: 'But pho in Hanoi is different from pho in southern Vietnam.',
    vn: 'Nhưng phở ở Hà Nội khác với phở ở miền Nam Việt Nam.',
    zh: '但河内的河粉与越南南部的河粉不同。'
  },
  'hanoi-pho-p3': {
    en: 'The broth is usually clearer and less sweet. The flavors are more delicate. The focus is on the beef, the broth, and the noodles rather than a large plate of herbs and sauces.',
    vn: 'Nước dùng thường trong hơn và ít ngọt hơn. Hương vị tinh tế hơn. Tập trung vào thịt bò, nước dùng và sợi phở hơn là một đĩa rau thơm và nước chấm lớn.',
    zh: '汤底通常更清澈，不那么甜。味道更精致。重点在牛肉、汤底和面条上，而不是一大盘香草和酱料。'
  },
  'hanoi-pho-p4': {
    en: 'A typical bowl contains:',
    vn: 'Một tô phở điển hình gồm:',
    zh: '一碗典型的河粉包含：'
  },
  'hanoi-pho-li1': {
    en: 'Rice noodles',
    vn: 'Bánh phở',
    zh: '米粉'
  },
  'hanoi-pho-li2': {
    en: 'Slow-cooked beef broth',
    vn: 'Nước dùng bò ninh chậm',
    zh: '慢炖牛肉汤'
  },
  'hanoi-pho-li3': {
    en: 'Thin slices of beef',
    vn: 'Thịt bò thái mỏng',
    zh: '薄切牛肉'
  },
  'hanoi-pho-li4': {
    en: 'Green onions',
    vn: 'Hành lá',
    zh: '葱花'
  },
  'hanoi-pho-li5': {
    en: 'Fresh herbs',
    vn: 'Rau thơm tươi',
    zh: '新鲜香草'
  },
  'hanoi-pho-li6': {
    en: 'Optional chili and lime',
    vn: 'Ớt và chanh tùy chọn',
    zh: '可选辣椒和青柠'
  },
  'hanoi-pho-p5': {
    en: 'Many locals still consider pho a breakfast food.',
    vn: 'Nhiều người dân địa phương vẫn coi phở là món ăn sáng.',
    zh: '许多当地人仍然把河粉当作早餐。'
  },
  'hanoi-pho-p6': {
    en: 'Walking through Hanoi at seven in the morning, you will see restaurants already full of office workers, students, and elderly residents enjoying their daily bowl.',
    vn: 'Đi dạo qua Hà Nội lúc bảy giờ sáng, bạn sẽ thấy các quán ăn đã đầy dân văn phòng, sinh viên và người già đang thưởng thức tô phở hàng ngày của họ.',
    zh: '早上七点走在河内街头，你会看到餐厅里已经坐满了上班族、学生和老年居民，享受他们日常的一碗河粉。'
  },
  'hanoi-pho-varieties': {
    en: 'Popular varieties include:',
    vn: 'Các loại phở phổ biến gồm:',
    zh: '常见的河粉品种包括：'
  },
  'hanoi-pho-bo': {
    en: 'Phở bò — beef pho',
    vn: 'Phở bò — phở với thịt bò',
    zh: '牛肉河粉'
  },
  'hanoi-pho-ga': {
    en: 'Phở gà — chicken pho',
    vn: 'Phở gà — phở với thịt gà',
    zh: '鸡肉河粉'
  },
  'hanoi-pho-tai': {
    en: 'Phở tái — rare beef',
    vn: 'Phở tái — thịt bò tái',
    zh: '生牛肉河粉'
  },
  'hanoi-pho-chin': {
    en: 'Phở chín — well-cooked beef',
    vn: 'Phở chín — thịt bò chín',
    zh: '熟牛肉河粉'
  },
  'hanoi-pho-p7': {
    en: 'The experience matters as much as the dish itself.',
    vn: 'Trải nghiệm quan trọng không kém món ăn.',
    zh: '体验和菜肴本身一样重要。'
  },
  'hanoi-pho-p8': {
    en: 'Sit on a small stool. Watch the street wake up. Listen to the sounds of the city.',
    vn: 'Ngồi trên chiếc ghế nhỏ. Nhìn con phố thức dậy. Lắng nghe âm thanh của thành phố.',
    zh: '坐在小凳子上。看着街道苏醒。聆听城市的声音。'
  },
  'hanoi-pho-p9': {
    en: 'That is Hanoi.',
    vn: 'Đó là Hà Nội.',
    zh: '这就是河内。'
  },

  // Bun Cha
  'hanoi-bun-cha-title': {
    en: '2. Bun Cha: The Dish That Locals Love',
    vn: '2. Bún Chả: Món Ăn Được Người Địa Phương Yêu Thích',
    zh: '2. 烤肉米粉：当地人喜爱的菜肴'
  },
  'hanoi-bun-cha-p1': {
    en: 'Many international travelers discovered bun cha after the famous dinner involving Barack Obama and Anthony Bourdain.',
    vn: 'Nhiều du khách quốc tế đã phát hiện ra bún chả sau bữa tối nổi tiếng của Barack Obama và Anthony Bourdain.',
    zh: '许多国际旅行者是在奥巴马和安东尼·波登那顿著名晚餐之后才发现烤肉米粉的。'
  },
  'hanoi-bun-cha-p2': {
    en: 'Hanoians had loved it long before.',
    vn: 'Người Hà Nội đã yêu thích nó từ lâu trước đó.',
    zh: '河内人早就爱上这道菜了。'
  },
  'hanoi-bun-cha-p3': {
    en: 'Bun cha consists of:',
    vn: 'Bún chả gồm:',
    zh: '烤肉米粉包含：'
  },
  'hanoi-bun-cha-li1': {
    en: 'Grilled pork',
    vn: 'Thịt heo nướng',
    zh: '烤猪肉'
  },
  'hanoi-bun-cha-li2': {
    en: 'Rice noodles',
    vn: 'Bún',
    zh: '米粉'
  },
  'hanoi-bun-cha-li3': {
    en: 'Fresh herbs',
    vn: 'Rau thơm tươi',
    zh: '新鲜香草'
  },
  'hanoi-bun-cha-li4': {
    en: 'Dipping sauce',
    vn: 'Nước chấm',
    zh: '蘸酱'
  },
  'hanoi-bun-cha-li5': {
    en: 'Fried spring rolls in some restaurants',
    vn: 'Chả giò trong một số nhà hàng',
    zh: '一些餐厅会配炸春卷'
  },
  'hanoi-bun-cha-p4': {
    en: 'The pork is grilled over charcoal, giving it a smoky flavor that mixes beautifully with the sweet and savory dipping broth.',
    vn: 'Thịt được nướng trên than, tạo nên hương vị khói hòa quyện tuyệt vời với nước chấm chua ngọt.',
    zh: '猪肉在炭火上烤制，赋予其烟熏风味，与酸甜蘸酱完美融合。'
  },
  'hanoi-bun-cha-p5': {
    en: 'Unlike pho, which is commonly eaten in the morning, bun cha is traditionally a lunch dish.',
    vn: 'Khác với phở thường được ăn vào buổi sáng, bún chả theo truyền thống là món ăn trưa.',
    zh: '与通常早上吃的河粉不同，烤肉米粉传统上是午餐。'
  },
  'hanoi-bun-cha-p6': {
    en: 'Around noon, many bun cha restaurants become crowded with office workers.',
    vn: 'Khoảng trưa, nhiều quán bún chả trở nên đông đúc với dân văn phòng.',
    zh: '中午时分，许多烤肉米粉店挤满了上班族。'
  },
  'hanoi-bun-cha-p7': {
    en: 'The meal is simple: Dip the noodles into the bowl, add herbs, eat the grilled pork, and enjoy everything together.',
    vn: 'Bữa ăn rất đơn giản: Nhúng bún vào bát, thêm rau thơm, ăn thịt nướng và thưởng thức tất cả cùng nhau.',
    zh: '吃法很简单：将米粉蘸入碗中，加入香草，吃烤猪肉，一起享用。'
  },
  'hanoi-bun-cha-p8': {
    en: 'For many visitors, bun cha becomes their favorite meal in Hanoi.',
    vn: 'Đối với nhiều du khách, bún chả trở thành bữa ăn yêu thích của họ ở Hà Nội.',
    zh: '对许多游客来说，烤肉米粉成为他们在河内最喜欢的食物。'
  },

  // Banh Mi
  'hanoi-banh-mi-title': {
    en: '3. Banh Mi: Vietnam\'s Famous Sandwich',
    vn: '3. Bánh Mì: Bánh Sandwich Nổi Tiếng Việt Nam',
    zh: '3. 越南法棍：越南著名的三明治'
  },
  'hanoi-banh-mi-p1': {
    en: 'Banh mi may have French origins, but today it is completely Vietnamese.',
    vn: 'Bánh mì có nguồn gốc từ Pháp, nhưng ngày nay nó hoàn toàn là của Việt Nam.',
    zh: '越南法棍可能起源于法国，但今天它完全是越南的了。'
  },
  'hanoi-banh-mi-p2': {
    en: 'The bread is lighter than a French baguette and has an incredibly crispy crust.',
    vn: 'Bánh mì nhẹ hơn bánh mì Pháp và có lớp vỏ giòn tan.',
    zh: '面包比法式长棍面包更轻，有令人难以置信的酥脆外皮。'
  },
  'hanoi-banh-mi-p3': {
    en: 'Inside you might find:',
    vn: 'Bên trong bạn có thể tìm thấy:',
    zh: '里面可能有：'
  },
  'hanoi-banh-mi-li1': {
    en: 'Grilled pork',
    vn: 'Thịt heo nướng',
    zh: '烤猪肉'
  },
  'hanoi-banh-mi-li2': {
    en: 'Pâté',
    vn: 'Pâté',
    zh: '肉酱'
  },
  'hanoi-banh-mi-li3': {
    en: 'Eggs',
    vn: 'Trứng',
    zh: '鸡蛋'
  },
  'hanoi-banh-mi-li4': {
    en: 'Pickled vegetables',
    vn: 'Đồ chua',
    zh: '腌菜'
  },
  'hanoi-banh-mi-li5': {
    en: 'Fresh herbs',
    vn: 'Rau thơm tươi',
    zh: '新鲜香草'
  },
  'hanoi-banh-mi-li6': {
    en: 'Chili sauce',
    vn: 'Tương ớt',
    zh: '辣椒酱'
  },
  'hanoi-banh-mi-li7': {
    en: 'Cucumber',
    vn: 'Dưa chuột',
    zh: '黄瓜'
  },
  'hanoi-banh-mi-p4': {
    en: 'Every shop makes it differently.',
    vn: 'Mỗi cửa hàng làm bánh mì khác nhau.',
    zh: '每家店的做法都不同。'
  },
  'hanoi-banh-mi-p5': {
    en: 'Some are simple street stalls. Others specialize in one filling.',
    vn: 'Một số là quầy hàng đơn giản. Một số khác chuyên về một loại nhân.',
    zh: '有些是简单的街边摊位。有些则专注于一种馅料。'
  },
  'hanoi-banh-mi-p6': {
    en: 'A banh mi is perfect when:',
    vn: 'Bánh mì là lựa chọn hoàn hảo khi:',
    zh: '越南法棍在以下情况下是完美的选择：'
  },
  'hanoi-banh-mi-li8': {
    en: 'You need a quick meal',
    vn: 'Bạn cần một bữa ăn nhanh',
    zh: '你需要一顿快餐'
  },
  'hanoi-banh-mi-li9': {
    en: 'You are exploring the Old Quarter',
    vn: 'Bạn đang khám phá Phố Cổ',
    zh: '你在探索老城区'
  },
  'hanoi-banh-mi-li10': {
    en: 'You want breakfast on the go',
    vn: 'Bạn muốn ăn sáng mang đi',
    zh: '你想吃随身早餐'
  },
  'hanoi-banh-mi-li11': {
    en: 'You want something inexpensive',
    vn: 'Bạn muốn một món ăn giá rẻ',
    zh: '你想吃价格实惠的东西'
  },
  'hanoi-banh-mi-p7': {
    en: 'Many travelers end up eating banh mi several times during their trip because it is convenient, affordable, and delicious.',
    vn: 'Nhiều du khách ăn bánh mì nhiều lần trong chuyến đi vì nó tiện lợi, giá cả phải chăng và ngon miệng.',
    zh: '许多旅行者在旅途中会多次吃越南法棍，因为它方便、实惠又美味。'
  },

  // Egg Coffee
  'hanoi-egg-coffee-title': {
    en: '4. Egg Coffee: Hanoi\'s Most Famous Drink',
    vn: '4. Cà Phê Trứng: Đồ Uống Nổi Tiếng Nhất Hà Nội',
    zh: '4. 蛋咖啡：河内最著名的饮品'
  },
  'hanoi-egg-coffee-p1': {
    en: 'Egg coffee sounds strange the first time you hear about it.',
    vn: 'Cà phê trứng nghe có vẻ lạ lần đầu tiên bạn nghe về nó.',
    zh: '蛋咖啡第一次听说时听起来很奇怪。'
  },
  'hanoi-egg-coffee-p2': {
    en: 'Coffee and egg?',
    vn: 'Cà phê và trứng?',
    zh: '咖啡和鸡蛋？'
  },
  'hanoi-egg-coffee-p3': {
    en: 'But once you try it, the idea makes more sense.',
    vn: 'Nhưng một khi bạn thử, ý tưởng đó trở nên hợp lý hơn.',
    zh: '但一旦你尝试了，这个想法就变得合理了。'
  },
  'hanoi-egg-coffee-p4': {
    en: 'The drink was created in Hanoi decades ago when milk was difficult to obtain.',
    vn: 'Đồ uống này được tạo ra ở Hà Nội hàng chục năm trước khi sữa khó kiếm.',
    zh: '这种饮料是几十年前在河内创造的，当时牛奶很难获得。'
  },
  'hanoi-egg-coffee-p5': {
    en: 'Instead, egg yolk was whipped with sugar to create a creamy topping.',
    vn: 'Thay vào đó, lòng đỏ trứng được đánh với đường để tạo lớp kem phủ.',
    zh: '相反，蛋黄与糖一起打发，制成奶油状的顶层。'
  },
  'hanoi-egg-coffee-p6': {
    en: 'Today, egg coffee combines:',
    vn: 'Ngày nay, cà phê trứng kết hợp:',
    zh: '如今，蛋咖啡结合了：'
  },
  'hanoi-egg-coffee-li1': {
    en: 'Strong Vietnamese coffee',
    vn: 'Cà phê Việt Nam đậm đặc',
    zh: '浓郁的越南咖啡'
  },
  'hanoi-egg-coffee-li2': {
    en: 'Whipped egg cream',
    vn: 'Kem trứng đánh bông',
    zh: '打发的蛋奶霜'
  },
  'hanoi-egg-coffee-li3': {
    en: 'Sweetness',
    vn: 'Vị ngọt',
    zh: '甜味'
  },
  'hanoi-egg-coffee-li4': {
    en: 'Rich texture',
    vn: 'Kết cấu béo ngậy',
    zh: '浓郁的口感'
  },
  'hanoi-egg-coffee-p7': {
    en: 'The result tastes almost like coffee and dessert combined.',
    vn: 'Kết quả có vị gần như sự kết hợp giữa cà phê và món tráng miệng.',
    zh: '结果尝起来几乎像咖啡和甜点的结合。'
  },
  'hanoi-egg-coffee-p8': {
    en: 'Some visitors love it immediately. Others prefer traditional Vietnamese coffee.',
    vn: 'Một số du khách yêu thích nó ngay lập tức. Những người khác thích cà phê truyền thống Việt Nam.',
    zh: '有些游客立刻爱上了它。其他人则更喜欢传统的越南咖啡。'
  },
  'hanoi-egg-coffee-p9': {
    en: 'Either way, it is worth trying at least once.',
    vn: 'Dù thế nào, nó cũng đáng để thử ít nhất một lần.',
    zh: '无论如何，至少值得尝试一次。'
  },
  'hanoi-egg-coffee-p10': {
    en: 'The experience often matters as much as the flavor.',
    vn: 'Trải nghiệm thường quan trọng không kém hương vị.',
    zh: '体验往往和味道一样重要。'
  },
  'hanoi-egg-coffee-p11': {
    en: 'Many egg coffee cafés are located inside old buildings, hidden courtyards, or upper floors overlooking the city.',
    vn: 'Nhiều quán cà phê trứng nằm bên trong các tòa nhà cũ, sân trong ẩn mình hoặc tầng trên cao nhìn ra thành phố.',
    zh: '许多蛋咖啡店位于老建筑内、隐藏的庭院中或俯瞰城市的楼上。'
  },

  // Bun Bo Nam Bo
  'hanoi-bun-bo-title': {
    en: '5. Bun Bo Nam Bo',
    vn: '5. Bún Bò Nam Bộ',
    zh: '5. 南部牛肉米粉'
  },
  'hanoi-bun-bo-p1': {
    en: 'Despite the name, this dish is a Hanoi specialty.',
    vn: 'Mặc dù tên gọi, món ăn này là đặc sản của Hà Nội.',
    zh: '尽管名字如此，这道菜是河内特色。'
  },
  'hanoi-bun-bo-p2': {
    en: 'Bun bo Nam Bo contains:',
    vn: 'Bún bò Nam Bộ gồm:',
    zh: '南部牛肉米粉包含：'
  },
  'hanoi-bun-bo-li1': {
    en: 'Rice noodles',
    vn: 'Bún',
    zh: '米粉'
  },
  'hanoi-bun-bo-li2': {
    en: 'Stir-fried beef',
    vn: 'Thịt bò xào',
    zh: '炒牛肉'
  },
  'hanoi-bun-bo-li3': {
    en: 'Peanuts',
    vn: 'Đậu phộng',
    zh: '花生'
  },
  'hanoi-bun-bo-li4': {
    en: 'Fresh herbs',
    vn: 'Rau thơm tươi',
    zh: '新鲜香草'
  },
  'hanoi-bun-bo-li5': {
    en: 'Pickled vegetables',
    vn: 'Đồ chua',
    zh: '腌菜'
  },
  'hanoi-bun-bo-li6': {
    en: 'Fish sauce dressing',
    vn: 'Nước mắm pha',
    zh: '鱼露调料'
  },
  'hanoi-bun-bo-p3': {
    en: 'Unlike pho, there is no broth.',
    vn: 'Khác với phở, món này không có nước dùng.',
    zh: '与河粉不同，这道菜没有汤。'
  },
  'hanoi-bun-bo-p4': {
    en: 'Everything is mixed together before eating.',
    vn: 'Tất cả được trộn đều trước khi ăn.',
    zh: '所有食材在食用前混合在一起。'
  },
  'hanoi-bun-bo-p5': {
    en: 'The combination of warm beef, fresh herbs, crunchy peanuts, and noodles creates a balanced meal that many visitors find easier to eat during hot weather.',
    vn: 'Sự kết hợp giữa thịt bò ấm nóng, rau thơm tươi, đậu phộng giòn và bún tạo nên một bữa ăn cân bằng mà nhiều du khách thấy dễ ăn hơn trong thời tiết nóng.',
    zh: '热牛肉、新鲜香草、脆花生和米粉的组合创造了一顿平衡的餐食，许多游客发现在炎热的天气里更容易享用。'
  },
  'hanoi-bun-bo-p6': {
    en: 'It is especially popular at lunchtime.',
    vn: 'Món này đặc biệt phổ biến vào giờ ăn trưa.',
    zh: '它在午餐时间特别受欢迎。'
  },

  // Cha Ca
  'hanoi-cha-ca-title': {
    en: '6. Cha Ca: One of Hanoi\'s Historic Dishes',
    vn: '6. Chả Cá: Một Trong Những Món Ăn Lịch Sử Của Hà Nội',
    zh: '6. 煎鱼饼：河内的历史名菜之一'
  },
  'hanoi-cha-ca-p1': {
    en: 'Cha ca has been associated with Hanoi for more than a century.',
    vn: 'Chả cá đã gắn liền với Hà Nội hơn một thế kỷ.',
    zh: '煎鱼饼与河内已有超过一个世纪的联系。'
  },
  'hanoi-cha-ca-p2': {
    en: 'The dish features:',
    vn: 'Món ăn bao gồm:',
    zh: '这道菜包含：'
  },
  'hanoi-cha-ca-li1': {
    en: 'Turmeric-marinated fish',
    vn: 'Cá ướp nghệ',
    zh: '姜黄腌制鱼'
  },
  'hanoi-cha-ca-li2': {
    en: 'Dill',
    vn: 'Thì là',
    zh: '莳萝'
  },
  'hanoi-cha-ca-li3': {
    en: 'Green onions',
    vn: 'Hành lá',
    zh: '葱花'
  },
  'hanoi-cha-ca-li4': {
    en: 'Rice noodles',
    vn: 'Bún',
    zh: '米粉'
  },
  'hanoi-cha-ca-li5': {
    en: 'Peanuts',
    vn: 'Đậu phộng',
    zh: '花生'
  },
  'hanoi-cha-ca-li6': {
    en: 'Shrimp paste sauce',
    vn: 'Mắm tôm',
    zh: '虾酱'
  },
  'hanoi-cha-ca-p3': {
    en: 'The fish is often cooked directly at your table.',
    vn: 'Cá thường được nấu ngay tại bàn của bạn.',
    zh: '鱼通常在您的餐桌上直接烹制。'
  },
  'hanoi-cha-ca-p4': {
    en: 'The aroma of dill and turmeric fills the room.',
    vn: 'Mùi thơm của thì là và nghệ tràn ngập căn phòng.',
    zh: '莳萝和姜黄的香气充满整个房间。'
  },
  'hanoi-cha-ca-p5': {
    en: 'For visitors, cha ca feels different from many other Vietnamese dishes because the cooking itself becomes part of the experience.',
    vn: 'Đối với du khách, chả cá có cảm giác khác với nhiều món ăn Việt Nam khác vì quá trình nấu nướng tự nó trở thành một phần của trải nghiệm.',
    zh: '对于游客来说，煎鱼饼的感觉不同于许多其他越南菜，因为烹饪本身就成为体验的一部分。'
  },

  // Banh Cuon
  'hanoi-banh-cuon-title': {
    en: '7. Banh Cuon',
    vn: '7. Bánh Cuốn',
    zh: '7. 越南蒸粉卷'
  },
  'hanoi-banh-cuon-p1': {
    en: 'Banh cuon is one of Hanoi\'s most underrated breakfast dishes.',
    vn: 'Bánh cuốn là một trong những món ăn sáng bị đánh giá thấp nhất ở Hà Nội.',
    zh: '越南蒸粉卷是河内最被低估的早餐之一。'
  },
  'hanoi-banh-cuon-p2': {
    en: 'Thin rice sheets are steamed and filled with:',
    vn: 'Bánh tráng mỏng được hấp và cuốn với nhân:',
    zh: '薄米皮蒸熟后填入：'
  },
  'hanoi-banh-cuon-li1': {
    en: 'Ground pork',
    vn: 'Thịt heo băm',
    zh: '猪肉末'
  },
  'hanoi-banh-cuon-li2': {
    en: 'Mushrooms',
    vn: 'Nấm',
    zh: '蘑菇'
  },
  'hanoi-banh-cuon-li3': {
    en: 'Shallots',
    vn: 'Hành tím',
    zh: '红葱头'
  },
  'hanoi-banh-cuon-p3': {
    en: 'They are served with:',
    vn: 'Chúng được phục vụ cùng:',
    zh: '配上：'
  },
  'hanoi-banh-cuon-li4': {
    en: 'Fish sauce',
    vn: 'Nước mắm',
    zh: '鱼露'
  },
  'hanoi-banh-cuon-li5': {
    en: 'Fresh herbs',
    vn: 'Rau thơm tươi',
    zh: '新鲜香草'
  },
  'hanoi-banh-cuon-li6': {
    en: 'Fried shallots',
    vn: 'Hành phi',
    zh: '炸红葱'
  },
  'hanoi-banh-cuon-li7': {
    en: 'Vietnamese sausage',
    vn: 'Chả lụa',
    zh: '越南香肠'
  },
  'hanoi-banh-cuon-p4': {
    en: 'The texture is incredibly soft.',
    vn: 'Kết cấu vô cùng mềm mại.',
    zh: '口感非常柔软。'
  },
  'hanoi-banh-cuon-p5': {
    en: 'Many visitors never discover banh cuon because it receives less international attention than pho.',
    vn: 'Nhiều du khách không bao giờ khám phá bánh cuốn vì nó nhận được ít sự chú ý quốc tế hơn phở.',
    zh: '许多游客从未发现越南蒸粉卷，因为它比河粉受到的国际关注要少。'
  },
  'hanoi-banh-cuon-p6': {
    en: 'Locals know otherwise.',
    vn: 'Người dân địa phương biết điều ngược lại.',
    zh: '当地人知道它的好。'
  },

  // Xoi
  'hanoi-xoi-title': {
    en: '8. Xoi: Sticky Rice for Breakfast',
    vn: '8. Xôi: Món Xôi Cho Bữa Sáng',
    zh: '8. 糯米饭：早餐的糯米饭'
  },
  'hanoi-xoi-p1': {
    en: 'Sticky rice is a common breakfast throughout Vietnam.',
    vn: 'Xôi là món ăn sáng phổ biến trên khắp Việt Nam.',
    zh: '糯米饭是越南各地常见的早餐。'
  },
  'hanoi-xoi-p2': {
    en: 'In Hanoi, xoi vendors appear very early in the morning.',
    vn: 'Ở Hà Nội, những người bán xôi xuất hiện từ rất sớm.',
    zh: '在河内，卖糯米饭的摊贩很早就出现了。'
  },
  'hanoi-xoi-p3': {
    en: 'Popular toppings include:',
    vn: 'Các loại topping phổ biến gồm:',
    zh: '常见的配料包括：'
  },
  'hanoi-xoi-li1': {
    en: 'Chicken',
    vn: 'Gà',
    zh: '鸡肉'
  },
  'hanoi-xoi-li2': {
    en: 'Pork floss',
    vn: 'Chà bông',
    zh: '猪肉松'
  },
  'hanoi-xoi-li3': {
    en: 'Mung beans',
    vn: 'Đậu xanh',
    zh: '绿豆'
  },
  'hanoi-xoi-li4': {
    en: 'Fried shallots',
    vn: 'Hành phi',
    zh: '炸红葱'
  },
  'hanoi-xoi-li5': {
    en: 'Eggs',
    vn: 'Trứng',
    zh: '鸡蛋'
  },
  'hanoi-xoi-p4': {
    en: 'It is inexpensive, filling, and easy to carry.',
    vn: 'Nó rẻ, no và dễ mang theo.',
    zh: '它价格便宜、饱腹且易于携带。'
  },
  'hanoi-xoi-p5': {
    en: 'Many office workers grab xoi on their way to work.',
    vn: 'Nhiều nhân viên văn phòng mua xôi trên đường đi làm.',
    zh: '许多上班族在上班路上买糯米饭。'
  },

  // Nem Ran
  'hanoi-nem-ran-title': {
    en: '9. Nem Ran: Northern Spring Rolls',
    vn: '9. Nem Rán: Chả Giò Miền Bắc',
    zh: '9. 炸春卷：北方春卷'
  },
  'hanoi-nem-ran-p1': {
    en: 'These crispy fried spring rolls are often called Vietnamese spring rolls.',
    vn: 'Những cuốn chả giò chiên giòn này thường được gọi là chả giò Việt Nam.',
    zh: '这些酥脆的炸春卷通常被称为越南春卷。'
  },
  'hanoi-nem-ran-p2': {
    en: 'The northern version usually contains:',
    vn: 'Phiên bản miền Bắc thường chứa:',
    zh: '北方版本通常包含：'
  },
  'hanoi-nem-ran-li1': {
    en: 'Pork',
    vn: 'Thịt heo',
    zh: '猪肉'
  },
  'hanoi-nem-ran-li2': {
    en: 'Mushrooms',
    vn: 'Nấm',
    zh: '蘑菇'
  },
  'hanoi-nem-ran-li3': {
    en: 'Vermicelli',
    vn: 'Miến',
    zh: '粉丝'
  },
  'hanoi-nem-ran-li4': {
    en: 'Vegetables',
    vn: 'Rau củ',
    zh: '蔬菜'
  },
  'hanoi-nem-ran-p3': {
    en: 'They are wrapped in rice paper and fried until golden.',
    vn: 'Chúng được cuốn trong bánh tráng và chiên đến khi vàng giòn.',
    zh: '它们用米纸包裹，炸至金黄色。'
  },
  'hanoi-nem-ran-p4': {
    en: 'Nem ran is commonly served during family gatherings and celebrations.',
    vn: 'Nem rán thường được phục vụ trong các bữa tiệc gia đình và lễ kỷ niệm.',
    zh: '炸春卷通常在家庭聚会和庆祝活动中出现。'
  },
  'hanoi-nem-ran-p5': {
    en: 'Many restaurants serve them alongside bun cha.',
    vn: 'Nhiều nhà hàng phục vụ chúng kèm với bún chả.',
    zh: '许多餐厅将它们与烤肉米粉一起供应。'
  },

  // Bun Rieu
  'hanoi-bun-rieu-title': {
    en: '10. Bun Rieu',
    vn: '10. Bún Riêu',
    zh: '10. 蟹汤粉'
  },
  'hanoi-bun-rieu-p1': {
    en: 'Bun rieu is a tomato-based noodle soup.',
    vn: 'Bún riêu là món súp bún nấu với cà chua.',
    zh: '蟹汤粉是一种以番茄为基础的米粉汤。'
  },
  'hanoi-bun-rieu-p2': {
    en: 'The broth has a slightly sour flavor and often contains:',
    vn: 'Nước dùng có vị chua nhẹ và thường chứa:',
    zh: '汤底有微酸的味道，通常包含：'
  },
  'hanoi-bun-rieu-li1': {
    en: 'Crab',
    vn: 'Cua',
    zh: '螃蟹'
  },
  'hanoi-bun-rieu-li2': {
    en: 'Tofu',
    vn: 'Đậu phụ',
    zh: '豆腐'
  },
  'hanoi-bun-rieu-li3': {
    en: 'Tomatoes',
    vn: 'Cà chua',
    zh: '番茄'
  },
  'hanoi-bun-rieu-li4': {
    en: 'Rice noodles',
    vn: 'Bún',
    zh: '米粉'
  },
  'hanoi-bun-rieu-li5': {
    en: 'Herbs',
    vn: 'Rau thơm',
    zh: '香草'
  },
  'hanoi-bun-rieu-p3': {
    en: 'The flavor is completely different from pho.',
    vn: 'Hương vị hoàn toàn khác so với phở.',
    zh: '味道完全不同于河粉。'
  },
  'hanoi-bun-rieu-p4': {
    en: 'Some travelers actually prefer it.',
    vn: 'Một số du khách thực sự thích nó hơn.',
    zh: '有些游客实际上更喜欢它。'
  },

  // Street Food Etiquette
  'hanoi-etiquette-title': {
    en: 'Street Food Etiquette in Hanoi',
    vn: 'Nghi Thức Ẩm Thực Đường Phố Ở Hà Nội',
    zh: '河内街头美食礼仪'
  },
  'hanoi-etiquette-p1': {
    en: 'Eating in Hanoi can feel different if it is your first time.',
    vn: 'Ăn uống ở Hà Nội có thể có cảm giác khác nếu bạn lần đầu đến.',
    zh: '如果你是第一次来河内，在这里吃饭可能会有不同的感觉。'
  },
  'hanoi-etiquette-p2': {
    en: 'Some things to remember:',
    vn: 'Một số điều cần nhớ:',
    zh: '一些需要记住的事情：'
  },
  'hanoi-etiquette-li1': {
    en: 'Small stools are normal',
    vn: 'Ghế nhựa nhỏ là bình thường',
    zh: '小塑料凳是正常的'
  },
  'hanoi-etiquette-li2': {
    en: 'Shared tables are common',
    vn: 'Bàn ăn chung là phổ biến',
    zh: '拼桌很常见'
  },
  'hanoi-etiquette-li3': {
    en: 'Menus may be limited',
    vn: 'Thực đơn có thể hạn chế',
    zh: '菜单可能有限'
  },
  'hanoi-etiquette-li4': {
    en: 'Cash is sometimes preferred',
    vn: 'Tiền mặt đôi khi được ưu tiên',
    zh: '有时更倾向于现金支付'
  },
  'hanoi-etiquette-li5': {
    en: 'Local restaurants often specialize in one dish',
    vn: 'Nhà hàng địa phương thường chuyên về một món ăn',
    zh: '当地餐厅通常专营一道菜'
  },
  'hanoi-etiquette-p3': {
    en: 'If a restaurant only serves one thing, that is usually a good sign.',
    vn: 'Nếu một nhà hàng chỉ phục vụ một món, đó thường là dấu hiệu tốt.',
    zh: '如果一家餐厅只卖一样东西，那通常是个好兆头。'
  },

  // Is Street Food Safe?
  'hanoi-safe-title': {
    en: 'Is Street Food Safe?',
    vn: 'Đồ Ăn Đường Phố Có An Toàn Không?',
    zh: '街头食品安全吗？'
  },
  'hanoi-safe-p1': {
    en: 'This is one of the most common questions.',
    vn: 'Đây là một trong những câu hỏi phổ biến nhất.',
    zh: '这是最常见的问题之一。'
  },
  'hanoi-safe-p2': {
    en: 'In general:',
    vn: 'Nhìn chung:',
    zh: '一般来说：'
  },
  'hanoi-safe-li1': {
    en: 'Busy restaurants are safer',
    vn: 'Nhà hàng đông khách an toàn hơn',
    zh: '繁忙的餐厅更安全'
  },
  'hanoi-safe-li2': {
    en: 'Freshly cooked food is best',
    vn: 'Đồ ăn mới nấu là tốt nhất',
    zh: '新鲜烹制的食物最好'
  },
  'hanoi-safe-li3': {
    en: 'Popular local shops usually have high turnover',
    vn: 'Các cửa hàng địa phương nổi tiếng thường có lượng khách cao',
    zh: '受欢迎的本地店铺通常周转快'
  },
  'hanoi-safe-li4': {
    en: 'Bottled water is widely available',
    vn: 'Nước đóng chai có sẵn rộng rãi',
    zh: '瓶装水随处可见'
  },
  'hanoi-safe-p3': {
    en: 'Many travelers eat street food throughout their stay without problems.',
    vn: 'Nhiều du khách ăn đồ ăn đường phố trong suốt thời gian lưu trú mà không gặp vấn đề gì.',
    zh: '许多旅行者在整个住宿期间都在吃街头食品，没有遇到任何问题。'
  },
  'hanoi-safe-p4': {
    en: 'Trust your instincts.',
    vn: 'Hãy tin vào bản năng của bạn.',
    zh: '相信你的直觉。'
  },
  'hanoi-safe-p5': {
    en: 'If a place looks busy and locals are eating there, it is usually a good sign.',
    vn: 'Nếu một nơi trông đông đúc và người địa phương đang ăn ở đó, đó thường là dấu hiệu tốt.',
    zh: '如果一家店看起来很忙，而且当地人都在那里吃，那通常是个好兆头。'
  },

  // Morning vs Evening
  'hanoi-morning-title': {
    en: 'Morning Food vs Evening Food',
    vn: 'Đồ Ăn Sáng Và Đồ Ăn Tối',
    zh: '早餐与晚餐'
  },
  'hanoi-morning-label': {
    en: 'Morning:',
    vn: 'Buổi sáng:',
    zh: '早餐：'
  },
  'hanoi-morning-1': {
    en: 'Pho',
    vn: 'Phở',
    zh: '河粉'
  },
  'hanoi-morning-2': {
    en: 'Xoi',
    vn: 'Xôi',
    zh: '糯米饭'
  },
  'hanoi-morning-3': {
    en: 'Banh cuon',
    vn: 'Bánh cuốn',
    zh: '蒸粉卷'
  },
  'hanoi-morning-4': {
    en: 'Coffee',
    vn: 'Cà phê',
    zh: '咖啡'
  },
  'hanoi-lunch-label': {
    en: 'Lunch:',
    vn: 'Buổi trưa:',
    zh: '午餐：'
  },
  'hanoi-lunch-1': {
    en: 'Bun cha',
    vn: 'Bún chả',
    zh: '烤肉米粉'
  },
  'hanoi-lunch-2': {
    en: 'Bun bo Nam Bo',
    vn: 'Bún bò Nam Bộ',
    zh: '南部牛肉米粉'
  },
  'hanoi-evening-label': {
    en: 'Evening:',
    vn: 'Buổi tối:',
    zh: '晚餐：'
  },
  'hanoi-evening-1': {
    en: 'Grilled dishes',
    vn: 'Món nướng',
    zh: '烧烤菜肴'
  },
  'hanoi-evening-2': {
    en: 'Street food',
    vn: 'Đồ ăn đường phố',
    zh: '街头小吃'
  },
  'hanoi-evening-3': {
    en: 'Beer snacks',
    vn: 'Đồ nhậu',
    zh: '啤酒小吃'
  },
  'hanoi-evening-4': {
    en: 'Desserts',
    vn: 'Tráng miệng',
    zh: '甜点'
  },
  'hanoi-morning-p': {
    en: 'Hanoi changes throughout the day, and so does its food.',
    vn: 'Hà Nội thay đổi suốt cả ngày, và ẩm thực cũng vậy.',
    zh: '河内一天中不断变化，美食也是如此。'
  },

  // FAQ - Already exists in your lang.js, but adding if missing
  'faq-q-hanoi-food': {
    en: 'What food is Hanoi famous for?',
    vn: 'Hà Nội nổi tiếng với món ăn gì?',
    zh: '河内以什么美食闻名？'
  },
  'faq-a-hanoi-food': {
    en: 'Pho, bun cha, egg coffee, cha ca, and banh cuon are among Hanoi\'s most famous dishes.',
    vn: 'Phở, bún chả, cà phê trứng, chả cá và bánh cuốn là những món ăn nổi tiếng nhất của Hà Nội.',
    zh: '河粉、烤肉米粉、蛋咖啡、煎鱼饼和蒸粉卷是河内最著名的菜肴。'
  },
  'faq-q-hanoi-price': {
    en: 'Is street food in Hanoi expensive?',
    vn: 'Đồ ăn đường phố ở Hà Nội có đắt không?',
    zh: '河内的街头食品贵吗？'
  },
  'faq-a-hanoi-price': {
    en: 'No. Many local meals cost significantly less than restaurant meals in tourist areas.',
    vn: 'Không. Nhiều bữa ăn địa phương có giá thấp hơn đáng kể so với nhà hàng ở khu du lịch.',
    zh: '不贵。许多当地餐食的价格远低于旅游区的餐厅。'
  },
  'faq-q-hanoi-breakfast': {
    en: 'What is the best breakfast in Hanoi?',
    vn: 'Bữa sáng ngon nhất ở Hà Nội là gì?',
    zh: '河内最好的早餐是什么？'
  },
  'faq-a-hanoi-breakfast': {
    en: 'Pho and banh cuon are two of the most popular breakfast dishes.',
    vn: 'Phở và bánh cuốn là hai trong những món ăn sáng phổ biến nhất.',
    zh: '河粉和蒸粉卷是最受欢迎的两种早餐。'
  },
  'faq-q-hanoi-vegetarian': {
    en: 'Is Hanoi good for vegetarians?',
    vn: 'Hà Nội có phù hợp cho người ăn chay không?',
    zh: '河内适合素食者吗？'
  },
  'faq-a-hanoi-vegetarian': {
    en: 'It can be, although traditional cuisine uses fish sauce frequently. Vegetarian restaurants are becoming more common.',
    vn: 'Có thể, mặc dù ẩm thực truyền thống thường sử dụng nước mắm. Nhà hàng chay đang trở nên phổ biến hơn.',
    zh: '可以，尽管传统菜肴经常使用鱼露。素食餐厅正变得越来越普遍。'
  },

  // Final Thoughts
  'hanoi-final-title': {
    en: 'Final Thoughts',
    vn: 'Lời Kết',
    zh: '最后的话'
  },
  'hanoi-final-p1': {
    en: 'You do not need to eat at famous restaurants to experience Hanoi.',
    vn: 'Bạn không cần phải ăn ở những nhà hàng nổi tiếng để trải nghiệm Hà Nội.',
    zh: '你不需要在著名的餐厅吃饭就能体验河内。'
  },
  'hanoi-final-p2': {
    en: 'Some of the city\'s best meals come from:',
    vn: 'Một số bữa ăn ngon nhất của thành phố đến từ:',
    zh: '这座城市最好的美食来自：'
  },
  'hanoi-final-li1': {
    en: 'Tiny family shops',
    vn: 'Cửa hàng gia đình nhỏ',
    zh: '小型家庭店铺'
  },
  'hanoi-final-li2': {
    en: 'Sidewalk kitchens',
    vn: 'Bếp vỉa hè',
    zh: '人行道厨房'
  },
  'hanoi-final-li3': {
    en: 'Hidden alleys',
    vn: 'Ngõ nhỏ ẩn mình',
    zh: '隐藏的小巷'
  },
  'hanoi-final-li4': {
    en: 'Local markets',
    vn: 'Chợ địa phương',
    zh: '当地市场'
  },
  'hanoi-final-p3': {
    en: 'The best approach is simple.',
    vn: 'Cách tiếp cận tốt nhất rất đơn giản.',
    zh: '最好的方法很简单。'
  },
  'hanoi-final-p4': {
    en: 'Walk. Look for places filled with locals. Sit down. Order something. Try it.',
    vn: 'Đi bộ. Tìm những nơi đông người địa phương. Ngồi xuống. Gọi món. Thử nó.',
    zh: '走走。找当地人多的地方。坐下来。点些东西。尝一尝。'
  },
  'hanoi-final-p5': {
    en: 'Food in Hanoi is not just about eating. It is one of the easiest ways to understand the city itself.',
    vn: 'Ẩm thực ở Hà Nội không chỉ là ăn uống. Đó là một trong những cách dễ nhất để hiểu thành phố này.',
    zh: '河内的美食不仅仅是吃。它是了解这座城市本身的最简单方式之一。'
  },

  // CTA
  'hanoi-cta-title': {
    en: '✨ Planning Your Trip to Hanoi?',
    vn: '✨ Đang Lên Kế Hoạch Cho Chuyến Đi Hà Nội?',
    zh: '✨ 正在计划你的河内之旅？'
  },
  'hanoi-cta-text': {
    en: 'Book your stay directly with MiaCasa for the best rates — no platform fees, instant confirmation.',
    vn: 'Đặt phòng trực tiếp với MiaCasa để có giá tốt nhất — không phí nền tảng, xác nhận ngay lập tức.',
    zh: '直接通过MiaCasa预订您的住宿，享受最优价格 — 无平台费用，即时确认。'
  },
  'hanoi-cta-btn1': {
    en: 'Check Availability →',
    vn: 'Kiểm tra lịch trống →',
    zh: '查看空房情况 →'
  },
  'hanoi-cta-btn2': {
    en: 'Ask a Question on WhatsApp →',
    vn: 'Đặt câu hỏi qua WhatsApp →',
    zh: '通过WhatsApp提问 →'
  },

  // Related Posts
  'hanoi-related-1': {
    en: '3 Days in Hanoi Itinerary',
    vn: 'Lịch Trình 3 Ngày Ở Hà Nội',
    zh: '河内3日行程'
  },
  'hanoi-related-1-text': {
    en: 'Complete travel guide',
    vn: 'Hướng dẫn du lịch đầy đủ',
    zh: '完整旅行指南'
  },
  'hanoi-related-2': {
    en: 'Best Cafés in Hanoi',
    vn: 'Quán Cà Phê Đẹp Nhất Hà Nội',
    zh: '河内最佳咖啡馆'
  },
  'hanoi-related-2-text': {
    en: 'For coffee, work & quiet mornings',
    vn: 'Cho cà phê, làm việc & buổi sáng yên tĩnh',
    zh: '适合咖啡、工作和安静早晨'
  },
  'hanoi-related-3': {
    en: 'Where to Stay in Hanoi',
    vn: 'Nên Ở Đâu Ở Hà Nội',
    zh: '河内住宿推荐'
  },
  'hanoi-related-3-text': {
    en: 'Old Quarter vs local areas',
    vn: 'Phố Cổ hay khu địa phương',
    zh: '老城区 vs 本地社区'
  },
  'hanoi-back': {
    en: '← Back to all blog posts',
    vn: '← Quay lại tất cả bài viết',
    zh: '← 返回所有博客文章'
  },
'auto-index-001': {
  en:"Book Now",
  vn:"Đặt ngay",
  zh:"立即预订"
},

'auto-index-002': {
  en:"⚠️ NOTE: 3rd floor walk-up with steep, narrow stairs  (no elevator). Hosts can help carry luggage up/down.  Central Old Quarter location may be noisy  (street and bar noise until late).",
  vn:"⚠️ LƯU Ý: Phòng ở tầng 3, cầu thang dốc và hẹp  (không thang máy). Chủ nhà có thể hỗ trợ mang hành lý lên/xuống.  Vị trí trung tâm Phố Cổ có thể ồn  (tiếng đường phố và bar đến khuya).",
  zh:"⚠️ 注意：位于三楼，楼梯陡且狭窄 （无电梯）。房东可协助搬运行李上下楼。  老城区中心位置可能较吵 （街道及酒吧噪音至深夜）。"
},

'auto-index-003': {
  en:"💡 Book all 3 rooms to have the entire home  exclusively for your group (sleeps 8). Hosts can help with luggage. ",
  vn:"💡 Đặt cả 3 phòng để có toàn bộ căn nhà  riêng cho nhóm bạn (tối đa 8 người). Chủ nhà có thể hỗ trợ mang hành lý. ",
  zh:"💡 预订全部3个房间即可独享整套房源 （最多可住8人）。房东可协助搬运行李。 "
},

'auto-index-004': {
  en:"✓ Entire apartment — 100% private",
  vn:"✓ Toàn bộ căn hộ — riêng tư 100%",
  zh:"✓ 整套公寓 — 100% 私密"
},

'auto-index-005': {
  en:"✓ Best for: Groups wanting full privacy",
  vn:"✓ Phù hợp: Nhóm cần không gian riêng",
  zh:"✓ 适合：需要完全私密空间的团体"
},

'auto-index-006': {
  en:"✓ Sleeps 6 · Private terrace",
  vn:"✓ Ngủ 6 · Sân thượng riêng",
  zh:"✓ 可住6人 · 私人露台"
},

'auto-index-007': {
  en:"⚠️ Steep stairs (3rd floor, no elevator — hosts help with luggage)",
  vn:"⚠️ Cầu thang dốc (tầng 3, không thang máy — chủ nhà hỗ trợ hành lý)",
  zh:"⚠️ 楼梯较陡（三楼，无电梯——房东可协助搬运行李）"
},

'auto-index-008': {
  en:"⚠️ Can be noisy (central Old Quarter location)",
  vn:"⚠️ Có thể ồn (khu Phố Cổ trung tâm)",
  zh:"⚠️ 可能较吵（老城区中心位置）"
},

'auto-index-009': {
  en:"✓ Private rooms with kitchenette",
  vn:"✓ Phòng riêng có bếp nhỏ",
  zh:"✓ 独立房间 · 配备小厨房"
},

'auto-index-010': {
  en:"✓ Best for: Couples, solo travelers",
  vn:"✓ Phù hợp: Cặp đôi, khách đi một mình",
  zh:"✓ 适合：情侣与独行旅客"
},

'auto-index-011': {
  en:"✓ Can book all 3 rooms for entire home (sleeps 8)",
  vn:"✓ Có thể đặt cả 3 phòng để có toàn bộ nhà (tối đa 8 người)",
  zh:"✓ 可预订3间房整租（最多8人）"
},

'auto-index-012': {
  en:"✓ Quiet, local neighborhood",
  vn:"✓ Khu phố yên tĩnh, địa phương",
  zh:"✓ 安静的本地社区"
},

'auto-index-013': {
  en:"⚠️ No elevator (stairs access — hosts can help with luggage)",
  vn:"⚠️ Không thang máy (đi cầu thang — chủ nhà hỗ trợ hành lý)",
  zh:"⚠️ 无电梯（需走楼梯——房东可协助搬运行李）"
},

'auto-index-014': {
  en:"📌 Both properties are traditional Hanoi homes — no elevator . Hosts are happy to help carry luggage  up and down the stairs. Please consider mobility needs before booking.",
  vn:"📌 Cả hai chỗ nghỉ là nhà truyền thống Hà Nội — không có thang máy . Chủ nhà sẵn lòng hỗ trợ mang hành lý  lên xuống cầu thang. Vui lòng cân nhắc nhu cầu di chuyển trước khi đặt phòng.",
  zh:"📌 两处房源均为河内传统住宅——无电梯 。房东可协助搬运行李 上下楼梯。预订前请考虑行动便利性。"
},

'auto-index-015': {
  en:"✓ Free cancellation up to 48 hours before arrival",
  vn:"✓ Miễn phí hủy trước 48 giờ",
  zh:"✓ 入住前48小时可免费取消"
},

'auto-index-016': {
  en:"💵 Pay at property",
  vn:"💵 Thanh toán tại chỗ",
  zh:"💵 到店付款"
},

'auto-index-017': {
  en:"📱 How to pay with VietQR:",
  vn:"📱 Cách thanh toán bằng VietQR:",
  zh:"📱 如何使用 VietQR 付款："
},

'auto-index-018': {
  en:"Open your banking app",
  vn:"Mở ứng dụng ngân hàng",
  zh:"打开您的银行应用"
},

'auto-index-019': {
  en:"Scan the QR code below",
  vn:"Quét mã QR bên dưới",
  zh:"扫描下方二维码"
},

'auto-index-020': {
  en:"Complete the payment",
  vn:"Hoàn tất thanh toán",
  zh:"完成付款"
},

'auto-index-021': {
  en:"Upload payment proof below",
  vn:"Tải lên bằng chứng thanh toán bên dưới",
  zh:"在下方上传付款凭证"
},

'auto-index-022': {
  en:"📸 After completing the transfer, please upload your payment proof:",
  vn:"📸 Sau khi chuyển khoản, vui lòng tải lên bằng chứng thanh toán:",
  zh:"📸 转账完成后，请上传付款凭证："
},

'auto-index-023': {
  en:"Upload a screenshot of your bank transfer or payment confirmation.",
  vn:"Tải lên ảnh chụp màn hình chuyển khoản hoặc xác nhận thanh toán.",
  zh:"请上传银行转账或付款确认截图。"
},

'auto-index-024': {
  en:"Submit payment proof →",
  vn:"Gửi bằng chứng thanh toán →",
  zh:"提交付款凭证 →"
},

'auto-index-025': {
  en:"Payment pending verification",
  vn:"Đang chờ xác nhận thanh toán",
  zh:"付款待审核"
},

'auto-index-026': {
  en:"Back to booking",
  vn:"Quay lại đặt phòng",
  zh:"返回预订"
},

'auto-index-027': {
  en:"Pay when you arrive",
  vn:"Thanh toán khi nhận phòng",
  zh:"入住时付款"
},

'auto-index-028': {
  en:"No payment is required now. Your booking will be confirmed immediately.",
  vn:"Không cần thanh toán ngay. Đặt phòng sẽ được xác nhận ngay lập tức.",
  zh:"目前无需付款。您的预订将立即确认。"
},

'auto-index-029': {
  en:"Confirm booking →",
  vn:"Xác nhận đặt phòng →",
  zh:"确认预订 →"
},

'auto-index-030': {
  en:"Recognized as Airbnb Superhost 2025  for consistent 5-star guest experiences.",
  vn:"Được công nhận là Airbnb Superhost 2025  nhờ trải nghiệm 5 sao ổn định.",
  zh:"因持续提供5星级体验，被评为Airbnb 超级房东 2025 。"
},

'auto-index-031': {
  en:"Two distinct homestays in Hanoi — designed for travelers who want a real home experience.",
  vn:"Hai homestay riêng biệt tại Hà Nội — dành cho du khách muốn trải nghiệm như ở nhà.",
  zh:"河内两处不同民宿——为追求真实居住体验的旅客设计。"
},

'auto-index-032': {
  en:"📅 Book now",
  vn:"📅 Đặt ngay",
  zh:"📅 立即预订"
},

'auto-miacasa-hanoi-001': {
  en:"✓ Free cancellation up to 48 hours before arrival",
  vn:"✓ Miễn phí hủy trước 48 giờ",
  zh:"✓ 入住前48小时可免费取消"
},

'auto-miacasa-hanoi-002': {
  en:"Book now →",
  vn:"Đặt ngay →",
  zh:"立即预订 →"
},

'auto-miacasa-hanoi-003': {
  en:"🏆 Booking.com Traveler Review Award 2026 · ⭐ 4.8★ from recent stays · Loved by guests visiting Hanoi",
  vn:"🏆 Giải thưởng Booking.com 2026 · ⭐ 4.8★ từ các lượt lưu trú gần đây · Được khách yêu thích khi đến Hà Nội",
  zh:"🏆 Booking.com 2026 旅客评价奖 · ⭐ 4.8★ 来自近期入住 · 深受来河内旅客喜爱"
},

'auto-our-story-001': {
  en: 'The Story Behind <em>MiaCasa</em> — Boutique Homestays in Hanoi',
  vn: 'Câu Chuyện Phía Sau <em>MiaCasa</em> — Boutique Homestays tại Hà Nội',
  zh: '<em>MiaCasa</em> 背后的故事 — 河内精品民宿'
},

'auto-our-story-002': {
en:"MiaCasa did not begin as a business plan. It began with a simple idea: create a place that feels calm, warm, and genuinely lived in.",
vn:"MiaCasa không bắt đầu như một kế hoạch kinh doanh. Nó bắt đầu từ một ý tưởng đơn giản: tạo ra một nơi yên bình, ấm áp và mang cảm giác thật sự như ở nhà.",
zh:"MiaCasa并不是从商业计划开始的，而是源于一个简单的想法：打造一个安静、温暖、真正有生活感的地方。"
},

'auto-our-story-003': {
en:"✨ Built slowly in Hanoi for travelers who want a stay that feels personal, calm, and real.",
vn:"✨ Được xây dựng chậm rãi tại Hà Nội cho những du khách muốn một kỳ nghỉ cá nhân, yên bình và chân thật.",
zh:"✨ 在河内慢慢打造，为想要真实、平静、个性化住宿体验的旅行者而生。"
},

'auto-our-story-004': {en:"← MiaCasa Homestays", vn:"← MiaCasa Homestays", zh:"← MiaCasa民宿"},

'auto-our-story-005': {
en:"MiaCasa is a <a href=\"/\">boutique homestay in Hanoi</a> offering curated stays in a quiet local area near Văn Miếu (Temple of Literature), Train Street, and Ba Đình, as well as a central Old Quarter apartment near Hoàn Kiếm Lake.",
vn:"MiaCasa là một <a href=\"/\">boutique homestay tại Hà Nội</a>, cung cấp các kỳ lưu trú tại khu yên tĩnh gần Văn Miếu, Train Street và Ba Đình, cùng một căn hộ trung tâm Phố Cổ gần Hồ Hoàn Kiếm.",
zh:"MiaCasa是一家位于河内的精品民宿，提供精心设计的住宿，坐落在靠近文庙、火车街和巴亭的安静区域，以及靠近还剑湖的市中心老城区公寓。"
},

'auto-our-story-006': {en:"Meet the Hosts", vn:"Gặp gỡ chủ nhà", zh:"房东介绍"},

'auto-our-story-007': {
en:"MiaCasa is built and hosted by Linh and Ngọc, two long-time friends who share a passion for thoughtful hospitality and intentional spaces.",
vn:"MiaCasa được xây dựng và vận hành bởi Linh và Ngọc, hai người bạn lâu năm có chung đam mê về sự hiếu khách và không gian có chủ đích.",
zh:"MiaCasa由Linh和Ngọc共同打造与运营，两位长期好友都热爱用心的待客之道与有意义的空间设计。"
},

'auto-our-story-008': {
en:"Linh is a professional interior designer focused on warm, comfortable environments with natural textures, soft lighting, and quiet details. Her philosophy is simple: design spaces where people want to slow down and stay.",
vn:"Linh là nhà thiết kế nội thất chuyên nghiệp, tập trung vào không gian ấm áp, thoải mái với chất liệu tự nhiên, ánh sáng dịu và chi tiết tinh tế. Triết lý của chị đơn giản: tạo không gian khiến con người muốn chậm lại và ở lâu hơn.",
zh:"Linh是一名专业室内设计师，专注于温暖舒适的空间，使用自然材质、柔和灯光与细节设计。她的理念很简单：创造让人愿意慢下来停留的空间。"
},

'auto-our-story-009': {
en:"Ngọc works in hospitality and focuses on guest experience behind the scenes — communication, comfort, flexibility, and small details that make stays feel effortless.",
vn:"Ngọc làm trong lĩnh vực dịch vụ lưu trú, tập trung vào trải nghiệm khách phía sau hậu trường — giao tiếp, sự thoải mái, linh hoạt và các chi tiết nhỏ giúp kỳ nghỉ trở nên nhẹ nhàng.",
zh:"Ngọc从事民宿服务管理，专注于幕后客人体验——沟通、舒适度、灵活性以及让住宿更顺畅的细节处理。"
},

'auto-our-story-010': {en:"Together, they built MiaCasa step by step, refining it along the way.", vn:"Cùng nhau, họ xây dựng MiaCasa từng bước và liên tục hoàn thiện.", zh:"她们一起一步一步打造MiaCasa，并不断优化完善。"},

'auto-our-story-011': {en:"Linh shapes the spaces. Ngọc shapes the experience.", vn:"Linh tạo nên không gian. Ngọc tạo nên trải nghiệm.", zh:"Linh负责空间设计，Ngọc负责入住体验。"},

'auto-our-story-012': {
en:"MiaCasa was never meant to feel like a hotel. It was designed to feel like a home people remember.",
vn:"MiaCasa không được tạo ra để giống khách sạn. Nó được thiết kế để trở thành một nơi người ta nhớ mãi.",
zh:"MiaCasa从来不是为了成为酒店，而是为了成为一个让人记住的家。"
},
  'auto-our-story-013': {en:"A Milestone of Guest Trust", vn:"Một cột mốc của niềm tin khách hàng", zh:"客人信任的里程碑"},

'auto-our-story-014': {
en:"Over time, MiaCasa welcomed guests from around the world and built its reputation through consistency, cleanliness, communication, and care.",
vn:"Theo thời gian, MiaCasa đã đón tiếp khách từ khắp nơi trên thế giới và xây dựng danh tiếng nhờ sự nhất quán, sạch sẽ, giao tiếp và sự chăm sóc.",
zh:"随着时间推移，MiaCasa接待了来自世界各地的客人，并通过一致的品质、清洁、沟通与关怀建立了口碑。"
},

'auto-our-story-015': {
en:"\"One of the few places in Hanoi that genuinely felt peaceful.\"",
vn:"\"Một trong số ít nơi ở Hà Nội thực sự mang lại cảm giác bình yên.\"",
zh:"“河内少数真正让人感到宁静的地方之一。”"
},

'auto-our-story-016': {
en:"\"Beautiful interiors, thoughtful hosts, and a stay that felt personal from start to finish.\"",
vn:"\"Nội thất đẹp, chủ nhà chu đáo và một kỳ nghỉ mang cảm giác cá nhân từ đầu đến cuối.\"",
zh:"“精美的室内设计、贴心的房东，从头到尾都像私人定制的体验。”"
},

'auto-our-story-017': {
en:"🏆 Trusted by guests worldwide through Airbnb, Booking.com, and direct bookings.",
vn:"🏆 Được khách hàng toàn cầu tin tưởng qua Airbnb, Booking.com và đặt phòng trực tiếp.",
zh:"🏆 通过Airbnb、Booking.com及直接预订获得全球客人信任。"
},

'auto-our-story-018': {en:"That journey led to recognitions including:", vn:"Hành trình đó đã dẫn đến các giải thưởng:", zh:"这段旅程也带来了以下认可："},

'auto-our-story-019': {en:"Booking.com Traveler Review Award 2026", vn:"Giải thưởng Booking.com 2026", zh:"Booking.com 2026旅客评价奖"},
'auto-our-story-020': {en:"9.3 Exceptional Guest Rating", vn:"Điểm đánh giá xuất sắc 9.3", zh:"9.3 优秀评分"},
'auto-our-story-021': {en:"Airbnb Superhost 2025", vn:"Airbnb Superhost 2025", zh:"Airbnb超级房东 2025"},

'auto-our-story-022': {
en:"More importantly, these recognitions reflect the trust guests place in us every time they stay.",
vn:"Quan trọng hơn, những sự ghi nhận này phản ánh niềm tin mà khách hàng dành cho chúng tôi mỗi khi lưu trú.",
zh:"更重要的是，这些认可体现了每一位客人对我们的信任。"
},

'auto-our-story-023': {en:"Guests from 30+ countries", vn:"Khách từ hơn 30 quốc gia", zh:"来自30多个国家的客人"},
'auto-our-story-024': {en:"9.3 Booking.com rating", vn:"Điểm Booking.com 9.3", zh:"Booking.com 9.3评分"},
'auto-our-story-025': {en:"Airbnb Superhost 2025", vn:"Airbnb Superhost 2025", zh:"Airbnb超级房东2025"},
'auto-our-story-026': {en:"Direct host support", vn:"Hỗ trợ trực tiếp từ chủ nhà", zh:"直接房东支持"},

'auto-our-story-027': {en:"Built Slowly, Designed Intentionally", vn:"Xây dựng chậm rãi, thiết kế có chủ đích", zh:"缓慢打造，用心设计"},

'auto-our-story-028': {en:"One unfinished space", vn:"Một không gian chưa hoàn thiện", zh:"一个未完成的空间"},

'auto-our-story-029': {
en:"What started as an unfinished space in Hanoi slowly became MiaCasa.",
vn:"Một không gian chưa hoàn thiện ở Hà Nội đã dần trở thành MiaCasa.",
zh:"最初在河内的一个空白空间，逐渐变成了MiaCasa。"
},

'auto-our-story-030': {en:"Piece by piece", vn:"Từng chút một", zh:"一点一点"},

'auto-our-story-031': {
en:"Furniture was selected slowly. Some pieces took weeks. Others were rebuilt until they felt right.",
vn:"Nội thất được chọn dần dần. Có món mất nhiều tuần. Có món được làm lại nhiều lần cho đến khi ưng ý.",
zh:"家具被慢慢挑选，有些花了数周，有些反复调整直到满意。"
},

'auto-our-story-032': {en:"Not just for photos", vn:"Không chỉ để chụp ảnh", zh:"不只是为了拍照"},

'auto-our-story-033': {
en:"We never wanted a space that looked perfect only in photos. We wanted it to feel like home.",
vn:"Chúng tôi không muốn tạo ra không gian chỉ đẹp trong ảnh. Chúng tôi muốn nó có cảm giác như một ngôi nhà.",
zh:"我们不想要只适合拍照的空间，而是想打造真正有家的感觉。"
},

'auto-our-story-034': {en:"Perfectly located", vn:"Vị trí lý tưởng", zh:"位置优越"},

'auto-our-story-035': {
en:"MiaCasa Hanoi is quietly tucked away from noise, yet close to Văn Miếu, Train Street, Ba Đình, Hoàn Kiếm Lake, and the Old Quarter.",
vn:"MiaCasa Hà Nội nằm yên tĩnh tránh xa ồn ào, nhưng gần Văn Miếu, Train Street, Ba Đình, Hồ Hoàn Kiếm và Phố Cổ.",
zh:"MiaCasa河内位置安静，但靠近文庙、火车街、巴亭、还剑湖与老城区。"
},

'auto-our-story-036': {en:"Learning by doing", vn:"Học qua thực hành", zh:"在实践中学习"},

'auto-our-story-037': {
en:"We learned how lighting changes a room, how small comforts matter, and how thoughtful design creates calm even in a busy city.",
vn:"Chúng tôi học được cách ánh sáng thay đổi căn phòng, những tiện nghi nhỏ quan trọng ra sao, và thiết kế chu đáo tạo nên sự yên bình ngay cả giữa thành phố nhộn nhịp.",
zh:"我们学会了光线如何改变空间，小细节如何影响舒适度，以及设计如何在城市中带来宁静。"
},

'auto-our-story-038': {en:"Not luxury — just real", vn:"Không sang trọng — chỉ chân thật", zh:"不是奢华，而是真实"},

'auto-our-story-039': {
en:"Not luxury in the traditional sense. Just spaces that feel personal, calm, and genuinely cared for.",
vn:"Không phải sang trọng theo nghĩa truyền thống. Chỉ là những không gian mang cảm giác cá nhân, yên bình và được chăm chút.",
zh:"不是传统意义的奢华，而是温暖、安静、有人用心照顾的空间。"
},

'auto-our-story-040': {en:"The Journey of the Space", vn:"Hành trình của không gian", zh:"空间的旅程"},

'auto-our-story-041': {en:"Before", vn:"Trước", zh:"之前"},
'auto-our-story-042': {en:"A blank space waiting to become something more", vn:"Một không gian trống chờ trở nên ý nghĩa hơn", zh:"一个等待改变的空白空间"},

'auto-our-story-043': {en:"During", vn:"Trong", zh:"过程中"},
'auto-our-story-044': {en:"Slowly shaping the space", vn:"Dần dần định hình không gian", zh:"空间逐渐成形"},

'auto-our-story-045': {en:"After", vn:"Sau", zh:"之后"},
'auto-our-story-046': {en:"A calm, comfortable space taking form", vn:"Một không gian yên bình, thoải mái dần hình thành", zh:"一个舒适宁静的家逐渐完成"},

'auto-our-story-047': {en:"Two Different Experiences in Hanoi", vn:"Hai trải nghiệm khác biệt tại Hà Nội", zh:"河内两种不同体验"},

'auto-our-story-048': {
en:"Today, MiaCasa offers two distinct stays in Hanoi.",
vn:"Hôm nay, MiaCasa cung cấp hai loại chỗ ở riêng biệt tại Hà Nội.",
zh:"如今，MiaCasa在河内提供两种不同的住宿体验。"
},

'auto-our-story-049': {
en:"A quiet stay near Văn Miếu and Train Street, designed for solo travelers and couples who prefer a calmer rhythm.",
vn:"Một chỗ ở yên tĩnh gần Văn Miếu và Train Street, dành cho khách đi một mình và cặp đôi thích nhịp sống chậm hơn.",
zh:"靠近文庙与火车街的安静住宿，适合喜欢慢节奏的独行旅客与情侣。"
},

'auto-our-story-050': {en:"3 private studio-style rooms", vn:"3 phòng studio riêng tư", zh:"3间独立工作室房间"},
'auto-our-story-051': {en:"Kitchenettes in every room", vn:"Bếp nhỏ trong mỗi phòng", zh:"每间客房均配有小厨房"},
'auto-our-story-052': {en:"Local cafés and residential atmosphere", vn:"Cà phê địa phương và không khí khu dân cư", zh:"本地咖啡馆与居住氛围"},
'auto-our-story-053': {en:"Slow, thoughtful stay experience", vn:"Trải nghiệm lưu trú chậm rãi, chu đáo", zh:"慢节奏、用心的住宿体验"},
'auto-our-story-054': {en:"Explore MiaCasa Hanoi →", vn:"Khám phá MiaCasa Hà Nội →", zh:"探索 MiaCasa Hanoi →"},

'auto-our-story-055': {
en:"A larger group stay in the heart of Hanoi's Old Quarter, designed for travelers who want to experience the city together — a boutique home away from home.",
vn:"Một chỗ ở cho nhóm lớn ngay trung tâm Phố Cổ Hà Nội, dành cho du khách muốn trải nghiệm thành phố cùng nhau — một ngôi nhà boutique đúng nghĩa.",
zh:"位于河内老城区中心的团体住宿，专为希望共同体验这座城市的旅行者设计 — 一个精品之家，宛如身在第二故乡。"
},

'auto-our-story-056': {en:"Entire 3-bedroom apartment", vn:"Toàn bộ căn hộ 3 phòng ngủ", zh:"整套三居室公寓"},
'auto-our-story-057': {en:"Ideal for families and groups", vn:"Lý tưởng cho gia đình và nhóm bạn", zh:"适合家庭和团体入住"},
'auto-our-story-058': {en:"Open terrace space", vn:"Sân thượng thoáng đãng", zh:"开放式露台空间"},
'auto-our-story-059': {en:"Walking distance to Hoàn Kiếm Lake, food streets, and nightlife", vn:"Đi bộ tới Hồ Hoàn Kiếm, phố ẩm thực và khu nightlife", zh:"步行可达还剑湖、美食街和夜生活区"},
'auto-our-story-060': {en:"Explore Old Quarter →", vn:"Khám phá Phố Cổ →", zh:"探索老城区 →"},

'auto-our-story-061': {en:"Different atmosphere. Same philosophy.", vn:"Không khí khác nhau. Cùng một triết lý.", zh:"不同的氛围，相同的理念。"},

'auto-our-story-062': {en:"Why Travelers Choose MiaCasa in Hanoi", vn:"Vì sao du khách chọn MiaCasa tại Hà Nội", zh:"为什么旅行者选择河内的 MiaCasa"},

'auto-our-story-063': {en:"Locally hosted, not remote", vn:"Chủ nhà tại địa phương, không phải quản lý từ xa", zh:"本地房东，非远程管理"},
'auto-our-story-064': {en:"Direct, responsive communication", vn:"Giao tiếp trực tiếp, phản hồi nhanh", zh:"直接、及时的沟通"},
'auto-our-story-065': {en:"Thoughtfully designed interiors", vn:"Nội thất được thiết kế có chủ đích", zh:"用心设计的室内空间"},
'auto-our-story-066': {en:"Calm, lived-in spaces, not staged showrooms", vn:"Không gian sống thật, không phải phòng trưng bày", zh:"宁静、有生活气息的空间，而非摆拍样板间"},

'auto-our-story-067': {en:"Better value direct", vn:"Giá tốt hơn khi đặt trực tiếp", zh:"直接预订更超值"},
'auto-our-story-068': {en:"No platform fees, better rates", vn:"Không phí nền tảng, giá tốt hơn", zh:"无平台费用，更优惠价格"},

'auto-our-story-069': {en:"Flexible & independent", vn:"Linh hoạt và tự chủ", zh:"灵活自主"},
'auto-our-story-070': {en:"Self check-in, support when needed", vn:"Tự nhận phòng, hỗ trợ khi cần", zh:"自助入住，需要时提供支持"},

'auto-our-story-071': {en:"Two prime locations", vn:"Hai vị trí thuận lợi", zh:"两处黄金地段"},
'auto-our-story-072': {en:"Quiet Văn Miếu or vibrant Old Quarter", vn:"Khu Văn Miếu yên tĩnh hoặc Phố Cổ sôi động", zh:"宁静的文庙或充满活力的老城区"},

'auto-our-story-073': {en:"Award-winning hospitality", vn:"Dịch vụ được công nhận", zh:"屡获殊荣的待客之道"},
'auto-our-story-074': {en:"Booking.com 9.3 · Airbnb Superhost 2025", vn:"Booking.com 9.3 · Airbnb Superhost 2025", zh:"Booking.com 9.3分 · Airbnb 2025年超赞房东"},

'auto-our-story-075': {en:"Before", vn:"Trước", zh:"改造前"},
'auto-our-story-076': {en:"An empty apartment with potential", vn:"Một căn hộ trống đầy tiềm năng", zh:"充满潜力的空公寓"},

'auto-our-story-077': {en:"During", vn:"Trong", zh:"改造中"},
'auto-our-story-078': {en:"Materials, furniture, and ideas coming together", vn:"Vật liệu, nội thất và ý tưởng đang kết hợp", zh:"材料、家具与创意融为一体"},

'auto-our-story-079': {en:"After", vn:"Sau", zh:"改造后"},
'auto-our-story-080': {
  en:"A finished home, ready for shared stays",
  vn:"Một ngôi nhà hoàn thiện, sẵn sàng cho những kỳ nghỉ chung",
  zh:"完工的家，准备好迎接共同居住的时光"
},

'auto-our-story-081': {
  en:"Why We Built Our Own Website",
  vn:"Tại sao chúng tôi xây dựng website riêng",
  zh:"我们为什么建立自己的网站"
},

'auto-our-story-082': {
  en:"After years of hosting on major booking platforms, we created a direct booking experience for guests who prefer a more personal and transparent way to book. MiaCasa's direct booking website  allows guests to reserve stays more personally, transparently, and at better value than traditional platforms.",
  vn:"Sau nhiều năm đón tiếp khách qua các nền tảng đặt phòng lớn, chúng tôi đã tạo ra trải nghiệm đặt phòng trực tiếp dành cho những khách muốn một cách đặt phòng cá nhân và minh bạch hơn. Trang web đặt phòng trực tiếp của MiaCasa  giúp khách đặt phòng cá nhân hơn, minh bạch hơn và có mức giá tốt hơn so với các nền tảng truyền thống.",
  zh:"在大型预订平台接待客人多年后，我们为喜欢更个性化和透明预订方式的客人创建了直接预订体验。MiaCasa的官网直接预订 让客人可以更个性化、更透明、更超值地预订住宿。"
},

'auto-our-story-083': {
  en:"Direct booking guests receive the same trusted MiaCasa experience  with better rates and direct support from hosts.",
  vn:"Khách đặt trực tiếp vẫn nhận được trải nghiệm MiaCasa đáng tin cậy  với giá tốt hơn và hỗ trợ trực tiếp từ chủ nhà.",
  zh:"直接预订的客人享受同样值得信赖的MiaCasa体验 ，价格更优，并获得房东的直接支持。"
},

'auto-our-story-084': {
  en:"Guests can still verify our reputation through Airbnb and Booking.com reviews before booking directly.",
  vn:"Khách vẫn có thể xem đánh giá của chúng tôi trên Airbnb và Booking.com trước khi đặt trực tiếp.",
  zh:"客人仍可通过Airbnb和Booking.com上的评价验证我们的声誉，然后再进行直接预订。"
},

'auto-our-story-085': {
  en:"Booking directly with MiaCasa means:",
  vn:"Đặt trực tiếp với MiaCasa có nghĩa là:",
  zh:"直接在MiaCasa预订意味着："
},

'auto-our-story-086': {en:"Better rates", vn:"Giá tốt hơn", zh:"更优惠的价格"},
'auto-our-story-087': {en:"No platform commissions", vn:"Không phí nền tảng", zh:"无平台佣金"},
'auto-our-story-088': {en:"Direct communication", vn:"Giao tiếp trực tiếp", zh:"直接沟通"},
'auto-our-story-089': {en:"Speak directly with your hosts", vn:"Trò chuyện trực tiếp với chủ nhà", zh:"与房东直接对话"},
'auto-our-story-090': {en:"Instant confirmation", vn:"Xác nhận ngay lập tức", zh:"即时确认"},
'auto-our-story-091': {en:"No waiting period", vn:"Không phải chờ đợi", zh:"无需等待"},
'auto-our-story-092': {en:"Flexible support", vn:"Hỗ trợ linh hoạt", zh:"灵活的支持"},
'auto-our-story-093': {en:"Before and during your stay", vn:"Trước và trong kỳ nghỉ", zh:"入住前及入住期间"},

'auto-our-story-094': {
  en:"A more personal experience from start to finish.",
  vn:"Một trải nghiệm cá nhân hơn từ đầu đến cuối.",
  zh:"从始至终更加个性化的体验。"
},

'auto-our-story-095': {
  en:"What Stays the Same",
  vn:"Điều không thay đổi",
  zh:"始终不变的是什么"
},

'auto-our-story-096': {
  en:"Even as MiaCasa grows, the core idea remains the same. We believe hospitality should feel human — not scripted, not transactional, and not designed only for photos.",
  vn:"Ngay cả khi MiaCasa phát triển, giá trị cốt lõi vẫn không thay đổi. Chúng tôi tin rằng dịch vụ lưu trú nên mang tính con người — không kịch bản, không giao dịch, và không chỉ để chụp ảnh.",
  zh:"即使MiaCasa不断发展，核心理念始终不变。我们相信待客之道应富有人情味 — 不照本宣科，不仅仅是交易，也不仅为拍照而设计。"
},

'auto-our-story-097': {
  en:"Just spaces hosted with care by people who are genuinely involved.",
  vn:"Chỉ là những không gian được chăm sóc bởi những con người thực sự gắn bó.",
  zh:"只是由真正投入的人用心管理的空间。"
},

'auto-our-story-098': {
  en:"Always Improving",
  vn:"Luôn cải thiện",
  zh:"不断改进"
},

'auto-our-story-099': {
  en:"Every guest experience helps shape the next version of MiaCasa. The spaces evolve, but the goal stays the same: stays that feel comfortable, honest, and memorable in a natural way.",
  vn:"Mỗi trải nghiệm của khách đều giúp định hình phiên bản tiếp theo của MiaCasa. Không gian thay đổi, nhưng mục tiêu vẫn như cũ: những kỳ nghỉ thoải mái, chân thật và đáng nhớ một cách tự nhiên.",
  zh:"每一位客人的体验都在帮助塑造下一版本的MiaCasa。空间不断演变，但目标始终如一：自然、舒适、真诚且难忘的住宿体验。"
},

'auto-our-story-100': {
  en:"If you're visiting Hanoi and looking for a boutique homestay that feels more personal than a standard hotel, we'd love to host you.",
  vn:"Nếu bạn đến Hà Nội và tìm một boutique homestay mang tính cá nhân hơn khách sạn thông thường, chúng tôi rất mong được đón tiếp bạn.",
  zh:"如果您正在访问河内，并寻找比标准酒店更具个性化感觉的精品民宿，我们很乐意接待您。"
},

'auto-our-story-101': {
  en:"Whether you are traveling solo, as a couple, or with family, there is a space designed for you at MiaCasa.",
  vn:"Dù bạn đi một mình, theo cặp hay cùng gia đình, đều có không gian phù hợp dành cho bạn tại MiaCasa.",
  zh:"无论您是独自旅行、情侣出行还是家庭出游，MiaCasa都有为您设计的空间。"
},

'auto-our-story-102': {
  en:"Frequently Asked Questions",
  vn:"Câu hỏi thường gặp",
  zh:"常见问题解答"
},

'auto-our-story-103': {
  en:"Is MiaCasa a hotel or a homestay?",
  vn:"MiaCasa là khách sạn hay homestay?",
  zh:"MiaCasa是酒店还是民宿？"
},

'auto-our-story-104': {
  en:"MiaCasa is a boutique homestay, not a hotel. Guests enjoy private and independent stays while still experiencing a warm, local atmosphere. The hosts do not live on-site, but our team is always available online or nearby if you need assistance.",
  vn:"MiaCasa là một boutique homestay, không phải khách sạn. Khách được tận hưởng không gian riêng tư và độc lập nhưng vẫn có cảm giác ấm cúng, gần gũi. Chủ nhà không sống tại chỗ, nhưng đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ online hoặc ở gần nếu cần.",
  zh:"MiaCasa是一家精品民宿，不是酒店。客人享受私密独立的住宿空间，同时体验温馨的本地氛围。房东不住在现场，但如果您需要帮助，我们的团队始终在线或在附近提供支持。"
},

'auto-our-story-105': {
  en:"Which MiaCasa property is best for couples?",
  vn:"Homestay nào phù hợp nhất cho các cặp đôi?",
  zh:"哪处MiaCasa房源最适合情侣？"
},

'auto-our-story-106': {
  en:"MiaCasa Hanoi is ideal for couples and solo travelers. It's a quieter neighborhood near Văn Miếu and Train Street with private studio-style rooms and kitchenettes.",
  vn:"MiaCasa Hanoi lý tưởng cho cặp đôi và khách đi một mình. Đây là khu yên tĩnh gần Văn Miếu và Phố Tàu với phòng studio riêng và bếp nhỏ.",
  zh:"MiaCasa Hanoi非常适合情侣和独行旅客。这是一个靠近文庙和火车街的安静社区，提供独立单间式客房和小厨房。"
},

'auto-our-story-107': {
  en:"Is direct booking cheaper than Airbnb or Booking.com?",
  vn:"Đặt trực tiếp có rẻ hơn Airbnb hoặc Booking.com không?",
  zh:"直接预订比Airbnb或Booking.com更便宜吗？"
},

'auto-our-story-108': {
  en:"Yes. Direct booking offers better rates because there are no platform commissions. You get the same trusted MiaCasa experience at a lower price.",
  vn:"Có. Đặt trực tiếp có giá tốt hơn vì không có phí nền tảng. Bạn vẫn nhận được trải nghiệm MiaCasa đáng tin cậy với giá thấp hơn.",
  zh:"是的。直接预订提供更优惠的价格，因为没有平台佣金。您以更低的价格获得同样值得信赖的MiaCasa体验。"
},

'auto-our-story-109': {
  en:"How far is MiaCasa from Hanoi Old Quarter?",
  vn:"MiaCasa cách Phố Cổ Hà Nội bao xa?",
  zh:"MiaCasa距离河内老城区有多远？"
},

'auto-our-story-110': {
  en:"MiaCasa Hanoi is about 10–15 minutes from the Old Quarter near Văn Miếu. MiaCasa Old Quarter is located right in the center of the Old Quarter.",
  vn:"MiaCasa Hanoi cách Phố Cổ khoảng 10–15 phút, gần Văn Miếu. MiaCasa Old Quarter nằm ngay trung tâm Phố Cổ.",
  zh:"MiaCasa Hanoi距离老城区约10-15分钟，位于文庙附近。MiaCasa Old Quarter就在老城区中心。"
},

'auto-our-story-111': {
  en:"Do you offer airport pickup?",
  vn:"Bạn có hỗ trợ đón sân bay không?",
  zh:"你们提供机场接送服务吗？"
},

'auto-our-story-112': {
  en:"Yes, we can arrange airport pickup for guests. Please contact us after booking and we’ll help arrange transportation from Noi Bai International Airport.",
  vn:"Có, chúng tôi có thể sắp xếp đón sân bay. Vui lòng liên hệ sau khi đặt phòng và chúng tôi sẽ hỗ trợ phương tiện từ sân bay Nội Bài.",
  zh:"是的，我们可以为客人安排机场接送。请在预订后联系我们，我们将协助安排从内排国际机场的交通。"
},

'auto-our-story-113': {
  en:"Experience a more personal stay in Hanoi.",
  vn:"Trải nghiệm kỳ nghỉ mang tính cá nhân hơn tại Hà Nội.",
  zh:"在河内体验更加个性化的住宿。"
},

'auto-our-story-114': {
  en:"Whether you are traveling solo, as a couple, or with family, there is a space designed for you.",
  vn:"Dù bạn đi một mình, theo cặp hay cùng gia đình, đều có không gian phù hợp dành cho bạn.",
  zh:"无论您是独自旅行、情侣出行还是家庭出游，都有为您设计的空间。"
},

'auto-our-story-115': {en:"Explore Rooms →", vn:"Khám phá phòng →", zh:"探索房间 →"},
'auto-our-story-116': {en:"Book Direct for Better Rates →", vn:"Đặt trực tiếp để có giá tốt hơn →", zh:"直接预订享受更优价格 →"},

'auto-our-story-117': {
  en:"Free cancellation · Instant confirmation · No platform fees",
  vn:"Miễn phí hủy · Xác nhận ngay · Không phí nền tảng",
  zh:"免费取消 · 即时确认 · 无平台费用"
},

'auto-our-story-118': {
  en:"Two distinct homestays in Hanoi — crafted with love for travelers who want a real home, not just a bed.",
  vn:"Hai homestay khác biệt tại Hà Nội — được tạo nên bằng tình yêu cho du khách muốn một ngôi nhà thật sự, không chỉ là một chiếc giường.",
  zh:"河内两处不同风格的民宿 — 为寻求真正家的旅行者用心打造，而不仅仅是一张床。"
},

'auto-our-story-119': {
  en:"🏆 Trusted by guests from around the world",
  vn:"🏆 Được khách từ khắp nơi trên thế giới tin tưởng",
  zh:"🏆 深受全球客人信赖"
},

'auto-our-story-120': {
  en:"<a href=\"/\">Boutique homestays in Hanoi</a> offering direct booking, locally hosted stays, and thoughtfully designed spaces near the Old Quarter and Văn Miếu.",
  vn:"Boutique homestay tại Hà Nội cung cấp đặt phòng trực tiếp, chủ nhà tại chỗ và không gian được thiết kế chu đáo gần Phố Cổ và Văn Miếu.",
  zh:"<a href=\"/\">河内精品民宿</a>，提供直接预订、本地房东接待，以及靠近老城区和文庙的用心设计空间。"
},

'auto-our-story-121': {en:"Our Stays", vn:"Chỗ nghỉ", zh:"我们的住宿"},
'auto-our-story-122': {en:"Book Direct", vn:"Đặt trực tiếp", zh:"直接预订"},
'auto-our-story-123': {en:"Information", vn:"Thông tin", zh:"信息"},
'auto-our-story-124': {en:"Our Story", vn:"Câu chuyện", zh:"我们的故事"},
'auto-our-story-125': {en:"Blog", vn:"Blog", zh:"博客"},
'auto-our-story-126': {en:"Contact", vn:"Liên hệ", zh:"联系方式"},
'auto-our-story-127': {en:"Contact", vn:"Liên hệ", zh:"联系方式"},

'auto-our-story-128': {
  en:"Call +84 869 922 261",
  vn:"Gọi +84 869 922 261",
  zh:"致电 +84 869 922 261"
},

'auto-our-story-129': {
  en:"⏱️ Response within 2 hours",
  vn:"⏱️ Phản hồi trong 2 giờ",
  zh:"⏱️ 2小时内回复"
},

'auto-our-story-130': {
  en:"Made with ♡ in Hanoi",
  vn:"Được tạo nên bằng ♡ tại Hà Nội",
  zh:"用心在河内打造"
},

'auto-our-story-131': {
  en:"📅 Book Now",
  vn:"📅 Đặt ngay",
  zh:"📅 立即预订"
},

'cancel-title': {en:"Cancel Booking", vn:"Hủy Đặt Phòng", zh:"取消预订"},
'cancel-subtitle': {en:"Enter your booking details to submit a cancellation request.", vn:"Nhập thông tin đặt phòng của bạn để gửi yêu cầu hủy.", zh:"请输入您的预订详情以提交取消申请。"},

'cancel-policy-title': {en:"📌 Cancellation Policy", vn:"📌 Chính Sách Hủy", zh:"📌 取消政策"},
'cancel-policy1': {en:"• ✅ Free cancellation up to 48 hours before check-in", vn:"• ✅ Hủy miễn phí đến 48 giờ trước khi nhận phòng", zh:"• ✅ 入住前48小时可免费取消"},
'cancel-policy2': {en:"• ⚠️ Cancellations within 48 hours of check-in may incur a fee", vn:"• ⚠️ Hủy trong vòng 48 giờ trước khi nhận phòng có thể mất phí", zh:"• ⚠️ 入住前48小时内取消可能产生费用"},
'cancel-policy3': {en:"• ❌ No refunds after check-in", vn:"• ❌ Không hoàn tiền sau khi đã nhận phòng", zh:"• ❌ 入住后不退款"},

'cancel-label-bid': {en:"Booking ID *", vn:"Mã đặt phòng *", zh:"预订编号 *"},
'cancel-label-email': {en:"Email Address *", vn:"Địa chỉ Email *", zh:"电子邮箱地址 *"},
'cancel-label-name': {en:"Full Name *", vn:"Họ và tên *", zh:"全名 *"},
'cancel-label-reason': {en:"Reason for cancellation (optional)", vn:"Lý do hủy (tùy chọn)", zh:"取消原因（可选）"},

'cancel-submit-btn': {en:"Submit Cancellation Request →", vn:"Gửi yêu cầu hủy →", zh:"提交取消申请 →"},
'cancel-back-link': {en:"← Back to Home", vn:"← Quay lại Trang chủ", zh:"← 返回首页"},

'cancel-placeholder-bid': {en:"e.g. MCH-SPR-0001", vn:"VD: MCH-SPR-0001", zh:"例如：MCH-SPR-0001"},
'cancel-placeholder-email': {en:"your@email.com", vn:"email@cua.ban", zh:"您的电子邮箱"},
'cancel-placeholder-name': {en:"Enter your full name", vn:"Nhập họ và tên của bạn", zh:"请输入您的全名"},
'cancel-placeholder-reason': {en:"Tell us why you're cancelling (optional)", vn:"Cho chúng tôi biết lý do hủy (tùy chọn)", zh:"请告诉我们您取消的原因（可选）"},

'cancel-loading': {en:"Submitting cancellation request…", vn:"Đang gửi yêu cầu hủy...", zh:"正在提交取消申请…"},

'cancel-pending-title': {en:"📋 Cancellation Request Submitted", vn:"📋 Đã gửi yêu cầu hủy", zh:"📋 取消申请已提交"},
'cancel-pending-message': {
  en:"Your cancellation request has been received. The host will review it and respond within 24 hours.",
  vn:"Yêu cầu hủy của bạn đã được tiếp nhận. Chủ nhà sẽ xem xét và phản hồi trong vòng 24 giờ.",
  zh:"您的取消申请已收到。房东将在24小时内审核并回复。"
},

'cancel-email-sent': {en:"📧 A confirmation email has been sent to you.", vn:"📧 Email xác nhận đã được gửi đến bạn.", zh:"📧 确认邮件已发送给您。"},

'cancel-questions': {en:"💬 Need help?", vn:"💬 Cần hỗ trợ?", zh:"💬 需要帮助？"},
'cancel-whatsapp': {en:"Chat on WhatsApp", vn:"Chat WhatsApp", zh:"通过WhatsApp聊天"},

'cancel-error-title': {en:"❌ Error", vn:"❌ Lỗi", zh:"❌ 错误"},
'cancel-connection-error': {en:"Connection Error", vn:"Lỗi kết nối", zh:"连接错误"},
'cancel-connection-msg': {
  en:"Unable to connect to the server. Please check your internet connection and try again.",
  vn:"Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet và thử lại.",
  zh:"无法连接到服务器。请检查您的网络连接并重试。"
},

'cancel-contact-whatsapp': {
  en:"Contact us on WhatsApp: +84 869 922 261",
  vn:"Liên hệ WhatsApp: +84 869 922 261",
  zh:"通过WhatsApp联系我们：+84 869 922 261"
},

'invoice-sec-invoice': {en:"Post-Stay", vn:"Sau Khi Ở", zh:"住宿后"},

'invoice-inv-title': {en:"Request an <em>Invoice</em>", vn:"Yêu cầu <em>Hóa đơn</em>", zh:"申请<em>发票</em>"},
'invoice-inv-subtitle': {
  en:"Enter your Booking ID (e.g., MCH-SPR-0001 or MCOQ-OLQ-0001) and the email used for booking. We'll generate your invoice instantly.",
  vn:"Nhập mã đặt phòng (VD: MCH-SPR-0001 hoặc MCOQ-OLQ-0001) và email đã dùng khi đặt phòng. Chúng tôi sẽ tạo hóa đơn ngay lập tức.",
  zh:"请输入您的预订编号（例如：MCH-SPR-0001 或 MCOQ-OLQ-0001）和预订时使用的邮箱。我们将即时生成您的发票。"
},

'invoice-lbl-booking-id': {en:"Booking ID", vn:"Mã đặt phòng", zh:"预订编号"},
'invoice-lbl-email': {en:"Email Address", vn:"Địa chỉ Email", zh:"电子邮箱地址"},

'invoice-placeholder-bid': {
  en:"e.g. MCH-SPR-0001 or MCOQ-OLQ-0001",
  vn:"VD: MCH-SPR-0001 hoặc MCOQ-OLQ-0001",
  zh:"例如：MCH-SPR-0001 或 MCOQ-OLQ-0001"
},
'invoice-placeholder-email': {
  en:"Email used for booking",
  vn:"Email đã dùng khi đặt phòng",
  zh:"预订时使用的邮箱"
},

'invoice-err-bid': {en:"Please enter your Booking ID.", vn:"Vui lòng nhập mã đặt phòng.", zh:"请输入您的预订编号。"},
'invoice-err-email': {en:"Please enter the email used for booking.", vn:"Vui lòng nhập email đã dùng khi đặt phòng.", zh:"请输入预订时使用的邮箱。"},

'invoice-btn-generate': {en:"Generate Invoice →", vn:"Tạo hóa đơn →", zh:"生成发票 →"},
'invoice-loading': {en:"⏳ Looking up your booking…", vn:"⏳ Đang tra cứu đặt phòng…", zh:"⏳ 正在查询您的预订…"},

'invoice-help-text': {
  en:"Your Booking ID is in your confirmation email/message. If you can't find it, <a href=\"https://wa.me/84869922261\" target=\"_blank\" rel=\"noopener\">contact us on WhatsApp</a>.",
  vn:"Mã đặt phòng có trong email/tin nhắn xác nhận. Nếu không tìm thấy, <a href=\"https://wa.me/84869922261\" target=\"_blank\" rel=\"noopener\">liên hệ WhatsApp</a>.",
  zh:"您的预订编号在确认邮件/消息中。如果找不到，<a href=\"https://wa.me/84869922261\" target=\"_blank\" rel=\"noopener\">通过WhatsApp联系我们</a>。"
},

'invoice-download-btn': {en:"⬇ Download Invoice PDF", vn:"⬇ Tải hóa đơn PDF", zh:"⬇ 下载发票PDF"},

'invoice-qr-title': {en:"Share your experience", vn:"Chia sẻ trải nghiệm của bạn", zh:"分享您的体验"},

'invoice-hanoi-name': {en:"MiaCasa Hanoi", vn:"MiaCasa Hà Nội", zh:"MiaCasa Hanoi"},
'invoice-oq-name': {en:"MiaCasa Old Quarter", vn:"MiaCasa Phố Cổ", zh:"MiaCasa Old Quarter"},

'invoice-review-text': {en:"Scan to leave a review", vn:"Quét mã để để lại đánh giá", zh:"扫码留下评价"},
'invoice-review-btn': {en:"⭐ Write a Review", vn:"⭐ Viết đánh giá", zh:"⭐ 撰写评价"},

'invoice-reminder-text': {
  en:"✨ Loved your stay? Help other travelers find us — leave a Google review! ✨",
  vn:"✨ Thích kỳ nghỉ của bạn? Hãy giúp khách khác tìm thấy chúng tôi — để lại đánh giá Google nhé! ✨",
  zh:"✨ 喜欢您的住宿体验？帮助其他旅行者找到我们 — 留下Google评价吧！✨"
},

'admin-login-logo': {en:"MiaCasa Admin", vn:"Quản trị MiaCasa", zh:"MiaCasa 管理后台"},
'admin-login-sub': {en:"Owner access only", vn:"Chỉ dành cho chủ nhà", zh:"仅限业主访问"},

'admin-lbl-username': {en:"Username", vn:"Tên đăng nhập", zh:"用户名"},
'admin-lbl-password': {en:"Password", vn:"Mật khẩu", zh:"密码"},
'admin-btn-signin': {en:"Sign In", vn:"Đăng nhập", zh:"登录"},
'admin-login-error': {en:"Incorrect username or password.", vn:"Tên đăng nhập hoặc mật khẩu không đúng.", zh:"用户名或密码错误。"},

'admin-admin-page-title': {en:"Property Management", vn:"Quản lý chỗ nghỉ", zh:"房源管理"},
'admin-admin-page-sub': {en:"Open or close rooms · Set custom prices for specific dates", vn:"Mở hoặc đóng phòng · Đặt giá tùy chỉnh cho các ngày cụ thể", zh:"开放或关闭房间 · 设置特定日期的自定义价格"},

'admin-tab-rooms': {en:"Room Status", vn:"Trạng thái phòng", zh:"房间状态"},
'admin-tab-prices': {en:"Price Overrides", vn:"Giá tùy chỉnh", zh:"价格覆盖"},
'admin-logout': {en:"Sign out", vn:"Đăng xuất", zh:"退出登录"},

'admin-rs-form-title': {en:"Set room availability for a date range", vn:"Đặt tình trạng phòng theo khoảng ngày", zh:"设置日期范围内的房间可用性"},

'admin-lbl-rs-room': {en:"Room", vn:"Phòng", zh:"房间"},
'admin-lbl-rs-from': {en:"From date", vn:"Từ ngày", zh:"起始日期"},
'admin-lbl-rs-to': {en:"To date", vn:"Đến ngày", zh:"结束日期"},
'admin-lbl-rs-status': {en:"Status", vn:"Trạng thái", zh:"状态"},
'admin-lbl-rs-note': {en:"Note (optional)", vn:"Ghi chú (tùy chọn)", zh:"备注（可选）"},

'admin-btn-rs-apply': {en:"Apply changes", vn:"Áp dụng thay đổi", zh:"应用更改"},

'admin-rs-list-title': {en:"Current room status rules", vn:"Danh sách quy tắc trạng thái phòng", zh:"当前房间状态规则"},
'admin-no-rules': {en:"No rules set. All rooms are open by default.", vn:"Chưa có quy tắc nào. Tất cả phòng đang mở mặc định.", zh:"未设置规则。所有房间默认开放。"},

'admin-ov-form-title': {en:"Add price override", vn:"Thêm giá tùy chỉnh", zh:"添加价格覆盖"},

'admin-lbl-ov-room': {en:"Room", vn:"Phòng", zh:"房间"},
'admin-lbl-ov-rule-type': {en:"Rule type", vn:"Loại quy tắc", zh:"规则类型"},
'admin-lbl-ov-from': {en:"From date", vn:"Từ ngày", zh:"起始日期"},
'admin-lbl-ov-to': {en:"To date", vn:"Đến ngày", zh:"结束日期"},
'admin-lbl-ov-weekdays': {en:"Apply on weekdays", vn:"Áp dụng theo thứ trong tuần", zh:"应用于工作日"},
'admin-lbl-ov-months': {en:"Apply in months", vn:"Áp dụng theo tháng", zh:"应用于月份"},
'admin-lbl-ov-price': {en:"Price per night (VND)", vn:"Giá mỗi đêm (VND)", zh:"每晚价格（越南盾）"},
'admin-lbl-ov-note': {en:"Note (optional)", vn:"Ghi chú (tùy chọn)", zh:"备注（可选）"},

'admin-btn-ov-add': {en:"Add override", vn:"Thêm", zh:"添加覆盖"},

'admin-ov-list-title': {en:"Active price overrides", vn:"Giá tùy chỉnh hiện tại", zh:"当前生效的价格覆盖"},
'admin-no-overrides': {en:"No overrides set. Standard rates apply.", vn:"Chưa có giá tùy chỉnh. Áp dụng giá tiêu chuẩn.", zh:"未设置价格覆盖。应用标准价格。"},

'admin-room-spring': {en:"Spring Room (MCH)", vn:"Phòng Xuân (MCH)", zh:"春房 (MCH)"},
'admin-room-summer': {en:"Summer Room (MCH)", vn:"Phòng Hạ (MCH)", zh:"夏房 (MCH)"},
'admin-room-autumn': {en:"Autumn Room (MCH)", vn:"Phòng Thu (MCH)", zh:"秋房 (MCH)"},
'admin-room-oq': {en:"Old Quarter Apartment", vn:"Căn hộ Phố Cổ", zh:"老城区公寓"},

'admin-th-room': {en:"Room", vn:"Phòng", zh:"房间"},
'admin-th-from': {en:"From", vn:"Từ ngày", zh:"起始"},
'admin-th-to': {en:"To", vn:"Đến ngày", zh:"结束"},
'admin-th-status': {en:"Status", vn:"Trạng thái", zh:"状态"},
'admin-th-note': {en:"Note", vn:"Ghi chú", zh:"备注"},
'admin-th-price': {en:"Price / night", vn:"Giá / đêm", zh:"价格/晚"},
'admin-th-usd': {en:"~USD", vn:"~USD", zh:"~美元"},
'admin-th-rule': {en:"Rule", vn:"Quy tắc", zh:"规则"},

'admin-rule-once': {en:"Specific dates", vn:"Ngày cụ thể", zh:"特定日期"},
'admin-rule-weekday': {en:"Recurring weekdays", vn:"Lặp lại theo thứ", zh:"每周重复"},

'admin-opt-rs-closed': {en:"🔒 Closed (unavailable)", vn:"🔒 Đóng (không nhận khách)", zh:"🔒 关闭（不可用）"},
'admin-opt-rs-open': {en:"🔓 Open (available)", vn:"🔓 Mở (nhận khách)", zh:"🔓 开放（可用）"},

'admin-maintenance-on': {en:"Turn maintenance off", vn:"Tắt chế độ bảo trì", zh:"关闭维护模式"},
'admin-maintenance-off': {en:"Turn maintenance on", vn:"Bật chế độ bảo trì", zh:"开启维护模式"},

'admin-maintenance-on-status': {en:"ON", vn:"BẬT", zh:"开启"},
'admin-maintenance-off-status': {en:"OFF", vn:"TẮT", zh:"关闭"},

'auto-best-cafes-hanoi-001': {en:"Hanoi is a city best experienced slowly.", vn:"Hà Nội là thành phố nên được cảm nhận thật chậm.", zh:"河内是一座需要慢慢体验的城市。"},

'auto-best-cafes-hanoi-002': {
en:"Not only through its landmarks and busy streets, but through its cafés — hidden courtyards, quiet upper floors, old apartments overlooking tree-lined roads, and small local spaces where conversations last longer than expected.",
vn:"Không chỉ qua những địa danh nổi tiếng hay các con phố nhộn nhịp, mà còn qua những quán cà phê ẩn mình, những khoảng sân yên tĩnh, các tầng lầu cũ nhìn ra hàng cây xanh, và những không gian nhỏ nơi cuộc trò chuyện kéo dài hơn dự định.",
zh:"不仅通过它的地标和繁华街道，还通过它的咖啡馆 — 隐藏的庭院、安静的楼上、俯瞰林荫大道的老公寓，以及那些让对话比预期更长久的小众本地空间。"
},

'auto-best-cafes-hanoi-003': {
en:"Whether you are visiting Hanoi for a few days or staying longer, finding the right café often becomes part of the rhythm of your trip.",
vn:"Dù bạn đến Hà Nội vài ngày hay ở lại lâu hơn, việc tìm được một quán cà phê phù hợp thường trở thành một phần nhịp điệu của chuyến đi.",
zh:"无论您是来河内几天还是更长时间，找到合适的咖啡馆往往会成为您旅行节奏的一部分。"
},

'auto-best-cafes-hanoi-004': {en:"☕ LOCAL GUIDE", vn:"☕ HƯỚNG DẪN ĐỊA PHƯƠNG", zh:"☕ 本地指南"},

'auto-best-cafes-hanoi-005': {
en:"📅 Updated May 2026 · ☕ 8 min read · ✍️ By MiaCasa Team",
vn:"📅 Cập nhật Tháng 5/2026 · ☕ Đọc 8 phút · ✍️ Đội ngũ MiaCasa",
zh:"📅 2026年5月更新 · ☕ 阅读约8分钟 · ✍️ MiaCasa团队"
},

'auto-best-cafes-hanoi-006': {
en:"<h3>Contents</h3>\n\n<ul>\n<li><a href=\"#loading-t\">Loading T Café</a></li>\n<li><a href=\"#tranquil\">Tranquil Books & Coffee</a></li>\n<li><a href=\"#giang\">Café Giảng</a></li>\n<li><a href=\"#note-coffee\">The Note Coffee</a></li>\n<li><a href=\"#blackbird\">Blackbird Coffee</a></li>\n<li><a href=\"#train-street\">Train Street Cafés</a></li>\n<li><a href=\"#remote-work\">Best Cafés for Remote Work</a></li>\n<li><a href=\"#where-to-stay\">Where to Stay</a></li>\n</ul>",
vn:"<h3>Mục Lục</h3>\n\n<ul>\n<li><a href=\"#loading-t\">Loading T Café</a></li>\n<li><a href=\"#tranquil\">Tranquil Books & Coffee</a></li>\n<li><a href=\"#giang\">Café Giảng</a></li>\n<li><a href=\"#note-coffee\">The Note Coffee</a></li>\n<li><a href=\"#blackbird\">Blackbird Coffee</a></li>\n<li><a href=\"#train-street\">Quán Cà Phê gần Train Street</a></li>\n<li><a href=\"#remote-work\">Cà Phê làm việc từ xa</a></li>\n<li><a href=\"#where-to-stay\">Nên ở đâu</a></li>\n</ul>",
zh:"<h3>目录</h3>\n\n<ul>\n<li><a href=\"#loading-t\">Loading T 咖啡馆</a></li>\n<li><a href=\"#tranquil\">Tranquil Books & Coffee</a></li>\n<li><a href=\"#giang\">Café Giảng</a></li>\n<li><a href=\"#note-coffee\">The Note Coffee</a></li>\n<li><a href=\"#blackbird\">Blackbird Coffee</a></li>\n<li><a href=\"#train-street\">火车街咖啡馆</a></li>\n<li><a href=\"#remote-work\">适合远程办公的咖啡馆</a></li>\n<li><a href=\"#where-to-stay\">住宿推荐</a></li>\n</ul>"
},

'auto-best-cafes-hanoi-007': {en:"Old Quarter Favorite", vn:"Yêu thích tại Phố Cổ", zh:"老城区最爱"},

'auto-best-cafes-hanoi-008': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-009': {en:"Remote Work Favorite", vn:"Phù hợp làm việc từ xa", zh:"远程办公最爱"},

'auto-best-cafes-hanoi-010': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-011': {en:"Historic Hanoi Café", vn:"Quán cà phê mang tính lịch sử", zh:"河内历史咖啡馆"},

'auto-best-cafes-hanoi-012': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-013': {en:"Colorful Café Experience", vn:"Trải nghiệm quán cà phê nhiều màu sắc", zh:"多彩咖啡馆体验"},

'auto-best-cafes-hanoi-014': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-015': {en:"Specialty Coffee", vn:"Cà phê specialty", zh:"精品咖啡"},

'auto-best-cafes-hanoi-016': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-017': {en:"Hidden Local Spots", vn:"Góc cà phê địa phương ẩn mình", zh:"隐藏的本地咖啡角"},

'auto-best-cafes-hanoi-018': {
  en: 'Closest stay:',
  vn: 'Gần nhất:',
  zh: '最近的住宿：'
},

'auto-best-cafes-hanoi-019': {
en:"From hidden Old Quarter cafés and authentic Vietnamese egg coffee to peaceful remote work spaces near Văn Miếu, this guide explores the best cafés in Hanoi for travelers who want to experience the city slowly.",
vn:"Từ những quán cà phê ẩn mình trong khu phố cổ đến không gian yên tĩnh gần Văn Miếu dành cho làm việc từ xa, đây là hướng dẫn dành cho những ai muốn cảm nhận Hà Nội một cách chậm rãi hơn.",
zh:"从隐藏在老城区的咖啡馆和正宗的越南蛋咖啡，到文庙附近宁静的远程办公空间，本指南探索了河内最适合想要慢慢体验这座城市的旅行者的咖啡馆。"
},

'auto-best-cafes-hanoi-020': {
en:"Tucked inside a restored French colonial villa, Loading T Café is known for its quiet atmosphere, vintage interiors, and excellent Vietnamese egg coffee.",
vn:"Ẩn mình trong một căn biệt thự Pháp cổ được phục chế, Loading T Café nổi tiếng với không gian yên tĩnh, nội thất vintage và cà phê trứng đậm chất Hà Nội.",
zh:"Loading T 咖啡馆藏身于一栋经过修复的法式殖民时期别墅内，以其安静的氛围、复古的内饰和绝佳的越南蛋咖啡而闻名。"
},

'auto-best-cafes-hanoi-021': {
en:"Tranquil offers one of the quietest café environments in Hanoi, with bookshelves, warm lighting, and reliable WiFi.",
vn:"Tranquil mang đến một trong những không gian cà phê yên tĩnh nhất Hà Nội, với kệ sách, ánh sáng ấm và WiFi ổn định.",
zh:"Tranquil 提供河内最安静的咖啡馆环境之一，配有书架、温暖的灯光和稳定的WiFi。"
},

'auto-best-cafes-hanoi-022': {
en:"Famous for creating Vietnamese egg coffee decades ago, Café Giảng still preserves a nostalgic and distinctly local atmosphere.",
vn:"Café Giảng nổi tiếng là nơi khai sinh cà phê trứng và vẫn giữ được không khí hoài niệm rất riêng của Hà Nội xưa.",
zh:"Café Giảng 以数十年前创造越南蛋咖啡而闻名，至今仍保留着怀旧而独特的本地氛围。"
},

'auto-best-cafes-hanoi-023': {
en:"Covered in handwritten notes from travelers around the world, The Note Coffee is one of the most recognizable cafés near Hoàn Kiếm Lake.",
vn:"Được phủ kín bởi những mảnh giấy nhắn từ du khách khắp nơi trên thế giới, The Note Coffee là một trong những quán nổi bật gần Hồ Hoàn Kiếm.",
zh:"The Note Coffee 贴满了来自世界各地旅行者的手写便条，是还剑湖附近最具辨识度的咖啡馆之一。"
},

'auto-best-cafes-hanoi-024': {
en:"Blackbird Coffee is known for carefully brewed Vietnamese coffee and a minimalist design loved by coffee enthusiasts.",
vn:"Blackbird Coffee nổi tiếng với cà phê Việt Nam pha thủ công cùng thiết kế tối giản được nhiều người yêu thích.",
zh:"Blackbird Coffee 以精心冲泡的越南咖啡和深受咖啡爱好者喜爱的极简设计而闻名。"
},

'auto-best-cafes-hanoi-025': {
en:"Exploring the quieter lanes around Train Street often leads to some of the most memorable coffee experiences in Hanoi.",
vn:"Những con ngõ nhỏ quanh Train Street thường mang đến các trải nghiệm cà phê đáng nhớ nhất tại Hà Nội.",
zh:"探索火车街周围安静的小巷，往往会带来河内最令人难忘的咖啡体验。"
},

'auto-best-cafes-hanoi-026': {
en:"Explore Hanoi slowly with boutique stays designed for travelers, remote workers, couples, and longer visits.",
vn:"Khám phá Hà Nội thật chậm với những homestay boutique dành cho du khách, người làm việc từ xa, cặp đôi và lưu trú dài ngày.",
zh:"通过为旅行者、远程工作者、情侣和长期住宿设计的精品住宿，慢慢探索河内。"
},

'auto-best-cafes-hanoi-027': {
en:"Hanoi’s café culture is not simply about coffee. It is about slowing down long enough to notice the rhythm of the city.",
vn:"Văn hóa cà phê Hà Nội không chỉ là cà phê, mà còn là việc chậm lại đủ lâu để cảm nhận nhịp sống của thành phố.",
zh:"河内的咖啡文化不仅仅是关于咖啡。而是关于放慢脚步，足够久地去感受这座城市的节奏。"
},

'auto-best-cafes-hanoi-028': {
en:"Best Cafés in Hanoi for Coffee, Work & Quiet Mornings",
vn:"Những Quán Cà Phê Đẹp Nhất Hà Nội Để Làm Việc & Thư Giãn",
zh:"河内最适合咖啡、工作和安静早晨的咖啡馆"
},

'auto-best-cafes-hanoi-029': {en:"1. Loading T Café", vn:"1. Loading T Café", zh:"1. Loading T 咖啡馆"},
'auto-best-cafes-hanoi-030': {en:"6. Hidden Cafés Around Train Street", vn:"6. Những Quán Cà Phê Nhỏ Quanh Train Street", zh:"6. 火车街周边的隐藏咖啡馆"},
'auto-best-cafes-hanoi-031': {en:"Best Cafés in Hanoi for Remote Work", vn:"Những Quán Cà Phê Phù Hợp Để Làm Việc", zh:"河内最适合远程办公的咖啡馆"},
'auto-best-cafes-hanoi-032': {en:"Where to Stay in Hanoi for Café Lovers", vn:"Nên Ở Đâu Tại Hà Nội Nếu Bạn Yêu Cà Phê?", zh:"咖啡爱好者来河内住哪里"},
'auto-best-cafes-hanoi-033': {en:"Final Thoughts", vn:"Lời Kết", zh:"最后的话"},

'auto-best-cafes-hanoi-034': {en:"One of the most peaceful hidden cafés in the Old Quarter.", vn:"Một trong những quán cà phê yên bình nhất giữa lòng Phố Cổ.", zh:"老城区最宁静的隐藏咖啡馆之一。"},
'auto-best-cafes-hanoi-035': {en:"An ideal café near Văn Miếu for reading and remote work.", vn:"Quán lý tưởng gần Văn Miếu để đọc sách và làm việc từ xa.", zh:"文庙附近适合阅读和远程办公的理想咖啡馆。"},
'auto-best-cafes-hanoi-036': {en:"The original home of Hanoi egg coffee.", vn:"Nơi khai sinh cà phê trứng Hà Nội.", zh:"河内蛋咖啡的发源地。"},
'auto-best-cafes-hanoi-037': {en:"Stay Near Hanoi’s Best Cafés", vn:"Lưu Trú Gần Những Quán Cà Phê Đẹp Nhất Hà Nội", zh:"入住河内最佳咖啡馆附近"},
'auto-best-cafes-hanoi-038': {en:"Explore Old Quarter", vn:"Khám Phá Old Quarter", zh:"探索老城区"},
'auto-best-cafes-hanoi-039': {en:"Explore MiaCasa Hanoi", vn:"Khám Phá MiaCasa Hanoi", zh:"探索 MiaCasa Hanoi"},
'auto-best-cafes-hanoi-040': {en:"Book MiaCasa Hanoi", vn:"Đặt MiaCasa Hanoi", zh:"预订 MiaCasa Hanoi"},
'auto-best-cafes-hanoi-041': {en:"Book Old Quarter", vn:"Đặt Old Quarter", zh:"预订老城区"},
'auto-best-cafes-hanoi-042': {en:"← Back to Blog", vn:"← Quay Lại Blog", zh:"← 返回博客"},

'auto-best-cafes-hanoi-043': {
en:"<li>Beautiful colonial architecture</li>\n<li>Excellent egg coffee</li>\n<li>Peaceful atmosphere</li>",
vn:"<li>Kiến trúc Pháp cổ đẹp mắt</li>\n<li>Cà phê trứng nổi tiếng</li>\n<li>Không gian yên tĩnh</li>",
zh:"<li>美丽的殖民时期建筑</li>\n<li>绝佳的蛋咖啡</li>\n<li>宁静的氛围</li>"
},

'auto-best-cafes-hanoi-044': {
en:"<li>Walk to Hoàn Kiếm Lake</li>\n<li>Historic café culture</li>\n<li>Easy sightseeing access</li>",
vn:"<li>Đi bộ đến Hồ Hoàn Kiếm</li>\n<li>Không khí cà phê lịch sử</li>\n<li>Thuận tiện tham quan</li>",
zh:"<li>步行可达还剑湖</li>\n<li>历史悠久的咖啡文化</li>\n<li>观光便利</li>"
},

'auto-best-cafes-hanoi-045': {
en:"<li>Quiet residential atmosphere</li>\n<li>Near Văn Miếu & Train Street</li>\n<li>Slower pace while still central</li>",
vn:"<li>Khu dân cư yên tĩnh</li>\n<li>Gần Văn Miếu & Train Street</li>\n<li>Nhịp sống chậm hơn nhưng vẫn trung tâm</li>",
zh:"<li>安静的居住氛围</li>\n<li>靠近文庙和火车街</li>\n<li>节奏较慢但仍在中心地带</li>"
},
// Best Cafés - Extended
'auto-best-cafes-hanoi-046': {
  en: 'The Vietnamese coffee culture is rich, deep, and woven into the fabric of daily life. From the bustling streets of the Old Quarter to the quieter lanes near Văn Miếu, there is a café for every mood, every time of day, and every type of traveler.',
  vn: 'Văn hóa cà phê Việt Nam phong phú, sâu sắc và gắn liền với nhịp sống hàng ngày. Từ những con phố sôi động của Phố Cổ đến những ngõ nhỏ yên bình gần Văn Miếu, có một quán cà phê cho mọi tâm trạng, mọi thời điểm và mọi loại du khách.',
  zh: '越南咖啡文化丰富、深厚，并融入日常生活。从老城区繁华的街道到文庙附近安静的小巷，总有一家咖啡馆适合您的心情、时间和旅行风格。'
},
'auto-best-cafes-hanoi-047': {
  en: 'Why Hanoi\'s Café Culture is Unique',
  vn: 'Tại Sao Văn Hóa Cà Phê Hà Nội Lại Đặc Biệt',
  zh: '为什么河内的咖啡文化如此独特'
},
'auto-best-cafes-hanoi-048': {
  en: 'Vietnamese coffee is not just a drink; it\'s a ritual. The slow drip of a phin filter, the sweet richness of condensed milk, the intense bitterness of robusta beans — these elements come together to create something that is distinctly Vietnamese. But beyond the coffee itself, it\'s the experience that matters.',
  vn: 'Cà phê Việt Nam không chỉ là một thức uống; nó là một nghi thức. Giọt cà phê chảy chậm qua phin, vị ngọt béo của sữa đặc, vị đắng đậm của cà phê robusta — những yếu tố này kết hợp tạo nên hương vị đặc trưng của Việt Nam. Nhưng hơn cả cà phê, chính trải nghiệm mới là điều quan trọng.',
  zh: '越南咖啡不仅仅是一种饮料；它是一种仪式。滴漏壶中缓慢滴落的咖啡、炼乳的甜香、罗布斯塔豆的浓烈苦味——这些元素结合在一起，创造出独特的越南风味。但更重要的是咖啡之外的体验。'
},
'auto-best-cafes-hanoi-049': {
  en: 'In Hanoi, cafés are places where people read, work, meet friends, or simply sit and watch the world go by. Many of the best cafés are hidden in plain sight — tucked inside old buildings, up narrow staircases, or behind unassuming facades that give no hint of the beauty within.',
  vn: 'Ở Hà Nội, quán cà phê là nơi người ta đọc sách, làm việc, gặp gỡ bạn bè, hay đơn giản là ngồi ngắm cuộc sống trôi qua. Nhiều quán cà phê đẹp nhất ẩn mình ngay trước mắt — bên trong những tòa nhà cũ, trên những cầu thang hẹp, hoặc phía sau những mặt tiền khiêm nhường không hé lộ vẻ đẹp bên trong.',
  zh: '在河内，咖啡馆是人们阅读、工作、会友或只是坐着看世界的地方。许多最好的咖啡馆藏在显而易见的地方——藏在老建筑内、狭窄的楼梯上，或是不起眼的外墙后面，完全看不出内在的美丽。'
},
'auto-best-cafes-hanoi-050': {
  en: 'The café culture in Hanoi has evolved over decades, blending French colonial influences with Vietnamese traditions. The result is a unique coffee experience that cannot be found anywhere else in the world.',
  vn: 'Văn hóa cà phê Hà Nội đã phát triển qua nhiều thập kỷ, pha trộn ảnh hưởng thuộc địa Pháp với truyền thống Việt Nam. Kết quả là một trải nghiệm cà phê độc đáo không thể tìm thấy ở bất kỳ nơi nào khác trên thế giới.',
  zh: '河内的咖啡文化经过几十年的发展，融合了法国殖民影响和越南传统。结果是一种世界上任何其他地方都找不到的独特咖啡体验。'
},
'auto-best-cafes-hanoi-051': {
  en: 'The café is popular among locals and tourists alike, but it never feels crowded. There is a sense of space and calm that is rare in the bustling Old Quarter. Many visitors find themselves returning multiple times during their stay in Hanoi, drawn back by the peaceful atmosphere and the excellent coffee.',
  vn: 'Quán được yêu thích bởi cả người địa phương và du khách, nhưng không bao giờ có cảm giác quá đông đúc. Có một cảm giác không gian và sự yên tĩnh hiếm có ở Phố Cổ sôi động. Nhiều du khách tìm đến đây nhiều lần trong thời gian ở Hà Nội, bị thu hút bởi không khí yên bình và cà phê tuyệt hảo.',
  zh: '这家咖啡馆深受当地人和游客的喜爱，但从不显得拥挤。在繁华的老城区，这种空间感和宁静感实属罕见。许多游客在河内期间会多次光顾，被宁静的氛围和出色的咖啡所吸引。'
},
'auto-best-cafes-hanoi-052': {
  en: 'The café is also known for its friendly staff and community feel. Regulars often strike up conversations with newcomers, creating a warm and welcoming environment. For digital nomads looking for a place to call their temporary office, Tranquil Books & Coffee is a perfect choice.',
  vn: 'Quán cũng nổi tiếng với nhân viên thân thiện và không khí cộng đồng. Khách quen thường bắt chuyện với người mới, tạo ra môi trường ấm áp và thân thiện. Đối với những du khách sống và làm việc từ xa, Tranquil Books & Coffee là lựa chọn hoàn hảo.',
  zh: '这家咖啡馆还以友好的员工和社区氛围而闻名。常客经常与新来的客人交谈，营造出温暖、热情的环境。对于寻找临时办公室的数字游民，Tranquil Books & Coffee 是完美的选择。'
},
'auto-best-cafes-hanoi-053': {
  en: 'The story of egg coffee is fascinating. It was created during a time when milk was scarce, and the owner of Café Giảng, Nguyen Van Giang, experimented with whipping egg yolks with sugar and condensed milk to create a creamy topping for coffee. The result was a sensation that has stood the test of time.',
  vn: 'Câu chuyện về cà phê trứng thật thú vị. Nó được tạo ra trong thời kỳ sữa khan hiếm, và chủ quán Café Giảng, ông Nguyễn Văn Giảng, đã thử nghiệm đánh lòng đỏ trứng với đường và sữa đặc để tạo ra lớp kem phủ cho cà phê. Kết quả là một thức uống đã trường tồn với thời gian.',
  zh: '蛋咖啡的故事很有趣。它是在牛奶稀缺的时代创造的，Café Giảng 的主人阮文江尝试将蛋黄与糖和炼乳打发，制作出咖啡的奶油顶料。结果是一种经得起时间考验的饮品。'
},
'auto-best-cafes-hanoi-054': {
  en: 'The concept is simple yet powerful: visitors are invited to write notes and stick them to the walls, creating a living tapestry of human experience. Over the years, the café has become a repository of stories, a place where the past and present intersect in colorful, heartfelt ways.',
  vn: 'Ý tưởng đơn giản nhưng mạnh mẽ: du khách được mời viết ghi chú và dán lên tường, tạo nên một bức tranh sống động về trải nghiệm con người. Qua nhiều năm, quán đã trở thành nơi lưu giữ những câu chuyện, nơi quá khứ và hiện tại giao thoa một cách đầy màu sắc và chân thành.',
  zh: '这个概念简单而有力：邀请访客写便条并贴在墙上，创造了一幅人类经验的生动画卷。多年来，这家咖啡馆已成为故事的宝库，过去与现在以丰富多彩、真诚的方式交汇。'
},
'auto-best-cafes-hanoi-055': {
  en: 'The atmosphere is modern and clean, with large windows that let in plenty of natural light. It\'s a popular spot for both locals and expats who appreciate good coffee and a quiet space to work or relax.',
  vn: 'Không gian hiện đại và sạch sẽ, với cửa sổ lớn đón nhiều ánh sáng tự nhiên. Đây là điểm đến phổ biến cho cả người địa phương và người nước ngoài yêu thích cà phê ngon và không gian yên tĩnh để làm việc hoặc thư giãn.',
  zh: '氛围现代而干净，大窗户让充足的自然光线进入。这里是当地人和外籍人士的热门去处，他们欣赏好咖啡和安静的工作或放松空间。'
},
'auto-best-cafes-hanoi-056': {
  en: 'The Train Street area offers a unique blend of local life and tourist curiosity. The cafés here have become famous for their proximity to the railway, but they remain deeply rooted in the community. Visiting one of these cafés is not just about watching the train; it\'s about experiencing a way of life that has persisted for generations.',
  vn: 'Khu vực Train Street mang đến sự kết hợp độc đáo giữa cuộc sống địa phương và sự tò mò của du khách. Những quán cà phê ở đây trở nên nổi tiếng vì gần đường ray, nhưng vẫn gắn bó sâu sắc với cộng đồng. Ghé thăm một trong những quán cà phê này không chỉ là để xem tàu chạy; mà là để trải nghiệm một cách sống đã tồn tại qua nhiều thế hệ.',
  zh: '火车街地区提供了本地生活和游客好奇心的独特融合。这里的咖啡馆因其靠近铁路而闻名，但仍然深深扎根于社区。参观这些咖啡馆不仅仅是看火车；而是体验一种持续了几代人的生活方式。'
},
'auto-best-cafes-hanoi-057': {
  en: 'For digital nomads and remote workers, finding the right café is essential. Fortunately, Hanoi is full of spaces that cater to this need. Besides Tranquil Books & Coffee and Blackbird Coffee, other notable mentions include The Hanoi Social Club and Kone Café, both of which offer fast WiFi, comfortable seating, and a productive atmosphere.',
  vn: 'Đối với dân số và làm việc từ xa, tìm được quán cà phê phù hợp là điều cần thiết. May mắn thay, Hà Nội có rất nhiều không gian đáp ứng nhu cầu này. Bên cạnh Tranquil Books & Coffee và Blackbird Coffee, còn có The Hanoi Social Club và Kone Café, cả hai đều có WiFi nhanh, ghế ngồi thoải mái và không gian làm việc hiệu quả.',
  zh: '对于数字游民和远程工作者来说，找到合适的咖啡馆至关重要。幸运的是，河内有很多满足这一需求的空间。除了 Tranquil Books & Coffee 和 Blackbird Coffee，其他值得注意的还包括 The Hanoi Social Club 和 Kone Café，两者都提供快速的 WiFi、舒适的座位和高效的工作氛围。'
},
'auto-best-cafes-hanoi-058': {
  en: 'Remote work has become increasingly popular in recent years, and Hanoi has embraced this trend with open arms. The city\'s cafés have adapted to accommodate the needs of digital nomads, offering reliable internet, plenty of power outlets, and comfortable workspaces.',
  vn: 'Làm việc từ xa đã trở nên phổ biến trong những năm gần đây, và Hà Nội đã đón nhận xu hướng này. Các quán cà phê của thành phố đã thích nghi để đáp ứng nhu cầu của dân số, cung cấp internet ổn định, nhiều ổ cắm điện và không gian làm việc thoải mái.',
  zh: '近年来，远程办公变得越来越流行，河内也热情地接受了这一趋势。城市的咖啡馆已经适应了数字游民的需求，提供可靠的互联网、充足的电源插座和舒适的工作空间。'
},
'auto-best-cafes-hanoi-059': {
  en: 'If you love coffee and want to be close to Hanoi\'s best cafés, MiaCasa Old Quarter places you at the heart of the action — steps from Hoàn Kiếm Lake, historic cafés, and the vibrant energy of the city center.',
  vn: 'Nếu bạn yêu thích cà phê và muốn ở gần những quán cà phê đẹp nhất Hà Nội, MiaCasa Old Quarter đặt bạn ngay trung tâm — cách Hồ Hoàn Kiếm, các quán cà phê lịch sử và năng lượng sôi động của trung tâm thành phố chỉ vài bước chân.',
  zh: '如果您喜欢咖啡并想靠近河内最好的咖啡馆，MiaCasa Old Quarter 将您置于一切的中心——距离还剑湖、历史悠久的咖啡馆和市中心充满活力的能量仅几步之遥。'
},
'auto-best-cafes-hanoi-060': {
  en: 'Alternatively, MiaCasa Hanoi offers a quieter, more local experience near Văn Miếu and Train Street, with easy access to hidden gems that most tourists never discover.',
  vn: 'Ngoài ra, MiaCasa Hanoi mang đến trải nghiệm yên tĩnh và gần gũi hơn gần Văn Miếu và Train Street, với đường đến những điểm ẩn mình mà hầu hết du khách không bao giờ khám phá được.',
  zh: '另外，MiaCasa Hanoi 在文庙和火车街附近提供更安静、更本地化的体验，方便前往大多数游客从未发现的隐藏宝藏。'
},
'auto-best-cafes-hanoi-061': {
  en: 'Both properties are perfectly positioned for café lovers. Whether you prefer the bustling energy of the Old Quarter or the peaceful charm of the Văn Miếu area, you will find yourself surrounded by excellent coffee options.',
  vn: 'Cả hai chỗ nghỉ đều có vị trí lý tưởng cho những người yêu cà phê. Dù bạn thích năng lượng sôi động của Phố Cổ hay sự yên bình của khu Văn Miếu, bạn sẽ luôn có những lựa chọn cà phê tuyệt vời xung quanh.',
  zh: '这两个住宿位置都非常适合咖啡爱好者。无论您喜欢老城区的繁华活力还是文庙区的宁静魅力，您都会发现自己周围都是优质的咖啡选择。'
},
'auto-best-cafes-hanoi-062': {
  en: 'The city\'s café culture is a reflection of its people — warm, welcoming, and full of stories waiting to be shared. Every cup of coffee tells a story, and every café has its own unique character. In Hanoi, coffee is more than a beverage; it is a way of life.',
  vn: 'Văn hóa cà phê của thành phố phản ánh con người nơi đây — ấm áp, thân thiện và đầy những câu chuyện đang chờ được chia sẻ. Mỗi tách cà phê đều kể một câu chuyện, và mỗi quán cà phê đều có nét riêng. Ở Hà Nội, cà phê không chỉ là đồ uống; nó là một cách sống.',
  zh: '城市的咖啡文化反映了它的人民——温暖、热情、充满等待分享的故事。每一杯咖啡都讲述一个故事，每一家咖啡馆都有自己独特的个性。在河内，咖啡不仅仅是一种饮料；它是一种生活方式。'
},
/* ── OLD QUARTER BLOG PAGE ──────────────────────────────────────── */

// Blog metadata & header
'blog-oq-title': {
  en: 'Hanoi Old Quarter Guide (2026) | Streets, Food, Cafés & Local Tips | MiaCasa',
  vn: 'Hướng Dẫn Phố Cổ Hà Nội (2026) | Đường Phố, Ẩm Thực, Cà Phê & Mẹo Địa Phương | MiaCasa',
  zh: '河内老城区指南（2026）｜街道、美食、咖啡馆与本地贴士｜MiaCasa'
},
'blog-oq-breadcrumb': {
  en: 'Hanoi Old Quarter Guide',
  vn: 'Hướng Dẫn Phố Cổ Hà Nội',
  zh: '河内老城区指南'
},
'blog-oq-category': {
  en: '📍 HANOI LOCAL GUIDE',
  vn: '📍 HƯỚNG DẪN ĐỊA PHƯƠNG HÀ NỘI',
  zh: '📍 河内本地指南'
},
'blog-oq-subtitle': {
  en: 'A complete guide to Hanoi Old Quarter — what it\'s really like in 2026, the best streets to explore, what to eat, hidden cafés, and whether staying here actually makes sense for your trip.',
  vn: 'Hướng dẫn đầy đủ về Phố Cổ Hà Nội — không khí thực sự năm 2026, những con phố đẹp nhất, ăn gì, cà phê ẩn, và có nên ở đây cho chuyến đi của bạn.',
  zh: '完整的河内老城区指南 — 2026年的真实面貌、最值得逛的街道、吃什么、隐藏咖啡馆，以及住在老城区是否适合你的旅行。'
},
'blog-oq-meta': {
  en: '📅 May 28, 2026 · ☕ 12 min read · ✍️ By MiaCasa Team',
  vn: '📅 28 Tháng 5, 2026 · ☕ Đọc 12 phút · ✍️ Đội ngũ MiaCasa',
  zh: '📅 2026年5月28日 · ☕ 阅读12分钟 · ✍️ MiaCasa团队'
},
'blog-oq-image-caption': {
  en: 'The Hanoi Old Quarter — chaotic, beautiful, and unforgettable',
  vn: 'Phố Cổ Hà Nội — hỗn độn, đẹp và khó quên',
  zh: '河内老城区 — 混乱、美丽、令人难忘'
},
// Blog listing page - Old Quarter Card (ADD THESE)
'blog-oq-card-category': {
  en: '📍 LOCAL GUIDE',
  vn: '📍 HƯỚNG DẪN ĐỊA PHƯƠNG',
  zh: '📍 本地指南'
},
'blog-oq-card-title': {
  en: 'Hanoi Old Quarter Guide (2026): Streets, Food, Cafés & Local Tips',
  vn: 'Hướng Dẫn Phố Cổ Hà Nội (2026): Đường Phố, Ẩm Thực, Cà Phê & Mẹo Địa Phương',
  zh: '河内老城区指南（2026）：街道、美食、咖啡馆与本地贴士'
},
'blog-oq-card-excerpt': {
  en: 'Complete guide to Hanoi Old Quarter — best streets to explore, what to eat, hidden cafés, common mistakes, and where to stay.',
  vn: 'Hướng dẫn đầy đủ về Phố Cổ Hà Nội — những con phố đẹp nhất để khám phá, ăn gì, quán cà phê ẩn, những sai lầm phổ biến và nên ở đâu.',
  zh: '完整的河内老城区指南 — 最值得逛的街道、吃什么、隐藏咖啡馆、常见错误以及住在哪里。'
},
'blog-oq-card-meta': {
  en: '📅 May 28, 2026 · ☕ 12 min read',
  vn: '📅 28 Tháng 5, 2026 · ☕ Đọc 12 phút',
  zh: '📅 2026年5月28日 · ☕ 阅读12分钟'
},
// Table of Contents
'blog-oq-toc-title': {
  en: '📚 In this guide:',
  vn: '📚 Trong hướng dẫn này:',
  zh: '📚 本指南包含：'
},
'blog-oq-toc-1': {
  en: 'What is Hanoi Old Quarter?',
  vn: 'Phố Cổ Hà Nội là gì?',
  zh: '什么是河内老城区？'
},
'blog-oq-toc-2': {
  en: 'Best Streets to Explore',
  vn: 'Những Con Phố Đẹp Nhất Để Khám Phá',
  zh: '最值得逛的街道'
},
'blog-oq-toc-3': {
  en: 'What to Eat in Old Quarter',
  vn: 'Ăn Gì Ở Phố Cổ',
  zh: '老城区吃什么'
},
'blog-oq-toc-4': {
  en: 'Hidden Cafés & Coffee Culture',
  vn: 'Cà Phê Ẩn & Văn Hóa Cà Phê',
  zh: '隐藏咖啡馆与咖啡文化'
},
'blog-oq-toc-5': {
  en: 'Night Market & Shopping',
  vn: 'Chợ Đêm & Mua Sắm',
  zh: '夜市与购物'
},
'blog-oq-toc-6': {
  en: 'Common Tourist Mistakes',
  vn: 'Những Lỗi Du Khách Thường Mắc',
  zh: '游客常见错误'
},
'blog-oq-toc-7': {
  en: 'Should You Stay Here?',
  vn: 'Có Nên Ở Đây?',
  zh: '应该住在这里吗？'
},
'blog-oq-toc-8': {
  en: 'FAQs',
  vn: 'Câu Hỏi Thường Gặp',
  zh: '常见问题'
},

// Introduction paragraphs
'blog-oq-p1': {
  en: 'If this is your first time in Hanoi, chances are you will spend time in the Old Quarter.',
  vn: 'Nếu đây là lần đầu bạn đến Hà Nội, rất có thể bạn sẽ dành thời gian ở Phố Cổ.',
  zh: '如果这是你第一次来河内，你很可能会在老城区度过不少时间。'
},
'blog-oq-p2': {
  en: 'And honestly, you probably should.',
  vn: 'Và thật lòng mà nói, điều đó hoàn toàn hợp lý.',
  zh: '老实说，你应该这样做。'
},
'blog-oq-p3': {
  en: 'The Hanoi Old Quarter is chaotic, noisy, crowded, fascinating, exhausting, beautiful and somehow unforgettable all at once. One minute you are squeezing past scooters on a narrow street. The next, you are drinking egg coffee from a tiny balcony overlooking old rooftops while life rushes below.',
  vn: 'Phố Cổ Hà Nội hỗn độn, ồn ào, đông đúc, hấp dẫn, mệt mỏi, đẹp và khó quên cùng một lúc. Một phút bạn đang len lỏi qua những chiếc xe máy trên phố nhỏ. Phút tiếp theo, bạn đang uống cà phê trứng từ ban công nhỏ nhìn ra mái nhà cũ trong khi cuộc sống vội vã bên dưới.',
  zh: '河内老城区混乱、嘈杂、拥挤、迷人、累人、美丽，同时又令人难以忘怀。前一分钟你还在狭窄的街道上穿梭于摩托车之间，下一分钟你就在小阳台上喝着蛋咖啡，俯瞰旧屋顶，而生活就在下面匆忙流逝。'
},
'blog-oq-p4': {
  en: 'This is the part of Hanoi most travelers imagine before they arrive. Lanterns hanging over narrow alleys. Plastic stools on sidewalks. Bowls of steaming phở at sunrise. Tiny temples tucked between cafés and souvenir shops.',
  vn: 'Đây là hình ảnh Hà Nội mà nhiều du khách tưởng tượng trước khi đến. Đèn lồng treo trên ngõ nhỏ. Ghế nhựa trên vỉa hè. Những tô phở nóng hổi lúc bình minh. Ngôi đền nhỏ nép mình giữa quán cà phê và cửa hàng lưu niệm.',
  zh: '这是大多数旅行者在抵达前想象中的河内。窄巷里挂着的灯笼。人行道上的塑料凳子。日出时热气腾腾的河粉。藏身于咖啡馆和纪念品商店之间的小寺庙。'
},
'blog-oq-p5': {
  en: 'But there is also something many travel guides miss.',
  vn: 'Nhưng cũng có điều mà nhiều cẩm nang du lịch bỏ qua.',
  zh: '但也有很多旅行指南忽略的东西。'
},
'blog-oq-p6': {
  en: 'The Old Quarter is not a theme park built for tourists. It is a real neighborhood where people live, work, cook, sleep, argue, drink coffee, run businesses, and somehow survive traffic that feels impossible to understand.',
  vn: 'Phố Cổ không phải công viên giải trí dành cho khách du lịch. Đó là một khu phố thực sự, nơi mọi người sống, làm việc, nấu ăn, ngủ, cãi nhau, uống cà phê, kinh doanh và bằng cách nào đó vẫn sống sót trong dòng giao thông khó hiểu.',
  zh: '老城区不是为游客建造的主题公园。它是一个真实的社区，人们在这里生活、工作、做饭、睡觉、争吵、喝咖啡、经营生意，并在难以理解的交通中生存下来。'
},
'blog-oq-p7': {
  en: 'If you visit with patience and curiosity, it becomes one of the most memorable places in Vietnam.',
  vn: 'Nếu bạn đến với sự kiên nhẫn và tò mò, nơi đây sẽ trở thành một trong những điểm đáng nhớ nhất Việt Nam.',
  zh: '如果你带着耐心和好奇心前来，它会成为越南最令人难忘的地方之一。'
},

// Section 1: What is Hanoi Old Quarter?
'blog-oq-h2-1': {
  en: 'What is Hanoi Old Quarter?',
  vn: 'Phố Cổ Hà Nội là gì?',
  zh: '什么是河内老城区？'
},
'blog-oq-p8': {
  en: 'The Hanoi Old Quarter is the historic heart of the city, located just north of Hoàn Kiếm Lake.',
  vn: 'Phố Cổ Hà Nội là trung tâm lịch sử của thành phố, nằm ngay phía bắc Hồ Hoàn Kiếm.',
  zh: '河内老城区是这座城市的历史中心，位于还剑湖以北。'
},
'blog-oq-p9': {
  en: 'It is famous for its "36 streets," many of which were traditionally named after the products sold there hundreds of years ago. You will still notice traces of this history today.',
  vn: 'Nơi đây nổi tiếng với "36 phố phường", nhiều con phố được đặt tên theo mặt hàng buôn bán từ hàng trăm năm trước. Bạn vẫn có thể thấy dấu tích của lịch sử này ngày nay.',
  zh: '它以"36条古街"而闻名，其中许多街道的名字来源于数百年前这里出售的商品。你至今仍能看到这段历史的痕迹。'
},
'blog-oq-li1': {
  en: 'Hàng Bạc was known for silver workshops',
  vn: 'Hàng Bạc nổi tiếng với nghề bạc',
  zh: '银街（Hàng Bạc）以银器工艺闻名'
},
'blog-oq-li2': {
  en: 'Hàng Gai became associated with silk and textiles',
  vn: 'Hàng Gai nổi tiếng với lụa và thủ công mỹ nghệ',
  zh: '丝绸街（Hàng Gai）以丝绸和纺织品闻名'
},
'blog-oq-li3': {
  en: 'Hàng Mã is famous for colorful decorations, lanterns, festival items and seasonal displays',
  vn: 'Hàng Mã nổi tiếng với đồ trang trí, đèn lồng, đồ lễ và đồ theo mùa đầy màu sắc',
  zh: '纸扎街（Hàng Mã）以彩色装饰品、灯笼、节日用品和季节性展示闻名'
},
'blog-oq-p10': {
  en: 'Today, cafés sit next to repair shops. Boutique hotels stand beside family homes. Street food vendors compete for space with scooters, tourists, flower sellers and delivery drivers. And somehow, it all works.',
  vn: 'Ngày nay, quán cà phê nằm cạnh tiệm sửa chữa. Khách sạn boutique đứng cạnh nhà dân. Người bán hàng rong cạnh tranh không gian với xe máy, khách du lịch, người bán hoa và tài xế giao hàng. Và bằng cách nào đó, mọi thứ vẫn vận hành.',
  zh: '如今，咖啡馆旁边是修理店。精品酒店紧邻民居。街头小吃摊与摩托车、游客、卖花人和快递员争夺空间。但不知何故，一切都在运转。'
},
'blog-oq-p11': {
  en: 'The Old Quarter is not polished or perfect. That is exactly why people fall in love with it.',
  vn: 'Phố Cổ không hào nhoáng hay hoàn hảo. Đó chính là lý do khiến người ta yêu nơi này.',
  zh: '老城区并不精致，也不完美。这正是人们爱上它的原因。'
},

// Section 2: Best Streets to Explore
'blog-oq-h2-2': {
  en: 'Best Streets to Explore in Hanoi Old Quarter',
  vn: 'Những Con Phố Đẹp Nhất Để Khám Phá Ở Phố Cổ Hà Nội',
  zh: '河内老城区最值得逛的街道'
},
'blog-oq-p12': {
  en: 'One mistake many visitors make is treating the Old Quarter like one giant area where every street feels the same. It doesn\'t. Different streets have completely different energy.',
  vn: 'Một sai lầm nhiều du khách mắc phải là coi Phố Cổ như một khu vực khổng lồ mà mọi con phố đều giống nhau. Thực tế không phải vậy. Mỗi con phố có một năng lượng hoàn toàn khác nhau.',
  zh: '许多游客犯的一个错误是把老城区当作一个每条街道都一样的大区域。事实并非如此。不同的街道有着完全不同的能量。'
},
'blog-oq-h3-1': {
  en: 'Hàng Mã Street: Colorful Hanoi',
  vn: 'Phố Hàng Mã: Hà Nội Nhiều Màu Sắc',
  zh: '纸扎街（Hàng Mã）：色彩缤纷的河内'
},
'blog-oq-p13': {
  en: 'If you visit Hanoi around Lunar New Year, Mid Autumn Festival or Christmas, this street becomes incredibly photogenic. You will find lanterns, red decorations, paper crafts, masks, lights and seasonal displays everywhere. Even when no festival is happening, it is one of the most visually interesting streets to wander through.',
  vn: 'Nếu bạn đến Hà Nội vào dịp Tết Nguyên Đán, Tết Trung Thu hoặc Giáng Sinh, con phố này trở nên cực kỳ đẹp để chụp ảnh. Bạn sẽ thấy đèn lồng, đồ trang trí đỏ, đồ thủ công bằng giấy, mặt nạ, đèn và đồ trang trí theo mùa ở khắp mọi nơi. Ngay cả khi không có lễ hội, đây vẫn là một trong những con phố thú vị nhất để dạo bước.',
  zh: '如果你在农历新年、中秋节或圣诞节期间来到河内，这条街会变得非常适合拍照。你会发现灯笼、红色装饰品、纸工艺品、面具、彩灯和季节性展示随处可见。即使没有节日，它也是最值得闲逛的街道之一。'
},
'blog-oq-h3-2': {
  en: 'Tạ Hiện Street: Hanoi Beer Street',
  vn: 'Phố Tạ Hiện: Phố Bia Hà Nội',
  zh: '谢现街（Tạ Hiện）：河内啤酒街'
},
'blog-oq-p14': {
  en: 'You will hear about this street before arriving. Locals call it Tạ Hiện, but many travelers know it as Beer Street Hanoi. At night, tiny plastic stools fill the sidewalks and people gather for cheap beer, grilled snacks and people watching. It is loud — very loud. If you enjoy nightlife and energy, visit at least once.',
  vn: 'Bạn sẽ nghe về con phố này trước khi đến. Người dân địa phương gọi là Tạ Hiện, nhưng nhiều du khách biết đến nó với cái tên Phố Bia Hà Nội. Vào ban đêm, những chiếc ghế nhựa nhỏ phủ kín vỉa hè và mọi người tụ tập để uống bia giá rẻ, đồ nướng và ngắm người qua lại. Nơi đây rất ồn ào. Nếu bạn thích cuộc sống về đêm và năng lượng, hãy ghé ít nhất một lần.',
  zh: '你会在到达之前就听说这条街。当地人叫它谢现街，但许多旅行者称之为河内啤酒街。到了晚上，小塑料凳摆满人行道，人们聚在一起喝便宜啤酒、吃烤串、看人来人往。这里很吵——非常吵。如果你喜欢夜生活和热闹的氛围，至少去一次吧。'
},
'blog-oq-h3-3': {
  en: 'Hàng Gai Street: Shopping & Silk',
  vn: 'Phố Hàng Gai: Mua Sắm & Lụa',
  zh: '丝绸街（Hàng Gai）：购物与丝绸'
},
'blog-oq-p15': {
  en: 'If you want shopping, start here. Hàng Gai is one of the better streets for silk products, handmade goods, small boutiques, gifts and souvenirs. Some shops are touristy. Some are genuinely high quality. Take your time instead of buying from the first place you see.',
  vn: 'Nếu muốn mua sắm, hãy bắt đầu từ đây. Hàng Gai là một trong những con phố tốt hơn cho các sản phẩm lụa, hàng thủ công, cửa hàng nhỏ, quà tặng và đồ lưu niệm. Một số cửa hàng mang tính du lịch. Một số thực sự có chất lượng cao. Hãy dành thời gian thay vì mua từ nơi đầu tiên bạn nhìn thấy.',
  zh: '如果你想购物，从这里开始。丝绸街是购买丝绸制品、手工艺品、小精品店、礼品和纪念品的最佳街道之一。有些商店很商业化，有些则品质很高。慢慢逛，不要在你看到的第一家店就买。'
},

// Section 3: What to Eat
'blog-oq-h2-3': {
  en: 'What to Eat in Hanoi Old Quarter',
  vn: 'Ăn Gì Ở Phố Cổ Hà Nội',
  zh: '河内老城区吃什么'
},
'blog-oq-p16': {
  en: 'You could spend an entire week eating in Hanoi and still leave feeling like you missed half the city. Food is one of the biggest reasons travelers love Hanoi.',
  vn: 'Bạn có thể dành cả tuần để ăn uống ở Hà Nội và vẫn ra về với cảm giác như mình đã bỏ lỡ một nửa thành phố. Ẩm thực là một trong những lý do lớn nhất khiến du khách yêu Hà Nội.',
  zh: '你可以在河内吃上一整个星期，离开时仍然觉得错过了这座城市的一半。美食是旅行者爱上河内的最大原因之一。'
},
'blog-oq-h3-4': {
  en: 'Start with phở in the morning',
  vn: 'Bắt đầu với phở vào buổi sáng',
  zh: '从一碗河粉开始早晨'
},
'blog-oq-p17': {
  en: 'Phở hits differently in Hanoi. Especially early in the morning when locals are heading to work and giant steaming pots are already busy. Forget fancy interiors. If you see office workers eating there at 7 AM, that is usually a good sign.',
  vn: 'Phở ở Hà Nội có hương vị rất riêng. Đặc biệt là vào sáng sớm khi người dân đi làm và những nồi nước dùng khổng lồ đã sẵn sàng. Hãy quên đi nội thất sang trọng. Nếu bạn thấy dân văn phòng ăn ở đó lúc 7 giờ sáng, đó thường là dấu hiệu tốt.',
  zh: '河粉在河内有着不同的味道。尤其是在清晨，当当地人准备上班时，巨大的汤锅已经开始沸腾。不要在意装修。如果你看到上班族早上7点在那里吃河粉，这通常是个好信号。'
},
'blog-oq-h3-5': {
  en: 'Try bún chả for lunch',
  vn: 'Thử bún chả vào bữa trưa',
  zh: '午餐尝试烤肉米粉'
},
'blog-oq-p18': {
  en: 'If there is one dish visitors consistently remember, it is bún chả. Grilled pork, rice noodles, herbs, and dipping sauce. Simple and incredibly satisfying.',
  vn: 'Nếu có một món ăn mà du khách luôn nhớ, đó là bún chả. Thịt nướng, bún, rau thơm và nước chấm. Đơn giản và vô cùng hài lòng.',
  zh: '如果有一道菜让游客念念不忘，那就是烤肉米粉。烤猪肉、米粉、香草和蘸酱。简单却无比满足。'
},
'blog-oq-h3-6': {
  en: 'Drink egg coffee at least once',
  vn: 'Uống cà phê trứng ít nhất một lần',
  zh: '至少喝一次蛋咖啡'
},
'blog-oq-p19': {
  en: 'Yes, it sounds strange. Coffee with egg? But Hanoi egg coffee is creamy, rich and surprisingly comforting. The best experience is usually not in the biggest café but somewhere hidden upstairs with old walls and tiny balconies overlooking the street.',
  vn: 'Nghe có vẻ lạ. Cà phê với trứng? Nhưng cà phê trứng Hà Nội thì béo ngậy, đậm đà và dễ chịu một cách đáng ngạc nhiên. Trải nghiệm tốt nhất thường không phải ở quán cà phê lớn nhất mà ở đâu đó ẩn trên tầng cao với những bức tường cũ và ban công nhỏ nhìn ra phố.',
  zh: '是的，这听起来很奇怪。咖啡加鸡蛋？但河内蛋咖啡奶香浓郁、口感丰富，意外地让人感到舒适。最好的体验通常不在最大的咖啡馆，而是在某个隐藏的楼上，有旧墙壁和小阳台，可以俯瞰街道。'
},

// Section 4: Hidden Cafés
'blog-oq-h2-4': {
  en: 'Hidden Cafés: One of Hanoi\'s Best Experiences',
  vn: 'Cà Phê Ẩn: Một Trong Những Trải Nghiệm Tốt Nhất Của Hà Nội',
  zh: '隐藏咖啡馆：河内最好的体验之一'
},
'blog-oq-p20': {
  en: 'A lot of travelers search for "best cafés in Hanoi." But part of Hanoi café culture is not knowing exactly where you are going. Some of the best places are hidden upstairs behind tiny entrances that look easy to miss. You might walk into what seems like an old corridor and suddenly find a quiet café overlooking the street. Slow down here. Sit longer than planned. Hanoi reveals itself slowly.',
  vn: 'Rất nhiều du khách tìm kiếm "quán cà phê ngon nhất Hà Nội." Nhưng một phần của văn hóa cà phê Hà Nội là không biết chính xác bạn sẽ đến đâu. Một số địa điểm tốt nhất được ẩn trên tầng cao phía sau những lối vào nhỏ dễ bỏ lỡ. Bạn có thể bước vào một hành lang cũ kỹ và bất ngờ tìm thấy một quán cà phê yên tĩnh nhìn ra phố. Hãy chậm lại. Ngồi lâu hơn dự định. Hà Nội hé lộ mình từ từ.',
  zh: '许多旅行者会搜索"河内最好的咖啡馆"。但河内咖啡文化的一部分恰恰是不知道你要去哪里。一些最好的地方藏在楼上的小入口后面，很容易错过。你可能走进一个看起来像旧走廊的地方，然后突然发现一个可以俯瞰街道的安静咖啡馆。在这里放慢脚步。坐得比计划久一点。河内会慢慢展现自己。'
},

// Section 5: Night Market
'blog-oq-h2-5': {
  en: 'Night Market & Shopping',
  vn: 'Chợ Đêm & Mua Sắm',
  zh: '夜市与购物'
},
'blog-oq-p21': {
  en: 'If you are in Hanoi on a weekend, you will likely hear about the night market. The atmosphere is lively. You will see souvenirs, clothes, accessories, street snacks, and sometimes street performances. But here is an honest take: the night market is more interesting for the experience of walking through than for serious shopping. Many items look similar between stalls. If you see something you love, try light negotiation with a smile.',
  vn: 'Nếu bạn ở Hà Nội vào cuối tuần, bạn có thể sẽ nghe về chợ đêm. Không khí rất nhộn nhịp. Bạn sẽ thấy đồ lưu niệm, quần áo, phụ kiện, đồ ăn vặt và đôi khi là biểu diễn đường phố. Nhưng nói thật: chợ đêm thú vị hơn vì trải nghiệm đi dạo hơn là mua sắm nghiêm túc. Nhiều món hàng trông giống nhau giữa các quầy. Nếu bạn thấy món gì mình thích, hãy thử trả giá nhẹ nhàng với nụ cười.',
  zh: '如果你周末在河内，你很可能会听说夜市。气氛很热闹。你会看到纪念品、衣服、配饰、街头小吃，有时还有街头表演。但说实话：夜市的有趣之处在于逛的过程，而不是为了真正购物。许多摊位上的商品看起来很相似。如果你看到喜欢的东西，试着微笑着轻轻砍价。'
},

// Section 6: Common Tourist Mistakes
'blog-oq-h2-6': {
  en: 'Common Tourist Mistakes in Hanoi Old Quarter',
  vn: 'Những Lỗi Du Khách Thường Mắc Ở Phố Cổ Hà Nội',
  zh: '河内老城区游客常见错误'
},
'blog-oq-h3-7': {
  en: 'Trying to do everything in one day',
  vn: 'Cố gắng làm mọi thứ trong một ngày',
  zh: '试图在一天内做完所有事情'
},
'blog-oq-p22': {
  en: 'Slow down. Hanoi rewards wandering. You do not need to optimize every hour.',
  vn: 'Hãy chậm lại. Hà Nội sẽ thưởng cho những bước đi lang thang. Bạn không cần phải tối ưu hóa từng giờ.',
  zh: '慢下来。河内会奖励那些随意漫步的人。你不需要优化每一个小时。'
},
'blog-oq-h3-8': {
  en: 'Staying only around Beer Street',
  vn: 'Chỉ ở quanh Phố Bia',
  zh: '只待在啤酒街附近'
},
'blog-oq-p23': {
  en: 'This gives a very incomplete picture of Hanoi. Walk further. The quieter streets often feel more memorable.',
  vn: 'Điều này cho thấy một bức tranh rất không đầy đủ về Hà Nội. Đi xa hơn. Những con phố yên tĩnh thường đáng nhớ hơn.',
  zh: '这让你对河内的印象非常不完整。走远一点。安静的街道往往更令人难忘。'
},
'blog-oq-h3-9': {
  en: 'Ignoring simple looking restaurants',
  vn: 'Bỏ qua những nhà hàng trông đơn giản',
  zh: '忽略看起来简单的餐厅'
},
'blog-oq-p24': {
  en: 'Some of Hanoi\'s best food looks unimpressive from the outside. Plastic stools and crowded tables often mean good food.',
  vn: 'Một số món ăn ngon nhất Hà Nội trông không ấn tượng từ bên ngoài. Ghế nhựa và bàn đông đúc thường có nghĩa là đồ ăn ngon.',
  zh: '河内一些最好的食物从外面看起来并不起眼。塑料凳子和拥挤的餐桌通常意味着食物好吃。'
},
'blog-oq-h3-10': {
  en: 'Booking accommodation in the loudest streets',
  vn: 'Đặt chỗ ở trên những con phố ồn ào nhất',
  zh: '在最吵闹的街道预订住宿'
},
'blog-oq-p25': {
  en: 'Many visitors underestimate how noisy parts of the Old Quarter can be. Scooters, bars, music and nightlife often continue late into the night. If sleep matters, staying slightly outside the busiest core can be a smarter choice.',
  vn: 'Nhiều du khách đánh giá thấp mức độ ồn ào của một số khu vực trong Phố Cổ. Xe máy, quán bar, âm nhạc và cuộc sống về đêm thường kéo dài đến tận khuya. Nếu giấc ngủ quan trọng, ở hơi xa khu vực đông đúc nhất có thể là lựa chọn thông minh hơn.',
  zh: '许多游客低估了老城区某些地方的噪音程度。摩托车、酒吧、音乐和夜生活常常持续到深夜。如果睡眠对你很重要，住在稍微远离最繁忙中心区域可能是更明智的选择。'
},

// Section 7: Should You Stay Here?
'blog-oq-h2-7': {
  en: 'Should You Stay in Hanoi Old Quarter?',
  vn: 'Có Nên Ở Phố Cổ Hà Nội?',
  zh: '应该住在河内老城区吗？'
},
'blog-oq-p26': {
  en: 'This depends on your travel style.',
  vn: 'Điều này phụ thuộc vào phong cách du lịch của bạn.',
  zh: '这取决于你的旅行风格。'
},
'blog-oq-info-1': {
  en: 'Stay inside the Old Quarter if you:  want nightlife and constant activity, prefer walking everywhere, enjoy energy and noise, want maximum convenience.',
  vn: 'Ở trong Phố Cổ nếu bạn:  muốn cuộc sống về đêm và hoạt động liên tục, thích đi bộ khắp nơi, thích năng lượng và sự ồn ào, muốn sự tiện lợi tối đa.',
  zh: '如果你符合以下情况，请住在老城区内： 想要夜生活和持续的活动，喜欢步行到处走走，享受活力和喧嚣，想要最大的便利。'
},
'blog-oq-info-2': {
  en: 'Stay just outside if you:  want better sleep, enjoy quieter cafés and local neighborhoods, still want easy access to the Old Quarter.',
  vn: 'Ở bên ngoài một chút nếu bạn:  muốn ngủ ngon hơn, thích quán cà phê yên tĩnh và khu phố địa phương, vẫn muốn dễ dàng tiếp cận Phố Cổ.',
  zh: '如果你符合以下情况，请住在稍微外面一点： 想要更好的睡眠，喜欢安静的咖啡馆和本地社区，仍然希望方便前往老城区。'
},
'blog-oq-p27': {
  en: 'Many travelers enjoy staying near Văn Miếu or quieter local areas while visiting the Old Quarter daily. You still reach everything easily, but return to calmer streets at night.',
  vn: 'Nhiều du khách thích ở gần Văn Miếu hoặc các khu vực địa phương yên tĩnh hơn trong khi vẫn ghé thăm Phố Cổ hàng ngày. Bạn vẫn có thể dễ dàng đến mọi nơi, nhưng trở về những con phố yên tĩnh hơn vào ban đêm.',
  zh: '许多旅行者喜欢住在文庙附近或更安静的本地社区，同时每天游览老城区。你仍然可以轻松到达任何地方，但晚上可以回到更安静的街道。'
},

// Section 8: FAQs
'blog-oq-h2-8': {
  en: 'Frequently Asked Questions',
  vn: 'Câu Hỏi Thường Gặp',
  zh: '常见问题'
},
'blog-oq-faq1': {
  en: 'Is Hanoi Old Quarter safe?',
  vn: 'Phố Cổ Hà Nội có an toàn không?',
  zh: '河内老城区安全吗？'
},
'blog-oq-faq1a': {
  en: 'Yes, it is generally safe for tourists. Like any busy city area, be mindful of your belongings and watch for traffic when crossing streets.',
  vn: 'Có, nhìn chung an toàn cho du khách. Giống như bất kỳ khu vực thành phố đông đúc nào, hãy chú ý đến đồ đạc của bạn và quan sát giao thông khi qua đường.',
  zh: '是的，对游客来说总体上是安全的。和任何繁忙的城市区域一样，注意保管好你的财物，过马路时注意交通。'
},
'blog-oq-faq2': {
  en: 'How many days do I need in the Old Quarter?',
  vn: 'Cần bao nhiêu ngày để khám phá Phố Cổ?',
  zh: '在老城区需要多少天？'
},
'blog-oq-faq2a': {
  en: '2 to 4 days is comfortable for most first-time visitors. If you are short on time, plan at least two full days to explore without rushing.',
  vn: '2 đến 4 ngày là thoải mái cho hầu hết du khách lần đầu. Nếu bạn có ít thời gian, hãy dành ít nhất hai ngày trọn vẹn để khám phá mà không bị vội vàng.',
  zh: '对于大多数初次来访的游客来说，2到4天是比较舒适的。如果时间紧张，至少安排两个完整的日子，可以不紧不慢地探索。'
},
'blog-oq-faq3': {
  en: 'Is the Old Quarter suitable for families?',
  vn: 'Phố Cổ có phù hợp cho gia đình không?',
  zh: '老城区适合家庭游客吗？'
},
'blog-oq-faq3a': {
  en: 'Yes, but choose accommodation slightly away from the busiest nightlife areas. Hoàn Kiếm Lake and the weekend walking street are great for families.',
  vn: 'Có, nhưng hãy chọn chỗ ở hơi xa khu vực sầm uất về đêm. Hồ Hoàn Kiếm và phố đi bộ cuối tuần rất tuyệt cho gia đình.',
  zh: '是的，但要选择稍微远离最繁忙夜生活区的住宿。还剑湖和周末步行街非常适合家庭游玩。'
},
'blog-oq-faq4': {
  en: 'What is the best time to visit the Old Quarter?',
  vn: 'Thời điểm nào tốt nhất để tham quan Phố Cổ?',
  zh: '什么时间最适合游览老城区？'
},
'blog-oq-faq4a': {
  en: 'Early morning (6-8 AM) offers the most authentic local atmosphere. Evening is lively with night markets and street food.',
  vn: 'Sáng sớm (6-8 giờ sáng) mang đến bầu không khí địa phương chân thực nhất. Buổi tối sôi động với chợ đêm và đồ ăn đường phố.',
  zh: '清晨（早上6-8点）提供最真实的本地氛围。晚上有热闹的夜市和街头小吃。'
},

// Section 9: Final Thoughts
'blog-oq-h2-9': {
  en: 'Final Thoughts',
  vn: 'Lời Kết',
  zh: '最后的话'
},
'blog-oq-p28': {
  en: 'Hanoi Old Quarter is messy. Beautiful. Frustrating. Charming. Loud. Unexpected. And strangely addictive.',
  vn: 'Phố Cổ Hà Nội hỗn độn. Đẹp. Bực mình. Duyên dáng. Ồn ào. Bất ngờ. Và gây nghiện một cách kỳ lạ.',
  zh: '河内老城区是混乱的、美丽的、令人沮丧的、迷人的、吵闹的、意想不到的，而且莫名地让人上瘾。'
},
'blog-oq-p29': {
  en: 'You will probably get lost. You may cross roads wondering how scooters somehow avoid crashing into you. You will almost certainly drink too much coffee.',
  vn: 'Bạn có thể sẽ bị lạc. Bạn có thể băng qua đường và tự hỏi làm thế nào xe máy tránh được bạn. Bạn gần như chắc chắn sẽ uống quá nhiều cà phê.',
  zh: '你可能会迷路。你可能过马路时会想摩托车是怎么设法不撞到你的。你几乎肯定会喝太多咖啡。'
},
'blog-oq-p30': {
  en: 'But if you slow down, look up at old balconies, sit in tiny cafés, and stop trying to rush through the city, Hanoi begins to make sense.',
  vn: 'Nhưng nếu bạn chậm lại, ngước nhìn những ban công cũ, ngồi trong những quán cà phê nhỏ và ngừng cố gắng đi vội vàng qua thành phố, Hà Nội bắt đầu trở nên có ý nghĩa.',
  zh: '但如果你放慢脚步，抬头看看古老的阳台，坐在小咖啡馆里，不再试图匆忙穿过这座城市，河内开始变得有意义。'
},
'blog-oq-p31': {
  en: 'Not completely. Just enough to make you want to come back.',
  vn: 'Không hoàn toàn. Chỉ đủ để khiến bạn muốn quay lại.',
  zh: '不是完全理解。只是足以让你想回来。'
},

// CTA Section
'blog-oq-cta-title': {
  en: '✨ Planning your trip to Hanoi?',
  vn: '✨ Đang lên kế hoạch cho chuyến đi Hà Nội?',
  zh: '✨ 正在计划你的河内之旅？'
},
'blog-oq-cta-text': {
  en: 'Book your stay directly with MiaCasa for the best rates — no platform fees, instant confirmation.',
  vn: 'Đặt phòng trực tiếp với MiaCasa để có giá tốt nhất — không phí nền tảng, xác nhận ngay lập tức.',
  zh: '直接通过MiaCasa预订您的住宿，享受最优价格 — 无平台费用，即时确认。'
},
'blog-oq-cta-btn1': {
  en: 'Check Availability →',
  vn: 'Kiểm tra lịch trống →',
  zh: '查看空房情况 →'
},
'blog-oq-cta-btn2': {
  en: 'Explore Old Quarter Stay →',
  vn: 'Khám phá chỗ ở Phố Cổ →',
  zh: '探索老城区住宿 →'
},

// Related Posts
'blog-oq-back': {
  en: '← Back to all blog posts',
  vn: '← Quay lại tất cả bài viết',
  zh: '← 返回所有博客文章'
},
'blog-oq-related-1': {
  en: 'Best Cafés in Hanoi',
  vn: 'Quán Cà Phê Đẹp Nhất Hà Nội',
  zh: '河内最佳咖啡馆'
},
'blog-oq-related-1-text': {
  en: 'For coffee, work & quiet mornings',
  vn: 'Cho cà phê, làm việc & buổi sáng yên tĩnh',
  zh: '适合咖啡、工作和安静早晨'
},
'blog-oq-related-2': {
  en: '3 Days in Hanoi Itinerary',
  vn: 'Lịch Trình 3 Ngày Ở Hà Nội',
  zh: '河内3日行程'
},
'blog-oq-related-2-text': {
  en: 'Complete travel guide',
  vn: 'Hướng dẫn du lịch đầy đủ',
  zh: '完整旅行指南'
},
'blog-oq-related-3': {
  en: 'Train Street Guide',
  vn: 'Hướng Dẫn Train Street',
  zh: '火车街指南'
},
'blog-oq-related-3-text': {
  en: 'Times, safety & how to visit',
  vn: 'Giờ tàu, an toàn & cách tham quan',
  zh: '时间、安全与参观方式'
},
// CTA Section (add these - they are MISSING)
'blog-oq-cta-title': {
  en: '✨ Planning your trip to Hanoi?',
  vn: '✨ Đang lên kế hoạch cho chuyến đi Hà Nội?',
  zh: '✨ 正在计划你的河内之旅？'
},
'blog-oq-cta-text': {
  en: 'Book your stay directly with MiaCasa for the best rates — no platform fees, instant confirmation.',
  vn: 'Đặt phòng trực tiếp với MiaCasa để có giá tốt nhất — không phí nền tảng, xác nhận ngay lập tức.',
  zh: '直接通过MiaCasa预订您的住宿，享受最优价格 — 无平台费用，即时确认。'
},
'blog-oq-cta-btn1': {
  en: 'Check Availability →',
  vn: 'Kiểm tra lịch trống →',
  zh: '查看空房情况 →'
},
'blog-oq-cta-btn2': {
  en: 'Explore Old Quarter Stay →',
  vn: 'Khám phá chỗ ở Phố Cổ →',
  zh: '探索老城区住宿 →'
},

// Related Posts (add these - they are MISSING)
'blog-oq-back': {
  en: '← Back to all blog posts',
  vn: '← Quay lại tất cả bài viết',
  zh: '← 返回所有博客文章'
},
'blog-oq-related-1': {
  en: 'Best Cafés in Hanoi',
  vn: 'Quán Cà Phê Đẹp Nhất Hà Nội',
  zh: '河内最佳咖啡馆'
},
'blog-oq-related-1-text': {
  en: 'For coffee, work & quiet mornings',
  vn: 'Cho cà phê, làm việc & buổi sáng yên tĩnh',
  zh: '适合咖啡、工作和安静早晨'
},
'blog-oq-related-2': {
  en: '3 Days in Hanoi Itinerary',
  vn: 'Lịch Trình 3 Ngày Ở Hà Nội',
  zh: '河内3日行程'
},
'blog-oq-related-2-text': {
  en: 'Complete travel guide',
  vn: 'Hướng dẫn du lịch đầy đủ',
  zh: '完整旅行指南'
},
'blog-oq-related-3': {
  en: 'Train Street Guide',
  vn: 'Hướng Dẫn Train Street',
  zh: '火车街指南'
},
'blog-oq-related-3-text': {
  en: 'Times, safety & how to visit',
  vn: 'Giờ tàu, an toàn & cách tham quan',
  zh: '时间、安全与参观方式'
}

};

window.TRANSLATIONS = TRANSLATIONS;
function getMiaTranslation(key, lang) {
  var entry = TRANSLATIONS[key];
  var activeLang = lang || currentLang || 'en';
  return entry && entry[activeLang] !== undefined ? entry[activeLang] : '';
}
function buildMiaTranslations(keyMap) {
  var out = { en: {}, vn: {} };
  Object.keys(keyMap).forEach(function(alias) {
    var key = keyMap[alias];
    var entry = TRANSLATIONS[key];
    if (entry) {
      out.en[alias] = entry.en;
      out.vn[alias] = entry.vn;
    }
  });
  return out;
}
window.getMiaTranslation = getMiaTranslation;
window.buildMiaTranslations = buildMiaTranslations;

/* ── Engine ────────────────────────────────────────────────────────────────── */
var currentLang = (function(){
  try{ return localStorage.getItem('mia_lang')||'en'; }catch(e){ return 'en'; }
})();

function setLang(lang){
    currentLang = lang;
    window.currentLang = lang;  // Make sure window.currentLang is also set
    
    // Save to localStorage
    try{ 
        localStorage.setItem('mia_lang', lang); 
    } catch(e){}
    
    // Update active button styles
    var en = document.getElementById('lang-en');
    var vn = document.getElementById('lang-vn');
    var zh = document.getElementById('lang-zh');
    if(en) en.classList.toggle('active', lang === 'en');
    if(vn) vn.classList.toggle('active', lang === 'vn');
    if(zh) zh.classList.toggle('active', lang === 'zh');
    // Apply translations to the page
    applyTranslations();

    if (typeof window.updateMiaCasaChatbotLanguage === 'function') {
        try { window.updateMiaCasaChatbotLanguage(lang); } catch(e) {}
    }
  
  // Re-render dynamic sections - ONLY if the grid exists on this page
  /* if (typeof renderProperties === 'function' && document.getElementById('properties-grid')) {
    renderProperties();  // Remove the false parameter
  } */
  if (typeof renderAmenities === 'function') renderAmenities();
  if (typeof renderBookingSelector === 'function' && document.getElementById('booking-prop-sel')) {
    renderBookingSelector();
  }
  if (typeof activeProp !== 'undefined' && typeof selectProp === 'function' && document.getElementById('properties-grid')) {
    try { selectProp(activeProp); } catch(e) {}
}
  
  // Force body class or attribute to help with any CSS-based language rules
  document.documentElement.setAttribute('data-lang', lang);
}

function applyTranslations(){
    var lang = currentLang;
    
    // data-t → textContent
    document.querySelectorAll('[data-t]').forEach(function(el){
        var e = TRANSLATIONS[el.getAttribute('data-t')];
        if(e && e[lang]!==undefined) el.textContent = e[lang];
    });
    
    // data-th → innerHTML
    document.querySelectorAll('[data-th]').forEach(function(el){
        var e = TRANSLATIONS[el.getAttribute('data-th')];
        if(e && e[lang]!==undefined) el.innerHTML = e[lang];
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-t-placeholder]').forEach(function(el){
        var key = el.getAttribute('data-t-placeholder');
        var e = TRANSLATIONS[key];
        if(e && e[lang]!==undefined) el.placeholder = e[lang];
    });
    
    // Translate attributes
    document.querySelectorAll('[data-t-alt]').forEach(function(el){
        var e = TRANSLATIONS[el.getAttribute('data-t-alt')];
        if(e && e[lang]!==undefined) el.alt = e[lang];
    });
    document.querySelectorAll('[data-t-title]').forEach(function(el){
        var e = TRANSLATIONS[el.getAttribute('data-t-title')];
        if(e && e[lang]!==undefined) el.title = e[lang];
    });
    document.querySelectorAll('[data-t-aria]').forEach(function(el){
        var e = TRANSLATIONS[el.getAttribute('data-t-aria')];
        if(e && e[lang]!==undefined) el.setAttribute('aria-label', e[lang]);
    });

    // Translate select options
    document.querySelectorAll('select option[data-t]').forEach(function(opt){
        var key = opt.getAttribute('data-t');
        var e = TRANSLATIONS[key];
        if(e && e[lang]!==undefined) opt.textContent = e[lang];
    });
    
    // ADD THIS - Re-render properties when language changes
    if (typeof renderProperties === 'function' && document.getElementById('properties-grid')) {
        try {
            renderProperties();
            console.log('Properties re-rendered after language change');
        } catch(e) {
            console.warn('Failed to re-render properties:', e.message);
        }
    }
    
    // Re-run FAQ toggle display to ensure content is visible after translation
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function(el){
        el.style.maxHeight = el.scrollHeight + 'px';
    });
    
    // page-specific hooks
    _hooks.forEach(function(fn){ 
        try{ 
            fn(lang); 
        } catch(e){ 
            console.warn('hook err:', e.message); 
        } 
    });
}

var _hooks = [];
function registerTranslationHook(fn){ _hooks.push(fn); }

// Register hooks for FAQ and Rules translation
registerTranslationHook(function(lang) {
  // Re-translate FAQ questions and answers
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    var questionSpan = btn.querySelector('span:first-child');
    if (questionSpan && questionSpan.hasAttribute('data-t')) {
      var key = questionSpan.getAttribute('data-t');
      var e = TRANSLATIONS[key];
      if (e && e[lang] !== undefined) {
        var currentText = questionSpan.innerHTML;
        var hasEmoji = currentText.match(/^[❓\s]*/);
        if (hasEmoji && hasEmoji[0]) {
          questionSpan.innerHTML = hasEmoji[0] + ' ' + e[lang];
        } else {
          questionSpan.textContent = e[lang];
        }
      }
    }
  });
  
  // Re-translate FAQ answers
  document.querySelectorAll('.faq-a p').forEach(function(p) {
    if (p.hasAttribute('data-t')) {
      var key = p.getAttribute('data-t');
      var e = TRANSLATIONS[key];
      if (e && e[lang] !== undefined) p.textContent = e[lang];
    }
  });
  
  // Re-translate House Rules
  document.querySelectorAll('.rule-card .rule-title, .rule-card .rule-list li').forEach(function(el) {
    if (el.hasAttribute('data-t')) {
      var key = el.getAttribute('data-t');
      var e = TRANSLATIONS[key];
      if (e && e[lang] !== undefined) {
        if (el.tagName === 'LI') {
          var hasPrefix = el.innerHTML.match(/^[•\-\s]*/);
          if (hasPrefix) {
            el.innerHTML = hasPrefix[0] + ' ' + e[lang];
          } else {
            el.textContent = e[lang];
          }
        } else {
          el.textContent = e[lang];
        }
      }
    }
  });
});

// Register hook for Our Story page
registerTranslationHook(function(lang) {
  var storyElements = [
    'story-hero-title', 'story-hero-subtitle', 'story-tag', 'story-h1', 'story-lead',
    'story-back', 'story-p1', 'story-mobile-line1', 'story-mobile-line2', 'story-mobile-line3',
    'story-mobile-line4', 'story-mobile-line5', 'story-mobile-line6', 'story-mobile-line7',
    'story-mobile-line8', 'story-mobile-line9', 'story-p1-line1', 'story-p1-line2', 'story-p1-line3',
    'story-p1-line4', 'story-quote', 'story-how-title', 'story-how-p1', 'story-how-p2', 'story-how-p3',
    'story-building-title', 'story-building-p1', 'story-building-p1b', 'story-pause-2',
    'story-before-title', 'story-before-desc', 'story-messy-title', 'story-messy-desc',
    'story-furniture-title', 'story-furniture-desc', 'story-after-title', 'story-after-desc',
    'story-pause-1', 'story-different-title', 'story-diff-1-title', 'story-diff-1-desc',
    'story-diff-2-title', 'story-diff-2-desc', 'story-diff-3-title', 'story-diff-3-desc',
    'story-diff-4-title', 'story-diff-4-desc', 'story-why-title', 'story-why-1-title',
    'story-why-1-desc', 'story-why-2-title', 'story-why-2-desc', 'story-why-3-title',
    'story-why-3-desc', 'story-why-4-title', 'story-why-4-desc', 'story-properties-title',
    'story-hanoi-subtitle', 'story-oq-subtitle', 'story-hanoi-bullet-1', 'story-hanoi-bullet-2',
    'story-hanoi-bullet-3', 'story-oq-bullet-1', 'story-oq-bullet-2', 'story-oq-bullet-3',
    'story-hanoi-title', 'story-hanoi-p1', 'story-hanoi-gallery', 'story-oq-title', 'story-oq-p1',
    'story-oq-p2', 'story-oq-p3', 'story-oq-gallery', 'story-hosts-title', 'story-hosts-p1',
    'story-linh-detail', 'story-ngoc-detail', 'story-hosts-p2', 'story-same-title', 'story-same-p1',
    'story-same-1', 'story-same-2', 'story-same-3', 'story-same-p2', 'story-belief',
    'story-growing-title', 'story-growing-p1', 'story-growing-p2', 'story-growing-p3',
    'story-growing-p4', 'story-growing-quote', 'story-closing-emphasis', 'story-closing-sub',
    'story-cta-view-h', 'story-cta-view-oq', 'story-cta-avail', 'story-cta-wa',
    'story-before', 'story-during', 'story-after', 'story-oq-before', 'story-oq-during', 'story-oq-after'
  ];
  
  storyElements.forEach(function(key) {
    var elements = document.querySelectorAll('[data-t="' + key + '"], [data-th="' + key + '"]');
    elements.forEach(function(el) {
      var e = TRANSLATIONS[key];
      if (e && e[lang] !== undefined) {
        if (el.hasAttribute('data-th')) {
          el.innerHTML = e[lang];
        } else {
          el.textContent = e[lang];
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function(){
  // Get saved language or default to 'en'
  var savedLang = 'en';
  try{ 
    savedLang = localStorage.getItem('mia_lang') || 'en'; 
  } catch(e){}
  
  // Set the language (this will update buttons and content)
  setLang(savedLang);
  
  // Double-check button states after a short delay (fixes sync issues)
  setTimeout(function() {
    var en = document.getElementById('lang-en');
    var vn = document.getElementById('lang-vn');
    if(en && vn) {
      en.classList.toggle('active', currentLang === 'en');
      vn.classList.toggle('active', currentLang === 'vn');
    }
  }, 50);
});
