import { useRef } from "react";
import { useLottery } from "src/hook/useLottery";
import { useScreen } from "src/hook/useScreen";

import { Display as DisplayPresenter } from "./Display";
import type { DisplayProps } from "./Display.type";

const Display: React.FC = () => {
  const { screenType } = useScreen();
  const { pokemon, pokemonList } = useLottery();

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
