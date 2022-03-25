<script>
	export let items = [];
	import { fade } from 'svelte/transition';
</script>

<div class="flow-root ">
	<ul class="my-5 divide-y divide-slate-700">
		{#each items as item}
			<li transition:fade={{ delay: 150, duration: 200 }} class="py-5">
				<div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
					<h3 class="text-sm font-semibold text-yellow-400">
						{#if item.link}
							<a href={'prayers' + item.link} class="hover:underline focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true" />
								{item.title}
							</a>
						{:else}
							<span class="absolute inset-0" aria-hidden="true" />
							{item.title} <sup class="text-yellow-700 uppercase italic">coming soon</sup>
						{/if}
					</h3>
					<p class="mt-1 text-sm text-gray-400 line-clamp-2">
						{item.description}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
