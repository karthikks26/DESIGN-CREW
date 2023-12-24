import React from "react";
import img from "../../assets/Carosouel/img1.jpeg";
import img1 from "../../assets/Carosouel/img2.jpeg";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slide = () => {
  const arr = [
    {
      t1: "DESIGNER ",
      t2: "Dallas Riley, West Elm Broadway",
    },
    {
      t1: "LOCATION",
      t2: "The Bronx, NY",
    },
    {
      t1: "SPACE",
      t2: "One-bedroom apartment",
    },
    {
      t1: "SOLVES ",
      t2: "Refresh the space with new pieces ",
    },
  ];

  const arr1 = [
    {
      t1: "DESIGNER ",
      t2: "Hardley, West Ohio",
    },
    {
      t1: "LOCATION",
      t2: "Coloumbus , Ohio",
    },
    {
      t1: "SPACE",
      t2: "Spacious Living-area",
    },
    {
      t1: "SOLVES ",
      t2: "Refresh the space with new pieces ",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex  llg:flex-col  lg:my-4 ">
            <div className=" flex-1 ">
              <img src={img} className="w-full lg:h-full  lg:object-cover" />
            </div>
            <div className="bg-orange-50 flex-1 flex flex-col justify-center items-center ">
              <div className="max-w-[500px] lg:p-1 ">
                <p className="font-medium">OUR WORK</p>
                <h1 className="font-bold text-3xl xs:text-2xl ">
                  a glam one-bedroom in <br /> the bronx{" "}
                </h1>
                {arr.map((items, i) => (
                  <div className="flex gap-6 items-center mt-2">
                    <div className="font-medium flex-1 " key={i}>
                      {items.t1}
                    </div>
                    <div className="font-medium flex-1 " key={i}>
                      {items.t2}
                    </div>
                  </div>
                ))}

                <p className=" font-medium my-3">
                  This client used our stylist for help turning his Bronx
                  one-bedroom into a simple, modern and glam oasis, filled with
                  lots of brass accents.{" "}
                </p>
                <button
                  type="button"
                  class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-sm text-sm px-5 py-2.5 me-2 mb-2  font-bold mt-3"
                >
                  see more pictures{" "}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* 2nd  */}

          <div className="flex  llg:flex-col lg:my-4 ">
            <div className=" flex-1">
              <img src={img1} className="w-full lg:h-full lg:object-cover " />
            </div>
            <div className="bg-orange-50 flex-1 flex flex-col justify-center items-center ">
              <div className="max-w-[500px] lg:p-1">
                <p className="font-medium">OUR WORK</p>
                <h1 className="font-bold text-3xl xs:text-3xl">
                  a glam living-area in <br /> the Ohio{" "}
                </h1>
                {arr1.map((items, i) => (
                  <div className="flex gap-6 items-center mt-2">
                    <div className="font-medium flex-1 " key={i}>
                      {items.t1}
                    </div>
                    <div className="font-medium flex-1 " key={i}>
                      {items.t2}
                    </div>
                  </div>
                ))}

                <p className=" font-medium my-3">
                  This client used our stylist for help turning his Ohio
                  living-room into a simple, modern and glam oasis, filled with
                  lots of brass accents.{" "}
                </p>
                <button
                  type="button"
                  class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-sm text-sm px-5 py-2.5 me-2 mb-2  font-bold mt-3"
                >
                  see more pictures{" "}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
