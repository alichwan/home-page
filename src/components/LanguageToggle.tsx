import { useLanguage } from '../context/LanguageContext'
import './LanguageToggle.css'

function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      className="lang-toggle"
      role="switch"
      aria-checked={lang === 'es'}
      aria-label="Toggle language"
      onClick={toggleLanguage}
    >
      <span className={lang === 'en' ? 'lang-option active' : 'lang-option'}>EN</span>
      <span className="lang-track">
        <span className={lang === 'es' ? 'lang-knob right' : 'lang-knob'} />
      </span>
      <span className={lang === 'es' ? 'lang-option active' : 'lang-option'}>ES</span>
    </button>
  )
}

export default LanguageToggle
