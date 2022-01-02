import { Select } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { DropDownArrow } from "@goldn/icons";

import { FormControl } from "./FormControl";
import { SelectFieldProps } from "./types";

export const FormSelect = ({
  name,
  label,
  placeholder,
  registerOptions = { required: false },
  options,
  hint,
  isDisabled,
  ...selectProps
}: SelectFieldProps) => {
  const optional = !registerOptions.required;
  const { register } = useFormContext();

  return (
    <FormControl name={name} label={label} optional={optional} hint={hint}>
      <Select
        placeholder={placeholder}
        {...register(name, registerOptions)}
        icon={<DropDownArrow />}
        isDisabled={isDisabled || undefined}
        {...selectProps}
      >
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
