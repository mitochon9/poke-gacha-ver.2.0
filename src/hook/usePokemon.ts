import axios from "axios";
import { useLottery } from "src/hook/useLottery";
import type { Pokemon } from "src/model/pokemon";
import useSWRImmutable from "swr";

interface UsePokemon {
  pokemon: Pokemon;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePokemon = (): UsePokemon => {
  const { winningNumber } = useLottery();

  const { data: data1 } = useSWRImmutable(
    `https://pokeapi.co/api/v2/pokemon/${winningNumber}`,
    fetcher
  );
  const { data: data2 } = useSWRImmutable(
    `https://pokeapi.co/api/v2/pokemon-species/${winningNumber}`,
    fetcher
  );
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${winningNumber}.png`;

  const pokemon: Pokemon = {
    image: {
      src: image,
      alt: "pokemon",
    },
    id: data1?.id,
    name: data2?.names[0]?.name,
    genus: data2?.genera[0]?.genus,
    height: data1?.height,
    weight: data1?.weight,
    commentary: data2?.flavor_text_entries[30]?.flavor_text,
  };

  return { pokemon };
};
