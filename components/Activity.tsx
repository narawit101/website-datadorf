"use client";

import Image from "next/image";
import { useMemo, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface ActivityItems {
    content: string;
    title: string;
    image: string;
}

interface ActivityProps {
    items: ActivityItems[];
}

const CIRCUMFERENCE = 2 * Math.PI * 20;

export default function Activity({ items }: ActivityProps) {
    const router = useRouter();
    const safeItems = useMemo(() => (items.length ? items : []), [items]);
    const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const progressCircle = useRef<SVGCircleElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    if (!safeItems.length) return null;

    const handleAutoplayTimeLeft = (_swiper: SwiperType, time: number, progress: number) => {
        if (progressCircle.current) {
            const offset = CIRCUMFERENCE * (1 - progress);
            progressCircle.current.style.strokeDashoffset = `${offset}`;
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section className="w-full max-w-[1200px] mx-auto  lg:my-12 my-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
                กิจกรรมของเรา
            </h2>
            <div className="relative bg-white overflow-hidden">

                <button
                    aria-label="Previous"
                    onClick={() => swiperRef?.slidePrev()}
                    className="hidden md:flex absolute z-20 left-4 lg:left-6 lg:top-1/2 top-50 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#E2E8F0] text-[#5B5555] items-center justify-center hover:bg-[#e0dedead] transition-all duration-100 cursor-pointer"
                >
                    <svg width="35" height="35" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.778 7.05L10.828 12l4.95 4.95l-1.414 1.414L8 12l6.364-6.364z" />
                    </svg>
                </button>
                {/* 
                {safeItems.length > 1 && (
                    <div className="flex items-center justify-center gap-2 my-8">
                        {safeItems.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => swiperRef?.slideToLoop(i)}
                                className={`h-2 w-8 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-[#249CFF] w-8" : "bg-gray-200 w-2.5 hover:bg-[#249CFF]/50"
                                    }`}
                            />
                        ))}
                    </div>
                )} */}
                <div className="relative px-4 sm:px-6 md:px-20">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{ delay: 10000, disableOnInteraction: false }}
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        onAutoplayTimeLeft={handleAutoplayTimeLeft}
                        className="w-full"
                    >
                        {safeItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-15 w-full">
                                    <div className="w-full lg:w-[45%] shrink-0">
                                        <div className="relative w-full h-72 md:h-80 rounded-[20px] overflow-hidden shadow-lg">
                                            <Image
                                                src={item.image}
                                                alt={item.content}
                                                fill
                                                className="object-cover"
                                            />
                                            <button
                                                aria-label="Previous"
                                                onClick={() => swiperRef?.slidePrev()}
                                                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[#E2E8F0] bg-white/80 text-[#5B5555] flex items-center justify-center cursor-pointer"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M15.778 7.05L10.828 12l4.95 4.95l-1.414 1.414L8 12l6.364-6.364z" />
                                                </svg>
                                            </button>
                                            <button
                                                aria-label="Next"
                                                onClick={() => swiperRef?.slideNext()}
                                                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[#E2E8F0] bg-white/80 text-[#5B5555] flex items-center justify-center cursor-pointer"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M9 6.05L14.95 12L9 17.95l1.414 1.414L17.778 12l-7.364-7.364z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                                        <h3 className="text-[#249CFF] font-bold text-xl md:text-2xl">
                                            {item.content}
                                        </h3>
                                        <p className="text-black leading-relaxed text-sm md:text-lg">
                                            {item.title}
                                        </p>
                                        <div className="flex flex-col gap-4 my-4 mx-auto lg:mx-0">
                                            <button
                                                onClick={() => router.push("/services")}
                                                className="mt-2 bg-white text-[#249CFF] border border-[#249CFF] py-1 px-4 sm:py-2.5 sm:px-6 rounded-full flex items-center justify-center md:justify-start gap-2 transition-all hover:bg-[#249CFF] hover:text-white hover:shadow-md self-center md:self-start  hover:cursor-pointer"
                                            >
                                                <span className="font-medium text-[12px] lg:text-sm ">ดูกิจกรรมทั้งหมด</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clipRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center justify-center">
                        <div className="relative w-12 h-12 md:w-12 md:h-12 flex items-center justify-center text-xs md:text-sm font-semibold text-[#249CFF]">
                            <svg viewBox="0 0 48 48" className="absolute inset-0" width={48} height={48}>
                                <circle
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    stroke="#E2E8F0"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <circle
                                    ref={progressCircle}
                                    cx="24"
                                    cy="24"
                                    r="20"
                                    stroke="#249CFF"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={CIRCUMFERENCE}
                                    strokeDashoffset={0}
                                    strokeLinecap="round"
                                    transform="rotate(-90 24 24)"
                                />
                            </svg>
                            <span ref={progressContent}>10s</span>
                        </div>
                    </div>
                </div>
                <button
                    aria-label="Next"
                    onClick={() => swiperRef?.slideNext()}
                    className="hidden md:flex absolute z-20 right-4 lg:right-6 lg:top-1/2 top-50 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#E2E8F0] text-[#5B5555] items-center justify-center hover:bg-[#e0dedead] transition-all duration-100 cursor-pointer"
                >
                    <svg width="35" height="35" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 6.05L14.95 12L9 17.95l1.414 1.414L17.778 12l-7.364-7.364z" />
                    </svg>
                </button>

            </div>

        </section>
    );
}