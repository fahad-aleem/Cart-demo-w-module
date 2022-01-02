import { Box, Flex, Text, Tooltip, theme } from "@chakra-ui/react";

import { colors } from "../theme/colors";
import { goldnColors, palettes } from "./constants";

const getColorInfo = (colorInfo, palette, palletIndex) => {
  let defaultName;

  if (Array.isArray(colorInfo["alias"])) {
    const filtered = colorInfo["alias"].filter(
      alias => alias["palette"] === palette
    );

    if (filtered.length > 0) {
      defaultName = filtered[0]["name"];
    }
  } else {
    defaultName =
      colorInfo["alias"] && colorInfo["alias"]["palette"] === palette
        ? colorInfo["alias"]["name"]
        : undefined;
  }

  const name = colorInfo["name"];
  const hex = colors[name]
    ? colors[name][palette]
    : theme.colors[name][palette];

  const coloredInfoBox = (
    <Flex
      justifyContent="center"
      alignItems="center"
      key={palletIndex}
      w="65px"
      minW="65px"
      h="65px"
      m="7.5px"
      bg={`${name}.${palette}`}
      border={defaultName ? "3px solid black" : undefined}
    >
      <Text
        textAlign="center"
        fontSize="10px"
        color={palette < 500 ? "black" : "white"}
      >
        {`${name}.${palette}\n`}
        {hex}
      </Text>
    </Flex>
  );

  return defaultName ? (
    <Tooltip hasArrow label={defaultName}>
      {coloredInfoBox}
    </Tooltip>
  ) : (
    coloredInfoBox
  );
};

export const Colors = () => {
  return (
    <Box>
      {goldnColors.map((goldnColor, colorIndex) => (
        <Flex key={colorIndex}>
          {palettes.map((palette, paletteIndex) =>
            getColorInfo(goldnColor, palette, paletteIndex)
          )}
        </Flex>
      ))}
    </Box>
  );
};
