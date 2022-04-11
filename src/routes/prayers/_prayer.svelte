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

<div class="flex justify-center px-4 sm:px-4 lg:px-8">
	<main class="">
		<div class="w-full flex flex-col md:flex-row gap-4">
			<article class="basis-3/4 grow-0 prose lg:prose-lg prose-slate dark:prose-invert">
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
			<aside class="md:basis-1/4 shrink-0">
				<VerseBlock>
					<div class="sticky top-0">
						{#each verses as verse}
							<Verse passage={verse} />
						{/each}
					</div>
				</VerseBlock>
			</aside>
		</div>
	</main>
</div>
