<script>
	import Tag from '../components/tag.svelte';
	export let tags = [];
</script>

<div>
	<h2 class="text-xl mb-4 text-gray-500">Tags</h2>
	<div class="flex flex-row flex-wrap">
		<a href="/prayers">
			<div
				class="flex flex-row justify-around text-xs rounded-full
				bg-slate-400 hover:bg-slate-300 hover:text-slate-600 \
				dark:bg-slate-800 text-slate-100 dark:text-slate-300
				hover:dark:bg-slate-700 mb-2 mr-2"
			>
				<div class="px-4 py-1">All</div>
			</div>
		</a>
		{#each tags as tag}
			<Tag text={tag.name} count={tag.count} />
		{/each}
	</div>
</div>
