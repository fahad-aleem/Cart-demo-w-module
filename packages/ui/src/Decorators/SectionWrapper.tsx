import { Box, TextProps } from "@chakra-ui/react";

import { SectionHeadline, SectionSubHeadline } from "../Typography";

interface SectionWrapperProps {
  showSubheader?: boolean;
  header?: string;
  subHeader?: string;
  children: React.ReactNode;
  subheadlineProps?: TextProps;
}

export const SectionWrapper = ({
  header,
  subHeader,
  children,
  showSubheader = true,
  subheadlineProps = {},
}: SectionWrapperProps) => {
  const renderShubHeader = subHeader && showSubheader;

  return (
    <Box p={5} mb={5} border="1px" borderColor="offWhite" borderRadius="md">
      {header && <SectionHeadline>{header}</SectionHeadline>}
      {renderShubHeader && (
        <SectionSubHeadline mt={1} {...subheadlineProps}>
          {subHeader}
        </SectionSubHeadline>
      )}
      <Box mt={6}>{children}</Box>
    </Box>
  );
};
