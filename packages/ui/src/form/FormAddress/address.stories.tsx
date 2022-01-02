import { Button } from "@chakra-ui/react";
import { Story } from "@storybook/react/types-6-0";
import { useForm, FormProvider } from "react-hook-form";

import { FormFieldProps } from "../types";
import { FormAddress } from "./FormAddress";

export default {
  title: "Address Autocomplete",
  component: FormAddress,
};

const Template: Story<FormFieldProps> = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(values =>
          alert(JSON.stringify(values, null, 2))
        )}
      >
        <FormAddress
          name="address"
          label="STREET ADDRESS"
          registerOptions={{ required: "you have to provide an address" }}
        />
        <Button type="submit">submit</Button>
      </form>
    </FormProvider>
  );
};

export const AddressComponent = Template.bind({});
