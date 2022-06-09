import type { ComponentMeta, Story } from "@storybook/react";

import { CircleButton } from "./CircleButton";
import { propObj } from "./CircleButton.props";
import type { CircleButtonProps } from "./CircleButton.type";

export default {
  title: "molecule/CircleButton",
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: Story<CircleButtonProps> = (args) => <CircleButton {...args} />;

export const ButtonTypeA = Template.bind({});
ButtonTypeA.args = propObj.buttonTypeA;

export const ButtonTypeB = Template.bind({});
ButtonTypeB.args = propObj.buttonTypeB;
