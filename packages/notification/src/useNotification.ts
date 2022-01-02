import Pusher, { Channel } from "pusher-js";
import { useState, useEffect } from "react";

const CONNECTION_TYPE_CONNECTED = "connected";

interface UseNotificationsReturnType {
  socketId: string;
  pusher: Pusher;
  channel: Channel;
  initializeNotifications: () => void;
}

export const useNotification = (
  eventNames: string[],
  channelBindCallback: (data: any) => void
): UseNotificationsReturnType => {
  const [socketId, setSocketId] = useState("");
  const [pusher, setPusher] = useState<Pusher>(null);
  const [channel, setChannel] = useState<Channel>(null);

  const initializeNotifications = () => {
    const pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
    });

    pusher.connection.bind(CONNECTION_TYPE_CONNECTED, () => {
      if (pusher.connection.socket_id) {
        setSocketId(pusher.connection.socket_id);
      }
    });

    const channel = pusher.subscribe(process.env.PUSHER_CHANNEL_NAME);

    eventNames.map(eventName => {
      channel.bind(eventName, data => channelBindCallback(data));
    });

    setChannel(channel);
    setPusher(pusher);
  };

  useEffect(() => {
    initializeNotifications();

    return () => {
      if (channel) {
        eventNames.map(eventName => {
          channel.unbind(eventName);
        });
      }

      if (pusher) {
        pusher.unsubscribe(process.env.PUSHER_CHANNEL_NAME);
        pusher.disconnect();
      }
    };
  }, []);

  return { socketId, pusher, channel, initializeNotifications };
};
