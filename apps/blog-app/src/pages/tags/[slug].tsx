import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import { request } from "graphql-request";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useQuery } from "@goldn/data";
import { AllTagsQuery, TagArticleQuery, TagsQuery } from "@goldn/data-blog";
import { PostCard, BlogHeader } from "@goldn/ui";

const Index = ({ data }) => {
  const { query } = useRouter();
  const response = useQuery<TagsQuery>(AllTagsQuery.getAllTags);
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;

  let name;

  {
    response.data?.tags?.map(tag => {
      tag.slug === slug ? (name = tag.name) : <></>;
    });
  }

  return (
    <>
      <Head>
        <title>{slug + " — Goldn"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}blog/tags/${slug}/`}
        />
        <meta name="description" content={"All blog articles relating to " + slug + " on Goldn"} />
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
      <BlogHeader
       name={name}
       description=""
      />
      <HStack
        spacing={2}
        borderBottom="1px"
        borderColor="gray.300"
        overflowX="auto"
        mb={["44px", "64px"]}
        justifyContent="space-between"
      >
        <Flex overflowX="hidden" flexGrow={1}>
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
              <ArrowBackIcon mr="5px" top="-2px" pos="relative" /> All Blog
              Posts
            </Text>
          </Link>
        </Flex>
      </HStack>
      <Box>
        <Box mt={20}>
          <Box mx="-15px">
            <Flex flexWrap="wrap">
              {data.articles.map((item, index) => (
                <PostCard post={item} key={index} type="tags" />
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const endpoint = process.env.STRAPI_API_URL;

  const qparams = {
    tagsArray: [params.slug],
    articlesLimit: 12,
    articlesStart: 0,
  };

  const posts = await request(
    endpoint,
    TagArticleQuery.getArticlesByTags,
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
  const allTags = await request(endpoint, AllTagsQuery.getAllTags);

  return {
    paths: allTags.tags.map(tag => {
      return {
        params: {
          slug: tag.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Index;
