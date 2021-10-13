import Link from "next/link";
import { getPokemons } from "../api";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import { Pokemon, PokemonUrl } from "../types";

const Home = ({ pokemon }: any) => (
	<Layout title="NextJS Pokedex">
		<h1 className="text-4xl mb-8 text-center dark">The Next Pokedex</h1>
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

// TODO: react testing library
// TODO: cypress
// TODO: witherrorHandler for axios
// TODO: add types to api
// TODO: fixme:ensure pokemon details page is part of SPA
