import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { FormControl } from "./FormControl";
import { InputFieldProps } from "./types";

const defaultRegisterOptions = {
  required: "You must specify a password",
  minLength: {
    value: 8,
    message: "Password must have at least 8 characters",
  },
};

export const FormPassword = ({
  name,
  label,
  hint,
  registerOptions = defaultRegisterOptions,
  ...inputFieldProps
}: InputFieldProps) => {
  const [show, setShow] = useState(false);
  const optional = !registerOptions.required;
  const { register } = useFormContext();

  return (
    <FormControl name={name} label={label} optional={optional} hint={hint}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          {...inputFieldProps}
          {...register(name, registerOptions)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
