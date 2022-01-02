import { Box, Text, Flex } from "@chakra-ui/react";

import { ScrollableContainer } from "../ScrollableContainer/ScrollableContainer";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { AutoSuggestItem } from "./AutoSuggestItem";
import { ItemProps } from "./SuggestionItem";

interface SuggestionsBoxProps {
  suggestions: ItemProps[];
  highLightedIndex: number;
  onSelect: (index: number) => void;
}

export const SuggestionsBox = ({
  suggestions,
  onSelect,
  highLightedIndex,
}: SuggestionsBoxProps) => {
  return (
    <>
      {suggestions && (
        <Box
          borderRadius="base"
          border="1px"
          color="black"
          mt={2}
          p={2}
          zIndex="dropdown"
          width="auto"
          position="absolute"
          bg="white"
          w="100%"
          onKeyDown={console.log}
        >
          <ScrollableContainer maxHeight="286px" p={2}>
            {suggestions.map((s, i) => {
              return (
                <AutoSuggestItem
                  onSelect={onSelect}
                  key={i}
                  highLightedIndex={highLightedIndex}
                  index={i}
                >
                  <Flex>
                    {s.userID && <UserAvatar mr={2.5} size="xs" />} {s.text}
                    {s.textAddon && (
                      <Text
                        ml={2.5}
                        size="sm"
                        fontWeight={400}
                        color="gray.600"
                      >
                        {s.textAddon}
                      </Text>
                    )}
                  </Flex>
                </AutoSuggestItem>
              );
            })}
          </ScrollableContainer>
        </Box>
      )}
    </>
  );
};
