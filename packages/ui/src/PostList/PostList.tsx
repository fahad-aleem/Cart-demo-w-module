import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

import { PostCard } from "@goldn/ui";

interface PostListProps {
  posts: any[];
  type: string;
}
export const PostList = ({ posts, type }: PostListProps) => {
  return (
    <>
      <Box mx="-15px">
        <Flex flexWrap="wrap">
          {posts &&
            posts.map(p => <PostCard key={p.id} post={p} type={type} />)}
          {posts.length === 0 ? (
            <Box
              py="75px"
              textAlign="center"
              justifyContent="center"
              width="100%"
            >
              <Text fontFamily="SofiaPro-SemiBold" fontSize="26" lineHeight={8}>
                No blog posts found
              </Text>
              <br />
              <Link href={"/"} passHref>
                <Text
                  as="a"
                  fontSize="16px"
                  whiteSpace="nowrap"
                  color="brightGreen"
                  fontWeight="700"
                  cursor="pointer"
                  pr="20px"
                  py="0"
                  my="10px"
                >
                  <ArrowBackIcon mr="5px" top="-2px" pos="relative" /> Back to
                  all blog posts
                </Text>
              </Link>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </>
  );
};
