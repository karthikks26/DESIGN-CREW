import React from "react";
import img1 from "../../assets/banners/banner1.jpg";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Banner2 from "./Banner2";

const Banner = () => {
  return (
    <>
      <div className="mt-9">
        <div className="relative">
          <img
            src={img1}
            alt="banner"
            className="w-full h-[400px] object-cover  xs:h-[300px] text-gray-300"
          />
          <div className="absolute bottom-10 left-7 w-[300px] sm:max-w-[300px] ">
            <div className=" flex items-center gap-2">
              <GoHomeFill />
              <span className=" text-base font-medium">DESIGN CREW</span>
            </div>
            <p className="font-bold text-2xl">room planner</p>
            <p className="text-lg font-bold xs:text-sm  xs:pr-14">
              Build your space online using real dimensions and see the products
              in 3D.Just drag and drop.Plus,save all your ideas in one place
            </p>
            <button className="bg-white py-1 px-2 rounded-sm mt-2">
              GET STARTED <HiOutlineArrowLongRight className="inline-block" />
            </button>
          </div>
        </div>
      </div>
      <Banner2 />
    </>
  );
};

export default Banner;
