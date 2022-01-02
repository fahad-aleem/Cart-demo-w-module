import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const LoginHeading = () => (
  <Box my={10}>
    <Heading my={3}>Sign in</Heading>
    <Box fontSize="sm" color="gray.400">
      <Text display="inline-block" mr={2}>
        Do not have an account?
      </Text>
      <Text display="inline-block" color="green" ml={1}>
        <Link href="/user/signup">
          <a>Create account</a>
        </Link>
      </Text>
    </Box>
  </Box>
);
