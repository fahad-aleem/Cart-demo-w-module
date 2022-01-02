import { Text, BoxProps } from "@chakra-ui/react";

import { BorderedBox } from "../Decorators/BorderedBox";

export type ToggleItem = (item: string, select: boolean) => void;

export interface ItemProps {
  selected: boolean;
  text: string;
  userID?: string;
  textAddon?: string;
}
export type SuggestionItemProps = ItemProps &
  BoxProps & {
    toggle: ToggleItem;
  };

export const SuggestionItem = ({
  selected,
  text,
  toggle,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  textAddon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userID,
  ...rest
}: SuggestionItemProps) => {
  return (
    <BorderedBox
      p={2.5}
      h="40px"
      bg={selected ? "green.50" : undefined}
      borderColor={selected ? "green.500" : "gray.200"}
      textAlign="center"
      cursor="pointer"
      onClick={() => toggle(text, !selected)}
      transition="box-shadow 0.2s"
      _hover={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        color={selected ? "green.900" : "black"}
        lineHeight="20px"
        fontWeight={700}
      >
        {text}
      </Text>
    </BorderedBox>
  );
};
