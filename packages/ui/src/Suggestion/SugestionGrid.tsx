import { SimpleGrid, Button, Box } from "@chakra-ui/react";
import { findLastIndex, propEq, splitAt } from "ramda";
import { useEffect, useState } from "react";

import { Hint } from "../Typography/Hint";
import { SuggestionItem, ItemProps, ToggleItem } from "./SuggestionItem";

interface SuggestionGridProps {
  options?: ItemProps[];
  toggle?: ToggleItem;
  paginateSize?: number;
  columns?: number;
}

export const SuggestionGrid = ({
  options = [],
  toggle,
  paginateSize = 15,
  columns = 3,
}: SuggestionGridProps) => {
  const [amountToShow, setAmountToShow] = useState(paginateSize);
  const [showedList, hiddenItems] = splitAt(amountToShow, options);
  const paginate = () => setAmountToShow(amountToShow + paginateSize);

  useEffect(() => {
    const lastSelectedPos =
      findLastIndex(propEq("selected", true))(options) + 1;

    if (lastSelectedPos > 0) {
      const factor = options.reduce((acc, curr, currentIndex) => {
        if (curr.selected) {
          return Math.ceil((currentIndex + 1) / paginateSize);
        }

        return acc;
      }, 1);

      const minSize = factor * paginateSize;

      if (amountToShow < minSize) {
        setAmountToShow(minSize);
      }
    }
  }, [amountToShow, options, paginateSize]);

  if (options.length === 0) {
    return null;
  }

  return (
    <Box mt={2}>
      <SimpleGrid columns={columns} spacing={2}>
        {showedList.map(o => (
          <SuggestionItem key={o.text} {...o} toggle={toggle} />
        ))}
      </SimpleGrid>
      {hiddenItems.length > 0 && (
        <>
          <Button mt={2} onClick={paginate} w="100%" fontSize="sm">
            Show more suggestion
          </Button>
          <Hint mt={2}>
            Select all that apply. To remove a selection, simply select the
            option again.
          </Hint>
        </>
      )}
    </Box>
  );
};
