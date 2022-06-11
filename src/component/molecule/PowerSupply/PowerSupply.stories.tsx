import type { ComponentMeta, Story } from "@storybook/react";

import { PowerSupply } from "./PowerSupply";
import { propObj } from "./PowerSupply.props";
import type { PowerSupplyProps } from "./PowerSupply.type";

export default {
  title: "molecule/PowerSupply",
  component: PowerSupply,
} as ComponentMeta<typeof PowerSupply>;

const Template: Story<PowerSupplyProps> = (args) => <PowerSupply {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
