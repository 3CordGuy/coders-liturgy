<script>
	import '../app.css';
	import Hero from '../components/hero.svelte';
	import Nav from '../components/nav.svelte';
</script>

<Hero>
	<Nav slot="nav" />
</Hero>

<slot />
