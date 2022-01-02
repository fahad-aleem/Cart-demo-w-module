import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Flex, Spinner, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";

import { Zoomer } from "../../Zoomer/Zoomer";
import { ImageContext } from "../AvatarContainer";

export const CropControls = () => {
  const { setZoomLevel, submitFile, isProcessing, deleteFile } = useContext(
    ImageContext
  );

  return (
    <Flex alignItems="center" zIndex="modal" p={4}>
      <Zoomer setZoomLevel={setZoomLevel} />
      <IconButton
        ml={4}
        colorScheme="red"
        background="red.400"
        aria-label="delete Picture"
        icon={<DeleteIcon />}
        disabled={isProcessing}
        onClick={deleteFile}
      />
      <IconButton
        ml={4}
        colorScheme="green"
        background="green.400"
        aria-label="save Picture"
        icon={!isProcessing ? <CheckIcon /> : <Spinner />}
        disabled={isProcessing}
        onClick={submitFile}
      />
    </Flex>
  );
};
