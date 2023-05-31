import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        speed={1000}
        // keyboard={{
        //   enabled: true,
        // }}
        // breakpoints={{
        //   200: {
        //     slidesPerView: 4,
        //     slidesPerGroup: 3,
        //   },
        // }}
        // centeredSlides={true}
        autoplay={{
          delay: 0,
          //   disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="!transition !duration-150 !ease-linear !h-36"
      >
        <SwiperSlide className=" !transition !duration-150 !ease-linear bg-orange-500  slide">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="ease-linear bg-blue-500">Slide 2</SwiperSlide>
        <SwiperSlide className="ease-linear bg-green-500">Slide 3</SwiperSlide>
        <SwiperSlide className="ease-linear bg-red-500 ">Slide 4</SwiperSlide>
        <SwiperSlide className="ease-linear bg-yellow-500">Slide 5</SwiperSlide>
        <SwiperSlide className="ease-linear bg-gray-500">Slide 6</SwiperSlide>
        <SwiperSlide className="ease-linear bg-slate-500 ">Slide 7</SwiperSlide>
        <SwiperSlide className="ease-linear bg-lime-400">Slide 8</SwiperSlide>
        <SwiperSlide className="ease-linear bg-indigo-400">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
