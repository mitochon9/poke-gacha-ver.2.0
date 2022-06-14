import type { AbButtonProps } from "./AbButton.type";

const defaultProps: AbButtonProps = {
  onAPush: () => {
    alert("Click A");
  },
  onBPush: () => {
    alert("Click B");
  },
};

export const propObj: { [key: string]: AbButtonProps } = {
  default: defaultProps,
};
