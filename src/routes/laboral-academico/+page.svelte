<script>
	import Card from '../Card.svelte';
</script>

<svelte:head>
	<title>Laboral-académico</title>
	<meta name="description" content="About Pavel as a worker or researcher" />
</svelte:head>

<div class="wraper">
	<h1>Quién soy trabajando</h1>

	<Card title={'Estudio 🎓'} side="right" theme="dark">
		<p>
			Entré a <span class="highlight">College</span> en la Ponitificia Universidad Católica de Chile,
			luego articulé a <span class="highlight">Ingeniería Civíl Matemática y Computacional</span> con
			<span class="highlight">major en Data Science</span> y
			<span class="highlight">minor en Cuantificación de la Incertidumbre</span>. Efectivamente, son
			muchos nombres, pero básicamente me enfoco en solucionar problemas usando herramientas
			matemáticas, estadísticas y computacionales.
			<br /><br />
			Debido a esta travesía obtuve 2 licenciaturas. Actualmente (2023) estoy cursando el
			<span class="highlight">Magister en Ciencias de la Computación</span>
			<span class="highlight">Área Aprendizaje de Máquinas</span>.
		</p>
	</Card>

	<Card title={'Experiencia laboral 💼'} side="left" theme="dark">
		<p>
			Trabajé en <span class="highlight"
				>2 proyectos, junto a Martín Benimeli, para
				<a href="https://www.corfo.cl/" target="_blank" rel="noreferrer">CORFO</a></span
			>
			&ndash la Corporación de Fomento en Chile &ndash a la cual postulan miles de proyectos e ideas al
			año, las que buscan obtener fondos concursables para poder llevarse a cabo, .
			<br /><br />
			En el primero de estos trabajos (2020) trabajé como
			<span class="highlight"><i>Data Scientist Intern</i></span>
			y creé una <span class="highlight">métrica de similaridad </span>entre las postulaciones,
			tomando en cuenta los atributos que se pedían en todos los concursos de manera transversal. Esta
			métrica tenía por propósito detectar posibles casos de
			<span class="highlight">ideas o proyectos duplicados</span>. También se tenían que teneren
			considerados proyectos que fueron adjudicados (que ganaron los fondos) en años anteriores. Hubo
			un fuerte trabajo de
			<span class="highlight">procesamiento de lenguaje natural (NLP)</span> puesto que eran los
			campos de texto libre los que contaban con la mayor información sobre el proyecto.
			<br /><br />
			En el segundo de estos trabajos (2021) trabajé como
			<span class="highlight"><i>Machine Learning Intern</i></span>, teniendo que
			<span class="highlight">predecir información faltante de cada postulación</span>
			usando <span class="highlight">técnicas de machine learning</span>. La mayoría de los datos a
			predecir eran datos categóricos que no eran obligatorios de responder al momento de postular. En
			este caso también fue necesario usar <span class="highlight">técnicas de NLP</span> para poder
			obtener información del proyecto y poder inferir los atributos pedidos.
		</p>
	</Card>

	<Card title={''}  side="right" theme="dark">
		<p>
			Además de estos trabajos, estuve envuelto como <span class="highlight">Desarrollador Jr.</span> en un proyecto con un grupo de 8 personas para empezar
			a construir una <span class="highlight">API para la Corte Suprema de Chile</span>
			en un trabajo conjunto con el
			<span class="highlight"
				><a href="https://imfd.cl/">Instituto Milenio Fundamento de los Datos (IMFD)</a></span
			>. Esta API debía permitir a los usuarios definir, entrenar, usar, reajustar y eliminar 
			modelos de machine learning. Por ejemplo, para poder predecir las etiquetas de una sentencia judicial.
			En este trabajo estuve en la parte encargada de conectar los distintos modelos &ndash que otro grupo 
			había creado y pre-entrenado &ndash con los <i>endpoints</i> correspondientes.
		</p>
	</Card>

	<Card title={'Investigación 👨🏼‍🔬🔎'} side="right">
		<p>
		</p>
	</Card>

	<Card title={'Habilidades transversales 💪'} side="left">
		<p>
		</p>
	</Card>

	<Card title={'✨Extras✨'} side="right">
		<p>
		</p>
	</Card>

	<Card title={'Redes 🔗'} side="left">pass</Card>

	<Card title={'Nivel de Inglés 🇬🇧🇺🇸'} side="right">
		<p>
		</p>
	</Card>
	
	<Card title={'Herramientas 🛠️ > Datos 📊'} side="left">
		<p>
		</p>
	</Card>

	<Card title={'Herramientas > Machine Learning 🤖'} side="right">
		<p>
		</p>
	</Card>
	
	<Card title={'Herramientas > Desarrollo 🧑‍💻'} side="left">
		<p>
		</p>
	</Card>
</div>

<style>
	h1 {
		font-family: 'rockwell', monospace;
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
		animation-name: bw-change;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	@keyframes bw-change {
		0% {
			color: rgb(255, 255, 255);
		}
		50% {
			color: rgb(0, 0, 0);
		}
	}

	@media (max-width: 480px) {
		h1 {
			margin: 2em 0;
		}
	}
</style>
