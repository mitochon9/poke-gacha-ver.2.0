import type { DeleteScreenProps } from "src/component/molecule/DeleteScreen";
import type { PokedexScreenProps } from "src/component/molecule/PokedexScreen";
import type { ResultScreenProps } from "src/component/molecule/ResultScreen";

export interface DisplayProps {
  screenType: "top" | "lottery" | "result" | "pokedex" | "delete";
  pokemon: ResultScreenProps["pokemon"];
  pokemonList: PokedexScreenProps["pokemonList"];
  isConfirm: DeleteScreenProps["isConfirm"];
}
