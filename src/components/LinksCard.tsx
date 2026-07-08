import type { ReactNode } from 'react'
import './LinksCard.css'

export interface LinkItem {
  label: ReactNode
  href?: string
  emoji?: string
}

interface LinksCardProps {
  title: string
  text?: ReactNode
  items: LinkItem[]
  /** Bullet used when an item doesn't specify its own emoji */
  emoji?: string
}

function LinksCard({ title, text, items, emoji = '•' }: LinksCardProps) {
  return (
    <div className="links-card">
      <h2>{title}</h2>
      {text && <p className="links-card-text">{text}</p>}
      <ul className="links-card-list">
        {items.map((item, index) => (
          <li key={index}>
            <span className="links-card-bullet">{item.emoji ?? emoji}</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinksCard
