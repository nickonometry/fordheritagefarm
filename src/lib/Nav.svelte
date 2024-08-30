<script>
	import { page } from '$app/stores';
	import { drawerOpen } from '$lib/state.js';

	const closeDrawer = () => {
		drawerOpen.set(false);
	};

	const links = [
		{ url: '/', name: 'Home', rel: '' },
		{ url: '/about', name: 'About', rel: '' },
		{ url: '/contact', name: 'Contact Us', rel: '' }
	];
</script>

<div class="nav-container">
	<nav id="nav" class="shift">
		<ul id="nav" class="header__nav">
			{#each links as link, i}
				<li>
					<a class="nav-item" id={'nav-item-' + i} aria-current={$page.url.pathname === link.url ? 'page' : undefined} data-sveltekit-preload-data href={link.url} rel={link.rel} on:click={closeDrawer}>{link.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	@import '$lib/variables.scss';
	@import '$lib//mixins.scss';

	[aria-current]:not([aria-current='false']) {
		font-weight: bold;
		border-bottom: 3px solid black;
	}

	.nav-container {
		display: flex;
		align-items: center;
		gap: 48px;
	}

	.header__nav {
		display: flex;
		flex-direction: row;
		gap: 48px;
		list-style: none;
	}

	/* NAVIGATION */
	nav {
		width: 100%;
		background: var(--surface-color);
		display: flex;
		justify-content: flex-end;
	}
	nav ul {
		list-style: none;
		text-align: center;
	}
	nav ul li {
		display: inline-block;
	}
	nav ul li a {
		display: block;
		text-decoration: none;
		color: var(--primary-color);
		font-weight: 500;
		font-size: 24px;
		margin: 0 10px;
	}
	nav ul li a,
	nav ul li a:after,
	nav ul li a:before {
		transition: all 0.5s;
	}
	nav ul li a:hover {
		color: var(--primary-color);
	}

	/* SHIFT */
	nav.shift ul li a {
		position: relative;
		z-index: 1;
	}
	nav.shift ul li a:hover {
		color: black;
	}
	nav.shift ul li a:after {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		width: 100%;
		height: 1px;
		content: '.';
		color: transparent;
		background-color: var(--primary-color-light);
		visibility: none;
		opacity: 0;
		z-index: -1;
	}
	nav.shift ul li a:hover:after {
		opacity: 1;
		visibility: visible;
		height: 100%;
	}

	@media (max-width: $device-medium) {
		[aria-current]:not([aria-current='false']) {
			font-weight: bold;
			color: var(--secondary-color);
			border: none;
		}

		.nav-container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			justify-items: center;
			gap: 48px;
		}

		.header__nav {
			display: flex;
			flex-direction: column;
			gap: 64px;
			padding: 0;
		}
		nav {
			font-size: 2rem;
			justify-content: center;
			background: none;
		}
	}
</style>
