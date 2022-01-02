import { SectionWrapper } from "../Decorators/SectionWrapper";
import { Form } from "../form/Form";
import { Note } from "../Typography";
import { FormSection } from "./FormSection";

export interface NotificationSettings {
  notifications?: "important" | "mentions" | "none";
}

export interface NotificationSettingsProps {
  onSubmit: (formValues: NotificationSettings) => void;
  defaultValues?: NotificationSettings;
}

export const NotificationSettings = ({
  onSubmit,
  defaultValues = {},
}: NotificationSettingsProps) => {
  return (
    <>
      <SectionWrapper header="In-app">
        <Note>
          In-app notifications cannot be adjusted at this time. You’ll receive
          important updates related to your workspace and project activities.
        </Note>
      </SectionWrapper>
      <SectionWrapper
        header="Email"
        subHeader="Select an option to set the extent of notifications you would like to be sent to your email inbox."
        subheadlineProps={{ maxW: "500px" }}
      >
        <Form<NotificationSettings>
          autoSubmit
          shouldResetAfterSubmit
          onSubmit={onSubmit}
          useFormProps={{
            mode: "onChange",
            reValidateMode: "onChange",
            defaultValues,
          }}
        >
          <FormSection />
        </Form>
      </SectionWrapper>
    </>
  );
};
