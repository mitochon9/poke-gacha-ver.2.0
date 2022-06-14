import type { MutableRefObject } from "react";
import type { UseScreen } from "src/hook/useScreen";
import type { Pokemon } from "src/model/pokemon";

export interface DisplayProps {
  screenType: UseScreen["screenType"];
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  pokedexRef: MutableRefObject<null> | null;
}
