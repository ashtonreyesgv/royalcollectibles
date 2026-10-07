// The site has no backend, so forms hand off to the visitor's own email app with everything filled in.
// To send through a form service instead (Formspree, Netlify Forms...), swap the submit handler in RequestForm.
export function mailto({ to, subject, lines = [] }) {
  const params = [`subject=${encodeURIComponent(subject)}`]
  const body = lines.filter(Boolean).join('\n')
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${to}?${params.join('&')}`
}
