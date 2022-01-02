import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { FormControl, Input, IconButton, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export interface TriggerSearchInputBlog {
  articlesLimit: number;
  articlesStart: number;
  search: string;
}

export const BlogSearch = () => {
  const { push } = useRouter();
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const onKeyPressHandler = e => {
    if (e.key === "Enter") {
      push(`/search/${e.target.value}`);
    }
  };
  const onInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Box position="relative" overflow="hidden">
      <FormControl
        id="email"
        className={toggle ? "active searchBar" : "searchBar"}
        minW="250px"
        d="flex"
      >
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          fontSize="large"
          color="gray.400"
          minW="40px"
          bg="transparent !important"
          boxShadow="none"
          zIndex={1}
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
          onClick={() => setToggle(!toggle)}
        />
        <Input
          type="text"
          fontSize="sm"
          border="none"
          borderRadius="0"
          w="100%"
          pl="0"
          pr="20px"
          onKeyPress={e => onKeyPressHandler(e)}
          placeholder={focus ? "" : "Search Goldn Blog"}
          value={search !== undefined ? search : ""}
          onChange={e => onInputChange(e)}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />

        {search && (
          <IconButton
            onClick={() => setSearch("")}
            aria-label="Search"
            icon={<CloseIcon />}
            color="gray.400"
            bg="transparent !important"
            boxShadow="none"
            position="absolute"
            right="4px"
            width="auto"
            minW="12px"
            fontSize="12px"
            zIndex={1}
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent" }}
          />
        )}
      </FormControl>
    </Box>
  );
};
