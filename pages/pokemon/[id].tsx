import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { PokemonUrl } from "../../types";

const PokemonDetails = ({ pokeman }: any) => (
	<Layout title={pokeman.name}>
		<div className="container mx-auto max-w-xl pt-8 min-h-screen">
			<h1 className="text-4xl mb-2 text-center capitalize">
				{pokeman.id}. {pokeman.name}
			</h1>
			<img className="mx-auto" src={pokeman.image} alt={pokeman.name} />
			<p>
				<span className="font-bold mr-2">Weight:</span> {pokeman.weight}
			</p>
			<p>
				<span className="font-bold mr-2">Height:</span>
				{pokeman.height}
			</p>
			<h2 className="text-2xl mt-6 mb-2">Types</h2>
			{pokeman.types.map((type: any, index: number) => (
				<p key={index}>{type.name}</p>
			))}
			<p className="mt-10 text-center">
				<Link href="/">
					<a className="text-2xl underline">Home</a>
				</Link>
			</p>
		</div>
	</Layout>
);

export async function getStaticProps({ params }: any) {
	const { id }: any = params;
	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokeman = await res.json();
		const paddedId: string = `00${id}`.slice(-3);
		pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
		return {
			props: { pokeman },
		};
	} catch (err) {
		console.error(err);
	}
}

export async function getStaticPaths() {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
	const { results } = await res.json();
	const paths: Array<number> = results.map((pokemon: PokemonUrl, index: number) => ({
		params: { id: index.toString() },
	}));
	return {
		paths,
		fallback: false,
	};
}

export default PokemonDetails;
