import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "5tjiz4zw",
  dataset: "production", // Or your custom dataset
  apiVersion: "2023-01-01", // Use today's date or matching your project
  useCdn: false, // `true` for public content, `false` if you're fetching drafts/auth content
  token: process.env.SANITY_API_TOKEN,
});
