import { AbButton as AbButtonPresenter } from "./AbButton";
import type { AbButtonProps } from "./AbButton.type";

const AbButton: React.FC = () => {
  const defaultProps: AbButtonProps = {};
  return <AbButtonPresenter {...defaultProps} />;
};

export { AbButton };
