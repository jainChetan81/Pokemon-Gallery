import { getPokemons } from "../api";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import { Pokemon, PokemonUrl } from "../types";

const Home = ({ pokemon }: any) => (
	<Layout title="Pokedex | Home">
		<div className={styles.photo_grid}>
			{pokemon.map(({ name, image }: Pokemon, index: number) => (
				<PokemonCard key={`${pokemon.name}-${index}`} name={name} image={image} index={index} />
			))}
		</div>
	</Layout>
);

export async function getStaticProps() {
	try {
		const pokemon: PokemonUrl[] = await getPokemons(0, 20);
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
// TODO: infinite scrolling for pokemon list //fallback: pagination for pokemon lists
// TODO: tdd while using framer-motion
