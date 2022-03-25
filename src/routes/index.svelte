<script>
	import IconBar from '../components/icon-bar.svelte';
</script>

<div class="h-full flex flex-col justify-between">
	<div class="px-4 sm:px-6 lg:px-8">
		<main class="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-12 xl:mt-16">
			<div class="sm:text-center lg:text-left">
				<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span class="block text-rose-600 xl:inline">&lt;coders/&gt;</span>
					<span class="block text-slate-500 xl:inline">Liturgy</span>
				</h1>
				<p
					class="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0"
				>
					Prayerful Heart Meditations for Christian Coders.
				</p>
			</div>
		</main>
		<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
			<div class="rounded-md shadow">
				<a
					href="/prayers"
					class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
                    font-medium rounded-md text-slate-800 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
				>
					Begin
				</a>
			</div>
		</div>
	</div>

	<IconBar />
</div>
