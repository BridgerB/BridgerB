<!-- src/routes/contact/+page.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let form;
	let success = false;
	let message = form?.message || ''; // Initialize message with form.message or empty string

	// Sync message with form.message when form changes
	$: if (form?.message !== undefined) {
		message = form.message;
	}

	// Reset success message when form is interacted with again
	$: if (form?.name || form?.email || message) {
		success = false;
	}
</script>

<section id="contact" class="parallax" in:fade={{ duration: 600 }}>
	<h2>Contact Me</h2>
	{#if success || form?.success}
		<p class="success-message">Thank you for your message! I'll get back to you soon.</p>
	{/if}
	{#if form?.error}
		<p class="error-message">{form.error}</p>
	{/if}
	<div class="contact-container">
		<div class="contact-info">
			<h3>Get in Touch</h3>
			<p>
				I'm always open to new opportunities and collaborations. Feel free to reach out via the form
				below or connect with me on social media.
			</p>
			<div class="social-links">
				<a
					href="https://github.com/bridgerb"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<i class="fab fa-github"></i>
				</a>
				<a
					href="https://linkedin.com/in/bridgerb"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<i class="fab fa-linkedin"></i>
				</a>
				<a
					href="https://x.com/bridgerbelyea"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="X"
				>
					<i class="fab fa-x-twitter"></i>
				</a>
			</div>
		</div>
		<div class="contact-form">
			<h3>Send a Message</h3>
			<form
				method="POST"
				use:enhance={({ formElement }) => {
					return async ({ result }) => {
						if (result.type === 'success' && result.data?.success) {
							success = true;
							formElement.reset(); // Reset form on success
							message = ''; // Clear message after reset
						}
					};
				}}
			>
				<div class="form-group">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Your Name"
						value={form?.name ?? ''}
						required
					/>
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Your Email"
						value={form?.email ?? ''}
						required
					/>
				</div>
				<div class="form-group">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="Your Message"
						rows="5"
						bind:value={message}
						required
					></textarea>
				</div>
				<button class="button" type="submit">Send Message</button>
			</form>
		</div>
	</div>
</section>

<style>
	.success-message {
		color: var(--secondary);
		background: var(--background);
		padding: 1rem;
		border-radius: 5px;
		margin-bottom: 1rem;
		text-align: center;
	}

	.error-message {
		color: #ff6b6b;
		background: var(--background);
		padding: 1rem;
		border-radius: 5px;
		margin-bottom: 1rem;
		text-align: center;
	}
</style>
