<script lang="ts">
    import {theme} from '$lib/stores/theme'
    import { siteDescription } from '$lib/config' 
    import type { ActionData } from './$types';
	export let form: ActionData;
    
</script>

<svelte:head>
	<title>Register at Yobbler</title>
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
    <form method="POST" action="?/register" class="form-control w-full max-w-lg mx-auto">
    
    <div class="flex flex-col space-y-2">
        <h3 class="text-center text-3xl">Let´s create an Yobbler account. </h3>
        <p class="text-center"> Have an account? <a href="/login">Login.</a></p>
    </div>
    <div class="flex flex-col space-y-4 py-10">


        <div class="relative">
            <input type="text" name="firstName" placeholder="First Name" class="input input-bordered w-full rounded-full pl-10" value={form?.data?.firstName ?? ''} />
            <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </p>
            
        </div>

        <div class="relative">
            <input type="text" name="lastName" placeholder="Last Name" class="input input-bordered w-full rounded-full pl-10" value={form?.data?.lastName ?? ''}  />
            <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </p>
        </div>

        <div class="relative">
        <input type="email" name="email" placeholder="Email adress" class="input input-bordered w-full rounded-full pl-10" value={form?.data?.email ?? ''}  />
        <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
        </p>
        </div>
        
        <div class="relative">
        <input type="password" name="password" placeholder="Password" class="input input-bordered w-full rounded-full pl-10"  />
        <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        </p>
        </div>

        <div class="relative">
            <input type="password" name="passwordConfirm" placeholder="Confirm Password" class="input input-bordered w-full rounded-full pl-10" />
            <p class="absolute top-0 left-3 h-full flex justify-center items-center text-dark-400 select-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </p>
        </div>

        <div class="flex space-x-4">
            <input type="checkbox" name="terms" class="toggle toggle-secondary" />
            <p>Agree to the terms</p>
        </div>

    </div>

    <button type="submit" class="btn btn-secondary rounded-full">Register</button>
    
    </form>

    <div class="toast ">
        {#if form?.errors?.firstName}
            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Firstname:</p>
                    <span>{form?.errors?.firstName}</span>
                </div>
            </div>
        {/if}
        {#if form?.errors?.lastName}

            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Lastname:</p>
                    <span>{form?.errors?.lastName}</span>
                </div>
            </div>

        {/if}
        {#if form?.errors?.email}

            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Email:</p>
                    <span>{form?.errors?.email}</span>
                </div>
            </div>

        {/if}
        {#if form?.errors?.password}

            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Password:</p>
                    <span>{form?.errors?.password}</span>
                </div>
            </div>
    
        {/if}
        {#if form?.errors?.firstName}
       
            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Password Confirm:</p>
                    <span>{form?.errors?.passwordConfirm}</span>
                </div>
            </div>
        {/if}
        {#if form?.errors?.terms}
       
            <div class="alert alert-error">
                <div>
                    <p class="text-md font-[700]">Terms:</p>
                    <span>{form?.errors?.terms}</span>
                </div>
            </div>
        {/if}
    </div>
    
</div>