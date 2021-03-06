/* eslint-disable no-restricted-globals */
import Head from "next/head";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { LayoutType } from "../types";
import Modal from "./Modal";
import Header from "./Header";

function Home({ title, keywords, description, children }: LayoutType) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="manifest.json" />
			</Head>
			<Header title="Pokemon Gallery" />
			<ErrorBoundary FallbackComponent={() => <Modal show onClose={() => location.reload()} />}>
				<main className="container mx-auto">{children}</main>
			</ErrorBoundary>
		</>
	);
}
Home.defaultProps = {
	title: "Pokedox App",
	description: "A gallery of various Pokemons",
	keywords: "[NextJs, Pokemon, Tailwind, Axios, Jest, Cypress, React Testing Library, SWR]",
};
Home.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
};
export default Home;
