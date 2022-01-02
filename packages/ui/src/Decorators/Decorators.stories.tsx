import { Box } from "@chakra-ui/react";
import { Story } from "@storybook/react/types-6-0";

import { BorderedBox } from "./BorderedBox";
import { SectionWrapper } from "./SectionWrapper";

export default {
  title: "Decorators",
};

// eslint-disable-next-line react/prop-types
const Template: Story<unknown> = ({ children }) => <Box> {children} </Box>;

export const SectionWrapperComponent = Template.bind({});
SectionWrapperComponent.args = {
  children: <SectionWrapper>Im in SectionWrapper</SectionWrapper>,
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  children: (
    <SectionWrapper header="Header">Im in SectionWrapper</SectionWrapper>
  ),
};

export const WithHeaderSubHeader = Template.bind({});
WithHeaderSubHeader.args = {
  children: (
    <SectionWrapper
      header="Header"
      subHeader="Subheader something over the rainbow"
    >
      Im in SectionWrapper
    </SectionWrapper>
  ),
};

export const WithHeaderSubHeaderButDisabled = Template.bind({});
WithHeaderSubHeaderButDisabled.args = {
  children: (
    <SectionWrapper
      header="Header"
      subHeader="Subheader something over the rainbow"
      showSubheader={false}
    >
      Im in SectionWrapper
    </SectionWrapper>
  ),
};

export const Bordered = () => <BorderedBox>im inside BorderedBox</BorderedBox>;
