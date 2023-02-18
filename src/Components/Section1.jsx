import React from "react";
import Hero from "../assets/HomescreenHero.jpg";

export const Section1 = () => {
  return (
    <div>
      <img
        src={Hero}
        alt="My Image"
        className="w-full h-[550px] object-cover border-b-4 border-b-white"
      />
    </div>
  );
};
