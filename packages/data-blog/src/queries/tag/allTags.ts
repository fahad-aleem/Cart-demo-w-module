import { gql } from "graphql-request";

import { TagsQuery } from "./_generated/TagsQuery";

export type getAllTagsType = TagsQuery;
const getAllTags = gql`
  query TagsQuery {
    tags {
      name
      slug
    }
  }
`;

export const AllTagsQuery = {
  getAllTags,
};
