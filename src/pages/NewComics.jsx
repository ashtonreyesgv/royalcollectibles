import { ExternalLink } from 'lucide-react'
import Burst from '../components/Burst'
import Button from '../components/Button'
import FeaturedRelease from '../components/FeaturedRelease'
import PageHero from '../components/PageHero'
import RequestForm from '../components/RequestForm'
import Reveal from '../components/Reveal'
import { InstagramIcon } from '../components/SocialIcons'
import { SectionHeading, Tape } from '../components/Typography'
import { site } from '../data/site'

const week = [
  {
    day: 'Fri',
    time: '1pm',
    title: 'The list locks',
    text: 'Publishers finalize the upcoming order list after Friday at 1pm. That’s when next week’s final-call titles and variant covers are set.',
    tone: 'bg-white',
  },
  {
    day: 'Mon',
    time: '12pm',
    title: 'Final orders due',
    text: 'Last call. If you want a book or cover added to your pull list, tell us by Monday at noon so we can order enough copies.',
    tone: 'bg-pow',
  },
  {
    day: 'Tue',
    time: 'Sneak peek',
    title: 'First look on Instagram',
    text: 'We post a sneak peek at the week’s new books. No live claims: DM us your requests and we answer them first come, first served once we open Wednesday.',
    tone: 'bg-white',
  },
  {
    day: 'Wed',
    time: '10am',
    title: 'New Comic Book Day',
    text: 'Doors open at 10am, our earliest opening of the week. The wall is restocked and your pull box is waiting.',
    tone: 'bg-bam text-white',
  },
]

const fields = [
  { name: 'name', label: 'Your name', required: true, half: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  {
    name: 'subscriber',
    label: 'Have a pull list with us?',
    type: 'select',
    half: true,
    options: ['Yes', 'Not yet', 'No, but sign me up'],
  },
  {
    name: 'books',
    label: 'What should we hold for you?',
    type: 'textarea',
    required: true,
    placeholder: 'Title, issue number and cover (if you have a favorite)',
  },
]

export default function NewComics() {
  return (
    <>
      <PageHero
        tone="bam"
        eyebrow="Every single Wednesday"
        title="New comic"
        accent="book day"
        intro="New comics land on our wall every Wednesday at 10am. Here’s how the week works, and how to make sure your copy is waiting for you."
        aside={
          <div className="relative">
            <div className="panel -rotate-2 bg-white p-2.5 shadow-comic-lg">
              <Tape className="-top-3.5 left-1/2 -translate-x-1/2 -rotate-2" />
              <img
                src="/images/shop/new-releases-wall.webp"
                alt="The new releases wall at Royal Collectibles"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <Burst tone="pow" points={16} className="animate-wiggle absolute -bottom-10 -left-4 w-32 sm:-left-8 sm:w-40">
              <span className="block font-head text-xs font-extrabold tracking-wider uppercase">Doors at</span>
              <span className="block font-display text-5xl sm:text-6xl">10am</span>
            </Burst>
          </div>
        }
      >
        <Button href="#reserve" size="lg">
          Reserve a book
        </Button>
        <Button to="/pull-list" variant="white" size="lg">
          Start a pull list
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="The weekly rhythm" title="From final call to the wall">
            Comic shops order months ahead, then lock in final numbers a few weeks before each book ships. Here’s what
            that looks like from your side of the counter.
          </SectionHeading>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {week.map(({ day, time, title, text, tone }, i) => (
            <Reveal as="li" key={day} delay={i * 80} className={`panel flex flex-col ${tone}`}>
              <div className="flex items-end justify-between border-b-[3px] border-ink px-4 py-3">
                <span className="font-display text-6xl leading-[0.8] tracking-wide uppercase">{day}</span>
                <span className="font-head text-sm font-extrabold tracking-widest uppercase">{time}</span>
              </div>
              <div className="p-4">
                <h3 className="font-head text-xl font-extrabold">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] opacity-80">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={site.social.instagram} variant="ink">
            <InstagramIcon /> Catch the Tuesday sneak peek
          </Button>
        </div>
      </section>

      <FeaturedRelease />

      <section className="relative border-b-[3px] border-ink bg-newsprint">
        <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.06]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <SectionHeading eyebrow="Previews: final orders due" title="What’s FOC, anyway?" />
            <div className="mt-6 space-y-4 text-lg text-ink/80">
              <p>
                <strong className="text-ink">FOC is the Final Order Cutoff</strong>: the date retailers like us must
                submit final orders before publishers set their print runs. For comic books and graphic novels, it
                falls on a Monday.
              </p>
              <p>
                You can still order after that date, but availability may be limited. So if you see a new release or
                variant cover you’d like to order or add to your pull list, contact us as soon as you can, or by{' '}
                <strong className="text-ink">Monday at 12pm</strong> at the latest. That way we can be sure to have
                enough copies on order for you.
              </p>
              <p className="text-base text-ink/60">
                The list of titles from publishers is not finalized until after Friday at 1pm each week, and all
                product and shipping information is subject to change. Check with us for ordering deadlines.
              </p>
            </div>
            {site.links.finalOrders && (
              <Button href={site.links.finalOrders} variant="royal" className="mt-7">
                See this week’s final orders list <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </Reveal>

          <Reveal delay={100} className="self-center">
            <div className="bubble bg-white px-6 py-6 shadow-comic sm:px-8">
              <p className="font-marker text-2xl leading-snug text-royal-700 sm:text-3xl">
                Chasing a certain cover? Tell us before Monday at noon and we’ll get it on order!
              </p>
            </div>
            <p className="mt-8 ml-6 font-head text-sm font-bold tracking-widest text-ink/60 uppercase">
              Your friendly neighborhood comic shop
            </p>
          </Reveal>
        </div>
      </section>

      <section id="reserve" className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Hold it for me" title="Reserve a book">
            Spotted something coming out soon? Tell us the title, issue and cover, and we’ll set it aside when it
            arrives.
          </SectionHeading>
          <p className="mt-6 text-ink/70">
            Reading a series every month? A free pull list does this automatically and takes 10% off cover price.
          </p>
          <Button to="/pull-list" variant="pow" className="mt-5">
            Tell me about pull lists
          </Button>
        </Reveal>
        <Reveal delay={100}>
          <RequestForm to={site.email} subject="Book reservation request" fields={fields} submitLabel="Send my request" />
        </Reveal>
      </section>
    </>
  )
}
