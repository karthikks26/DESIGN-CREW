import React from "react";
import img1 from "../../assets/main/d1.jpg";
import img2 from "../../assets/main/d2.jpg";
import img3 from "../../assets/main/d3.webp";
import img4 from "../../assets/main/d4.jpg";
import img5 from "../../assets/main/d5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };
  return (
    <>
      <div className=" relative">
        <Slider {...settings} className="px-4 ">
          <img
            src={img1}
            alt="img"
            className="w-full h-[550px] object-cover xs:h-[300px] sm:[450px]"
          />
          <img
            src={img2}
            alt="img"
            className="w-full h-[550px] object-cover xs:h-[300px] sm:[450px]"
          />
          <img
            src={img3}
            alt="img"
            className="w-full h-[550px] object-cover xs:h-[300px] sm:[450px]"
          />
          <img
            src={img4}
            alt="img"
            className="w-full h-[550px] object-cover xs:h-[300px] sm:[450px]"
          />
          <img
            src={img5}
            alt="img"
            className="w-full h-[550px] object-cover xs:h-[300px] sm:[450px]"
          />
        </Slider>

        <div className="bg-white absolute bottom-16 py-7 px-8  sm:static sm:flex sm:justify-center sm:flex-col sm:items-center sm:my-2">
          <p className="font-medium ">IN STORE AT HOME VIRTUAL</p>
          <h2 className="text-4xl font-semibold mb-4 sm:text-lg">
            free one-on-one <br />
            design services
          </h2>
          <button
            type="button"
            class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 "
          >
            request an appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Sliders;
