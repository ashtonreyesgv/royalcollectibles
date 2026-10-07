# Royal Collectibles

Rebuild of [royalcomicsnyc.com](https://royalcomicsnyc.com/) for Royal Collectibles, a comic shop at 96-01 Metropolitan Avenue, Forest Hills, Queens.

React 19 · Vite 8 · Tailwind CSS 4 · React Router 8

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173. `npm run build` writes the production site to `dist/`, and `npm run preview` serves that build locally.

## Pages

| Route | What it covers | Replaces (old site) |
| --- | --- | --- |
| `/` | Hero, departments, featured release, pull list pitch, services, events, sister store, reviews, map | Home |
| `/new-comics` | How the release week works, featured release, FOC explainer, reserve-a-book form | New Releases, Previews Final Orders Due |
| `/pull-list` | How pull lists work, sign-up form, FAQ | Free Pull List Service |
| `/services` | Pull lists, CGC submissions, selling a collection | Services Offered |
| `/events` | Upcoming events, yearly traditions, flyer archive with filters | Upcoming Events + the blog feed |
| `/gallery` | Shop photos with a lightbox | Photo Gallery |
| `/about` | Shop story, conventions, past guests, sister store | About Us |
| `/visit` | Map, hours, every way to get in touch, contact form | Contact Info, Store Hours, Social Media |
| `/text-updates` | SMS opt-in terms and privacy policy | Bottom of About Us |

Old WordPress URLs redirect to the new pages (`public/_redirects` and `legacyRedirects` in `src/App.jsx`).

## Updating content

Everything the shop will want to change is in `src/data/`. No component edits needed.

- **`site.js`**: address, phone, emails, hours, social links, review stats, nav. The open/closed badge reads the hours from here.
- **`events.js`**:
  - `featuredRelease` is the "reserve your copy" spotlight. Swap it for the next big book, or set it to `null` to hide the section.
  - `events` is the list of signings and sales, newest first. Anything dated today or later shows under "On the horizon"; older entries move to the flyer wall on their own.
  - `royalYear` and `guests` feed the yearly calendar and the scrolling guest list.
- **`shop.js`**: departments on the home page, gallery photos and captions.

### Adding a photo or flyer

1. Drop the `.jpg` or `.png` into `public/images/shop`, `public/images/events` or `public/images/covers`.
2. Run `npm run images`. It resizes the file, converts it to WebP and removes the original.
3. Reference it as `/images/<folder>/<name>.webp`.

## How the forms work

There is no backend. Each form builds an email and opens it in the visitor's own mail app, addressed to the right person (`src/lib/mailto.js`, `src/components/RequestForm.jsx`). To collect submissions through a service such as Formspree or Netlify Forms instead, change the submit handler in `RequestForm.jsx`.

## Deploying

The site is a static single-page app. `public/_redirects` handles the SPA fallback and the old-URL redirects on Netlify and Cloudflare Pages. Other hosts need an equivalent rule that serves `index.html` for unknown paths.

## Image credits

- Shop photos, event flyers and the Absolute Batman #25 cover guide come from the shop's own website and Instagram.
- The vintage covers in the "Dig through the decades" strip are public-domain Golden Age comics from Wikimedia Commons (Planet Comics, Thrilling Comics, Flying Saucers, Great Comics, Military Comics, National Comics, Fantastic Worlds).
