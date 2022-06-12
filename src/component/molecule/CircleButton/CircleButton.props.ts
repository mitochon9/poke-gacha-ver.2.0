import type { CircleButtonProps } from "./CircleButton.type";

const buttonTypeAProps: CircleButtonProps = {
  buttonType: "A",
  onClick: () => {
    alert("Click A");
  },
};
const buttonTypeBProps: CircleButtonProps = {
  buttonType: "B",
  onClick: () => {
    alert("Click B");
  },
};

export const propObj: { [key: string]: CircleButtonProps } = {
  buttonTypeA: buttonTypeAProps,
  buttonTypeB: buttonTypeBProps,
};
