const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: { reactDocgen: "react-docgen" },
  webpackFinal: async config => {
    console.log({ dir: __dirname });
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/css": path.join(
            __dirname,
            "../../../node_modules/@emotion/css"
          ),
          "@emotion/core": path.join(
            __dirname,
            "../../../node_modules/@emotion/react"
          ),
          "emotion-theming": path.join(
            __dirname,
            "../../../node_modules/@emotion/react"
          ),
        },
      },
    };
  },
};
