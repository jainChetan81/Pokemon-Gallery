import { FC, useCallback, useRef, useState } from "react";
import { getPokemons } from "../api";
import usePagination from "../components/hooks/usePagination";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import PokemonCard from "../components/PokemonCard";
import { POKEMON_FIRST_LIMIT, POKEMON_INCREASE_LIMIT } from "../constants";
import styles from "../styles/Home.module.css";
import { Pokemon } from "../types";

type Props = {
	firstPokemons: Pokemon[];
};

const Home: FC<Props> = ({ firstPokemons }) => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([...firstPokemons]);
	const [offset, setOffset] = useState<number>(0);
	const { loading, error, hasMore } = usePagination(offset, POKEMON_INCREASE_LIMIT, pokemons, setPokemons);
	const observer = useRef<any>(null); // <HTMLElement | null>
	const lastBookElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setOffset((prevOffset: number) => prevOffset + POKEMON_INCREASE_LIMIT);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);
	if (pokemons.length === 0) {
		// eslint-disable-next-line no-restricted-globals
		return <Modal show onClose={() => location.reload()} title="Please check your internet connection" />;
	}
	return (
		<Layout title={`Pokedox | Home(${pokemons.length.toString()})`}>
			<div className={styles.photo_grid}>
				{pokemons.map(({ name, image }: Pokemon, index: number) => (
					<div
						data-testid="pokemon"
						ref={pokemons.length === index + 1 ? lastBookElementRef : null}
						key={`${name}-${index}`}
					>
						<PokemonCard key={`${name}-${index}`} name={name} image={image} index={index} />
					</div>
				))}
			</div>
			{loading && <h3 className={styles.text}>Loading...</h3>}
			{error && <h3 className={styles.text}>Error 😞 please try again</h3>}
		</Layout>
	);
};

export async function getStaticProps() {
	try {
		const firstPokemons: Pokemon[] = await getPokemons(0, POKEMON_FIRST_LIMIT);
		return {
			props: { firstPokemons },
			revalidate: 10000,
		};
	} catch (err) {
		console.error(err);
	}
}
export default Home;

// TODO: do react testing  with typescript
// TODO: tdd while using framer-motion
// TODO: research for next-offline
// TODO: research for next-page-transitions
