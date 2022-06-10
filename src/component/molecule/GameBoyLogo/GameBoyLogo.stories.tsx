import type { ComponentMeta, Story } from "@storybook/react";

import { GameBoyLogo } from "./GameBoyLogo";
import { propObj } from "./GameBoyLogo.props";
import type { GameBoyLogoProps } from "./GameBoyLogo.type";

export default {
  title: "molecule/GameBoyLogo",
  component: GameBoyLogo,
} as ComponentMeta<typeof GameBoyLogo>;

const Template: Story<GameBoyLogoProps> = (args) => <GameBoyLogo {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
