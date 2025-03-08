<div id="video-container">
	<video preload="preload" autoplay="autoplay" muted height="500">
		<source src="homepage-videos/firewood-drone.mp4" type="video/mp4" />
	</video>
	<div class="banner-content">
		<!-- <h2 class="headline">Welcome to the Ford Heritage Farm website</h2> -->
		<h2 class="headline">Welcome to the Ford Heritage Farm website</h2>
	</div>
</div>

<style lang="scss">
	#video-container {
		height: 600px;
		position: relative;
		z-index: 1;

		&::before {
			content: '';
			background: rgba(0, 0, 0, 0.7);
			position: absolute;
			inset: 0;
			z-index: 1;
		}
	}

	video {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.banner-content {
		position: relative;
		color: #fff;
		text-align: center;
		z-index: 2;
		height: 100%;
		width: 100%;
		display: grid;
		place-content: center;
		gap: 24px;

		p {
			font-weight: 500;
			font-size: 20px;
		}
	}

	.headline {
		font-size: 32px;
		margin-inline: 24px;
	}
</style>
