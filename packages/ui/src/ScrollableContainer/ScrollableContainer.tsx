import { Box, BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Container = styled(Box)`
  &::-webkit-scrollbar {
    width: var(--chakra-space-2);
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border: 1px solid white;
    box-sizing: border-box;
    border-radius: var(--chakra-radii-base);
  }
`;

interface ScrollableContainerProps extends BoxProps {
  children: React.ReactNode;
}
export const ScrollableContainer = ({
  children,
  ...rest
}: ScrollableContainerProps) => {
  return (
    <Container overflowY="auto" height="100%" flex={1} {...rest}>
      {children}
    </Container>
  );
};
