<script>
	export let title;
	export let side;
	export let theme = 'light';

	$: bgColor = theme === 'light' ? 'rgba(100%, 100%, 100%, 0.3)' : 'rgba(35, 35, 35, 0.614)';

	$: linksBg = title === 'Links 🔗' ? 'transparent' : bgColor;
	$: linksAlign = title === 'Links 🔗' ? 'text-align:center;' : '';
</script>

<div class="card {side} {theme}" style="background-color: {linksBg}; {linksAlign}">
	<h3>{title}</h3>
	<div class="cuerpo">
		<slot />
	</div>
</div>

<style>
	.card {
		margin: 10px;
		padding: 10px 0;
		border-radius: 25px;
	}

	h3 {
		margin: 10px 0 0 30px;
		font-family: 'rockwell', monospace;
	}

	.cuerpo {
		margin: 10px 30px;
	}

	.dark {
		background-color: rgba(35, 35, 35, 0.614);
		color: white;
	}

	@media (min-width: 720px) {
		.left {
			margin-right: 30%;
		}

		.super-left {
			margin-right: 30%;
			margin-left: -25%;
		}

		.right {
			margin-left: 30%;
		}
	}
</style>
