import { Flex, Box } from "@chakra-ui/react";
import { useRef } from "react";

import { ImageHandle } from "./ImageHandle";
import { Indicator } from "./Indicator";
import { useCarouselProgress } from "./useCarouselProgress";

interface CarouselContainerProps {
  totalImages: number;
  children: React.ReactNode;
}

export const CarouselContainer = ({
  children,
  totalImages,
}: CarouselContainerProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [{ index, progress }, goToStep] = useCarouselProgress(
    scrollContainerRef,
    totalImages
  );

  return (
    <Box position="relative">
      <ImageHandle
        handle={() => goToStep(index - 1)}
        type="prev"
        isDisabled={progress === 0}
      />
      <ImageHandle
        handle={() => goToStep(index + 1)}
        type="next"
        isDisabled={progress === 100}
      />
      <Flex
        ref={scrollContainerRef}
        direction="row"
        overflowX="scroll"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {children}
      </Flex>
      <Indicator total={totalImages} current={index} goToStep={goToStep} />
    </Box>
  );
};
