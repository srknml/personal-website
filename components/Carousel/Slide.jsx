import React from "react";
import { SwiperSlide } from "swiper/react";

const Slide = ({ text, cs }) => {
  return <SwiperSlide className={cs}>{text}</SwiperSlide>;
};

export default Slide;
