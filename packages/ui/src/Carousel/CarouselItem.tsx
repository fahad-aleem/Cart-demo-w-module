import { Box, Image } from "@chakra-ui/react";

interface CarouselItemProps {
  src: string;
}

export const CarouselItem = ({ src }: CarouselItemProps) => {
  return (
    <Box width="100%" flexShrink={0} css={{ scrollSnapAlign: "start" }}>
      <Image
        src={src}
        alt="Segun Adebayo"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </Box>
  );
};
