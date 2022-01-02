/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePage
// ====================================================

export interface HomePage_categories {
  __typename: "Category";
  id: string;
  name: string;
  slug: string;
}

export interface HomePage_articles_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface HomePage_articles_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface HomePage_articles_tags {
  __typename: "Tag";
  name: string | null;
  slug: string | null;
}

export interface HomePage_articles {
  __typename: "Article";
  id: string;
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  slug: string;
  recommended: boolean | null;
  image: HomePage_articles_image | null;
  category: HomePage_articles_category | null;
  tags: (HomePage_articles_tags | null)[] | null;
}

export interface HomePage_recommended_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface HomePage_recommended_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface HomePage_recommended_tags {
  __typename: "Tag";
  name: string | null;
  slug: string | null;
}

export interface HomePage_recommended {
  __typename: "Article";
  id: string;
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  slug: string;
  recommended: boolean | null;
  image: HomePage_recommended_image | null;
  category: HomePage_recommended_category | null;
  tags: (HomePage_recommended_tags | null)[] | null;
}

export interface HomePage_allarticles {
  __typename: "Article";
  id: string;
}

export interface HomePage {
  categories: (HomePage_categories | null)[] | null;
  articles: (HomePage_articles | null)[] | null;
  recommended: (HomePage_recommended | null)[] | null;
  allarticles: (HomePage_allarticles | null)[] | null;
}

export interface HomePageVariables {
  articlesLimit?: number | null;
  articlesStart?: number | null;
}
