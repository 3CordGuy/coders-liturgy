<script>
	import PageHeading from '../components/page-heading.svelte';
	import PrayerList from '../components/prayer-list.svelte';
	import prayerList from '../components/list';

	let filter = '';
	const getList = (term) => {
		if (term) {
			return prayerList.filter((item) => {
				if (item.title.toLowerCase().includes(term.toLowerCase())) {
					return item;
				} else if (item.description.toLowerCase().includes(term.toLowerCase())) {
					return item;
				}
			});
		}
		return prayerList;
	};

	$: list = getList(filter);
</script>

<svelte:head>
	<title>Coder's Liturgy | Prayers</title>
</svelte:head>

<div class="px-4 sm:px-6 lg:px-8">
	<PageHeading text="Prayers" />
	<div class="mt-8 rounded py-4 px-8 w-1/2">
		<div>
			<input
				class="rounded px-2 py-2 outline-none"
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
</div>
