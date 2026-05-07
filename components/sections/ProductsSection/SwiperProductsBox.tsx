"use client";

import { useRef, useCallback, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TProduct } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { SwiperNavigation } from "./SwiperNavigation";

type TProductSwiper = {
  list: TProduct[];
};

export const SwiperProductsBox = ({ list }: TProductSwiper) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const updateNavigationState = useCallback(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  return (
    <div className="relative h-[70vh] p-8 overflow-x-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        className="w-full h-full !overflow-visible"
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavigationState();
        }}
        onSlideChange={updateNavigationState}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => {
          if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
          }
        }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        isBeginning={isBeginning}
        isEnd={isEnd}
      />
    </div>
  );
};
