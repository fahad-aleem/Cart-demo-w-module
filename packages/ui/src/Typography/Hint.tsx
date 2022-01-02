import { Text, TextProps } from "@chakra-ui/react";

interface HintProps extends TextProps {
  children: React.ReactNode;
}
export const Hint = ({ children, ...rest }: HintProps) => (
  <Text fontSize="xs" color="gray" lineHeight="140%" fontWeight={600} {...rest}>
    {children}
  </Text>
);
