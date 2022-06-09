import type { ComponentMeta, Story } from "@storybook/react";
import type { ImageProps } from "next/image";
import sampleImage from "public/img/hitokage.png";

import { Image } from "./Image";

export default {
  title: "atom/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} alt="alt" />;

export const Default = Template.bind({});
Default.args = {
  src: sampleImage,
  alt: "sampleImage",
};
