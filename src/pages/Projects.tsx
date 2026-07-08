import { useLanguage } from '../context/LanguageContext'
import './Projects.css'

function Projects() {
  const { t } = useLanguage()

  return (
    <div className="projects-page">
      <h1 className="page-title">
        {t('Projects', 'Proyectos')}
      </h1>
      <div className="projects-content">
      </div>
    </div>
  )
}

export default Projects