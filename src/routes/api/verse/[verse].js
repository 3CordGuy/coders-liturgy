export const get = async ({ params }) => {
	const res = await fetch(
		`https://api.esv.org/v3/passage/html/?q=${params.verse}&include-footnotes=false&include-subheadings=false`,
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
