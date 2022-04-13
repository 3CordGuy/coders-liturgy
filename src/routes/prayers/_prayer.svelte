<script>
	import Verse from '../../components/prayer-verse.svelte';
	import VerseBlock from '../../components/prayer-verse-block.svelte';
	import Tag from '../../components/tag.svelte';
	import PageHeading from '../../components/page-heading.svelte';

	export let title;
	export let verses;
	export let tags;
</script>

<svelte:head>
	<title>Coder's Liturgy | {title}</title>
</svelte:head>

<div class="flex justify-center px-4 md:px-8 pb-8">
	<div class="w-full grid grid-cols-1 gap-4 items-start md:grid-cols-3">
		<article class="md:col-span-2 grow-0 prose lg:prose-lg prose-slate dark:prose-invert">
			<PageHeading hasBrackets={false} text={title} id="when-lacking-motivation" />

			<div class="mb-8">
				<slot />
			</div>

			<div class="mb-8 space-x-2">
				{#each tags as tag}
					<Tag text={tag} />
				{/each}
			</div>
		</article>
		<aside class="md:col-span-1 shrink-0 flex grow">
			<VerseBlock>
				<h2 class="text-slate-500 dark:text-slate-300">Verses To Consider</h2>
				<div class="">
					{#each verses as verse}
						<Verse passage={verse} />
					{/each}
				</div>
			</VerseBlock>
		</aside>
	</div>
</div>
