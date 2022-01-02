import { Text, TextProps } from "@chakra-ui/react";

interface NoteProps extends TextProps {
  children: React.ReactNode;
}
export const Note = ({ children, ...rest }: NoteProps) => (
  <Text
    fontSize="large"
    color="brightGreen"
    lineHeight="115%"
    fontWeight="bold"
    letterSpacing="-0.01em"
    {...rest}
  >
    {children}
  </Text>
);
