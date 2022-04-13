const siteURL = 'https://codersliturgy.com';
const siteTitle = "Coder's Liturgy";
const siteDescription = 'Prayerful Heart Meditations for Christian Coders';
/* Credit to https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog for most of this code */

export const get = async () => {
	const prayers = await Promise.all(
		Object.entries(import.meta.glob('../prayers/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.slice(3, -3);
			return { ...metadata, slug };
		})
	).then((prayers) => {
		return prayers.sort((a, b) => new Date(b.date) - new Date(a.date));
	});

	const body = render(prayers);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return {
		body,
		headers
	};
};

const render = (prayers) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
	<title>${siteTitle}</title>
	<description>${siteDescription}</description>
	<link>${siteURL}</link>
	<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
	${prayers
		.map(
			(prayer) => `<item>
	<guid isPermaLink="true">${siteURL}/blog/${prayer.slug}</guid>
	<title>${prayer.title}</title>
	<link>${siteURL}/${prayer.slug}</link>
	<description>${prayer.description}</description>
	<pubDate>${new Date(prayer.date).toUTCString()}</pubDate>
	</item>`
		)
		.join('')}
	</channel>
	</rss>
`;
