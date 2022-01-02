import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";

import { LoginOrLogoutButton } from "@goldn/authentication";
import { User } from "@goldn/data";

import { UserAvatar } from "../UserAvatar/UserAvatar";

interface StyledMenuItemProps {
  children: React.ReactNode;
}
const StyledMenuItem = ({ children }: StyledMenuItemProps) => (
  <MenuItem
    px={4}
    py={2.5}
    borderRadius="base"
    fontWeight="bold"
    fontSize="sm"
    lineHeight={5}
    bg="offBlack"
    color="textGray"
    _hover={{
      bg: "gray",
      color: "white",
    }}
  >
    {children}
  </MenuItem>
);

export const UserMenu = ({
  user,
  logout,
}: {
  user: User;
  logout: () => void;
}) => {
  return (
    <Menu autoSelect={false}>
      <MenuList bg="black" color="gray.400" borderRadius="base" px={4} py={4}>
        <Link href="/settings/personal">
          <MenuItem borderRadius="base" fontWeight="bold">
            Account settings
          </MenuItem>
        </Link>
        <Link href="/directory/active">
          <MenuItem borderRadius="base" fontWeight="bold">
            User Directory
          </MenuItem>
        </Link>
        <MenuItem borderRadius="base" fontWeight="bold">
          <LoginOrLogoutButton user={user} logout={logout} />
        </MenuItem>
      </MenuList>
      <MenuButton>
        <UserAvatar userName={user?.name} userID={user?.id} />
      </MenuButton>
    </Menu>
  );
};
