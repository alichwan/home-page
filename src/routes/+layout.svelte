<script>
	import Header from './Header.svelte';
	import './styles.css';
	let specialClass = 'no-special';
</script>

<div class="app {specialClass}" >
	<Header bind:specialClass/>
		
	<main>
		<slot />
	</main>
	
	<footer>
		<p>With ❤️ by <a href="https://github.com/alichwan">Alichwan</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.app.work-theme {
		background: rgb(0,0,0);
		background: linear-gradient(171deg, rgba(0,0,0,0.89) 5%, rgba(56,56,56,0.86) 28%, rgba(0,0,0,0.91) 48%, rgba(82,82,82,0.87) 73%, rgba(0,0,0,0.86) 94%);
		color: rgb(92, 255, 255);
	}

	.app.life-theme {
		background: rgb(255,244,0);
		background: linear-gradient(159deg, rgba(255,244,0,0.92) 7%, rgba(5,255,0,0.60) 26%, rgba(255,0,215,0.83) 38%, rgba(136,0,255,0.87) 57%, rgba(85,0,255,1) 81%, rgba(0,17,122,0.87) 97%);
		color: black;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: white;
	}

	footer a {
		font-weight: bold;
		color: white;
		animation-name: color-change;
		animation-duration: 2s ;
		animation-iteration-count: infinite;
		animation-direction: alternate;

	}

	@keyframes color-change {
	0%   {color: rgb(250, 123, 123);}
	25%  {color: rgb(255, 255, 154);}
	50%  {color: rgb(38, 168, 255);}
	100% {color: rgb(71, 255, 175);}
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
