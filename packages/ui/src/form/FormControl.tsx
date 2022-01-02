import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

import { deepFind } from "@goldn/functions";

import { Hint, OptFormLabel } from "../Typography";

interface FormControlProps {
  name: string;
  label?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}

export const FormControl = ({
  name,
  label,
  optional,
  children,
  hint,
}: FormControlProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error: FieldError = name.includes(".")
    ? deepFind(errors, name)
    : errors[name];

  return (
    <ChakraFormControl id={name} isInvalid={!!error}>
      {label && (
        <FormLabel>
          {label} {optional && <OptFormLabel />}
        </FormLabel>
      )}
      {children}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
      {hint && <Hint mt={2}>{hint}</Hint>}
    </ChakraFormControl>
  );
};
