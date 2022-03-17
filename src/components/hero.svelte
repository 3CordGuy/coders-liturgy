<script>
</script>

<div class="relative bg-slate-800 overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div>
				<div class="relative pt-6 px-4 sm:px-6 lg:px-8">
					<slot name="nav" />
				</div>
			</div>
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span class="block text-rose-600 xl:inline">&lt;coders&gt;</span>
						<span class="block text-slate-500 xl:inline">Liturgy</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
					>
						Prayerful heart redirections for Christian coders.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="rounded-md shadow">
							<a
								href="/prayers"
								class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base 
                                font-medium rounded-md text-slate-800 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
							>
								Browse by Topic
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<!-- <img
			class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
			src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
			alt=""
		/> -->
	</div>
</div>
