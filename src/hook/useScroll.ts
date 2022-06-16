import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { usePokemon } from "src/hook/usePokemon";

export interface UseScroll {
  pokedexRef: (node: any) => void;
  scrollUp: () => void;
  scrollDown: () => void;
  resetScroll: () => void;
}

export const currentHeightState = atom<number>({
  key: "currentHeight",
  default: 0,
});

export const useScroll = (): UseScroll => {
  const [currentHeight, setCurrentHeight] = useRecoilState(currentHeightState);
  const { pokemonList } = usePokemon();

  /**
   * タイトルと余白の高さ + 読み込んだポケモンの数 * 要素の高さ - 画面の高さ
   */
  const pokedexHeight = 24 + pokemonList.length * 275 - 263;

  const pokedexRef = useCallback(
    (node: any) => {
      if (node !== null) {
        node?.scrollTo({ top: currentHeight });
      }
    },
    [currentHeight]
  );

  const scrollUp = () => {
    if (currentHeight - 40 <= 0) {
      return setCurrentHeight(0);
    }
    setCurrentHeight(currentHeight - 40);
  };

  const scrollDown = () => {
    if (currentHeight + 40 >= pokedexHeight) {
      return setCurrentHeight(pokedexHeight);
    }
    setCurrentHeight(currentHeight + 40);
  };

  const resetScroll = () => {
    setCurrentHeight(0);
  };

  return { pokedexRef, scrollUp, scrollDown, resetScroll };
};
