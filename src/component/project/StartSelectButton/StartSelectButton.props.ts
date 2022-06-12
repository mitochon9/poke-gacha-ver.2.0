import type { StartSelectButtonProps } from "./StartSelectButton.type";

const defaultProps: StartSelectButtonProps = {
  changeScreenStart: () => {
    alert("Click Start");
  },
  changeScreenSelect: () => {
    alert("Click Select");
  },
};

export const propObj: { [key: string]: StartSelectButtonProps } = {
  default: defaultProps,
};
