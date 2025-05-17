import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import expCard1 from "../../public/experience-card1.png";
import expCard2 from "../../public/experience-card2.png";
import couch1 from "../../public/couch1.png";
import { greenBg2, headerBackground, textColor } from "../utils/constants";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

const Experience = () => {
  const expCard = [
    {
      title: "Coderina® University Challenge (COUCH)",
      text: "This is an annual event where tertiary students showcase their final year projects to industry experts. The goal is to bridge the gap between academic work and industry needs, aligning student projects with real-world requirements.",
      button: "Register",
      link: "/couch",
      color: greenBg2,
      image: couch1,
    },
    {
      title: "Bring the STEAM Experience to Your Next Celebration!",
      text: "Looking for something different to celebrate your child's birthday? Coderina provides a totally unique party experience with interactive elements that really engage the kids.",
      button: "Contact us",
      link: "/contactUs",
      color: headerBackground,
      image: expCard1,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Box className="px-4 lg:px-16 py-10 lg:py-20">
      <Grid
        container
        data-aos="fade-up"
        spacing={4}
        justifyContent="center"
        className="gap-6"
      >
        {expCard.map((card, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={5.7}
            className="rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
            bgcolor={card.color}
          >
            <Stack className="space-y-10 p-7">
              <Stack className="space-y-4">
                <Typography
                  variant="h5"
                  className="font-semibold leading-tight"
                >
                  {card.title}
                </Typography>
                <Typography variant="body1" color={textColor}>
                  {card.text}
                </Typography>
                <Link href={card.link} passHref>
                  <CustomButton>{card.button}</CustomButton>
                </Link>
              </Stack>
              <Stack className="relative h-72 w-full rounded-3xl overflow-hidden">
                <Image
                  src={card.image}
                  alt="Experience Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl transition-transform transform hover:scale-110"
                />
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
