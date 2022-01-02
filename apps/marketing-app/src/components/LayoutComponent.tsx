import { Container, VStack, Box } from "@chakra-ui/react";

import { Footer } from "@goldn/ui";

import Header from "./Header";

interface LayoutProps {
  children: string;
}

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <VStack align="stretch">
      <Container maxWidth="1350px">
        <Header />
        <Box minH="calc(100vh - 170px)" pb={6} pt={{ base: "0", xl: "6" }}>
          <Box>{children}</Box>
        </Box>
      </Container>
      <Footer />
    </VStack>
  );
};
