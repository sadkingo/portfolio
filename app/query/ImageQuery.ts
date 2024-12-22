import getWithBaseUrl from "@/util/getRelativePath";
import handleError from "@/util/handleError";

async function uploadImage(imageBlob: Blob) {
  try {
    const response = await fetch(
      getWithBaseUrl("/api/user/upload?filename=image.png"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: imageBlob,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const {
      file: { url },
    } = await response.json();
    if (!url) {
      throw new Error("Failed to get image details");
    }
    return url;
  } catch (error) {
    handleError(error);
  }
}

export { uploadImage };
