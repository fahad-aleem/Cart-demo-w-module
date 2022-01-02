import { Box, Button, Divider, Text, Icon } from "@chakra-ui/react";

import { useUser } from "@goldn/authentication";
import { GoogleIcon } from "@goldn/icons";

export const LoginLeftContent: React.FC = () => {
  const authorize = useUser("authorize");

  return (
    <>
      <Button
        borderRadius="md"
        py={6}
        mt={8}
        mr={7}
        colorScheme="blue"
        variant="outline"
        color="black"
        borderColor="blue.500"
        bgColor="white"
        onClick={authorize}
      >
        <Icon mr={3}>
          <GoogleIcon />
        </Icon>
        Sign in with Google
      </Button>
      <Box height={16}>
        <Divider
          px={4}
          py={1}
          mt={7}
          orientation="vertical"
          borderLeftWidth="2px"
          borderLeftColor="gray.300"
        />
        <Text
          color="gray.600"
          display="inline-block"
          position="relative"
          right={2}
        >
          or
        </Text>
        <Divider
          py={1}
          px={4}
          orientation="vertical"
          borderLeftWidth="2px"
          borderLeftColor="gray.300"
        />
      </Box>
    </>
  );
};
