<script lang="js">
	import Hamburger from '$lib/hamburger/hamburger.svelte';
	import Nav from '../nav/nav.svelte';
	import { drawerOpen } from '../../stores';

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
	@import '$lib//mixins.scss';

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
			width: 75vw;
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
