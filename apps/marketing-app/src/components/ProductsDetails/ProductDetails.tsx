import {
  Heading,
  Text,
  Box,
  Button,
  HStack,
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";
import useStore from "store/store";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    thumbnail: {
      url: string;
    };
    description: string;
    variants: Array<{
      name: string;
      id: string;
      sku: string;
      pricing: {
        price: {
          gross: {
            amount: number;
          };
        };
      };
    }>;
    defaultVariant: {
      id: string;
      sku: string;
    };
    pricing: {
      priceRange: {
        start: {
          gross: {
            amount: number;
          };
        };
      };
    };
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [productData, setProductData] = useState({
    quantity: 1,
    variant: "",
  });

  const {
    name,
    description,
    thumbnail: { url: thumbnail },
    pricing: {
      priceRange: {
        start: {
          gross: { amount: price },
        },
      },
    },
    defaultVariant: { sku, id },
    variants,
  } = product;

  const handleAddToCart = useStore(state => state.addToCart);

  const [productForCart, setProductForCart] = useState({
    name,
    price: price,
    quantity: 1,
    variant: "",
    sku,
    thumbnail,
    id,
  });

  return (
    <Box>
      <Heading as="h2" size="xl" p={0}>
        {name}
      </Heading>
      <Heading as="h6" size="lg" p={0} color="goldn">
        ${productForCart.price}
      </Heading>
      <Text my={4} as="p">
        {description}
      </Text>
      <FormControl>
        <Text fontWeight="bold" my={1}>
          Variant
        </Text>
        <HStack mt="1" spacing={4}>
          {variants &&
            variants.map(item => {
              return (
                <Button
                  onClick={() => {
                    setProductData({
                      ...productData,
                      variant: item.name,
                    });

                    // set sku, price and name from variant selected
                    setProductForCart({
                      ...productForCart,
                      id: item.id,
                      variant: item.name,
                      sku: item.sku,
                      price: item.pricing.price.gross.amount,
                    });
                  }}
                  borderColor={
                    item.id === productForCart.id ? "green.500" : "gray.50"
                  }
                  key={item.id}
                  variantColor="goldn"
                  variant="outline"
                >
                  {item.name}
                </Button>
              );
            })}
        </HStack>
      </FormControl>
      <FormControl mt={4}>
        <Text fontWeight="bold" my={1}>
          Quantity
        </Text>
        <NumberInput
          defaultValue={1}
          min={1}
          value={productForCart.quantity}
          onChange={value => {
            setProductForCart({
              ...productForCart,
              quantity: parseInt(value),
            });
          }}
          borderColor="gray"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <Button
          variant="goldn"
          mt={4}
          w="100%"
          _hover={{ bg: "green.600" }}
          disabled={productData.variant === "" || productData.quantity === 0}
          _disabled={{ opacity: 1, backgroundColor: "gray.400" }}
          onClick={() => {
            handleAddToCart(productForCart);
          }}
        >
          Add to Cart
        </Button>
      </FormControl>
    </Box>
  );
};

export default ProductDetails;
