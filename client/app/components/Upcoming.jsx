
import React, { useRef } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import UpSlider from "./UpSlider";

const Upcoming = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="flex flex-col gap-[5rem] text-white sec__container bg-black px-2 md:px-4 lg:px-16 md:py-10">
      <div className="flex flex-row items-center justify-between px-2">
        <h5 className="text-[22px] md:text-[32px]">Upcoming Events</h5>
        <div className="space-x-4 flex items-center justify-center">
          <div
            className="bg-white p-3 text-black rounded-3xl hover:text-grey-200"
            onClick={previous}
          >
            <RiArrowLeftLine size={26}/>
          </div>
          <div className="bg-white p-3 text-black rounded-3xl hover:text-grey-200" onClick={next}>
            <RiArrowRightLine size={26}/>
          </div>
        </div>
      </div>
      <UpSlider
        slider={(slider) => {
          sliderRef = slider;
        }}
      />
    </div>
  );
};

export default Upcoming;
