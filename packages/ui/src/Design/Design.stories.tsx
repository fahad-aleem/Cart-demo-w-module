import { Story } from "@storybook/react/types-6-0";

import { BrandColors as BrandColorsComponent } from "./BrandColors";
import { Colors } from "./Colors";
import { FontSizes as FontSizesComponent } from "./FontSizes";
import { Radii as RadiiComponent, RadiiProps } from "./Radii";
import { Sizes as SizesComponent } from "./Sizes";
import { Spaces } from "./Spaces";

export default {
  title: "Design",
};

const Template: Story<RadiiProps> = args => <RadiiComponent {...args} />;

export const Sizing = () => <SizesComponent />;
export const Radii = Template.bind({});
Radii.args = {
  boxSize: "70px",
};
export const Spacing = () => <Spaces />;
export const FontSizes = () => <FontSizesComponent />;
export const ColorPalette = () => <Colors />;
export const BrandColors = () => <BrandColorsComponent />;
