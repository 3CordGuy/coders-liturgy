<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script>
	import Footer from '../components/footer.svelte';
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
	import { fade } from 'svelte/transition';

	export let currentRoute;
</script>

<div
	class="flex flex-grow flex-shrink-0 flex-col bg-white dark:bg-slate-900 selection:bg-yellow-400 selection:text-slate-800 hero-bg"
>
	<Nav slot="nav" />
	<header class="flex-shrink-0 flex-2 justify-between">
		<Hero />
	</header>
	{#key currentRoute}
		<main
			in:fade={{ duration: 150, delay: 100 }}
			out:fade={{ duration: 150 }}
			id="layout-main"
			class="mx-auto grow "
		>
			<slot />
		</main>
	{/key}
	<Footer />
</div>
