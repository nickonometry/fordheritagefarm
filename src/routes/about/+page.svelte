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
					Welcome to Ford Heritage Firewood. We are a family run business and have been working together since 2007 here in Waterboro Maine. We enjoy working together to provide quality firewood, year-round for our customers in Waterboro and the
					surrounding areas.
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
