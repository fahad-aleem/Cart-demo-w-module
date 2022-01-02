import { Text, TextProps } from "@chakra-ui/react";

export const SectionSubHeadline = ({ children, ...rest }: TextProps) => (
  <Text fontSize="sm" lineHeight="140%" color="gray" {...rest}>
    {children}
  </Text>
);
