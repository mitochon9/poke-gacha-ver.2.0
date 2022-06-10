import type { ComponentMeta, Story } from "@storybook/react";

import { Speaker } from "./Speaker";
import { propObj } from "./Speaker.props";
import type { SpeakerProps } from "./Speaker.type";

export default {
  title: "molecule/Speaker",
  component: Speaker,
} as ComponentMeta<typeof Speaker>;

const Template: Story<SpeakerProps> = (args) => <Speaker {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
