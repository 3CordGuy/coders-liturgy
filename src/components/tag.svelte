<script>
	export let text;
	export let count;
</script>

<a
	class="flex flex-row justify-around text-xs rounded-full
	       bg-slate-400 hover:bg-slate-300 hover:text-slate-600
	       dark:bg-slate-800 text-slate-100 dark:text-slate-300
	       hover:dark:bg-slate-700 mb-2 mr-2 no-underline"
	href={`/tags/${text.replace(/ /g, '-')}`}
>
	<div class="px-2 py-1">{text}</div>
	{#if count}
		<div
			class="flex items-center justify-center rounded-full
		           w-6 bg-slate-300 dark:bg-slate-600 text-slate-500
				   dark:text-slate-300 text-xs"
		>
			{count}
		</div>
	{/if}
</a>
