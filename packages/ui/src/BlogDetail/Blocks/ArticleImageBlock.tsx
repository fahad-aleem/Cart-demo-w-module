import { Box } from "@chakra-ui/react";

export const ArticleImageBlock = ({ block }) => {
  return (
    block && (
      <Box my={7} mb="48px" mx={[0, 0, -16]}>
        <Box
          style={{ backgroundImage: `url(${block.image.formats.medium.url})` }}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          height={["80", "96"]}
          width="100%"
          borderRadius="4px"
        ></Box>
      </Box>
    )
  );
};
