import type { CircleButtonProps } from "./CircleButton.type";

const buttonTypeA: CircleButtonProps = {
  buttonType: "A",
};
const buttonTypeB: CircleButtonProps = {
  buttonType: "B",
};

export const propObj: { [key: string]: CircleButtonProps } = {
  buttonTypeA: buttonTypeA,
  buttonTypeB: buttonTypeB,
};
