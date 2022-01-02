import { Box } from "@chakra-ui/react";
import { ChangeEvent } from "react";

import { ActivityHeading } from "./ActivityHeading";
import { NotificationProp } from "./Notification";
import { NotificationGroup } from "./NotificationGroup";

const groupNotificationsByDate = (
  notifications: NotificationProp[]
): GroupedNotifications => {
  if (!notifications) return;

  const grouped = {};

  notifications.forEach(notification => {
    const notificationDate = new Date(notification.date);

    if (grouped[notificationDate.toDateString()]) {
      grouped[notificationDate.toDateString()].push(notification);
    } else {
      grouped[notificationDate.toDateString()] = [notification];
    }
  });

  return grouped as GroupedNotifications;
};

interface GroupedNotifications {
  [date: string]: NotificationProp[];
}

interface ListProps {
  notifications: NotificationProp[];
  priority: string;
  togglePrioritySwitch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const List = ({
  notifications,
  priority,
  togglePrioritySwitch,
}: ListProps) => {
  const groupedNotificationsByDate = groupNotificationsByDate(notifications);

  return (
    <Box
      position="relative"
      borderRadius="base"
      maxH="3xl"
      overflowY="auto"
      bg="white"
    >
      <ActivityHeading
        priority={priority}
        togglePrioritySwitch={togglePrioritySwitch}
      />
      {groupedNotificationsByDate &&
        Object.keys(groupedNotificationsByDate).map((key, index) => (
          <NotificationGroup
            key={index}
            notificationGroup={groupedNotificationsByDate[key]}
            date={key}
          />
        ))}
    </Box>
  );
};
