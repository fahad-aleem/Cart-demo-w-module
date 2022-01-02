import { BoxProps, Box } from "@chakra-ui/layout";

export const BorderedBox = ({
  children,
  ...rest
}: { children: React.ReactNode } & BoxProps) => (
  <Box p={3} border="1px" borderColor="offWhite" borderRadius="md" {...rest}>
    {children}
  </Box>
);
