import { SimpleGrid, Box, Heading } from "@chakra-ui/react";

import { SupplierTile } from "@goldn/ui";

export const SupplierTileList = () => {
  return (
    <>
      <Box mb="20">
        <Heading as="h2" mb={[4, 8]} fontSize={[20,26]} lineHeight={["1.1","1.2"]}>
          Find supplier by type
        </Heading>
        <SimpleGrid columns={[1,2,3,4]} spacing={[5, 7]}>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>          
        </SimpleGrid>
      </Box>

      <Box mb="20">
        <Heading as="h2" mb={[4, 8]} fontSize={[20,26]} lineHeight={["1.1","1.2"]}>
          Find supplier by service
        </Heading>
        <SimpleGrid columns={[2,3,4,6]} spacing={[5, 7]}>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>
          <SupplierTile/>          
        </SimpleGrid>
      </Box>
    </>
  );
};
