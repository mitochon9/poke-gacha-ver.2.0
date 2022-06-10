import type { ComponentMeta, Story } from "@storybook/react";

import { NintendoLogo } from "./NintendoLogo";

export default {
  title: "molecule/NintendoLogo",
  component: NintendoLogo,
} as ComponentMeta<typeof NintendoLogo>;

const Template: Story = () => <NintendoLogo />;

export const Default = Template.bind({});
