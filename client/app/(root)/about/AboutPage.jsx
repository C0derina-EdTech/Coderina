"use client";
import AboutMV from "../../components/aboutComponent/AboutMV";
import AboutHeader from "../../components/aboutComponent/AboutHeader";
import Team from "../../components/aboutComponent/Team";
import Follow from "../../components/Follow";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import Image from "next/image";
import Impact from "../../components/aboutComponent/Impact";

export default function AboutPage() {
  const aboutContents1 = [
    {
      color: "",
      section: <AboutHeader />,
    },

    {
      color: "",
      section: <AboutMV />,
    },
    {
      color: "#000000",
      section: <Impact />,
    },
      {
      color: "",
      section: <Team/>,
    },
    {
      color: "",
      section: <Follow />,
    },
    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
     {
      color: "#232323",
      section: <Footer/>,
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-background text-color">
        <div className="bg-background">
          {aboutContents1.map((content, index) => {
            // Define background styles based on content
            const bgStyle = content.bgImage
              ? { backgroundImage: `url(${content.bgImage})` }
              : { backgroundColor: content.color || "" }; // Fallback to a default color

            return (
              <div
                key={index}
                className="w-full"
                style={{
                  ...bgStyle,
                  backgroundSize: "cover", // Ensure the image covers the section
                }}
              >
                <div className="max-w-[410px] sm:max-w-[80rem] mx-auto lg:gap-y-[4rem]">
                  {content.section}
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
    </div>
  );
}
