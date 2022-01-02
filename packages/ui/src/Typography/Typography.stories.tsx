import {
  PageHeadline,
  SectionHeadline,
  SectionSubHeadline,
  Hint,
  Note,
  OptFormLabel,
  ErrorLabel,
} from ".";

export default {
  title: "Typography",
};

export const Typography = () => (
  <>
    <PageHeadline mb={5}>PageHeadline</PageHeadline>
    <SectionHeadline mb={5}>SectionHeadline</SectionHeadline>
    <SectionSubHeadline mb={5}>SectionSubHeadline</SectionSubHeadline>
    <Hint mb={5}>this is hint</Hint>
    <ErrorLabel mb={5}>this is an error</ErrorLabel>
    <OptFormLabel />
    <Note mb={5} mt={5}>
      I&apos;m a note
    </Note>
  </>
);
