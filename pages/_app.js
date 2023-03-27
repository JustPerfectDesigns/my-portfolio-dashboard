import "../styles/globals.css";
import "../components/Layout";
import Layout from "../components/Layout";
import { ThemeProvider } from 'next-themes';


function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="dark" attribute="class" enableSystem="false">
			{/* <Loading /> */}
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
