import type { ComponentMeta, Story } from "@storybook/react";

import { EllipseButton } from "./EllipseButton";
import { propObj } from "./EllipseButton.props";
import type { EllipseButtonProps } from "./EllipseButton.type";

export default {
  title: "molecule/EllipseButton",
  component: EllipseButton,
} as ComponentMeta<typeof EllipseButton>;

const Template: Story<EllipseButtonProps> = (args) => (
  <EllipseButton {...args} />
);

export const ButtonTypeStart = Template.bind({});
ButtonTypeStart.args = propObj.buttonTypeStart;

export const ButtonTypeSelect = Template.bind({});
ButtonTypeSelect.args = propObj.buttonTypeSelect;
