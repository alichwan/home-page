<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/fox.svg';
	import welcome_fallback from '$lib/images/fox.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		Hola, te invito a conocerme
	</h1>

	<h2>Elige qué Pavel quieres conocer</h2>
	<div class="selection">
		<div class="sel-block work">
			<a target="_self" href="/laboral-academico">WORK</a>
		</div>
		<div class="sel-block life">
			<a target="_self" href="/persona">LIFE</a>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.selection {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	.selection div {
		position: relative;
		height: 100%;
		width: 200px;
		margin-left: auto;
		margin-right: auto;
		border: 1px solid black;
	}

	.sel-block {
		width: 100px;
		height: 50%;
		text-align: center;
		margin-top: 100px;
		padding-top: 30px;
		font-family: 'rockwell', monospace;
	}

	.sel-block.work {
		background: rgb(0, 0, 0);
		background: linear-gradient(
			171deg,
			rgba(0, 0, 0, 0.89) 5%,
			rgba(56, 56, 56, 0.86) 28%,
			rgba(0, 0, 0, 0.91) 48%,
			rgba(82, 82, 82, 0.87) 73%,
			rgba(0, 0, 0, 0.86) 94%
		);
		color: var(--work-color);
	}
	
	.sel-block.work a {
		color: var(--work-color);
	}
	
	.sel-block.life {
		background: rgb(255, 244, 0);
		background: linear-gradient(
			159deg,
			rgba(255, 244, 0, 0.92) 7%,
			rgba(5, 255, 0, 0.6) 26%,
			rgba(255, 0, 215, 0.83) 38%,
			rgba(136, 0, 255, 0.87) 57%,
			rgba(85, 0, 255, 1) 81%,
			rgba(0, 17, 122, 0.87) 97%
		);
		color: black;
	}

	.sel-block.life a {
		color: black;
	}

	.welcome {
		text-align: center;
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
