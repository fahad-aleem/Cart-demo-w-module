import { Box } from "@chakra-ui/react";
import Link from "next/link";

export const LoginOrLogoutButton = ({
  user,
  logout,
}: {
  user;
  logout: () => void;
}) => {
  return user ? (
    <Box onClick={() => logout()}>Log Out</Box>
  ) : (
    <Link href="/user/login" passHref>
      <Box as="a">Log In</Box>
    </Link>
  );
};
