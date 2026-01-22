import EventsSection from "../../components/landingPages/events/EventsSection";
import { sanityClient } from "../../components/lib/sanityClient";
import { groq } from "next-sanity";

const eventsQuery = groq`
  *[_type == "coderinaevents"] | order(date asc){
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

export async function generateMetadata() {
  const events = await sanityClient.fetch(eventsQuery);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://coderina.org";

  const pageTitle = events.length
    ? "Coderina Events | STEM Workshops, Robotics & Innovation Programs"
    : "Coderina Events | STEM & Robotics Programs in Africa";

  const pageDescription = events.length
    ? `Explore upcoming and past Coderina events including STEM workshops, robotics competitions, coding bootcamps, and innovation programs empowering African youth.`
    : `Discover STEM workshops, robotics competitions, and technology programs organized by Coderina Education & Technology Foundation.`;

  const primaryImage =
    events[0]?.image?.asset?.url || `${siteUrl}/codelogo.png`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteUrl}/events`,
      siteName: "Coderina Foundation",
      images: [
        {
          url: primaryImage,
          width: 1200,
          height: 630,
          alt: "Coderina Events",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [primaryImage],
    },

    alternates: {
      canonical: `${siteUrl}/events`,
    },
  };
}

export default async function EventsPage() {
  const events = await sanityClient.fetch(eventsQuery);
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://coderina.org";

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: events.map((e, index) => ({
      "@type": "Event",
      position: index + 1,
      name: e.title,
      startDate: e.date,
      endDate: e.endDate || e.date,
      eventStatus:
        e.status === "on-hold"
          ? "https://schema.org/EventCancelled"
          : "https://schema.org/EventScheduled",
      description: e.description,
      image: e.image?.asset?.url,
      url: `${siteUrl}/events`,
      organizer: {
        "@type": "Organization",
        name: "Coderina Education & Technology Foundation",
        url: siteUrl,
      },
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsJsonLd),
        }}
      />

      <main>
        <EventsSection />
      </main>
    </>
  );
}
