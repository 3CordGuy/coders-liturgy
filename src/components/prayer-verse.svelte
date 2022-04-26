<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let passage = '';
	export let width = 'w-full';

	let passageHtml = '';

	const getVerse = async (verse) => {
		let res = await fetch(`/api/verse/${verse.toLowerCase().replace(/ /g, '+')}`);
		let data = await res.json();

		if (data && data.passages) {
			passageHtml = data.passages[0];
		}
	};

	onMount(() => {
		getVerse(passage);
	});
</script>

{#if passageHtml}
	<div
		transition:fade={{ delay: 100, duration: 250 }}
		class={`verse text-gray-400 text-sm ${width}`}
	>
		{@html passageHtml}
	</div>
{/if}

<style>
	.verse :global(.verse-num) {
		@pply text-gray-800;
	}
	.verse :global(h2) {
		font-size: 1.25em;
		font-weight: 800;
		@apply text-gray-500;
	}
	.dark .verse :global(h2) {
		font-size: 1.25em;
		font-weight: 800;
		@apply text-yellow-400;
	}
	.verse :global(h2 .mp3link) {
		@apply text-yellow-600;
	}
</style>
