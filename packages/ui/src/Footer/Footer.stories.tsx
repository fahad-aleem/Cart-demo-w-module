import { Story } from "@storybook/react/types-6-0";

import { Footer } from "./Footer";

// This default export determines where your story goes in the story list
export default {
  title: "Footer",
  component: Footer,
};

export const FooterExample = () => {
  return <Footer />;
};
