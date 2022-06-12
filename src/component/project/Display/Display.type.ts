import type { PokedexScreenProps } from "src/component/molecule/PokedexScreen";
import type { ResultScreenProps } from "src/component/molecule/ResultScreen";
import type { UseScreen } from "src/hook/useScreen";

export interface DisplayProps {
  screenType: UseScreen["screenType"];
  pokemon: ResultScreenProps["pokemon"];
  pokemonList: PokedexScreenProps["pokemonList"];
}
