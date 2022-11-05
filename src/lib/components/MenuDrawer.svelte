<script lang="ts">
	import { navItems } from '$lib/config'

	interface Posts {
        category: string;
        slug: string;
        heroImage: string;
        title: string;
        description: string;
    }


	export let open = false
	
</script>

<aside class="fixed top-0 -left-[100%] md:-left-[25rem] w-full md:w-[25rem] h-full bg-gray-100 text-dark-900 border-r-2 shadow-lg z-50 ease-in-out duration-500"  class:open>
	<div class="w-full h-full relative ">

		<button on:click={() => open = !open}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute top-4 right-4 w-6 h-6 cursor-pointer hover:text-isa-600">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
			</svg>
		</button>
			
		<nav class="p-12 text-xl flex flex-col gap-4">
			{#each navItems as link}
				<a class="flex gap-2 items-center group" href={link.route} on:click={() => open = !open}>
					<img src={link.icon} alt={link.title} class="w-6 h-6" >
					<p class="group-hover:text-isa-600 ">{link.title}</p>
				</a>
			{/each}
		</nav>

	</div>
</aside>

<style>
	
	.open {
		left: 0
	}
</style>