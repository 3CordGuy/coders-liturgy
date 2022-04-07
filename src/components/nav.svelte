<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let isDarkEnabled = true;
	let isMobileMenuOpen = false;

	const toggleMobileMenu = () => {
		console.log('toggling mobile...	');
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const setDarkMode = (isDark) => {
		if (!browser) return;

		if (isDark) {
			document.body.classList.add('dark');
			window.localStorage.setItem('isDark', 'yes');
			isDarkEnabled = true;
		} else {
			document.body.classList.remove('dark');
			window.localStorage.setItem('isDark', 'no');
			isDarkEnabled = false;
		}
	};

	onMount(() => {
		if (browser) {
			let isDark = window.localStorage.getItem('isDark') === 'yes';
			setDarkMode(isDark);
		}
	});
</script>

<nav class="relative flex items-center justify-between sm:h-10" aria-label="Global">
	<div class="flex items-center flex-grow">
		<div class="flex items-center justify-between w-full md:w-auto">
			<a href="/">
				<svg
					class="h-10 text-yellow-400"
					width="100%"
					height="100%"
					viewBox="0 0 64 64"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					xml:space="preserve"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;fill:currentColor;"
				>
					<g transform="matrix(0.1122,0,0,0.1122,3.94993,4.31588)">
						<path
							d="M483.426,130.026C483.426,65.61 431.128,13.313 366.713,13.313L133.287,13.313C68.872,13.313 16.574,65.61 16.574,130.026L16.574,363.451C16.574,427.867 68.872,480.164 133.287,480.164L366.713,480.164C431.128,480.164 483.426,427.867 483.426,363.451L483.426,130.026ZM76.509,280.183C76.509,293.786 84.788,306.019 97.415,311.077C145.403,330.298 265.488,378.396 345.755,410.546C363.214,417.539 383.006,415.414 398.582,404.874C414.159,394.333 423.491,376.751 423.491,357.943L423.491,357.939C423.491,337.721 410.67,319.727 391.56,313.124C331.158,292.256 206.161,249.07 206.161,249.07L206.161,244.407C206.161,244.407 325.111,203.31 387.009,181.925C408.842,174.381 423.491,153.823 423.491,130.723L423.491,127.878C423.491,110.79 415.012,94.815 400.86,85.238C386.707,75.661 368.725,73.73 352.862,80.084C272.263,112.367 145.304,163.219 96.519,182.759C84.433,187.6 76.509,199.309 76.509,212.329L76.509,280.183Z"
						/>
					</g>
				</svg>
			</a>
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMobileMenu}
					type="button"
					class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
					aria-expanded={isMobileMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<div class="flex sm:flex-shrink justify-between">
		<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
			<a href="/prayers" class="font-medium text-gray-500 hover:text-yellow-400">Prayers</a>

			<a href="/about" class="font-medium text-gray-500 hover:text-yellow-400">About</a>
		</div>

		<button
			on:click={() => setDarkMode(!isDarkEnabled)}
			type="button"
			class="rounded-full ml-4 text-gray-400 hover:text-gray-500 focus:outline-none  focus:ring-yellow-400"
		>
			<span class="sr-only">Toggle Dark</span>
			{#if !isDarkEnabled}
				<svg
					transition:slide={{ delay: 150, duration: 200 }}
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					transition:slide={{ delay: 150, duration: 200 }}
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div
			transition:slide={{
				delay: 200,
				duration: 200
			}}
			class="md:hidden absolute top-0 left-0 bg-white w-full h-24"
			id="mobile-menu"
		>
			<div class="pt-2 pb-3 space-y-1">
				<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
				<a
					on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					href="/prayers"
					class="border-yellow-400 text-slate-600 hover:border-rose-600 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					aria-current="page"
				>
					Prayers
				</a>

				<a
					on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					href="/about"
					class="border-yellow-400 text-slate-600 hover:border-rose-600 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					About
				</a>
			</div>
		</div>
	{/if}
</nav>
