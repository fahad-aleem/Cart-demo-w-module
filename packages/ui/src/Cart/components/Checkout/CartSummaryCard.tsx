import { Heading, Box, HStack, VStack, Text, Divider } from "@chakra-ui/react";

import useStore from "../../store/store";

interface ItemCardProps {
  item: {
    name: string;
    price: number;
    thumbnail: string;
    quantity: number;
  };
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Box>
      <Box mb="2">
        <HStack
          paddingInlineStart="0"
          justifyContent="space-between"
          paddingInlineEnd="0"
          width="100%"
        >
          <img src={item.thumbnail} width="80px" alt="product" />
          <Box width="130px">
            <Text fontWeight="bold" fontSize="md">
              {item.name}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              ${item.price}
            </Text>
          </Box>
          <VStack alignItems="flex-end">
            <Text fontWeight="bold" fontSize="md">
              Qty
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {item.quantity}
            </Text>
          </VStack>
          <VStack alignItems="flex-end">
            <Text fontWeight="bold" fontSize="md">
              Total
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export const CartSummaryCard = () => {
  const cartItems = useStore(state => state["cart"]["items"]);
  const totalAmount = useStore(state => state["cart"]["total"]);

  return (
    <Box my={2}>
      <Heading as="h4" fontSize="lg">
        Cart Summary
      </Heading>
      <Box border="1px solid #d5d5d5" borderRadius="5px" p={4} my={2}>
        {cartItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
        <Divider mt="2" />
        <Box maxHeight="120px" py="2">
          <HStack justifyContent="space-between">
            <Text fontWeight="bold" fontSize="md">
              Subtotal
            </Text>
            <Text fontWeight="bold" fontSize="md">
              ${totalAmount}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
