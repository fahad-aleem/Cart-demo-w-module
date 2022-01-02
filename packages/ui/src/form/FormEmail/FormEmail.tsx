import { FormInput } from "../FormInput";
import { InputFieldProps } from "../types";
import emailRFCPattern from "./emailRFCPattern";

export const FormEmail = ({
  name,
  registerOptions,
  ...rest
}: Omit<InputFieldProps, "type">) => {
  return (
    <FormInput
      name={name}
      registerOptions={{
        required: "the email is mandatory",
        pattern: {
          value: emailRFCPattern,
          message: "invalid email address",
        },
        ...registerOptions,
      }}
      type="email"
      {...rest}
    />
  );
};
