import { Button, useToast, VStack } from "@chakra-ui/react";
import { Story } from "@storybook/react/types-6-0";
import { UseFormProps } from "react-hook-form";

import { FormProps, Form } from "../Form";
import { FormCheckbox } from "../FormCheckbox";
import { FormControl } from "../FormControl";
import { FormEmail } from "../FormEmail/FormEmail";
import { FormInput } from "../FormInput";
import { FormPassword } from "../FormPassword";
import { FormRadio } from "../FormRadios";
import { FormSelect } from "../FormSelect";

export default {
  title: "Form",
  component: Form,
};

const Wrapper = ({ children, ...args }: any) => {
  const toast = useToast();
  const submit = v => {
    console.log("submitting: ", v);
    toast({
      title: "submitted fields",
      description: JSON.stringify(v, null, 2),
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Form onSubmit={submit} {...args}>
      <VStack spacing="5">
        {children}
        {!args.autoSubmit && <Button type="submit">submit</Button>}
      </VStack>
    </Form>
  );
};

const InputTemplate: Story<FormProps<unknown>> = args => {
  return (
    <Wrapper {...args}>
      <FormInput name="simeInput" label="simpleInput" />
      <FormInput name="disabledInput" label="disabled Input" isDisabled />
      <FormInput
        name="requiredInput"
        label="required Input"
        registerOptions={{ required: "this field is required" }}
        hint="this one has a hint"
      />
      <FormInput
        name="minLength"
        label="minLength"
        registerOptions={{
          minLength: {
            value: 5,
            message: "if provided, then minimum 5 characters",
          },
        }}
      />
      <FormInput name="numbers" label="Numbers" type="number" />
      <FormEmail
        name="formEmailRequired"
        label="Email"
        registerOptions={{ required: "email ist requried" }}
      />
      <FormInput
        name="onlyText"
        label="Only Text"
        registerOptions={{
          pattern: {
            message: "only text is allowed",
            value: /[^a-zA-Z0-9@]+/,
          },
        }}
      />

      <FormPassword name="formPassword" label="Password" />
    </Wrapper>
  );
};

export const Input = InputTemplate.bind({});
Input.args = {
  useFormProps: {
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: { simeInput: "default value from defaultValues" },
  },
};

export const InputAutoSubmit = InputTemplate.bind({});
InputAutoSubmit.args = {
  autoSubmit: true,
  useFormProps: { mode: "onBlur", reValidateMode: "onBlur" },
};

const SelectTemplate: Story<FormProps<unknown>> = args => {
  return (
    <Wrapper {...args}>
      <FormSelect
        name="formSelect"
        label="formLabel"
        options={[
          { text: "", value: "-" },
          { text: "1", value: "1" },
          { text: "2", value: "2" },
        ]}
      />

      <FormSelect
        name="formSelectRequreid"
        label="formSelectRequreid"
        registerOptions={{ required: "this select is required" }}
        options={[
          { text: "", value: "-" },
          { text: "1", value: "1" },
          { text: "2", value: "2" },
        ]}
      />

      <FormSelect
        name="formSelectDisabled"
        label="formSelectDisabled"
        options={[
          { text: "1", value: "1" },
          { text: "2", value: "2" },
        ]}
        isDisabled
      />
    </Wrapper>
  );
};

export const Select = SelectTemplate.bind({});
Select.args = {
  useFormProps: { mode: "onSubmit", reValidateMode: "onChange" },
};

export const SelectAutoSubmit = SelectTemplate.bind({});
SelectAutoSubmit.args = {
  autoSubmit: true,
  useFormProps: { mode: "onBlur", reValidateMode: "onBlur" },
};

const CheckboxTemplate: Story<FormProps<unknown>> = args => {
  return (
    <Wrapper {...args}>
      <FormCheckbox name="defaultCheckbox">some children label</FormCheckbox>
      <FormCheckbox name="formValue">defaultValue from form</FormCheckbox>
      <FormCheckbox name="withOptLabel" label=" ">
        some children label
      </FormCheckbox>
      <FormCheckbox name="precheckedCheckbox" defaultChecked>
        some children label
      </FormCheckbox>
      <FormCheckbox name="labelCheckbox" label="Some label">
        some children label
      </FormCheckbox>

      <FormCheckbox
        name="requiredCheckbox"
        label="requiredCheckbox"
        registerOptions={{ required: "you have to accept whatever we say!" }}
      >
        terms and condition
      </FormCheckbox>
    </Wrapper>
  );
};

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {
  useFormProps: {
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      formValue: true,
    },
  },
};

export const CheckboxAutoSubmit = CheckboxTemplate.bind({});
CheckboxAutoSubmit.args = {
  autoSubmit: true,
  useFormProps: { mode: "onBlur", reValidateMode: "onBlur" },
};

const RadioTemplate: Story<FormProps<unknown>> = args => {
  const requiredOptions = { required: "you need one to select" };

  return (
    <Wrapper {...args}>
      <FormControl name="radio" label="preChecked by defaultValue in form">
        <FormRadio name="radio" label="react" value="react" />
        <FormRadio name="radio" label="vue" value="vue" />
        <FormRadio name="radio" label="svelte" value="svelte" />
      </FormControl>

      <FormControl name="defaultRadio" label="defaultChecked">
        <FormRadio
          name="defaultRadio"
          label="react"
          value="react"
          defaultChecked
        />
        <FormRadio name="defaultRadio" label="vue" value="vue" />
        <FormRadio name="defaultRadio" label="svelte" value="svelte" />
      </FormControl>

      <FormControl name="requiredradio" label="required Radios">
        <FormRadio
          name="requiredradio"
          label="react"
          value="react"
          registerOptions={requiredOptions}
        />
        <FormRadio
          name="requiredradio"
          label="vue"
          value="vue"
          registerOptions={requiredOptions}
        />
        <FormRadio
          name="requiredradio"
          label="svelte"
          value="svelte"
          registerOptions={requiredOptions}
        />
      </FormControl>
    </Wrapper>
  );
};

const radioFormOptions: UseFormProps<{
  radio: string | null;
  defaultRadio: string | null;
  requiredradio: string | null;
}> = {
  mode: "onBlur",
  reValidateMode: "onBlur",
  defaultValues: {
    radio: "svelte",
  },
};

export const Radio = RadioTemplate.bind({});
Radio.args = {
  useFormProps: radioFormOptions,
};

export const RadioAutoSubmit = RadioTemplate.bind({});
RadioAutoSubmit.args = {
  autoSubmit: true,
  useFormProps: radioFormOptions,
};
