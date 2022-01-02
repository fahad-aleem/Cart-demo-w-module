import { Box, Text, Link, HStack, VStack, Heading } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export const BlogAuthor = ({ blogEntry }) => {
  return (
    <HStack alignItems="flex-start">
      <Box
        borderRadius="100%"
        height={16}
        width={16}
        minWidth={16}
        mr={3.5}
        overflow="hidden"
      >
        <Box
          style={{
            backgroundImage: `url('${blogEntry?.author?.picture?.url}')`,
          }}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          height="100%"
          width="100%"
        ></Box>
      </Box>
      <VStack alignItems="flex-start">
        <Text mt="0" color="gray.500" fontSize="xs">
          Written by
        </Text>
        <Heading
          as="h5"
          mt="0 !important"
          fontSize="20px"
          fontWeight="bold"
          lineHeight="28px"
        >
          {blogEntry?.author?.name}
        </Heading>
        <ReactMarkdown>{blogEntry?.author?.blurb}</ReactMarkdown>
        <Text mt="0 !important" fontSize="md">
          Connect with {blogEntry?.author?.name} on{" "}
          <Link
            color="teal"
            href={blogEntry?.author?.linkedin_profile_url}
            fontWeight="bold"
            target="_blank"
          >
            LinkedIn
          </Link>
          .
        </Text>
      </VStack>
    </HStack>
  );
};
