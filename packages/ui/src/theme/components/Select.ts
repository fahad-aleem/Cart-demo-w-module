import { ThemeComponents } from "@chakra-ui/theme";

import { colors } from "../colors";

const Select: ThemeComponents["Select"] = {
  defaultProps: {
    focusBorderColor: colors.goldn,
  },
};

export const globalSelect = {
  _disabled: {
    backgroundColor: colors.offWhite,
  },
};

export default Select;
