export const get = async () => {
	const allPrayerFiles = import.meta.glob('../prayers/*.md');
	const prayers = Object.entries(allPrayerFiles);

	const allPrayers = await Promise.all(
		prayers.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const prayerPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: prayerPath
			};
		})
	);

	const sortedByTitle = allPrayers.sort((a, b) => {
		return b.meta.title - a.meta.title;
	});

	return {
		body: sortedByTitle
	};
};
