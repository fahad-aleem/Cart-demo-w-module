/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Post
// ====================================================

export interface Post_articles_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface Post_articles_tags {
  __typename: "Tag";
  name: string | null;
  slug: string | null;
}

export interface Post_articles_author_picture {
  __typename: "UploadFile";
  url: string;
}

export interface Post_articles_author {
  __typename: "Writer";
  name: string | null;
  blurb: string | null;
  linkedin_profile_url: string | null;
  picture: Post_articles_author_picture | null;
}

export interface Post_articles_blocks_ComponentBlocksParagraph {
  __typename: "ComponentBlocksParagraph";
  content: string | null;
}

export interface Post_articles_blocks_ComponentBlocksHeading {
  __typename: "ComponentBlocksHeading";
  value: string | null;
}

export interface Post_articles_blocks_ComponentBlocksQuote {
  __typename: "ComponentBlocksQuote";
  value: string | null;
}

export interface Post_articles_blocks_ComponentBlocksUnorderedList_Item {
  __typename: "ComponentSharedListItem";
  value: string | null;
}

export interface Post_articles_blocks_ComponentBlocksUnorderedList {
  __typename: "ComponentBlocksUnorderedList";
  Item: (Post_articles_blocks_ComponentBlocksUnorderedList_Item | null)[] | null;
}

export interface Post_articles_blocks_ComponentBlocksImage_media {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface Post_articles_blocks_ComponentBlocksImage {
  __typename: "ComponentBlocksImage";
  media: Post_articles_blocks_ComponentBlocksImage_media | null;
}

export interface Post_articles_blocks_ComponentBlocksCoverImage_image {
  __typename: "UploadFile";
  url: string;
  formats: any | null;
}

export interface Post_articles_blocks_ComponentBlocksCoverImage {
  __typename: "ComponentBlocksCoverImage";
  image: Post_articles_blocks_ComponentBlocksCoverImage_image | null;
}

export type Post_articles_blocks = Post_articles_blocks_ComponentBlocksParagraph | Post_articles_blocks_ComponentBlocksHeading | Post_articles_blocks_ComponentBlocksQuote | Post_articles_blocks_ComponentBlocksUnorderedList | Post_articles_blocks_ComponentBlocksImage | Post_articles_blocks_ComponentBlocksCoverImage;

export interface Post_articles {
  __typename: "Article";
  title: string;
  description: string;
  publishedAt: any;
  readTimeMinutes: number | null;
  slug: string;
  category: Post_articles_category | null;
  tags: (Post_articles_tags | null)[] | null;
  author: Post_articles_author | null;
  blocks: (Post_articles_blocks | null)[] | null;
}

export interface Post {
  articles: (Post_articles | null)[] | null;
}

export interface PostVariables {
  slug: string;
}
