<script lang="ts">
	import type {Theme} from '../../types'
	import {enhance} from '$app/forms'
	import {browser} from '$app/environment'
	import ThemeToggleIcon from './icons/ThemeToggleIcon.svelte'
    import AppMenuToggleIcon from './icons/AppMenuToggleIcon.svelte';
    import MenuToggleIcon from './icons/MenuToggleIcon.svelte';

	import {theme} from '$lib/stores/theme'


	let previousY: number
	let currentY: number
	let clientHeight: number


	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up'
		previousY = y
		return direction
	}


	$: scrollDirection = deriveDirection(currentY)
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4


	
	export let open = false
	export let openAppMenu = false

	

	const deriveNextTheme = (currentTheme: Theme): Theme => {
		if (!browser) return currentTheme

		if (currentTheme === 'auto') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'light'
				: 'dark'
		}

		return currentTheme === 'dark' ? 'light' : 'dark'
	}

	$: nextTheme = deriveNextTheme($theme) 

	

</script>

<svelte:window bind:scrollY={currentY} />

<header
	class="sticky top-0 z-40 h-[var(--header-height)] px-4 items-center bg-surface-2/90 text-lg backdrop-blur-sm transition-transform ease-in shadow"
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
<div class="flex justify-between items-center h-full py-4 lg:ml-14">

	<div class="flex items-center flex-1">
		<button
			class="transition-colors hover:text-isa-400 lg:hidden"
			label="toggle appdrawer"
			aria-live="polite"
			aria-label="Öppna menyn"
			class:openAppMenu on:click={() => openAppMenu = !openAppMenu}
		>
			<AppMenuToggleIcon className="w-8 lg:w-6 " />
		</button>
	</div>
	
		<a href="/" class="font-comfortaa flex gap-2 no-underline font-[700] text-2xl hover:text-isa-600 items-end">
			{#if (nextTheme === 'light')}
				<img src="/images/logos/yobbler-logo-wh.svg" alt="Yobbler logo" class="h-8 object-cover ">
			{:else}
				<img src="/images/logos/yobbler-logo-bl.svg" alt="Yobbler logo" class="h-8 object-cover ">
			{/if}
        </a>

	<div class="flex items-center justify-end gap-4 md:gap-4 col-start-3 flex-1">
		<form
			class="flex"
			method="POST"
			action="/theme"
			use:enhance={() => {
				$theme = nextTheme
			}}
		>
			<input type="hidden" name="theme" value={nextTheme} />
			<button
				class="transition-colors hover:text-isa-400"
				label="toggle theme from {$theme} to {nextTheme}"
				aria-live="polite"
			>
				<ThemeToggleIcon className="w-6" />
			</button>
		</form>


        <button
			class="transition-colors hover:text-isa-400"
			label="toggle menudrawer"
			aria-live="polite"
			aria-label="Öppna menyn"
			class:open on:click={() => open = !open}
		>
			<MenuToggleIcon className="w-8 lg:w-6 " />
		</button>

	</div>
</div>
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

</style>