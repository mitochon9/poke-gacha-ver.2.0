import type { PowerSupplyProps } from "./PowerSupply.type";

const defaultProps: PowerSupplyProps = {
  semicircle: ["", "", ""],
};

export const propObj: { [key: string]: PowerSupplyProps } = {
  default: defaultProps,
};
