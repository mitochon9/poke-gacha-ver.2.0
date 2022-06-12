import { useScreen } from "src/hook/useScreen";

import { StartSelectButton as StartSelectButtonPresenter } from "./StartSelectButton";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

const StartSelectButton: React.FC = () => {
  const { screenType, setScreenType } = useScreen();

  const changeScreenStart = () => {
    switch (screenType) {
      case "top":
        return setScreenType("deleteIsConfirm");
      default:
        break;
    }
  };

  const changeScreenSelect = () => {
    switch (screenType) {
      case "top":
        return setScreenType("pokedex");
      default:
        break;
    }
  };

  const defaultProps: StartSelectButtonProps = {
    changeScreenStart,
    changeScreenSelect,
  };
  return <StartSelectButtonPresenter {...defaultProps} />;
};

export { StartSelectButton };
