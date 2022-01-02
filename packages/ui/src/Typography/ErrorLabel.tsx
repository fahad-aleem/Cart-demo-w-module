import { WarningIcon } from "@chakra-ui/icons";
import { Text, TextProps } from "@chakra-ui/react";

interface ErrorLabelProps extends TextProps {
  children: React.ReactNode;
}
export const ErrorLabel = ({ children, ...rest }: ErrorLabelProps) => (
  <Text
    fontSize="xs"
    color="red.500"
    lineHeight="18px"
    fontWeight={700}
    {...rest}
  >
    <WarningIcon mr={2.5} />
    {children}
  </Text>
);
