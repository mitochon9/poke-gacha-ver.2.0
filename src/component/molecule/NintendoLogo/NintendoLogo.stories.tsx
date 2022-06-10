import type { ComponentMeta } from "@storybook/react";

import { NintendoLogo } from "./NintendoLogo";

export default {
  title: "molecule/NintendoLogo",
  component: NintendoLogo,
} as ComponentMeta<typeof NintendoLogo>;

const Template = () => <NintendoLogo />;

export const Default = Template.bind({});
