import type { CircleButtonProps } from "./CircleButton.type";

const buttonTypeAProps: CircleButtonProps = {
  buttonType: "A",
};
const buttonTypeBProps: CircleButtonProps = {
  buttonType: "B",
};

export const propObj: { [key: string]: CircleButtonProps } = {
  buttonTypeA: buttonTypeAProps,
  buttonTypeB: buttonTypeBProps,
};
