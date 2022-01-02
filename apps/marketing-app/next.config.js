const dotenv = require("dotenv");
const withPlugins = require("next-compose-plugins");

const { dependencies } = require("./package.json");

const STAGE_ENV = dotenv.config({
  path: `./env/.env.${process.env.STAGE || "development"}`,
});
const DEFAULT_ENV = dotenv.config({
  path: `./env/.env`,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withTM = require("next-transpile-modules")(
  Object.keys(dependencies || []).filter(dependency =>
    dependency.startsWith("@goldn/")
  )
);

module.exports = withPlugins([[withTM], [withBundleAnalyzer]], {
  trailingSlash: true,
  basePath: "/supplierlist",
  env: {
    ...DEFAULT_ENV.parsed,
    ...STAGE_ENV.parsed,
  },
  future: {
    webpack5: true,
  },
});
