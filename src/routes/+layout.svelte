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

	.work-theme {
		background-color: rgb(66, 66, 66);
		color: rgb(134, 255, 255);
	}

	.life-theme {
		background: rgb(255,244,0);
		background: linear-gradient(159deg, rgba(255,244,0,0.9164259453781513) 7%, rgba(5,255,0,0.5970982142857143) 26%, rgba(255,0,215,0.8267900910364145) 38%, rgba(136,0,255,0.8744091386554622) 57%, rgba(85,0,255,1) 81%, rgba(0,17,122,0.8688068977591037) 97%);
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
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
