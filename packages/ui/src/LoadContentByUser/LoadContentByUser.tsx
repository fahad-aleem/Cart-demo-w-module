import { Spinner, Center } from "@chakra-ui/react";
import { isEmpty } from "ramda";

import { AuthUser, useUser } from "@goldn/authentication";

export const LoadContentByUser = ({
  children,
  shouldHave,
}: {
  children: React.ReactNode;
  shouldHave?: keyof AuthUser;
}) => {
  const listener = useUser(shouldHave);

  if (!listener || isEmpty(listener)) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return <>{children}</>;
};
