const img = (name) => `/images/shop/${name}.webp`

// What's on the shelves. `wide` cards take the feature slot in the grid.
export const departments = [
  {
    id: 'new-releases',
    title: 'New Releases',
    tag: 'Every Wednesday',
    blurb: 'The wall gets restocked every Wednesday at 10am. Marvel, DC, Image and the indies, all face-out.',
    image: img('new-releases-wall'),
    to: '/new-comics',
    wide: true,
  },
  {
    id: 'back-issues',
    title: 'Back Issues',
    tag: 'Silver Age to Modern',
    blurb: 'A whole back room of long boxes: Marvel, DC, independents, plus $2 bargain bins.',
    image: img('back-issues'),
  },
  {
    id: 'graded',
    title: 'Graded & Key Books',
    tag: 'Slabs & wall books',
    blurb: 'CGC-graded keys and premium Silver Age books for the serious collector.',
    image: img('graded-slabs'),
    to: '/services#cgc',
  },
  {
    id: 'graphic-novels',
    title: 'Graphic Novels & Manga',
    tag: 'Trades · Hardcovers · Omnibuses',
    blurb: 'Marvel, DC, Image, IDW, Vertigo, Dark Horse and plenty of independent publishers.',
    image: img('graphic-novels'),
  },
  {
    id: 'funko',
    title: 'Funko Pops',
    tag: 'Wall to wall',
    blurb: 'Commons, showcase and oversized Pops. If it has a giant head, it is probably here.',
    image: img('funko-wall'),
  },
  {
    id: 'statues',
    title: 'Statues & Anime Figures',
    tag: 'Display pieces',
    blurb: 'Resin statues, anime figures and centerpiece collectibles.',
    image: img('statues'),
  },
  {
    id: 'all-ages',
    title: 'All-Ages Corner',
    tag: 'Kids welcome',
    blurb: 'Kid-friendly comics, books, toys and plush. The perfect first comic shop.',
    image: img('all-ages'),
  },
  {
    id: 'toys',
    title: 'Action Figures & Blind Boxes',
    tag: 'Toys new & vintage',
    blurb: 'Carded figures, vinyl blind boxes, blind bags and vintage toys.',
    image: img('action-figures'),
  },
  {
    id: 'supplies',
    title: 'Collector Supplies',
    tag: 'Bag it. Board it.',
    blurb: 'Bags, boards, bins, showcases and everything else that keeps a collection mint.',
    image: img('supplies'),
  },
  {
    id: 'extras',
    title: 'Magnets, Pins & Patches',
    tag: 'Small stuff',
    blurb: 'Magnets, buttons, enamel pins, patches, stickers and keychains.',
    image: img('magnets-pins'),
  },
]

// Photo gallery, with the shop's own captions
export const gallery = [
  {
    src: img('storefront'),
    title: 'The corner shop',
    caption: 'View of our store from the corner of Metropolitan Avenue and Selfridge St.',
    span: 'wide',
  },
  {
    src: img('new-releases-wall'),
    title: 'The new release wall',
    caption: 'Our new releases section. New comics added every Wednesday!',
    span: 'wide',
  },
  { src: img('funko-wall'), title: 'Funko wall', caption: 'Our selection of Funko Pop figures!', span: 'wide' },
  {
    src: img('graded-slabs'),
    title: 'Graded keys',
    caption: 'Graded Silver and Bronze Age books.',
  },
  {
    src: img('statues'),
    title: 'Statues',
    caption: 'We carry statues, back issues (Silver Age to Modern), new releases, action figures, and so much more!',
  },
  {
    src: img('graphic-novels'),
    title: 'Graphic novels',
    caption:
      'We carry trade paperbacks & hardcovers from Marvel, DC, Image, IDW, Vertigo, Dark Horse, and other independent publishers.',
    span: 'tall',
  },
  {
    src: img('back-issues'),
    title: 'The back room',
    caption:
      'Back issues are located in our back room. They are separated into four sections: Marvel, DC, Independent Publishers, and a $2.00 bargain section with comics from all publishers.',
    span: 'wide',
  },
  { src: img('long-boxes'), title: 'Long boxes', caption: 'Rows and rows of long boxes to dig through.' },
  { src: img('all-ages'), title: 'All-ages section', caption: 'Our all-ages comic book section!', span: 'wide' },
  {
    src: img('blind-boxes'),
    title: 'Blind boxes',
    caption: 'Action figures and vinyl blind boxes for fans of all ages!',
  },
  {
    src: img('action-figures'),
    title: 'Action figures',
    caption: 'Action figures and vinyl blind boxes for fans of all ages!',
  },
  { src: img('new-comics-rack'), title: 'Fresh off the truck', caption: 'This week’s books, racked and ready.' },
  {
    src: img('supplies'),
    title: 'Supplies',
    caption: 'Supplies for storing and caring for your collection!',
  },
  {
    src: img('magnets-pins'),
    title: 'Magnets & more',
    caption: 'Magnets, buttons, enamel pins, patches, stickers!',
  },
]

// Public-domain Golden Age covers (Wikimedia Commons). Used as artwork, not as stock for sale.
const cover = (file, title) => ({ src: `/images/covers/${file}.webp`, title })
export const vintageCovers = [
  cover('planet-comics-01', 'Planet Comics #1'),
  cover('thrilling-comics-01', 'Thrilling Comics #1'),
  cover('planet-comics-12', 'Planet Comics #12'),
  cover('flying-saucers-01', 'Flying Saucers #1'),
  cover('planet-comics-27', 'Planet Comics #27'),
  cover('great-comics-01', 'Great Comics #1'),
  cover('planet-comics-21', 'Planet Comics #21'),
  cover('planet-comics-55', 'Planet Comics #55'),
  cover('military-comics-21', 'Military Comics #21'),
  cover('planet-comics-03', 'Planet Comics #3'),
  cover('national-comics-26', 'National Comics #26'),
  cover('planet-comics-57', 'Planet Comics #57'),
  cover('fantastic-worlds-7', 'Fantastic Worlds #7'),
  cover('planet-comics-05', 'Planet Comics #5'),
  cover('planet-comics-59', 'Planet Comics #59'),
  cover('planet-comics-69', 'Planet Comics #69'),
]
