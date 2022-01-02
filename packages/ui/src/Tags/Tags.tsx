import { Box, Badge, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Tags = ({ tags }) => {
  return (
    <Flex flexWrap="wrap">
      {Array.isArray(tags) &&
        tags.map((item, index) => (
          <Link passHref href={`/tags/${item.slug}`} key={index}>
            <Box as="a" mr="7px" mb="7px" cursor="pointer">
              <Badge
                py="5px"
                px="10px"
                bg="gray.200"
                color="gray.600"
                fontSize="xs"
                textTransform="capitalize"
                _hover={{ color: "gray.700" }}
              >
                {item.name}
              </Badge>
            </Box>
          </Link>
        ))}
    </Flex>
  );
};
