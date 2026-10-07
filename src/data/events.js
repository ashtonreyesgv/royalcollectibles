const img = (name) => `/images/events/${name}.webp`

// The book the shop is taking reservations for right now.
// Swap this out (or set to null) when the next big release comes around.
export const featuredRelease = {
  title: 'Absolute Batman #25',
  publisher: 'DC Comics',
  onSale: '2026-10-28',
  blurb: 'A milestone issue with a wall of covers to choose from. Tell us which ones you want and we’ll hold them.',
  image: img('absolute-batman-25'),
  variants: [
    { name: 'Dragotta Gatefold Triptych', price: 5.99 },
    { name: 'Campbell', price: 6.99 },
    { name: 'Capullo', price: 6.99 },
    { name: 'Hitch', price: 6.99 },
    { name: 'Blank Sketch', price: 6.99 },
    { name: 'Dragotta Connecting (Left)', price: 6.99 },
    { name: 'Dragotta Connecting (Middle)', price: 6.99 },
    { name: 'Dragotta Connecting (Right)', price: 6.99 },
    { name: 'Mann & Dragotta Foil', price: 8.99 },
    { name: 'Meyers Glow in the Dark', price: 8.99 },
    { name: 'Larosa 1:25', price: 19.99 },
    { name: 'Dell’Otto Showcase Wraparound Foil', price: 24.99 },
  ],
}

// type: 'signing' | 'sale' | 'community'
// Newest first. Add a new object at the top when a flyer goes out.
export const events = [
  {
    id: 'community-day-2026',
    title: 'Community Day on Metropolitan Ave',
    type: 'community',
    date: null,
    status: 'postponed',
    when: 'New date to be announced',
    summary:
      'Comic book giveaways and a photo op with superhero masks. Postponed from September 27. Watch our Instagram for the new date.',
  },
  {
    id: 'frank-miller-2026',
    title: 'Frank Miller',
    subtitle: 'In-person signing',
    type: 'signing',
    date: '2026-08-19',
    when: 'Wednesday, August 19 · 4–7pm',
    image: img('frank-miller-2026'),
    summary:
      'The author and illustrator of Batman: The Dark Knight Returns, in the shop. Ticketed event, limited to 100 tickets.',
  },
  {
    id: 'creees-lee-2026',
    title: 'Creees Lee',
    subtitle: 'In-store signing',
    type: 'signing',
    date: '2026-05-16',
    when: 'Saturday, May 16 · 2–7pm',
    image: img('creees-lee-2026'),
    summary: 'Cover artist Creees Lee signing in the shop.',
  },
  {
    id: 'fcbd-2026',
    title: 'Free Comic Book Day 2026',
    type: 'sale',
    date: '2026-05-02',
    when: 'Saturday, May 2',
    image: img('fcbd-2026'),
    summary:
      'Five free comics per person, writer Ivan Cohen signing his free LEGO Batman comic from 12 to 2pm, and buy-one-get-one-free on all Golden Books.',
  },
  {
    id: 'claremont-golden-2026',
    title: 'Chris Claremont & Michael Golden',
    subtitle: 'In-store signing',
    type: 'signing',
    date: '2026-04-19',
    when: 'Sunday, April 19 · 2–6pm',
    image: img('claremont-golden-2026'),
    summary: 'Two legends, one table.',
  },
  {
    id: 'superman-day-2026',
    title: 'Superman Day: Supergirl Takeover',
    type: 'sale',
    date: '2026-04-18',
    when: 'Saturday, April 18',
    image: img('superman-day-2026'),
    summary:
      '30% off any Superman or Supergirl comic books, graphic novels and trades, plus free promotional comics while supplies last.',
  },
  {
    id: 'jeff-brennan-2025',
    title: 'Jeff Brennan',
    subtitle: 'Signing & sketching',
    type: 'signing',
    date: '2025-12-07',
    when: 'Sunday, December 7 · 2–6pm',
    image: img('jeff-brennan-2025'),
    summary:
      'Comics artist and animation storyboard artist (Dragon Tales, Courage the Cowardly Dog, Extreme Ghostbusters) back for signing and sketching.',
  },
  {
    id: '12-days-2025',
    title: '12 Days of Christmas Sale',
    type: 'sale',
    date: '2025-12-06',
    when: 'December 6–21',
    image: img('12-days-2025'),
    summary:
      'A different deal every day: 50% off back issues, 35% off trades, hardcovers, omnibuses and manga, 30% off statues and anime figures, and more.',
  },
  {
    id: 'small-business-saturday-2025',
    title: 'Small Business Saturday',
    type: 'sale',
    date: '2025-11-29',
    when: 'Saturday, November 29',
    image: img('small-business-saturday-2025'),
    summary:
      'Storewide sale: 16.21% off everything, a $25 gift card when you spend $250, buy-two-get-one-free Funko Pops and a free mystery comic with any purchase.',
  },
  {
    id: 'lcsd-2025',
    title: 'Local Comic Shop Day + Community Day',
    type: 'community',
    date: '2025-09-27',
    when: 'Saturday, September 27',
    image: img('lcsd-2025'),
    summary:
      'Exclusive Local Comic Shop Day books, tote bags and enamel pins, a draw-your-own-comic giveaway for kids, and events up and down Metropolitan Avenue.',
  },
  {
    id: 'thundercats-2025',
    title: 'ThunderCats Voice Cast',
    subtitle: 'Larry Kenney · Peter Newman · Lynne Lipton',
    type: 'signing',
    date: '2025-07-27',
    when: 'Sunday, July 27 · 1–5pm',
    image: img('thundercats-2025'),
    summary: 'Voice actors from the original ThunderCats series signing in the shop.',
  },
  {
    id: 'lot-con-2025',
    title: 'Royal Lot Con',
    type: 'community',
    date: '2025-07-26',
    when: 'Saturday, July 26 · 12–5pm',
    image: img('lot-con-2025'),
    summary:
      'A mini comic con in the parking lot behind the shop, under the tent: local vendors, comics, graded and rare books.',
  },
  {
    id: 'rubinstein-2025',
    title: 'Josef Rubinstein',
    subtitle: 'In-store signing',
    type: 'signing',
    date: '2025-04-24',
    when: 'Thursday, April 24',
    image: img('rubinstein-2025'),
    summary: 'The legendary inker signing and sketching, with CGC Signature Series options available.',
  },
  {
    id: 'ken-lashley-2024',
    title: 'Ken Lashley',
    subtitle: 'Artist signing',
    type: 'signing',
    date: '2024-07-21',
    when: 'Sunday, July 21 · 1–4pm',
    image: img('ken-lashley-2024'),
    summary: 'Ken Lashley signing, with his Ahsoka #1 foil cover available in the shop.',
  },
  {
    id: 'steranko-2023',
    title: 'Jim Steranko',
    subtitle: 'In-store signing',
    type: 'signing',
    date: '2023-04-08',
    when: 'Saturday, April 8',
    image: img('steranko-2023'),
    summary: 'A rare appearance from one of the most influential artists in comics, with CGC Signature Series available.',
  },
  {
    id: 'neal-adams-2020',
    title: 'Neal Adams',
    subtitle: 'In-store signing',
    type: 'signing',
    date: '2020-03-21',
    when: 'Saturday, March 21',
    image: img('neal-adams-2020'),
    summary: 'Neal Adams returned to the shop with prints, original art and signatures.',
  },
]

