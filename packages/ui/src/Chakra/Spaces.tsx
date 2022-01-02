import { Box, Flex, theme } from "@chakra-ui/react";

import { spaces } from "./constants";

interface SpaceInfoProps {
  name: string;
}
export const SpaceInfo = ({ name }: SpaceInfoProps) => {
  let pixel;

  if (name === "0") {
    pixel = 0;
  } else if (name === "px") {
    pixel = 1;
  } else {
    const sizeInRem = theme.sizes[name] as string;
    const parsedRem = parseFloat(sizeInRem.substr(0, sizeInRem.indexOf("rem")));

    pixel = parsedRem * 16;
  }

  return (
    <Flex py="2.5" borderBottom="1px" borderColor="gray.200" w="100vw">
      <Box minW="28" pl="2.5">
        {name}
      </Box>
      <Box minW="52" pl="2.5">
        {theme.space[name]}
      </Box>
      <Box minW="28" pl="2.5">
        {pixel}
      </Box>
      <Box>
        <Box
          w={name}
          h="25px"
          borderLeft="1px"
          borderRight="1px"
          borderColor="goldn"
        >
          <Box h="50%" fontSize="10px" textAlign="center" mb="2px">
            {pixel <= 24 ? "" : `${pixel}px`}
          </Box>
          <Box borderTop="1px" borderColor="goldn" h="50%" />
        </Box>
      </Box>
    </Flex>
  );
};

export const Spaces = () => {
  return (
    <Box>
      <Flex py="2.5" bg="blue.50" w="100vw">
        <Box minW="28" pl="2.5" fontWeight="bold">
          Name
        </Box>
        <Box minW="52" pl="2.5" fontWeight="bold">
          Space (in rem)
        </Box>
        <Box minW="28" pl="2.5" fontWeight="bold">
          Pixels
        </Box>
        <Box></Box>
      </Flex>
      {spaces.map((space, index) => (
        <SpaceInfo key={index} name={space} />
      ))}
    </Box>
  );
};
