import { Caption } from './Typography'

const tones = {
  royal: 'bg-royal-600 text-white',
  ink: 'bg-ink text-white',
  bam: 'bg-bam text-white',
}

// Banner at the top of every inner page. `aside` fills the right-hand side on wide screens.
export default function PageHero({ eyebrow, title, accent, intro, tone = 'royal', aside, children }) {
  return (
    <section className={`relative overflow-hidden border-b-[3px] border-ink ${tones[tone]}`}>
      <div
        aria-hidden="true"
        className="sunburst absolute top-1/2 -right-1/4 aspect-square w-[110%] -translate-y-1/2 text-white/[0.07] [mask-image:radial-gradient(circle,black,transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="halftone absolute inset-0 text-black/25 [mask-image:linear-gradient(to_top,black,transparent_75%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          {eyebrow && <Caption>{eyebrow}</Caption>}
          <h1 className="comic-stroke mt-5 font-display text-6xl leading-[0.9] tracking-wide text-balance text-white sm:text-7xl lg:text-8xl">
            {title} {accent && <span className="text-pow sm:whitespace-nowrap">{accent}</span>}
          </h1>
          {intro && <p className="mt-6 max-w-xl text-lg text-pretty text-white/90 sm:text-xl">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
        {aside && <div className="relative mx-auto w-full max-w-md lg:max-w-none">{aside}</div>}
      </div>
    </section>
  )
}
