import { CheckIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import { Story } from "@storybook/react";

import { StatusType } from "../ActivityStatus/ActivityStatusIcon";
import { Toast } from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    status: {
      options: ["notification", "error", "success", "warning"],
      control: {
        type: "select",
      },
    },
  },
};

export const ToastComponent: Story<{ status: StatusType }> = ({
  status,
}: {
  status: StatusType;
}) => {
  const toast = useToast();

  const addToast = () => {
    toast({
      isClosable: true,
      position: "bottom-left",
      /* eslint-disable-next-line react/display-name, react/prop-types */
      render: ({ onClose }) => (
        <Toast
          status={status}
          close={onClose}
          title="Invites Sent"
          description="hello"
          icon={<CheckIcon color="white" />}
          button={
            <Button w="100%" colorScheme="teal">
              Button
            </Button>
          }
        />
      ),
      duration: 3000,
    });
  };

  return (
    <Button colorScheme="teal" onClick={addToast}>
      Show Toast
    </Button>
  );
};

ToastComponent.args = {
  status: "notification",
};
