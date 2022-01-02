import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

export const MobileMenu = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border="none" textAlign="right">
        <AccordionButton
          d="inline-block"
          w="auto"
          py="0"
          px="5px"
          fontSize="x-large"
          lineHeight="20px"
          bg="transparent !important"
        >
          <HamburgerIcon />
        </AccordionButton>
        <AccordionPanel p={0} mt={4} borderTop="1px" borderTopColor="gray.300">
          <a href="/brands.html" className="w100">
            <Text
              textAlign="center"
              w="100%"
              color="black"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="bold"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.50" }}
            >
              Solutions
            </Text>
          </a>
          <a href="/blog/" className="w100">
            <Text
              textAlign="center"
              w="100%"
              color="black"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="bold"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.50" }}
            >
              Blog
            </Text>
          </a>
          <a href="/supplierlist/" className="w100">
            <Text
              textAlign="center"
              w="100%"
              color="black"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="bold"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.50" }}
            >
              Find a supplier
            </Text>
          </a>
          <a href="/pricing.html" className="w100">
            <Text
              textAlign="center"
              w="100%"
              color="black"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="bold"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.50" }}
            >
              Pricing
            </Text>
          </a>
          <a href="https://cos.goldn.com/user/login" className="w100">
            <Text
              textAlign="center"
              w="100%"
              color="black"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="bold"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.50" }}
            >
              Sign in
            </Text>
          </a>
          <a href="https://cos.goldn.com/user/signup" className="w100">
            <Text
              textAlign="center"
              w="100%"
              bg="brightGreen"
              color="white"
              h="40px"
              px={["10px", "15px"]}
              lineHeight="36px"
              fontSize="md"
              fontWeight="normal"
              borderRadius="4px"
              cursor="pointer"
              _hover={{ bg: "green.600" }}
            >
              Get started
            </Text>
          </a>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
