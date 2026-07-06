import { Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      {t("Made with ", "Hecho con ")}
      <Heart size={14} className="footer-heart" fill="currentColor" /> 
      {t("by", "por")} Pavel
    </footer>
  )
}

export default Footer
