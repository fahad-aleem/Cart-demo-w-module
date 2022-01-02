import { Box, Flex, theme } from "@chakra-ui/react";

import { radii } from "./constants";

interface RadiiInfoProps {
  name: string;
}
const RadiiInfo = ({ name }: RadiiInfoProps) => {
  let pixel;

  if (name === "0") {
    pixel = 0;
  } else if (name === "full") pixel = 9999;
  else {
    const sizeInRem = theme.radii[name] as string;
    const parsedRem = parseFloat(sizeInRem.substr(0, sizeInRem.indexOf("rem")));

    pixel = parsedRem * 16;
  }

  return (
    <Flex py="2.5" borderBottom="1px" borderColor="gray.200">
      <Flex w="28" pl="2.5" alignItems="center">
        {name}
      </Flex>
      <Flex w="52" pl="2.5" alignItems="center">
        {theme.radii[name]}
      </Flex>
      <Flex w="28" pl="2.5" alignItems="center">
        {pixel}
      </Flex>
      <Box>
        <Box borderRadius={name} w="16" h="16" bg="goldn"></Box>
      </Box>
    </Flex>
  );
};

export const Radii = () => {
  return (
    <Box w="100vw">
      <Box>
        <Flex py="2.5" bg="blue.50">
          <Box w="28" pl="2.5" fontWeight="bold">
            Name
          </Box>
          <Box w="52" pl="2.5" fontWeight="bold">
            Radii (in rem)
          </Box>
          <Box w="28" pl="2.5" fontWeight="bold">
            Pixels
          </Box>
          <Box></Box>
        </Flex>
        {radii.map((radius, index) => (
          <RadiiInfo key={index} name={radius} />
        ))}
      </Box>
    </Box>
  );
};
