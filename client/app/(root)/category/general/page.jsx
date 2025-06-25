// app/[year]/[month]/page.jsx
import dynamic from "next/dynamic";

// Dynamically import the client component
const GeneralPage = dynamic(() =>
  import("../../../components/GeneralPage")
);

// Dynamic metadata
export async function generateMetadata() {
  return {
    title: "General Posts",
    description: "Explore all general category blog posts including updates, stories, and more.",
  };
}



export default function Page({ params }) {
 

  return <GeneralPage />;
}
