import { Flex, Stack, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import "firebase/firestore";

interface proptype {
  smScreen: boolean;
  type: string;
  link: string;
}
export const SupplierTile = ({ smScreen = false, type, link }: proptype) => {
  return (
    <>
      {smScreen ? (
        <Link passHref href={`/suppliers/${link}/${type}`}>
          <Flex
            as="a"
            maxWidth={["100%", "300"]}
            width="100%"
            minHeight={["56px", "104px"]}
            bg="white"
            mx="auto"
            p={["4", "5"]}
            alignItems="flex-start"
            borderRadius="md"
            boxShadow="sm"
            overflow="hidden"
            cursor="pointer"
          >
            <Box>
              <Text
                fontFamily="SofiaPro-SemiBold"
                fontSize={["lg", "20px"]}
                fontWeight="bold"
                lineHeight={["1.3", "26px"]}
                value={type}
              >
                {type}
              </Text>
            </Box>
          </Flex>
        </Link>
      ) : (
        <Link passHref href={`/suppliers/${link}/${type}`}>
          <Stack
            as="a"
            maxWidth={["100%", "300"]}
            width="100%"
            minHeight={["81px", "104px"]}
            bg="white"
            mx="auto"
            p={["4", "5"]}
            alignItems="flex-start"
            justifyContent="center"
            borderRadius="md"
            boxShadow="sm"
            overflow="hidden"
            cursor="pointer"
          >
            <Box>
              <Text
                fontFamily="SofiaPro-SemiBold"
                fontSize={["lg", "xl"]}
                fontWeight="bold"
                lineHeight={["1.3", "26"]}
                value={type}
              >
                {type}
              </Text>
            </Box>
          </Stack>
        </Link>
      )}
    </>
  );
};
