import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";

import { UserStatus } from "@goldn/data";

import { MemberCard } from "./MemberCard";

export default {
  title: "MemberCard",
  component: MemberCard,
};

const Template: Story<ComponentProps<typeof MemberCard>> = args => (
  <MemberCard {...args} />
);

export const Active = Template.bind({});
Active.args = {
  name: "Min Soo Kim",
  id: "@gimmins",
  title: "Software Engineer",
  email: "min.soo.kim@ingredient-labs.com",
  avatar:
    "https://media-exp1.licdn.com/dms/image/C5603AQEHqo8VIU40HQ/profile-displayphoto-shrink_200_200/0/1533098851880?e=1623283200&v=beta&t=bdthiCwWQfosAnJOx66bqkquaclvO_0jMWorQjDTF5Q",
  status: UserStatus.ACTIVE,
};

export const Deactivated = Template.bind({});
Deactivated.args = {
  name: "Min Soo Kim",
  id: "@gimmins",
  title: "Software Engineer",
  email: "min.soo.kim@ingredient-labs.com",
  avatar:
    "https://media-exp1.licdn.com/dms/image/C5603AQEHqo8VIU40HQ/profile-displayphoto-shrink_200_200/0/1533098851880?e=1623283200&v=beta&t=bdthiCwWQfosAnJOx66bqkquaclvO_0jMWorQjDTF5Q",
  status: UserStatus.DEACTIVATED,
};

export const Pending = Template.bind({});
Pending.args = {
  email: "min.soo.kim@ingredient-labs.com",
  status: UserStatus.PENDING,
};
