<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import AppDrawer from '$lib/components/AppDrawer.svelte'
	import MenuDrawer from '$lib/components/MenuDrawer.svelte'
	import Footer from '$lib/components/Footer.svelte';
	import {theme} from '$lib/stores/theme'

	import type {LayoutServerData} from './$types'

	let open = false 
	let openAppMenu = false 

	export let data: LayoutServerData
	$theme = data.theme
</script>
<div id="theme-container" class={ $theme }>
	<Header bind:open={open} bind:openAppMenu={openAppMenu} />

	<div class="lg:ml-14" data-sveltekit-prefetch>
		<slot  />
	</div>
	
	<Footer />

	<AppDrawer bind:openAppMenu data={data} />
	<MenuDrawer bind:open />
</div>