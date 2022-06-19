import type { ComponentMeta, Story } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "atom/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const White = Template.bind({});
White.args = { children: <p className="mt-1 italic text-gray-300">White</p> };

export const Color = Template.bind({});
Color.args = {
  children: (
    <div className="mt-1 font-kalam text-2xl">
      <span className="text-[#FB4E8B]">C</span>
      <span className="text-[#AE97F1]">O</span>
      <span className="text-[#BBE880]">L</span>
      <span className="text-[#FAEB67]">O</span>
      <span className="text-[#8CD0FF]">R</span>
    </div>
  ),
};

export const Gray = Template.bind({});
Gray.args = {
  children: <p className="text-gray-500">Gray</p>,
};

export const Large = Template.bind({});
Large.args = {
  children: <p className="text-2xl">Large</p>,
};

export const DotFont = Template.bind({});
DotFont.args = {
  children: <p className="font-dot text-2xl">DotFont</p>,
};
