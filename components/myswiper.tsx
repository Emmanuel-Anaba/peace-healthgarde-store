"use client"
import { MySwiperProps } from "@/lib/interfaces";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import getImage from "@/utils/getImage";
import BuyNowButton from "./buynowbutton";

export default function MySwiper({ items, type, delay, breakpoints }: MySwiperProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-[90%] mx-auto grid">
      <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          const navigation = swiper.params.navigation as
            | NavigationOptions
            | undefined;
          if (navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation]}
        className="w-full">
        {items.map(({ name }, i) => (
          <SwiperSlide key={i} className="px-10 md:p-0">
            <div className="product-card group">
              <FaRegHeart className="dark:group-hover:text-laurel-700" />
              <Image
                loading="eager"
                src={getImage(name)}
                alt={`picture of ${name} ${type ? type : ""}`}
                width={500}
                height={500}
                className="w-auto h-auto"
              />
              <p className="dark:md:group-hover:text-laurel-700">
                {name} {type && type}
              </p>
              <BuyNowButton
                className="md:group-hover:top-0 md:group-hover:opacity-100"
                productName={name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={prevRef} className="swiper-prev">
        <FaArrowLeft />
      </div>
      <div ref={nextRef} className="swiper-next">
        <FaArrowRight />
      </div>
    </div>
  );
}
