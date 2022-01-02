import { Container, Box, HStack } from "@chakra-ui/react";

import { Breadcrumbs } from "@goldn/ui";

import { BlogAuthor } from "../BlogAuthor/BlogAuthor";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { Tags } from "../Tags/Tags";
import { ArticleImageBlock } from "./Blocks/ArticleImageBlock";
import { ArticleTitleBlock } from "./Blocks/ArticleTitleBlock";
import { AuthorNameBlock } from "./Blocks/AuthorNameBlock";
import { HeadingBlock } from "./Blocks/HeadingBlock";
import { ImageBlock } from "./Blocks/ImageBlock";
import { ParagraphBlock } from "./Blocks/ParagraphBlock";
import { PublishDateBlock } from "./Blocks/PublishDateBlock";
import { QuoteBlock } from "./Blocks/QuoteBlock";
import { UnorderedListBlock } from "./Blocks/UnorderedListBlock";

export const BlogDetail = ({ blogEntry }) => {
  const findComponent = function (block) {
    switch (block.__typename) {
      case "ComponentBlocksImage":
        return <ImageBlock block={block} />;
      case "ComponentBlocksParagraph":
        return <ParagraphBlock paragraph={block} />;
      case "ComponentBlocksCoverImage":
        return <ArticleImageBlock block={block} />;
      case "ComponentBlocksQuote":
        return <QuoteBlock block={block} />;
      case "ComponentBlocksHeading":
        return <HeadingBlock block={block} />;
      case "ComponentBlocksUnorderedList":
        return <UnorderedListBlock listItems={block?.Item} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Container maxW="container.sm" px={[0, 3]}>
        <Box my={4}>
          {blogEntry && (
            <Breadcrumbs
              name={blogEntry.category.name}
              slug={blogEntry.category.slug}
            />
          )}
        </Box>

        <Box mb={10}>
          <ArticleTitleBlock blogEntry={blogEntry} />
          <AuthorNameBlock blogEntry={blogEntry} />
          <HStack justifyContent="space-between" alignItems="flex-start" flexDirection={{ base: "column", lg: "row" }}>
            <PublishDateBlock blogEntry={blogEntry} />
            <SocialIcons blogEntry={blogEntry} />
          </HStack>
        </Box>

        <Box>
          {blogEntry &&
            blogEntry.blocks.map(b => {
              return findComponent(b);
            })}
        </Box>

        <Box mt={10} mb={7}>
          <Tags tags={blogEntry && blogEntry.tags} />
        </Box>

        <Box mt={12} mb={7}>
          <HStack borderBottom="1px" borderColor="gray.300" py={5}>
            <SocialIcons blogEntry={blogEntry} />
          </HStack>
        </Box>

        <Box mb={12}>
          <BlogAuthor blogEntry={blogEntry} />
        </Box>
      </Container>
    </>
  );
};
