import React, { useEffect, useRef } from "react";
import First from "../assets/handGrill.jpg";

export const Section4 = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (bgRef.current) {
        const yPos = -window.pageYOffset / 8;
        bgRef.current.style.backgroundPositionY = `${yPos}px`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-gray-800">
      <div
        className="bg-cover bg-fixed w-full h-[380px] border-y-4 border-y-white"
        style={{
          backgroundImage: `url(${First})`,
          backgroundSize: "cover",
        }}
        ref={bgRef}
      >
        <div className="h-[380px] flex  flex-col justify-center items-center text-white">
          <h1 className="text-5xl  mb-4 font-Kristi text-yellow-500">
            Our Chef
          </h1>
          <p className="text-6xl font font-extrabold uppercase">Main Course</p>
        </div>
      </div>
    </div>
  );
};
