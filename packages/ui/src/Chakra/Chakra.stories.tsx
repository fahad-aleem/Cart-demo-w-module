import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";

import { ChakraDesign } from "./ChakraDesign";

export default {
  title: "ChakraDesign",
  component: ChakraDesign,
};

const Template: Story<ComponentProps<typeof ChakraDesign>> = args => (
  <ChakraDesign {...args} />
);

export const Sizes = Template.bind({});
Sizes.args = {
  whichDesign: "size",
};

export const Radii = Template.bind({});
Radii.args = {
  whichDesign: "radii",
};

export const Spaces = Template.bind({});
Spaces.args = {
  whichDesign: "space",
};

export const Fonts = Template.bind({});
Fonts.args = {
  whichDesign: "font",
};

export const Colors = Template.bind({});
Colors.args = {
  whichDesign: "color",
};
