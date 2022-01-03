import { gql } from "graphql-request";

import {
  Products_product,
  Products_product_images,
} from "./_generated/Products";

export type ProductTypes = Products_product;
export type ProductImagesTypes = Products_product_images;

const getProductDetails = gql`
  query Products($productID: ID) {
    product(id: $productID) {
      id
      name
      description
      slug
      pricing {
        priceRange {
          start {
            gross {
              amount
            }
          }
        }
      }
      thumbnail {
        url
      }
      images {
        id
        url
        alt
      }
      category {
        id
        name
      }
      attributes {
        attribute {
          name
        }
        values {
          name
        }
      }
      defaultVariant {
        name
        sku
        id
      }
      variants {
        id
        name
        sku
        pricing {
          price {
            gross {
              amount
            }
          }
        }
      }
    }
  }
`;

export const ProductsQuery = {
  getProductDetails,
};
