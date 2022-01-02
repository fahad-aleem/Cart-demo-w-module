import { gql } from "graphql-request";

import { HomePage } from "./_generated/HomePage";

export type HomePageType = HomePage;

const getCategoriesAndPosts = gql`
  query HomePage($articlesLimit: Int, $articlesStart: Int) {
    categories {
      id
      name
      slug
    }
    articles(
      limit: $articlesLimit
      start: $articlesStart
      where: { status: "published" }
      sort: "publishedAt:desc"
    ) {
      id
      title
      description
      publishedAt
      readTimeMinutes
      slug
      recommended
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
    recommended: articles(
      limit: 4
      start: 0
      where: { status: "published", recommended: true }
      sort: "publishedAt:desc"
    ) {
      id
      title
      description
      publishedAt
      readTimeMinutes
      slug
      recommended
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
    allarticles: articles(
      where: { status: "published" }
      sort: "recommended:desc,publishedAt:desc"
    ) {
      id
    }
  }
`;

export const HomePageQuery = {
  getCategoriesAndPosts,
};
