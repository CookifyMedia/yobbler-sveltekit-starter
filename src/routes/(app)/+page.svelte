<script lang="ts">
 import { siteDescription } from '$lib/config'   
	import type { PageData } from './$types';

 export let data: PageData
</script>

<svelte:head>
	<title>Yobbler</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation </p>

{#if data.user}
	{data?.user?.firstName} 
{/if}