export const eventTypes = [
  { id: 'all', label: 'Everything' },
  { id: 'signing', label: 'Signings' },
  { id: 'sale', label: 'Sales & Free Days' },
  { id: 'community', label: 'Community' },
]

// The shop's yearly traditions
export const royalYear = [
  {
    month: 'April',
    title: 'Superman Day',
    detail: 'Freebies, exclusives and a discount on everything Superman in the store.',
  },
  {
    month: 'May',
    title: 'Free Comic Book Day',
    detail: 'First Saturday in May. Free comics for everyone, plus guest signings.',
  },
  {
    month: 'July',
    title: 'Royal Lot Con',
    detail: 'Our own mini comic con, with local vendors under the tent in the parking lot.',
  },
  {
    month: 'September',
    title: 'Local Comic Shop Day',
    detail: 'Shop-exclusive books, plus Community Day on Metropolitan Avenue.',
  },
  {
    month: 'October',
    title: 'New York Comic Con',
    detail: 'We’ve set up at NYCC every year since the very first one. Come find our booth.',
  },
  {
    month: 'November',
    title: 'Small Business Saturday',
    detail: 'A storewide sale on the Saturday after Thanksgiving.',
  },
  {
    month: 'December',
    title: '12 Days of Christmas',
    detail: 'A different deal every day, from back issues to statues.',
  },
  {
    month: 'All year',
    title: 'Creator signings',
    detail: 'Writers, artists, voice actors and wrestling legends, right at our counter.',
  },
]

// People who have signed at the counter
export const guests = [
  'Frank Miller',
  'Chris Claremont',
  'Jim Steranko',
  'Neal Adams',
  'Michael Golden',
  'Josef Rubinstein',
  'Ken Lashley',
  'Creees Lee',
  'Jeff Brennan',
  'Ivan Cohen',
  'Paul Azaceta',
  'Cory Smith',
  'Rebekah Isaacs',
  'Robbi Rodriguez',
  'Dave Fox',
  'David Mazouz',
  'Larry Kenney',
  'Peter Newman',
  'Lynne Lipton',
  'Mick Foley',
  'Jake “The Snake” Roberts',
  'Jerry “The King” Lawler',
  'Brutus “The Barber” Beefcake',
  'Jeff & Matt Hardy',
]
