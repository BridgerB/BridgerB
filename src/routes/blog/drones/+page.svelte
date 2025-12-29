<!-- src/routes/blog/drones/+page.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { resolve } from '$app/paths';
</script>

<div class="drones-container" in:fade={{ duration: 600 }}>
	<h1>Drone Reviews & Guides</h1>

	<div class="posts-grid">
		<div class="post-card">
			<h2>Mobula6 Review</h2>
			<p>A detailed review of the popular Mobula6 micro FPV drone</p>
			<a href={resolve('/blog/drones/mobula6')} class="button">Read Review</a>
		</div>
		<!-- More drone posts can be added here -->
	</div>
</div>

<style>
	.drones-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: var(--background);
		color: var(--text);
	}

	.posts-grid {
		display: grid;
		gap: 2rem;
		margin-top: 2rem;
	}

	.post-card {
		background: var(--primary);
		padding: 2rem;
		border-radius: 8px;
		border: 1px solid var(--secondary);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--secondary);
		color: var(--primary);
		text-decoration: none;
		border-radius: 4px;
		margin-top: 1rem;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
	}

	.button:hover {
		background: var(--text);
		transform: scale(1.02);
	}

	h1,
	h2 {
		color: var(--text);
	}

	h1 {
		border-bottom: 2px solid var(--secondary);
		display: inline-block;
		padding-bottom: 0.25rem;
	}

	h2 {
		border-bottom: 2px solid var(--secondary);
		display: inline-block;
		padding-bottom: 0.25rem;
	}
</style>
