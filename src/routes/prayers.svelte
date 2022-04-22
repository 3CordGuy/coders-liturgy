<script context="module">
	export const load = async ({ fetch }) => {
		const prayers = await fetch('/api/prayers.json');
		const allPrayers = await prayers.json();

		return {
			props: {
				prayers: allPrayers
			}
		};
	};
</script>

<script>
	import SubscribeLink from '../components/subscribe-link.svelte';
	import PageHeading from '../components/page-heading.svelte';
	import PrayerList from '../components/prayer-list.svelte';
	export let prayers;

	let filter = '';
	const getList = (term) => {
		if (term) {
			return prayers.filter((item) => {
				if (item.meta.title.toLowerCase().includes(term.toLowerCase())) {
					return item;
				} else if (item.meta.description.toLowerCase().includes(term.toLowerCase())) {
					return item;
				} else if (item.meta.tags.join('').includes(term.toLowerCase())) {
					return item;
				}
			});
		}
		return prayers;
	};

	$: list = getList(filter);
</script>

<svelte:head>
	<title>Coder's Liturgy | Prayers</title>
</svelte:head>

<div class="px-4 pb-12">
	<PageHeading
		text="Prayers"
		hasBrackets={false}
		subtitle="Meditative Scripture and Prayers for Christian Coders"
	/>
	<SubscribeLink />

	<div class="relative">
		<input
			class="shadow-inner bg-gray-100 w-full rounded px-2 py-2 outline-none"
			placeholder="Filter Prayers"
			type="text"
			bind:value={filter}
		/>
		{#if filter}
			<div class="absolute top-0 right-0 py-2">
				<button
					class="text-gray-400 ml-2 px-2 focus:ring-yellow-500"
					on:click={() => (filter = '')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		{/if}
	</div>

	<PrayerList items={list} />
</div>
