import { useScreen } from "src/hook/useScreen";

import { StartSelectButton as StartSelectButtonPresenter } from "./StartSelectButton";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

const StartSelectButton: React.FC = () => {
  const { setScreenType } = useScreen();

  const defaultProps: StartSelectButtonProps = {
    setScreenType,
  };
  return <StartSelectButtonPresenter {...defaultProps} />;
};

export { StartSelectButton };
