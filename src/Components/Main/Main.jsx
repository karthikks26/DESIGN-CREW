import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import Slider from "./Sliders";
import { RxHamburgerMenu } from "react-icons/rx";

const Main = () => {
  const list = ["services", "case studies", "designers", "room planner"];
  const [state, setState] = useState(false);
  const handleclick = () => {
    setState(!state);
  };
  return (
    <>
      <div className="border-t-8 border-purple-900 mt-2">
        <nav className=" flex items-center justify-between py-2  llg:flex-col llg:items-start">
          {/* left  */}
          <div className=" flex items-center gap-2">
            <GoHomeFill size={35} />
            <span className="font-normal text-xl">DESIGN CREW</span>
          </div>
          {/* rigth */}
          <div
            className={`flex gap-3 items-center llg:flex-col    llg:w-full llg:items-center ${
              state ? "" : "llg:hidden"
            } `}
          >
            {list.map((items, index) => (
              <div
                key={index}
                className="block py-2 px-3 text-gray-900  font-medium  hover:text-blue-700 cursor-pointer  hover:border-b-2 hover:border-gray-500 text-lg"
              >
                {items}
              </div>
            ))}
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  "
            >
              request an appointment
            </button>
          </div>
        </nav>
        <RxHamburgerMenu
          size={30}
          className="absolute top-6 right-6  cursor-pointer minw:hidden"
          onClick={handleclick}
        />

        <Slider />
      </div>
    </>
  );
};

export default Main;
