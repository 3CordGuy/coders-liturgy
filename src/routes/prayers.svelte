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

<div class="px-4 mt-4 rounded">
	<PageHeading text="Prayers" hasBrackets={false} />
	<div>
		<input
			class="bg-gray-100 rounded px-2 py-2 outline-none"
			placeholder="Filter Prayers"
			type="text"
			bind:value={filter}
		/>
		{#if filter}
			<button class="text-rose-600 ml-2 px-2" on:click={() => (filter = '')}>Clear Filter</button>
		{/if}
	</div>

	<PrayerList items={list} />
</div>
