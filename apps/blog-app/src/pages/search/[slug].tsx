import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useLazyQuery } from "@goldn/data";
import {
  SearchQuery,
  SearchQueryPosts,
  SearchQueryVariables,
} from "@goldn/data-blog";
import { PostList, BlogSearch } from "@goldn/ui";

const SearchPage = () => {
  const { query } = useRouter();
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const { data: searchData, trigger: triggerSearch } = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(SearchQueryPosts.getPosts);

  useEffect(() => {
    if (slug) {
      triggerSearch({
        articlesLimit: 10,
        articlesStart: 0,
        search: slug,
      });
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>Blog Search - Goldn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={"Search results for " + query.slug + " on Goldn"} />
      </Head>
      <Text
        fontFamily="SofiaPro-SemiBold"
        mb={4}
        fontSize="20px"
        fontWeight="bold"
        color="textGray"
      >
        Search results for
      </Text>

      <Text
        fontFamily="SofiaPro-SemiBold"
        fontSize={[40, 48]}
        fontWeight="bold"
        lineHeight={["48px", "56px"]}
        mb={["32px", "72px"]}
      >
        {query.slug}
      </Text>
      <HStack
        spacing={2}
        borderBottom="1px"
        borderColor="gray.300"
        overflowX="auto"
        mb={["44px", "64px"]}
        justifyContent="space-between"
        className="searchResult"
      >
        <Flex
          overflowX="hidden"
          flexGrow={1}
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Link href={"/"} passHref>
            <Text
              as="a"
              whiteSpace="nowrap"
              color="brightGreen"
              fontWeight="700"
              cursor="pointer"
              mb="40px"
              className="btnAll"
            >
              <ArrowBackIcon mr="5px" top="-2px" pos="relative" /> All Blog
              Posts
            </Text>
          </Link>
          <BlogSearch />
        </Flex>
      </HStack>
      <Box>
        {searchData && searchData.articles && (
          <PostList posts={searchData.articles} type="search" />
        )}
      </Box>
    </>
  );
};

export default SearchPage;
