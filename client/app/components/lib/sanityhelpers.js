import { sanityClient } from "./sanityClient";

export const uploadFileToSanity = async (file, type = "file") => {
  if (!file) return null;
  try {
    const uploaded = await sanityClient.assets.upload(type, file, {
      filename: file.name,
    });
    return uploaded._id; // Return the Sanity asset ID
  } catch (err) {
    console.error("Sanity upload error:", err);
    return null;
  }
};
