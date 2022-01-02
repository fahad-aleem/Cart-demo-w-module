import { ChakraProvider } from "@chakra-ui/react";
import firebase from "firebase/app";
import { AppProps } from "next/app";
import Head from "next/head";
import "./style.css";

import { useFavicon } from "@goldn/hooks";
import { theme, Fonts } from "@goldn/ui";

import { LayoutComponent } from "../components/LayoutComponent";

function App({ Component, pageProps }: AppProps) {
  const { favicon, manifest } = useFavicon();

  return (
    <>
      <Head>
        <title>Goldn Supplier</title>
        <link
          rel="shortcut icon"
          id="favicon"
          type="image/png"
          href={`/supplierlist${favicon}`}
        />
        <link rel="manifest" id="manifest" href={`/supplierlist${manifest}`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ChakraProvider>
    </>
  );
}

export default App;
