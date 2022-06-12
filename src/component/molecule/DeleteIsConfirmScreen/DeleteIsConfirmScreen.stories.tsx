import type { ComponentMeta, Story } from "@storybook/react";

import { DeleteIsConfirmScreen } from "./DeleteIsConfirmScreen";
import { propObj } from "./DeleteIsConfirmScreen.props";
import type { DeleteIsConfirmScreenProps } from "./DeleteIsConfirmScreen.type";

export default {
  title: "molecule/DeleteIsConfirmScreen",
  component: DeleteIsConfirmScreen,
} as ComponentMeta<typeof DeleteIsConfirmScreen>;

const Template: Story<DeleteIsConfirmScreenProps> = (args) => (
  <DeleteIsConfirmScreen {...args} />
);

export const Default = Template.bind({});
Default.args = propObj.default;
