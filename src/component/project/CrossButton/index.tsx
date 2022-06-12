import { CrossButton as CrossButtonPresenter } from "./CrossButton";
import type { CrossButtonProps } from "./CrossButton.type";

const CrossButton: React.FC = () => {
  const defaultProps: CrossButtonProps = {};

  return <CrossButtonPresenter {...defaultProps} />;
};

export { CrossButton };
