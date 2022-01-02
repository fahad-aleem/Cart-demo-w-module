import { SelectProps, InputProps, CheckboxProps } from "@chakra-ui/react";
import { RegisterOptions } from "react-hook-form";

type HTMLInputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface FormFieldProps {
  registerOptions?: RegisterOptions;
  name: string;
  label?: string;
  hint?: string;
}

export type CheckboxFieldProps = FormFieldProps & CheckboxProps;
export type RadioFieldProps = FormFieldProps & CheckboxProps & { value: any };

export type InputFieldProps = {
  type?: HTMLInputType;
  inputLeftElement?: React.ReactNode;
} & FormFieldProps &
  InputProps;

export type SelectFieldProps = {
  options: SelectFieldOptions;
} & FormFieldProps &
  SelectProps;

interface Option {
  value: string | number;
  text: string | number;
}
export type SelectFieldOptions = Option[];
