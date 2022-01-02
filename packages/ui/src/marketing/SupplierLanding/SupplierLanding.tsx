import { Search2Icon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { SupplierTile, WaitlistSection } from "@goldn/ui";

import companytypes from "../../../../../apps/marketing-app/companyTypes";
import HomePageService from "../../../../../apps/marketing-app/homepage-service";

export const SupplierLanding = () => {
  const { push } = useRouter();
  const [value, setValue] = useState("");
  const [width, setWidth] = useState(null);

  const handleClick = event => {
    event.preventDefault();
    push(`/suppliers/keyword/${event.target.value}`);
  };
  const onKeyPressHandler = e => {
    if (e.key === "Enter") {
      push(`/suppliers/keyword/${e.target.value}`);
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Box maxWidth="800">
        <Head>
          <title>Find a Supplier – Goldn</title>
          <meta
            name="description"
            content="Great products are built on great partnerships. Here, you can find and connect with vendors for each stage of your project."
          />
        </Head>

        <Heading
          as="h1"
          fontFamily="SofiaPro-SemiBold"
          mb={4}
          mt={{ base: "30px", sm: "0" }}
          fontSize={[40, 48]}
          lineHeight={["48px", "56px"]}
        >
          Find a supplier
        </Heading>
        <Text
          fontFamily="SofiaPro-SemiBold"
          fontSize={[20, 26]}
          fontWeight="semibold"
          color="textGray"
          lineHeight={["28px", "32px"]}
          mb={["32px", "52px"]}
        >
          Great products are built on great partnerships. Here, you can find and
          connect with vendors for each stage of your project.
        </Text>
        <Stack>
          <InputGroup
            bg="white"
            borderRadius="md"
            overflow="hidden"
            height="54"
            mb={["8", "20"]}
            boxShadow="sm"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="transparent"
            _hover={{ borderColor: "gray.200" }}
            onChange={e => handleChange(e)}
          >
            <InputLeftElement
              height="100%"
              left="7px"
              children={<Search2Icon />}
            />
            {width >= 1024 ? (
              <Input
                placeholder="Search supplier by type, service, or company"
                border="none"
                height="100%"
                pl="50px"
                pr={["8px", "106px"]}
                _focus={{ border: "none", boxShadow: "none" }}
                onKeyPress={e => onKeyPressHandler(e)}
                value={value}
                onChange={e => handleChange(e)}
              />
            ) : (
              <Input
                placeholder="Search supplier"
                border="none"
                height="100%"
                pl="50px"
                pr={["8px", "106px"]}
                _focus={{ border: "none", boxShadow: "none" }}
                onKeyPress={e => onKeyPressHandler(e)}
                value={value}
                onChange={e => handleChange(e)}
              />
            )}
            <InputRightElement
              height="100%"
              width="auto"
              right="7px"
              children={
                <Button
                  type="submit"
                  height="40px"
                  color="white"
                  bg="brightGreen"
                  borderRadius="md"
                  fontWeight="normal"
                  minWidth="93"
                  _hover={{ bg: "deepGreen" }}
                  onClick={handleClick}
                  value={value}
                  onChange={e => handleChange(e)}
                  d={["none", "inline-flex"]}
                >
                  Search
                </Button>
              }
            />
          </InputGroup>
        </Stack>
      </Box>

      <Box mb="20">
        <Heading
          as="h2"
          fontFamily="SofiaPro-SemiBold"
          fontSize={[26]}
          lineHeight={["32px"]}
          mb={[6, 8]}
        >
          Find supplier by type
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={[5, 7]}>
          {Object.keys(companytypes)
            .slice(0, 12)
            .map(key => (
              <SupplierTile smScreen={true} type={key} link="companyType" />
            ))}
        </SimpleGrid>
      </Box>

      <Box mb="20">
        <Heading
          as="h2"
          fontFamily="SofiaPro-SemiBold"
          fontSize={[26]}
          lineHeight={["32px"]}
          mb={[6, 8]}
        >
          Find supplier by service
        </Heading>
        <SimpleGrid columns={[2, 3, 4, 6]} spacing={[5, 7]}>
          {HomePageService[0]["services"].map(key => (
            <SupplierTile smScreen={true} type={key} link="service" />
          ))}
        </SimpleGrid>
      </Box>

      
    </>
  );
};
