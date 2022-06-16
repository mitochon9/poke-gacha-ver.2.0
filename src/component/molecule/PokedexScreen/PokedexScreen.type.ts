import type { Pokemon } from "src/model/pokemon";

export interface PokedexScreenProps {
  pokemonList: Pokemon[];
  pokedexRef?: (node: any) => void;
}
