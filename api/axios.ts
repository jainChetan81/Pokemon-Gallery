import axios from "axios";

const instance = axios.create({
	baseURL: "https://pokeapi.co/api/v2/pokemon",
	timeout: 1000,
});
export default instance;
