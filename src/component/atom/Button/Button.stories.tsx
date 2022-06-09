import type { ComponentMeta, Story } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "atom/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const CircleA = Template.bind({});
CircleA.args = {
  children: (
    <button className="flex justify-center items-center mt-4 w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black">
      A
    </button>
  ),
};

export const CircleB = Template.bind({});
CircleB.args = {
  children: (
    <button className="flex justify-center items-center mt-4 w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black">
      B
    </button>
  ),
};

export const Ellipse = Template.bind({});
Ellipse.args = {
  children: (
    <button className="w-14 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer" />
  ),
};

export const Up = Template.bind({});
Up.args = {
  children: (
    <button className="flex justify-center items-center w-10 h-10 text-2xl text-gray-700 bg-gray-800 border border-gray-800 active:shadow-none shadow-black hover:cursor-pointer">
      ▲
    </button>
  ),
};

export const Left = Template.bind({});
Left.args = {
  children: (
    <button className="flex justify-center items-center w-10 h-10 text-2xl text-gray-700 bg-gray-800 border border-gray-800 active:shadow-none shadow-black hover:cursor-pointer">
      ◀
    </button>
  ),
};

export const Right = Template.bind({});
Right.args = {
  children: (
    <button className="flex justify-center items-center w-10 h-10 text-2xl text-gray-700 bg-gray-800 border border-gray-800 active:shadow-none shadow-black hover:cursor-pointer">
      ▶
    </button>
  ),
};

export const Down = Template.bind({});
Down.args = {
  children: (
    <button className="flex justify-center items-center w-10 h-10 text-2xl text-gray-700 bg-gray-800 border border-gray-800 active:shadow-none shadow-black hover:cursor-pointer">
      ▼
    </button>
  ),
};

export const Center = Template.bind({});
Center.args = {
  children: (
    <button className="flex justify-center items-center w-10 h-10 text-2xl text-gray-700 bg-gray-800 border border-gray-800 active:shadow-none shadow-black hover:cursor-pointer">
      ●
    </button>
  ),
};
