import React from "react";
import First from "../assets/sect3ion.jpg";
import Second from "../assets/sect3ion_2.jpg";

export const Section3 = () => {
  return (
    <div className=" flex flex-row items-center justify-start space-x-10 px-14">
      <div className="max-w-[311px] max-h-[389px] overflow-hidden rounded-md">
        <img
          src={First}
          alt="My Image"
          className="w-[311px] h-[389px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
        />
      </div>
      <div className="max-w-[311px] max-h-[389px] overflow-hidden rounded-md">
        <img
          src={Second}
          alt="My Image"
          className="w-[311px] h-[389px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
};
