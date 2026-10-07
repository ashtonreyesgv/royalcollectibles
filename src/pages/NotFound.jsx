import Burst from '../components/Burst'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-royal-600 text-white">
      <div aria-hidden="true" className="halftone absolute inset-0 text-royal-950/30" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <Burst tone="pow" points={18} className="animate-wiggle w-56">
          <span className="block font-display text-7xl">404</span>
        </Burst>
        <h1 className="comic-stroke mt-10 font-display text-6xl tracking-wide sm:text-7xl">This issue is sold out</h1>
        <p className="mt-4 max-w-md text-lg text-white/85">
          We couldn’t find that page. It may have moved when we rebuilt the site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" size="lg">
            Back to the shop
          </Button>
          <Button to="/visit" variant="white" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
