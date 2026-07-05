import './TextCard.css'

interface TextCardProps {
  title: string
  text: string
}

function TextCard({ title, text }: TextCardProps) {
  return (
    <div className="text-card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TextCard
