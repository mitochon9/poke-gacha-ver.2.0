import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePokeApi = (pokemonId: number | undefined) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/
${pokemonId}`,
    fetcher
  );

  if (!pokemonId) {
    return [];
  }
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export const useJapanesePokeApi = (pokemonId: number | undefined) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/
${pokemonId}`,
    fetcher
  );

  if (!pokemonId) {
    return [];
  }
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
