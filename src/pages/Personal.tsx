import { FaSpotify, FaInstagram, FaTelegram, FaGoodreads} from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import Bubble from '../components/Bubble'
import TextCard from '../components/TextCard'
import LinksCard from '../components/LinksCard'
import './Personal.css'

function Personal() {
  const { t } = useLanguage()

  return (
    <div className="personal-page">
      <h1 className="page-title">
        {t('Who I really am', 'Quién soy realmente')}
      </h1>

      <div className="personal-bubbles">
        <Bubble
          icon={<FaInstagram size={20} />}
          href="https://www.instagram.com/alichwan_/"
          label="Instagram"
        />
        <Bubble
          icon={<FaSpotify size={20} />}
          href="https://open.spotify.com/user/1ph5m9wtztdax9f83imb9onlp"
          label="Spotify"
        />
        <Bubble
          icon={<FaTelegram size={20} />}
          href="https://t.me/alichwan"
          label="Telegram"
        />
        <Bubble
          icon={<FaGoodreads size={20} />}
          href="https://www.goodreads.com/user/show/174932428-pavel-medina"
          label="Goodreads"
        />
      </div>

      <div className="personal-content">
        <TextCard 
        title={t("I'm Pavel", 'Soy Pavel')} 
        text={t(
          <>
            I'm Alex Pavel Medina Jorquera, born and raised in Santiago, Chile. I'm the oldest of three siblings. If I'm not talking with my girlfriend or working, I'm probably watching anime, reading, or playing guitar.
            <br /><br />
            Although I've watched more than 1000 anime, I don't usually do very "otaku" things like buying anime merch or going to events. I don't read much manga either, but I still read some every once in a while.
            <br /><br />
            Since my social battery tends to run out fast, I don't go out that much. Still, when I do go out, I love talking to people. If there's an activity involved, even better. I really like small talk, but I like it even more once it stops being "small".
            <br /><br />
            I have friends I made in school, university, and life, but I don't talk to them as much as I'd like to, mostly because everyone's already doing their own thing by now. Still, I like to stay in touch with them, even if it's just sending each other memes on Instagram.
          </>
          ,
          <>
            Soy Alex Pavel Medina Jorquera, nacido y criado en Santiago, Chile. Soy el mayor de tres hermanos. Si no estoy hablando con mi novia ni trabajando, probablemente esté viendo animé, leyendo o tocando la guitarra.
            <br /><br />
            Si bien he visto más de 1000 animes, no suelo hacer cosas tan “otaku” como comprar mercancía de anime o ir a eventos. Tampoco leo tanto manga, pero igual leo de vez en cuando.
            <br /><br />
            Como mi batería social suele morir rápido, no salgo tanto. Sin embargo, cuando salgo, me encanta hablar con la gente. Si hay una actividad de por medio, mejor. Me gusta mucho el small talk, pero me gusta aún más cuando deja de ser “small”.
            <br /><br />
            Tengo amigos que hice en el colegio, la universidad y la vida, pero no hablo con ellos tanto como me gustaría, principalmente porque cada uno ya está haciendo lo suyo. No obstante, me gusta mantenerme en contacto con ellos, aunque sea mandándonos memes por Instagram.
          </>
        )}
        />
        <LinksCard
          title={t("Music", "Música")}
          text={t(
            <>
              I firmly believe that a good way to get to know someone is through the music they enjoy.
              <br /><br />
              Although I listen to much more than this, these are some of my most-listened-to playlists. Some are more personal, while others are more of a “selection” of songs:
            </>
            ,
            <>
            Creo, firmemente, que una buena manera de conocer a una persona es a través de la música que disfruta. 
            <br /><br />
            Si bien escucho mucho más que esto, estas son algunas de mis listas más escuchadas, algúnas más personales, otras son más una 'selección' de canciones:
            </>
          )}
          emoji='🎵'
          items={[
            { label: t('Anime openings and endings', 'Openings y endings de anime'), href: 'https://open.spotify.com/playlist/6xj0cXZMzwLyRdovDMrwYC' },
            { label: t('My mix of random songs', 'Mix de canciones más normales'), href: 'https://open.spotify.com/playlist/3yZt5gYLmj6w5F7N03qkaW' },
            { label: 'Mostly Memes', href: 'https://open.spotify.com/playlist/7t1daRoM6jDw5jPrmiCFrJ' },
            { label: 'Undertale', href: 'https://open.spotify.com/playlist/3Gqrb73T4tgft58StkKLCR' },
            { label: 'Cosi', href: 'https://open.spotify.com/playlist/3Eebckafo842FMJKS4c0ij' },
            { label: 'Imagine Dragons', href: 'https://open.spotify.com/playlist/7am0IPVoipi0ujxJKiQX4J' },
            { label: 'Lindsey Stirling', href: 'https://open.spotify.com/playlist/5Webd14BDU9Pq3KRzE5Mq5' },
            { label: 'Bad Bunny', href: 'https://open.spotify.com/playlist/2M7dPPKGHvCGKHJmDe39Ab' },
            { label: 'Julieta Venegas', href: 'https://open.spotify.com/playlist/61PInB8CNuWYjAbSqGBjAq' },
          ]}
        />
        <LinksCard
          title={t("Books", "Libros")}
          text={t(
            <>
              I love reading, but I'm bad at it (at some point, I get sleepy 🥲). That said, I do enjoy collecting books, sometimes technical ones, but mostly fiction.
              <br /><br />
              Although you can visit my <a href="https://www.goodreads.com/user/show/174932428-pavel-medina">Goodreads</a> in case you want to explore further, these are my favorites:
            </>
            ,
            <>
              Me encanta leer, pero soy malo para leer (en algún punto me da sueño 🥲). Eso sí, me gusta acumular libros, a veces técnicos, pero en su mayoría de ficción.
              <br /><br />
              Aunque pueden visitar mi <a href="https://www.goodreads.com/user/show/174932428-pavel-medina">Goodreads</a> si quieren indagar más, estos son mis regalones:
            </>
          )}
          emoji='🔖'
          items={[
            { label: t(
              <>
              The whole "<i>Percy Jackson and the Olympians</i>" saga
              <br /> — Rick Riordan
              </>
              ,
              <>
              Toda la saga "<i>Percy Jackson y los dioses del Olimpo</i>"
              <br /> — Rick Riordan
              </>
              )
            },
            { label: t(
              <>
              The whole "<i>The Heroes of Olympus</i>" saga
              <br /> — Rick Riordan
              </>
              ,
              <>
              Toda la saga "<i>Los héroes del Olimpo</i>"
              <br /> — Rick Riordan
              </>
              )
            },
            { label: t(
              <>
              The whole "<i>The Trials of Apollo</i>" saga
              <br /> — Rick Riordan
              </>
              ,
              <>
              Toda la saga "<i>Las pruebas de Apolo</i>"
              <br /> — Rick Riordan
              </>
              )
            },
            { label: t(
              <>
              The whole "<i>Arc of a Scythe</i>" series
              <br /> — Neal Shusterman
              </>
              ,
              <>
              Toda "<i>El arco de la guadaña</i>"
              <br /> — Neal Shusterman
              </>
              )
            },
            { label: t(
              <>
              The Da Vinci Code
              <br /> — Dan Brown
              </>
              ,
              <>
              <i>El código Da Vinci</i>
              <br /> — Dan Brown
              </>
              ) 
            },
            { label: t(
              <>
              Joyland
              <br /> — Stephen King
              </>
              ,
              <>
              <i>Joyland</i>
              <br /> — Stephen King
              </>
              ) 
            },
            { label: t(
              <>
              <i>The Little Prince</i>
              <br /> — Antoine de Saint-Exupéry
              </>
              ,
              <>
              <i>El principito</i>
              <br /> — Antoine de Saint-Exupéry
              </>
              )
            },
            { label: t(
              <>
              <i>One Hundred Years of Solitude</i>
              <br /> — Gabriel García Márquez
              </>
              ,
              <>
              <i>Cien años de soledad</i>
              <br /> — Gabriel García Márquez
              </>
              ) },
          ]}
        />
        <LinksCard
          title={t("Trivia", "Curiosidades")}
          emoji='✨'
          items={[
            { label: t(
            <>
            <strong>Western zodiac</strong>: Pisces (☀︎), Libra (☾), Aries (⇡)
            </>
            ,
            <>
            <strong>Zodíaco occidental</strong>: Piscis (☀︎), Libra (☾), Aries (⇡)
            </>
            ) },
            { label: t(
            <>
            <strong>Chinese zodiac</strong>: Water Ox
            </>
            ,
            <>
            <strong>Zodíaco chino</strong>: Buey de agua
            </>
            ) },
            { label: t(
            <>
            <strong>MBTI</strong>: ENTP
            </>
            ,
            <>
            <strong>MBTI</strong>: ENTP
            </>
            ) },
            { label: t(
            <>
            <strong>Hogwarts house</strong>: Slytherin
            </>
            ,
            <>
            <strong>Casa de Hogwarts</strong>: Slytherin
            </>
            ) },
            { label: t(
            <>
            <strong>Patronus</strong>: Squirrel
            </>
            ,
            <>
            <strong>Patronus</strong>: Ardilla
            </>
            ) },
            { label: t(
            <>
            <strong>Favorite animals</strong>: Cats and foxes
            </>
            ,
            <>
            <strong>Animales favoritos</strong>: Gatos y zorros
            </>
            ) },
          ]}
        />
      </div>
    </div>
  )
}

export default Personal
