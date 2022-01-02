import {
  Input,
  FormErrorMessage,
  HStack,
  SelectProps,
  Box,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/core";
import React, { useCallback, useEffect, useState } from "react";
import { FieldError, useFormContext } from "react-hook-form";

import { autoSubmitValidation } from "../configs";
import { FormControl } from "../FormControl";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { InputFieldProps, SelectFieldOptions } from "../types";
import { useAddress } from "./useAddress";

export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
  state: string;
}

const AutoCompleteBoxStyle = (
  <Global
    styles={css`
      .pac-container {
        border-radius: 0.375rem;
        border-color: inherit;
        background: inherit;
      }
      .pac-item,
      .pac-item-query {
        font-size: 1rem;
      }
      .pac-item {
        font-family: inherit;
        padding: 0.5rem 1rem;
      }
      .pac-item-query {
        padding-right: 0.4rem;
      }
      .pac-icon {
        display: none;
      }
    `}
  />
);

type FormAddressProps = InputFieldProps &
  SelectProps & { defaultValues?: Address };

const countryOptions: SelectFieldOptions = [
  { value: "US", text: "United States of America" },
  { value: "DE", text: "Germany" },
];

export const FormAddress = ({
  registerOptions = { required: false, validate: () => true },
  name,
  label,
  defaultValues,
  hint,
  ...inputFieldProps
}: FormAddressProps) => {
  const place = useAddress();
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const fieldErrors: { [key: string]: FieldError } = errors[name];
  const [street, setStreet] = useState(defaultValues?.street || "");
  const [isRequired, setIsRequired] = useState(false);
  const optional = !registerOptions.required;
  const requiredOptions = isRequired
    ? { required: true }
    : autoSubmitValidation;

  const watchedFields = watch([
    `${name}.street`,
    `${name}.city`,
    `${name}.state`,
    `${name}.postalCode`,
    `${name}.country`,
  ]);

  useEffect(() => {
    if (Object.keys(watchedFields).some(key => watchedFields[key])) {
      if (!isRequired) {
        setIsRequired(true);
      }
    } else {
      if (isRequired) {
        setIsRequired(false);
      }
    }
  }, [isRequired, watchedFields]);

  const applyField = useCallback(
    (field, value, validate = true) => {
      setValue(`${name}.${field}`, value, {
        shouldValidate: validate,
        shouldDirty: validate,
      });
    },
    [name, setValue]
  );

  useEffect(() => {
    if (place) {
      setValue(
        name,
        {
          street: place.street,
          city: place.city,
          postalCode: place.postalCode,
          state: place.state,
          country: place.country,
        },
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
      setStreet(place.street);
    }
  }, [name, place, setValue]);

  return (
    <Box>
      {AutoCompleteBoxStyle}
      <FormControl name={name} label={label} optional={optional} hint={hint}>
        <Input
          display="none"
          {...register(`${name}.street`, requiredOptions)}
          readOnly
          {...inputFieldProps}
        />
        <Input
          data-testid="autocomplete"
          id="autocomplete"
          mb={2}
          value={street}
          onChange={e => {
            const value = e.target.value;

            setStreet(value);
          }}
          onBlur={() => applyField("street", street)}
          placeholder="street"
          {...inputFieldProps}
        />
        <FormErrorMessage>{fieldErrors?.street?.message}</FormErrorMessage>
      </FormControl>
      <HStack spacing="2">
        <FormInput
          name={`${name}.city`}
          placeholder="City"
          registerOptions={requiredOptions}
          {...inputFieldProps}
        />
        <FormInput
          name={`${name}.state`}
          placeholder="State"
          registerOptions={requiredOptions}
          {...inputFieldProps}
        />
        <FormInput
          name={`${name}.postalCode`}
          placeholder="PostalCode"
          type="number"
          {...inputFieldProps}
          registerOptions={requiredOptions}
        />
      </HStack>
      <FormSelect
        name={`${name}.country`}
        options={countryOptions}
        registerOptions={requiredOptions}
        placeholder="Select a Country"
        mt={2}
        {...inputFieldProps}
      />
    </Box>
  );
};
