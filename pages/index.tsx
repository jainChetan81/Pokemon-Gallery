import Link from "next/link";
import { getPokemons } from "../api/pokemons";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import { Pokemon, PokemonUrl } from "../types";

const Home = ({ pokemon }: any) => (
	<Layout title="NextJS Pokedex">
		<h1 className="text-4xl mb-8 text-center dark">The Next Pokedex</h1>
		<ul className={styles.photo_grid}>
			{pokemon.map(({ name, url, image }: Pokemon, index: number) => (
				<Link href={`/pokemon/${index + 1}`} key={`${pokemon.name}-${index}`}>
					<a>
						<PokemonCard name={name} url={url} image={image} />
					</a>
				</Link>
			))}
		</ul>
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
