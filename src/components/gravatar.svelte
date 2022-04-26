<script>
	let gravUrl = 'https://secure.gravatar.com/avatar/f86365953b20c35f0e8fbf1abc367325?s=200';
	export let name = 'Josh Weaver';
</script>

<div class="flex items-center">
	<div class="flex-shrink-0">
		<img class="inline-block h-24 w-24 rounded-full" src={gravUrl} alt="Gravatar for Josh" />
	</div>
	<div class="ml-3">
		<div class="text-md font-medium dark:text-gray-400 text-gray-400 group-hover:text-gray-900">
			{name}
		</div>
		<div class="text-sm font-small dark:text-gray-500 text-gray-500">
			Currently works full time as a Software Engineer for Tithe.ly and has spent the last 10 years
			as a developer in the Church Management and Non-profit software space. A husband, and father
			of 3, he helps lead worship for <a class="text-yellow-400" href="https://youareloved.church"
				>Wawasee Bible Church</a
			>.
		</div>
	</div>
</div>
