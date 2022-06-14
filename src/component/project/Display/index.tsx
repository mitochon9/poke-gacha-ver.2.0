import { useRef } from "react";
import { usePokemon } from "src/hook/usePokemon";
import { usePokemonList } from "src/hook/usePokemonList";
import { useScreen } from "src/hook/useScreen";

import { Display as DisplayPresenter } from "./Display";
import type { DisplayProps } from "./Display.type";

const Display: React.FC = () => {
  const { screenType } = useScreen();
  const { pokemon } = usePokemon();
  const { pokemonList } = usePokemonList();

  const pokedexRef = useRef(null);

  const defaultProps: DisplayProps = {
    screenType,
    pokemon,
    pokemonList,
    pokedexRef,
  };
  return <DisplayPresenter {...defaultProps} />;
};

export { Display };
