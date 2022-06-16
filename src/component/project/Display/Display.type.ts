import type { UseScreen } from "src/hook/useScreen";
import type { Pokemon } from "src/model/pokemon";

export interface DisplayProps {
  screenType: UseScreen["screenType"];
  pokemon: Pokemon;
  pokemonList: Pokemon[];
  pokedexRef?: (node: any) => void;
}
