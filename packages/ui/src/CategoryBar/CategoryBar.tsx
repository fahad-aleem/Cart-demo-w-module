import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  HStack,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface CategoryBarProps {
  name: string;
  slug: string;
  id: string;
}
export interface TriggerSearchInputBar {
  articlesLimit: number;
  articlesStart: number;
  search: string;
}

export const CategoryBar = ({
  children,
  categories,
}: {
  categories: CategoryBarProps[];
  children: JSX.Element;
}) => {
  const { slug } = useRouter().query;

  const slugCasted = slug as string;

  return (
    <HStack
      spacing={2}
      justifyContent="space-between"
      overflowX="hidden"
      h="45px"
      w="100%"
      pr="40px"
    >
      <Flex w="100%">
        <Text color="textGray" minW="85px" fontSize="md">
          Category
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="transparent !important"
            fontWeight="bold"
            fontSize="md"
            h="auto"
            py="0"
            pl="0"
            pr="0"
            minW="150px"
            boxShadow="none"
            textAlign="left"
            pos="relative"
            zIndex="1"
            color="gray.500"
            textTransform="capitalize"
            maxW="100%"
            _focus={{ bg: "transparent", boxShadow: "none" }}
          >
            <Text color="black">
              {slugCasted?.replace(/-/g, " ") || "All"}{" "}
            </Text>
          </MenuButton>

          <MenuList className="menubarList">
            {categories.map(element => (
              <MenuItem
                key={element.id}
                bg="transparent !important"
                fontWeight="600"
                color="gray.500"
              >
                <Link href={"/categories/" + element.slug}>
                  <a>{element.name}</a>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      {children}
    </HStack>
  );
};
