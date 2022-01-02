import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LazyLoad from "react-lazyload";

interface Products {
  product: {
    id: string;
    name: string;
    thumbnail: {
      url: string;
    };
    category: {
      name: string;
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

const ProductCard = ({ product }: Products) => {
  const {
    id,
    name,
    thumbnail: { url: image },
    category: { name: category },
    pricing: {
      priceRange: {
        start: {
          gross: { amount: price },
        },
      },
    },
  } = product;
  const link = `/products/${id}`;

  return (
    <Box
      width={["100%", "100%", "20%"]}
      px="15px"
      mx="0"
      borderWidth="0"
      borderRadius="4px"
      overflow="hidden"
    >
      <LazyLoad offset={100} once>
        <Link href={link} passHref>
          <Box
            as="a"
            style={{
              backgroundImage: `url('${image}')`,
            }}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            height={60}
            width="100%"
            borderRadius="4px"
            position="relative"
            cursor="pointer"
            _hover={{ boxShadow: "md" }}
          ></Box>
        </Link>
      </LazyLoad>
      <Box pt="2" mb="24px">
        <Flex>
          <Box>
            <Link href={"/categories/" + ""} passHref>
              <Text
                as="a"
                fontWeight="bold"
                color="goldn"
                cursor="pointer"
                d="inline-block"
              >
                {category}
              </Text>
            </Link>
            <Link href={link} passHref>
              <Text
                as="a"
                fontFamily="SofiaPro-SemiBold"
                fontSize="xl"
                color="black"
                mb={3}
                fontWeight="bold"
                noOfLines={1}
                lineHeight="28px"
                cursor="pointer"
              >
                {name}
              </Text>
            </Link>
          </Box>
          <Text fontSize="lg" color="gray.500" fontWeight="bold" ml="auto">
            ${price}
          </Text>
        </Flex>
        <Button
          variant="goldn"
          bg="brightGreen"
          width="100%"
          _hover={{ bg: "green.600" }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
