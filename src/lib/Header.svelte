<script>
	import Nav from './Nav.svelte';
	import MobileSideNav from './MobileSideNav.svelte';
	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

{#if screenSize}
	<header class="header">
		<a href="/"><img src="/logo.jpg" alt="Ford Heritage Farm Logo" height="100" width="100" /></a>
		{#if screenSize <= 1200}
			<MobileSideNav />
		{/if}
		{#if screenSize > 1200}
			<Nav />
		{/if}
	</header>
{/if}

<style>
	.header {
		z-index: 5;
		box-shadow:
			0 10px 20px rgba(0, 0, 0, 0.05),
			0 6px 6px rgba(0, 0, 0, 0.1);
		background-color: var(--background-light);
		color: var(--on-background-light);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: var(--gap);
		z-index: 20;
		padding: 16px;
	}
</style>
