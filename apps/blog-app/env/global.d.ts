/// <reference types="next/types/global" />

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly STAGE: string;

    readonly GTM_ID: string;

    readonly SENTRY_DSN: string;

    readonly AUTH0_DOMAIN: string;
    readonly AUTH0_CLIENT_ID: string;
    readonly AUTH0_REDIRECT_URI: string;

    readonly PUSHER_CLUSTER: string;
    readonly PUSHER_APP_KEY: string;
    readonly PUSHER_CHANNEL_NAME: string;

    readonly AVATAR_URL: string;
    readonly AVATAR_SERVICEURL: string;
    readonly GATEWAY_URL: string;
  }
}
