import { gql } from "graphql-request";

import { SearchQuery } from "./_generated/SearchQuery";

export type getPostsType = SearchQuery;
const getPosts = gql`
  query SearchQuery($articlesLimit: Int, $articlesStart: Int, $search: String) {
    categories {
      id
      name
      slug
    }
    articles(
      limit: $articlesLimit
      start: $articlesStart
      sort: "publishedAt:desc"
      where: {
        status: "published"
        _or: [{ title_contains: $search }, { description_contains: $search }]
      }
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
    }
    articlesConnection(
      limit: $articlesLimit
      start: $articlesStart
      sort: "publishedAt:asc"
      where: {
        status: "published"
        _or: [{ title_contains: $search }, { description_contains: $search }]
      }
    ) {
      aggregate {
        count
        totalCount
      }
    }
  }
`;

export const SearchQueryPosts = {
  getPosts,
};
