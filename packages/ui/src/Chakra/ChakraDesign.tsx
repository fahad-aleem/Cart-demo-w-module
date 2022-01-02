import { Colors } from "./Colors";
import { FontSizes } from "./FontSizes";
import { Radii } from "./Radii";
import { Sizes } from "./Sizes";
import { Spaces } from "./Spaces";

interface ChakraDesignProps {
  whichDesign: string;
}

const getDesignInfo = whichDesign => {
  switch (whichDesign) {
    case "size": {
      return <Sizes />;
    }
    case "radii": {
      return <Radii />;
    }
    case "space": {
      return <Spaces />;
    }
    case "font": {
      return <FontSizes />;
    }
    case "color": {
      return <Colors />;
    }
  }
};

export const ChakraDesign = ({ whichDesign }: ChakraDesignProps) => {
  const designToRender = getDesignInfo(whichDesign);

  return <>{designToRender}</>;
};
