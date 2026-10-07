import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// Full-screen image viewer. `index` is the open item, or null when closed.
export default function Lightbox({ items, index, onChange }) {
  const open = index !== null
  const item = open ? items[index] : null

  useEffect(() => {
    if (!open) return
    const step = (delta) => onChange((index + delta + items.length) % items.length)
    const onKey = (event) => {
      if (event.key === 'Escape') onChange(null)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, items.length, onChange])

  if (!open) return null

  const step = (delta) => onChange((index + delta + items.length) % items.length)
  const navButton =
    'grid h-12 w-12 shrink-0 place-items-center border-[3px] border-ink bg-pow text-ink shadow-comic-sm transition-transform hover:scale-105'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex flex-col bg-ink/95 p-3 sm:p-6"
      onClick={() => onChange(null)}
    >
      <div className="flex items-center justify-between gap-4 text-white">
        <p className="font-head text-sm font-bold uppercase tracking-widest text-white/60">
          {index + 1} / {items.length}
        </p>
        <button type="button" aria-label="Close" className={navButton} onClick={() => onChange(null)}>
          <X />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-5">
        <button
          type="button"
          aria-label="Previous"
          className={navButton}
          onClick={(event) => {
            event.stopPropagation()
            step(-1)
          }}
        >
          <ChevronLeft />
        </button>
        <img
          key={item.src}
          src={item.src}
          alt={item.title}
          className="animate-pop max-h-full min-w-0 max-w-full border-[3px] border-white object-contain"
          onClick={(event) => event.stopPropagation()}
        />
        <button
          type="button"
          aria-label="Next"
          className={navButton}
          onClick={(event) => {
            event.stopPropagation()
            step(1)
          }}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mx-auto max-w-2xl pt-4 text-center text-white" onClick={(event) => event.stopPropagation()}>
        <p className="font-display text-3xl tracking-wide">{item.title}</p>
        {item.caption && <p className="mt-1 text-sm text-white/75">{item.caption}</p>}
      </div>
    </div>
  )
}
