import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useQuery } from "@goldn/data";
import {
  Article,
  GetArticles,
  GetArticlesVariables,
  TagArticleQuery,
} from "@goldn/data-blog";
import { PostCard } from "@goldn/ui";

export const RelatedArticle = ({ tags }: { tags: string[] }) => {
  const { query } = useRouter();
  const [articles, setArticles] = useState<Article[]>();

  const { data } = useQuery<GetArticles, GetArticlesVariables>(
    TagArticleQuery.getArticlesByTags,
    {
      articlesLimit: 3,
      articlesStart: 0,
      tagsArray: tags,
    }
  );

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
    }
  }, [data]);
  return articles ? (
    <>
      <Box mt={20}>
        <Text fontFamily="SofiaPro-SemiBold" fontSize="24px" mb="30px" mx={2}>
          More from Goldn Blog
        </Text>
        <Box mx="-15px">
          <Flex flexWrap="wrap">
            {articles
              .filter(item => item.slug !== query.slug)
              .map((item, index) => (
                <PostCard post={item} key={index} type="relatedarticles" />
              ))}
          </Flex>
        </Box>
      </Box>
    </>
  ) : null;
};
