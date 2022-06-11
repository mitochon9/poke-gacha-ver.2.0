import { useScreen } from "src/hook/useScreen";

import { AbButton as AbButtonPresenter } from "./AbButton";
import type { AbButtonProps } from "./AbButton.type";

const AbButton: React.FC = () => {
  const { setScreenType } = useScreen();

  const defaultProps: AbButtonProps = {
    setScreenType,
  };
  return <AbButtonPresenter {...defaultProps} />;
};

export { AbButton };
