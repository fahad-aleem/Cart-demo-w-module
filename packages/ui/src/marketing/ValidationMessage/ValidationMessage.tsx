import { useToast } from "@chakra-ui/toast";
import React from "react";

interface proptype {
  message: any;
}

export const ValidationMessage = React.memo(({ message }: proptype) => {
  const toast = useToast();

  if (message) {
    return toast({
      title:
        "Service and location filters cannot be used where more than one types are selected",
      status: "warning",
      isClosable: true,
      duration: 9000,
    }) ? (
      <></>
    ) : (
      <></>
    );
  }
  return <> </>;
});
