import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { isEmpty } from "ramda";
import { useEffect, useState } from "react";

import { MobileFilters } from "@goldn/ui";

export const SupplierSearch = ({ selectedFilters, setSelectedFilters }) => {
  const router = useRouter();
  const [value, Setvalue] = useState("");
  const QueryRouter = router.asPath;
  const [state, setState] = useState(false);
  const [width, setWidth] = useState(null);

  const handleClick = event => {
    event.preventDefault();
    router.push(`/suppliers/keyword/${event.target.value}`);
  };

  const onKeyPressHandler = e => {
    if (e.key === "Enter") {
      router.push(`/suppliers/keyword/${e.target.value}`);
    }
  };
  const handleChange = event => {
    Setvalue(event.target.value);
  };

  const statechange = event => {
    setState(!state);
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
  useEffect(() => {
    if (router.query.Supplier && QueryRouter.includes("/suppliers/keyword/")) {
      Setvalue(router.query.Supplier[1]);
    }
  }, []);
  useEffect(() => {
    if (isEmpty(router.query)) {
      Setvalue("");
    }
  }, [router.query]);
  return (
    <Box mt={{ base: "0", lg: "15px" }}>
      <HStack alignItems="flex-start">
        <InputGroup
          bg="white"
          borderRadius="md"
          overflow="hidden"
          height={{ base: "48px", lg: "54px" }}
          mb="7"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="transparent"
          _hover={{ borderColor: "gray.200" }}
          onKeyPress={e => onKeyPressHandler(e)}
          onChange={e => handleChange(e)}
        >
          <InputLeftElement height="100%" left="7px">
            {" "}
            <Search2Icon />{" "}
          </InputLeftElement>
          {width >= 1024 ? (
            <Input
              value={value}
              placeholder="Search supplier by type, service, or company"
              border="none"
              height="100%"
              pl="50px"
              pr={["8px", "106px"]}
              _focus={{ border: "none", boxShadow: "none" }}
            />
          ) : (
            <Input
              value={value}
              placeholder="Search supplier"
              border="none"
              height="100%"
              pl="50px"
              pr={["8px", "106px"]}
              _focus={{ border: "none", boxShadow: "none" }}
            />
          )}
          <InputRightElement height="100%" width="auto" right="7px">
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
          </InputRightElement>
        </InputGroup>

        <MobileFilters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          value={value}
          Setvalue={Setvalue}
        />
      </HStack>
    </Box>
  );
};
