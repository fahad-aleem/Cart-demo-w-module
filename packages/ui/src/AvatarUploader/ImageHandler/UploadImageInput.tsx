import { IconButton, Input, Box } from "@chakra-ui/react";
import { useRef, useContext } from "react";

import { fileToBlob } from "@goldn/functions";
import { UploadIcon } from "@goldn/icons";

import { ImageContext } from "../AvatarContainer";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const supportedImageTypes = ["image/jpeg", "image/png"];

export const UploadImageInput = () => {
  const hiddenFileInput = useRef(null);
  const { applyImage } = useContext(ImageContext);

  function handleClick() {
    hiddenFileInput.current.click();
  }

  const _handleChange = (e: InputEvent) => {
    e.preventDefault();
    fileToBlob(e.target.files[0]).then(blob => applyImage(blob));
  };

  return (
    <Box position="absolute" bottom={5} right={5}>
      <Input
        type="file"
        display="none"
        onChange={_handleChange}
        ref={hiddenFileInput}
        accept={supportedImageTypes.join(",")}
      />
      <IconButton
        colorScheme="green"
        aria-label="save Picture"
        icon={<UploadIcon />}
        onClick={handleClick}
      />
    </Box>
  );
};
