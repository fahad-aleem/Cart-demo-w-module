import { Flex, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FieldError, useFormContext } from "react-hook-form";

import { deepFind } from "@goldn/functions";

import { RadioFieldProps } from "./types";

const StyledInput = styled(Flex)`
  .radio {
    position: absolute;
    margin: 0 !important;
    padding: 0 !important;
    opacity: 0;
    height: 0;
    width: 0;
    pointer-events: none;
  }

  .radio + label {
    user-select: none;
    cursor: pointer;
  }

  .radio + label::before {
    content: "";
    display: inline-block;
    width: var(--chakra-space-4);
    height: var(--chakra-space-4);
    border: ${props =>
      props.error
        ? "2px solid var(--chakra-colors-red-500);"
        : "1px solid var(--chakra-colors-black);"};
    border-radius: var(--chakra-radii-sm);
    margin-right: var(--chakra-space-5);
    transition: 0.2s;
  }

  .radio:checked + label::before {
    background-color: var(--chakra-colors-black);
  }
`;

export const FormRadio = ({
  name,
  label,
  registerOptions,
  value,
  defaultChecked,
  ...rest
}: RadioFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const id = name + "-" + value;
  const error: FieldError = name.includes(".")
    ? deepFind(errors, name)
    : errors[name];

  return (
    <StyledInput {...rest} error={+!!error}>
      <input
        className="radio"
        id={id}
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        {...register(name, registerOptions)}
      />
      <Center as="label" htmlFor={id}>
        {label}
      </Center>
    </StyledInput>
  );
};
