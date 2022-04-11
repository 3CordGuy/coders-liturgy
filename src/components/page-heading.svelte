<script>
	export let text = '';
	export let hasBrackets = true;
</script>

<h1
	class={`text-2xl tracking-tight font-extrabold text-rose-600 sm:text-5xl md:text-5xl ${
		hasBrackets ? 'lowercase' : ''
	}`}
>
	{#if hasBrackets}
		&lt;{text}/&gt;
	{:else}
		{text}
	{/if}
</h1>
