import { Box } from "@chakra-ui/react";
import { ChangeEvent, useState, useEffect } from "react";

import { PRIORITY_ALL, PRIORITY_FILTER } from "../constants";
import { ActivityButton } from "../img/ActivityButton";
import { List } from "./components/List";
import { NotificationProp } from "./components/Notification";

export const NotificationCenter = () => {
  const [activityButton, setActivityButton] = useState(false);
  const [notifications, setNotifications] = useState<NotificationProp[]>([]);
  const [priority, setPriority] = useState("all");

  useEffect(() => {
    setNotifications(null);
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
      setNotifications(null);
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
        <Box pos="absolute" top="0" left={64}>
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
