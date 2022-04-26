<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	let isDarkEnabled = true;
	let isMobileMenuOpen = false;

	const toggleMobileMenu = () => {
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

<nav
	class="px-4 md:px-8 sticky z-50 top-0 bg-white dark:bg-slate-900 border-slate-200"
	aria-label="Global"
>
	<div class="flex items-center justify-between py-4">
		<div class="flex items-center flex-grow">
			<div class="flex items-center justify-between w-full md:w-auto">
				<a href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-10 w-10 text-yellow-400 hover:text-yellow-500"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
							clip-rule="evenodd"
						/>
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
			<!--OVERLAY-->
			<div
				transition:fade={{
					delay: 200,
					duration: 200
				}}
				on:click={toggleMobileMenu}
				class="z-10 bg-slate-400 opacity-60 min-h-screen h-full w-full z-10 absolute top-0 left-0"
			/>
			<div
				transition:slide={{
					delay: 200,
					duration: 200
				}}
				class="z-20 md:hidden absolute top-0 left-0 bg-white w-full h-24"
				id="mobile-menu"
			>
				<div class="pt-2 pb-3 space-y-1">
					<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
					<a
						on:click={toggleMobileMenu}
						href="/prayers"
						class="border-yellow-400 text-slate-600 hover:border-rose-600 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
						aria-current="page"
					>
						Prayers
					</a>

					<a
						on:click={toggleMobileMenu}
						href="/about"
						class="border-yellow-400 text-slate-600 hover:border-rose-600 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>
						About
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>
