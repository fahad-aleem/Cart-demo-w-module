import { Box, Text } from "@chakra-ui/react";
import { format } from "date-fns/fp";
import Link from "next/link";
import LazyLoad from "react-lazyload";

import { BadgeLabel } from "@goldn/ui";

export const PostCard = ({ post, type }) => {
  const link = `/posts/${post.slug}`;

  return (
    <Box
      width={["100%", "100%", "33.33%"]}
      px="15px"
      mx="0"
      borderWidth="0"
      borderRadius="4px"
      overflow="hidden"
    >
      <LazyLoad offset={100} once>
        <Link href={link} passHref>
          <Box
            as="a"
            style={{
              backgroundImage: `url('${post.image.formats.small.url}')`,
            }}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            height={60}
            width="100%"
            borderRadius="4px"
            position="relative"
            cursor="pointer"
            _hover={{ boxShadow: "md" }}
          >
            {post.recommended === true && type === "category" ? (
              <BadgeLabel />
            ) : null}
          </Box>
        </Link>
      </LazyLoad>

      <Box pt="6" mb="64px">
        <Link href={"/categories/" + post.category.slug} passHref>
          <Text
            as="a"
            fontWeight="bold"
            color="goldn"
            cursor="pointer"
            d="inline-block"
          >
            {post.category.name}
          </Text>
        </Link>
        <Link href={link} passHref>
          <Text
            as="a"
            fontFamily="SofiaPro-SemiBold"
            fontSize="xl"
            color="black"
            mb={3}
            mt={2}
            fontWeight="bold"
            noOfLines={3}
            lineHeight="28px"
            cursor="pointer"
          >
            {post.title}
          </Text>
        </Link>
        <Text noOfLines={2} mb={3} color="gray.500" lineHeight="24px">
          {post.description}
        </Text>
        <Text color="gray.500" letterSpacing="wide" fontSize="md">
          {format("MMM d, yyyy", Date.parse(post.publishedAt))} ·{" "}
          {post.readTimeMinutes} min read
        </Text>
      </Box>
    </Box>
  );
};
