import React from "react";
import watcharr from "./watcharr";

const Watch = () => {
  return (
    <>
      <div className="bg-gray-700 mt-3 py-5">
        <h2 className="text-white font-semibold text-3xl text-center">
          watch before & after transformations
        </h2>
        <div className="flex justify-evenly mt-8 xl:flex-wrap xl:gap-5 ">
          {watcharr.map((items, i) => (
            <div className="bg-white w-[300px] h-[300px] xs:max-w-[300px]">
              <video width="300" height="240" controls>
                <source src={items.vids} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-center px-3">
                <h2 className="font-bold text-2xl mt-4 xs:text-xl">
                  {items.p}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            class="text-white focus:outline-none  font-medium rounded-sm text-sm w-[300px] py-2.5 me-2 mb-2 border-2 border-white  mt-8  xs:w-[200px]"
          >
            watch more videos
          </button>
        </div>
      </div>
    </>
  );
};

export default Watch;
