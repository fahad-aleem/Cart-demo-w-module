import { gql } from "graphql-request";

import { GetArticles, GetArticles_articles } from "./_generated/GetArticles";

export type GetArticlesType = GetArticles;
export type Article = GetArticles_articles;

const getArticlesByTags = gql`
  query GetArticles(
    $articlesLimit: Int
    $articlesStart: Int
    $tagsArray: [String!]!
  ) {
    categories {
      id
      name
      slug
    }
    articles(
      limit: $articlesLimit
      start: $articlesStart
      sort: "publishedAt:desc"
      where: { tags: { slug: $tagsArray }, status: "published" }
    ) {
      id
      title
      description
      publishedAt
      readTimeMinutes
      slug
      image {
        url
        formats
      }
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
    }
  }
`;

export const TagArticleQuery = {
  getArticlesByTags,
};
