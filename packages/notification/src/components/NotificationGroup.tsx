import { Box, Flex } from "@chakra-ui/react";

import { getPriorityColor } from "../../constants";
import { Notification, NotificationProp } from "./Notification";

interface NotificationGroupProps {
  notificationGroup: NotificationProp[];
  date: string;
}

export const NotificationGroup = ({
  notificationGroup,
  date,
}: NotificationGroupProps) => {
  // Get last notification item to see what the background color should be
  const notification = notificationGroup[notificationGroup.length - 1];
  const backgroundColor = getPriorityColor(notification.priority >= 300);

  const today = new Date();

  return (
    <Box paddingBottom="20px" backgroundColor={backgroundColor}>
      <Flex justifyContent="center" h="0px" bg="white">
        <Box
          pos="relative"
          bottom={3.5}
          bg="white"
          border="1px"
          borderColor="black"
          borderRadius="sm"
          fontSize="xs"
          p={3}
          lineHeight="1px"
        >
          {date === today.toDateString() ? "Today" : date}
        </Box>
      </Flex>
      {notificationGroup.map((notification, index) => {
        return (
          <Notification
            key={index}
            notification={notification}
            date={date}
            isFirstItem={index === 0}
          />
        );
      })}
    </Box>
  );
};
