/* ============================================
   TrustHome Ghana — Shared mock data & utilities
   This simulates a backend. In production, replace
   `listings` with a fetch() call to your real API.
   ============================================ */

const LISTINGS = [
  {
    id: "th-001",
    title: "Single Room Self-Contain, Ahodwo",
    type: "Room",
    price: 350,
    period: "month",
    location: "Ahodwo, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80"
    ],
    description: "Newly built self-contain room in a quiet, secure neighborhood close to KNUST campus. The room comes with a private bathroom, kitchenette space, and tiled flooring throughout. Steady water supply and prepaid electricity meter. Landlord lives on the same compound, so the environment is well looked after. Suitable for a working professional or student wanting independence and privacy.",
    amenities: ["Private bathroom", "Prepaid meter", "Tiled floors", "Water storage tank", "Security wall", "Parking space"],
    landlord: { name: "Mr. Kwabena Asante", phone: "233244123456", since: "Listing on TrustHome since 2024", initials: "KA" }
  },
  {
    id: "th-002",
    title: "Shop Space for Rent, Adum Market Road",
    type: "Shop",
    price: 800,
    period: "month",
    location: "Adum, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    description: "Prime commercial shop space located directly on Adum Market Road with heavy daily foot traffic. Roller shutter doors, concrete flooring, and a small storage loft at the back. Ideal for retail, provisions, electronics, or a boutique. Three-phase electricity available on request. Walking distance to trotro and taxi stations.",
    amenities: ["Roller shutters", "Storage loft", "Three-phase power", "High foot traffic", "Near transport station"],
    landlord: { name: "Madam Akosua Frimpong", phone: "233207654321", since: "Listing on TrustHome since 2023", initials: "AF" }
  },
  {
    id: "th-003",
    title: "Hostel Room for Students, KNUST Gate",
    type: "Hostel",
    price: 220,
    period: "semester",
    location: "Ayeduase, Kumasi",
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
    ],
    description: "Affordable shared hostel accommodation just five minutes' walk from KNUST main gate. Bunk beds for two students per room, shared washrooms on each floor, and a common study area. Backup generator for light during outages. Popular with first and second year students looking for budget-friendly housing close to lecture halls.",
    amenities: ["Shared washroom", "Study area", "Backup generator", "Walking distance to campus", "Bunk beds provided"],
    landlord: { name: "Mr. Yaw Boateng", phone: "233244998877", since: "Listing on TrustHome since 2025", initials: "YB" }
  },
  {
    id: "th-004",
    title: "Chamber and Hall, Asokwa",
    type: "Room",
    price: 450,
    period: "month",
    location: "Asokwa, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80"
    ],
    description: "Spacious chamber and hall apartment with separate kitchen and porch area. Located in a residential neighborhood in Asokwa, close to schools, a pharmacy, and a local market. Compound is shared with two other tenants. Landlord requests one year rent advance, negotiable for the right tenant.",
    amenities: ["Separate kitchen", "Porch/veranda", "Shared compound", "Close to market", "Borehole on premises"],
    landlord: { name: "Mr. Kwabena Asante", phone: "233244123456", since: "Listing on TrustHome since 2024", initials: "KA" }
  },
  {
    id: "th-005",
    title: "Provisions Shop, Bantama High Street",
    type: "Shop",
    price: 600,
    period: "month",
    location: "Bantama, Kumasi",
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1582037928769-181cf6ea3470?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80"
    ],
    description: "Mid-size lock-up shop on Bantama High Street, previously used as a provisions and cosmetics store. Fitted with wooden shelving units which can stay or be removed. Good natural lighting and ventilation. Suitable for retail trading, a salon, or a small service business.",
    amenities: ["Wooden shelving", "Good lighting", "Lock-up security", "Near main road"],
    landlord: { name: "Madam Comfort Owusu", phone: "233269112233", since: "Listing on TrustHome since 2025", initials: "CO" }
  },
  {
    id: "th-006",
    title: "Female Hostel, Ayigya",
    type: "Hostel",
    price: 280,
    period: "semester",
    location: "Ayigya, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1551105378-78e609e1d468?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
    ],
    description: "Well-maintained female-only hostel with four students per room, reading desks, and personal lockers. Located in Ayigya, a short trotro ride from KNUST and Tech Junction. CCTV at entrance and a live-in caretaker for added security. Visitors restricted to a designated common area.",
    amenities: ["Personal lockers", "CCTV entrance", "Live-in caretaker", "Reading desks", "Female-only"],
    landlord: { name: "Madam Akosua Frimpong", phone: "233207654321", since: "Listing on TrustHome since 2023", initials: "AF" }
  },
  {
    id: "th-007",
    title: "Self-Contain Room, Santasi",
    type: "Room",
    price: 400,
    period: "month",
    location: "Santasi, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80"
    ],
    description: "Quiet self-contain room located off the main Santasi road, set back from traffic noise. Comes with built-in wardrobe space, ceramic tiling, and a small porch. Landlady is friendly and lives nearby for quick maintenance response. Good for a single tenant or young couple.",
    amenities: ["Built-in wardrobe", "Quiet location", "Tiled interior", "Porch space", "Responsive landlady"],
    landlord: { name: "Madam Comfort Owusu", phone: "233269112233", since: "Listing on TrustHome since 2025", initials: "CO" }
  },
  {
    id: "th-008",
    title: "Boutique Shop, Kejetia Area",
    type: "Shop",
    price: 950,
    period: "month",
    location: "Kejetia, Kumasi",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
    ],
    description: "Well-located shop near the Kejetia interchange, ideal for fashion, electronics, or general retail given the constant pedestrian and vehicle traffic. Fitted with display windows and a mezzanine storage level. Available immediately, with flexible advance payment terms for serious tenants.",
    amenities: ["Display windows", "Mezzanine storage", "Prime location", "Flexible advance terms"],
    landlord: { name: "Mr. Yaw Boateng", phone: "233244998877", since: "Listing on TrustHome since 2025", initials: "YB" }
  }
];

