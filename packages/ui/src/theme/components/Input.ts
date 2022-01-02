import { ThemeComponents } from "@chakra-ui/theme";

import { colors } from "../colors";

const Input: ThemeComponents["Input"] = {
  defaultProps: {
    focusBorderColor: colors.goldn,
  },
};

export const globalInput = {
  _disabled: {
    backgroundColor: colors.offWhite,
  },
};

export default Input;
