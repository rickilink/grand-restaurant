import React, { useEffect, useRef } from "react";
import HomescreenHero from "../assets/HomescreenHero.jpg";
import First from "../assets/sect3ion.jpg";
import Item2 from "../assets/item2.jpg";
import Item3 from "../assets/handGrill.jpg";
import Item4 from "../assets/item3.jpg";

export const Section7 = () => {
  return (
    <div className="py-14 px-14  ">
      <div className=" flex flex-row items-center justify-start space-x-4  px-14">
        <div className="space-y-4">
          <div className="max-w-[326px] max-h-[217px] overflow-hidden rounded-md">
            <img
              src={Item3}
              alt="My Image"
              className="w-[326px] h-[217px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="max-w-[326px] max-h-[217px] overflow-hidden rounded-md">
            <img
              src={Item4}
              alt="My Image"
              className="w-[326px] h-[217px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="max-w-[326px] max-h-[217px] overflow-hidden rounded-md">
            <img
              src={HomescreenHero}
              alt="My Image"
              className="w-[326px] h-[217px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="max-w-[326px] max-h-[217px] overflow-hidden rounded-md">
            <img
              src={Item2}
              alt="My Image"
              className="w-[326px] h-[217px] object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
