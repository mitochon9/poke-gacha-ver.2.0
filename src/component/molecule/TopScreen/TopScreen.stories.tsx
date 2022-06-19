import type { ComponentMeta, Story } from "@storybook/react";

import { TopScreen } from "./TopScreen";
import { propObj } from "./TopScreen.props";
import type { TopScreenProps } from "./TopScreen.type";

export default {
  title: "molecule/TopScreen",
  component: TopScreen,
} as ComponentMeta<typeof TopScreen>;

const Template: Story<TopScreenProps> = (args) => <TopScreen {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
