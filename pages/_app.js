import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "../theme";



function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider>
				<CSSReset />
				<Component {...pageProps} />
			</ColorModeProvider>
		</ThemeProvider>
	);
}

export default App;
