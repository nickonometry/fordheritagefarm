<script>
	import PricingCard from '../../lib/PricingCard.svelte';
	import PageBanner from '$lib/PageBanner.svelte';
</script>

<svelte:head>
	<title>Ford Heritage Farm - Firewood Pricing</title>
</svelte:head>

<PageBanner pageTitle="Pricing" />

<div class="container">
	<p class="card">
		From early in the year until late spring we begin to cut, split, and stack as much our wood as possible, so that it can dry out (season) enough to be fit for burning when winter returns. This seasoned wood sells out very quickly once the cool
		fall weather begins, and because of its demand and the additional handling it requires, it costs more. A better option for most, is to order your wood a season ahead as less-expensive and readily-available "green" or unseasoned wood. Green cord
		wood, cut, split, and delivered, is available year-round. Call anytime to check availability of seasoned wood and current prices of either.
	</p>
	<div class="grid">
		<PricingCard title="Green Wood" price="$280">
			<ul>
				<li>Mixed hardwood</li>
				<li>Freshly split and ready to stack</li>
			</ul>
		</PricingCard>
		<PricingCard title="Ash" price="$330">
			<ul>
				<li>All Ash</li>
				<li>Dries very quickly and ready for campfires or home heating</li>
			</ul>
		</PricingCard>
		<PricingCard title="Seasoned Hardwood" price="$380">
			<ul>
				<li>A mix of seasoned hardwood that's ideal for home heating</li>
			</ul>
		</PricingCard>
		<PricingCard title="Green Pine" price="$160" isCampfire={true}>
			<ul>
				<li>Green pine</li>
				<li>Dries very quickly</li>
				<li>Once dry, it's perfect for outdoor campfires or solo stoves</li>
			</ul>
		</PricingCard>
		<PricingCard title="Seasoned Pine" price="$200" isCampfire={true}>
			<ul>
				<li>Seasoned pine</li>
				<li>Ready to burn outdoors in a campfire</li>
			</ul>
		</PricingCard>
	</div>
</div>

<style>
	.container {
		max-width: 1320px;
		margin: 0 auto;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		justify-content: center;
		justify-items: center;
		gap: 48px;
		width: 100%;
		margin: 24px auto;
	}

	.card {
		font-weight: 500;
		font-size: 1.025em;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-top: 10px;
	}

	li::before {
		content: '';
		background-image: url('https://i.postimg.cc/ht7g996V/check.png');
		background-position: center;
		background-size: cover;
		opacity: 0.5;

		display: inline-block;
		width: 10px;
		height: 10px;
		margin-right: 10px;
	}
</style>
