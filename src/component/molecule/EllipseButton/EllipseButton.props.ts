import type { EllipseButtonProps } from "./EllipseButton.type";

const buttonTypeStartProps: EllipseButtonProps = {
  buttonType: "start",
  onClick: () => {
    alert("Click Start");
  },
};

const buttonTypeSelectProps: EllipseButtonProps = {
  buttonType: "select",
  onClick: () => {
    alert("Click Select");
  },
};

export const propObj: { [key: string]: EllipseButtonProps } = {
  buttonTypeStart: buttonTypeStartProps,
  buttonTypeSelect: buttonTypeSelectProps,
};
