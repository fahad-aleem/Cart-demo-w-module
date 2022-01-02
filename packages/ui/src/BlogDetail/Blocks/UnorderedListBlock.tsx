import { ListItem, UnorderedList } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import { setTarget } from "./utility/setTarget";

interface Item {
  value: string;
}
interface UnorderedListBlockProps {
  listItems: Item[];
}
export const UnorderedListBlock = ({ listItems }: UnorderedListBlockProps) => {
  return (
    <UnorderedList
      color="gray.600"
      fontSize="md"
      fontWeight="normal"
      lineHeight="32px"
      mb="16px"
      ml="0"
    >
      {listItems.map(item => {
        return (
          <>
            <ListItem>
              <ReactMarkdown linkTarget={setTarget}>{item.value}</ReactMarkdown>
            </ListItem>
          </>
        );
      })}
    </UnorderedList>
  );
};
