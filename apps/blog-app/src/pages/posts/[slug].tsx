import { Box } from "@chakra-ui/react";
import { request } from "graphql-request";
import Head from "next/head";

import { PostQuery, PostSlugsQuery } from "@goldn/data-blog";
import { BlogDetail, RelatedArticle } from "@goldn/ui";

const Index = ({ data }) => {
  const tags = data?.articles?.[0]?.tags;

  return (
    <>
      <Head>
        <title>{data?.articles?.[0]?.title + " — Goldn"}</title>
        <meta name="description" content={data?.articles?.[0]?.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="canonical"
          href={`${process.env.BASE_URL}blog/posts/${data?.articles?.[0]?.slug}/`}
        />
      </Head>
      <BlogDetail blogEntry={data?.articles[0]} />
      <Box>
        {tags && tags.length !== 0 && (
          <RelatedArticle tags={tags.map(({ slug }) => slug)} />
        )}
      </Box>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const endpoint = process.env.STRAPI_API_URL;

  const post = await request(endpoint, PostQuery.getPostsBySlug, params);

  return {
    props: {
      data: {
        ...post,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const endpoint = process.env.STRAPI_API_URL;
  const postSlugs = await request(endpoint, PostSlugsQuery.getAllSlugs);

  return {
    paths: postSlugs.articles.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Index;
