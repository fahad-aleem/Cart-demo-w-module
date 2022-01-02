import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { HeaderMenu, MobileMenu } from "@goldn/ui";

const Header = () => {
  return (
    <Flex
      as="nav"
      align={["flex-start", "center"]}
      justify="space-between"
      wrap="wrap"
      pt={{ base: "25px", sm: "35px" }}
      pb={6}
      mb={["15px", "30px", "50px"]}
      flexDirection={["column", "row"]}
    >
      <Flex align="center" mr={5} pos="relative">
        <Link href="https://goldn.com/">
          <a>
            <img
              src="/supplierlist/logo.png"
              width="96px"
              height="28px"
              alt="Logo"
              loading="lazy"
            />
          </a>
        </Link>
      </Flex>

      <Box d={{ base: "none", md: "block" }}>
        <HeaderMenu />
      </Box>

      <Box d={{ base: "block", md: "none" }} w="100%" mt="-23px">
        <MobileMenu />
      </Box>
    </Flex>
  );
};

export default Header;
