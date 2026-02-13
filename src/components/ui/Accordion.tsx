import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/cn'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpenIndex?: number | null
  className?: string
}

export function Accordion({
  items,
  defaultOpenIndex = null,
  className,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `accordion-button-${index}`
        const panelId = `accordion-panel-${index}`

        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200">
            <button
              type="button"
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 bg-white px-4 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:px-5"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-slate-500 transition-transform',
                  isOpen && 'rotate-180',
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="border-t border-slate-100 bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-600 sm:px-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
