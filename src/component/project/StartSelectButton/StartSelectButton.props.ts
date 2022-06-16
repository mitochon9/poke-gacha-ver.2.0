import type { StartSelectButtonProps } from "./StartSelectButton.type";

const defaultProps: StartSelectButtonProps = {
  onStartPush: () => {
    alert("Click Start");
  },
  onSelectPush: () => {
    alert("Click Select");
  },
};

export const propObj: { [key: string]: StartSelectButtonProps } = {
  default: defaultProps,
};
