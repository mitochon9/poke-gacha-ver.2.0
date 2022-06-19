import axios from "axios";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { useLottery } from "src/hook/useLottery";
import type { Pokemon } from "src/model/pokemon";
import useSWRImmutable from "swr";

interface UseSetPokemon {
  addPokemon: () => void;
  addPokemonList: () => void;
  deletePokemonList: () => void;
}
interface UsePokemon extends UseSetPokemon {
  pokemon: Pokemon;
  pokemonList: Pokemon[];
}

const pokemonState = atom<Pokemon>({
  key: "pokemon",
  default: undefined,
});

const pokemonListState = atom<Pokemon[]>({
  key: "pokemonList",
  default: [],
  effects: [
    ({ setSelf }) => {
      const fetchData = () => {
        if (typeof window !== "undefined") {
          const pokemonListStorage = localStorage.getItem("pokemonList");
          pokemonListStorage
            ? setSelf(JSON.parse(pokemonListStorage))
            : setSelf([]);
        }
      };
      fetchData();
    },
  ],
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePokemon = (): UsePokemon => {
  const pokemon = useRecoilValue(pokemonState);
  const pokemonList = useRecoilValue(pokemonListState);
  const setPokemon = useSetPokemon();

  return { pokemon, pokemonList, ...setPokemon };
};

const useSetPokemon = (): UseSetPokemon => {
  const { winningNumber } = useLottery();
  const setPokemon = useSetRecoilState(pokemonState);
  const setPokemonList = useSetRecoilState(pokemonListState);

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

  const addPokemon = (): void => {
    setPokemon(pokemon);
  };

  const addPokemonList = (): void => {
    setPokemonList((prevPokemonList) => {
      localStorage.setItem(
        "pokemonList",
        JSON.stringify([...prevPokemonList, pokemon])
      );
      return [...prevPokemonList, pokemon];
    });
  };

  const deletePokemonList = () => {
    setPokemonList(() => {
      localStorage.removeItem("pokemonList");
      return [];
    });
  };

  return { addPokemon, addPokemonList, deletePokemonList };
};
