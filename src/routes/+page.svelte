<script>
	import HomepageCard from '../lib/HomepageCard.svelte';
	import VideoBanner from '../lib/VideoBanner.svelte';
</script>

<svelte:head>
	<title>Ford Heritage Farm - A Firewood Delivery service in Southern Maine</title>
</svelte:head>

<VideoBanner />

<div class="grid">
	<HomepageCard title="Quality Firewood" imageFileName="woodyard1.jpg" />
	<HomepageCard title="Dependable" description="Count on us for reliable and timely firewood, whenever you need it!" imageFileName="woodyard2.jpg" />
	<HomepageCard title="Seasoned" description="Ready to burn firewood, perfect for a clean, efficient fire." imageFileName="woodyard-drone.jpg" />
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
