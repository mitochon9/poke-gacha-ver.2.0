import { useLottery } from "src/hook/useLottery";
import { useScreen } from "src/hook/useScreen";

import { AbButton as AbButtonPresenter } from "./AbButton";
import type { AbButtonProps } from "./AbButton.type";

const AbButton: React.FC = () => {
  const { screenType, setScreenType } = useScreen();
  const { lottery } = useLottery();

  const changeScreenA = () => {
    switch (screenType) {
      case "top":
        return lottery();
      case "result":
        return lottery();
      case "deleteIsConfirm":
        return setScreenType("deleteIsComplete");
      case "deleteIsComplete":
        return setScreenType("top");
      default:
        break;
    }
  };

  const changeScreenB = () => {
    switch (screenType) {
      case "lottery":
        break;
      default:
        return setScreenType("top");
    }
  };

  const defaultProps: AbButtonProps = {
    changeScreenA,
    changeScreenB,
  };

  return <AbButtonPresenter {...defaultProps} />;
};

export { AbButton };
