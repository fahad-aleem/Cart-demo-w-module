import { Story } from "@storybook/react/types-6-0";

import {
  CompanySettings,
  CompanySettingsProps,
  CompanyValues,
} from "../CompanySettings";

export default {
  title: "CompanySettings",
  component: CompanySettings,
};

const Template: Story<CompanySettingsProps> = args => (
  <CompanySettings {...args} />
);

export const CompanySettingsComponent = Template.bind({});
CompanySettingsComponent.args = {
  autoSubmit: true,
  submit: (formValues: CompanyValues) =>
    console.log("submit: ", JSON.stringify(formValues)),
} as CompanySettingsProps;

export const CompanySettingsWithValues = Template.bind({});
CompanySettingsWithValues.args = {
  defaultValues: {
    name: "Goldn",
    website: "goldn.com",
  },
  autoSubmit: true,
  submit: (formValues: CompanyValues) =>
    console.log("submit: ", JSON.stringify(formValues)),
} as CompanySettingsProps;
