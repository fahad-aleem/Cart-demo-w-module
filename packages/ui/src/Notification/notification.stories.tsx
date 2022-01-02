import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";

import { NotificationCenter } from "./NotificationCenter";

export default {
  title: "Notification",
  component: NotificationCenter,
};

const Template: Story<ComponentProps<typeof NotificationCenter>> = () => (
  <NotificationCenter />
);

export const NotificationCenterComponent = Template.bind({});
