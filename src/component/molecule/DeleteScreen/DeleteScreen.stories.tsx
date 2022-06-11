import type { ComponentMeta, Story } from "@storybook/react";

import { DeleteScreen } from "./DeleteScreen";
import { propObj } from "./DeleteScreen.props";
import type { DeleteScreenProps } from "./DeleteScreen.type";

export default {
  title: "molecule/DeleteScreen",
  component: DeleteScreen,
} as ComponentMeta<typeof DeleteScreen>;

const Template: Story<DeleteScreenProps> = (args) => <DeleteScreen {...args} />;

export const Confirm = Template.bind({});
Confirm.args = propObj.confirm;

export const Complete = Template.bind({});
Complete.args = propObj.complete;
