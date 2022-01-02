import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface GoldnWindow extends Window {
  dataLayer?: any[];
}

const getDataLayer = () => (window as GoldnWindow).dataLayer || [];

export const pushToDataLayer = (obj: Record<string, unknown>) => {
  getDataLayer().push(obj);
};

export const pageview = (url: string) => {
  pushToDataLayer({
    event: "pageview",
    page: url,
  });
};

interface GTMProps {
  children: React.ReactNode;
  GTM_ID: string;
}

export const GoogleTagManager = ({ children, GTM_ID }: GTMProps) => {
  const router = useRouter();
  const shouldRenderGTM = !!GTM_ID;

  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);

    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {shouldRenderGTM && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
        )}
      </Head>
      {shouldRenderGTM && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
      {children}
    </>
  );
};
