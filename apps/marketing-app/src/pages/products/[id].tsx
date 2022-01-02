import {
    SimpleGrid,
    GridItem,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    Container,
    Spinner,
    Box,
  } from "@chakra-ui/react";
  import request from "graphql-request";
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  
  import {ProductGallery, ProductDetails} from "@goldn/ui";
  import { ProductsQuery } from "../../queries/products/products";
  
  const ProductInformation = () => {
    const [product, setProduct]: any = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { id } = router.query;
  
    const getProductDetails = async () => {
      const endPoint = process.env.SALEOR_API;
  
      setLoading(true);
      const data = await request("https://demo.saleor.io/graphql/", ProductsQuery.getProductDetails, {
        productID: id,
      });
  
      setProduct(data.product);
      setLoading(false);
    };
  
    useEffect(() => {
      if (id) {
        getProductDetails();
      }
    }, [id]);
  
    if (loading)
      return (
        <Box textAlign="center">
          <Spinner size="lg" />
        </Box>
      );
  
    return (
      <Container maxW="container.lg">
        {product.id && (
          <>
            <SimpleGrid columns={12} spacing={3}>
              <GridItem colSpan={6}>
                <ProductGallery images={product.images} />
              </GridItem>
              <GridItem colSpan={6}>
                <ProductDetails product={product} />
              </GridItem>
            </SimpleGrid>
            <Tabs>
              <TabList>
                <Tab fontWeight="bold">Description</Tab>
                <Tab fontWeight="bold">Attribute</Tab>
              </TabList>
  
              <TabPanels>
                <TabPanel>{product.description}</TabPanel>
                <TabPanel>
                  {product.attributes.map((item, index) => {
                    return (
                      <div key={index}>
                        <span>{item.attribute.name}:</span>
                        <span>{item.values.map(attrVal => attrVal.name)}</span>
                      </div>
                    );
                  })}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </Container>
    );
  };
  
  export default ProductInformation;