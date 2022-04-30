<script>
	export let items = [];
	import Tag from './tag.svelte';
	import Icon from './icon.svelte';
	import { fade } from 'svelte/transition';
</script>

<div class="flow-root">
	<ul class="space-y-4">
		{#each items as item}
			<li transition:fade={{ delay: 150, duration: 200 }}>
				<div
					class="relative focus-within:ring-2
						   focus-within:ring-yellow-500
						   flex flex-row grow items-center bg-gray-100 dark:bg-slate-800 rounded
						   transition ease-in-out delay-150 hover:bg-slate-100 hover:dark:bg-slate-700
						   hover:rounded hover:shadow-lg duration-300"
				>
					<div class="flex flex-row overflow-hidden rounded">
						<div class="grow hover:bg-yellow-500 w-24 h-24">
							{#if item.meta.icons && item.meta.icons[0]}
								<Icon
									iconName={item.meta.icons[0].name}
									classes={`w-24 h-24 text-${item.meta.icons[0].color}`}
								/>
							{:else}
								<Icon iconName="heart" classes="w-12 h-12 mt-1 text-yellow-400" />
							{/if}
						</div>

						<div class="flex px-4 py-2 items-center">
							<div>
								<h3 class="text-sm font-semibold text-slate-500">
									{#if item.path}
										<a
											href={item.path}
											class="text-md md:text-lg lg:text-xl
												   transition ease-in-out delay-100
												   hover:text-yellow-500 dark:hover:text-yellow-400
												   duration-300
												   focus:outline-none"
										>
											<!-- Extend touch target to entire panel -->
											<span class="absolute inset-0" aria-hidden="true" />
											{item.meta.title}
										</a>
									{:else}
										<span class="absolute inset-0" aria-hidden="true" />
										{item.meta.title} <sup class="uppercase italic">coming soon</sup>
									{/if}
								</h3>
								<p class="mt-1 mb-0 text-xs dark:text-slate-500 md:text-sm line-clamp-2">
									{item.meta.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
