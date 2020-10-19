export default (req, res) => {
	const {
		query: { name },
	} = req;

	res.json({ message: `hello ${name}` });
};
