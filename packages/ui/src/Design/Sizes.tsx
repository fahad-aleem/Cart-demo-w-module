import { Box, Flex, theme } from "@chakra-ui/react";

import { sizes } from "./constants";

interface SizeInfoProps {
  name: string;
}
const SizeInfo = ({ name }: SizeInfoProps) => {
  let pixel;

  if (name === "full" || name === "min" || name === "max") {
    pixel = "n/a";
  } else if (name === "0") {
    pixel = 0;
  } else if (name === "px") {
    pixel = 1;
  } else {
    const sizeInRem = theme.sizes[name] as string;
    const parsedRem = parseFloat(sizeInRem.substr(0, sizeInRem.indexOf("rem")));

    pixel = parsedRem * 16;
  }

  return (
    <Flex py="2.5" borderBottom="1px" borderColor="gray.200" w="100%">
      <Box minW="28" pl="2.5">
        {name}
      </Box>
      <Box minW="52" pl="2.5">
        {theme.sizes[name]}
      </Box>
      <Box minW="28" pl="2.5">
        {pixel}
      </Box>
      <Box>
        <Box w={name} h="25px" bg="goldn"></Box>
      </Box>
    </Flex>
  );
};

export const Sizes = () => {
  return (
    <Box>
      <Flex py="2.5" bg="blue.50" w="100vw">
        <Box minW="28" pl="2.5" fontWeight="bold">
          Name
        </Box>
        <Box minW="52" pl="2.5" fontWeight="bold">
          Sizes (in rem)
        </Box>
        <Box minW="28" pl="2.5" fontWeight="bold">
          Pixels
        </Box>
        <Box></Box>
      </Flex>
      {sizes.map((size, index) => (
        <SizeInfo key={index} name={size} />
      ))}
    </Box>
  );
};
