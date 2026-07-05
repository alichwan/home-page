import { FaSpotify, FaInstagram, FaTelegram } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import Bubble from '../components/Bubble'
import TextCard from '../components/TextCard'
import LinksCard from '../components/LinksCard'
import './Personal.css'

function Personal() {
  const { t } = useLanguage()
  const fill = t('Fill here', 'Rellenar aqui')

  return (
    <div className="personal-page">
      <h1 className="page-title">
        {t('Who I really am', 'Quién soy realmente')}
      </h1>

      <div className="personal-bubbles">
        <Bubble
          icon={<FaSpotify size={20} />}
          href="https://open.spotify.com/user/1ph5m9wtztdax9f83imb9onlp?si=4cd9a50650e74770"
          label="Spotify"
        />
        <Bubble
          icon={<FaInstagram size={20} />}
          href="https://www.instagram.com/alichwan_/"
          label="Instagram"
        />
        <Bubble
          icon={<FaTelegram size={20} />}
          href="https://t.me/alichwan"
          label="Telegram"
        />
      </div>

      <div className="personal-content">
        <TextCard title={fill} text={fill} />
        <LinksCard
          title={fill}
          text={fill}
          items={[
            { label: t('Fill here 1', 'Rellenar aqui 1'), href: '#' },
            { label: t('Fill here 2', 'Rellenar aqui 2'), href: '#' },
            { label: t('Fill here 3', 'Rellenar aqui 3'), href: '#' },
          ]}
        />
      </div>
    </div>
  )
}

export default Personal
