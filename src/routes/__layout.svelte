<script>
	import Footer from '../components/footer.svelte';
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<div
	class="flex flex-grow flex-shrink-0 flex-col bg-white dark:bg-slate-900 selection:bg-yellow-400"
>
	<Nav slot="nav" />
	<header class="flex-shrink-0 flex-2 justify-between">
		<Hero />
	</header>
	<main class="mx-auto grow bg-white dark:bg-slate-900">
		<slot />
	</main>
	<Footer />
</div>
