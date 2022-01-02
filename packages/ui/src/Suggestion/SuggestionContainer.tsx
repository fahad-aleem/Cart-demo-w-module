import { findIndex, propEq, adjust, assoc, uniq } from "ramda";
import { useState } from "react";

import { SuggestionGrid } from "./SugestionGrid";
import { SuggestionInput } from "./SuggestionInput";
import { ItemProps } from "./SuggestionItem";

export interface SuggestionContainerProps {
  inputLabel?: string;
  inputPlaceholder?: string;
  options?: ItemProps[];
  applyOnEnter?: boolean;
  columns?: number;
  pageSize?: number;
  onChange: (values: string[]) => void;
  onlyProposed?: boolean;
  onChangeProp?: "text" | "userID";
}

export const SuggestionContainer = ({
  inputLabel,
  inputPlaceholder,
  options,
  applyOnEnter,
  columns,
  pageSize,
  onChange,
  onlyProposed = false,
  onChangeProp = "text",
}: SuggestionContainerProps) => {
  const [proposedOptions, setOptions] = useState<ItemProps[]>(options);

  const toggleOption = (itemName: string, selected = true) => {
    const itemIndex = findIndex(propEq("text", itemName))(proposedOptions);
    let output: ItemProps[];

    if (itemIndex > -1) {
      output = adjust(itemIndex, assoc("selected", selected))(proposedOptions);
    } else {
      output = [{ text: itemName, selected: true }, ...proposedOptions];
    }

    setOptions(output);
    onChange(uniq(output.filter(p => p.selected).map(p => p[onChangeProp])));
  };

  return (
    <>
      <SuggestionInput
        onlyProposed={onlyProposed}
        label={inputLabel}
        apply={toggleOption}
        placeholder={inputPlaceholder}
        applyOnEnter={applyOnEnter}
        options={proposedOptions}
      />
      <SuggestionGrid
        options={proposedOptions}
        toggle={toggleOption}
        columns={columns}
        paginateSize={pageSize}
      />
    </>
  );
};
