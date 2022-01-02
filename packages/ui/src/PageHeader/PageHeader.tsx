import { Box } from "@chakra-ui/react";

import { PageHeadline } from "../Typography";
import { UpdateIndicator } from "../UpdateIndicator";

interface PageHeaderProps {
  header: string;
  pageActionButton?: React.ReactNode;
}

export const PageHeader = ({ header, pageActionButton }: PageHeaderProps) => (
  <Box p={8} background="offWhite" position="relative" boxShadow="insetBottom">
    <PageHeadline>{header}</PageHeadline>
    <Box position="absolute" top={2} right={2}>
      <UpdateIndicator />
    </Box>
    {pageActionButton && (
      <Box position="absolute" bottom={0} right={7}>
        {pageActionButton}
      </Box>
    )}
  </Box>
);
