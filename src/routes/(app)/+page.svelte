<script lang="ts">
 import { siteDescription } from '$lib/config'  


</script>

<svelte:head>
	<title>Yobbler starter template</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


	<div class="hero py-20 bg-surface-1">
		<div class="hero-content flex-col lg:flex-row-reverse">
		  <img src="https://placeimg.com/260/400/arch" alt="hero" class="max-w-sm rounded-lg shadow-2xl" />
		  <div>
			<h1 class="text-5xl font-bold">Welcome to Yobbler SvelteKit Starter</h1>
			<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			<button class="btn btn-primary">Get Started</button>
		  </div>
		</div>
	</div>

	<div class="hero min-h-screen bg-surface-1">
		<div class="hero-content flex-col lg:flex-row-reverse">
		  <div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
		  </div>
		  <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
			  <div class="form-control">
				<label class="label">
				  <span class="label-text">Email</span>
				</label>
				<input type="text" placeholder="email" class="input input-bordered" />
			  </div>
			  <div class="form-control">
				<label class="label">
				  <span class="label-text">Password</span>
				</label>
				<input type="text" placeholder="password" class="input input-bordered" />
				<label class="label">
				  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
				</label>
			  </div>
			  <div class="form-control mt-6">
				<button class="btn btn-primary">Login</button>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
