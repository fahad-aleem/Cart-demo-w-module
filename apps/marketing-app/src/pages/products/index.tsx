import { Container, Flex, Text, Spinner, Box, Button } from "@chakra-ui/react";
import request from "graphql-request";
import { useEffect, useState } from "react";

import {ProductHeader, ProductCard} from "@goldn/ui";
import { ProductsQuery } from "../../queries/products/products";

const Product = () => {
  const endPoint = process.env.SALEOR_API;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);
  const getProducts = async () => {
    setLoading(true);
    const data = await request("https://demo.saleor.io/graphql/", ProductsQuery.getProducts, {
      noOfProducts: count,
    });

    console.log(data)
    setProducts(data.products.edges);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [count]);

  if (loading)
    return (
      <Box textAlign="center">
        <Spinner size="lg" />
      </Box>
    );

  return (
    <Container maxW="container.xl" p={0} m={0} paddingInlineEnd={0}>
      <ProductHeader />
      <Flex wrap="wrap" justifyContent="center">
        {products.map(item => (
          <ProductCard key={item.node.id} product={item.node} />
        ))}
      </Flex>
      <Button
        display="block"
        mx="auto"
        variant="goldn"
        size="lg"
        onClick={() => setCount(count + 10)}
      >
        Load More Products
      </Button>
    </Container>
  );
};

export default Product;