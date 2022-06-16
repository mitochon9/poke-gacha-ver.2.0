import { useScreen } from "src/hook/useScreen";

import { StartSelectButton as StartSelectButtonPresenter } from "./StartSelectButton";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

const StartSelectButton: React.FC = () => {
  const { screenType, setScreenType } = useScreen();

  const onStartPush = () => {
    switch (screenType) {
      case "top":
        setScreenType("deleteIsConfirm");
        break;

      default:
        break;
    }
  };

  const onSelectPush = () => {
    switch (screenType) {
      case "top":
        setScreenType("pokedex");
        break;

      default:
        break;
    }
  };

  const defaultProps: StartSelectButtonProps = {
    onStartPush,
    onSelectPush,
  };
  return <StartSelectButtonPresenter {...defaultProps} />;
};

export { StartSelectButton };
