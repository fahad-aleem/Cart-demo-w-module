import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import { colors } from "./colors";
import { components, globalComponents } from "./components";

const fonts = { heading: "Mulish", body: "Mulish" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const shadows = {
  insetRight: "inset -12px 0px 20px rgb(5 5 5 / 3%)",
  insetBottom: "inset 0px -12px 20px rgba(5, 5, 5, 0.025)",
};

const customTheme = {
  styles: {
    global:{
      globalComponents,
      _focus:{
        boxShadow: 'none !important'
      },
      a:{
        display: 'inline-block',
        textDecoration: 'none !important'
      }
    }
  }, 
  fonts,
  breakpoints,
  colors,
  components,
  shadows,
} as ThemeOverride;

export const theme = extendTheme(customTheme);
export const blogTheme = extendTheme(customTheme, {
  styles: {
    global:{
      a:{
        display: 'inline-block',
        textDecoration: 'none !important',
        color: colors.brightGreen,
        fontWeight: '700',
      },
      h1:{
        fontFamily: 'SofiaPro-SemiBold !important',
        fontSize: '48px !important',
        marginBottom: '16px'
      },
      h2:{
        fontFamily: 'SofiaPro-SemiBold !important',
        fontSize: '40px !important',
        marginBottom: '16px',
        lineHeight: '48px'
      },
      h3:{
        fontFamily: 'SofiaPro-SemiBold !important',
        fontSize: '32px !important',
        marginBottom: '16px'
      },
      h4:{
        fontFamily: 'SofiaPro-SemiBold !important',
        fontSize: '26px !important',
        marginBottom: '16px'
      },
      h5:{
        fontFamily: 'SofiaPro-SemiBold !important',
        fontSize: '20px !important',
        marginBottom: '16px'
      },
      h6:{
        fontFamily: 'SofiaPro-SemiBold !important',
        marginBottom: '16px'
      },
      ol: {
        paddingLeft: '20px !important'
      },
      ul: {
        paddingLeft: '20px !important'
      }
    }
  }
})
