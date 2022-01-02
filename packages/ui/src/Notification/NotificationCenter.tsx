import { Box } from "@chakra-ui/react";
import React, { ChangeEvent, useState, useEffect } from "react";

import {
  ActivityButton,
  List,
  NotificationProp,
  PRIORITY_ALL,
  PRIORITY_FILTER,
} from "@goldn/notification";

import { sampleNotifications } from "./sampledata";

export const NotificationCenter = () => {
  const [activityButton, setActivityButton] = useState(false);
  const [notifications, setNotifications] = useState<NotificationProp[]>([]);
  const [priority, setPriority] = useState("all");

  useEffect(() => {
    setNotifications(sampleNotifications);
  }, []);

  const priorityRule = (notification: NotificationProp): boolean => {
    return notification.priority >= 300;
  };

  const handleNotificationListToggle = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();

    if (priority === PRIORITY_ALL) {
      setNotifications(notifications.filter(priorityRule));
    } else {
      setNotifications(sampleNotifications);
    }

    setPriority(priority === PRIORITY_ALL ? PRIORITY_FILTER : PRIORITY_ALL);
  };

  return (
    <Box position="relative">
      <Box
        data-testid="activity-button"
        onClick={() => setActivityButton(activityButton ? false : true)}
        _hover={{ filter: "drop-shadow(0px 4px 20px rgba(5, 5, 5, 0.12));" }}
      >
        <ActivityButton />
      </Box>
      {activityButton && (
        <Box position="absolute" top="0" left={64}>
          <List
            priority={priority}
            notifications={notifications}
            togglePrioritySwitch={handleNotificationListToggle}
          />
        </Box>
      )}
    </Box>
  );
};
