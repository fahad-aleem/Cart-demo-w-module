import { HStack, VStack } from "@chakra-ui/react";

import {
  EmployeeCount,
  TeamType,
} from "@goldn/data/types/graphql-global-types";
import { autoSubmitValidation } from "@goldn/ui";

import { SectionWrapper } from "../Decorators";
import {
  FormInput,
  SelectFieldOptions,
  FormAddress,
  FormSelect,
  Form,
  Address,
} from "../form";

export interface CompanyValues {
  name: string;
  website?: string;
  companyType?: string;
  address?: Address;
  teamSize?: EmployeeCount;
}

const teamSizeOptions: SelectFieldOptions = [
  { value: EmployeeCount.RANGE1, text: "1-10" },
  { value: EmployeeCount.RANGE11, text: "11-30" },
  { value: EmployeeCount.RANGE31, text: "31-50" },
  { value: EmployeeCount.RANGE51, text: "51-100" },
  { value: EmployeeCount.RANGE100, text: "100+" },
];

const companyTypeOptions: SelectFieldOptions = [
  { value: TeamType.CREATOR, text: "Creator" },
  { value: TeamType.VENDOR, text: "Vendor" },
  { value: TeamType.CREATOR_VENDOR, text: "Creator and Vendor" },
];

export interface CompanySettingsProps {
  submit: (formValues: CompanyValues) => void;
  autoSubmit?: boolean;
  defaultValues?: CompanyValues;
  disabled?: boolean;
  defaultTeamSize?: string;
}

export const CompanySettings = ({
  submit,
  autoSubmit = false,
  defaultValues,
  disabled,
}: CompanySettingsProps) => {
  return (
    <>
      <Form<CompanyValues>
        onSubmit={submit}
        autoSubmit={autoSubmit}
        useFormProps={{
          defaultValues,
          mode: "onBlur",
          reValidateMode: "onBlur",
        }}
      >
        <SectionWrapper
          header="General information"
          subHeader="Information displayed publically within your company profile"
        >
          <HStack spacing={5} alignItems="flex-start">
            <VStack spacing={5} flexBasis="50%">
              <FormInput
                isDisabled={disabled}
                name="name"
                label="Company name"
                registerOptions={{
                  ...autoSubmitValidation,
                  required: "the company name is mandatory",
                  minLength: {
                    message: "company name must contain at least 3 characters",
                    value: 3,
                  },
                }}
              />
              <FormInput
                isDisabled={disabled}
                name="website"
                label="Website"
                registerOptions={{
                  ...autoSubmitValidation,
                  minLength: {
                    message:
                      "website needs to contain at least 3 characters if provided",
                    value: 3,
                  },
                }}
              />
            </VStack>
            <VStack spacing={5} flexBasis="50%">
              <FormSelect
                registerOptions={{ required: "company type is required" }}
                isDisabled={disabled}
                options={companyTypeOptions}
                name="companyType"
                label="Company Type"
              />
              <FormAddress
                name="address"
                label="Address"
                isDisabled={disabled}
                defaultValues={defaultValues?.address}
                registerOptions={autoSubmitValidation}
              />
            </VStack>
          </HStack>
        </SectionWrapper>

        <SectionWrapper
          header="Additional information"
          subHeader="Information which is kept private and helps us provide quality service for your workspace and team."
        >
          <FormSelect
            registerOptions={autoSubmitValidation}
            isDisabled={disabled}
            options={teamSizeOptions}
            name="teamSize"
            label="Team Size"
            maxW="403px"
          />
        </SectionWrapper>
      </Form>
    </>
  );
};
