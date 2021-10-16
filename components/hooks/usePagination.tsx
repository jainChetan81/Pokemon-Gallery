import axios from "axios";
import { useEffect, useState } from "react";
import { getPokemons } from "../../api";
import { POKEMON_TOTAL_LIMIT } from "../../constants";
import { Pokemon } from "../../types";

export default function usePagination(
	offset: number = 0,
	limit: number,
	currentPokemons: Pokemon[],
	setPokemons: (pokemons: Pokemon[]) => void
) {
	const [loading, setLoading] = useState<Boolean>(false);
	const [error, setError] = useState<Boolean>(false);
	const [hasMore, setHasMore] = useState<Boolean>(true);

	useEffect(() => {
		if (offset === 0) return;
		setLoading(true);
		setError(false);
		// TODO: implement swr for pre fetching data
		getPokemons(offset, limit)
			.then((pokemons: Pokemon[]): void => {
				setPokemons([...currentPokemons, ...pokemons]);
				setHasMore(currentPokemons.length < POKEMON_TOTAL_LIMIT);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(true);
				setLoading(false);
			});
	}, [offset]);

	return { loading, error, hasMore };
}
