import { useEffect, useState } from "react";

interface UseDropZoneProps {
  containerRef: React.RefObject<HTMLDivElement>;
  onDragEnter?: (e: DragEvent) => void;
  onDragOver?: (e: DragEvent) => void;
  onDragLeave?: (e: DragEvent) => void;
  onDrop?: (files: FileList) => void;
  acceptedFileTypes?: string[];
}

const isFilesSupported = (
  files: FileList,
  supportedTypes: string[]
): boolean => {
  if (supportedTypes.length === 0) {
    return true;
  }

  return Array.from(files).every(f => supportedTypes.includes(f.type));
};

interface DropZoneReturnType {
  isHovering: boolean;
  unsupportedError: boolean;
  removeError: () => void;
}

export const useDropZone = ({
  containerRef,
  onDragEnter = () => true,
  onDragOver = () => true,
  onDrop = () => true,
  onDragLeave = () => true,
  acceptedFileTypes = [],
}: UseDropZoneProps): DropZoneReturnType => {
  const [isHovering, setIsHovering] = useState(false);
  const [unsupportedError, setUnsupportedError] = useState(false);
  const removeError = () => setUnsupportedError(false);

  useEffect(() => {
    const dropbox = containerRef.current;

    const drop = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();

      const dt = e.dataTransfer;
      const files = dt.files;

      setIsHovering(false);

      if (isFilesSupported(files, acceptedFileTypes)) {
        onDrop(files);
        setUnsupportedError(false);
      } else {
        setUnsupportedError(true);
      }
    };

    const dragenter = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();

      onDragEnter(e);
    };

    const dragover = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();

      /**
       * TODO: need to indicate that current file isnt supported?
       */
      if (!isHovering) {
        setIsHovering(true);
      }

      onDragOver(e);
    };

    const dragleave = (e: DragEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (isHovering) {
        setIsHovering(false);
      }

      onDragLeave(e);
    };

    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragleave", dragleave, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);

    return function cleanup() {
      dropbox.removeEventListener("dragenter", dragenter, false);
      dropbox.removeEventListener("dragover", dragover, false);
      dropbox.removeEventListener("dragleave", dragleave, false);
      dropbox.removeEventListener("drop", drop, false);
    };
  }, [
    acceptedFileTypes,
    containerRef,
    isHovering,
    onDragLeave,
    onDragEnter,
    onDragOver,
    onDrop,
  ]);

  return { isHovering, unsupportedError, removeError };
};
