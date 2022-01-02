import { Flex, Spinner, Text } from "@chakra-ui/react";

import { loadingSelector, useUpdaterState } from "./useUpdater";

export const UpdateIndicator = () => {
  const { isLoading } = useUpdaterState(loadingSelector);

  return (
    isLoading && (
      <Flex color="brightGreen" alignItems="center">
        <Text>updating...</Text> <Spinner size="xs" />
      </Flex>
    )
  );
};
