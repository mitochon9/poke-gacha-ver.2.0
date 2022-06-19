import type { ComponentMeta, Story } from "@storybook/react";

import { PokedexScreen } from "./PokedexScreen";
import { propObj } from "./PokedexScreen.props";
import type { PokedexScreenProps } from "./PokedexScreen.type";

export default {
  title: "molecule/PokedexScreen",
  component: PokedexScreen,
} as ComponentMeta<typeof PokedexScreen>;

const Template: Story<PokedexScreenProps> = (args) => (
  <PokedexScreen {...args} />
);

export const Default = Template.bind({});
Default.args = propObj.default;
