import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import useStore from "../../store/store";

function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cartItems = useStore(state => state.cart.items);
  const total = useStore(state => state.cart.total);
  const handleDecrementQty = useStore(state => state.handleDecrementQty);
  const handleIncrementQty = useStore(state => state.handleIncrementQty);
  const handleDeleteItem = useStore(state => state.handleDeleteItem);
  const router = useRouter();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <i className="fa fa-shopping-bag"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            {cartItems.map(item => {
              return (
                <Box
                  position="relative"
                  key={item.id}
                  borderBottom="1px solid #efefef"
                  mb="2"
                >
                  <HStack px="2" paddingInlineStart="0" paddingInlineEnd="0">
                    <img src={item.thumbnail} width="80px" alt="product" />
                    <Box>
                      <Text fontWeight="bold" maxWidth="150px" fontSize="lg">
                        {item.name}
                      </Text>
                      <Text fontSize="sm">${item.price}</Text>
                      <Text fontSize="sm">Variant: {item.variant}</Text>
                    </Box>
                    <Text
                      position="absolute"
                      right="15px"
                      cursor="pointer"
                      borderRadius="50%"
                      height="32px"
                      width="32px"
                      boxShadow="0"
                      textAlign="center"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        style={{ fontSize: "24px", color: "#EFEFD0" }}
                      ></i>
                    </Text>
                  </HStack>
                  <HStack
                    borderRadius="10px"
                    overflow="hidden"
                    p="1"
                    my="2"
                    justifyContent="space-between"
                  >
                    <HStack
                      width="100px"
                      border="1px solid #efefef"
                      justifyContent="space-between"
                      borderRadius="10px"
                      overflow="hidden"
                    >
                      <Button
                        variantColor="teal"
                        variant="outline"
                        size="sm"
                        height="32px"
                        width="32px"
                        boxShadow="0"
                        onClick={() => handleIncrementQty(item.id)}
                        border="0"
                        outline="none"
                        _hover={{
                          borderColor: "#fff",
                        }}
                      >
                        <i className="fa fa-plus"></i>
                      </Button>
                      <Text fontSize="sm">{item.quantity}</Text>
                      <Button
                        variantColor="teal"
                        variant="outline"
                        size="sm"
                        outline="none"
                        height="32px"
                        width="32px"
                        border="0"
                        onClick={() => handleDecrementQty(item.id)}
                        _hover={{
                          borderColor: "#fff",
                        }}
                      >
                        <i className="fa fa-minus"></i>
                      </Button>
                    </HStack>
                    <VStack alignItems="flex-end">
                      <Text fontWeight="bold" fontSize="lg">
                        Total Price
                      </Text>
                      <Text fontSize="sm" fontWeight="bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </DrawerBody>

          <DrawerFooter flexDirection="column">
            <HStack justifyContent="space-between" width="100%">
              <Text fontWeight="bold" fontSize="lg">
                Total Price
              </Text>
              <Text fontWeight="bold" fontSize="lg">
                ${total.toFixed(2)}
              </Text>
            </HStack>
            <Button
              variant="outline"
              w="100%"
              bg="goldn"
              color="#fff"
              onClick={onClose}
              _hover={{ bg: "green.600" }}
              onClickCapture={() => router.push("/checkout")}
              disabled={cartItems.length === 0}
              _disabled={{ opacity: 0.5 }}
            >
              Process to Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartDrawer;
