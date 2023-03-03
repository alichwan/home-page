<script>
	import Card from '../Card.svelte';
</script>

<svelte:head>
	<title>Persona</title>
	<meta name="description" content="About Pavel as a person" />
</svelte:head>

<div class="wrapper">
	<h1>Quién soy como humano</h1>

	<Card title={'Links 🔗'} side="left">
		<ul class="redes">
			<li>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/alichwan_/"
					><i class="fa-brands fa-instagram fa-3x" /></a
				>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://t.me/alichwan"
					><i class="fa-brands fa-telegram fa-3x" /></a
				>
			</li>
		</ul>
	</Card>

	<Card title={'¿Quién soy?👤❓'} side="left">
		<p>
			Soy Alex Pavel Medina Jorquera, Pavel para los amigos. Nacido y crecido en Santiago de Chile.
			Mayor de 3 hermanos. Me gustan el invierno y el otoño. Mis animales favoritos son los gatos y
			los zorros. Paso la mayor parte del día en el computador, en el celular o soñando despierto.
		</p>
	</Card>

	<Card title={'Series 🎬, música 🎶 y libros 📚'} side="right">
		<p>
			Si bien tengo pareja, la distancia hace que la mayor parte del día la pase con mi familia,
			viendo memes o viendo series. ¿Series?, más bien animé [link a seccion de anime]. Si bien no
			leo mucho, tengo mis favoritos porque cuando era pequeño si que intentaba leer cosas ... .
			Creo que una de las cosas que permite conocer a alguien es la música que uno escucha,
			aqui[link] están algunas listas de spotify que más escucho.
		</p>
	</Card>

	<Card title={'Anime 🍡 y derivados 🎏'} side="left">
		<p>
			Así es, soy otaku. No suelo hacer muchas cosas que encajen en el arquetipo como ir a
			convenciones (fuia a una) o hacer cosplay (creo que se cuentan con 1 mano las veces que lo
			hice). Tampoco compro mucha mercancia. Sin embargo, ver animes y escuchar musica derivada de
			estos es lo que usa gran parte de mi tiempo de ocio. Habré visto cerca de 800 animes, de los
			cuales me vi en la necesidad de leer unos 50 mangas (que en verdad no son tantos). Si pasaste
			por las listas de spotify, habrás notado que una de ellas tiene 24 horas de pura música de ese
			estilo. Y esque me encanta.
		</p>
	</Card>

	<Card title={'✨Extras✨'} side="right">
		<ul class="regular-list">
			<li>Fecha de nacimiento: 25 Feb 1997 11:23</li>
			<li>Zodiaco occidental: Sol>Piscis, Luna>Libra, Ascendente>Aries</li>
			<li>Zodiaco chino: Buey de agua</li>
			<li>MBTI: ENTP</li>
			<li>
				<a href="https://www.wizardingworld.com/">Wizardingworld</a>: Casa>Slytherin,
				Patronus>Ardilla
			</li>
			<li>Fun fact: no creo en la mayoría de esta sección pero me divierte</li>
		</ul>
	</Card>

	<Card title={'Pero...no todo es tan lindo 😞'} side="left" theme="dark">
		<p>
			Si bien uno intenta mostrar la cara linda para no espantar a la gente, si estás en esta página
			es porque al menos sentiste la curiosidad de saber quién soy. Y en reconocimiento de haber
			llegado tan abajo, no te puedo no mostrar algúnas cosas menos superficiales que me han pasado,
			que pienso, o que siento. Quizá mucho de lo que aquí hay es nada en comparación a otras
			realidades, pero "cada uno tiene sus propios demonios".
		</p>
	</Card>

	<Card title={''} side="right" theme="dark">
		<p>
			Partamos por el comienzo. Si bien conté que soy de Chile, no conté que nunca he salido del
			país. No es la gran cosa y en general no me afecta, pero a veces me acompleja. También, al ser
			el mayor de 3 hermanos, siento un poco el miedo de no ser lo suficientemente bueno para que
			estén orgullosos de mí. Quiero creer que muchos errores que he cometido sirvan para que tengan
			cierto 'márgen' y no tengan que compararse constantemente con la figura de un 'hermano
			perfecto', pero puede que se me haya pasado la mano. Por otra parte, ser hijo de padres
			separados me puso en la situación de tener que asumir papeles un poco molestos.
		</p>
	</Card>

	<Card title={''} side="left" theme="dark">
		<p>
			Si te fijaste en el CV o la seccion laboral, habrás notado que estuve 9 años en la
			universidad. Gran parte de eso se debe a que no entendía quién era, qué quería y para qué era
			bueno. Entré a CollegeUC el 2015 porque no me dió el puntaje para entrar directamente a
			ingeniería. Algo bueno de esto: choqué con muros pequeños. Vi a mucha gente reprobar cursos de
			primer año de la carrera de ingeniería porque no estaban listos para la universidad, estar en
			College me permitió asimilar lo que era la educación superior de manera menos dolorosa. Con el
			tiempo igual fui reprobando ramos porque creia que eran lo que quería. Hasta que terminé
			encontrando las cosas por las que, para mi, sí valía la pena pasar noches sin dormir.
		</p>
	</Card>

	<Card title={'🤷‍♂️'} side="right" theme="dark">
		<p>
			Estos son solo algúnos pedazos de mi, no iba a poner todo, no es una autobiografía. Pero
			almenos sabes que tambien soy humano, que también tengo cosas que me preocupan y me molestan.
			Espero ser mejor persona a medida que envejezco, o al menos lo intento.
		</p>
	</Card>

	<Card title={'Filosofía 🧐'} side="left" theme="dark">
		<ul>
			<li><h4>Nunca te rindas cuando encuentras lo que quieres</h4></li>
			<li><h4>Cada uno tiene sus demonios, se amable</h4></li>
			<li><h4>Otros</h4></li>
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
		list-style-type: '⭐️';
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
