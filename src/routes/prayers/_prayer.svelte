<script>
	import PrayerHeading from '../../components/prayer-heading.svelte';
	import Verse from '../../components/prayer-verse.svelte';
	import VerseBlock from '../../components/prayer-verse-block.svelte';

	export let title;
	export let verses;
	export let tags;
</script>

<svelte:head>
	<title>Coder's Liturgy | {title}</title>
</svelte:head>

<div class="h-full flex justify-center px-4 sm:px-6 lg:px-8">
	<div class="w-full lg:w-2/3 xl:w-1/2 flex flex-col">
		<PrayerHeading text={title} id="when-lacking-motivation" />

		<div class="text-gray-400 border-l-4 border-sky-400 pl-8 mb-8">
			<slot />
		</div>

		<VerseBlock>
			{#each verses as verse}
				<Verse passage={verse} />
			{/each}
		</VerseBlock>

		<div class="mb-8 space-x-2">
			{#each tags as tag}
				<span class="rounded bg-gray-300 px-2 py-1 text-xs">{tag}</span>
			{/each}
		</div>
	</div>
</div>
