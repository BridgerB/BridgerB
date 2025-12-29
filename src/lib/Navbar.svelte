<!-- src/lib/Navbar.svelte -->
<script>
  import { resolve } from "$app/paths";
</script>

<nav>
  <a href={resolve("/")}>About</a>
  <a href={resolve("/portfolio")}>Portfolio</a>
  <a href={resolve("/blog")}>Blog</a>
  <a href={resolve("/contact")}>Contact</a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }

  a {
    text-decoration: none;
  }
</style>
