import axios from "axios";
import { getPokemonDetail, getPokemons } from "../api";

jest.mock("axios");

describe("Testing pokemon API", () => {
	it("when API call is successful", async () => {
		const response = {
			data: {
				results: [
					{
						name: "bulbasaur",
						url: "https://pokeapi.co/api/v2/pokemon/1/",
						image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
					},
					{
						name: "ivysaur",
						url: "https://pokeapi.co/api/v2/pokemon/2/",
						image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
					},
					{
						name: "venusaur",
						url: "https://pokeapi.co/api/v2/pokemon/3/",
						image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
					},
				],
			},
		};
		axios.get.mockResolvedValue(response);
		const data = await getPokemons(3);
		expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon?limit=3`);
		expect(data.length).toBe(3);
		expect(data).toEqual(response.data.results);
	});
	it("when API call fails", async () => {
		axios.get.mockRejectedValue(new Error("Error"));
		expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon?limit=3`);
		const data = await getPokemons(3);
		expect(data.length).toBe(0);
	});
});
describe("Testing detailed Pokemon API", () => {
	it("when API call is successful", async () => {
		const response = {
			data: {
				name: "bulbasaur",
				height: 7,
				weight: 69,
				types: [
					{
						slot: 1,
						type: {
							name: "poison",
							url: "https://pokeapi.co/api/v2/type/4/",
						},
					},
					{
						slot: 2,
						type: {
							name: "grass",
							url: "https://pokeapi.co/api/v2/type/12/",
						},
					},
				],
				image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
			},
		};
		axios.get.mockResolvedValue(response);
		const data = await getPokemonDetail(1);
		expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/1`);
		expect(data).toEqual(response.data);
	});
	it("when API call fails", async () => {
		axios.get.mockRejectedValue(new Error("Error"));
		const data = await getPokemonDetail(1);
		expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/1`);
		expect(data).toStrictEqual({});
	});
});
