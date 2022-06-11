import type { ComponentMeta, Story } from "@storybook/react";

import { StartSelectButton } from "./StartSelectButton";
import { propObj } from "./StartSelectButton.props";
import type { StartSelectButtonProps } from "./StartSelectButton.type";

export default {
  title: "project/StartSelectButton",
  component: StartSelectButton,
} as ComponentMeta<typeof StartSelectButton>;

const Template: Story<StartSelectButtonProps> = (args) => (
  <StartSelectButton {...args} />
);

export const Default = Template.bind({});
Default.args = propObj.default;
