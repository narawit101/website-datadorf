'use client'

import React, { useRef, useState } from 'react';
import { useParams } from 'next/navigation'
import MockProduct from "@/data/mock-products.json"
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";

export default function ProductDetailPage() {
    const { id } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
     const mainSwiperRef = useRef<SwiperType | null>(null); 

    const product = MockProduct.find((item) => item.id === Number(id));

    if (!product) {
        return <div>ไม่พบข้อมูลสินค้า</div>
    }

    return (
        <div className="px-2 py-10 lg:py-10 lg:pt-20 pt-20 md:pt-30 md:py-10">

            <div className="relative w-full ">
                <Swiper
                    onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 z-0"
                >
                    {product.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="aspect-video w-[90%] mx-auto overflow-hidden lg:aspect-21/8 md:aspect-21/9 md:w[90%] lg:w-[85%]">
                                <Image
                                    src={img}
                                    alt={`image${index}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => mainSwiperRef.current?.slidePrev()}
                    className="
                                absolute left-2 top-1/2 -translate-y-1/2 
                                bg-gray-200/70 backdrop-blur  p-2 rounded-full
                                hover:border-[#249CFF] hover:border transition z-20 border border-[#E2E8F0] cursor-pointer
                            "
                >
                    <svg className='text-[#5B5555]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" />
                    </svg>
                </button>

                <button
                    onClick={() => mainSwiperRef.current?.slideNext()}
                    className="
                                absolute right-2 top-1/2 -translate-y-1/2 
                                bg-gray-200/70 backdrop-blur  p-2 rounded-full
                                hover:border-[#249CFF] hover:border transition z-20 border border-[#E2E8F0] cursor-pointer
                            "
                >
                    <svg className='text-[#5B5555]' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" />
                    </svg>
                </button>
            </div>

            <div className='px-3 md:px-8 lg:px-23'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={2}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-5">
                    {product.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className='aspect-21/7  w-[95%] mx-auto overflow-hidden lg:w-[90%] '>
                                <Image src={img} alt={`image${index}`}
                                    width={500}
                                    height={200}
                                    className='w-full h-full object-cover rounded-md cursor-pointer'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='mt-15 px-4 lg:px-23' >
                <p className="text-xl font-bold mt-8 text-[#249CFF] lg:text-2xl">
                    {product.content}
                </p>

                <div className='flex flex-col gap-4 font-light mt-3' >
                    {Array.isArray(product.title)
                        ? product.title.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                        : <p>{product.title}</p>
                    }
                </div>
                <div className='mt-10'>
                    <p className='font-bold'>เครื่องมีอที่ใช้</p>
                    {product.tools?.map((tool, index) => (
                        <p key={index} className='font-light'>{tool}</p>
                    ))}
                </div>
            </div>

            <div className='pt-5'>
                <a href="/products" className='flex flex-row justify-center  ' ><p className='shadow-[4px_4px_10px_#DBEFFF] cursor-pointer p-2 bg-white px-6 rounded-full border border-[#249CFF] text-[#249CFF]'
                >กลับ</p></a>
            </div>
        </div>
    )
}