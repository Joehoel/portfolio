import Head from "next/head";
import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	Stack,
	Link,
	Text,
	useColorMode,
} from "@chakra-ui/core";
import { FaGithub, FaTwitter } from "react-icons/fa";

// import Header from "../components/Header";
// import Project from "../components/Project";
import Projects from "../components/Projects";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = { dark: "#202124" };

	return (
		<Box bg={bgColor[colorMode]}>
			<Head>
				<title>Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Container */}
			<Box
				maxW="70vw"
				mx="auto"
				height="100vh"
				justifyContent="space-between"
				pt="10"
			>
				{/* Heading */}
				<Box pos="relative">
					<Heading>Hello, {"I'm"} Joël Kuijper.</Heading>
					{/* Text */}
					<Text mt="4">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Quia, repellat consectetur voluptatum deleniti,
						ducimus corrupti qui eos, dolorem error reprehenderit
						atque aliquid officia magnam maxime! Illum quas facilis
						accusantium accusamus quasi fugiat eaque ullam
						asperiores amet? Nesciunt, recusandae officia.
						Distinctio adipisci cum eos dolore. Doloremque aliquid
						nisi fuga sapiente fugit!
					</Text>
					<Button
						onClick={toggleColorMode}
						pos="absolute"
						right="0"
						top={{ md: "0" }}
						bottom={{ sm: "0" }}
					>
						{colorMode === "light" ? "🌙" : "🌞"}
					</Button>
				</Box>
				<Flex mt="10">
					<Stack isInline="true" alignItems="center">
						<Avatar
							name="Joël Kuijper"
							src="https://avatars3.githubusercontent.com/u/31251240?v=4"
						/>
						<Flex
							alignItems="center"
							ml="4"
							as={Link}
							href="https://twitter.com/joel_kuijper"
							target="_blank"
						>
							<Box as={FaTwitter} size="20px" />
							<Text ml="2">Twitter</Text>
						</Flex>
						<Flex
							alignItems="center"
							ml="4"
							as={Link}
							href="https://github.com/Joehoel"
							target="_blank"
						>
							<Box as={FaGithub} size="20px" />
							<Text ml="2">Github</Text>
						</Flex>
					</Stack>
				</Flex>
				{/* Projects */}
				<Projects />
			</Box>
		</Box>
	);
}
