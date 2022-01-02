import { Heading, Box, Text } from "@chakra-ui/react";

export const ProductHeader = () => {
  return (
    <Box mb="4">
      <Heading
        m="0"
        as="h1"
        size="2xl"
        fontFamily="SofiaPro-SemiBold"
        mb="2"
        lineHeight={["48px", "56px"]}
      >
        Goldn Products
      </Heading>
      <Text
        fontSize="2xl"
        fontWeight="SemiBold"
        as="p"
        color="gray.500"
        width="60%"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500.
      </Text>
    </Box>
  );
};

