import { Link } from 'react-router'
import { ArrowRight, BookOpen, HandCoins, MessageSquareText, ShieldCheck, Star } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import { EventPoster, GuestMarquee } from '../components/EventBits'
import FeaturedRelease from '../components/FeaturedRelease'
import Marquee from '../components/Marquee'
import Reveal from '../components/Reveal'
import SisterStore from '../components/SisterStore'
import { InstagramIcon } from '../components/SocialIcons'
import StoreStatus from '../components/StoreStatus'
import { Caption, SectionHeading, Tape } from '../components/Typography'
import VisitBlock from '../components/VisitBlock'
import { events } from '../data/events'
import { departments, gallery, vintageCovers } from '../data/shop'
import { site, ticker } from '../data/site'

function Hero() {
  const { google } = site.stats
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink bg-royal-600 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-royal-500 via-royal-600 to-royal-900" />
      <div
        aria-hidden="true"
        className="sunburst animate-spin-slow absolute top-1/2 left-[72%] aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 text-white/[0.07] [mask-image:radial-gradient(circle,black,transparent_62%)] lg:w-[95%]"
      />
      <div
        aria-hidden="true"
        className="halftone absolute inset-0 text-royal-950/40 [mask-image:linear-gradient(to_top,black,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-16 lg:pb-24">
        <div>
          <Caption className="animate-pop">Meanwhile, in Forest Hills, Queens…</Caption>
          <h1 className="comic-stroke mt-6 font-display text-[clamp(3.4rem,11vw,6.25rem)] leading-[0.86] tracking-wide uppercase lg:text-[5.5rem] xl:text-[7.25rem]">
            Your friendly neighborhood <span className="whitespace-nowrap text-pow">comic shop</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-white/90 sm:text-xl">
            New comics every Wednesday. Back issues from the Silver Age to last week. Graphic novels, Funko, statues and
            toys, all from a family-owned shop in Spider-Man’s own hometown.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/pull-list" size="lg">
              Start a free pull list <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/visit" variant="white" size="lg">
              Plan your visit
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <StoreStatus variant="chip" />
            <a
              href={site.links.map}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-head font-semibold hover:text-pow"
            >
              <span className="flex text-pow" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {google.rating} on Google · {google.reviews} reviews
            </a>
          </div>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="panel relative rotate-2 bg-white p-2.5 shadow-comic-lg">
            <Tape className="-top-3.5 left-1/2 -translate-x-1/2 -rotate-3" />
            <img
              src="/images/shop/storefront.webp"
              alt="The Royal Collectibles storefront on Metropolitan Avenue"
              className="aspect-[4/3] w-full object-cover"
              fetchPriority="high"
            />
          </div>

          <div className="panel absolute -bottom-12 -left-3 w-[42%] -rotate-6 bg-white p-1.5 sm:-left-8">
            <img
              src="/images/shop/graded-slabs.webp"
              alt="Graded Silver Age comics"
              className="aspect-square w-full object-cover"
            />
          </div>

          <Burst
            tone="pow"
            points={16}
            className="animate-wiggle absolute -top-10 -right-3 w-32 sm:-top-12 sm:-right-8 sm:w-40"
          >
            <span className="block font-display text-2xl leading-[0.9] tracking-wide sm:text-3xl">
              Buy
              <br />
              Sell
              <br />
              Trade
            </span>
          </Burst>

          <div className="bubble bubble-right absolute -right-2 -bottom-10 max-w-[13rem] px-4 py-3 text-ink shadow-comic-sm sm:-right-6">
            <p className="font-marker text-base leading-tight sm:text-lg">New books hit the wall every Wednesday!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  return (
    <Marquee className="border-b-[3px] border-ink bg-pow py-3">
      {ticker.map((item) => (
        <span key={item} className="flex items-center font-display text-2xl tracking-wider uppercase sm:text-3xl">
          <span className="px-7">{item}</span>
          <span aria-hidden="true" className="text-bam">
            ★
          </span>
        </span>
      ))}
    </Marquee>
  )
}

