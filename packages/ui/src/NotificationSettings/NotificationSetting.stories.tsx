import { Meta } from "@storybook/react";

import { NotificationSettings } from "./NotificationSettings";

export default {
  title: "NotificationSettings",
  component: NotificationSettings,
} as Meta;

export const Default = props => (
  <NotificationSettings
    onSubmit={v => console.log("submitting", v)}
    defaultValues={{ notifications: "mentions" }}
  />
);
