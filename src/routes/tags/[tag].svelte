<script context="module">
	export const load = async ({ fetch, params }) => {
		const prayers = await fetch('/api/prayers.json');
		const allPrayers = await prayers.json();
		const tags = await fetch('/api/tags.json');
		const allTags = await tags.json();

		const filteredPrayers = allPrayers.filter(({ meta }) => {
			const sanitizeTag = (t) => t.replace(/-/g, '').replace(/ /g, '');
			const cleanTags = meta.tags.map((tag) => {
				return sanitizeTag(tag);
			});
			return cleanTags.includes(sanitizeTag(params.tag));
		});

		return {
			props: {
				currentTag: params.tag,
				prayers: filteredPrayers,
				tags: allTags
			}
		};
	};
</script>

<script>
	import SubscribeLink from '../../components/subscribe-link.svelte';
	import PageHeading from '../../components/page-heading.svelte';
	import PrayerList from '../../components/prayer-list.svelte';
	import TagList from '../../components/tag-list.svelte';
	export let prayers;
	export let tags;
	export let currentTag;
</script>

<svelte:head>
	<title>Coder's Liturgy | Prayers by Tag</title>
</svelte:head>
<div class="px-4 pb-12 md:grid xs:grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-8">
	<PageHeading
		classes="col-span-12"
		text={`Prayers tagged with "${currentTag}"`}
		hasBrackets={false}
		subtitle="Meditative Scripture and Prayers for Christian Coders"
	/>
	<div class="col-start-1 lg:col-start-3 col-end-8">
		<PrayerList items={prayers} />
	</div>
	<div class="mt-4 md:mt-0 col-start-8 col-end-12 lg:col-end-11 row-start-2 row-span-2">
		<TagList {tags} />
		<hr class="my-4" />
		<SubscribeLink />
	</div>
</div>
