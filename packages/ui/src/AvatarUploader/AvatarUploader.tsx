import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Avatar,
  Flex,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useUser } from "@goldn/authentication";
import { useAvatar } from "@goldn/data";
import { resizeImage } from "@goldn/functions";
import { usePrevious } from "@goldn/hooks";

import { Toast } from "../Toast/Toast";
import { SectionSubHeadline } from "../Typography";
import { AvatarContainer, IMAGE_SIZE } from "./AvatarContainer";

export interface AvatarUploaderProps {
  entityType: "user" | "team";
  entityID: string;
  onLoad: () => void;
  onLoadEnd: () => void;
}

const getUploadToast = (success = true): UseToastOptions => {
  return {
    isClosable: true,
    position: "bottom-left",
    /* eslint-disable-next-line react/display-name, react/prop-types */
    render: ({ onClose }) => (
      <Toast
        close={onClose}
        avatar=""
        title={success ? "Avatar uploaded" : "Avatar upload failed"}
        status={success ? "success" : "error"}
        avatarBorderColor="black"
        description={
          success
            ? "we succesfully uploaded your avatar"
            : "something went wrong while uploading your avatar. please try again"
        }
      />
    ),
    duration: 9000,
  };
};

export const AvatarUploader = ({
  entityType,
  onLoad,
  onLoadEnd,
  entityID,
}: AvatarUploaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { name } = useUser();
  const {
    isLoading,
    uploadAvatar,
    data,
    error,
    deleteAvatar,
    uploadError,
  } = useAvatar<string>(entityID, entityType);
  const prevILoading = usePrevious(isLoading);

  const onSubmitFile = async (f: Blob) => {
    const resizedFile = await resizeImage(f, IMAGE_SIZE);

    uploadAvatar(resizedFile);
  };

  useEffect(() => {
    if (prevILoading && !isLoading) {
      onLoadEnd();
      toast(getUploadToast(!error && !uploadError));
    }

    if (isLoading) {
      onLoad();
      onClose();
    }
  }, [
    error,
    isLoading,
    onClose,
    onLoad,
    onLoadEnd,
    prevILoading,
    toast,
    uploadError,
  ]);

  return (
    <>
      <Flex alignItems="center">
        <Avatar name={name} src={data} size="2xl" mr={10} borderRadius="base" />
        <Button onClick={onOpen} colorScheme="green" mr={3}>
          Upload an image
        </Button>

        <Button
          onClick={() => {
            if (confirm("are you sure you want to delete your Avatar?")) {
              deleteAvatar();
            }
          }}
        >
          Remove current Image
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent w="335px">
          <ModalHeader pt={9} pl={5} pr={5}>
            Upload an image
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} pr={5} pl={5}>
            {isOpen && (
              <>
                <SectionSubHeadline mb={5}>
                  For best results, please upload a .JPG or .PNG of at least
                  200x200 resolution.
                </SectionSubHeadline>
                <AvatarContainer
                  submitFile={onSubmitFile}
                  initialImage={data}
                />
              </>
            )}
          </ModalBody>
          <ModalFooter pl={5} pr={5}>
            <Button onClick={onClose} colorScheme="gray" width="100%" p={0}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
