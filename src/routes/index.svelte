<script>
	import IconBar from '../components/icon-bar.svelte';
</script>

<svelte:head>
	<title>Coder's Liturgy</title>
	<meta
		property="og:title"
		content="Coder's Liturgy 💻 🙏 | Prayerful heart devotions for Christian Coders"
	/>
</svelte:head>

<div class="flex flex-col justify-between">
	<div class="px-4 flex-grow flex-shrink-0 sm:px-6 lg:px-8">
		<main class="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-12 xl:mt-16">
			<div class="sm:text-center">
				<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					<span class="block text-rose-600 xl:inline">&lt;coders/&gt;</span>
					<span class="block text-slate-500 xl:inline">Liturgy</span>
				</h1>
				<h3
					class="text-xl text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-2xl sm:text-center"
				>
					Prayerful Heart Meditations for Christian Coders.
				</h3>
			</div>
			<div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
				<div class="rounded-md shadow">
					<a
						href="/prayers"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
                        font-medium rounded-md text-slate-800 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
					>
						Let's Pray
					</a>
				</div>
			</div>
		</main>
	</div>
	<div class="flex-grow h-24">&nbsp;</div>
	<IconBar />
</div>
