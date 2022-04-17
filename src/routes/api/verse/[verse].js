export const get = async ({ params }) => {
	const res = await fetch(
		`https://api.esv.org/v3/passage/html/?q=${params.verse}&include-footnotes=false&include-headings=false&include-subheadings=false&include-verse-anchors=true&include-short-copyright=true`,
		{
			headers: {
				Authorization: `Token ${import.meta.env.VITE_ESV_API}`
			}
		}
	);

	let result = await res.json();

	if (result) {
		return {
			body: result
		};
	}

	return {
		status: 404
	};
};
