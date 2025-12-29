<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/state";
  import Navbar from "$lib/Navbar.svelte";
  import "the-new-css-reset/css/reset.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "devicon/devicon.min.css";
  import "../app.css";
  import favicon from "$lib/assets/favicon.png";
  import { initAnalytics, trackPageView } from "$lib/firebase/analytics";

  const PRODUCTION_DOMAIN = "bridgerb.com";

  let { children } = $props();
  let analyticsReady = $state(false);

  onMount(() => {
    if (page.url.hostname === PRODUCTION_DOMAIN) {
      initAnalytics().then(() => {
        analyticsReady = true;
      });
    }
  });

  $effect(() => {
    if (analyticsReady && page.url) {
      trackPageView(page.url.pathname, document.title);
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Bridger Belyea</title>
  <meta name="author" content="Bridger Belyea" />
  <meta charset="UTF-8" />
  <meta name="description" content="Bridger Belyea" />
  <meta name="keywords" content="Bridger Belyea" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="gradient">
  <div class="content">
    <Navbar />
    {@render children?.()}
  </div>
</div>
