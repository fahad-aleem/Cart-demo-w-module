import { HStack, Box, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns/fp";
import Link from "next/link";

export const PostCardRecommended = ({ post }) => {
  const link = `/posts/${post.slug}`;

  return (
    <HStack
      mb="60px"
      borderWidth="0"
      borderRadius="4px"
      overflow="hidden"
      alignItems="stretch"
      flexDirection={{ base: "column", lg: "row" }}
      mx="-15px"
    >
      <Link href={link} passHref>
        <Box
          as="a"
          style={{
            backgroundImage: `url('${post?.image?.formats?.small.url}')`,
          }}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          height={["250px", "300px", "400px", "500px"]}
          width="100%"
          borderRadius="md"
          position="relative"
          cursor="pointer"
          _hover={{ boxShadow: "md" }}
        ></Box>
      </Link>
      <Box
        w={["100%", "100%", "100%", "654px"]}
        ml="0 !important"
        py="4"
        px={["0", "20px", "20px", "30px"]}
        d="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text fontWeight="bold" color="goldn">
            {post.category.name}
          </Text>
          <Link href={link} passHref>
            <Text
              as="a"
              fontFamily="SofiaPro-SemiBold"
              fontSize={["20px", "30px", "40px"]}
              lineHeight={["28px", "38px", "48px"]}
              mb={5}
              mt={4}
              fontWeight="bold"
              cursor="pointer"
            >
              {post.title}
            </Text>
          </Link>
          <Text noOfLines={3} mb={3} color="gray.500" lineHeight="1.8">
            {post.description}
          </Text>
        </Box>
        <Text color="gray.500" letterSpacing="wide" fontSize="sm">
          {format("MMM d, yyyy", Date.parse(post.publishedAt))} ·{" "}
          {post.readTimeMinutes} min read
        </Text>
      </Box>
    </HStack>
  );
};
