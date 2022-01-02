import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";

import { Carousel } from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
};

const Template: Story<ComponentProps<typeof Carousel>> = args => (
  <Carousel {...args} />
);

export const CarouselComponent = Template.bind({});
CarouselComponent.args = {
  images: [
    "/kaung-myat-min-bCAOV2Sg7Es-unsplash.jpg",
    "/kaung-myat-min-iBLWICTNt0Y-unsplash.jpg",
    "/kaung-myat-min-n39-bU4c5kQ-unsplash.jpg",
  ],
  /* the args you need here will depend on your component */
};
