import { ThemeComponents } from "@chakra-ui/theme";

const Slider: ThemeComponents["Slider"] = {
  baseStyle: () => {
    return {
      filledTrack: {
        bg: "green.500",
      },
    };
  },
};

export default Slider;
