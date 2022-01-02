import { Box, Spinner, Heading, Divider } from "@chakra-ui/react";
import { request } from "graphql-request";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { HomePageQuery } from "@goldn/data-blog";
import {
  BlogHeader,
  CategoryList,
  PostList,
  CategoryBar,
  BlogSearch,
  Paginator,
  PostCardRecommended,
} from "@goldn/ui";

const endpoint = process.env.STRAPI_API_URL;
const itemsPerPage = 9;

const Index = ({ initialData }) => {
  const router = useRouter();

  const pageNumber = router.asPath.split("/?page=")[1] as string;

  const ReloadPageNumber = parseInt(pageNumber, 10);
  const [page, setPage] = useState(ReloadPageNumber ? ReloadPageNumber : 0);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.push(`/?page=${page}`, undefined, { shallow: true });
    setLoading(true);
    getPostsPage(page).then(post => {
      setData({ ...post });
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    setLoading(true);
    const pageNumber = router.query.page as string;
    const ReloadPageNumber = parseInt(pageNumber, 10);

    getPostsPage(ReloadPageNumber ? ReloadPageNumber : 0).then(post => {
      setData({ ...post });
      setLoading(false);
    });
  }, [router.query.page]);

  const recommend = [];

  for (let i = 1; i < data?.recommended.length; i++) {
    recommend.push(data.recommended[i]);
  }
  return (
    <>
      <Head>
        <title>Beauty Brands, Cosmetic Creators & Suppliers Blog – Goldn</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A blog for Beauty Brands, Cosmetic Creators & Suppliers to find ideas, information and advice on how to develop new cosmetic products simply and get to market fast."
        />
        <link rel="canonical" href={`${process.env.BASE_URL}blog/`} />
      </Head>
      <BlogHeader />
      {data && (
        <>
          <a id="categoryAnchor"></a>
          <Box
            display={{ base: "none", md: "block" }}
            position="relative"
            className="catList"
            mb={["44px", "64px"]}
          >
            <CategoryList categories={data.categories}>
              <BlogSearch />
            </CategoryList>
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            position="relative"
            className="catBar"
            mb="40px"
          >
            <CategoryBar categories={data.categories}>
              <BlogSearch />
            </CategoryBar>
          </Box>
          {page === 0 || router.asPath === "/?page=0"
            ? data.recommended && (
                <React.Fragment>
                  <Box px="15px">
                    <PostCardRecommended post={data.recommended[0]} />
                  </Box>
                  <PostList posts={recommend} type="homepage" />

                  <Heading as="h4" size="md">
                    Latest Posts
                  </Heading>
                  <Divider
                    orientation="horizontal"
                    colorScheme="gray"
                    variant="solid"
                  />
                  <Divider
                    orientation="horizontal"
                    colorScheme="gray"
                    variant="solid"
                  />
                  <br />
                </React.Fragment>
              )
            : null}

          {loading ? (
            <Spinner
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              margin="auto"
            />
          ) : (
            <PostList posts={data.articles} type="homepage" />
          )}
          <Paginator
            total={data.allarticles.length}
            page={ReloadPageNumber}
            size={itemsPerPage}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

const getPostsPage = async (page: number) => {
  return request(endpoint, HomePageQuery.getCategoriesAndPosts, {
    articlesLimit: itemsPerPage,
    articlesStart: page * itemsPerPage,
  });
};

export const getStaticProps = async () => {
  const post = await getPostsPage(0);

  return {
    props: {
      initialData: {
        ...post,
      },
    },
  };
};

export default Index;
