import { Box, Heading, Text } from "@chakra-ui/react";

interface BlogHeaderProps {
  name?: string;
  description?: string;
}
const defaultDecription = ` Read on for free product creation tips, industry expertise, inspiration
& ideas to help you create and launch a successful formula-based
product.`;
const defaultName = "Goldn Blog";

export const BlogHeader = ({
  name = defaultName,
  description = defaultDecription,
}: BlogHeaderProps) => {
  return (
    <Box maxWidth="800">
      <Heading
        as="h1"
        fontFamily="SofiaPro-SemiBold"
        mb={4}
        mt={0}
        fontSize={[40, 48]}
        fontWeight="bold"
        lineHeight={["48px", "56px"]}
      >
        {name}
      </Heading>
      <Text
        fontFamily="SofiaPro-SemiBold"
        fontSize={[20, 26]}
        fontWeight="semibold"
        color="textGray"
        lineHeight={["28px", "32px"]}
        mb={["32px", "52px"]}
      >
        {description}
      </Text>
    </Box>
  );
};
