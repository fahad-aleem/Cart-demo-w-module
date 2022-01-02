import { Button, useToast } from "@chakra-ui/react";

export const AlertMessage = () => {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Warning.",
          description: "This is a warning.",
          status: "warning",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Warning Toast
    </Button>
  );
};
