import type { ComponentMeta, Story } from "@storybook/react";

import { CrossButton } from "./CrossButton";
import { propObj } from "./CrossButton.props";
import type { CrossButtonProps } from "./CrossButton.type";

export default {
  title: "project/CrossButton",
  component: CrossButton,
} as ComponentMeta<typeof CrossButton>;

const Template: Story<CrossButtonProps> = (args) => <CrossButton {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
