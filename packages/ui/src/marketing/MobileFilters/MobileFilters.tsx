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
  Text,
  Box,
  Badge,
} from "@chakra-ui/react";
import { isEmpty } from "ramda";
import React, { useEffect, useState } from "react";

import { FilterIcon } from "@goldn/icons";
import { SupplierFilters } from "@goldn/ui";

export const MobileFilters = ({
  selectedFilters,
  setSelectedFilters,
  value,
  Setvalue,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, SetCount] = useState(0);
  const [placement, setPlacement] = React.useState<
    "bottom" | "left" | "right" | "top"
  >("right");

  const clearState = () => {
    setSelectedFilters({
      locations: [],
      searchKeyword: [],
      supplierTypes: [],
      services: [],
    });
  };

  useEffect(() => {
    if (!isEmpty(selectedFilters))
      SetCount(
        selectedFilters.supplierTypes.length +
          selectedFilters.locations.length +
          selectedFilters.services.length
      );
  }, [selectedFilters]);

  return (
    <>
      <Button
        type="submit"
        h="48px"
        w="48px"
        minW="48px"
        p="0"
        display="flex"
        color="white"
        bgColor="brightGreen"
        borderRadius="md"
        fontWeight="normal"
        d={{ base: "block", lg: "none" }}
        _hover={{ bgColor: "brightGreen" }}
        _focus={{ bgColor: "brightGreen" }}
        _active={{ bgColor: "brightGreen" }}
        className="FilterBtn"
        pos="relative"
        onClick={onOpen}
      >
        <FilterIcon />
        {count > 0 ? (
          <Badge
            bgColor="green.900"
            borderRadius="full"
            w="20px"
            h="20px"
            color="white"
            p="0"
            fontSize="11px"
            fontWeight="normal"
            textAlign="center"
            pos="absolute"
            top="-7px"
            right="-7px"
          >
            {count}
          </Badge>
        ) : null}
      </Button>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent className="FilterSidebar" height="auto !important">
          <DrawerHeader
            p="20px"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            h="80px"
          >
            <Text
              fontFamily="SofiaPro-SemiBold"
              fontSize="20"
              lineHeight="28px"
            >
              Filters
            </Text>
            <DrawerCloseButton
              pos="static"
              w="20px"
              mr="-5px"
              color="gray.500"
              _hover={{ bg: "transparent" }}
              _focus={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />
          </DrawerHeader>
          <DrawerBody p="20px" borderWidth="1px">
            <Box>
              <SupplierFilters
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            </Box>
          </DrawerBody>

          <DrawerFooter
            borderTopWidth="1px"
            p="20px"
            pb="30px"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              flex={1}
              maxW="100%"
              height={14}
              fontSize="md"
              fontWeight="semibold"
              borderRadius="4px"
              borderColor="brightGreen"
              color="brightGreen"
              variant="outline"
              _hover={{ bg: "brightGreen", color: "white" }}
              _focus={{ bg: "brightGreen", color: "white" }}
              onClick={clearState}
            >
              Reset all filters
            </Button>
            <Box w="15px"></Box>
            <Button
              flex={1}
              maxW="100%"
              height={14}
              fontSize="md"
              fontWeight="semibold"
              borderRadius="4px"
              bgColor="brightGreen"
              color="white"
              _hover={{ bgColor: "green.900" }}
              _focus={{ bgColor: "green.900" }}
              onClick={onClose}
            >
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
