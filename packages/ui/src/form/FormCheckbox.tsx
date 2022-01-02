import { Checkbox } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";

import { FormControl } from "./FormControl";
import { CheckboxFieldProps } from "./types";

export const FormCheckbox = ({
  name,
  label,
  registerOptions = { required: false },
  children,
  hint,
  defaultChecked,
  ...checkboxProps
}: CheckboxFieldProps) => {
  const { control } = useFormContext();
  const optional = !registerOptions.required;

  return (
    <FormControl name={name} label={label} optional={optional} hint={hint}>
      <Controller
        control={control}
        name={name}
        rules={registerOptions}
        defaultValue={!!defaultChecked}
        render={({ field, fieldState }) => (
          <Checkbox
            isInvalid={fieldState.invalid}
            defaultChecked={!!defaultChecked}
            colorScheme="green"
            {...checkboxProps}
            {...field}
          >
            {children}
          </Checkbox>
        )}
      />
    </FormControl>
  );
};
