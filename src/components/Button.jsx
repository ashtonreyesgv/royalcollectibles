import { Link } from 'react-router'

const variants = {
  pow: 'bg-pow text-ink',
  royal: 'bg-royal-600 text-white',
  ink: 'bg-ink text-white',
  white: 'bg-white text-ink',
  bam: 'bg-bam text-white',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-3 text-[0.95rem]',
  lg: 'px-7 py-4 text-lg',
}

const base =
  'inline-flex items-center justify-center gap-2 border-[3px] border-ink font-head font-extrabold uppercase leading-none tracking-wide shadow-comic-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-comic active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'

export default function Button({ to, href, variant = 'pow', size = 'md', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
