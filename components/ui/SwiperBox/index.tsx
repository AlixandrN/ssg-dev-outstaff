"use client";

import { useRef, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EProductCard } from "@/lib/constants";
import { SwiperButton } from "@/components/sections/SwipeProductsSection/SwiperButton";
import { ProductCard } from "@/components/sections/SwipeProductsSection/ProductCard";

interface ISwiperBox {
  list: EProductCard[];
}

export const SwiperBox = ({ list }: ISwiperBox) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <>
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #000000;
          opacity: 1;
          width: 12px;
          height: 12px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full mb-4"
      >
        {list.map((card) => (
          <SwiperSlide key={card} className="h-auto">
            <ProductCard type={card} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperButton type="prev" handleClick={handlePrev} />

      <SwiperButton type="next" handleClick={handleNext} />

      <div className=" swiper-pagination absolute bottom-0 left-0 right-0 flex justify-center gap-1 mt-4"></div>
    </>
  );
};
