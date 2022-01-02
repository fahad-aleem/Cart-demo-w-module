import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const PostCardText = () => {
  return (
    <Box
      maxWidth={["100%", "100%", "33.33%"]}
      px="15px"
      mx="0"
      borderWidth="0"
      borderRadius="4px"
      overflow="hidden"
    >
      <HStack
        bgColor="brightGreen"
        color="white"
        height={60}
        width="100%"
        p="6"
        borderRadius="4"
        _hover={{ boxShadow: "md" }}
      >
        <Link href="/blog-detail">
          <a>
            <Heading
              as="h2"
              fontSize={[24, 32]}
              mb={3}
              mt={3}
              fontWeight="bold"
              noOfLines={3}
              cursor="pointer"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. mollit
              anim id est laborum sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </Heading>
          </a>
        </Link>
      </HStack>
      <Box pt="6" mb="64px">
        <Text fontWeight="bold" color="goldn">
          Category
        </Text>
        <Link href="/blog-detail">
          <a>
            <Heading
              as="h2"
              fontSize="xl"
              mb={3}
              mt={3}
              fontWeight="bold"
              noOfLines={2}
              lineHeight="28px"
              cursor="pointer"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. mollit
              anim id est laborum
            </Heading>
          </a>
        </Link>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          August 1, 2021 · 5 min read
        </Text>
      </Box>
    </Box>
  );
};
