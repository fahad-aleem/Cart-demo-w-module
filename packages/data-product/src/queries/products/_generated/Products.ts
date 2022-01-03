/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Products
// ====================================================

export interface Products_product_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
}

export interface Products_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Products_product_pricing_priceRange_start_gross;
}

export interface Products_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: Products_product_pricing_priceRange_start | null;
}

export interface Products_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The discounted price range of the product variants.
   */
  priceRange: Products_product_pricing_priceRange | null;
}

export interface Products_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface Products_product_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
  alt: string;
}

export interface Products_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Products_product_attributes_attribute {
  __typename: "Attribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
}

export interface Products_product_attributes_values {
  __typename: "AttributeValue";
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface Products_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: Products_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (Products_product_attributes_values | null)[];
}

export interface Products_product_defaultVariant {
  __typename: "ProductVariant";
  name: string;
  sku: string;
  /**
   * The ID of the object.
   */
  id: string;
}

export interface Products_product_variants_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
}

export interface Products_product_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Products_product_variants_pricing_price_gross;
}

export interface Products_product_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: Products_product_variants_pricing_price | null;
}

export interface Products_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: Products_product_variants_pricing | null;
}

export interface Products_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  description: string;
  slug: string;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: Products_product_pricing | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: Products_product_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (Products_product_images | null)[] | null;
  category: Products_product_category | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: Products_product_attributes[];
  defaultVariant: Products_product_defaultVariant | null;
  /**
   * List of variants for the product.
   */
  variants: (Products_product_variants | null)[] | null;
}

export interface Products {
  /**
   * Look up a product by ID.
   */
  product: Products_product | null;
}

export interface ProductsVariables {
  productID?: string | null;
}
