<script>
	import CampfireIcon from './CampfireIcon.svelte';
	import HomeIcon from './HomeIcon.svelte';

	export let title;
	export let price;
	export let isCampfire = false;
</script>

<div class="basic box">
	<h2 class="title">{title}</h2>
	<div class="view">
		<div class="icon">
			{#if isCampfire}
				<CampfireIcon />
			{:else}
				<HomeIcon />
			{/if}
		</div>
		<div class="cost">
			<p class="amount">{price}</p>
			<p class="detail">per cord</p>
		</div>
	</div>
	<div class="description">
		<slot />
	</div>
	<div class="link-container">
		<a href="/contact">Contact us!</a>
	</div>
</div>

<style>
	.box {
		display: grid;
		grid-template-rows: auto 1fr 150px auto;
		border-radius: 20px;
		width: 100%;
		background: var(--white);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 20%);
	}

	.title {
		width: 100%;
		padding: 10px 0;
		font-size: 1.2em;
		font-weight: bold;
		text-align: center;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		color: var(--white);
	}

	.basic .title {
		background: #000;
	}

	.view {
		display: block;
		width: 100%;
		padding: 30px 0 20px;

		background: var(--white-smoke);
	}

	.icon {
		display: flex;
		justify-content: center;
	}

	.cost {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-items: center;
		flex-direction: column;
		margin-top: 10px;
	}

	.amount {
		font-size: 2.8em;
		font-weight: bolder;
	}

	.detail {
		margin: auto 0 auto 5px;
		font-size: 0.9em;
		font-weight: bold;
		line-height: 15px;
		color: #7d7c7c;
	}

	.description {
		display: flex;
		justify-content: center;
		justify-items: center;
		padding-inline: 8px;
	}

	.link-container {
		width: 100%;
		padding: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	a {
		display: block;
		height: 40px;
		width: 100%;
		padding: 8px;
		font-size: 1em;
		font-weight: bold;
		letter-spacing: 0.5px;
		color: black;
		border: 2px solid var(--dark-gray);
		border-radius: 50px;
		background: transparent;
	}

	a:hover {
		color: var(--white-smoke);
		transition: 0.5s;
		border: none;

		background: black;
	}
</style>
