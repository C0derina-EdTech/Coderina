import MainBlog from "../../components/landingPages/blog/MainBlog";

export const metadata = {
  title: "Newsroom | Robotics, STEM & Innovation Updates",
  description:
    "Stay updated with the latest news, robotics competitions, STEM initiatives, student achievements, and innovation stories from Coderina Education & Technology Foundation.",
  keywords: [
    "Coderina",
    "Coderina Foundation",
    "National Robotics Championship",
    "FIRST Tech Challenge Nigeria",
    "STEM Education Africa",
    "Robotics Competition Nigeria",
    "Youth Innovation",
    "Coderina News"
  ],
  openGraph: {
    title: "Coderina Newsroom | Robotics, STEM & Innovation Updates",
    description:
      "Explore the latest updates from Coderina including robotics championships, STEM programs, youth innovation stories, and national competitions.",
    url: "https://coderina.org/newsroom",
    siteName: "Coderina Education & Technology Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderina Newsroom",
    description:
      "Latest robotics, STEM, and innovation stories from Coderina Education & Technology Foundation.",
  },
};

export default function Page() {
  return (
    
      <section className="">

        <MainBlog />
      </section>
   
  );
}