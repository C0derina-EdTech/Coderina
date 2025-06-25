import EventLen from "../../components/eventComponents/EventLen";
import React from "react";

export const metadata = {
  title: "Events",
  description:
    "Stay updated on Coderina`s latest events, competitions, trainings, and outreach programs that promote STEM education and youth empowerment across Africa.",
};
const page = () => {
  return (
    <div>
      <EventLen />
    </div>
  );
};

export default page;
