import type { AbButtonProps } from "./AbButton.type";

const defaultProps: AbButtonProps = {
  setScreenType: () => {
    alert("setScreen");
  },
};

export const propObj: { [key: string]: AbButtonProps } = {
  default: defaultProps,
};
