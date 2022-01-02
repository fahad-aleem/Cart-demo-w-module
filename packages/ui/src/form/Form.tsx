import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

import { AutoSubmitHandler } from "./AutoSubmitHandler";

export interface FormProps<T> {
  onSubmit: SubmitHandler<T>;
  useFormProps?: UseFormProps<T>;
  children?: React.ReactNode;
  formOptions?: React.FormHTMLAttributes<HTMLFormElement>;
  autoSubmit?: boolean;
  shouldResetAfterSubmit?: boolean;
}

export const Form = <T,>({
  children,
  onSubmit,
  useFormProps,
  formOptions,
  autoSubmit = false,
  shouldResetAfterSubmit = false,
}: FormProps<T>) => {
  const methods = useForm<T>(useFormProps);
  const submit = methods.handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <form onSubmit={submit} noValidate {...formOptions}>
        {children}
      </form>
      {autoSubmit && (
        <AutoSubmitHandler<T>
          onSubmit={onSubmit}
          shouldResetAfterSubmit={shouldResetAfterSubmit}
        />
      )}
    </FormProvider>
  );
};
