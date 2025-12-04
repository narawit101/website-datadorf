"use client";
import React from "react";
import Footer from "@/components/footer";
import { useRouter } from 'next/navigation';
import mockProducts from "@/data/mock-products.json";
import mockActivity from "@/data/mock-activity.json";
import StackCard from "@/components/StackCard";
import Activity from "@/components/Activity";
import ImageCarousel from "@/components/ImageCarousel";
import Service from "@/components/Service";

export default function Home() {
    const router = useRouter();

    return (
        <div className="overflow-hidden pt-20 md:pt-30 lg:pt-19">
            <div className="lg:pr-4 pb-25 lg:pt-2 rounded-2xl bg-linear-to-b from-[#249CFF] to-[#D9EEFF]-500">
                <div className='p-6 flex flex-col bg-white rounded-2xl lg:py-25 '>
                    <div className='flex flex-col gap-2 '>
                        {/* hero */}
                        <div className="px-6 md:p-0">
                            <p className='text-4xl lg:text-5xl text-[#249CFF] font-bold text-center'>"เปลี่ยนข้อมูลเป็นพลังยกระดับธุรกิจ"</p>
                            <p className='text-center font-light text-sm lg:text-xl mt-4'>
                                Datadorf ให้บริการ Business Intelligence & Data Solutions แบบครบวงจร <br />
                                ตั้งแต่การออกแบบ Dashboard, วิเคราะห์ข้อมูลเชิงลึก <br />
                                ไปจนถึงการวางกลยุทธ์ข้อมูลสำหรับองค์กรเราช่วยให้ธุรกิจตัดสินใจได้แม่นยำขึ้น
                            </p>
                            <div className='flex justify-center items-center mt-6'>
                                <button
                                    onClick={(() => {
                                        router.push('/contact')
                                    })}
                                    className='bg-[#249CFF] text-white  py-2 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-[#0A75D1] transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={1.5} d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.028 2.028 3.147.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z"></path></svg>
                                    <p className="font-bloud text-base md:text-xl ">ติดต่อเรา</p>
                                </button>
                            </div>
                        </div>
                        {/* swiper */}
                        <div className="flex mt-2 w-full">
                            <ImageCarousel />
                        </div>
                    </div>
                </div>
            </div>

            {/* service */}
            <div>
                <Service />
            </div>
            {/* product */}
            <div className=" mx-auto ">
                <StackCard items={mockProducts} />
            </div>
            {/* activity */}
            <div className="mx-auto">
                <Activity items={mockActivity} />
            </div>
            <Footer />
        </div>
    )
}