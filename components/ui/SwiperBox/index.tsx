"use client";
import { useRef, useCallback, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TFrameworkCard, TProduct } from "@/lib/types";
import { ProductCard } from "../cards/ProductCard";
import { FrameworkCard } from "../cards/FrameworkCard";
import { SwiperNavigation } from "./SwiperNavigation";

interface IBaseProps {
  variant: "product" | "framework";
  isLoopMode?: boolean;
}

type TProductSwiper = IBaseProps & {
  variant: "product";
  list: TProduct[];
};

type TFrameworkSwiper = IBaseProps & {
  variant: "framework";
  list: TFrameworkCard[];
};

export type TSwiperBox = TProductSwiper | TFrameworkSwiper;

export const SwiperBox = ({ variant, list, isLoopMode}: TSwiperBox) => {
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
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={isLoopMode}
        loopAdditionalSlides={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: isLoopMode ? 3 : 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: isLoopMode ? 4 : 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: isLoopMode ? 5 : 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: isLoopMode ? 5 : 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: isLoopMode ? 7 : 3,
            spaceBetween: 28,
          },
          1280: {
            slidesPerView: isLoopMode ? 8 : 3,
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
        className="w-full"
      >
        {(() => {
          switch (variant) {
            case "product":
              return list.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProductCard {...item} />
                </SwiperSlide>
              ));

            case "framework":
              return [...list, ...list, ...list].map((item, index) => (
                <SwiperSlide key={index}>
                  <FrameworkCard {...item} />
                </SwiperSlide>
              ));

            default:
              return null;
          }
        })()}
      </Swiper>
      <SwiperNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        isBeginning={isLoopMode ? false : isBeginning}
        isEnd={isLoopMode ? false : isEnd}
        className={variant === "framework" ? "hidden" : ""}
      />
    </div>
  );
};
