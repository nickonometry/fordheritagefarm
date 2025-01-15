<script>
	export let pageTitle;
</script>

<div class="page-hero">
	<h1 id="heading1" class="heading"><span class="underline">{pageTitle}</span></h1>
	<enhanced:img src="/static/images/woodyard-drone.jpg" alt="An alt text" class="hero-image" />
</div>

<style lang="scss">
	.page-hero {
		width: 100%;
		position: relative;
		height: 300px;

		&::before {
			content: '';
			background: rgba(0, 0, 0, 0.3);
			position: absolute;
			inset: 0;
			z-index: 1;
		}
	}

	.hero-image {
		height: 300px;
		object-fit: cover;
	}

	.heading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 32px;
		z-index: 50;
	}
</style>
