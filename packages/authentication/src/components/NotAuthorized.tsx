import { Center, Container, Text, Flex } from "@chakra-ui/react";

import { PermissionsType } from "../Permissions";

export const NotAuthorized = ({
  permission,
}: {
  permission: PermissionsType;
}) => {
  return (
    <Container>
      <Center>
        <Flex flexDirection="column">
          <Text>you dont have the permission to see this page</Text>
          <Text>
            you need the following permission: <b>{permission}</b>
          </Text>
        </Flex>
      </Center>
    </Container>
  );
};
