import Head from "next/head";
import PropTypes from "prop-types";
import { LayoutType } from "../types";

function Home({ title, keywords, description, children }: LayoutType) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="manifest.json" />
			</Head>

			<main className="container mx-auto">{children}</main>
		</>
	);
}
Home.defaultProps = {
	title: "Quiz App",
	description: "Quiz app by Next js created by Chetan Jain",
	keywords: "[NextJs, Pokemon, Tailwind, Axios, Jest, Cypress]",
};
Home.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
};
export default Home;
