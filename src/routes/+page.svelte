<script>
	import HomepageCard from '../lib/HomepageCard.svelte';
	import VideoBanner from '../lib/VideoBanner.svelte';
</script>

<svelte:head>
	<title>Ford Heritage Farm - A Firewood Delivery service in Southern Maine</title>
</svelte:head>

<VideoBanner />

<div class="grid">
	<HomepageCard title="Quality" description="Experience the warmth of premium firewood—carefully selected for superior quality and a perfect burn every time." imageFileName="woodyard1.jpg" />
	<HomepageCard title="Dependable" description="Count on us for reliable and timely firewood, whenever you need it!" imageFileName="woodyard2.jpg" />
	<HomepageCard title="Seasoned" description="Enjoy the benefits of expertly seasoned firewood—dry, ready to burn, and perfect for a clean, efficient fire." imageFileName="woodyard-drone.jpg" />
</div>

<style lang="scss">
	@import '$lib/variables.scss';
	@import '$lib//mixins.scss';
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
		padding: 64px;

		@media (max-width: $device-medium) {
			padding: 16px;
		}
	}
</style>
