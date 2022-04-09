<script>
	import PrayerHeading from '../../components/prayer-heading.svelte';
	import Verse from '../../components/prayer-verse.svelte';
	import VerseBlock from '../../components/prayer-verse-block.svelte';
	import Tag from '../../components/tag.svelte';

	export let title;
	export let verses;
	export let tags;
</script>

<svelte:head>
	<title>Coder's Liturgy | {title}</title>
</svelte:head>

<div class="flex justify-center px-4 sm:px-4 lg:px-8">
	<article class="prose lg:prose-lg prose-slate dark:prose-invert">
		<div class="w-full flex flex-col">
			<PrayerHeading text={title} id="when-lacking-motivation" />

			<div class="mb-8">
				<slot />
			</div>

			<VerseBlock>
				{#each verses as verse}
					<Verse passage={verse} />
				{/each}
			</VerseBlock>

			<div class="mb-8 space-x-2">
				{#each tags as tag}
					<Tag text={tag} />
				{/each}
			</div>
		</div>
	</article>
</div>
