import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "./style.css";

import { initUrls } from "@goldn/data";
import { useFavicon } from "@goldn/hooks";
import { initSentry, GoogleTagManager } from "@goldn/lib";
import { blogTheme, Fonts } from "@goldn/ui";

import { LayoutComponent } from "../components/LayoutComponent";
import { useEffect } from "react";
import router from "next/router";

initSentry({
  sentryConnectionString: process.env.SENTRY_DSN,
  environment: process.env.APP_ENV,
});

initUrls(
  {
    backend: process.env.STRAPI_API_URL,
  },
  "backend"
);

function App({ Component, pageProps }: AppProps) {
  const { favicon, manifest } = useFavicon();

  useEffect(() => {
    const handleStart = (url: string) => {
      const windowPath = window.location.pathname;
      const targetPath: string = url.split("?")[0];

      /**
       * due to an issue in nextjs with queryParams on trailingSlash: true
       * it still tries to redirect without /
       * Workaround: we throw an error if basePath's are equal and only differ by trailing slash
       */
      const isSlashRedirect =
        windowPath.includes(targetPath) &&
        windowPath.length === targetPath.length + 1 &&
        windowPath.endsWith("/");

      if (isSlashRedirect) {
        throw "Abort due to slash-redirect";
      }
    };

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Goldn Blog</title>
        <link
          rel="shortcut icon"
          id="favicon"
          type="image/png"
          href={`/blog${favicon}`}
        />
        <link rel="manifest" id="manifest" href={`/blog${manifest}`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GoogleTagManager GTM_ID={process.env.GTM_ID}>
        <ChakraProvider resetCSS theme={blogTheme}>
          <Fonts />
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </ChakraProvider>
      </GoogleTagManager>
    </>
  );
}

export default App;
