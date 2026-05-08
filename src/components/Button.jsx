export function Button({ label = 'Button', variant = 'primary', onClick }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-accent text-white hover:opacity-90',
    secondary: 'border border-border text-text-muted hover:text-text hover:border-text-muted',
    ghost: 'text-accent hover:bg-bg-elevated',
  }

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  )
}
