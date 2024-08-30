<script>
	import '../app.scss';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<div class="page-container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.page-container {
		display: grid;
		grid-template-rows: auto 1fr auto;
		height: 100dvh;
	}
</style>
