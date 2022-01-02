import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface AutoSuggestItemProps {
  index: number;
  highLightedIndex: number;
  onSelect: (index: number) => void;
  children: React.ReactNode;
}

export const AutoSuggestItem = ({
  index,
  highLightedIndex,
  onSelect,
  children,
}: AutoSuggestItemProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (index == highLightedIndex) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [highLightedIndex, index]);

  return (
    <Box
      ref={ref}
      borderRadius="base"
      p={3}
      bg={highLightedIndex === index ? "offWhite" : "white"}
      cursor="pointer"
      _hover={{ bg: "gray.100" }}
      onClick={() => onSelect(index)}
    >
      {children}
    </Box>
  );
};
