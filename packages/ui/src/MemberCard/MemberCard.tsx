import { Avatar, Badge, Box, Flex, Text, TextProps } from "@chakra-ui/react";

import { ColleagueRole, useAvatar, UserStatus } from "@goldn/data";

export interface ActiveUser {
  id?: string;
  name?: string;
  displayName?: string;
  email: string;
  title?: string;
  role?: ColleagueRole;
  status: UserStatus;
}

type CardDataTextProps = {
  children: React.ReactNode;
} & TextProps;
const MemberAttributeHeadline = ({ children, ...rest }: CardDataTextProps) => (
  <Text fontWeight="600" fontSize="lg" lineHeight="20.7px" {...rest}>
    {children}
  </Text>
);

type CardDataLabelProps = {
  children: React.ReactNode;
} & TextProps;
const CardDataLabel = ({ children, ...rest }: CardDataLabelProps) => (
  <Text
    fontWeight="600"
    fontSize="sm"
    lineHeight="16.8px"
    color="gray.500"
    {...rest}
  >
    {children}
  </Text>
);

export interface MemberCardProps {
  user: ActiveUser;
}

export const MemberCard = ({ user }: MemberCardProps) => {
  const { data } = useAvatar<string>(user.id, "user");

  return (
    <Flex
      position="relative"
      justifyContent="space-between"
      minH="136px"
      minW="2xl"
      width="100%"
      border="1px"
      borderColor="offWhite"
      borderRadius="base"
      transition="box-shadow 0.2s, border-color 0.2s"
      _hover={{
        shadow: "lg",
        borderColor: "goldn",
      }}
      alignItems="center"
      p={5}
      mb={2.5}
    >
      <Box p={2} mr={7} border="1px" borderColor="offWhite" borderRadius="base">
        <Avatar
          w={24}
          h={24}
          borderRadius="base"
          filter={
            status || user.status === UserStatus.DEACTIVATED
              ? "grayscale(1)"
              : "none"
          }
          src={data}
          name={user?.name}
        />
      </Box>

      <Flex height="100%" width="100%" px={2.5} alignItems="center">
        <Box>
          <MemberAttributeHeadline mb={1}>{user?.name}</MemberAttributeHeadline>
          <CardDataLabel>{user?.displayName}</CardDataLabel>
        </Box>
      </Flex>
      {user.title && (
        <Flex height="100%" width="100%" px={2.5} alignItems="center">
          <Box>
            <CardDataLabel mb={1}>Job title</CardDataLabel>
            <MemberAttributeHeadline>{user.title}</MemberAttributeHeadline>
          </Box>
        </Flex>
      )}
      <Flex height="100%" width="100%" px={2.5} alignItems="center">
        <Box>
          <CardDataLabel mb={1}>Email address</CardDataLabel>
          <MemberAttributeHeadline>{user.email}</MemberAttributeHeadline>
        </Box>
      </Flex>
      <Badge
        position="absolute"
        right="0"
        top="0"
        mr={5}
        mt={5}
        px={3}
        py={1.5}
        fontSize="xs"
        lineHeight={3}
      >
        {user.role}
      </Badge>
    </Flex>
  );
};
