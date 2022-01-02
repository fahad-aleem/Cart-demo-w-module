export const blobToDataUrl = (blob: File | Blob): Promise<string> => {
  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(blob);
  });
};

export const imageUrlToDataUrl = async (
  src: string
): Promise<FileReader["result"]> => {
  const response = await fetch(src);
  const myBlob = await response.blob();

  return blobToDataUrl(myBlob);
};

export const imageUrlToBlob = async (src: string): Promise<Blob> => {
  try {
    const response = await fetch(src);

    return await response.blob();
  } catch (e) {
    return Promise.reject("failed");
  }
};

export const blobToFile = (b: Blob, fileName: string): File =>
  new File([b], fileName);

export const resizeImage = (
  file: File | Blob,
  maxSize: number
): Promise<Blob> => {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement("canvas");

  const dataURItoBlob = (dataURI: string) => {
    const bytes =
      dataURI.split(",")[0].indexOf("base64") >= 0
        ? atob(dataURI.split(",")[1])
        : unescape(dataURI.split(",")[1]);
    const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);

    for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);

    return new Blob([ia], { type: mime });
  };

  const resize = () => {
    let width = image.width;
    let height = image.height;

    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }

    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/jpeg");

    return dataURItoBlob(dataUrl);
  };

  return new Promise((resolve, reject) => {
    if (!file.type.match(/image.*/)) {
      reject(new Error("Not an image"));
    }

    reader.onload = (readerEvent: FileReader["onload"]["arguments"]) => {
      image.onload = () => resolve(resize());
      image.src = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
  });
};

export const fileToBlob = (file: File): Promise<Blob> =>
  new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const blob = new Blob([new Uint8Array(e.target.result as ArrayBuffer)], {
        type: file.type,
      });

      resolve(blob);
    };
    reader.readAsArrayBuffer(file);
  });
