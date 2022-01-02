import { BoxProps, Flex, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor?: string;
} & BoxProps;

export const SidebarIcon = ({
  href,
  icon,
  label,
  hoverColor = "white",
  ...rest
}: Props) => {
  return (
    <Flex
      role="group"
      cursor="pointer"
      borderRadius="base"
      w={10}
      p={2.5}
      mb={2}
      _hover={{ bg: hoverColor, w: "100%" }}
      transition="all .4s"
      boxShadow="base"
      fontSize="sm"
      fontWeight="bold"
      {...rest}
    >
      <Link href={href} passHref>
        <Center as="a">
          <Center>{icon}</Center>
          <Text
            m={0}
            ml={2}
            lineHeight={0}
            transition="opacity .2s"
            opacity={0}
            overflow="hidden"
            _groupHover={{
              opacity: 1,
              visibility: "visible",
              overflow: "inherit",
            }}
          >
            {label}
          </Text>
        </Center>
      </Link>
    </Flex>
  );
};
