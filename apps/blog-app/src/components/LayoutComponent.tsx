import { Container, VStack, Box } from "@chakra-ui/react";

import { Footer } from "@goldn/ui";

import Header from "./Header";

export const LayoutComponent = ({ children }) => {
  return (
    <VStack align="stretch">
      <Container maxWidth="1350px">
        <Header />
        <Box minH="calc(100vh - 180px)" py={6}>
          <Box>
            {children}
          </Box>
        </Box>
      </Container>
      <Footer />
    </VStack>
  );
};
