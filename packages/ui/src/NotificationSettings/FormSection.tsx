import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { BorderedBox } from "../Decorators";
import { FormRadio } from "../form/FormRadios";

export const FormSection = () => {
  const { watch } = useFormContext();
  const notificationsValue = watch("notifications");

  return (
    <>
      <BorderedBox
        mt={5}
        borderColor={notificationsValue === "important" ? "black" : "offWhite"}
      >
        <FormRadio
          label="Important events & @mentions"
          name="notifications"
          value="important"
          registerOptions={{ required: true }}
        />
      </BorderedBox>

      <BorderedBox
        mt={5}
        borderColor={notificationsValue === "mentions" ? "black" : "offWhite"}
      >
        <FormRadio
          label="Only & @mentions"
          name="notifications"
          value="mentions"
          registerOptions={{ required: true }}
        />
      </BorderedBox>

      <BorderedBox
        mt={5}
        borderColor={notificationsValue === "none" ? "black" : "offWhite"}
      >
        <FormRadio
          label="None"
          name="notifications"
          value="none"
          registerOptions={{ required: true }}
        />
      </BorderedBox>
    </>
  );
};
