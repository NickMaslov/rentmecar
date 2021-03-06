import cloudinary from "cloudinary";

export const Cloudinary = {
  /* eslint-disable @typescript-eslint/camelcase */
    upload: async (image: string) => {
      const res = await cloudinary.v2.uploader.upload(image, {
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUDINARY_NAME,
        folder: "RMC_Assets/"
      });

      return res.secure_url;
      /* eslint-disable @typescript-eslint/camelcase */
    }
  };




