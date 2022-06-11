import type { ComponentMeta, Story } from "@storybook/react";

import { Display } from "./Display";
import { propObj } from "./Display.props";
import type { DisplayProps } from "./Display.type";

export default {
  title: "project/Display",
  component: Display,
} as ComponentMeta<typeof Display>;

const Template: Story<DisplayProps> = (args) => <Display {...args} />;

export const Top = Template.bind({});
Top.args = propObj.top;

export const Lottery = Template.bind({});
Lottery.args = propObj.lottery;

export const Result = Template.bind({});
Result.args = propObj.result;

export const Pokedex = Template.bind({});
Pokedex.args = propObj.pokedex;

export const DeleteIsConfirm = Template.bind({});
DeleteIsConfirm.args = propObj.deleteIsConfirm;

export const DeleteIsComplete = Template.bind({});
DeleteIsComplete.args = propObj.deleteIsComplete;
