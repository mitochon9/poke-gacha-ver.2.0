import { useLottery } from "src/hook/useLottery";
import { usePokemon } from "src/hook/usePokemon";
import { usePokemonList } from "src/hook/usePokemonList";
import { useScreen } from "src/hook/useScreen";

import { AbButton as AbButtonPresenter } from "./AbButton";
import type { AbButtonProps } from "./AbButton.type";

const AbButton: React.FC = () => {
  const { screenType, setScreenType } = useScreen();
  const { lotteryNumber } = useLottery();
  const { pokemon } = usePokemon();
  const { addPokemonList } = usePokemonList();

  const onAPush = () => {
    switch (screenType) {
      case "top":
      case "result":
        setScreenType("lottery");
        lotteryNumber();
        addPokemonList(pokemon);
        const timer = setTimeout(() => {
          setScreenType("result");
        }, 2000);
        () => clearTimeout(timer);
        break;

      case "deleteIsConfirm":
        setScreenType("deleteIsComplete");
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
      case "lottery":
        break;
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
