import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

import { setTarget } from "./utility/setTarget";

interface Paragraph {
  content: string;
}
interface ParagraphBlockProps {
  paragraph: Paragraph;
}

const CustomParagraph = styled.div`
  & p {
    margin-bottom: 16px;
  }
`;

export const ParagraphBlock = ({ paragraph }: ParagraphBlockProps) => {
  return (
    <CustomParagraph>
      <ReactMarkdown linkTarget={setTarget}>{paragraph.content}</ReactMarkdown>
    </CustomParagraph>
  );
};
