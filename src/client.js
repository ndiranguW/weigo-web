import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID,
  dataset: process.env.REACT_APP_DATASET,
  useCdn: process.env.REACT_APP_USE_CDN,
  apiVersion: process.env.REACT_APP_API_VERSION,
  apiUrl: process.env.REACT_APP_API_URL,
});
