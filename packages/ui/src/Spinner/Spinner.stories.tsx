import { Spinner, Container, Box, SimpleGrid } from "@chakra-ui/react";

export default {
  title: "Spinner",
  component: Spinner,
};

export const Default = () => (
  <Container>
    <SimpleGrid columns={2} spacing={10} justifyContent="center">
      <Box>xs:</Box>
      <Spinner size="xs" />
      <Box>sm:</Box>
      <Spinner size="sm" />
      <Box>md (default):</Box>
      <Spinner />
      <Box>lg:</Box>
      <Spinner size="lg" />
      <Box>xl:</Box>
      <Spinner size="xl" />
    </SimpleGrid>
  </Container>
);
