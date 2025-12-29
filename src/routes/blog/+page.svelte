<!-- src/routes/blog/+page.svelte -->
<script>
  import { fade } from "svelte/transition";
</script>

<div class="blog-container" in:fade={{ duration: 600 }}>
  <h1>Blog</h1>

  <div class="blog-categories">
    <div class="category-card">
      <h2>Drones</h2>
      <p>Reviews, guides, and tips about FPV drones and quadcopters</p>
      <a href="/blog/drones" class="button">View Drones Posts</a>
    </div>
    <!-- More categories can be added here -->
  </div>
</div>

<style>
  .blog-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--background);
    color: var(--text);
  }

  .blog-categories {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  .category-card {
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
    transition: background-color 0.3s ease, transform 0.2s ease;
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
