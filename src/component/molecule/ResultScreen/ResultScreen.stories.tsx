import type { ComponentMeta, Story } from "@storybook/react";

import { ResultScreen } from "./ResultScreen";
import { propObj } from "./ResultScreen.props";
import type { ResultScreenProps } from "./ResultScreen.type";

export default {
  title: "molecule/ResultScreen",
  component: ResultScreen,
} as ComponentMeta<typeof ResultScreen>;

const Template: Story<ResultScreenProps> = (args) => <ResultScreen {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
