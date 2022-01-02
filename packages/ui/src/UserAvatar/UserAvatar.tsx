import { Avatar, AvatarProps } from "@chakra-ui/react";

import { useAvatar } from "@goldn/data";

interface UserAvatarProps extends AvatarProps {
  userID?: string;
  userName?: string;
}
export const UserAvatar = ({ userID, userName, ...rest }: UserAvatarProps) => {
  const { data } = useAvatar<string>(userID, "user");

  return <Avatar name={userName} borderRadius="base" src={data} {...rest} />;
};
