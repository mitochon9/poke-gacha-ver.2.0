import type { ComponentMeta, Story } from "@storybook/react";

import { LotteryScreen } from "./LotteryScreen";
import { propObj } from "./LotteryScreen.props";
import type { LotteryScreenProps } from "./LotteryScreen.type";

export default {
  title: "molecule/LotteryScreen",
  component: LotteryScreen,
} as ComponentMeta<typeof LotteryScreen>;

const Template: Story<LotteryScreenProps> = (args) => (
  <LotteryScreen {...args} />
);

export const Default = Template.bind({});
Default.args = propObj.default;
