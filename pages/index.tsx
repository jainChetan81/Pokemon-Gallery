import Link from "next/link";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Home.module.css";
import { Pokemon, PokemonUrl } from "../types";

const Home = ({ pokemon }: any) => (
	<Layout /* title="NextJS Pokedex" */>
		<h1 className="text-4xl mb-8 text-center dark">The Next Pokedex</h1>
		<ul className={styles.photo_grid}>
			{pokemon.map(({ name, url, image }: Pokemon, index: number) => (
				<Link href={`/pokemon?id=${index + 1}`}>
					<a>
						<PokemonCard key={`${pokemon.name}-${index}`} name={name} url={url} image={image} />
					</a>
				</Link>
			))}
		</ul>
	</Layout>
);

export async function getStaticProps() {
	try {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
		const { results } = await res.json();
		const pokemon: Array<Pokemon> = results.map((pokeman: PokemonUrl, index: number) => {
			const paddedId: String = `00${index + 1}`.slice(-3);

			const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
			return { ...pokeman, image };
		});
		return {
			props: { pokemon },
		};
	} catch (err) {
		console.error(err);
	}
}
export default Home;
