<script>
	import PageBanner from '$lib/PageBanner.svelte';
</script>

<svelte:head>
	<title>Ford Heritage Farm - Contact Us</title>
</svelte:head>

<PageBanner pageTitle="Contact" />
<div class="contact-container">
	<form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true" netlify>
		<p style="margin: 0;" class="intro-text">
			If you're interested in buying firewood, please fill out the form below and we will get back to you ASAP. You can also give us a call or text at <a href="tel:+12072062897">207-206-2897</a>
		</p>
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<div class="input-container">
			<label for="name">Name</label>
			<input name="name" id="name" required type="text" />
		</div>
		<div class="input-container">
			<label for="email">Email</label>
			<input name="email" id="email" required type="email" />
		</div>
		<div class="input-container">
			<label for="phone">Phone number</label>
			<input name="phone" id="phone" required type="phone" />
		</div>
		<div class="input-container">
			<label for="project">Message</label>
			<textarea name="message" id="message" type="text"> </textarea>
		</div>
		<input type="submit" value="Submit" />
	</form>
</div>

<style>
	.contact-container {
		max-width: 1440px;
		width: 100%;
		margin: 0 auto;
		padding: 24px;
	}

	.intro-text {
		font-size: 20px;
	}

	form {
		display: grid;
		gap: 24px;
		max-width: 768px;
		width: 100%;
		margin: 0 auto;
	}

	.input-container {
		display: grid;
		gap: 4px;
		width: 100%;
	}

	label {
		font-size: 0.95rem;
	}

	input {
		height: 56px;
		padding-inline: 16px;
		width: 100%;
	}

	textarea {
		height: 100px;
	}

	input[type='submit'] {
		display: grid;
		place-content: center;
		border: 4px solid var(--accent-dark);
		border-radius: 64px;
		background-color: transparent;
		font-size: 18px;
		letter-spacing: 0.045em;
		color: var(--accent-darker);
		font-weight: 800;
		transition: all 400ms ease-in;
	}

	input[type='submit']:hover {
		background-color: #d5d4d3;
		color: #242019;
		border-color: var(--accent-darker);
		cursor: pointer;
	}
</style>
