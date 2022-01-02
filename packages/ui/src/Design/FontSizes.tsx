import { Box, Flex, Text, theme } from "@chakra-ui/react";

import { fontSizes } from "./constants";

interface FontSizeInfoProps {
  name: string;
}
const FontSizeInfo = ({ name }: FontSizeInfoProps) => {
  const sizeInRem = theme.fontSizes[name] as string;
  const parsedRem = parseFloat(sizeInRem.substr(0, sizeInRem.indexOf("rem")));
  const pixel = parsedRem * 16;

  return (
    <Flex py="2.5" borderBottom="1px" borderColor="gray.200" w="100vw">
      <Box minW="28" pl="2.5">
        {name}
      </Box>
      <Box minW="52" pl="2.5">
        {theme.fontSizes[name]}
      </Box>
      <Box minW="28" pl="2.5">
        {pixel}
      </Box>
      <Box>
        <Text fontSize={name}>
          This is a font size for {name} with {pixel}px
        </Text>
      </Box>
    </Flex>
  );
};

export const FontSizes = () => {
  return (
    <Box>
      <Flex py="2.5" bg="blue.50" w="100vw">
        <Box minW="28" pl="2.5" fontWeight="bold">
          Name
        </Box>
        <Box minW="52" pl="2.5" fontWeight="bold">
          Font Size (in rem)
        </Box>
        <Box minW="28" pl="2.5" fontWeight="bold">
          Pixels
        </Box>
        <Box></Box>
      </Flex>
      {fontSizes.map((fontSize, index) => (
        <FontSizeInfo key={index} name={fontSize} />
      ))}
    </Box>
  );
};
