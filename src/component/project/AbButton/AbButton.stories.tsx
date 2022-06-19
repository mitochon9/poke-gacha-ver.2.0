import type { ComponentMeta, Story } from "@storybook/react";

import { AbButton } from "./AbButton";
import { propObj } from "./AbButton.props";
import type { AbButtonProps } from "./AbButton.type";

export default {
  title: "project/AbButton",
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: Story<AbButtonProps> = (args) => <AbButton {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
