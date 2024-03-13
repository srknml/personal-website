import React from "react";
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
      loop={true}
      speed={900}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // Responsive breakpoints
      breakpoints={{
        320: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        480: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 6,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 8,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full"
    >
      {skills &&
        skills.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className=" !flex flex-col justify-center items-center mt-4"
            >
              {item.icon}
              <div>
                <p
                  className={`${
                    isDark ? "text-white " : "text-black "
                  }   text-left text-sm`}
                >
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
