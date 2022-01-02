import { Heading } from "@chakra-ui/react";

export const ArticleTitleBlock = ({ blogEntry }) => {
  return (
    <Heading
      as="h1"
      fontFamily="SofiaPro-SemiBold"
      fontSize={["40px !important", "48px !important"]}
      lineHeight={["48px", "56px"]}
      mb={4}
    >
      {blogEntry && blogEntry.title}
    </Heading>
  );
};
