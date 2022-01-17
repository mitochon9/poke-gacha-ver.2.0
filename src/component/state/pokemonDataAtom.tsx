import { atom } from "recoil";
import type { PokemonData } from "src/type/pokemonData";

export const pokemonDataState = atom<PokemonData>({
  key: "pokemonDataState",
  default: [],
});
