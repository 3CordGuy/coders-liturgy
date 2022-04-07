<script>
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<div class="h-full flex flex-col bg-white dark:bg-slate-900">
	<header class="flex-shrink-0 flex-2 justify-between">
		<Hero>
			<Nav slot="nav" />
		</Hero>
	</header>
	<section class="flex-1 mx-auto bg-white dark:bg-slate-900">
		<slot />
	</section>
</div>
