import React, { useEffect, useRef } from "react";
import Item1 from "../assets/item1.jpg";
import Item2 from "../assets/item2.jpg";
import Item3 from "../assets/item3.jpg";
import Item4 from "../assets/item4.jpg";
import Item5 from "../assets/item5.jpg";

export const Section6 = () => {
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
    <div className="pt-14 pb-14  ">
      <div className="flex">
        {/* Image */}
        <div className="relative w-1/4">
          <img src={Item1} alt="Your Image" className="w-full h-[350px]" />
          <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col justify-center items-start transition duration-500 ease-in-out p-6">
            <p className="text-white text-center font-bold transition duration-500 ease-in-out text-xl ">
              Italian Source Mushroom
            </p>
            <p className="text-white text-center  transition duration-500 ease-in-out ">
              Mushroom / Garlic / Veggies
            </p>
            <p className="text-white text-center font-bold transition duration-500 ease-in-out pt-6 ">
              $19.9
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="relative w-1/4">
          <img src={Item2} alt="Your Image" className="w-full h-[350px]" />
          <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col justify-center items-start transition duration-500 ease-in-out p-6">
            <p className="text-white text-center font-bold transition duration-500 ease-in-out text-xl ">
              Italian Source Mushroom
            </p>
            <p className="text-white text-center  transition duration-500 ease-in-out ">
              Mushroom / Garlic / Veggies
            </p>
            <p className="text-white text-center font-bold transition duration-500 ease-in-out pt-6 ">
              $19.9
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-1/4">
          <img src={Item3} alt="Your Image" className="w-full h-[350px]" />
          <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col justify-center items-start transition duration-500 ease-in-out p-6">
            <p className="text-white text-center font-bold transition duration-500 ease-in-out text-xl ">
              Italian Source Mushroom
            </p>
            <p className="text-white text-center  transition duration-500 ease-in-out ">
              Mushroom / Garlic / Veggies
            </p>
            <p className="text-white text-center font-bold transition duration-500 ease-in-out pt-6 ">
              $19.9
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-1/4">
          <img src={Item4} alt="Your Image" className="w-full h-[350px]" />
          <div className="absolute  inset-0 bg-black opacity-0 hover:opacity-50 flex flex-col justify-center items-start transition duration-500 ease-in-out p-6">
            <p className="text-white text-center font-bold transition duration-500 ease-in-out text-xl ">
              Italian Source Mushroom
            </p>
            <p className="text-white text-center  transition duration-500 ease-in-out ">
              Mushroom / Garlic / Veggies
            </p>
            <p className="text-white text-center font-bold transition duration-500 ease-in-out pt-6 ">
              $19.9
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-800">
        <div
          className="bg-cover bg-fixed w-full h-[380px] border-y-4 border-y-white"
          style={{
            backgroundImage: `url(${Item5})`,
            backgroundSize: "cover",
          }}
          ref={bgRef}
        >
          <div className="h-[380px] flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl  mb-4 font-Kristi text-yellow-500">
              Amazing
            </h1>
            <p className="text-6xl font font-extrabold uppercase">Delicious</p>
          </div>
        </div>
      </div>
    </div>
  );
};
