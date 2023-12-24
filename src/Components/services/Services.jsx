import React from "react";
import img1 from "../../assets/services/mobilechat.png";
import img2 from "../../assets/services/home.png";

const Services = () => {
  return (
    <>
      <p className="font-bold text-center text-3xl my-6 ">our services</p>

      <div className="mt-7  flex justify-center gap-8  sm:flex-wrap  ">
        {/* 1st div */}
        <div className=" w-[300px]  shadow-2xl flex flex-col justify-center items-center py-3 px-4 border-t-8 border-purple-950  self-start ">
          <img src={img1} alt="img" width={100} />
          <p className="font-semibold text-2xl">design chat</p>
          <p className="text-xl">free</p>
          <p className="mt-3 font-medium">
            Design question you nedd help with ASAP? Start a free online chat
            with one of our experts.
          </p>
          <button
            type="button"
            class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  mt-[170px] w-3/4"
          >
            start a chat
          </button>
          <p className="font-medium text-sm my-2">
            For questions about an order or delivery contact Customer Service
          </p>
        </div>
        {/* 2nd div  */}

        <div className=" w-[300px] shadow-2xl flex flex-col justify-center items-center py-3 px-4 border-t-8 border-purple-950  self-start ">
          <img src={img2} alt="img" width={100} />
          <p className="font-semibold text-2xl">design services</p>
          <p className="text-xl">free</p>
          <p className="mt-3 font-medium">
            From quick styling tips to home makeovers,our design experts are
            here to help .Pick the best appointment option for you:
          </p>
          <ul className="list-disc font-medium my-1">
            <li>In store</li>
            <li>At home</li>
            <li>Virtual</li>
          </ul>
          <p className="font-medium text-sm my-2">
            Note:Whether in person or virtual ,please select the location thats
            nearest to you{" "}
          </p>
          <button
            type="button"
            class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2  mt-8 w-3/4"
          >
            request an appointment
          </button>
          <button className="border-b-2 border-black font-semibold">
            learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
