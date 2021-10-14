import Link from "next/link";
import { getPokemons } from "../api";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import { Pokemon, PokemonUrl } from "../types";

const Home = ({ pokemon }: any) => (
	<Layout title="Pokedex | Home">
		<div className={styles.photo_grid}>
			{pokemon.map(({ name, url, image }: Pokemon, index: number) => (
				<article key={`${pokemon.name}-${index}`}>
					<Link href={`/pokemon/${index + 1}`}>
						<a>
							<PokemonCard name={name} url={url} image={image} />
						</a>
					</Link>
				</article>
			))}
		</div>
	</Layout>
);

export async function getStaticProps() {
	try {
		const pokemon: PokemonUrl[] = await getPokemons(20);
		return {
			props: { pokemon },
		};
	} catch (err) {
		console.error(err);
	}
}
export default Home;

// TODO: cypress
// TODO: witherrorHandler for axios
// TODO: fixme:ensure pokemon details page is part of SPA
// TODO: PWA
// TODO: infinite scrolling for pokemon list //fallback: pagination for pokemon lists
// TODO: tdd while using framer-motion
// "react-test-renderer": "^17.0.2",
