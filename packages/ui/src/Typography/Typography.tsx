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

export const SectionSubHeadline = ({ children, ...rest }: TextProps) => (
  <Text fontSize="sm" lineHeight="140%" color="gray" {...rest}>
    {children}
  </Text>
);

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

interface HintProps extends TextProps {
  children: React.ReactNode;
}
export const Hint = ({ children, ...rest }: HintProps) => (
  <Text fontSize="xs" color="gray" lineHeight="140%" fontWeight="600" {...rest}>
    {children}
  </Text>
);

export const OptFormLabel = () => (
  <Text fontSize="s" color="gray" lineHeight="120%" display="inline">
    (optional)
  </Text>
);
