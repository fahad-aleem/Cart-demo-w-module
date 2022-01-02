import { Story } from "@storybook/react/types-6-0";

import { UserSettings, UserSettingsProps } from "../UserSettings";

export default {
  title: "UserSettings",
  component: UserSettings,
};

const Template: Story<UserSettingsProps> = args => <UserSettings {...args} />;

export const UserSettingsComponent = Template.bind({});
UserSettingsComponent.args = {
  submit: formValues => alert("submit: " + JSON.stringify(formValues)),
  autoSubmit: true,
  personalSettings: { email: "myTest@mail.co" },
} as UserSettingsProps;