/* ---------- Utilities ---------- */

function formatPrice(amount) {
  return "GH₵" + amount.toLocaleString("en-GH");
}

function getListingById(id) {
  return LISTINGS.find(function (item) { return item.id === id; });
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function buildWhatsAppLink(phone, message) {
  const encoded = encodeURIComponent(message);
  return "https://wa.me/" + phone + "?text=" + encoded;
}

/* SVG icon library (inline strings, reused across pages) */
const ICONS = {
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  filter: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  chevronDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
  badge: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z"/></svg>',
  list: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  plusCircle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  chat: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-1.9 5.4 8.5 8.5 0 01-9.74 2.85L3 21l1.25-6.36A8.5 8.5 0 0112.5 3a8.38 8.38 0 015.4 1.9 8.5 8.5 0 013.1 6.6z"/></svg>',
  user: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  share: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>',
  whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.1-.2-.3 0-.5.1-.7l.4-.6c.1-.2.1-.4 0-.6-.1-.2-.6-1.5-.8-2-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.2 2.4 1 2.4.8 2.9.8.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.1 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4z"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.5 2.9.7a2 2 0 011.7 2z"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  shop: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-5h16l1 5M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M4 9h16M9 21v-5a2 2 0 014 0v5"/></svg>',
  room: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z"/></svg>',
  hostel: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13M3 21h18M7 21v-4h10v4M7 13h2M15 13h2M7 9h2M15 9h2"/></svg>',
  upload: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  emptyHouse: '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z"/><path d="M9.5 14.5l5-5" stroke="currentColor"/></svg>',
  wifi: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a11 11 0 0114 0M8.5 16a6.5 6.5 0 017 0M12 19.5h.01"/></svg>'
};
