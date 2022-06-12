import axios from "axios";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { useScreen } from "src/hook/useScreen";
import type { Pokemon } from "src/model/pokemon";
import useSWRImmutable from "swr";

interface UseSetLottery {
  lottery: () => void;
}

interface UseLottery extends UseSetLottery {
  pokemon: Pokemon;
  pokemonList: Pokemon[];
}

const winningNumberState = atom<number>({
  key: "winningNumber",
  default: Math.floor(Math.random() * (151 - 1)) + 1,
});

const pokemonState = atom<Pokemon>({
  key: "pokemonState",
  default: undefined,
});

const pokemonListState = atom<Pokemon[]>({
  key: "pokemonListState",
  default: [],
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useLottery = (): UseLottery => {
  const pokemon = useRecoilValue(pokemonState);
  const pokemonList = useRecoilValue(pokemonListState);
  const setLottery = useSetLottery();

  return { pokemon, pokemonList, ...setLottery };
};

const useSetLottery = (): UseSetLottery => {
  const { setScreenType } = useScreen();
  const setPokemon = useSetRecoilState(pokemonState);
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);
  const [winningNumber, setWinningNumber] = useRecoilState(winningNumberState);

  const lotteryNumber = () =>
    setWinningNumber(Math.floor(Math.random() * (151 - 1)) + 1);

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

  const lottery = () => {
    lotteryNumber();
    setScreenType("lottery");
    setPokemon(pokemon);
    setPokemonList([...pokemonList, pokemon]);

    const timer = setTimeout(() => {
      setScreenType("result");
    }, 2000);
    return () => clearTimeout(timer);
  };

  return { lottery };
};
