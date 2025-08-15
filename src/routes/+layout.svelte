<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import 'the-new-css-reset/css/reset.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import 'devicon/devicon.min.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
	
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