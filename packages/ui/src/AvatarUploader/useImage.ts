import { Area } from "react-easy-crop/types";

import { blobToDataUrl } from "@goldn/functions";
import { useImmer } from "@goldn/hooks";

import { getCroppedImg } from "./ImageHandler/getCroppedImage";

export type UploadImageType = Blob;

export interface UseImageReturnType {
  image: string;
  applyImage: (f: UploadImageType) => void;
  submitFile: () => void;
  isCropping: boolean;
  setIsCropping: (b: boolean) => void;
  zoomLevel: number;
  setZoomLevel: (n: number) => void;
  setCroppedArea: (a: Area) => void;
  imageSize: number;
  isProcessing: boolean;
  setIsProcessing: (i: boolean) => void;
  deleteFile: () => void;
}

interface UseImageProps {
  onApply: (avatar: UploadImageType) => void;
  imageSize: number;
  initialImage?: string;
}

const defaultZoom = 2;

interface UseImageState {
  image?: string;
  initialImage?: string;
  file?: Blob;
  isCropping: boolean;
  isProcessing: boolean;
  zoomLevel: number;
  croppedArea: Area;
}

export const useImage = ({
  onApply,
  imageSize,
  initialImage,
}: UseImageProps): UseImageReturnType => {
  const [imageState, setImageState] = useImmer<UseImageState>({
    image: initialImage,
    croppedArea: null,
    file: null,
    isCropping: false,
    isProcessing: false,
    zoomLevel: defaultZoom,
  });

  const applyImage = async (img: Blob | string, enableCrop = true) => {
    const image = typeof img === "string" ? img : await blobToDataUrl(img);

    setImageState(draft => {
      draft.isCropping = enableCrop;
      draft.image = image;
      draft.zoomLevel = defaultZoom;
    });
  };

  const submitFile = async () => {
    setIsProcessing(true);

    try {
      const croppedImage = await getCroppedImg(
        imageState.image,
        imageState.croppedArea
      );

      setImageState(draft => {
        draft.isProcessing = false;
      });

      onApply(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const setIsCropping = (isCropping: boolean) =>
    setImageState(draft => {
      draft.isCropping = isCropping;
    });

  const setZoomLevel = (zoomLevel: number) =>
    setImageState(draft => {
      draft.zoomLevel = zoomLevel;
    });

  const setIsProcessing = isProcessing =>
    setImageState(draft => {
      draft.isProcessing = isProcessing;
    });

  const setCroppedArea = (cp: Area) => {
    setImageState(draft => {
      draft.croppedArea = cp;
    });
  };

  const deleteFile = () => {
    setImageState(draft => {
      draft.image = null;
      draft.croppedArea = null;
      draft.file = null;
      draft.isCropping = false;
      draft.isProcessing = false;
      draft.zoomLevel = defaultZoom;
    });
  };

  return {
    image: imageState.image,
    isCropping: imageState.isCropping,
    zoomLevel: imageState.zoomLevel,
    isProcessing: imageState.isProcessing,
    deleteFile,
    setIsCropping,
    setCroppedArea,
    setZoomLevel,
    applyImage,
    imageSize,
    submitFile,
    setIsProcessing,
  };
};
