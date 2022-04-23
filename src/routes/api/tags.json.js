export const get = async () => {
	const allPrayerFiles = import.meta.glob('../prayers/*.md');
	const prayers = Object.entries(allPrayerFiles);
	const allTags = {};

	await Promise.all(
		prayers.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			metadata.tags.forEach((tag) => {
				if (tag in allTags) {
					allTags[tag] = allTags[tag] + 1;
				} else {
					allTags[tag] = 1;
				}
			});
		})
	);

	const sortedTagsNames = Object.keys(allTags);

	return {
		body: sortedTagsNames.map((tag) => ({ name: tag, count: allTags[tag] }))
	};
};
