import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";

import { ActivityStatus } from "./ActivityStatus";

export default {
  title: "Activity Status",
  component: ActivityStatus,
};

const Template: Story<ComponentProps<typeof ActivityStatus>> = args => (
  <ActivityStatus
    avatarBorderColor="white"
    name="Min Soo Kim"
    avatar="https://media-exp1.licdn.com/dms/image/C5603AQEHqo8VIU40HQ/profile-displayphoto-shrink_100_100/0/1533098851880?e=1622678400&v=beta&t=WIoJSCu2Sx380oGPCMm37D2O8H6uj6CQr0LmXZkMOLo"
  />
);

export const ActivityStatusComponent = Template.bind({});
