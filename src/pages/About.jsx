import { ArrowRight, Award, ExternalLink, Heart, Tent } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import { GuestMarquee } from '../components/EventBits'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SisterStore from '../components/SisterStore'
import { SectionHeading, Tape } from '../components/Typography'
import { site } from '../data/site'

const carry = [
  'New comics, every Wednesday',
  'Back issues, Silver Age to Modern',
  'Graphic novels, trades & manga',
  'Graded and premium books',
  'Funko Pops',
  'Statues & anime figures',
  'Action figures & vintage toys',
  'Blind boxes, pins & magnets',
  'All-ages comics, books & plush',
  'Bags, boards, bins & supplies',
]

const conventions = ['New York Comic Con', 'Eternal Con', 'Winter Con', 'Big Apple Con']

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Family owned."
        accent="Comic obsessed."
        intro="Royal Collectibles is a family owned and operated comic shop in Forest Hills, Queens, the hometown of a certain friendly neighborhood wall-crawler."
        aside={
          <div className="relative">
            <div className="panel rotate-2 bg-white p-2.5 shadow-comic-lg">
              <Tape className="-top-3.5 left-1/2 -translate-x-1/2 -rotate-2" />
              <img
                src="/images/shop/storefront.webp"
                alt="Royal Collectibles on the corner of Metropolitan Avenue and Selfridge Street"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <Burst tone="bam" points={16} className="animate-wiggle absolute -bottom-10 -left-4 w-36 sm:-left-8 sm:w-40">
              <span className="block font-head text-xs font-extrabold tracking-wider uppercase">Since</span>
              <span className="block font-display text-5xl sm:text-6xl">{site.founded}</span>
            </Burst>
          </div>
        }
      >
        <Button to="/visit" size="lg">
          Come visit <ArrowRight className="h-5 w-5" />
        </Button>
        <Button to="/gallery" variant="white" size="lg">
          See the shop
        </Button>
      </PageHero>

      {/* Story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Our story" title="Your friendly neighborhood comic shop" />
          <div className="mt-6 space-y-5 text-lg text-ink/80">
            <p>
              We carry a large selection of comic books from the Silver Age to modern, plus graphic novels, toys,
              statues and so much more. We offer a pull list service for collectors, comic grading services, and we
              buy and trade vintage comics and collectibles.
            </p>
            <p>
              We try our best to offer a personal touch, whether that’s advising collectors on buying and selling,
              recommending a new comic to read, or introducing the world of comic books to new readers with the
              knowledge we’ve accumulated over the years.
            </p>
          </div>

          <figure className="bubble mt-10 bg-pow px-6 py-6 shadow-comic sm:px-8">
            <Heart className="h-7 w-7 fill-bam text-ink" />
            <blockquote className="mt-2 font-marker text-xl leading-snug sm:text-2xl">
              We hope our survival in the rough and tumble business of collectibles is a testament to our honesty and
              integrity.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={100} className="self-start">
          <div className="panel bg-white">
            <h3 className="border-b-[3px] border-ink bg-royal-600 px-5 py-3 font-display text-3xl tracking-wide text-white">
              What we carry
            </h3>
            <ul className="grid gap-x-6 gap-y-2.5 p-5 font-head font-semibold sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {carry.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-0.5 text-bam">
                    ★
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://www.villagevoice.com/2016/10/19/best-out-of-the-way-comic-book-shop/"
            target="_blank"
            rel="noreferrer"
            className="panel lift mt-6 flex items-center gap-4 bg-white p-5"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center border-[3px] border-ink bg-pow shadow-comic-sm">
              <Award className="h-7 w-7" />
            </span>
            <span>
              <span className="block font-head text-xs font-extrabold tracking-widest text-royal-600 uppercase">
                The Village Voice · 2016
              </span>
              <span className="block font-display text-2xl leading-tight tracking-wide">
                Best Out-of-the-Way Comic-Book Shop
              </span>
            </span>
            <ExternalLink className="ml-auto h-5 w-5 shrink-0 text-ink/40" />
          </a>
        </Reveal>
      </section>

      {/* Conventions */}
      <section className="relative overflow-hidden border-y-[3px] border-ink bg-royal-600 text-white">
        <div
          aria-hidden="true"
          className="sunburst absolute top-1/2 -right-1/4 aspect-square w-[90%] -translate-y-1/2 text-white/[0.06] [mask-image:radial-gradient(circle,black,transparent_65%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <SectionHeading light eyebrow="On the road" title="See you at the con">
              We’ve been setting up at New York Comic Con every year since its inception, and we bring a taste of the
              shop to local conventions too. If you’re going this year, come check us out!
            </SectionHeading>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            {conventions.map((name, i) => (
              <div
                key={name}
                className={`panel flex items-center gap-3 bg-white p-4 text-ink ${i % 2 ? 'rotate-1' : '-rotate-1'}`}
              >
                <Tent className="h-6 w-6 shrink-0 text-royal-600" />
                <span className="font-display text-2xl leading-none tracking-wide">{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Guests */}
      <section className="overflow-hidden bg-ink py-16 text-white lg:py-20">
        <Reveal className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading light align="center" eyebrow="Signings & appearances" title="Look who’s stopped by">
            We host events throughout the year, including artist and creator signings. Comics legends, voice actors,
            TV stars and WWE legends have all sat at our signing table.
          </SectionHeading>
        </Reveal>
        <GuestMarquee className="mt-12" />
        <div className="mt-12 text-center">
          <Button to="/events">
            See who’s next <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <SisterStore />
    </>
  )
}
