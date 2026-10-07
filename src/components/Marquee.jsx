// Endless horizontal scroller. Content is rendered twice so the loop is seamless; pauses on hover.
export default function Marquee({ children, reverse = false, duration, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee-track flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={duration ? { animationDuration: duration } : undefined}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
