import type { CrossButtonProps } from "./CrossButton.type";

const defaultProps: CrossButtonProps = {
  keyList: ["", "▲", "", "◀", "●", "▶", "", "▼", ""],
};

export const propObj: { [key: string]: CrossButtonProps } = {
  default: defaultProps,
};
