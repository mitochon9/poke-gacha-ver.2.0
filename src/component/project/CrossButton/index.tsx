import { useScroll } from "src/hook/useScroll";

import { CrossButton as CrossButtonPresenter } from "./CrossButton";
import type { CrossButtonProps } from "./CrossButton.type";

const CrossButton: React.FC = () => {
  const { scrollDown, scrollUp } = useScroll();

  const defaultProps: CrossButtonProps = {
    scrollUp,
    scrollDown,
  };

  return <CrossButtonPresenter {...defaultProps} />;
};

export { CrossButton };
