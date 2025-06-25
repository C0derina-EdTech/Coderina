"use client";

import "aos/dist/aos.css";
import Aos from "aos";

import { useEffect } from "react";
import Me from "../../components/Me";
import ContactForm from "../../components/Form";
import Follow from "../../components/Follow";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";



export default function Contact() {
  const aboutContents1 = [
    {
      bgImage:
        "/focus.jpg",
      section: <Me />,
    },
    {
      bgColor: "",
      section: <ContactForm />,
    },
    {
      bgColor: "",
      section: <Follow />,
    },

    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
    {
      bgColor: "#232323",
      section: <Footer />,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-background">
      {aboutContents1.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
}
