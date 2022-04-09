<script>
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<div
	class="flex flex-grow flex-shrink-0 flex-col bg-white dark:bg-slate-900 px-4 selection:bg-yellow-400"
>
	<Nav slot="nav" />
	<header class="flex-shrink-0 flex-2 justify-between">
		<Hero />
	</header>
	<section class="flex-1 flex-grow mx-auto bg-white dark:bg-slate-900">
		<slot />
	</section>
</div>
