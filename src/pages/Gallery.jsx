import { useState } from 'react'
import { Search } from 'lucide-react'
import Button from '../components/Button'
import Lightbox from '../components/Lightbox'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { InstagramIcon } from '../components/SocialIcons'
import { gallery } from '../data/shop'
import { site } from '../data/site'

const spans = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <PageHero
        tone="ink"
        eyebrow="Photo gallery"
        title="Step inside"
        accent="the shop"
        intro="New releases up front, long boxes in the back room, and a wall of Funko Pops in between. Tap any photo for a closer look."
      >
        <Button href={site.social.instagram} size="lg">
          <InstagramIcon /> More on Instagram
        </Button>
        <Button to="/visit" variant="white" size="lg">
          See it in person
        </Button>
      </PageHero>

      <section className="relative">
        <div aria-hidden="true" className="halftone absolute inset-0 text-ink/[0.05]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid grid-flow-dense auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((photo, index) => (
              <Reveal key={photo.src} delay={(index % 4) * 60} className={spans[photo.span] ?? ''}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Enlarge photo: ${photo.title}`}
                  className="panel lift group relative block h-full w-full overflow-hidden bg-white text-left"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink via-ink/70 to-transparent p-3 pt-10 text-white">
                    <span className="comic-shadow font-display text-2xl leading-none tracking-wide">{photo.title}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink bg-pow text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Search className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={gallery} index={openIndex} onChange={setOpenIndex} />
    </>
  )
}
