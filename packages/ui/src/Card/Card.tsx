import { Box, BoxProps } from "@chakra-ui/react";

export const Card = ({ children, ...props }: BoxProps) => (
  <Box
    border="1px"
    borderRadius="base"
    shadow="lg"
    borderColor="goldn"
    alignItems="center"
    {...props}
    p={5}
  >
    {children}
  </Box>
);
