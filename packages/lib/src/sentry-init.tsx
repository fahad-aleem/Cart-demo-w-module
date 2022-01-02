import * as Sentry from "@sentry/browser";
import { CaptureConsole as CaptureConsoleIntegration } from "@sentry/integrations/dist/captureconsole";

interface SentryProps {
  sentryConnectionString: string;
  environment: string;
  ignoreUrls?: string[];
}

export const initSentry = ({
  sentryConnectionString,
  environment,
  ignoreUrls,
}: SentryProps) => {
  if (process.env.NODE_ENV === "production") {
    if (sentryConnectionString) {
      Sentry.init({
        dsn: sentryConnectionString,
        environment,
        denyUrls: ignoreUrls,
        integrations: [
          new CaptureConsoleIntegration({
            levels: ["error"],
          }),
        ],
      });
    } else {
      console.error(
        "Could not connect to sentry because connection string is missing in env."
      );
    }
  }
};
