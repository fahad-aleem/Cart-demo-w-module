import { Box, SimpleGrid } from "@chakra-ui/react";

import {
  UpdateUser,
  UserJobTitle,
} from "@goldn/data/types/graphql-global-types";

import { SectionWrapper } from "../Decorators";
import {
  FormEmail,
  FormInput,
  FormSelect,
  SelectFieldOptions,
  Form,
  autoSubmitValidation,
} from "../form";

export type PersonalSettings = Pick<
  UpdateUser,
  "displayName" | "name" | "jobTitle" | "email"
>;
export interface UserSettingsProps {
  submit: (s: PersonalSettings) => void;
  autoSubmit?: boolean;
  personalSettings?: PersonalSettings;
}

const userRoleOptions: SelectFieldOptions = [
  { value: "", text: "" },
  { value: "ADMIN", text: "Admin" },
  { value: "OWNER", text: "Owner" },
  { value: "MEMBER", text: "Member" },
  { value: "GUEST", text: "Guest" },
];

const jobTitleOptions: SelectFieldOptions = [
  { value: "", text: "" },
  { value: UserJobTitle.CEO, text: "Ceo" },
  { value: UserJobTitle.OTHER, text: "Other" },
  { value: UserJobTitle.DEVELOPMENT, text: "Develoment" },
  { value: UserJobTitle.HR, text: "HR" },
  { value: UserJobTitle.QUALITY, text: "Quality" },
  { value: UserJobTitle.FORMULATOR, text: "Formulator" },
  { value: UserJobTitle.PROJECT_MANAGER, text: "Project manager" },
  { value: UserJobTitle.MARKETING, text: "Marketing" },
  { value: UserJobTitle.SALES, text: "Sales" },
];

export const UserSettings = ({
  submit,
  autoSubmit = false,
  personalSettings = {},
}: UserSettingsProps) => {
  return (
    <Form<PersonalSettings>
      onSubmit={submit}
      autoSubmit={autoSubmit}
      useFormProps={{
        defaultValues: personalSettings,
        mode: "onBlur",
        reValidateMode: "onBlur",
      }}
      formOptions={{ autoComplete: "on" }}
    >
      <SectionWrapper header="General Information">
        <SimpleGrid columns={2} spacing={5}>
          <FormInput
            autoComplete="name"
            name="name"
            label="Full name"
            registerOptions={autoSubmitValidation}
          />
          <FormInput
            registerOptions={autoSubmitValidation}
            name="displayName"
            autoComplete="username"
            label="Display Name"
            inputLeftElement="@"
            hint="This could be your first name, or a nickname — however you’d like people to see and refer to you on Goldn."
          />
          <FormSelect
            name="jobTitle"
            options={jobTitleOptions}
            label="Job title"
            registerOptions={autoSubmitValidation}
          />
          <FormEmail
            name="email"
            label="Email"
            autoComplete="email"
            isDisabled
            registerOptions={{
              //for security reasons - will remove email from being send
              shouldUnregister: true,
            }}
          />
        </SimpleGrid>
      </SectionWrapper>
      <Box w="50%" p={5} pr={2.5}>
        <FormInput
          isDisabled
          name="userRole"
          label="Role"
          hint="Administrators have access to all projects and can manage other users."
        />
      </Box>
    </Form>
  );
};
