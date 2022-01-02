import { CarouselContainer } from "./CarouselContainer";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <CarouselContainer totalImages={images.length}>
      {images.map((i, key) => (
        <CarouselItem key={key} src={i} />
      ))}
    </CarouselContainer>
  );
};
