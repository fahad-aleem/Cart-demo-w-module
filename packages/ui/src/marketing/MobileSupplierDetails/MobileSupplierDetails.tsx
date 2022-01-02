import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  Button,
  Box,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import "firebase/firestore";
import firebase from "firebase/app";
import React from "react";

import { GlobeIcon, EnvelopeIcon } from "@goldn/icons";

import { SupplierDetails } from "../SupplierDetails/SupplierDetails";

export const MobileSupplierDetails = ({
  details,
  isClosed,
  setIsClosed,
  onClose,
}: {
  details: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];
  isClosed: any;
  setIsClosed: any;
  isOpen: any;
  onOpen: any;
  onClose: any;
}) => {
  const [placement, setPlacement] = React.useState<
    "bottom" | "left" | "right" | "top"
  >("right");

  return (
    <>
      {details ? (
        <Drawer
          placement={placement}
          onClose={onClose}
          isOpen={!isClosed}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent className="DetailSidebar" height="auto !important">
            <DrawerHeader
              p="20px"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              h="80px"
              borderBottom="1px"
              borderBottomColor="gray.200"
            >
              <Button
                onClick={() => setIsClosed(!isClosed)}
                pos="static"
                w="auto"
                color="gray.500"
                bgColor="transparent !important"
                boxShadow="none"
                minW="auto"
                p="0"
                fontSize="20px"
              >
                <ArrowBackIcon />
              </Button>
              <Box flex={1} textAlign="center">
                <Text
                  fontFamily="SofiaPro-SemiBold"
                  fontSize="24px"
                  lineHeight="28px"
                >
                  {details[0].get("name")}
                </Text>
              </Box>
            </DrawerHeader>

            <DrawerBody border="none">
              <SupplierDetails
                details={details}
                isClosed={isClosed}
                setIsClosed={setIsClosed}
              />
            </DrawerBody>

            <DrawerFooter
              borderTopWidth="1px"
              p="20px"
              pb="30px"
              d="flex"
              alignItems="stretch"
              justifyContent="space-between"
            >
              {details[0].get("contact.website") && (
                <Link
                  href={details[0].get("contact.website")}
                  flex={1}
                  maxW="100%"
                  target="_blank"
                  height={14}
                  fontSize="md"
                  fontWeight="semibold"
                  borderRadius="4px"
                  bgColor="brightGreen"
                  color="white"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bgColor: "green.900" }}
                  _focus={{ bgColor: "green.900" }}
                >
                  <GlobeIcon />
                  <Box ml="8px"> Supplier website </Box>
                </Link>
              )}

              {details[0].get("contact.email") && (
                <Link
                  href={`mailto:${details[0].get("contact.email")}`}
                  rel="nofollow"
                  textAlign="center"
                  s
                  width="56px"
                  borderRadius="sm"
                  borderWidth="1px"
                  borderColor="gray.200"
                  ml="15px"
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    color="black"
                    width="22px"
                    height="22px"
                    viewBox="0 0 22px 24"
                  >
                    <EnvelopeIcon />
                  </Icon>
                </Link>
              )}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  );
};
