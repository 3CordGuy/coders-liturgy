<script>
	import Github from '../icons/github.svelte';
	import Rss from '../icons/rss-icon.svelte';
	import Twitter from '../icons/twitter.svelte';
</script>

<footer
	class="z-10 w-full p-12 h-32 text-slate-400 dark:text-slate-300
    dark:bg-slate-800 bg-slate-100 flex flex-col basis-full"
>
	<div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 items-start">
		<div class="md:border-r border-slate-400 md:pr-8">
			<ul class="text-sm space-y-2">
				<li><a href="/prayers">Prayers for Coders</a></li>
				<li><a href="/about">About Coder's Liturgy</a></li>
				<li class="flex row items-center">
					<a class="text-sm mt-1" href="https://twitter.com/3cordguy">
						<Twitter classes="mr-2" /></a
					>
					<a class="text-sm mt-1" href="https://github.com/3cordguy/coders-liturgy"
						><Github classes="mr-2" /></a
					>
					<a class="text-sm mt-1" href="https://codersliturgy.com/feed/rss.xml"
						><Rss classes="mr-2" /></a
					>
				</li>
			</ul>
		</div>
		<div class="space-y-4">
			<div class="flex-auto justify-center max-w-7xl text-sm">
				Copyright ® {new Date().getFullYear()} Josh Weaver. All rights reserved.
			</div>
			<div class="text-xs">
				Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®),
				copyright © 2001 by Crossway, a publishing ministry of Good News Publishers.<br />Used by
				permission. All rights reserved.
			</div>
		</div>
	</div>
</footer>
