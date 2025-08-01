"use client"

import {
  Box,
  Card,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import kenya from "../../../public/kenya.png";
import nigeria from "../../../public/nigeria.png";
import ghana from "../../../public/ghana.png";
import rwanda from "../../../public/rwanda.png";
import uganda from "../../../public/uganda.png";
import sierra from "../../../public/sierra.png";

const Empowering = () => {
  const coreValues = [
    {
      title: "Empowering Young Minds Across Africa",
      value1: [
        { country: "Ghana", img: ghana },
        { country: "Kenya", img: kenya },
        { country: "Nigeria", img: nigeria },
      ],
      value2: [
        { country: "Rwanda", img: rwanda },
        { country: "Sierra Leone", img: sierra },
        { country: "Uganda", img: uganda },
      ],
    },
  ];

  return (
    <Box>
      <Card className="en__container">
        {coreValues.map((cv, i) => (
          <CardContent key={i}
            sx={{
              justifyContent: { xs: "center !important", sm: "space-between !important" },
              alignItems: "center"
            }}>
            {/* Title Section */}
            <Stack width={{ xs: "100%", sm: "50%" }} mb={4}>
              <Typography variant="h3" fontSize={{ xs: "30px", md: "40px" }} textAlign={{ xs: "center", md: "start" }}>
                {cv.title}
              </Typography>
            </Stack>

            {/* Countries Section */}
            <Stack className="core__values">
              {/* First Column */}
              <Stack gap={{ xs: ".5em", md: "1em" }}>
                {cv.value1.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    className="p-4 flex items-center gap-4"
                  >
                    <Image
                      src={item.img}
                      alt={`Flag of ${item.country}`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <Typography
                      fontSize={{ xs: "6px", md: "17px" }}
                      className="font-medium"
                    >
                      {item.country}
                    </Typography>
                  </Paper>
                ))}
              </Stack>

              {/* Second Column */}
              <Stack gap={{ xs: ".5em", md: "1em" }}>
                {cv.value2.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    className="p-4 flex items-center gap-4"
                  >
                    <Image
                      src={item.img}
                      alt={`Flag of ${item.country}`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <Typography
                      fontSize={{ xs: "6px", md: "17px" }}
                      className="font-medium"
                    >
                      {item.country}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};

export default Empowering;
