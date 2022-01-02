import { HStack, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Category {
  name: string;
}
export interface TriggerSearchInput {
  articlesLimit: number;
  articlesStart: number;
  search: string;
}
export const CategoryList = ({
  categories,
  children,
}: {
  categories: Category[];
  children: JSX.Element;
}) => {
  const router = useRouter();

  return (
    <HStack
      spacing={2}
      borderBottom="1px"
      borderColor="gray.300"
      justifyContent="space-between"
      w="100%"
      pr="50px"
      overflowX="hidden"
    >
      <Flex maxW="1280px" overflowX="auto" flexGrow={1}>
        {categories &&
          categories.map((c: any) => {
            return (
              <Link passHref href={"/categories/" + c.slug} key={c.slug}>
                <Text
                  as="a"
                  whiteSpace="nowrap"
                  color={
                    router.asPath === "/categories/" + c.slug + "/"
                      ? "black"
                      : "textGray"
                  }
                  fontWeight="semibold"
                  cursor="pointer"
                  borderBottomWidth="2px"
                  borderBottomColor={
                    router.asPath === "/categories/" + c.slug + "/"
                      ? "goldn"
                      : "transparent"
                  }
                  px="15px"
                  py="10px"
                  _hover={{
                    background: "none",
                    color: "offBlack",
                  }}
                >
                  {c.name}
                </Text>
              </Link>
            );
          })}
      </Flex>
      {children}
    </HStack>
  );
};
