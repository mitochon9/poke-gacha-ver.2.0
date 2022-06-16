import type { CrossButtonProps } from "./CrossButton.type";

const defaultProps: CrossButtonProps = {
  scrollUp: () => {
    alert("scrollUp");
  },
  scrollDown: () => {
    alert("scrollDown");
  },
  switchColor: () => {
    alert("switchColor");
  },
  reverseSwitchColor: () => {
    alert("reverseSwitchColor");
  },
};

export const propObj: { [key: string]: CrossButtonProps } = {
  default: defaultProps,
};
