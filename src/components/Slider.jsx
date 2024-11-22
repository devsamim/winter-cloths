import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import sl3 from "../assets/sl3.png";
import sl4 from "../assets/sl4.png";
import sl5 from "../assets/sl5.jpg";
import { Outlet } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <Swiper
        className="w-screen h-[500px]"
        direction={"horizontal"} // Horizontal slider
        pagination={{ clickable: true }} // Pagination enabled
        navigation={true} // Navigation enabled
        autoplay={{ delay: 3000 }} // Autoplay enabled
        modules={[Navigation, Pagination, Autoplay]} // Modules
      >
        <SwiperSlide className="">
          <img src={sl1} />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={sl2} className=" " />
        </SwiperSlide>

        <SwiperSlide className="">
          <img className="w-full" src={sl3} alt="Winter Scene 3" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={sl4} alt="Winter Scene 4" className="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={sl5} alt="Winter Scene 5" className="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
