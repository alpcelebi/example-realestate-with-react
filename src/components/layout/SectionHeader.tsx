import { cn } from '../../lib/cn'

interface SectionHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn(centered && 'text-center', className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </header>
  )
}
