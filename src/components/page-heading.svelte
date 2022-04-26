<script>
	export let text = '';
	export let id = '';
	export let classes = '';
	export let hasBrackets = true;
	export let subtitle = '';
</script>

<div class="col-start-1 lg:col-start-3 col-span-8 mb-4">
	<h1
		{id}
		class={`text-2xl tracking-tight font-extrabold
	        text-rose-600 sm:text-5xl mb-2
			md:text-5xl ${classes} ${hasBrackets ? 'lowercase' : ''}`}
	>
		{#if hasBrackets}
			&lt;{text}/&gt;
		{:else}
			{text}
		{/if}
	</h1>
	{#if subtitle}
		<h2 class="text-xl text-gray-500">{subtitle}</h2>
	{/if}
</div>
