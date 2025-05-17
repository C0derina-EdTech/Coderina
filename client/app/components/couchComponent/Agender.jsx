import React from "react";
import couch3 from "../../../public/couch3.png";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import couch12 from "../../../public/couch12.png";
import blank from "../../../public/blank.jpg";
const Agender = () => {
  const expCard = [
    {
      title: "AGENDER",
      text: [
        "Introduction",
        "Objectives",
        "Structure of the challenge",
        "Phases of the challenge",
      ],
      button: "Register",
      link: "/formData",
      color: couch12,
      col: "#fff",
    },
    {
      text: ["Strategic Goals", "Key Benefits", "Eligibility", "Registration"],
      button: "Contact us",
      link: "/contactUs",
      color: blank,
      col: "#648e38",
    },
  ];
  return (
    <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
      <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
        <Image
          src={couch3}
          alt="couch4"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>
    // <Box className="px-2 md:px-4 lg:px-16 lg:py-20">
    //   <Grid
    //     container
    //     className="justify-between space-y-5 md:space-y-0 lg:gap-3"
    //   >
    //     {expCard.map((card, i) => (
    //       <Grid
    //         key={i}
    //         className="rounded-2xl flex justify-start items-center"
    //         style={{
    //             background:`url(${card.color?.src}) no-repeat center center/cover`,
    //           }}
    //         size={{ xs: 12, md: 5.7 }}
    //       >
    //         <Stack className="space-y-10 p-10">
    //           <Stack className="space-y-16 w-full">
    //             <h1 className="py-4text-[27px] md:text-[36px] lg:text-[44px] text-center font-bold leading-[37.6px] text-white">
    //               {card.title}
    //             </h1>
    //             {card.text && Array.isArray(card.text) && (
    //               <Stack component="ul" className="space-y-7 list-disc">
    //                 {card.text.map((item, index) => (
    //                   <Typography
    //                     key={index}
    //                     component="li"
    //                     variant="body1"
    //                     className="text-[14px] md:text-[24px] font-medium"
    //                     color={card.col}
    //                   >
    //                     {item}
    //                   </Typography>
    //                 ))}
    //               </Stack>
    //             )}
    //             <Link href={card.link}>

    //             </Link>
    //           </Stack>
    //         </Stack>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
  );
};

export default Agender;
