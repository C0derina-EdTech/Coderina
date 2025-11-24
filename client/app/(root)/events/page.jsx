import EventsSection from "../../components/landingPages/events/EventsSection";
import { sanityClient } from "../../components/lib/sanityClient";
import { groq } from "next-sanity";

const eventsQuery = groq`
  *[_type == "coderinaevents"]{
    _id,
    title,
    date,
    endDate,
    status,
    description,
    image {
      asset->{
        url
      }
    }
  }
`;

export default async function EventsPage() {
  const events = await sanityClient.fetch(eventsQuery);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // Aggregate event titles, descriptions, and dates for SEO
  const aggregatedTitle = events.length
    ? `Events: ${events.map(e => e.title).join(", ")} | Coderina`
    : "Coderina Events | STEM Workshops & Competitions in Africa";

  const aggregatedDescription = events.length
    ? `Discover upcoming and past events by Coderina Foundation: ${events
        .map(e => `${e.title} (${new Date(e.date).toLocaleDateString()}${e.endDate ? " - " + new Date(e.endDate).toLocaleDateString() : ""}) - ${e.description}`)
        .join(" ")}`
    : "Discover upcoming STEM workshops, robotics competitions, and technology programs by Coderina Foundation for African youth.";

  const primaryImage = events[0]?.image?.asset?.url || `${siteUrl}/codelogo.png`;

  // Structured Data (JSON-LD) for all events
  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": events.map((e, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": e.title,
      "startDate": e.date,
      "endDate": e.endDate || e.date,
      "eventStatus":
        e.status === "on-hold"
          ? "https://schema.org/EventCancelled"
          : "https://schema.org/EventScheduled",
      "description": e.description,
      "url": `${siteUrl}/events`,
      "image": e.image?.asset.url || primaryImage
    })),
  };

  return (
    <>
      <head>
        <title>{aggregatedTitle}</title>
        <meta name="description" content={aggregatedDescription} />
        <meta
          name="keywords"
          content={events.map(e => e.title).join(", ")}
        />

        {/* Open Graph */}
        <meta property="og:title" content={aggregatedTitle} />
        <meta property="og:description" content={aggregatedDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={primaryImage} />
        <meta property="og:url" content={`${siteUrl}/events`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aggregatedTitle} />
        <meta name="twitter:description" content={aggregatedDescription} />
        <meta name="twitter:image" content={primaryImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      </head>

      <main>
        <EventsSection />
      </main>
    </>
  );
}
