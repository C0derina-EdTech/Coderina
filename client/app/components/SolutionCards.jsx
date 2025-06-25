import React from "react";
import Image from "next/image";

const SolutionCards = ({
  img,
  text,
  childern,
  childern1,
  childern2,
  childern3,
  height = "250px",
}) => {
  return (
    <div className="space-y-2 w-full">
      <div className="w-full rounded-2xl overflow-hidden" style={{ height }}>
        <Image
          src={img}
          alt={text || childern1}
          className="w-full h-full object-cover"
        />
      </div>

      {childern && (
        <p className="text-xs md:text-sm font-normal">{childern}</p>
      )}

      {childern1 && (
        <h3 className="font-semibold font-geist text-sm md:text-base">
          {childern1}
        </h3>
      )}

      {text && (
        <p className="font-medium font-poppins text-base text-center">
          {text}
        </p>
      )}

      {childern2 && (
        <p className="font-normal font-poppins text-sm text-center">
          {childern2}
        </p>
      )}

      {childern3 && (
        <p className="font-geist text-sm md:text-base">{childern3}</p>
      )}
    </div>
  );
};

export default SolutionCards;
