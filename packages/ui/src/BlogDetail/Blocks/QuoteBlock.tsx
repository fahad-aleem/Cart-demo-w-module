import { Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import { setTarget } from "./utility/setTarget";

interface Block {
  value: string;
}

interface QuoteBlockProps {
  block: Block;
}

export const QuoteBlock = ({ block }: QuoteBlockProps) => {
  return (
    <Text
      fontFamily="SofiaPro-SemiBold"
      fontSize="20px"
      lineHeight="28px"
      my="16px"
    >
      <ReactMarkdown linkTarget={setTarget}>{`“${block.value}”`}</ReactMarkdown>
    </Text>
  );
};
