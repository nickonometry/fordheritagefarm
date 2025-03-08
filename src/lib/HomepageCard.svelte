<script>
	export let title;
	export let description;
	export let imageFileName;

	const imageModules = import.meta.glob(`/static/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}`, {
		eager: true,
		query: {
			enhanced: true
		}
	});
</script>

<div class="card">
	<div class="img-cont">
		<span class="drop-down-window">{title}</span>
		{#each Object.entries(imageModules) as [_path, module]}
			{#if _path.includes(imageFileName)}
				<enhanced:img src={module.default} class="img" loading="lazy" alt="" />
			{/if}
		{/each}
	</div>
	<div class="content-cont">
		<span class="card-header">{title}</span>
		{#if description}
			<span class="card-body">{description}</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		box-shadow: var(--shadow);
		border-radius: 15px;
		display: block;
		overflow: hidden;
		background-color: white;
		&:hover {
			.drop-down-window {
				transform: translateX(0);
				opacity: 1;
			}
			.img {
				filter: blur(1.5px);
				transform: scale(1);
				object-fit: cover;
			}
		}
		.img-cont {
			overflow: hidden;
			position: relative;
			clip-path: var(--polygon);
			max-height: 320px;
			object-fit: cover;

			span {
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				z-index: 3;
				background-color: var(--color-dark);
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				font-weight: light;
				font-size: 30px;
				opacity: 0;
				transform: translatey(-100%);
				transition:
					transform 0.3s ease-out,
					opacity 0.5s ease-out;
				font-family: sans-serif;
				clip-path: var(--polygon);
			}
			img {
				z-index: 0;
				width: 100%;
				transform: scale(1.2);
				transition: all 0.3s;
			}
		}

		.content-cont {
			padding: 20px;

			span {
				display: block;
			}

			.card-header {
				text-transform: uppercase;
				font-weight: bold;
				padding-bottom: 10px;
				font-size: 20px;
			}

			.card-body {
				font-family: sans-serif;
			}
		}
	}

	picture {
		width: 100%;
		height: 100%;
		display: flex;
	}
	picture img {
		object-fit: cover;
		height: auto;
		width: 100%;
	}
</style>
