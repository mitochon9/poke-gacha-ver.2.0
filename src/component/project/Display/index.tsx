import { usePokemon } from "src/hook/usePokemon";
import { useScreen } from "src/hook/useScreen";
import { useScroll } from "src/hook/useScroll";

import { Display as DisplayPresenter } from "./Display";
import type { DisplayProps } from "./Display.type";

const Display: React.FC = () => {
  const { screenType } = useScreen();
  const { pokemon, pokemonList } = usePokemon();

  const { pokedexRef } = useScroll();

  const defaultProps: DisplayProps = {
    screenType,
    pokemon,
    pokemonList,
    pokedexRef,
  };
  return <DisplayPresenter {...defaultProps} />;
};

export { Display };
