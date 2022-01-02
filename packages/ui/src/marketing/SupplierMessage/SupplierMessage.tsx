import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const SupplierMessage = () => {
  const { push } = useRouter();

  const clearState = () => {
    push("/suppliers/");
  };

  return (
    <>
      <Box
        textAlign="center"
        bg="white"
        my={10}
        py={10}
        w="100%"
        height={["400px", "616px"]}
      >
        <Heading
          fontFamily="SofiaPro-SemiBold"
          fontSize={[24, 26]}
          lineHeight="32px"
          maxW="400px"
          mx="auto"
          mt={3}
        >
          Sorry, we couldn’t find any matching suppliers.
        </Heading>
        <Link href="#">
          <Button
            as="a"
            variant="ghost"
            fontSize="lg"
            color="brightGreen"
            borderColor="brightGreen"
            borderRadius="sm"
            boxShadow="none"
            mt={3}
            onClick={clearState}
          >
            View all suppliers
          </Button>
        </Link>
      </Box>
    </>
  );
};
