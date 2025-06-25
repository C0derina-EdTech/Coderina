"use client";


import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import spaceField from "../../public/space.png";
import CustomButton from "./CustomButton";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import expCard2 from "../../public/experience-card2.png";

const Space = () => {
  const welCard = [
    {
      title: "SIWES or Internship Placement",
      text: "Gain hands-on experience and develop essential skills at Coderina STEAM Centre!",
      dest: [
        "Gain Real-world experience in tech and innovation",
        "Mentorship from industry professionals",
        "A collaborative and engaging workspace",
      ],
      button: "Register",
      link: '/contact',
      image: expCard2,
    },
    {
      title: "Co-working Space",
      text: "Looking for a professional and collaborative environment to work, learn, and innovate?",
      button: "Contact Us",
      link: '/contact',
      dest: [
        "Office space with modern amenities",
        "Seminars | Meetings workspace designed for productivity and collaboration",
      ],
      image: spaceField,
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <Box className="md:p-4 lg:px-16 flex flex-col w-full items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative rounded-xl  overflow-hidden py-6 md:py-10 shadow-2xl w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?q=80&w=1985&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-xl"></div>
        <Stack spacing={6} className="relative z-10 text-white w-full">
          {welCard.map((card, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-center justify-between md:h-[410px]  gap-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105"
            >
              <Stack className="text-center md:text-left space-y-4  w-full  md:w-3/4">
                <Typography variant="h5" className="font-bold">
                  {card.title}
                </Typography>
                <Typography className="text-sm md:text-base">
                  {card.text}
                </Typography>
                {card.dest && (
                  <ul className="list-disc pl-5 text-sm">
                    {card.dest.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
          
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <CustomButton href={card.link} label={card.button}></CustomButton>
                  </motion.div>
               
              </Stack>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-xl overflow-hidden shadow-xl md:max-h-[400px] w-full md:w-3/4"
              >
                <Image
                  src={card.image}
                  alt="imagecard"
                  className="object-contain w-full h-full "
                  layout="responsive"
                />
              </motion.div>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Space;
