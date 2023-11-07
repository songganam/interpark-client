import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/book.css";
import "../styles/common.css";
import { useRef } from "react";

function Book() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();

  return (
    <swiper>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </swiper>
  );
}

export default Book;
