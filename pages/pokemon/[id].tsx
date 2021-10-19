import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { getPokemonDetail, getPokemons } from "../../api";
import Layout from "../../components/Layout";
import { PokemonUrl } from "../../types";
import { POKEMON_FIRST_LIMIT } from "../../constants";
import Modal from "../../components/Modal";

type Props = {
	pokeman: any;
};

const PokemonDetails: FC<Props> = ({ pokeman }) => {
	if (Object.keys(pokeman).length === 0) {
		// eslint-disable-next-line no-restricted-globals
		return <Modal show onClose={() => location.reload()} title="Please check your internet connection" />;
	}
	return (
		<Layout title={`Pokedox | ${pokeman?.name}`}>
			<div className="container mx-auto max-w-xl pt-8 min-h-screen">
				<h1 className="text-4xl mb-2 text-center capitalize">
					{pokeman.id}. {pokeman.name}
				</h1>
				<Image src={pokeman.image} alt={`${pokeman.name} details image`} width={500} height={500} />
				<p>
					<span className="font-bold mr-2">Weight:</span> {pokeman.weight}
				</p>
				<p>
					<span className="font-bold mr-2">Height:</span>
					{pokeman.height}
				</p>
				<h2 className="text-2xl mt-6 mb-2">Types</h2>
				{pokeman.types.map(({ type, slot }: any) => (
					<p key={`${type.name}-${slot}`}>
						{slot} {type.name}
					</p>
				))}
				<p className="mt-10 text-center">
					<Link href="/">
						<a className="text-2xl underline" aria-label="Go to Home">
							Home
						</a>
					</Link>
				</p>
			</div>
		</Layout>
	);
};
export async function getStaticProps({ params }: any) {
	const { id }: any = params;
	try {
		const pokeman: any = await getPokemonDetail(id);
		return {
			props: { pokeman },
			revalidate: 10000,
		};
	} catch (err) {
		console.error(err);
	}
}

export async function getStaticPaths() {
	const pokemon: PokemonUrl[] = (await getPokemons(0, POKEMON_FIRST_LIMIT)) || [];
	const paths: Array<Object> = pokemon.map((pokemon: PokemonUrl, index: number) => ({
		params: { id: (index + 1).toString() },
	}));
	return {
		paths,
		fallback: "blocking", // TODO: try with true
	};
}

export default PokemonDetails;
