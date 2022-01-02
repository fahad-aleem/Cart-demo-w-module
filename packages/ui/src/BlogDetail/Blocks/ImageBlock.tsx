import { Box, Text } from "@chakra-ui/react";

export const ImageBlock = ({ block }) => {
  return (
    <Box my={7}>
      <Box
        style={{ backgroundImage: `url(${block.media.formats.medium.url})` }}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        height={["60", "96"]}
        width="100%"
      ></Box>
      <Text color="textGray" fontSize="xs" mt={2.5}>
        {block.media.caption}
      </Text>
    </Box>
  );
};
