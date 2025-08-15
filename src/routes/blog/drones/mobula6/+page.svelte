<!-- src/routes/blog/drones/mobula6/+page.svelte -->
<script>
	import { fade } from 'svelte/transition';
</script>

<article class="review-container" in:fade={{ duration: 600 }}>
	<header class="review-header">
		<h1>Mobula6 2024 Review</h1>
		<div class="review-meta">
			<span class="date">Published: March 2024</span>
			<span class="category">Category: Drone Reviews</span>
		</div>
	</header>

	<div class="review-content">
		<section class="specs">
			<h2>Specifications</h2>
			<ul>
				<li>Frame: 65mm Whoop</li>
				<li>Motors: SE0702 KV28000</li>
				<li>Flight Controller: SuperX ELRS AIO 5-IN-1</li>
				<li>VTX: 5.8G OpenVTX 400mW</li>
				<li>Camera: 1080p HD FX17-B</li>
				<li>Battery: 1S LiPo</li>
				<li>Wind Resistance: Less than 10km/h</li>
			</ul>
		</section>

		<section class="pros-cons">
			<div class="pros">
				<h3>Pros</h3>
				<ul>
					<li>Ultra-lightweight design</li>
					<li>High-resolution 1080p HD camera</li>
					<li>Extended flight time with efficient design</li>
					<li>Powerful 1S brushless motors</li>
					<li>Advanced SuperX ELRS flight controller</li>
					<li>Perfect for indoor and light outdoor flying</li>
				</ul>
			</div>
			<div class="cons">
				<h3>Cons</h3>
				<ul>
					<li>Limited wind resistance (less than 10km/h)</li>
					<li>Requires Betaflight configuration</li>
					<li>Limited documentation for setup</li>
					<li>Not suitable for heavy outdoor conditions</li>
				</ul>
			</div>
		</section>

		<section class="conclusion">
			<h2>Conclusion</h2>
			<p>
				The Mobula6 2024 represents a significant upgrade in the micro FPV whoop category. With its
				lightweight design and powerful SE0702 KV28000 motors, it offers impressive performance in a
				1S configuration. The high-resolution 1080p HD camera and 400mW VTX provide excellent video
				quality, while the SuperX ELRS AIO flight controller offers advanced features and reliable
				control. While it requires some Betaflight configuration and has limited documentation, it's
				an excellent choice for both beginners and experienced pilots looking for a capable indoor
				and light outdoor FPV drone.
			</p>
		</section>
	</div>
</article>

<style>
	.review-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: var(--background);
		color: var(--text);
	}

	.review-header {
		margin-bottom: 2rem;
	}

	.review-meta {
		color: var(--text);
		opacity: 0.8;
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}

	.review-meta span {
		margin-right: 1rem;
	}

	.review-content {
		line-height: 1.6;
	}

	section {
		margin-bottom: 2rem;
		background: var(--primary);
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid var(--secondary);
	}

	.pros-cons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
		background: transparent;
		border: none;
		padding: 0;
	}

	.pros,
	.cons {
		background: var(--primary);
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid var(--secondary);
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-bottom: 0.5rem;
		padding-left: 1.5rem;
		position: relative;
	}

	li:before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--secondary);
	}

	.conclusion {
		background: var(--primary);
		padding: 1.5rem;
		border-radius: 8px;
		border: 1px solid var(--secondary);
	}

	h1,
	h2,
	h3 {
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
