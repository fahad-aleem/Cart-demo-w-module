import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`

        @font-face {
          font-family: "SofiaPro-SemiBold";
          src: url('/blog/webFonts/SofiaProSemiBold.woff2') format('woff2'),
              url('/blog/webFonts/SofiaProSemiBold.woff') format('woff');
          font-display: swap;
        }
        
        @font-face {
          font-family: "SofiaPro-SemiBold";
          src: url('/supplierlist/webFonts/SofiaProSemiBold.woff2') format('woff2'),
              url('/supplierlist/webFonts/SofiaProSemiBold.woff') format('woff');
          font-display: swap;
        }


    `}
  />
);
