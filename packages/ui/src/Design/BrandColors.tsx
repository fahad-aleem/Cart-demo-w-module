import { Box, Flex, Text, TextProps } from "@chakra-ui/react";

type ColorLabelProps = {
  label: string;
  preset: string;
  hex: string;
} & TextProps;

const ColorLabel = ({ label, preset, hex, ...rest }: ColorLabelProps) => (
  <Box
    ml="16px"
    mt="16px"
    color="white"
    fontWeight="700"
    fontSize="14px"
    {...rest}
  >
    <Text>{`${label} / ${preset} / ${hex}`}</Text>
  </Box>
);

export const BrandColors = () => (
  <Flex w="650px" h="650px">
    <Box w="50%" bg="gold.500">
      <ColorLabel label="Goldn Gold" preset="gold.500" hex="#DBA34F" />
    </Box>
    <Flex w="50%" flexDir="column">
      <Flex w="100%" h="50%" flexDir="column">
        <Box bg="yellow.400" flexGrow={2}>
          <ColorLabel label="Yellow" preset="yellow.400" hex="#FBD551" />
        </Box>
        <Box bg="green.900" flexGrow={1}>
          <ColorLabel label="Deep Green" preset="green.900" hex="#014739" />
        </Box>
        <Box bg="green.500" flexGrow={1}>
          <ColorLabel label="Bright Green" preset="green.500" hex="#008469" />
        </Box>
      </Flex>
      <Flex w="100%" h="50%" flexDir="column">
        <Box bg="gray.100" flexGrow={2}>
          <ColorLabel
            label="Off White"
            preset="gray.100"
            hex="#F7F6F4"
            color="gray.400"
          />
        </Box>
        <Box bg="red.400" flexGrow={1}>
          <ColorLabel label="Bright Red" preset="red.400" hex="#FF5348" />
        </Box>
        <Box bg="pink.200" flexGrow={1}>
          <ColorLabel label="Pink" preset="pink.200" hex="#FFC4DB" />
        </Box>
        <Box bg="blue.400" flexGrow={1}>
          <ColorLabel label="Bright Blue" preset="blue.400" hex="#529CFF" />
        </Box>
        <Box bg="lightblue.300" flexGrow={1}>
          <ColorLabel label="Light Blue" preset="lightblue.300" hex="#BCD1ED" />
        </Box>
      </Flex>
    </Flex>
  </Flex>
);
