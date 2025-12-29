<!-- src/routes/portfolio/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { type Project, projects } from "$lib/assets/projects";

  // Get the current project based on the slug
  $: project = projects.find((p: Project) => p.slug === $page.params.slug);

  // If project not found, redirect to portfolio page
  import { goto } from "$app/navigation";
  $: if (!project) {
    goto("/portfolio");
  }
</script>

{#if project}
  <section class="project-detail parallax" in:fade={{ duration: 600 }}>
    <div class="project-header">
      <h2>{project.title}</h2>
    </div>

    <div class="project-content">
      <div class="project-main">
        <a
          href="https://{project.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.image} alt={project.alt} class="project-image" />
        </a>
        <p class="project-description">{project.description}</p>
      </div>

      <div class="project-details">
        <div class="detail-section">
          <a
            href="https://{project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-url"
          >
            {project.url}
          </a>
          {#if project.released}
            <div class="project-published">
              Released {
                new Date(project.released).toLocaleDateString(
                  "en-US",
                  { month: "long", year: "numeric" },
                )
              }
            </div>
          {/if}
        </div>

        <div class="detail-section">
          <h3>Technologies</h3>
          <div class="tech-list">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </div>

        <div class="detail-section">
          <h3>Key Features</h3>
          <ul class="features-list">
            {#each project.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  .project-detail {
    padding: 2rem 1rem;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    max-width: 1240px;
    margin: 0 auto 2rem;
  }

  .project-header h2 {
    margin: 0;
  }

  .project-content {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .project-main {
    background: rgba(30, 31, 35, 0.7);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--primary);
  }

  .project-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .project-image:hover {
    opacity: 0.9;
  }

  .project-description {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .detail-section {
    background: rgba(30, 31, 35, 0.7);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--primary);
  }

  .detail-section h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: var(--primary);
    color: var(--text);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .features-list li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .features-list li:before {
    content: "•";
    color: var(--secondary);
    position: absolute;
    left: 0;
  }

  .project-url {
    color: var(--accent);
    text-decoration: none;
    font-size: 1rem;
    word-break: break-all;
  }

  .project-url:hover {
    text-decoration: underline;
  }

  .project-published {
    text-align: center;
    color: var(--text);
    font-size: 0.9rem;
    margin-top: 0.8rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .project-content {
      grid-template-columns: 1fr;
    }

    .project-header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>
