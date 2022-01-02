import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Box } from "@chakra-ui/react";
import { useContext } from "react";

import { ImageContext } from "../AvatarContainer";
import { UploadImageInput } from "./UploadImageInput";

export const ImageControls = () => {
  const { image, file, isCropping, submitFile, setIsCropping } = useContext(
    ImageContext
  );

  return (
    <Flex h={10}>
      <Box mr={2}>
        <UploadImageInput />
      </Box>
      <IconButton
        colorScheme="blue"
        disabled={!image || isCropping}
        aria-label="upload Picture"
        icon={<EditIcon />}
        onClick={() => setIsCropping(true)}
      />
      <IconButton
        colorScheme="green"
        ml="auto"
        aria-label="save Picture"
        icon={<CheckIcon />}
        disabled={!image || isCropping}
        onClick={() => submitFile(file)}
      />
    </Flex>
  );
};
