import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import GoogleTagManager from "../components/GoogleTagManager";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<GoogleTagManager>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</GoogleTagManager>
	);
}
export default App;
