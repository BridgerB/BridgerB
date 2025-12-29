<!-- src/routes/portfolio/+page.svelte -->
<script lang="ts">
  import { fade } from "svelte/transition";
  import { projects } from "$lib/assets/projects";
</script>

<section id="portfolio" class="parallax" in:fade={{ duration: 600 }}>
  <h2>Portfolio</h2>
  <div class="gallery">
    {#each projects as project}
      <div class="project-card" in:fade={{ duration: 400, delay: 200 }}>
        <a href="/portfolio/{project.slug}">
          <img src={project.image} alt={project.alt} />
          <div class="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div class="project-tech">
              {#each project.technologies as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</section>

<style>
  .project-tech {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: var(--primary);
    color: var(--text);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }
</style>
