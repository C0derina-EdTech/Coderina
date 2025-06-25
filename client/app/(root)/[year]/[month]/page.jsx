// app/[year]/[month]/page.jsx
import dynamic from "next/dynamic";

// Dynamically import the client component
const ClientArchive = dynamic(() =>
  import("../../../components/ClientArchive")
);

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { year, month } = await  params;

  return {
    title: `Archive - ${month}/${year}`,
    description: `Blog archive for ${month}/${year}`,
  };
}



export default async function ArchivePage({ params }) {
  const { year, month } = await params;

  return <ClientArchive year={year} month={month} />;
}
