import type { EllipseButtonProps } from "./EllipseButton.type";

const buttonTypeStartProps: EllipseButtonProps = {
  buttonType: "start",
};

const buttonTypeSelectProps: EllipseButtonProps = {
  buttonType: "select",
};

export const propObj: { [key: string]: EllipseButtonProps } = {
  buttonTypeStart: buttonTypeStartProps,
  buttonTypeSelect: buttonTypeSelectProps,
};
