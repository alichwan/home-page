<script>
	import Card from '../Card.svelte';
</script>

<svelte:head>
	<title>Laboral-académico</title>
	<meta name="description" content="About Pavel as a worker or researcher" />
</svelte:head>

<div class="wraper">
	<h1>Quién soy trabajando</h1>

	<Card title={'Links 🔗'} side="super-left" theme="dark">
		<ul class="redes">
			<li>
				<a target="_blank" rel="noreferrer" href="https://github.com/alichwan">
					<i class="fa-brands fa-github fa-3x" />
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://linkedin.com/in/pavelmedinajorquera">
					<i class="fa-brands fa-linkedin fa-3x" />
				</a>
			</li>
			<li class="CV">
				<a href="/CVAlexMedina.pdf" download>
					<i class="fa-solid fa-file fa-3x" />
					<span class="CV-text">CV</span>
				</a>
			</li>
		</ul>
	</Card>

	<Card title={'Formación académica 🎓'} side="left" theme="dark">
		<p>
			Entré a <span class="highlight">College</span> en la Pontificia Universidad Católica de Chile,
			luego articulé a
			<span class="highlight">Ingeniería Civil Matemática y Computacional</span>
			con
			<span class="highlight">major en Data Science</span> y
			<span class="highlight">minor en Cuantificación de la Incertidumbre</span>. Efectivamente, son
			muchos nombres, pero básicamente me enfoco en solucionar problemas usando herramientas
			matemáticas, estadísticas y computacionales. Debido a esta travesía obtuve 2 licenciaturas y un título. En enero de 2025 
			terminé el 
			<span class="highlight">Magíster en Ciencias de la Computación</span>
			<span class="highlight">Área Aprendizaje de Máquinas</span> y conseguí mi libertad.
		</p>
	</Card>

	<Card title={'Experiencia laboral 💼'} side="right" theme="dark">
		<p>
			Trabajé en <span class="highlight"
				>2 proyectos, junto a Martín Benimeli, para
				<a href="https://www.corfo.cl/" target="_blank" rel="noreferrer">CORFO</a></span
			>
			&ndash la Corporación de Fomento en Chile &ndash a la cuál postulan miles de proyectos e ideas
			al año, las que buscan obtener fondos concursables para poder llevarse a cabo.
			<br /><br />
			En el primero de estos trabajos (2020) trabajé como
			<span class="highlight"><i>Data Scientist Intern</i></span>
			y creé una <span class="highlight">métrica de similaridad</span> entre las postulaciones,
			tomando en cuenta los atributos que se pedían en todos los concursos de manera transversal.
			Esta métrica tenía por propósito detectar posibles casos de
			<span class="highlight">ideas o proyectos duplicados</span>. También se tenían que tener en
			consideración proyectos que fueron adjudicados (que ganaron los fondos) en años anteriores.
			Hubo un fuerte trabajo de
			<span class="highlight">procesamiento de lenguaje natural (NLP)</span> puesto que eran los
			campos de texto libre los que contaban con la mayor información sobre el proyecto.
			<br /><br />
			En el segundo de estos trabajos (2021) trabajé como
			<span class="highlight"><i>Machine Learning Intern</i></span>, teniendo que
			<span class="highlight">predecir información faltante de cada postulación</span>
			usando <span class="highlight">técnicas de predicción automática</span>. La mayoría de los
			datos a predecir eran datos categóricos que no eran obligatorios de responder al momento de
			postular. En este caso también fue necesario usar
			<span class="highlight">técnicas de NLP</span> para poder obtener información del proyecto y poder
			inferir los atributos pedidos.
		</p>
	</Card>

	<Card title={''} side="left" theme="dark">
		<p>
			Además de estos trabajos, estuve envuelto como <span class="highlight">Desarrollador Jr.</span
			>
			en un proyecto para empezar a construir una
			<span class="highlight">API para la Corte Suprema de Chile</span>
			en un trabajo conjunto con el
			<span class="highlight"
				><a target="_blank" rel="noreferrer" href="https://imfd.cl/"
					>Instituto Milenio Fundamento de los Datos (IMFD)</a
				></span
			>. Esta API debía permitir a los usuarios definir, entrenar, usar, ajustar y eliminar modelos
			de <i>machine learning</i>. Por ejemplo, para poder predecir las etiquetas de una sentencia
			judicial. En este trabajo estuve en la parte encargada de
			<span class="highlight">conectar los distintos modelos</span> &ndash que otro grupo había
			creado y pre-entrenado &ndash
			<span class="highlight">con los <i>endpoints</i> correspondientes</span>.
		</p>
	</Card>

	<Card title={''} side="right" theme="dark">
		<p>
			Desde abril del 2023 me encuentro trabajando como <span class="highlight">[On Call] Service Reliability Engineer (SRE)</span> en 
			<a 
				target="_blank"
				rel="noreferrer"
				href="https://home.zippedi.com/">
				<span class="highlight">Zippedi</span>
			</a>
			. La empresa se enfoca en darle información relevante a cadenas de retail 
			como Jumbo, Sodimac L.A., Unimarc, Kmart, etc. Información como: 
			los flejes (etiquetas de precio) que tienen un precio incorrecto, flejes 
			que están mal puestos, stockout de productos (se llevaron todos los que 
			estaban en los pasillos), etc. Esta información es 
			recolectada por un <span class="highlight">robot semi-autónomo</span> que 
			navega por los pasillos de los locales, 
			escaneandolos y comparando esto con la  data que maneja el local internamente.
			<br /><br />
			Mi labor consiste en evitar que los usuarios experimenten fallas, habilitar 
			canales de alertas internos que adviertan que algún robot está teniendo 
			problemas, agregar <i>features</i> en APIs ya creadas para poder preparar 
			el terreno para implementar las funcionalidades de monitoreo. Sin embargo, 
			me he visto haciendo varias tareas de análisis de datos, administrador 
			casual de la plataforma de <i>tickets</i>, entre otras. Pero estas tareas han 
			aparecido esporádicamente.
		</p>
	</Card>

	<Card title={'Investigación 👨🏼‍🔬🔎'} side="left" theme="dark">
		<p>
			Investigué, en mi magister, cómo pasar desde ejemplos etiquetados de
			<span class="highlight"><i>traces</i> a un autómata</span>. Usando APTAs
			como representación intermedia.
			<br /><br />
			Esta investigación la realicé bajo la supervisión de
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.ing.uc.cl/academicos-e-investigadores/jorge-andres-baier-aranda/"
				>Jorge Baier</a
			>
			y
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.ing.uc.cl/academicos-e-investigadores/rodrigo-andres-toro-icarte/"
				>Rodrigo Toro</a
			>, en conjunto con 
			<a href="https://www.ing.uc.cl/academicos-e-investigadores/cristian-andres-hinostroza-espinoza/">
			Cristian Hinostroza</a>
			, quien tuvo una investigación transversal a la mía.
			(Update: terminó el master y ahora es profe del DCC UC)
		</p>
	</Card>

	<Card title={'Habilidades transversales 💪'} side="right" theme="dark">
		<p>
			Soy <span class="highlight">curioso</span>, me gusta aprender. Tengo
			<span class="highlight">pensamiento analítico</span>
			y constantemente <span class="highlight">busco problemas que resolver</span> o
			<span class="highlight">piezas que no encajan</span>
			en una situación. Soy bueno <span class="highlight">trabajando en equipo</span>. Finalmente,
			soy
			<span class="highlight">rápido para aprender cosas</span>.
		</p>
	</Card>

	<Card title={'✨Extras✨'} side="left" theme="dark">
		<p>
			Dentro de los años que estuve en la universidad he asistido a numerosas charlas en los grupos
			en los que me encuentro:
			<a target="_blank" rel="noreferrer" href="https://cenia.cl/">CENIA</a>,
			<a target="_blank" rel="noreferrer" href="https://ialab.ing.puc.cl/">IALab</a> e
			<a target="_blank" rel="noreferrer" href="https://imfd.cl/">IMFD</a>. Grupos en donde he
			conocido gente maravillosa que me ha orientado cuando tenía dudas, no solo de inteligencia
			artificial.
		</p>
	</Card>

	<Card title={'Herramientas 🛠️ > Desarrollo 🧑‍💻'} side="left" theme="dark">
		<ul class="regular-list">
			<li>Python: Flask</li>
			<li>Google Cloud Platform</li>
			<li>HTML/CSS/JS</li>
			<li>Docker</li>
		</ul>
	</Card>

	<Card title={'Herramientas 🛠️ > Datos 📊'} side="right" theme="dark">
		<ul class="regular-list">
			<li>Python: Numpy, Pandas, Matplotlib, Seaborn</li>
			<li>PostgreSQL</li>
			<li>DBT</li>
			<li>Airflow</li>
			<li>R/RStudio</li>
			<li>MS Excel</li>
		</ul>
	</Card>

	<Card title={'Herramientas 🛠️ > Machine Learning 🤖'} side="left" theme="dark">
		<ul class="regular-list">
			<li>Python: SkLearn, Keras, TensorFlow</li>
		</ul>
	</Card>

</div>

<style>
	h1 {
		font-family: 'rockwell', monospace;
	}

	.regular-list li {
		margin-top: 10px;
		padding-left: 1em;
		list-style-type: '⚙️';
		color: var(--work-color);
	}

	.highlight {
		background-color: rgba(255, 90, 90, 0.7);
	}

	p {
		color: var(--work-color);
	}

	ul.redes {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.redes li {
		position: relative;
		height: 100%;
		margin: 0 5%;
	}

	a {
		color: rgb(255, 255, 255);
	}

	.redes a:hover {
		text-decoration: none;
	}

	@keyframes bw-change {
		0% {
			color: rgb(255, 255, 255);
		}
		60% {
			color: rgb(0, 0, 0);
		}
	}

	@media (max-width: 480px) {
		h1 {
			margin: 2em 0;
		}
	}
</style>
