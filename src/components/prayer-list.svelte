<script>
	export let items = [];
	import { fade } from 'svelte/transition';
</script>

<div class="flow-root ">
	<ul class="my-5 divide-y divide-slate-700">
		{#each items as item}
			<li transition:fade={{ delay: 150, duration: 200 }} class="py-5">
				<div class="relative focus-within:ring-2 focus-within:ring-yellow-500">
					<h3 class="text-sm font-semibold text-yellow-600">
						{#if item.path}
							<a href={item.path} class="hover:underline focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true" />
								{item.meta.title}
							</a>
						{:else}
							<span class="absolute inset-0" aria-hidden="true" />
							{item.meta.title} <sup class="uppercase italic">coming soon</sup>
						{/if}
					</h3>
					<p class="mt-1 dark:text-slate-500 text-sm line-clamp-2">
						{item.meta.description}
					</p>
					{#if item.meta.tags}
						<p>
							{#each item.meta.tags as tag}
								<span class="mr-2 text-xs text-gray-600">{tag}</span>
							{/each}
						</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</div>
