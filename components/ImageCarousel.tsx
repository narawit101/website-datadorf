"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const styles = `
  .custom-swiper {
    width: 80%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .custom-swiper .swiper-wrapper {
    align-items: center;
  }

  .custom-swiper .swiper-slide {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease; 
    transform: scale(0.7);   
    opacity: 0.8;                  
    z-index: 1;                    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-swiper .swiper-slide-prev,
  .custom-swiper .swiper-slide-next {
    transform: scale(0.9);    
    opacity:0.8;
    z-index: 10;                   
  }

  .custom-swiper .swiper-slide-active {
    transform: scale(1.2);      
    opacity: 1;                    
    z-index: 20;                   
    filter: drop-shadow(0 5px 1px rgba(0,0,0,0.2)); 
  }
  
  .fade-mask {
    position: relative;
  }
  
  .fade-mask::before,
  .fade-mask::after {
    content: "";
    position: absolute;
    top: 0;
    width: 15%;
    height: 100%;
    z-index: 30;
    pointer-events: none;
  }

  .fade-mask::before {
    left: 0;
    background: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0) 100%);
  }

  .fade-mask::after {
    right: 0;
    background: linear-gradient(to left, white 30%, rgba(255, 255, 255, 0) 100%);
  }
`;

export default function ImageCarousel() {
  const originalImages = [
    "/slideImage-1.png",
    "/slideImage-2.png",
    "/slideImage-3.png",
    "/slideImage-4.png",
    "/slideImage-5.png",
  ];
  const slideImages = [...originalImages, ...originalImages];

  return (
    <>
      <style jsx global>{styles}</style>
      <div className="flex mt-8 w-full">
        <Swiper
          className="custom-swiper w-full fade-mask"
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          spaceBetween={-110}
          speed={800}
          grabCursor={true}
          slideToClickedSlide={true}
        >
          {slideImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[150px] md:h-[300px] lg:h-[350px]">
                <Image
                  src={src}
                  width={1920}
                  height={1080}
                  alt={`Slide ${index}`}
                  className="rounded-4xl object-cover w-full h-full shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}