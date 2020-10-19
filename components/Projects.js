import {
	Box,
	Flex,
	Grid,
	Heading,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/core";
import useSWR from "swr";

export default function Projects() {
	const fetcher = (url, options) =>
		fetch(url, options).then(res => res.json());

	const { data: repositories, error } = useSWR(
		"https://api.github.com/users/Joehoel/starred",
		fetcher
	);

	console.log(repositories);

	return (
		<Stack mt="10">
			<Box>
				<Heading as="h4" size="md" textTransform="uppercase">
					Projects
				</Heading>

				<Grid
					mt="4"
					templateColumns={{ xl: "repeat(2, 1fr)", sm: "1fr" }}
					gap="4"
				>
					{repositories?.map(repo => (
						<Card
							_hover={{ transform: "scale(1.01)" }}
							title={repo.name}
							desc={repo?.description}
							language={repo.language}
							href={repo.html_url}
							target="_blank"
							key={repo.id}
						/>
					))}
				</Grid>
			</Box>
		</Stack>
	);
}

function Card({ title, desc, language, ...rest }) {
	return (
		<Link {...rest}>
			<Box p={5} shadow="md" borderWidth="1px">
				<Heading size="xs" textTransform="uppercase">
					{language}
				</Heading>
				<Heading size="lg">{title}</Heading>
				<Text mt={4}>{desc}</Text>
			</Box>
		</Link>
	);
}
