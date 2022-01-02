import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Icon,
  Badge,
  Divider,
  UnorderedList,
  ListItem,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import firebase from "firebase/app";
import "firebase/firestore";
import Head from "next/head";

import {
  EnvelopeIcon,
  PhoneIcon,
  LocationIcon,
  CloseIcon,
  GlobeIcon,
} from "@goldn/icons";

export const SupplierDetails = ({
  details,
  isClosed,
  setIsClosed,
}: {
  details: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];
  isClosed: any;
  setIsClosed: any;
}) => {
  const data = details;

  const handleclick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      {data ? (
        <Box className="DetailSection" maxW="50%" bg="white" p="5" flexGrow={1}>
          <Head>
            <title>{data[0].get("name") + "-Supplier-GOLDN"}</title>
            <meta name="description" content={data[0].get("profile")} />
          </Head>
          <HStack
            justifyContent="space-between"
            borderBottomWidth="1px"
            borderColor="gray.200"
            mb="20px"
            pb="20px"
            alignItems="flex-start"
            d={{ base: "none", lg: "flex" }}
          >
            <Heading as="h1" mb={0} fontSize={[22, 32]}>
              {data[0].get("name")}
            </Heading>
            <Text d="flex">
              <Link
                rel="nofollow"
                href={data[0].get("contact.website")}
                target="_blank"
                textAlign="center"
                width="40px"
                height="40px"
                borderRadius="sm"
                borderWidth="1px"
                borderColor="gray.200"
                lineHeight="36px"
              >
                <Icon
                  color="black"
                  width="22px"
                  height="22px"
                  viewBox="0 0 22px 24"
                >
                  <GlobeIcon />
                </Icon>
              </Link>
              <Button
                width="20px"
                height="20px"
                border="none"
                ml="15px"
                p="0"
                minW="auto"
                boxShadow="none"
                bg="white !important"
                onClick={handleclick}
              >
                <Icon width="25px" height="25px" viewBox="0 0 30 25">
                  <CloseIcon />
                </Icon>
              </Button>
            </Text>
          </HStack>
          <Stack mb="25px">
            <Heading mb="5px" fontSize={[18, 20]}>
              {"About " + data[0].get("name")}
            </Heading>
            {data[0].get("profile") && (
              <Text fontSize={16} mt={0}>
                {data[0].get("profile")}
              </Text>
            )}
          </Stack>
          <HStack mb="25px">
            {data[0].get("companySize") && (
              <Box flexGrow={1}>
                <Text color="textGray" fontSize="xs">
                  Company Size
                </Text>
                <Text>{data[0].get("companySize")}</Text>
              </Box>
            )}
            {data[0].get("yearFounded") && (
              <Box flexGrow={1}>
                <Text color="textGray" fontSize="xs">
                  Year Founded
                </Text>
                <Text>{data[0].get("yearFounded")}</Text>
              </Box>
            )}
          </HStack>
          {data[0].get("services") && (
            <Stack>
              <Heading mb="5px" fontSize={[18, 20]}>
                Services
              </Heading>
              <HStack
                flexWrap="wrap"
                alignItems="flex-start"
                mx="-5px !important"
              >
                {data[0].get("services").map((element, index) => (
                  <Link key={index} mx="0 !important" mb={1}>
                    <Badge
                      mx="5px"
                      mb="5px"
                      py="4px"
                      px="10px"
                      bg="gray.100"
                      color="gray.500"
                      fontSize="xs"
                      fontWeight="600"
                      textTransform="capitalize"
                      _hover={{ color: "gray.700" }}
                    >
                      {element}
                    </Badge>
                  </Link>
                ))}
              </HStack>
            </Stack>
          )}
          {data[0].get("contact") && (
            <>
              <Divider my="6" borderColor="gray.300" />
              <Stack mb="25px">
                <Heading mb="5px" fontSize={[18, 20]}>
                  Contact
                </Heading>
                <UnorderedList listStyleType="none">
                  {data[0].get("contact.website") && (
                    <ListItem mb="3" d="flex">
                      <Icon
                        mr="15px"
                        color="gray.300"
                        width="22px"
                        height="24px"
                        viewBox="0 0 22 18"
                      >
                        <GlobeIcon />
                      </Icon>
                      <Link
                        rel="nofollow"
                        color="brightGreen"
                        fontWeight="semibold"
                        href={data[0].get("contact.website")}
                        target="_blank"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {data[0].get("contact.website")}
                      </Link>
                    </ListItem>
                  )}
                  {data[0].get("contact.email") && (
                    <ListItem mb="3">
                      <Icon
                        mr="15px"
                        color="gray.300"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <EnvelopeIcon />
                      </Icon>
                      <Link
                        rel="nofollow"
                        color="brightGreen"
                        fontWeight="semibold"
                        href={`mailto:${data[0].get("contact.email")}`}
                      >
                        {data[0].get("contact.email")}
                      </Link>
                    </ListItem>
                  )}
                  {data[0].get("contact.phone") && (
                    <ListItem mb="3">
                      <Icon
                        mr="15px"
                        color="gray.300"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <PhoneIcon />
                      </Icon>
                      <Link
                        rel="nofollow"
                        color="brightGreen"
                        fontWeight="semibold"
                        href={`tel:${data[0].get("contact.phone")}`}
                      >
                        {data[0].get("contact.phone")}
                      </Link>
                    </ListItem>
                  )}
                  {data[0].get("contact.address") &&
                    data[0].get("contact.city") &&
                    data[0].get("contact.state") &&
                    data[0].get("contact.postcode") &&
                    data[0].get("contact.country") && (
                      <ListItem mb="3" display="flex">
                        <Icon
                          mr="15px"
                          color="gray.300"
                          width="18px"
                          height="24px"
                          viewBox="0 0 18 24"
                        >
                          <LocationIcon />
                        </Icon>{" "}
                        {data[0].get("contact.address")} <br />
                        {data[0].get("contact.city")},{" "}
                        {data[0].get("contact.state")},{" "}
                        {data[0].get("contact.postcode")} <br />
                        {data[0].get("contact.country")}
                      </ListItem>
                    )}
                </UnorderedList>
              </Stack>
            </>
          )}
          {data[0].get("contact.headOfficeLatitude") &&
            data[0].get("contact.headOfficeLongitude") && (
              <Stack>
                <AspectRatio ratio={16 / 6}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
                </AspectRatio>
              </Stack>
            )}
        </Box>
      ) : null}
    </>
  );
};
