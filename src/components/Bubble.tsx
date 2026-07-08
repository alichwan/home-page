import type { ReactNode } from 'react'
import './Bubble.css'

interface BubbleProps {
  icon: ReactNode
  href: string
  label: string
  text?: string
  external?: boolean
}

function Bubble({ icon, href, label, text, external = true }: BubbleProps) {
  return (
    <a
      className={text ? 'bubble bubble-with-text' : 'bubble'}
      href={href}
      aria-label={label}
      title={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {icon}
      {text && <span className="bubble-text">{text}</span>}
    </a>
  )
}

export default Bubble