function DepartmentCard({ department }) {
  const { title, tag, blurb, image, to, wide } = department
  const Wrapper = to ? Link : 'div'
  return (
    <Wrapper
      {...(to ? { to } : {})}
      className="panel lift group flex h-full flex-col overflow-hidden bg-white"
    >
      <div className={`relative overflow-hidden border-b-[3px] border-ink ${wide ? 'aspect-[16/10] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]'}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 -rotate-2 border-2 border-ink bg-pow px-2 py-1 font-head text-[0.7rem] leading-none font-extrabold tracking-wider uppercase shadow-comic-sm">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className={`font-display tracking-wide ${wide ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{title}</h3>
        <p className={`mt-1 text-ink/70 ${wide ? 'text-base' : 'text-sm'}`}>{blurb}</p>
        {to && (
          <span className="mt-3 inline-flex items-center gap-1.5 font-head text-sm font-extrabold tracking-wide text-royal-600 uppercase">
            Take a look <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </Wrapper>
  )
}

// Text-only tiles that break up the photo grid
function CalloutCard({ to, tone, kicker, title, children, cta }) {
  const tones = {
    royal: 'bg-royal-600 text-white',
    bam: 'bg-bam text-white',
    ink: 'bg-ink text-white',
  }
  return (
    <Link to={to} className={`panel lift group relative flex flex-col justify-between overflow-hidden p-5 ${tones[tone]}`}>
      <div aria-hidden="true" className="halftone absolute inset-0 text-black/20 [mask-image:linear-gradient(to_top_left,black,transparent_70%)]" />
      <div className="relative">
        <p className="font-marker text-sm text-pow">{kicker}</p>
        <h3 className="comic-shadow mt-1 font-display text-4xl leading-[0.95] tracking-wide">{title}</h3>
        <p className="mt-2 text-sm text-white/85">{children}</p>
      </div>
      <span className="relative mt-4 inline-flex items-center gap-1.5 font-head text-sm font-extrabold tracking-wide text-pow uppercase">
        {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function Shelves() {
  return (
    <section className="relative">
      <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Inside the shop" title="Wall-to-wall good stuff">
            Comics are our bread and butter, but there’s a lot more packed into the corner of Metropolitan and
            Selfridge.
          </SectionHeading>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department, i) => (
            <Reveal
              key={department.id}
              delay={(i % 4) * 60}
              className={department.wide ? 'sm:col-span-2 lg:row-span-2' : ''}
            >
              <DepartmentCard department={department} />
            </Reveal>
          ))}
          <CalloutCard to="/#trading-cards" tone="royal" kicker="Pokémon, Yu-Gi-Oh!, Magic…" title="Trading cards" cta="Royal Sports, down the block">
            Cards, sports memorabilia and autographs live at our sister store, a few doors away.
          </CalloutCard>
          <CalloutCard to="/services#sell" tone="bam" kicker="Got a collection?" title="We buy comics" cta="Get a free appraisal">
            Vintage comics, toys and collectibles. We’re licensed second-hand dealers and appraisals are free.
          </CalloutCard>
          <CalloutCard to="/visit" tone="ink" kicker="Can’t find it?" title="Just ask us" cta="Get in touch">
            We place special orders all the time, and you can get text updates on yours.
          </CalloutCard>
        </div>
      </div>
    </section>
  )
}

const pullSteps = [
  { n: '1', title: 'Tell us what you read', text: 'Series, characters, creators, even statues. We’ll build your list.' },
  { n: '2', title: 'We pull it every Wednesday', text: 'Your books are set aside before they can sell out on the wall.' },
  { n: '3', title: 'Pick up and save 10%', text: 'Swing by at least every two weeks and take 10% off cover price.' },
]

function PullListPitch() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink bg-royal-600 text-white">
      <div
        aria-hidden="true"
        className="sunburst absolute top-1/2 -left-1/4 aspect-square w-[90%] -translate-y-1/2 text-white/[0.06] [mask-image:radial-gradient(circle,black,transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <SectionHeading light eyebrow="Free pull list service" title="Never miss an issue again">
            Tired of your book selling out before you get here? Set up a pull list and we’ll hold your comics for you
            every week. It’s absolutely free to join.
          </SectionHeading>

          <ol className="mt-8 space-y-4">
            {pullSteps.map(({ n, title, text }) => (
              <li key={n} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border-[3px] border-ink bg-pow font-display text-3xl text-ink shadow-comic-sm">
                  {n}
                </span>
                <div>
                  <h3 className="font-head text-xl font-extrabold">{title}</h3>
                  <p className="text-white/80">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/pull-list" size="lg">
              Set up my pull list <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/new-comics" variant="white" size="lg">
              How Wednesdays work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="panel -rotate-2 bg-white p-2.5 shadow-comic-lg">
            <img
              src="/images/shop/new-comics-shelf.webp"
              alt="The new release wall at Royal Collectibles"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <Burst tone="bam" points={18} className="animate-wiggle absolute -top-10 -left-4 w-36 sm:-left-10 sm:w-44">
            <span className="block font-display text-5xl sm:text-6xl">10%</span>
            <span className="block font-head text-xs font-extrabold tracking-wider uppercase sm:text-sm">
              off cover price
            </span>
          </Burst>
          <div className="bubble absolute -right-2 -bottom-8 px-4 py-3 text-ink shadow-comic-sm sm:-right-5">
            <p className="font-marker text-lg leading-tight">Free to join. Cancel anytime.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const services = [
  {
    Icon: BookOpen,
    title: 'Pull lists',
    text: 'Your weekly comics set aside every Wednesday, with 10% off cover price. Trades, graphic novels and even some toys and statues can go on your list.',
    to: '/pull-list',
    cta: 'How it works',
    tone: 'bg-royal-600 text-white',
  },
  {
    Icon: ShieldCheck,
    title: 'CGC submissions',
    text: 'We’re an official CGC submission site. Bring in your books, get our honest opinion on the grade to expect, and we’ll handle the paperwork.',
    to: '/services#cgc',
    cta: 'Get books graded',
    tone: 'bg-pow text-ink',
  },
  {
    Icon: HandCoins,
    title: 'We buy collections',
    text: 'Selling comics or collectibles? We’re licensed by New York State as second-hand dealers, and appraisals are always free.',
    to: '/services#sell',
    cta: 'Sell to us',
    tone: 'bg-bam text-white',
  },
]

function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <SectionHeading align="center" eyebrow="More than a shelf of comics" title="What we do for collectors" />
      </Reveal>
      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {services.map(({ Icon, title, text, to, cta, tone }, i) => (
          <Reveal key={title} delay={i * 90}>
            <Link to={to} className="panel lift group flex h-full flex-col bg-white">
              <div className={`relative flex items-center gap-4 overflow-hidden border-b-[3px] border-ink p-5 ${tone}`}>
                <div aria-hidden="true" className="halftone absolute inset-0 text-black/15" />
                <span className="relative grid h-14 w-14 shrink-0 place-items-center border-[3px] border-ink bg-white text-ink shadow-comic-sm">
                  <Icon className="h-7 w-7" strokeWidth={2.4} />
                </span>
                <h3 className="relative font-display text-4xl leading-none tracking-wide">{title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-ink/75">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-head font-extrabold tracking-wide text-royal-600 uppercase">
                  {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function CoverStrip({ covers, reverse }) {
  return (
    <Marquee reverse={reverse} duration="80s">
      {covers.map(({ src, title }, i) => (
        <figure
          key={title}
          className={`mx-2.5 w-36 shrink-0 border-[3px] border-white bg-white shadow-[5px_5px_0_0_rgb(0_0_0/0.6)] sm:w-44 ${
            i % 2 ? 'rotate-1' : '-rotate-1'
          }`}
        >
          <img src={src} alt={title} loading="lazy" className="aspect-[2/3] w-full object-cover" />
        </figure>
      ))}
    </Marquee>
  )
}

function BackIssues() {
  const half = vintageCovers.length / 2
  return (
    <section className="relative overflow-hidden border-y-[3px] border-ink bg-ink py-16 text-white lg:py-24">
      <div aria-hidden="true" className="halftone-lg absolute inset-0 text-royal-600/20" />
      <div className="relative">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading light align="center" eyebrow="The back room" title="Dig through the decades">
            Four sections of long boxes: Marvel, DC, independents and $2 bargain bins. Silver Age keys to last month’s
            issue you missed, with graded books on the wall.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 space-y-6 py-3">
          <CoverStrip covers={vintageCovers.slice(0, half)} />
          <CoverStrip covers={vintageCovers.slice(half)} reverse />
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/gallery">Tour the shop</Button>
            <Button to="/services#sell" variant="white">
              Sell us your collection
            </Button>
          </div>
          <p className="text-xs text-white/45">
            Artwork above: public-domain Golden Age covers, courtesy of Wikimedia Commons.
          </p>
        </div>
      </div>
    </section>
  )
}

function EventsPreview() {
  const recent = events.filter((event) => event.image).slice(0, 4)
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Signings, sales & lot cons" title="Legends at the counter">
            Frank Miller. Chris Claremont. Jim Steranko. Neal Adams. Creators, voice actors and wrestling legends all
            make their way to Forest Hills.
          </SectionHeading>
          <Button to="/events" variant="royal">
            All events <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recent.map((event, i) => (
            <Reveal key={event.id} delay={i * 70}>
              <Link to="/events" className="block h-full">
                <EventPoster event={event} compact />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-16 -rotate-1 scale-[1.02] border-y-[3px] border-ink bg-royal-700 py-5">
        <GuestMarquee />
      </div>
      <div className="h-14" />
    </section>
  )
}

function Proof() {
  const { google, facebook, instagram } = site.stats
  const stats = [
    { value: google.rating, label: 'stars on Google', sub: `${google.reviews} reviews`, tone: 'pow' },
    { value: `${facebook.recommend}%`, label: 'recommend us', sub: `${facebook.reviews} Facebook reviews`, tone: 'white' },
    { value: instagram.followers, label: 'on Instagram', sub: site.social.instagramHandle, tone: 'zap' },
    { value: site.founded, label: 'family owned since', sub: '30+ years on Metropolitan Ave', tone: 'bam', flip: true },
  ]
  const feed = [gallery[2], gallery[3], gallery[4], gallery[9], gallery[13], gallery[5]]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <SectionHeading align="center" eyebrow="Word on the street" title="Queens has our back" />
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
        {stats.map(({ value, label, sub, tone, flip }, i) => (
          <Reveal key={label} delay={i * 80} className="text-center">
            <Burst tone={tone} points={12} inner={0.8} className="mx-auto w-36 sm:w-40">
              {flip && <span className="block font-head text-[0.65rem] font-extrabold tracking-wider uppercase">{label}</span>}
              <span className="block font-display text-5xl leading-none">{value}</span>
              {!flip && <span className="block font-head text-[0.65rem] font-extrabold tracking-wider uppercase">{label}</span>}
            </Burst>
            <p className="mt-3 font-head text-sm font-semibold text-ink/65">{sub}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="panel mt-16 overflow-hidden bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-ink bg-royal-600 px-5 py-4 text-white">
          <div>
            <p className="font-display text-3xl tracking-wide">Follow the shop</p>
            <p className="text-white/80">
              New arrivals, cover reveals and the Tuesday sneak peek all land on Instagram first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.social.instagram}>
              <InstagramIcon /> {site.social.instagramHandle}
            </Button>
            <Button to="/text-updates" variant="white">
              <MessageSquareText className="h-4 w-4" /> Text updates
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {feed.map(({ src, title }) => (
            <a
              key={src}
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title}, see more on Instagram`}
              className="group relative aspect-square overflow-hidden border-ink not-last:border-r-[3px] max-sm:nth-[3n]:border-r-0 max-sm:nth-[-n+3]:border-b-[3px]"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-royal-700/70 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8" />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Visit() {
  return (
    <section className="relative border-t-[3px] border-ink bg-newsprint">
      <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="To be continued… in person" title="Find us under the blue awning" />
        </Reveal>
        <div className="mt-10">
          <VisitBlock />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Shelves />
      <FeaturedRelease />
      <PullListPitch />
      <Services />
      <BackIssues />
      <EventsPreview />
      <SisterStore />
      <Proof />
      <Visit />
    </>
  )
}
