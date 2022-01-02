import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  InputGroup,
  Input,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { cond, equals, isNil } from "ramda";
import { useState } from "react";

import { useClickOutside, useFuzzySearch } from "@goldn/hooks";

import { ItemProps } from "./SuggestionItem";
import { SuggestionsBox } from "./SuggestionsBox";

interface SuggestionInputProps {
  label?: string;
  placeholder?: string;
  applyOnEnter?: boolean;
  onlyProposed?: boolean;
  apply?: (item: string) => void;
  options: ItemProps[];
}

export const SuggestionInput = ({
  label,
  placeholder,
  apply,
  options,
  onlyProposed = false,
}: SuggestionInputProps) => {
  const defaultHighlightedIndex = onlyProposed ? 0 : null;
  const [text, setText] = useState("");
  const search = useFuzzySearch(options, ["text"]);
  const [highLightedIndex, setHighlightedIndex] = useState(
    defaultHighlightedIndex
  );
  const [suggestions, setSuggestions] = useState<ItemProps[]>(null);

  const applyOption = (value?: string) => {
    if (value || text) {
      apply && apply(value || text);
      setText("");
      resetSuggestions();
    }
  };

  const resetSuggestions = () => {
    setSuggestions(null);
    setHighlightedIndex(defaultHighlightedIndex);
  };

  const containerRef = useClickOutside(resetSuggestions);

  const handleNavigation = (direction: "ArrowDown" | "ArrowUp") => {
    if (
      direction === "ArrowDown" &&
      suggestions.length &&
      isNil(highLightedIndex)
    ) {
      return setHighlightedIndex(0);
    }

    if (
      direction === "ArrowUp" &&
      suggestions.length &&
      isNil(highLightedIndex)
    ) {
      return;
    }

    if (
      direction === "ArrowDown" &&
      suggestions.length > highLightedIndex + 1
    ) {
      setHighlightedIndex(highLightedIndex + 1);
    }

    if (direction === "ArrowUp" && highLightedIndex >= 1) {
      setHighlightedIndex(highLightedIndex - 1);
    }
  };

  const handleApply = () => {
    if (onlyProposed && !(suggestions && suggestions.length)) {
      return;
    }

    if (highLightedIndex) {
      applyOption(suggestions[highLightedIndex].text);
    } else {
      applyOption();
    }
  };

  const applySugestion = (index: number) =>
    applyOption(suggestions[index].text);

  const handleKeys = e => {
    cond([
      [equals("Enter"), handleApply],
      [equals("Escape"), resetSuggestions],
      [equals("ArrowDown"), handleNavigation],
      [equals("ArrowUp"), handleNavigation],
    ])(e.key);
  };

  return (
    <Box position="relative" ref={containerRef}>
      {label && (
        <Text fontSize="sm" fontWeight={600}>
          {label}
        </Text>
      )}
      <InputGroup>
        <Input
          placeholder={placeholder}
          value={text}
          onChange={e => {
            const value = e.target.value;

            setText(value);
            const result = search(value);

            if (result.length) {
              setSuggestions(result);
            } else {
              resetSuggestions();
            }
          }}
          onKeyUp={handleKeys}
        />
        <InputRightAddon cursor="pointer" onClick={() => applyOption()}>
          <AddIcon />
        </InputRightAddon>
      </InputGroup>
      <SuggestionsBox
        suggestions={suggestions}
        highLightedIndex={highLightedIndex}
        onSelect={applySugestion}
      />
    </Box>
  );
};
