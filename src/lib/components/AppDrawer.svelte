<script>
    import AppMenuToggleIcon from './icons/AppMenuToggleIcon.svelte';

    let currentLink = "Hem";
    export let openAppMenu = false
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

            <ul class="h-full flex flex-col justify-end gap-2 pb-2">
                <div class="relative">
                    <a href="/login" on:mouseenter={() => {currentLink = 'settings'}} on:mouseleave={() => {currentLink = ''}} on:click={() => openAppMenu = false}>
                        <li  class="w-10 h-10 flex justify-center items-center text-dark-50  hover:text-dark-100 hover:bg-dark-600 rounded-lg hover:shadow-lg  duration-300 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                               
                        </li>
                    </a>
                        {#if currentLink === 'settings'}
                            <p class="hidden lg:block absolute top-2 left-14 font-[600] text-lg min-w-[12rem] text-dark-200 rounded-lg px-4 bg-dark-900/80 backdrop-blur-sm">Inställningar</p>
                        {/if}
                    
                </div> 
            </ul>

        </div>
    </div>
</aside>

<style>
	.openAppMenu {
		left: 0
	}
</style>