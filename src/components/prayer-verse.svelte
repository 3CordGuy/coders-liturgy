<script>
	export let book = '';
	export let location = '';
	export let translation = '';
	export let bgColor = 'indigo';
	export let textColor = 'slate-400';
	export let width = 'w-1/3';
</script>

<div class={`verse bg-${bgColor} text-${textColor} text-sm ${width}`}>
	<h4 class="text-xl text-gray-300 font-bold">
		{book} <span class="">{location}</span>
	</h4>
	<slot /><span class="text-sm">{translation}</span>
</div>

<style>
	.verse :global(sup) {
		margin-right: 0.25em;
	}
</style>
