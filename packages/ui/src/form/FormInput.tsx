import {
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

import { deepFind } from "@goldn/functions";
import { AlertIcon } from "@goldn/icons";

import { FormControl } from "./FormControl";
import { InputFieldProps } from "./types";

export const FormInput = ({
  name,
  label,
  registerOptions = { required: false },
  type = "text",
  inputLeftElement,
  hint,
  ...inputProps
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const optional = !registerOptions.required;

  const error: FieldError = name.includes(".")
    ? deepFind(errors, name)
    : errors[name];

  return (
    <FormControl name={name} label={label} optional={optional} hint={hint}>
      <InputGroup>
        {inputLeftElement && (
          <InputLeftElement>{inputLeftElement}</InputLeftElement>
        )}
        <Input
          data-testid={name}
          type={type}
          {...register(name, registerOptions)}
          {...inputProps}
        />
        {error && (
          <InputRightElement>
            <AlertIcon />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};
