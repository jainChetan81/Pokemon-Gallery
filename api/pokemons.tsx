import axios from "axios";
import { Pokemon, PokemonUrl } from "../types";
import paddedString from "../utils";

const getPokemons = async (limit: number = 20): Promise<Pokemon[]> => {
	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
		const {
			data: { results = [] },
		} = res;
		const pokemon: Array<Pokemon> = results.map((pokeman: PokemonUrl, index: number) => {
			const paddedId: String = paddedString(index, 3);

			const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
			return { ...pokeman, image };
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
		const paddedId: string = paddedString(id, 3);
		pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
		return pokeman;
	} catch (e) {
		return {};
	}
};
export { getPokemons, getPokemonDetail };
