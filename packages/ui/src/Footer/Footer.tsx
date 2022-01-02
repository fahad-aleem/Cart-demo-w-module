import { Flex, Icon, Text, Link } from "@chakra-ui/react";

import { GlobeIcon, LinkedinIcon, InstagramIcon } from "@goldn//icons";

export const Footer = () => {
  return (
    <Flex as="footer"
      flexDir={{ base: "column", lg: "row" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      justifyContent="space-between"
      color="white"
      bg="gray.800"
      px={8} py={6}
    >
      <Text mb={['20px','20px','20px', '0']}>
        <Icon w="20px" h="20px" viewBox="0 0 20 20" mr="5px"> <GlobeIcon /> </Icon>{" "}
        English
      </Text>

      <Flex 
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "flex-start", lg: "center" }}
        justifyContent="space-around"
        width={{ base: "100%", lg: "50%" }}
      >
        <Text>
          <Link href="mailto:info@goldn.com">
            info@goldn.com
          </Link>
        </Text>

        <Text>
          <Link href="https://www.goldn.com/term-privacy.html">
            Terms &amp; Privacy
          </Link>
        </Text>

        <Text my={['20px','20px','20px', '0']}>
          <Link href="https://www.linkedin.com/company/goldn-gmbh" target="_blank" rel="nofollow" mr="30px">
            <Icon w="24px" h="24px" viewBox="0 0 26 26">
              <LinkedinIcon />
            </Icon>
          </Link>

          <Link href="https://www.instagram.com/goldn_us/?igshid=fx9f77knx9up" target="_blank" rel="nofollow">
            <Icon w="24px" h="24px" viewBox="0 0 24 22">
              <InstagramIcon />
            </Icon>
          </Link>
        </Text>
      </Flex>

      <Text as="span" d="block" fontSize="xs" fontWeight="600">
        &copy; 2021 all rights reserved <br />
        Goldn is a registered trademark of Goldn Gmbh
      </Text>
    </Flex>
  );
};
