import axios from "axios";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { useScreen } from "src/hook/useScreen";
import type { Pokemon } from "src/model/pokemon";
import useSWRImmutable from "swr";

interface UseSetLottery {
  lotteryNumber: () => void;
  lottery: () => void;
}

interface UseLottery extends UseSetLottery {
  pokemon: Pokemon;
}

const winningNumberState = atom<number>({
  key: "winningNumberState",
  default: 1,
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useLottery = (): UseLottery => {
  const winningNumber = useRecoilValue(winningNumberState);

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

  const setLottery = useSetLottery();

  return { pokemon, ...setLottery };
};

const useSetLottery = (): UseSetLottery => {
  const { setScreenType } = useScreen();
  const setWinningNumber = useSetRecoilState(winningNumberState);

  const lotteryNumber = () =>
    setWinningNumber(Math.floor(Math.random() * (151 - 1)) + 1);

  const lottery = () => {
    lotteryNumber();
    setScreenType("lottery");

    const timer = setTimeout(() => {
      setScreenType("result");
    }, 2000);
    return () => clearTimeout(timer);
  };

  return { lottery, lotteryNumber };
};
