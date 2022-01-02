import { ThemeComponents } from "@chakra-ui/theme";

const thicknessMap = {
  xs: "1px",
  sm: "2px",
  md: "3px",
  lg: "4px",
  xl: "5px",
};

const Select: ThemeComponents["Spinner"] = {
  baseStyle: ({ size }) => {
    return {
      color: "green.500",
      borderWidth: thicknessMap[size],
    };
  },
};

export default Select;
