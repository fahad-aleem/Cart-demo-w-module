import { Text } from "@chakra-ui/react";
import { format } from 'date-fns/fp'

export const PublishDateBlock = ({blogEntry}) => {
  return blogEntry ? (
    <Text color="gray.500" fontSize="md" letterSpacing="wide" mb={['20px', '20px', '20px', '0']}>
        {format('MMM d, yyyy', Date.parse(blogEntry?.publishedAt))} · {blogEntry?.readTimeMinutes} min read
    </Text>
  ) : null;
};
