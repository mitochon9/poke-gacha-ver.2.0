import { StartSelectButton as StartSelectButtonPresenter } from "./StartSelectButton";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

const StartSelectButton: React.FC = () => {
  const defaultProps: StartSelectButtonProps = {};
  return <StartSelectButtonPresenter {...defaultProps} />;
};

export { StartSelectButton };
