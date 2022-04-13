<script>
	import { onMount } from 'svelte';

	export let iconName = 'eye';
	export let classes = '';

	let icon;

	onMount(async () => {
		icon = (await import(`../icons/${iconName}.svelte`)).default;
	});
</script>

<svelte:component this={icon} classes={`mt-0 ${classes}`} />
