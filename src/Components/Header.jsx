import React from "react";
import First from "../assets/logo@2x.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pb-14">
      <div>
        <img
          src={First}
          alt="My Image"
          className="w-[150px] h-[50px] object-contain rounded-md "
        />
      </div>
      <div>
        <ul className="flex  space-x-6 items-center">
          <li>
            <p className="inline-block relative">
              <span className="relative z-10 hover:opacity-50 transition-opacity">
                Home
              </span>
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 z-20"></span>
            </p>
          </li>
          <li>
            <p className="inline-block relative">
              <span className="relative z-10 hover:opacity-50 transition-opacity">
                Menu
              </span>
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 z-20"></span>
            </p>
          </li>
          <li>
            <p className="inline-block relative">
              <span className="relative z-10 hover:opacity-50 transition-opacity">
                About Us
              </span>
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 z-20"></span>
            </p>
          </li>
          <li>
            <p className="inline-block relative">
              <span className="relative z-10 hover:opacity-50 transition-opacity">
                Gallery
              </span>
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 z-20"></span>
            </p>
          </li>
          <li>
            <p className="inline-block relative">
              <span className="relative z-10 hover:opacity-50 transition-opacity">
                Find Us
              </span>
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100 z-20"></span>
            </p>
          </li>
          <li className="border py-2 px-4 bg-gray-300 hover:bg-green-400 transition-colors duration-300 hover:border-green-400 rounded-md items-center justify-center">
            <p>Reservation</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
