import { Text, TextProps } from "@chakra-ui/react";

export const SectionHeadline = ({ children, ...rest }: TextProps) => (
  <Text
    fontWeight="bold"
    fontSize="large"
    lineHeight="115%"
    letterSpacing="-0.01em"
    {...rest}
  >
    {children}
  </Text>
);
