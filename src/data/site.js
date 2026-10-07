// Everything the shop is likely to change lives in src/data. Edit here; the pages update themselves.

export const site = {
  name: 'Royal Collectibles',
  tagline: 'Your Friendly Neighborhood Comic Shop',
  founded: 1992,

  address: {
    street: '96-01 Metropolitan Avenue',
    city: 'Forest Hills',
    state: 'NY',
    zip: '11375',
    corner: 'Corner of Metropolitan Avenue & Selfridge St.',
  },

  phone: { display: '(718) 793-0542', plain: '718-793-0542', tel: '+17187930542', option: '1' },
  email: 'royalcomicsny@gmail.com',

  // Who answers what
  contacts: {
    pullList: { name: 'Diane', email: 'royalcomicsny@gmail.com' },
    grading: { name: 'Mike', email: 'nearmintmike@gmail.com' },
  },

  social: {
    instagram: 'https://www.instagram.com/royal_collectibles',
    instagramHandle: '@royal_collectibles',
    facebook: 'https://www.facebook.com/royalcollectibles',
    // Leave blank to hide the button. Fill these in once the shop confirms the links.
    whatnot: '',
    portal: '',
  },

  links: {
    map: 'https://www.google.com/maps/search/?api=1&query=Royal+Collectibles+96-01+Metropolitan+Ave+Forest+Hills+NY+11375',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Royal+Collectibles+96-01+Metropolitan+Ave+Forest+Hills+NY+11375',
    mapEmbed:
      'https://www.google.com/maps?q=Royal+Collectibles,+96-01+Metropolitan+Ave,+Forest+Hills,+NY+11375&output=embed',
    // The old site linked previewsworld.com/FinalOrdersDue, which now returns 404.
    // Paste a working Final Orders Due list here and the button appears on the New Comics page.
    finalOrders: '',
    cgc: 'https://www.cgccomics.com',
  },

  // Pulled from the shop's public profiles on Oct 6, 2026
  stats: {
    google: { rating: 4.7, reviews: 898 },
    facebook: { recommend: 96, reviews: 474 },
    instagram: { followers: '15.3K', posts: '4,356' },
  },

  sister: {
    name: 'Royal Sports & Entertainment',
    address: '96-11 Metropolitan Avenue',
    phone: { display: '(718) 261-5111', tel: '+17182615111' },
    email: 'royalsportsnyc@gmail.com',
    instagram: 'https://www.instagram.com/royalsportsnyc/',
    facebook: 'https://www.facebook.com/royalsportsnyc/',
  },
}

// 24-hour times, shop-local (New York)
export const hours = [
  { day: 'Monday', short: 'Mon', open: null, close: null },
  { day: 'Tuesday', short: 'Tue', open: null, close: null },
  { day: 'Wednesday', short: 'Wed', open: '10:00', close: '19:00', note: 'New Comic Book Day' },
  { day: 'Thursday', short: 'Thu', open: '12:00', close: '18:00' },
  { day: 'Friday', short: 'Fri', open: '12:00', close: '19:00' },
  { day: 'Saturday', short: 'Sat', open: '12:00', close: '19:00' },
  { day: 'Sunday', short: 'Sun', open: '12:00', close: '18:00' },
]

export const nav = [
  { to: '/new-comics', label: 'New Comics' },
  { to: '/pull-list', label: 'Pull List' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/visit', label: 'Visit' },
]

export const ticker = [
  'New comics every Wednesday',
  'Buy · Sell · Trade',
  'Free pull list: save 10%',
  'Official CGC submission center',
  'Silver Age to modern back issues',
  'Free appraisals',
  'Family owned & operated',
  'Funko · Statues · Toys',
]
