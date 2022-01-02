import { Box } from "@chakra-ui/react";
import { createContext } from "react";

import { DropZone } from "../DropZone/DropZone";
import { ImageHandler } from "./ImageHandler";
import { supportedImageTypes } from "./ImageHandler/UploadImageInput";
import { UploadImageType, useImage, UseImageReturnType } from "./useImage";

export const IMAGE_SIZE = 200;

export interface AvatarContainerProps {
  submitFile: (avatar: UploadImageType) => void;
  initialImage?: string;
  imageSize?: number;
}

export const ImageContext = createContext<UseImageReturnType>(null);

export const AvatarContainer = ({
  submitFile,
  initialImage,
  imageSize = IMAGE_SIZE,
}: AvatarContainerProps) => {
  const imageProvider = useImage({
    onApply: submitFile,
    initialImage,
    imageSize,
  });

  return (
    <ImageContext.Provider value={imageProvider}>
      <DropZone
        applyFiles={files => imageProvider.applyImage(files[0])}
        supportedImageTypes={supportedImageTypes}
        disableError={!!imageProvider.image}
      >
        <Box backgroundColor="gray.100" h="295px">
          <ImageHandler />
        </Box>
      </DropZone>
    </ImageContext.Provider>
  );
};
