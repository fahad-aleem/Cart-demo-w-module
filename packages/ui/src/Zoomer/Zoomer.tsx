import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";

import { ZoomIcon, BurgerIcon } from "@goldn/icons";

interface ZoomerProps {
  setZoomLevel: (n: number) => void;
}
export const Zoomer = ({ setZoomLevel }: ZoomerProps) => {
  return (
    <>
      <ZoomIcon />
      <Slider
        ml={4}
        aria-label="zoom-avatar"
        focusThumbOnChange={false}
        defaultValue={2}
        min={1}
        max={3}
        onChange={setZoomLevel}
        step={0.1}
        width="100%"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb width="16px" height="16px" borderRadius="sm">
          <Box as={BurgerIcon} />
        </SliderThumb>
      </Slider>
    </>
  );
};
