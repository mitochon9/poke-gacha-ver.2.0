import type { AbButtonProps } from "./AbButton.type";

const defaultProps: AbButtonProps = {
  changeScreenA: () => {
    alert("Click A");
  },
  changeScreenB: () => {
    alert("Click B");
  },
};

export const propObj: { [key: string]: AbButtonProps } = {
  default: defaultProps,
};
