import type { CrossButtonProps } from "./CrossButton.type";

const defaultProps: CrossButtonProps = {
  scrollUp: () => {
    alert("scrollUp");
  },
  scrollDown: () => {
    alert("scrollDown");
  },
};

export const propObj: { [key: string]: CrossButtonProps } = {
  default: defaultProps,
};
