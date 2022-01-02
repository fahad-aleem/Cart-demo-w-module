import {
  Stack,
  HStack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import Link from "next/link";
import CartDrawer from "@goldn/marketing-app/src/components/CartDrawer/Drawer";

export const HeaderMenu = () => {
  return (
    <HStack spacing="4" flexWrap="wrap">
      <a href="/brands.html">
        <Text
          color="black"
          h="40px"
          px={["10px", "15px"]}
          ml="6px"
          lineHeight="36px"
          fontSize="md"
          fontWeight="bold"
          borderRadius="4px"
          cursor="pointer"
          _hover={{ color: "brightGreen" }}
        >
          Solutions
        </Text>
      </a>
      <Popover trigger={"hover"}>
        <PopoverTrigger>
          <Text
            h="40px"
            px={["10px", "15px"]}
            ml="6px"
            lineHeight="36px"
            fontSize="md"
            fontWeight="bold"
            borderRadius="4px"
            color="black"
            _hover={{ color: "brightGreen" }}
          >
            Resources
          </Text>
        </PopoverTrigger>
        <PopoverContent
          border={0}
          boxShadow={"xl"}
          bg="white"
          p={2}
          rounded={"xl"}
          w="170px"
        >
          <Stack>
            <a href="/blog/">
              <Text
                color="black"
                h="40px"
                px={["10px", "15px"]}
                ml="6px"
                lineHeight="36px"
                fontSize="md"
                fontWeight="bold"
                borderRadius="4px"
                cursor="pointer"
                _hover={{ color: "brightGreen" }}
              >
                Blog
              </Text>
            </a>
            <a href="/supplierlist/">
              <Text
                color="black"
                h="40px"
                px={["10px", "15px"]}
                ml="6px"
                lineHeight="36px"
                fontSize="md"
                fontWeight="bold"
                borderRadius="4px"
                cursor="pointer"
                _hover={{ color: "brightGreen" }}
              >
                Find a supplier
              </Text>
            </a>
          </Stack>
        </PopoverContent>
      </Popover>
      <a href="/pricing.html">
        <Text
          color="black"
          h="40px"
          px={["10px", "15px"]}
          ml="6px"
          lineHeight="36px"
          fontSize="md"
          fontWeight="bold"
          borderRadius="4px"
          cursor="pointer"
          _hover={{ color: "brightGreen" }}
        >
          Pricing
        </Text>
      </a>
      <a href="https://cos.goldn.com/user/login">
        <Text
          color="black"
          h="40px"
          px={["10px", "15px"]}
          ml="6px"
          lineHeight="36px"
          fontSize="md"
          fontWeight="bold"
          borderRadius="4px"
          cursor="pointer"
          _hover={{ color: "brightGreen" }}
        >
          Sign in
        </Text>
      </a>
      <a href="https://cos.goldn.com/user/signup">
        <Text
          bg="brightGreen"
          color="white"
          h="40px"
          w="160px"
          px={["10px", "15px"]}
          lineHeight="36px"
          fontSize="md"
          fontWeight="normal"
          borderRadius="4px"
          cursor="pointer"
          textAlign="center"
          _hover={{ bg: "green.600" }}
        >
          Get started
        </Text>
      </a>
      <CartDrawer />
    </HStack>
  );
};
