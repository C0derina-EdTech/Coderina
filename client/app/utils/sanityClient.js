import { createClient } from "@sanity/client";
//FOR CODERINA VIA ESTEAM
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID0,
  dataset: "production", // Or your custom dataset
  apiVersion: "2026-02-23", // Use today's date or matching your project
  useCdn: true, // `true` for public content, `false` if you're fetching drafts/auth content
  token: process.env.SANITY_API_TOKEN0,
  //  appId: 'mjox0oiyy99neccsrqml2jbz'
});
