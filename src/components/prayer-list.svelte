<script>
	export let items = [];
	import Tag from './tag.svelte';
	import Icon from './icon.svelte';
</script>

<div class="flow-root ">
	<ul class="my-5 divide-y divide-1 divide-slate-300">
		{#each items as item}
			<li class="py-5">
				<div class="relative focus-within:ring-2 focus-within:ring-yellow-500 flex flex-row">
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
								<a href={item.path} class="text-xl hover:underline  focus:outline-none">
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
							<p class="space-x-2">
								{#each item.meta.tags as tag}
									<Tag text={tag} />
								{/each}
							</p>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
