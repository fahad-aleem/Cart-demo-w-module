import { Text, TextProps } from "@chakra-ui/react";

export const PageHeadline = ({ children, ...rest }: TextProps) => (
  <Text
    fontSize="3xl"
    fontWeight="bold"
    lineHeight="100%"
    letterSpacing="-0.01em"
    {...rest}
  >
    {children}
  </Text>
);
