/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_categories {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface GetArticles_articles_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface GetArticles_articles_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface GetArticles_articles_tags {
  __typename: "Tag";
  name: string | null;
  slug: string | null;
}

export interface GetArticles_articles {
  __typename: "Article";
  id: string;
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  slug: string;
  image: GetArticles_articles_image | null;
  category: GetArticles_articles_category | null;
  tags: (GetArticles_articles_tags | null)[] | null;
}

export interface GetArticles {
  categories: (GetArticles_categories | null)[] | null;
  articles: (GetArticles_articles | null)[] | null;
}

export interface GetArticlesVariables {
  articlesLimit?: number | null;
  articlesStart?: number | null;
  tagsArray: string[];
}
