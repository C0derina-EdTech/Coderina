import CouchPage from "../../components/landingPages/couch/CouchPage";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "COUCH Innovation Challenge | Coderina Foundation",
  description:
    "COUCH (Coderina University Challenge) is Coderina Foundation’s flagship innovation competition empowering university students to develop sustainable solutions in clean energy, waste management, circular economy, robotics, and emerging technologies. Editions include COUCH 2025 and future challenges like COUCH 2026.",
  keywords: [
    "COUCH",
    "Coderina COUCH",
    "Coderina University Challenge",
    "COUCH 2025",
    "COUCH 2026",
    "University Innovation Competition Nigeria",
    "Green Technology Africa",
    "Student Sustainability Projects",
    "university",
    "university competitions",
    "competitions",
  ],
  openGraph: {
    title: "COUCH Innovation Challenge | Coderina Foundation",
    description:
      "Discover COUCH - Coderina’s annual university innovation challenge showcasing groundbreaking sustainable projects by students across Africa.",
    url: `${siteUrl}/couch`,
    siteName: "Coderina Foundation",
    images: [
      {
        url: `${siteUrl}/couch/teamimsu.jpg`,
        width: 1200,
        height: 630,
        alt: "COUCH Innovation Challenge"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "COUCH Innovation Challenge | Coderina Foundation",
    description:
      "COUCH is Coderina’s university innovation challenge promoting sustainable technology and student-led solutions across Africa.",
    images: [`${siteUrl}/couch/teamimsu.jpg`]
  }
};

export default function Page() {
  return (
    <>
      {/* ✅ Structured Data added safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "COUCH Innovation Challenge",
            description:
              "Annual innovation challenge by Coderina Foundation engaging university students to build sustainable solutions in clean energy, waste management, AI, and circular economy.",
            organizer: {
              "@type": "Organization",
              name: "Coderina Education and Technology Foundation",
              url: siteUrl
            },
            url: `${siteUrl}/couch`,
            image: `${siteUrl}/couch/teamimsu.jpg`,
            eventStatus: "https://schema.org/EventScheduled"
          })
        }}
      />

      <main>
        <CouchPage />
      </main>
    </>
  );
}
