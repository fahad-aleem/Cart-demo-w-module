/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagsQuery
// ====================================================

export interface TagsQuery_tags {
  __typename: "Tag";
  name: string | null;
  slug: string | null;
}

export interface TagsQuery {
  tags: (TagsQuery_tags | null)[] | null;
}
