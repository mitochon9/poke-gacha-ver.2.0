import { atom } from "recoil";

export const pokemonIdState = atom<number>({
  key: "pokemonIdState",
  default: 0,
});
