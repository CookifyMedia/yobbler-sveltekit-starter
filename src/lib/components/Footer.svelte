<script>
	import Instagram from "./icons/Instagram.svelte";
	import Twitter from "./icons/Twitter.svelte";
	
</script>

	<footer>
		<div class="bg-surface-2 border-t">
			
			<div class="max-w-5xl mx-auto px-4 xl:px-0 py-4 mt-4 text-center">
				<div class="grid md:grid-cols-4 content-center"> 
					<div class="col-span-2 hidden md:flex pt-8 pb-14">
						
						<ul class="flex flex-wrap justify-center md:flex-col gap-2 md:text-left flex-1 text-sm md:text-md">
							<li><a href="/artiklar/villkor/terms">Allmänna villkor</a></li>
							<li><a href="/artiklar/villkor/integritetspolicy">Integritetspolicy</a></li>
							<li><a href="/artiklar/villkor/code_of_conduct">Code of Conduct</a></li>
							<li><a href="/artiklar/villkor/cookie_policy">Cookie Policy</a></li>
						</ul>
					
						<ul class="flex flex-wrap justify-center md:flex-col gap-2 md:text-left flex-1 text-sm md:text-md">
							<li><a href="/">Link 1</a></li>
							<li><a href="/">Link 2</a></li>
							<li><a href="/">Link 3</a></li>
							<li><a href="/">Link 4</a></li>
						</ul>
						
					</div>
					<div class="col-span-2 py-8 h-full">
						<!-- <h4 class="text-3xl tracking-tight font-[800] md:text-4xl">Let´s keep you updated</h4> -->
						<div class="flex justify-center items-center gap-20">
							<a href="https://twitter.com/Yobbler_" rel="noreferrer" target="_blank" class="flex justify-center items-center">
								<Twitter />
							</a>
							<a href="https://www.instagram.com/yobblers/" rel="noreferrer" target="_blank" class="flex justify-center items-center">
								<Instagram />
							</a>
						</div>
					</div>
				</div>
					<!-- Copyright  -->
				<p class=" text-sm text-center">
				  Yobbler Copyight © {new Date().getFullYear()} CookifyMedia. All rights reserved.
				<p>
			</div>
		</div>
	</footer>