import { File } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import Bubble from '../components/Bubble'
import TextCard from '../components/TextCard'
import LinksCard from '../components/LinksCard'
import './Professional.css'

function Professional() {
  const { t } = useLanguage()
  const fill = t('Fill here', 'Rellenar aqui')
  const cv = t('/assets/CV2026PavelMJ_EN.pdf', '/assets/CV2026PavelMJ_ES.pdf')

  return (
    <div className="professional-page">
      <h1 className="page-title">
        {t('Who I am', 'Quién soy')}
      </h1>

      <div className="professional-bubbles">
        <Bubble
          icon={<FaLinkedin size={20} />}
          href="https://www.linkedin.com/in/pavelmedinajorquera/"
          label="LinkedIn"
        />
        <Bubble
          icon={<FaGithub size={20} />}
          href="https://github.com/alichwan"
          label="GitHub"
        />
        <Bubble
          icon={<File size={20} />}
          href={cv}
          label={t('CV (English)', 'CV (Español)')}
          text="CV"
        />
      </div>

      <div className="professional-content">
        <TextCard title={fill} text={fill} />
        <LinksCard
          title={fill}
          text={fill}
          items={[
            { label: fill, href: '#' },
            { label: fill, href: '#' },
            { label: fill, href: '#' },
          ]}
        />
      </div>
    </div>
  )
}

export default Professional
