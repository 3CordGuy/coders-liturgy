<script>
	import Verse from '../../components/prayer-verse.svelte';
	import VerseBlock from '../../components/prayer-verse-block.svelte';
	import Tag from '../../components/tag.svelte';
	import PageHeading from '../../components/page-heading.svelte';
	import Icon from '../../components/icon.svelte';

	export let title;
	export let description;
	export let verses;
	export let icons;
	export let tags;
</script>

<svelte:head>
	<title>Coder's Liturgy | {title}</title>
</svelte:head>

<div class="flex justify-center my-12 px-4 md:px-8 pb-8">
	<div class="w-full grid grid-cols-1 gap-8 items-start md:grid-cols-3">
		<article class="md:col-span-2 grow-0">
			<div class="flex flex-row space-x-4 mb-12">
				{#if icons}
					<div>
						{#each icons as icon}
							<Icon iconName={icon.name} classes={`w-12 h-12 text-${icon.color}`} />
						{/each}
					</div>
				{/if}
				<div>
					<PageHeading
						classes="mt-2 mb-2"
						hasBrackets={false}
						text={title}
						id="when-lacking-motivation"
					/>
					<h2 class="text-xl text-slate-400 dark:text-slate-600">{description}</h2>
				</div>
			</div>

			<div class="mb-8 md:pl-16 prose lg:prose-lg prose-slate dark:prose-invert">
				<slot />
				<div class="mb-8  space-x-2">
					{#each tags as tag}
						<Tag text={tag} />
					{/each}
				</div>
			</div>
		</article>
		<aside class="md:col-span-1 shrink-0 flex grow">
			<VerseBlock>
				<div class="flex flex-row">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mr-2 text-slate-500 dark:text-slate-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
					<h2 class="text-slate-500 dark:text-slate-300">Scripture To Consider</h2>
				</div>
				<div class="">
					{#each verses as verse}
						<Verse passage={verse} />
					{/each}
				</div>
			</VerseBlock>
		</aside>
	</div>
</div>
