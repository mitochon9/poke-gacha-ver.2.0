import type { ComponentMeta, Story } from "@storybook/react";

import { Footer } from "./Footer";
import { propObj } from "./Footer.props";
import type { FooterProps } from "./Footer.type";

export default {
  title: "molecule/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
