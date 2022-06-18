import { useLottery } from "src/hook/useLottery";
import { usePokemon } from "src/hook/usePokemon";
import { useScreen } from "src/hook/useScreen";
import { useScroll } from "src/hook/useScroll";

import { AbButton as AbButtonPresenter } from "./AbButton";
import type { AbButtonProps } from "./AbButton.type";

const AbButton: React.FC = () => {
  const { screenType, setScreenType } = useScreen();
  const { lotteryNumber } = useLottery();
  const { addPokemon, addPokemonList, deletePokemonList } = usePokemon();
  const { resetScroll } = useScroll();

  const onAPush = () => {
    switch (screenType) {
      case "top":
      case "result":
        setScreenType("animation");
        lotteryNumber();
        addPokemon();
        addPokemonList();
        const timer = setTimeout(() => {
          setScreenType("result");
        }, 2000);
        () => clearTimeout(timer);
        break;

      case "deleteIsConfirm":
        setScreenType("deleteIsComplete");
        deletePokemonList();
        break;

      case "deleteIsComplete":
        setScreenType("top");
        break;

      default:
        break;
    }
  };

  const onBPush = () => {
    switch (screenType) {
      case "animation":
        break;
      case "pokedex":
        setScreenType("top");
        resetScroll();
      default:
        setScreenType("top");
        break;
    }
  };

  const defaultProps: AbButtonProps = {
    onAPush,
    onBPush,
  };

  return <AbButtonPresenter {...defaultProps} />;
};

export { AbButton };
