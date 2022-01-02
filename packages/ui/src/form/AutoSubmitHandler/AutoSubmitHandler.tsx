import { equals } from "ramda";
import { useEffect, useState } from "react";
import {
  DeepPartial,
  SubmitHandler,
  UnpackNestedValue,
  useFormContext,
  useFormState,
} from "react-hook-form";

import { usePrevious } from "@goldn/hooks";

interface AutoSubmitProps<T> {
  onSubmit: SubmitHandler<T>;
  shouldResetAfterSubmit?: boolean;
}

export const AutoSubmitHandler = <T,>({
  onSubmit,
  shouldResetAfterSubmit,
}: AutoSubmitProps<T>) => {
  const { getValues, reset } = useFormContext<T>();
  const { isDirty, isValid, isValidating } = useFormState<T>();
  const prevIsValidating = usePrevious(isValidating);
  const formHasBeenValidated = prevIsValidating && !isValidating;
  const [initialFormValues, setInitialFormValues] = useState<
    UnpackNestedValue<T>
  >(null);

  useEffect(() => {
    // because we dont have values on initial render - set onMount initial formValues
    setInitialFormValues(getValues());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDirty && isValid && formHasBeenValidated) {
      const values = getValues();

      if (!equals(values, initialFormValues)) {
        onSubmit(values);
        setInitialFormValues(values);
        if (shouldResetAfterSubmit) {
          reset(values as UnpackNestedValue<DeepPartial<T>>);
        }
      }
    }
  }, [
    formHasBeenValidated,
    getValues,
    initialFormValues,
    isDirty,
    isValid,
    onSubmit,
    reset,
    shouldResetAfterSubmit,
  ]);

  return null;
};
