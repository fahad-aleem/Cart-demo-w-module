/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SlugsQuery
// ====================================================

export interface SlugsQuery_articles {
  __typename: "Article";
  slug: string;
}

export interface SlugsQuery {
  articles: (SlugsQuery_articles | null)[] | null;
}
