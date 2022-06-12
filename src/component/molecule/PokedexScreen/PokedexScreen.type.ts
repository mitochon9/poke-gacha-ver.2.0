import type { MutableRefObject } from "react";
import type { Pokemon } from "src/model/pokemon";

export interface PokedexScreenProps {
  pokemonList: Pokemon[];
  pokedexRef: MutableRefObject<null> | null;
}
