import { gql } from "graphql-request";

import { Category } from "./_generated/Category";

export type CategoryType = Category;

const getCategoryPosts = gql`
  query Category($category: String, $articlesLimit: Int, $articlesStart: Int) {
    thisCategory: categories(where: { slug: $category }) {
      id
      name
      slug
      description
    }
    categories {
      id
      name
      slug
    }
    articles(
      limit: $articlesLimit
      start: $articlesStart
      sort: "recommended:desc,publishedAt:desc"
      where: { category: { slug: $category }, status: "published" }
    ) {
      id
      title
      description
      publishedAt
      readTimeMinutes
      recommended
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
  }
`;

export const CategoryQuery = {
  getCategoryPosts,
};
