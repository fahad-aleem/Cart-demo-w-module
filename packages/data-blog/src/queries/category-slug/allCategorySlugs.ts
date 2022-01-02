import { gql } from "graphql-request";

import { CategorySlugsQuery } from "./_generated/CategorySlugsQuery";

export type getAllCategorySlugsType = CategorySlugsQuery;
const getAllCategorySlugs = gql`
  query CategorySlugsQuery {
    categories {
      slug
    }
  }
`;

export const AllCategorySlugsQuery = {
  getAllCategorySlugs,
};
