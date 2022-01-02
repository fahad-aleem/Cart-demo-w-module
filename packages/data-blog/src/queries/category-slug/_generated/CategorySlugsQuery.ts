/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategorySlugsQuery
// ====================================================

export interface CategorySlugsQuery_categories {
  __typename: "Category";
  slug: string;
}

export interface CategorySlugsQuery {
  categories: (CategorySlugsQuery_categories | null)[] | null;
}
