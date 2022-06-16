import { useBodyColor } from "src/hook/useBodyColor";
import { useScroll } from "src/hook/useScroll";

import { CrossButton as CrossButtonPresenter } from "./CrossButton";
import type { CrossButtonProps } from "./CrossButton.type";

const CrossButton: React.FC = () => {
  const { scrollDown, scrollUp } = useScroll();
  const { reverseSwitchColor, switchColor } = useBodyColor();

  const defaultProps: CrossButtonProps = {
    scrollUp,
    scrollDown,
    reverseSwitchColor,
    switchColor,
  };

  return <CrossButtonPresenter {...defaultProps} />;
};

export { CrossButton };
