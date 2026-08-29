import { File } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import Bubble from '../components/Bubble'
import TextCard from '../components/TextCard'
import './Professional.css'

function Professional() {
  const { t } = useLanguage()

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
          href={t('/assets/CV_AlexPavelMJ_EN.pdf', '/assets/CV_AlexPavelMJ_ES.pdf')}
          label={t('CV (English)', 'CV (Español)')}
          text="CV"
        />
      </div>

      <div className="professional-content">
        <TextCard
        title={t("About me", "Sobre mí")}
        text={t(
          <>
            I am a professional passionate about <span className="highlight">the world of software</span>, <span className="highlight">mathematics</span>, and <span className="highlight">solving complex problems</span>. I have worked as a Service Reliability Engineer, Data Scientist, and developer, which has allowed me to approach projects from different technical perspectives and adapt to a wide range of challenges.
            <br /><br />
            I consider myself a <span className="highlight">critical thinker</span>, <span className="highlight">solution-oriented</span>, and strongly motivated to <span className="highlight">continuously learn and expand my horizons</span>. I enjoy working in teams and sharing ideas, although I can also take ownership of responsibilities independently when the context requires it. I especially value work quality, careful code review, and well-informed decision-making.
            <br /><br />
            I recognize that sometimes <span className="highlight">I find it difficult to delegate or ask for help</span> when I feel I can solve something on my own, and at other times <span className="highlight">I tend to ask many questions before tackling a problem</span> in order to fully understand the context. <span className="highlight">I often use AI-based tools</span>, such as LLMs, to optimize repetitive tasks or explore ideas, while always <span className="highlight">maintaining my own technical judgment, thorough review, and responsibility</span> for the final outcome.
          </>
          ,
          <>
            Soy un profesional apasionado por <span className="highlight">el mundo del software</span>, las <span className="highlight">matemáticas</span> y la <span className="highlight">resolución de problemas complejos</span>. He trabajado como Service Reliability Engineer, Data Scientist y desarrollador, lo que me ha permitido abordar proyectos desde distintas perspectivas técnicas y adaptarme a diferentes desafíos.
            <br /><br />
            Me considero una persona de <span className="highlight">pensamiento crítico</span>, <span className="highlight">orientada a soluciones</span> y con una fuerte motivación por <span className="highlight">aprender continuamente y expandir mis horizontes</span>. Disfruto trabajar en equipo y compartir ideas, aunque también puedo asumir responsabilidades de forma autónoma cuando el contexto lo requiere. Valoro especialmente la calidad del trabajo, la revisión cuidadosa del código y la toma de decisiones fundamentadas.
            <br /><br />
            Reconozco que a veces <span className="highlight">me cuesta delegar o pedir ayuda</span> cuando siento que puedo resolver algo por mi cuenta, y en otras ocasiones <span className="highlight">tiendo a hacer muchas preguntas antes de abordar un problema</span> para entender bien el contexto. <span className="highlight">Suelo utilizar herramientas basadas en IA</span>, como LLMs, para optimizar tareas repetitivas o explorar ideas, pero siempre <span className="highlight">manteniendo criterio técnico propio, revisión exhaustiva y responsabilidad</span> sobre el resultado final.
          </>
        )}  
        />
        <TextCard
        title={t("Education", "Educación")}
        text={
          t(
            <>
              I entered <span className="highlight">College of Natural Sciences and Mathematics</span> at the <span className="highlight">Pontifical Catholic University of Chile</span> in 2015, and in 2020 I obtained a <span className="highlight">Bachelor's Degree in Natural Sciences and Mathematics</span>. Additionally, due to my specialization, I also obtained a <span className="highlight">Bachelor's Degree in Engineering Sciences</span> during the same period.
              <br /><br />
              I later articulate into the Civil Engineering program at the same university, obtaining the <span className="highlight">Professional Degree in Mathematical and Computational Civil Engineering</span>, with a <span className="highlight">Major in Data Science</span> and a <span className="highlight">Minor in Uncertainty Quantification</span>, during the 2021-2025 period.
              <br /><br />
              In parallel, and as part of my degree requirements, I conducted a research project between 2022 and 2025, through which I obtained an <span className="highlight">MSc in Engineering Sciences | Computer Science Area: Machine Learning</span>. This marked the end of my academic journey.
            </>
            ,
            <>
              Entré a College de Ciencias Naturales y Matemáticas en 2015, en la Pontificia Universidad Católica de Chile, y obtuve en 2020 la <span className="highlight">Licenciatura en Ciencias Naturales y Matemáticas</span>. Además, debido a mi especialización, también obtuve la <span className="highlight">Licenciatura en Ciencias de la Ingeniería</span> durante el mismo período.
              <br /><br />
              Posteriormente, articulé a Ingeniería en la misma universidad, obteniendo el <span className="highlight">Título de Ingeniería Civil Matemática y Computacional</span>, con <span className="highlight">Major en Ciencia de Datos</span> y <span className="highlight">Minor en Cuantificación de la Incertidumbre</span>, en el período 2021-2025.
              <br /><br />
              Paralelamente, y como instrumento de titulación, desarrollé una investigación entre 2022 y 2025, con la que obtuve un <span className="highlight">MSc en Ciencias de la Ingeniería | Área Ciencias de la Computación: Aprendizaje de Máquinas</span>. Esto último marcó el final de mi recorrido académico.
            </>
            )
          } />
        <TextCard
        title={t("Experience", "Experiencia")}
        text={t(
            <>
            During my time at university, I had the opportunity to complete three internships before entering the workforce.
            <br /><br />
            From <span className="highlight">August to December 2020</span>, I worked as a <span className="highlight">Junior Data Scientist</span> at the <span className="highlight">Chilean Economic Development Agency (CORFO)</span>, an institution that provides funding through competitions and different calls for proposals, depending on the nature of each project. In that context, they needed to create a mechanism to <span className="highlight">detect duplicate projects</span>: whether it was the same project, or one with slight changes, submitted to different calls; highly similar projects; projects that had already received funding in the past; among other cases. With my team, <span className="highlight">we created a similarity metric</span> based on the project data that was requested across all calls. The nature of this data was varied, so we even had to create text embeddings using natural language processing (NLP) in order to vectorize textual data. The result was an alert system that identified projects exceeding a certain similarity threshold for subsequent human review.
            <br /><br />
            From <span className="highlight">January to March 2021</span>, I worked as a <span className="highlight">Junior Developer</span> on a joint project between the <span className="highlight">IMFD, Millennium Institute for Foundational Research on Data</span>, and the <span className="highlight">Supreme Court of Chile</span>. This work consisted of creating a REST API so that certain members of the Supreme Court could train different artificial intelligence models using data selected by them. I was <span className="highlight">responsible for connecting the AI models to the different endpoints</span>. The final product was the requested API. This project was the prototype of what is now <a href="https://www.dash-ai.com/" target="_blank" rel="noreferrer">DashAI</a>.
            <br /><br />
            My final internship was once again with <span className="highlight">CORFO</span>, this time as a <span className="highlight">Junior Machine Learning Engineer</span>, from <span className="highlight">January to July 2022</span>. In this opportunity, our role was to automate the completion of missing data in applications based on the fields that did contain information. We once again used <span className="highlight">natural language processing to create multidimensional and multilabel classifiers</span>. The result was the completion of a large portion of the missing data in the applications.
            <br /><br />
            In parallel with writing my master's thesis, during my final years of study, I worked <span className="highlight">from April 2023 to April 2026</span> as a <span className="highlight">Service Reliability Engineer (SRE)</span> at <span className="highlight">Zippedi</span>, a company dedicated to creating “digital twins” of supermarkets and retail stores around the world through autonomous robots that scan store aisles. My role consisted of <span className="highlight">reducing the number of incidents perceived by customers</span>. I did this through robot <span className="highlight">monitoring and traceability</span>, <span className="highlight">creating early alerts</span> based on the reported status of each robot, or on the absence of such reports. I was also responsible for <span className="highlight">creating automations and developing or maintaining internal tools for the team</span>, such as Slack notifications, calls using Twilio, service migrations to Terraform, and the creation of data pipelines using DBT/Airflow, among other tasks.
          </>
            ,
            <>
              En mis tiempos de universidad tuve la oportunidad de hacer 3 prácticas antes de salir a trabajar.
              <br /><br />
              De <span className="highlight">agosto a diciembre de 2020</span> trabajé como <span className="highlight"><i>Junior Data Scientist</i></span> en la <span className="highlight">Corporación de Fomento de la Producción de Chile (CORFO)</span>, institución que entrega fondos por medio de concursos y distintas convocatorias, dependiendo de la naturaleza de los proyectos. En ese contexto, necesitaban crear un mecanismo para <span className="highlight">detectar proyectos duplicados</span>: ya fuera el mismo proyecto, o uno con leves cambios, postulado a distintas convocatorias; proyectos muy similares; proyectos que ya habían ganado fondos en el pasado, entre otros casos. Con mi grupo <span className="highlight">creamos una métrica de similitud</span> basada en los datos de los proyectos que se pedían transversalmente en todas las convocatorias. La naturaleza de estos datos era variada, por lo que incluso tuvimos que crear <i>embeddings</i> de texto mediante procesamiento de lenguaje natural (<i>NLP</i>) para poder vectorizar datos textuales. El resultado fue un sistema de alerta que entregaba los proyectos que superaban cierto umbral de similitud para una posterior revisión humana.
              <br /><br />
              De <span className="highlight">enero a marzo de 2021</span> trabajé como <span className="highlight">Desarrollador Junior</span> en un proyecto conjunto entre el <span className="highlight">IMFD, Instituto Milenio Fundamentos de los Datos</span>, y la <span className="highlight">Corte Suprema de Chile</span>. Este trabajo consistió en crear una API REST para que ciertos miembros de la Corte Suprema pudieran entrenar distintos modelos de inteligencia artificial usando datos seleccionados por ellos. Yo era el <span className="highlight">encargado de conectar los modelos de IA con los distintos endpoints</span>. El producto final fue la API solicitada. Este proyecto fue el prototipo de lo que ahora es <a href="https://www.dash-ai.com/" target='_blank'>DashAI</a>.
              <br /><br />
              Mi última práctica fue nuevamente con <span className="highlight">CORFO</span>, esta vez como <span className="highlight"><i>Machine Learning Engineer Junior</i></span>, desde <span className="highlight">enero hasta julio de 2022</span>. En esta oportunidad, nuestro rol fue automatizar el llenado de datos faltantes en las postulaciones a partir de los campos que sí tenían información. Volvimos a hacer uso de <span className="highlight">procesamiento de lenguaje natural para crear clasificadores multidimensionales y multietiqueta</span>. El resultado fue completar gran parte de los datos faltantes en las postulaciones.
              <br /><br />
              En paralelo a la escritura de mi tesis de magíster, durante mis últimos años de estudio, trabajé <span className="highlight">desde abril de 2023 hasta abril de 2026</span> como <span className="highlight">Service Reliability Engineer (SRE)</span> en <span className="highlight">Zippedi</span>, empresa dedicada a crear “gemelos digitales” de supermercados y tiendas de retail alrededor del mundo por medio de robots autónomos que escanean los pasillos. Mi rol consistió en <span className="highlight">disminuir el número de incidentes percibidos por el cliente</span>. Esto lo hice mediante <span className="highlight">monitoreo y trazabilidad</span> de los robots, <span className="highlight">creando alertas tempranas</span> basadas en el estado reportado de cada robot, o en la ausencia de dicho reporte. Asimismo, me encargué de <span className="highlight">crear automatizaciones y de desarrollar o mantener herramientas internas del equipo</span>, como notificaciones vía Slack, llamadas usando Twilio y migraciones de servicios a Terraform, creación de <i>pipelines</i> de datos usando DBT/Airflow, entre otras tareas.
            </>
          )}  
        />
        <TextCard
        title={t("Research", "Investigación")}
        text={t(
          <>
            As an act of self-love, I completed a <span className="highlight">Master's degree in Engineering Sciences: Computer Science, specializing in Machine Learning</span>, which concluded in 2025 with a thesis titled “<a href="https://repositorio.uc.cl/handle/11534/103152" target="_blank" rel="noreferrer">Comparison of MILP, SAT, and ASP for the Synthesis of Minimum Automata from Traces</a>”.
            <br /><br />
            In this thesis, I address the problem of taking traces (sequences of actions) labeled as positive or negative, and synthesizing their deterministic finite automaton (DFA) with the minimum number of states. To do so, I compare three mechanisms: Mixed-Integer Linear Programming, MILP; translating the problem into SAT; and, finally, using Answer Set Programming, ASP/Clingo.
          </>
          ,
          <>
            Como acto de amor propio, hice un <span className="highlight">magíster en Ciencias de la Ingeniería: Ciencias de la Computación, área de Aprendizaje de Máquinas</span>, que concluyó en 2025 con una tesis titulada “<a href="https://repositorio.uc.cl/handle/11534/103152" target='_blank'>Comparación de MILP, SAT y ASP para la síntesis de autómatas mínimos a partir de trazas</a>”.
            <br /><br />
            En ella abordo el problema de tomar trazas, es decir, secuencias de acciones etiquetadas positiva y negativamente, y sintetizar su autómata finito determinista, o DFA por sus siglas en inglés, con la mínima cantidad de estados. Para ello, comparo tres mecanismos: Programación Lineal Entera Mixta, MILP; la traducción del problema a SAT; y, finalmente, el uso de Programación de Conjuntos de Respuestas, ASP/Clingo.
          </>
        )}  
        />
        <TextCard
        title={t("Skills", "Habilidades")}
        text={
          <div className="skills-groups">
            <div className="tag-group">
              <span className="tag-group-title">{t("Development", "Desarrollo")}</span>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">SQL</span>
                <span className="tag">Bash</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">GitLab</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">Data Science & Machine Learning</span>
              <div className="tag-list">
                <span className="tag">Pandas</span>
                <span className="tag">NumPy</span>
                <span className="tag">Scikit-learn</span>
                <span className="tag">PyTorch</span>
                <span className="tag">NLP</span>
                <span className="tag">Matplotlib</span>
                <span className="tag">Seaborn</span>
                <span className="tag">Plotly Express</span>
                <span className="tag">DBT</span>
                <span className="tag">Airflow</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">Backend & APIs</span>
              <div className="tag-list">
                <span className="tag">Flask</span>
                <span className="tag">REST APIs</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">Frontend</span>
              <div className="tag-list">
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">HTML/CSS</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">Cloud & DevOps</span>
              <div className="tag-list">
                <span className="tag">GCP</span>
                <span className="tag">Docker</span>
                <span className="tag">Terraform</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">{t("Logic Programming", "Programación Lógica")}</span>
              <div className="tag-list">
                <span className="tag">Clingo/ASP</span>
              </div>
            </div>

            <div className="tag-group">
              <span className="tag-group-title">{t("Languages", "Idiomas")}</span>
              <div className="tag-list">
                <span className="tag">{t("Spanish (Native)", "Español (Nativo)")}</span>
                <span className="tag">{t("English (B2)", "Inglés (B2)")}</span>
                <span className="tag">{t("Dutch (A1)", "Neerlandés (A1) ")}</span>
              </div>
            </div>
          </div>
        }
        />
      </div>
    </div>
  )
}

export default Professional
