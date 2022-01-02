/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchQuery
// ====================================================

export interface SearchQuery_categories {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface SearchQuery_articles_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface SearchQuery_articles_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface SearchQuery_articles {
  __typename: "Article";
  id: string;
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  slug: string;
  image: SearchQuery_articles_image | null;
  category: SearchQuery_articles_category | null;
}

export interface SearchQuery_articlesConnection_aggregate {
  __typename: "ArticleAggregator";
  count: number | null;
  totalCount: number | null;
}

export interface SearchQuery_articlesConnection {
  __typename: "ArticleConnection";
  aggregate: SearchQuery_articlesConnection_aggregate | null;
}

export interface SearchQuery {
  categories: (SearchQuery_categories | null)[] | null;
  articles: (SearchQuery_articles | null)[] | null;
  articlesConnection: SearchQuery_articlesConnection | null;
}

export interface SearchQueryVariables {
  articlesLimit?: number | null;
  articlesStart?: number | null;
  search?: string | null;
}
