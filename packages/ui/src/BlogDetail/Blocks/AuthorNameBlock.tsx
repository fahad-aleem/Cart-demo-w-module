import { Text } from "@chakra-ui/react";

export const AuthorNameBlock = ({blogEntry}) => {
  return (
    <Text color="brightGreen" fontWeight="bold">
      {blogEntry && blogEntry.author.name}
    </Text>
  );
};
