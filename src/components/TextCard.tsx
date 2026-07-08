import type { ReactNode } from 'react'
import './TextCard.css'

interface TextCardProps {
  title: string
  text: ReactNode
}

function TextCard({ title, text }: TextCardProps) {
  return (
    <div className="text-card">
      <h2>{title}</h2>
      <div className="text-card-text">{text}</div>
    </div>
  )
}

export default TextCard
