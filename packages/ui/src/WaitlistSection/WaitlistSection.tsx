import { Box, Flex, Text, Button, VStack, Link } from "@chakra-ui/react";

export const WaitlistSection = ({ appType }) => {
  return (
    <Box height="400" borderTopWidth="1px" borderTopColor="gray.200" pt="50px">
      <VStack
        height="100%"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text
          fontFamily="SofiaPro-SemiBold"
          fontSize={[40, 48]}
          fontWeight="bold"
          lineHeight={["48px", "56px"]}
          mt="0"
          mb={3}
        >
          Goldn is coming soon!
        </Text>
        <Text mb={6} fontSize="16px" color="gray">
          Stay tuned and sign up for updates.
        </Text>
        <Link
          href="https://goldn.com/signup.html"
          width={["100%", "auto", "auto"]}
        >
          <Button
            bgColor="brightGreen"
            color="white"
            size="lg"
            width={["100%", "56"]}
            maxW="400px"
            height={14}
            fontSize="md"
            fontWeight="medium"
            borderRadius="4px"
            mt="30px !important"
            _hover={{ bgColor: "green.900" }}
          >
            Add me to the waitlist!
          </Button>
        </Link>
        <Flex justifyContent="flex-end" w="100%">
          <img
            src={`/${appType}/invest_logo.png`}
            width="120px"
            height="120px"
            alt="Invest Logo"
            loading="lazy"
          />
        </Flex>
      </VStack>
    </Box>
  );
};
