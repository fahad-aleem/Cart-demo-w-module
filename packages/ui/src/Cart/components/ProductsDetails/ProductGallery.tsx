import { SimpleGrid, GridItem, Image, VStack } from "@chakra-ui/react";
import { ProductImagesTypes } from "@gold/data-products";
import React, { useState } from "react";

export const ProductGallery = (props: ProductImagesTypes[]) => {
  console.log(props);
  const [currentImage, setCurrentImage] = useState(props.images[0].url);

  return (
    <SimpleGrid columns={12} spacing={3} height="500px">
      <GridItem colSpan={2} overflow="auto">
        <VStack spacing={3}>
          {props.images.map(image => {
            return (
              <Image
                key={image.id}
                id={image.id}
                src={image.url}
                alt={image.altText}
                width="100%"
                height="100%"
                objectFit="cover"
                objectPosition="center"
                onClick={() => setCurrentImage(image.url)}
                borderRadius="5px"
                border={
                  currentImage === image.url && "2px solid rgb(0, 132, 105)"
                }
              />
            );
          })}
        </VStack>
      </GridItem>
      <GridItem colSpan={10}>
        <Image
          src={currentImage}
          w="100%"
          h="100%"
          objectFit="cover"
          borderRadius="5px"
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default ProductGallery;
