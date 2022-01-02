import { Story } from "@storybook/react";
import { useEffect } from "react";

import { useUpdaterState } from "../UpdateIndicator";
import { PageHeader } from "./PageHeader";

export default {
  title: "PageHeader",
  component: PageHeader,
};

interface PageHeaderArgs {
  showLoader: boolean;
}

export const PageHeaderComponent: Story<PageHeaderArgs> = ({
  showLoader,
}: PageHeaderArgs) => {
  const { hideUpdater, showUpdater } = useUpdaterState();

  useEffect(() => {
    if (showLoader) {
      showUpdater();
    } else {
      hideUpdater();
    }
  }, [hideUpdater, showLoader, showUpdater]);
  return <PageHeader header="Page title" />;
};
PageHeaderComponent.args = {
  showLoader: false,
};
