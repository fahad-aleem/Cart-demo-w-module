import { gql } from "graphql-request";

const getProducts = gql`
  query Products($noOfProducts: Int) {
    products(first: $noOfProducts, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
          thumbnail {
            url
          }
          slug
          category {
            id
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getProductDetails = gql`
  query Products($productID: ID) {
    product(id: $productID, channel: "default-channel") {
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
  getProducts,
  getProductDetails,
};