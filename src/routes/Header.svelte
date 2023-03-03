<script>
	import { page } from '$app/stores';

	export let specialClass = 'no-special';
	if ($page.url.pathname === '/persona') {
		specialClass = 'life-theme';
	} else if ($page.url.pathname === '/laboral-academico') {
		specialClass = 'work-theme';
	}
</script>

<header>
	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"
					><button
						on:click={() => {
							specialClass = 'no-special';
						}}>Home</button
					></a
				>
			</li>
			<li aria-current={$page.url.pathname === '/laboral-academico' ? 'page' : undefined}>
				<a href="/laboral-academico"
					><button
						on:click={() => {
							specialClass = 'work-theme';
						}}>Laboral-académico</button
					></a
				>
			</li>
			<li aria-current={$page.url.pathname === '/persona' ? 'page' : undefined}>
				<a href="/persona">
					<button	on:click={() => {specialClass = 'life-theme';}}>
							Persona
					</button>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about"
					><button
						on:click={() => {
							specialClass = 'no-special';
						}}>About</button
					></a
				>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
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

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1-aux);
	}

	nav button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		border: var(--size) solid transparent;
		background-color: transparent;
	}

	nav button:hover {
		color: var(--color-theme-1-aux);
	}

	@media (max-width: 480px) {
		header {
			position: fixed;
			z-index: 10;
		}
	}
</style>
