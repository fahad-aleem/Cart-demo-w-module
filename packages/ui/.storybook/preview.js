import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme, Fonts } from "../src/theme";

export const decorators = [
  Story => (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Container maxW="container.xl">
        <Story />
      </Container>
    </ChakraProvider>
  ),
];
