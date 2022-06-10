import type { GameBoyLogoProps } from "./GameBoyLogo.type";

const defaultProps: GameBoyLogoProps = {
  character: ["C", "O", "L", "O", "R"],
};

export const propObj: { [key: string]: GameBoyLogoProps } = {
  default: defaultProps,
};
