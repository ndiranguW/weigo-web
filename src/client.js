import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "25xh2j08",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
  apiUrl: "https://weigo.sanity.studio"
});
