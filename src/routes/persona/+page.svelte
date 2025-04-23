<script>
	import Card from '../Card.svelte';
</script>

<svelte:head>
	<title>Persona</title>
	<meta name="description" content="About Pavel as a person" />
</svelte:head>

<div class="wrapper">
	<h1>Quién soy como humano</h1>

	<Card title={'Links 🔗'} side="super-left">
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
			<li>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://open.spotify.com/user/1ph5m9wtztdax9f83imb9onlp?si=640ccf42695549b9"
					><i class="fa-brands fa-spotify fa-3x" /></a
				>
			</li>
		</ul>
	</Card>

	<Card title={'¿Quién soy?👤❓'} side="left">
		<p>
			Mi nombre es Alex Pavel Medina Jorquera &mdash Pavel para los amigos. Nací y crecí en Santiago
			de Chile. Mayor de 3 hermanos. Me gustan el invierno y el otoño. Mis animales favoritos son
			los gatos y los zorros. Paso gran parte del día en el computador, en el celular o soñando
			despierto.
		</p>
	</Card>

	<Card title={'Series 🎬, libros 📚 y música 🎶'} side="right">
		<h2><b>Series 🎬</b></h2>
		<p>
			Paso el tiempo con mi familia o mi novia, viendo memes o
			viendo series. ¿Series?, más bien <a href="#anime-section">anime</a>.
		</p>
		<br />
		<h2><b>Libros 📚</b></h2>
		<p>
			Si bien no leo muchos libros, tengo mis favoritos porque cuando era pequeño sí que intentaba
			leer cosas. Algunos de mis favoritos serían:
		</p>
		<ul class="book-list">
			<li>"<i>The House of Hades (The Heroes of Olympus)</i>" &ndash Rick Riordan</li>
			<li>"<i>Scythe</i>" &ndash Neal Shusterman</li>
			<li>"<i>El código Da Vinci</i>" &ndash Dan Brown</li>
			<li>"<i>Joyland</i>" &ndash Stephen King</li>
			<li>"<i>La llamada de Cthulhu</i>" &ndash H.P. Lovecraft</li>
			<li>"<i>El principito</i>" &ndash Antoine de Saint-Exupéry</li>
			<li>"<i>Cien años de soledad</i>" &ndash Gabriel García Márquez</li>
		</ul>
		<br />
		<h2><b>Música 🎶</b></h2>
		<p>
			Creo que una de las cosas que permiten conocer a alguien es la música que uno escucha, estas
			son algunas listas de spotify que más escucho:
		</p>
		<ul class="music-list">
			<li>
				<a
					href="https://open.spotify.com/playlist/3yZt5gYLmj6w5F7N03qkaW?si=1db06a4bc88045ae"
					target="_blank"
					rel="noreferrer"
				>
					Música general y gustos de mi juventud
				</a>
			</li>
			<li>
				<a
					href="https://open.spotify.com/playlist/7t1daRoM6jDw5jPrmiCFrJ?si=c8d04fe605464a5d"
					target="_blank"
					rel="noreferrer"
				>
					Música derivada de memes
				</a>
			</li>
			<li>
				<a
					href="https://open.spotify.com/playlist/6xj0cXZMzwLyRdovDMrwYC?si=89d87717e3494393"
					target="_blank"
					rel="noreferrer"
				>
					Música de animes, openings, endings y soundtracks
				</a>
			</li>
		</ul>
	</Card>

	<div id="anime-section" />
	<Card title={'Anime 🍡 y derivados 🎏'} side="left">
		<p>
			Así es, soy otaku. No suelo hacer muchas cosas que encajen en el arquetipo como ir a
			convenciones (fui a una) o hacer cosplay (creo que se cuentan con los dedos de una mano las veces que lo
			hice). Tampoco compro mucha mercancía. Sin embargo, ver animes y escuchar música derivada de
			estos es lo que usa gran parte de mi tiempo de ocio. Habré visto cerca de 1000 animes, de los
			cuales me vi en la necesidad de continuar la historia leyendo unos 50 mangas (que en verdad no
			son tantos). Si pasaste por las listas de spotify, habrás notado que una de ellas tiene >24
			horas de pura música de ese estilo ... y es que me encanta ese mundo.
		</p>
	</Card>

	<Card title={'✨Extras✨'} side="right">
		<ul class="regular-list">
			<li>Fecha de nacimiento: 25 Feb 1997 11:23</li>
			<li>Zodiaco occidental: Sol>Piscis, Luna>Libra, Ascendente>Aries</li>
			<li>Zodiaco chino: Buey de agua</li>
			<li><a href="https://www.16personalities.com/">MBTI</a>: ENTP</li>
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
			es porque al menos sentiste la curiosidad de saber quién soy. Y, en reconocimiento de haber
			llegado hasta tan abajo, no te puedo no mostrar algunas cosas menos superficiales que me han
			pasado, que pienso, o que siento. Quizá mucho de lo que aquí hay es nada en comparación a
			otras realidades, pero "cada uno tiene sus propios demonios".
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
			divorciados me puso en la situación de tener que asumir papeles un poco molestos.
		</p>
	</Card>

	<Card title={''} side="left" theme="dark">
		<p>
			Si te fijaste en el CV o la seccion laboral, habrás notado que estuve 10 años en la
			universidad. Gran parte de eso se debe a que no entendía quién era, qué quería y para qué era
			bueno. 
			<br><br>
			Entré a College UC el 2015 porque no obtuve el puntaje necesario para entrar
			directamente a ingeniería. Algo bueno de esto: choqué con muros pequeños. Si bien igual
			reprobé algunos ramos al principio, vi a mucha gente reprobar varios cursos de primer año de
			la carrera de ingeniería porque no estaban listos para la universidad &ndash cosa que me pudo
			haber pasado perfectamente de manera más notoria &ndash, estar en College me permitió asimilar
			lo que era la educación superior de manera menos abrupta.
			<br /><br />
			Con el tiempo fui reprobando ramos de todas formas, pero en esos casos lo consideraba como un mal
			necesario para llegar a entender lo que quería estudiar. Hasta que terminé encontrando las cosas
			por las que, para mi, sí valía la pena pasar noches sin dormir: Ingeniería Matemática y Ciencia
			de Datos.
		</p>
	</Card>

	<Card title={'🤷‍♂️'} side="right" theme="dark">
		<p>
			Estos son solo algunos pedazos de mi, no iba a poner todo, no es una autobiografía. Pero al
			menos sabes que también soy humano, que también tengo cosas que me preocupan y me molestan.
			Espero ser mejor persona a medida que envejezco, o al menos lo intento.
			<br /><br />
			Gracias por haber llegado a este punto, ahora definitivamente sabes más de mi 😁.
		</p>
	</Card>

	<!-- <Card title={'Filosofía 🧐'} side="left" theme="dark">
		<ul>
			<li><h4>Nunca te rindas cuando encuentras lo que quieres</h4></li>
			<li><h4>Cada uno tiene sus demonios, se amable</h4></li>
			<li><h4>Otros</h4></li>
		</ul>
	</Card> -->
</div>

<style>
	h1 {
		font-family: 'rockwell', monospace;
	}

	.book-list li {
		margin-top: 5px;
		padding-left: 1em;
		margin-left: 2em;
		list-style-type: '📖';
		color: rgb(77, 76, 76);
	}

	.music-list li {
		margin-top: 10px;
		padding-left: 1em;
		margin-left: 2em;
		list-style-type: '🎵';
	}

	.music-list li a {
		color: rgb(77, 76, 76);
		animation: none;
	}

	.regular-list li {
		margin-top: 10px;
		padding-left: 1em;
		margin-left: 2em;
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

	a:hover {
		text-decoration: none;
	}

	@keyframes bw-change {
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
