<script lang="js">
	import Hamburger from '$lib/Hamburger.svelte';
	import Nav from '$lib/Nav.svelte';
	import { drawerOpen } from './state';

	let drawerOpenValue;
	drawerOpen.subscribe((value) => {
		drawerOpenValue = value;
	});
</script>

<div class="mobile-nav-toggle">
	<Hamburger />
</div>

<div class="sidenav" id="mobile-sidenav" data-visible={drawerOpenValue}>
	<Nav />
</div>

<style lang="scss">
	@import '$lib/variables.scss';
	@import '$lib/mixins.scss';

	.mobile-nav-toggle {
		display: none;
	}

	@media (max-width: $device-medium) {
		.mobile-nav-toggle {
			display: block;
			top: 1.5rem;
			right: 1.5rem;
			z-index: 9999;
			cursor: pointer;
		}

		.sidenav[data-visible='false'] {
			transform: translateX(100%);
			transition: transform 350ms ease-out;
		}

		.sidenav {
			width: 40vw;
			position: fixed;
			inset: 0 0 0 auto;
			transform: translateX(0);
			transition: transform 350ms ease-out;
			@include supports-backdrop-filter();
			z-index: 20;
			padding: 64px;
		}
	}
</style>
