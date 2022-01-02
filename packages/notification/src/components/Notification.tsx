import { TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Tooltip } from "@chakra-ui/react";

import { ActivityStatus } from "@goldn/ui";

import { getPriorityColor } from "../../constants";

export interface NotificationProp {
  priority: number;
  date: string;
  title: string;
  name?: string;
  avatar: string;
  message: string;
  read: boolean;
}

interface NotificationProps {
  notification: NotificationProp;
  date: string;
  isFirstItem: boolean;
}

export const Notification = ({
  notification,
  date,
  isFirstItem,
}: NotificationProps) => {
  const localTime = new Date(notification.date);

  return (
    <Flex
      borderTop="1px"
      borderColor="offWhite"
      p={1}
      pt={isFirstItem ? "27px" : "16px"}
      w="355px"
      bg={getPriorityColor(notification.priority >= 300)}
      data-testid="notification"
      date={date}
    >
      <ActivityStatus
        avatarBorderColor={getPriorityColor(notification.priority >= 300)}
        name={notification.name}
        avatar={notification.avatar}
      />
      <Box flex="1">
        <Box
          fontSize="sm"
          letterSpacing="-0.01em"
          color="offBlack"
          fontWeight="bold"
          lineHeight="100%"
          mb={0.5}
        >
          {notification.title}
        </Box>
        <Box
          fontSize="sm"
          letterSpacing="-0.01em"
          color="gray"
          lineHeight="140%"
        >
          {notification.message}
        </Box>
      </Box>
      <Box w={6}>
        <Tooltip
          label={localTime.toDateString()}
          aria-label="Time"
          bg="black"
          color="white"
        >
          <TimeIcon
            color="gray"
            boxSize={6}
            padding={1}
            background="offWhite"
            borderRadius="sm"
          />
        </Tooltip>
      </Box>
    </Flex>
  );
};
