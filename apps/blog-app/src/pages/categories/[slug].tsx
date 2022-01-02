import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Text, Flex } from "@chakra-ui/react";
import { request } from "graphql-request";
import Head from "next/head";
import Link from "next/link";

import { CategoryQuery, AllCategorySlugsQuery } from "@goldn/data-blog";
import {
  BlogHeader,
  CategoryList,
  PostList,
  CategoryBar,
  BlogSearch,
} from "@goldn/ui";

const CategoryPage = ({ data }) => {
  return data ? (
    <>
      <Head>
        <title>{data.thisCategory[0].name + " — Goldn"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={data.thisCategory[0].description} />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}blog/categories/${data.thisCategory[0].slug}/`}
        />
      </Head>
      <BlogHeader
        name={data.thisCategory[0].name}
        description={data.thisCategory[0].description}
      />
      <Box
        display={{ base: "none", md: "flex" }}
        position="relative"
        className="catList catSelect"
        alignItems="center"
        mb={["44px", "64px"]}
      >
        <Link href={"/"} passHref>
          <Text
            as="a"
            whiteSpace="nowrap"
            color="brightGreen"
            fontWeight="700"
            cursor="pointer"
            borderBottomWidth="2px"
            borderBottomColor="transparent"
            pr="20px"
            py="0"
            my="10px"
            borderRightWidth="1px"
            borderRightColor="gray.300"
          >
            <ArrowBackIcon mr="5px" top="-2px" pos="relative" /> All Blog Posts
          </Text>
        </Link>
        <CategoryList categories={data.categories}>
          <> </>
        </CategoryList>
        <BlogSearch />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        position="relative"
        className="catBar"
        flexDirection="column"
        mb="42px"
      >
        <Link href={"/"} passHref>
          <Text
            as="a"
            whiteSpace="nowrap"
            color="brightGreen"
            fontWeight="700"
            cursor="pointer"
          >
            <ArrowBackIcon mr="5px" top="-2px" pos="relative" /> All Blog Posts
          </Text>
        </Link>
        <Flex mt="40px" justifyContent="space-between" alignItems="center">
          <CategoryBar categories={data.categories}>
            <></>
          </CategoryBar>
          <BlogSearch />
        </Flex>
      </Box>
      <PostList posts={data.articles} type="category" />
    </>
  ) : null;
};

export const getStaticProps = async ({ params }) => {
  const endpoint = process.env.STRAPI_API_URL;
  const qparams = {
    category: params.slug,
    articlesLimit: 12,
    articlesStart: 0,
  };

  const posts = await request(
    endpoint,
    CategoryQuery.getCategoryPosts,
    qparams
  );

  return {
    props: {
      data: {
        ...posts,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const endpoint = process.env.STRAPI_API_URL;
  const categorySlugs = await request(
    endpoint,
    AllCategorySlugsQuery.getAllCategorySlugs
  );

  return {
    paths: categorySlugs.categories.map(cat => {
      return {
        params: {
          slug: cat.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default CategoryPage;
