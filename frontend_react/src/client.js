import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECY_ID,
  dataset: "portfolio",
  apiVersion: "2023-01-20",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
