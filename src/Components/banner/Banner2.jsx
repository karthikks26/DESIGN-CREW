import React from "react";
import wave from "../../assets/banners/zigzag.png";
import v1 from "../../assets/videos/v1.mp4";
import Slide from "./Slide";
const Banner2 = () => {
  return (
    <>
      <div className="flex md:flex-wrap md:my-4 sm:flex-col">
        <div className="bg-lime-100 flex-1 h-[500px]  flex justify-center items-center ">
          <div className="max-w-[490px]  xs:w-full">
            <p className="font-medium">FROM OUR SOFAS TO YOURS</p>
            <h1 className="font-bold text-3xl mt-1 xs:text-2xl">
              our design crew loves <br /> to make you smile{" "}
            </h1>
            <p className="text-lg font-medium mt-3 xs:text-base">
              Check out this feel-good video of how our incredible Design Crew
              team is here to help you virtually, from a video call on your new
              WFH space to DMs on your backyard.{" "}
            </p>
            <button
              type="button"
              class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-sm text-sm px-5 py-2.5 me-2 mb-2 mt-7 font-bold "
            >
              request an appointment
            </button>
          </div>
        </div>
        <div className=" flex-1 flex flex-col justify-center items-center sm:my-3">
          <h2 className="text-5xl font-bold md:text-center xs:text-3xl">
            let us
            <br /> help <br />
            refurnish <br />
            your
            <span className="relative ml-2">
              home
              <img src={wave} width={150} className="absolute right-0 top-2" />
            </span>
          </h2>
          <video width={320} height={240} controls className="mt-12">
            <source src={v1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Slide />
    </>
  );
};

export default Banner2;
