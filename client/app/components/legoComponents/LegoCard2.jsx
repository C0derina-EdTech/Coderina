import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import legoCard from "../../../public/lego-card2.png";
import Image from "next/image";
import Link from "next/link";
const LegoCard2 = () => {
  return (
    <Grid container className="lego__card px-2 md:px-4 lg:px-16">
      <Grid size={{ xs: 12, md: 5.4 }}>
        <Image src={legoCard} alt="card" />
      </Grid>
      <Grid size={{ xs: 12, md: 5.6 }}>
        <Typography variant="h4" fontSize={{ xs: "24px", md: "36px" }}>
          A chance to shine!
        </Typography>
        <Typography fontSize={{ xs: "14px", md: "17px" }}>
          Each FIRST LEGO League season culminates with a celebration where
          teams show off what they learned and invented, and in our oldest
          division, compete with their robots.
        </Typography>
        <Typography fontSize={{ xs: "14px", md: "17px" }}>
       
          Some teams earn an invitation to FIRST LEGO League World Festival as
          part of FIRST Championship Houston or FIRST Championship Detroit,
          where teams from all over the world meet and compete.
        </Typography>

        <Link href="/formdata" className="mt-3">
          <CustomButton bold>Get Started</CustomButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default LegoCard2;
