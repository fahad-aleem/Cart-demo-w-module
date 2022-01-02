import { Avatar, Flex, Box } from "@chakra-ui/react";

import { ActivityStatusIcon, StatusType } from "./ActivityStatusIcon";

export interface ActivityStatusProps {
  avatarBorderColor?: string;
  name?: string;
  icon?: React.ReactNode;
  avatar?: string;
  status?: StatusType;
}

export const ActivityStatus = ({
  avatarBorderColor,
  name,
  icon,
  avatar,
  status,
}: ActivityStatusProps) => {
  return (
    <Flex marginRight={3.5} alignItems="center">
      <ActivityStatusIcon status={status} icon={icon} />
      {avatarBorderColor && avatar && (
        <Box
          border="2px"
          borderRadius="base"
          color={avatarBorderColor}
          ml="-2px"
        >
          <Avatar
            size="xs"
            name={name}
            borderRadius="sm"
            color="white"
            src={avatar}
          />
        </Box>
      )}
    </Flex>
  );
};
