"use client";

import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import space from "../../public/space.png";
import CustomButton from "./CustomButton";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {
  greenBg2,
  headerBackground,
  pinkBgR,
  textColor,
} from "../utils/constants";
import expCard2 from "../../public/experience-card2.png";

const Welcome = () => {
  const welCard = [
    {
      title: "SIWES or Internship Placement",
      text: "Gain hands-on experience and develop essential skills at Coderina STEAM Centre! Whether you're a SIWES student or seeking an internship to boost your career readiness, we provide a dynamic learning environment to help you grow.",
      dest: [
   
        "Gain Real-world experience in tech and innovation",
        "Mentorship from industry professionals",
        "A collaborative and engaging workspace",
      ],
      button: "Register",
      link: "/contactUs",

      image: expCard2,
    },
    {
      title: "Co-working Space",
      text: "Looking for a professional and collaborative environment to work, learn, and innovate? Our co-working space provides the perfect setting for students, freelancers, and professionals to connect, grow, and bring their ideas to life.",
      button: "Register",
      link: "/contactUs",
      dest: [
      
        "office space with modern amenities",
        "seminars | meetings workspace designed for productivity and collaboration",
        
      ],
      image: space,
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <Box className="px-2 md:px-4 lg:px-16">
      <Grid
        container
        data-aos="fade-up"
        className="relative rounded-lg flex flex-col md:flex-row items-center justify-between text-white 
               bg-black/40 backdrop-blur-md p-4 md:p-10 border border-white/20 shadow-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for the Glass Effect */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-xl"></div>

        {welCard.map((card, i) => (
          <Grid
            key={i}
            className=" relative z-10 rounded-2xl flex justify-center items-center"
            size={{ xs: 12, md: 5.7 }}
          >
            <Stack className="text-white space-y-10 p-7">
              <Stack className="space-y-4">
                <h1 className=" text-[27px] font-semibold leading-[37.6px]">
                  {card.title}
                </h1>
                <Stack>
                  <span className="text-[14px] md:[17px]">{card.text}</span>
                  {card.dest && (
                    <ul className="list-disc pl-5 mt-2 text-[16px]">
                      {card.dest.map((item, index) => (
                        <li key={index} className="text-[14px] md:text-[17px]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Stack>
                <Link href={card.link}>
                  <CustomButton>{card.button}</CustomButton>
                </Link>
              </Stack>
              <Stack className="rounded-3xl relative h-full w-full md:h-[350px] md:w-[360px] lg:w-[450px]">
                <Image
                  src={card.image}
                  alt="imagecard"
                  className=" object-cover rounded-3xl w-full "
                  layout="responsive"
                />
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Welcome;
