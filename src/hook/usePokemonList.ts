import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import type { Pokemon } from "src/model/pokemon";

interface UseSetPokemonList {
  addPokemonList: (pokemon: Pokemon) => void;
}

interface UsePokemonList extends UseSetPokemonList {
  pokemonList: Pokemon[];
}

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

export const usePokemonList = (): UsePokemonList => {
  const pokemonList = useRecoilValue(pokemonListState);
  const setPokemonList = useSetPokemonList();

  return { pokemonList, ...setPokemonList };
};

const useSetPokemonList = (): UseSetPokemonList => {
  const setPokemonList = useSetRecoilState(pokemonListState);

  const addPokemonList = (pokemon: Pokemon): void => {
    setPokemonList((prevPokemonList) => {
      localStorage.setItem(
        "pokemonList",
        JSON.stringify([...prevPokemonList, pokemon])
      );
      return [...prevPokemonList, pokemon];
    });
  };

  return { addPokemonList };
};
