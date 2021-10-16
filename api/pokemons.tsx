import axios from "axios";
import { Pokemon, PokemonUrl } from "../types";
import paddedString from "../utils";

const getPokemons = async (offset: number = 0, limit: number = 20): Promise<Pokemon[]> => {
	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
		const {
			data: { results = [] },
		} = res;
		const pokemon: Array<Pokemon> = results.map((pokeman: PokemonUrl, index: number) => {
			const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedString(
				index,
				3
			)}.png`;
			return { ...pokeman, image, index };
		});
		return pokemon;
	} catch (e) {
		return [];
	}
};
const getPokemonDetail = async (id: number = 1): Promise<Object> => {
	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const { data: pokeman }: any = res || {};

		const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedString(
			id - 1,
			3
		)}.png`;
		return { ...pokeman, image };
	} catch (e) {
		return {};
	}
};
export { getPokemons, getPokemonDetail };
