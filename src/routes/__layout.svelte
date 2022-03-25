<script>
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<div class="h-full flex flex-col">
	<section class="flex-shrink-0 flex-2 justify-between">
		<Hero>
			<Nav slot="nav" />
		</Hero>
	</section>
	<section class="flex-1">
		<slot />
	</section>
</div>
