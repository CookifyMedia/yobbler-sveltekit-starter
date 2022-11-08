<script lang="ts">
    import AppMenuToggleIcon from './icons/AppMenuToggleIcon.svelte';

    let currentLink = "Hem";
    export let openAppMenu = false
    export let data
</script>


<aside class="fixed bottom-0 top-0 -left-[100%] lg:-left-[21.5rem] flex z-50 w-full md:w-[25rem] bg-gray-100 ease-in-out duration-500" class:openAppMenu>
    <div class="w-full flex justify-between">

        <div class="relative w-full p-2">
            <button class="absolute right-4 top-4 rounded-full p-2 text-dark-800 hover:bg-dark-200 cursor-pointer" on:click={() => openAppMenu = !openAppMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>  
            </button>
            <div class=" py-12 px-4 text-dark-900">
                <h3 class="text-2xl font-[900] pb-4 text-dark-600">Hej!</h3>
                <p>
                    Tack för att du besöker Yobbler och klickar runt. 
                    Vill du veta mer om Yobbler eller få uppdateringar om när vi släpper upp för betatestning? 
                    <a href="/login" on:click={() => openAppMenu = !openAppMenu}>Klicka här. </a>
                </p>
            </div>
        </div> 


        <div class="flex flex-col justify-between h-full bg-dark-700 px-2 shadow-lg backdrop-blur-md">
            
            <div class="flex justify-center items-center w-full h-[var(--header-height)] py-6 z-50 border-b">
                <button
                    class="transition-colors text-dark-50 hover:text-isa-400"
                    label="toggle appdrawer"
                    aria-live="polite"
                    aria-label="Öppna menyn"
                    class:openAppMenu on:click={() => openAppMenu = !openAppMenu}
                >
                    <AppMenuToggleIcon className="w-8 " />
                </button>
            </div>
        
            <ul class="h-full flex flex-col items-center gap-2 py-2">

                            
                <div class="relative">

                    <a href="/artiklar" on:mouseenter={() => {currentLink = 'blog'}} on:mouseleave={() => {currentLink = ''}} on:click={() => openAppMenu = false}>
                        <li class="w-10 h-10 flex justify-center items-center text-dark-50 hover:text-dark-100 hover:bg-dark-600 rounded-lg hover:shadow-lg duration-300 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </li>
                    </a>
                    {#if currentLink === 'blog'}
                        <p class="hidden lg:block absolute top-2 left-14 font-[600] text-lg min-w-[12rem] text-dark-200 rounded-lg px-4 bg-dark-900/80 backdrop-blur-sm">Magazine</p>
                    {/if}
                </div>

                <div class="relative">
                    <a href="/contact" on:mouseenter={() => {currentLink = 'contact'}} on:mouseleave={() => {currentLink = ''}} on:click={() => openAppMenu = false}>
                    <li   class="w-10 h-10 flex justify-center items-center  text-dark-50 hover:text-dark-100 hover:bg-dark-600 rounded-lg hover:shadow-lg  duration-300 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </li>
                    </a>
                    {#if currentLink === 'contact'}
                        <p class="hidden lg:block absolute top-2 left-14 font-[600] text-lg min-w-[12rem] text-dark-200 rounded-lg px-4 bg-dark-900/80 backdrop-blur-sm">Kontakta oss</p>
                    {/if}
                </div>

                <div class="relative">

                    <a href="/about" on:mouseenter={() => {currentLink = 'about'}} on:mouseleave={() => {currentLink = ''}} on:click={() => openAppMenu = false}>
                        <li  class="w-10 h-10 flex justify-center items-center text-dark-50  hover:text-dark-100 hover:bg-dark-600 rounded-lg hover:shadow-lg  duration-300 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>
                    </a>
                    {#if currentLink === 'about'}
                        <p class="hidden lg:block absolute top-2 left-14 font-[600] text-lg min-w-[12rem] text-dark-200 rounded-lg px-4 bg-dark-900/80 backdrop-blur-sm">Om Yobbler</p>
                    {/if}
                </div>
            </ul>
          
            {#if data.user}
                <div class="dropdown dropdown-right dropdown-end flex items-center pb-1">
                    <div tabindex="-1" class="btn btn-ghost btn-circle avatar w-10 flex justify-center items-center cursor-pointer ">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="avatar" />
                    </div>
                    </div>
                    <ul tabindex="-1" class="m ml-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/" class="justify-between">
                        Profile
                        <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Logout</a></li>
                    </ul>
                </div>
            {:else}
            <div class="relative pb-2">
                <a href="/login" on:mouseenter={() => {currentLink = 'login'}} on:mouseleave={() => {currentLink = ''}} on:click={() => openAppMenu = false}>
                <li   class="w-10 h-10 flex justify-center items-center  text-dark-50 hover:text-dark-100 hover:bg-dark-600 rounded-lg hover:shadow-lg  duration-300 cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    </li>
                </a>
                {#if currentLink === 'login'}
                    <p class="hidden lg:block absolute top-2 left-14 font-[600] text-lg min-w-[12rem] text-dark-200 rounded-lg px-4 bg-dark-900/80 backdrop-blur-sm">Logga in</p>
                {/if}
            </div>
                
            {/if}
        </div>
    </div>
</aside>

<style>
	.openAppMenu {
		left: 0
	}
</style>