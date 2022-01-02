import { Avatar, Box, Button, Flex, Text, TextProps } from "@chakra-ui/react";

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

export interface PendingMemberCardProps {
  user: PendingInvites;
  handleResend?: () => void;
  handleRevoke?: () => void;
}

export interface PendingInvites {
  id: string;
  email: string;
}

export const PendingMemberCard = ({
  user,
  handleResend,
  handleRevoke,
}: PendingMemberCardProps) => {
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
        <Avatar w={24} h={24} borderRadius="base" name={user.email} />
      </Box>
      <Flex height="100%" width="100%" px={2.5} alignItems="center">
        <Box>
          <CardDataLabel mb={1}>Email address</CardDataLabel>
          <MemberAttributeHeadline>{user.email}</MemberAttributeHeadline>
        </Box>
      </Flex>

      <Flex>
        <Button
          bg="brightGreen"
          color="white"
          mx={1}
          _hover={{
            bg: "green.900",
          }}
          onClick={handleResend}
        >
          Resend Invite
        </Button>
        <Button
          bg="offWhite"
          color="offBlack"
          mx={1}
          _hover={{
            bg: "grey.200",
          }}
          onClick={handleRevoke}
        >
          Cancel Invite
        </Button>
      </Flex>
    </Flex>
  );
};
