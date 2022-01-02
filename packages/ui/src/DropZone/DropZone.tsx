import { Box, Center } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import { useDropZone } from "@goldn/hooks";

import { ErrorLabel } from "../Typography";

interface DropZoneProps {
  supportedImageTypes?: string[];
  applyFiles: (files: FileList) => void;
  children: React.ReactNode;
  disableError?: boolean;
}
const getErrorMMessage = (supportedFileType: string[]) => {
  const supported = supportedFileType.map(t =>
    t.replace("image/", ".").toUpperCase()
  );
  const base = "Upload failed. File must be ";

  return base + supported.slice(0, -1).join(",") + " or " + supported.slice(-1);
};

export const DropZone = ({
  children,
  supportedImageTypes,
  applyFiles,
  disableError,
}: DropZoneProps) => {
  const dropZoneRef = useRef(null);

  const { isHovering, unsupportedError, removeError } = useDropZone({
    containerRef: dropZoneRef,
    onDrop: files => applyFiles(files),
    acceptedFileTypes: supportedImageTypes,
  });

  useEffect(() => {
    if (disableError && unsupportedError) {
      removeError();
    }
  }, [disableError, removeError, unsupportedError]);

  return (
    <>
      <Box
        className="drop-zone"
        borderWidth={unsupportedError ? "1px" : "2px"}
        borderStyle="dashed"
        borderColor={
          isHovering ? "brightGreen" : unsupportedError ? "red.400" : "white"
        }
        ref={dropZoneRef}
        opacity={isHovering ? 0.2 : 1}
      >
        {children}
      </Box>
      {unsupportedError && (
        <Center>
          <ErrorLabel mt={2}>
            {getErrorMMessage(supportedImageTypes)}
          </ErrorLabel>
        </Center>
      )}
    </>
  );
};
