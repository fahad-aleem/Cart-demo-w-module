import { gql } from "graphql-request";

import { SlugsQuery } from "./_generated/SlugsQuery";

export type getAllSlugsType = SlugsQuery;
const getAllSlugs = gql`
  query SlugsQuery {
    articles {
      slug
    }
  }
`;

export const PostSlugsQuery = {
  getAllSlugs,
};
