"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FrameworkCard } from "./FrameworkCard";

export const SwiperFrameworksBox = ({ list }: { list: string[] }) => {
  return (
    <div className="relative swiper-linear-flow">
      <style>{`
        .swiper-linear-flow .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 16 },
          480: { slidesPerView: 4, spaceBetween: 16 },
          640: { slidesPerView: 5, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 24 },
          1024: { slidesPerView: 7, spaceBetween: 28 },
          1280: { slidesPerView: 7, spaceBetween: 32 },
        }}
        className="w-full"
      >
        {list.map((id, index) => (
          <SwiperSlide key={`${id}-${index}`}>
            <FrameworkCard id={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
