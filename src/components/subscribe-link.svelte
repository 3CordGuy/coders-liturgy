<script>
	import RssIcon from '../icons/rss-icon.svelte';
	export let classes = '';
</script>

<a
	class={'col-span-12 flex space-x-2 text-yellow-400 dark:text-yellow-200 mb-4 ' + classes}
	href="/feed/rss.xml"
>
	<RssIcon classes="mr-2" /> Subscribe to updates via RSS
</a>
