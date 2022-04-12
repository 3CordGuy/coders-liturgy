<script>
	let gravUrl = 'https://secure.gravatar.com/avatar/f86365953b20c35f0e8fbf1abc367325?s=200';
	export let name = 'Josh Weaver';
</script>

<div class="flex items-center">
	<div>
		<img class="inline-block h-14 w-14 rounded-full" src={gravUrl} alt="Gravatar for Josh" />
	</div>
	<div class="ml-3">
		<p class="text-md font-medium dark:text-gray-400 text-gray-400 group-hover:text-gray-900">
			{name}
		</p>
	</div>
</div>
