import { gql } from "graphql-request";

import { Post, Post_articles_tags } from "./_generated/Post";

export type BlogPost = Post;
export type PostTag = Post_articles_tags;

const getPostsBySlug = gql`
  query Post($slug: String!) {
    articles(
      sort: "publishedAt:desc"
      where: { slug: $slug, status: "published" }
    ) {
      title
      description
      publishedAt
      readTimeMinutes
      slug
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        blurb
        linkedin_profile_url
        picture {
          url
        }
      }
      blocks {
        __typename
        ... on ComponentBlocksParagraph {
          content
        }
        ... on ComponentBlocksHeading {
          value
        }
        ... on ComponentBlocksQuote {
          value
        }
        ... on ComponentBlocksUnorderedList {
          Item {
            value
          }
        }
        ... on ComponentBlocksImage {
          media {
            url
            formats
          }
        }
        ... on ComponentBlocksCoverImage {
          image {
            url
            formats
          }
        }
      }
    }
  }
`;

export const PostQuery = {
  getPostsBySlug,
};
