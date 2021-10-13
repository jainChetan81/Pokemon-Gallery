import axios from "./axios";
import { Pokemon, PokemonUrl } from "../types";
import paddedString from "../utils";

const getPokemons = async (limit: number = 20): Promise<Pokemon[]> => {
	const res = await axios.get(`?limit=${limit}`);
	if (res.status !== 200) return [];
	const {
		data: { results = [] },
	} = res;
	const pokemon: Array<Pokemon> = results.map((pokeman: PokemonUrl, index: number) => {
		const paddedId: String = paddedString(index, 3);

		const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
		return { ...pokeman, image };
	});
	return pokemon;
};
const getPokemonDetail = async (id: number = 1): Promise<Object> => {
	const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	if (res.status !== 200) return {};
	const { data: pokeman }: any = res || {};
	const paddedId: string = paddedString(id, 3);
	pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
	return pokeman;
};
export { getPokemons, getPokemonDetail };
