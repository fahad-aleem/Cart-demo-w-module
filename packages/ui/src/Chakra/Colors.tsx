import { Box, BoxProps, Flex, theme } from "@chakra-ui/react";
import rgbHex from "rgb-hex";

import { colors } from "./constants";

type ColorInfoProps = {
  color: string;
  name: string;
  rgb: string;
  hex: string;
  textColor?: string;
} & BoxProps;

const ColorInfo = ({
  color,
  name,
  rgb,
  hex,
  textColor,
  ...rest
}: ColorInfoProps) => {
  return (
    <Box m="2">
      <Flex
        bg={color}
        w="150px"
        h="150px"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        {...rest}
      >
        <Box fontSize="xs" color={textColor}>
          {name}
        </Box>
        <Box fontSize="xs" color={textColor}>
          {rgb}
        </Box>
        <Box fontSize="xs" color={textColor}>
          {hex}
        </Box>
      </Flex>
    </Box>
  );
};

interface PaletteProps {
  colorName: string;
  palettes: {
    [key: string]: string;
  };
  isAlpha?: boolean;
  manualColorName?: string;
}

const Palette = ({
  colorName,
  palettes,
  isAlpha,
  manualColorName,
}: PaletteProps) => (
  <Flex>
    {Object.entries(palettes).map((colorInfo, index) => {
      return (
        <ColorInfo
          color={palettes[colorInfo[0]]}
          key={index}
          name={`${colorName}.${colorInfo[0]}`}
          rgb={colorInfo[1]}
          hex={isAlpha ? `#${rgbHex(colorInfo[1])}` : ""}
          textColor={
            manualColorName ? manualColorName : index < 5 ? "black" : "white"
          }
        />
      );
    })}
  </Flex>
);

export const Colors = () => {
  return (
    <Box>
      {colors.map((color, index) => (
        <Palette
          key={index}
          colorName={color.name}
          palettes={theme.colors[color.name]}
          isAlpha={color.isAlpha}
          manualColorName={color.manualColorName}
        />
      ))}
      <ColorInfo
        color={theme.colors.black}
        name="black"
        hex="#000000"
        rgb=""
        textColor="white"
      />
      <ColorInfo
        color={theme.colors.white}
        name="white"
        hex="#ffffff"
        rgb=""
        textColor="black"
        border="1px"
        borderColor="black"
        mt={4}
      />
    </Box>
  );
};
