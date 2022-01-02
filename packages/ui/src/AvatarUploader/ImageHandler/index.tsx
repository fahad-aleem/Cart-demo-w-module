import { Text, Image, ImageProps, Center, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Cropper from "react-easy-crop";

import { ImageContext } from "../AvatarContainer";
import { CropControls } from "./CropControls";
import { UploadImageInput } from "./UploadImageInput";

export const ImageHandler = () => {
  const { image, isCropping, setCroppedArea, zoomLevel } = useContext(
    ImageContext
  );
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const placeHolder = (
    <Center p={8}>
      <Text fontSize="sm" color="gray.500">
        Please select an Image for Preview
      </Text>
    </Center>
  );

  const imageProps: ImageProps = {
    borderRadius: "base",
    objectFit: "cover",
  };

  const cropper = (
    <>
      <Cropper
        image={image}
        crop={crop}
        aspect={1}
        cropShape="rect"
        showGrid={false}
        onCropChange={setCrop}
        onCropComplete={(ca, cp) => setCroppedArea(cp)}
        zoom={zoomLevel}
      />
    </>
  );

  return (
    <Flex direction="column" position="relative" height="100%">
      <Center height="100%">
        {!image && placeHolder}
        {image && !isCropping && (
          <Image src={image} draggable={false} {...imageProps} />
        )}
        {isCropping && cropper}
      </Center>
      {!isCropping && <UploadImageInput />}
      {isCropping && <CropControls />}
    </Flex>
  );
};
