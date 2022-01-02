import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Icon, IconProps } from "@chakra-ui/react";

interface StatusMap {
  notification: string;
  success: string;
  warning: string;
  error: string;
}
const statusMap: StatusMap = {
  notification: "brightBlue",
  success: "green.400",
  warning: "yellow.400",
  error: "red.400",
};

export type StatusType = keyof StatusMap;
export const ActivityStatusIcon = ({
  status = "notification",
  icon,
  ...rest
}: {
  status?: StatusType;
  icon?: React.ReactNode;
}) => {
  const iconToRender = icon ? (
    <Flex
      bg={statusMap[status]}
      borderRadius="sm"
      width={6}
      height={6}
      justifyContent="center"
      alignItems="center"
      p={1}
    >
      {icon}
    </Flex>
  ) : (
    <Icon
      width={6}
      height={6}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      bg={statusMap[status]}
      borderRadius="sm"
      {...rest}
    >
      <path fill="#fff" d="M7 7h5v5H7zM12 12h5v5h-5z" />
    </Icon>
  );

  return iconToRender;
};

export default ActivityStatusIcon;
