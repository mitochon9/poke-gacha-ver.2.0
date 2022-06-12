import type { ComponentMeta, Story } from "@storybook/react";

import { DeleteIsCompleteScreen } from "./DeleteIsCompleteScreen";
import { propObj } from "./DeleteIsCompleteScreen.props";
import type { DeleteIsCompleteScreenProps } from "./DeleteIsCompleteScreen.type";

export default {
  title: "molecule/DeleteIsCompleteScreen",
  component: DeleteIsCompleteScreen,
} as ComponentMeta<typeof DeleteIsCompleteScreen>;

const Template: Story<DeleteIsCompleteScreenProps> = (args) => (
  <DeleteIsCompleteScreen {...args} />
);

export const Default = Template.bind({});
Default.args = propObj.default;
