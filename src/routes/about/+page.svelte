<script>
	import PageBanner from '$lib/PageBanner.svelte';
</script>

<svelte:head>
	<title>Ford Heritage Farm - About us</title>
</svelte:head>

<PageBanner pageTitle="About Us" />
<div class="padding-16">
	<div class="card">
		<div class="columns">
			<enhanced:img src="/static/images/woodyard2.jpg" alt="Ford Heritage Farm woodyard" />
			<div>
				<p>
					Welcome to Ford Heritage Farm, your local source for premium firewood in Waterboro, Maine. At our farm, we take pride in producing top-quality firewood year-round for Waterboro and the surrounding areas within a 20-mile radius. Our firewood
					is carefully seasoned to ensure it's ready to burn when you need it, providing you with clean, efficient heat.
				</p>
				<p>
					We also take great care in stacking our firewood in professionally arranged rows, optimizing drying and ensuring that each piece is ready for your fireplace or stove. At Ford Heritage Farm, we're committed to delivering excellence in every
					log, so you can enjoy warmth and comfort all year long.
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/variables.scss';
	@import '$lib/mixins.scss';

	.columns {
		display: grid;
		grid-template-columns: 4fr 8fr;
		gap: 24px;

		@media (max-width: $device-medium) {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}

	.columns p {
		font-size: 20px;
		line-height: 32px;
		margin-block-end: 24px;
	}

	img {
		object-fit: cover;
		height: 500px;

		@media (max-width: $device-medium) {
			object-fit: cover;
			height: 350px;
		}
	}
</style>
