import { Text, Box } from "@chakra-ui/react";

export const HeadingBlock = ({ block }) => {
  return (
    <Box>
      <Text
        fontFamily="SofiaPro-SemiBold"
        fontSize={[38, 32]}
        lineHeight={["1.1", "1.3"]}
        mb="16px"
      >
        {block?.value}
      </Text>
    </Box>
  );
};
