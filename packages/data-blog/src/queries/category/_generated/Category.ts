/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Category
// ====================================================

export interface Category_thisCategory {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface Category_categories {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface Category_articles_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface Category_articles_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface Category_articles {
  __typename: "Article";
  id: string;
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  recommended: boolean | null;
  slug: string;
  image: Category_articles_image | null;
  category: Category_articles_category | null;
}

export interface Category {
  thisCategory: (Category_thisCategory | null)[] | null;
  categories: (Category_categories | null)[] | null;
  articles: (Category_articles | null)[] | null;
}

export interface CategoryVariables {
  category?: string | null;
  articlesLimit?: number | null;
  articlesStart?: number | null;
}
