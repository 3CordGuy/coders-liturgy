<script>
	export let items = [];
	import Tag from './tag.svelte';
	import Icon from './icon.svelte';
</script>

<div class="flow-root ">
	<ul class="my-4 space-y-4">
		{#each items as item}
			<li>
				<div
					class="relative focus-within:ring-2
						   focus-within:p-4 focus-within:ring-yellow-500
						   flex flex-row grow p-4 items-center bg-gray-100 dark:bg-slate-800 rounded
						   transition ease-in-out delay-150 hover:bg-slate-200 hover:dark:bg-slate-700
						   hover:rounded duration-300"
				>
					<div class="flex flex-row">
						<div class="mr-4">
							{#if item.meta.icons && item.meta.icons[0]}
								<Icon
									iconName={item.meta.icons[0].name}
									classes={`w-12 h-12 mt-1 text-${item.meta.icons[0].color}`}
								/>
							{:else}
								<Icon iconName="heart" classes="w-12 h-12 mt-1 text-yellow-400" />
							{/if}
						</div>

						<div>
							<h3 class="text-sm font-semibold text-slate-500">
								{#if item.path}
									<a
										href={item.path}
										class="text-xl
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
							<p class="mt-1 mb-0 text-sm dark:text-slate-500 text-sm line-clamp-2">
								{item.meta.description}
							</p>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
