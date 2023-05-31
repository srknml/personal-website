import React, { createRef, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useTheme } from "../../context/Theme";

export default function Carousel({ skills }) {

  const { isDark } = useTheme();
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={8}
      // slidesPerGroup={3}
      slidesPerGroupAuto={true}
      slidesPerGroupSkip={2}
      loop={true}
      speed={900}
      autoplay={{
        delay: 0,
        // pauseOnMouseEnter: true,
        // disableOnInteraction: false,
        // reverseDirection: true,
      }}
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
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full"
    >
      {skills &&
        skills.map((item, index) => {
          return (
            <SwiperSlide
              cl
              key={index}
              className=" !flex flex-col justify-center items-center mt-4"
            >
              {item.icon}
              <div>
                <p className={`${isDark ? "text-white " : "text-black "}   text-left text-sm`}>{item.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
