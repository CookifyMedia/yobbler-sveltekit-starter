<script>
  import {theme} from '$lib/stores/theme'
  import { siteDescription } from '$lib/config' 
  
</script>

<svelte:head>
	<title>Login at Yobbler</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>

<div class="bg-surface-1 h-screen w-screen grid grid-cols-1 place-content-center">
 
  <a href="/" class="font-comfortaa flex justify-center items-center no-underline font-[700] text-2xl hover:text-isa-600 py-4">
    {#if ($theme !== 'light')}
      <img src="/images/logos/yobbler-logo-wh.svg" alt="Yobbler logo" class="h-8 object-cover ">
    {:else}
      <img src="/images/logos/yobbler-logo-bl.svg" alt="Yobbler logo" class="h-8 object-cover ">
    {/if} 
  </a>
    <form action="" class="form-control w-full max-w-lg mx-auto">
      
      <div class="flex flex-col space-y-2">
        <h3 class="text-center text-3xl">Welcome, let´s login to Yobbler. </h3>
        <p class="text-center"> Don´t have an account? <a href="/register">Sign Up.</a></p>
      </div>
      <div class="flex flex-col space-y-4 py-10">

        <div class="relative">
          <input type="email" name="email" placeholder="Email adress" class="input input-bordered w-full rounded-full pl-10" />
          <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
          </p>
        </div>
        
        <div class="relative">
          <input type="password" name="password" placeholder="Password" class="input input-bordered w-full rounded-full pl-10" />
          <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </p>
        </div>

      </div>

      <button type="submit" class="btn btn-secondary rounded-full">Login</button>
      <div class="py-4 text-center">
        <a href="/" class="text-sm ">Forgot your password?</a>
      </div>
    </form>

   

</div>