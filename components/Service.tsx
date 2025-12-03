import React from 'react'
import { useRouter } from 'next/navigation';
import bgImage from "@/public/serviceBg.png";
import Image from 'next/image';


export default function Service() {
    const router = useRouter();
    return (
        <div className="relative w-full mt-10">
            <Image
                src={bgImage}
                alt="Background"
                placeholder="blur"
                fill
                className="hidden xl:block object-contain object-right -z-10"
            />
            <div className="relative z-10 px-6 md:px-10 lg:px-20 py-15">
                <p className="text-3xl lg:text-4xl font-bold text-center mb-10">
                    บริการของเรา
                </p>
                <div className="flex flex-col gap-4  justify-center items-center">

                    <div className="shadow-[4px_4px_10px_#DBEFFF] p-6 rounded-2xl bg-white xl:-ml-20 xl:w-[70%] w-full">
                        <svg className='w-8 h-8 lg:w-10 lg:h-10 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20H3q-.425 0-.712-.288T2 19t.288-.712T3 18h8q.425 0 .713.288T12 19t-.288.713T11 20m-6-3q-.825 0-1.412-.587T3 15V6q0-.825.588-1.412T5 4h14q.825 0 1.413.588T21 6h-5.5q-1.45 0-2.475 1.025T12 9.5V16q0 .425-.288.713T11 17zm10.5 3q-.625 0-1.062-.437T14 18.5v-9q0-.625.438-1.062T15.5 8h5q.625 0 1.063.438T22 9.5v9q0 .625-.437 1.063T20.5 20zm2.5-7.5q.325 0 .538-.225t.212-.525q0-.325-.213-.537T18 11q-.3 0-.525.213t-.225.537q0 .3.225.525T18 12.5" /></svg>

                        <p className="text-[#249CFF] font-bold text-xl lg:text-2xl mb-2">
                            BI Dashboard & Reporting Platform
                        </p>
                        <p className="text-sm xl:text-[18px]">ออกแบบ Platform และ BI Dashboard ที่ช่วยวิเคราะห์ข้อมูลแบบเรียลไทม์</p>
                    </div>

                    <div className="shadow-[4px_4px_10px_#DBEFFF] p-6 rounded-2xl bg-white xl:-ml-50 xl:w-[70%] w-full">
                        <svg className='w-8 h-8 lg:w-10 lg:h-10 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zM3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" /></svg>
                        <p className="text-[#249CFF] font-bold text-2xl mb-2">
                            Custom Data Analytics & Insights
                        </p>
                        <p className="text-sm xl:text-[18px]">วิเคราะห์ข้อมูลเชิงลึกเพื่อค้นหา Insight ที่ช่วยขับเคลื่อนธุรกิจ</p>
                    </div>

                    <div className="shadow-[4px_4px_10px_#DBEFFF] p-6 rounded-2xl bg-white xl:-mr-5 xl:w-[70%] w-full">
                        <svg className='w-8 h-8 lg:w-10 lg:h-10 mb-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 17.002a6 6 0 0 1-4.713 5.86l-.638-1.914A4 4 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10z" /></svg>

                        <p className="text-[#249CFF] font-bold text-2xl mb-2">
                            Consulting & Training
                        </p>
                        <p className="text-sm xl:text-[18px]">ให้คำปรึกษาการใช้ Business Intelligence ในองค์กร</p>
                    </div>
                    <div className="flex flex-col gap-4 my-6 ">
                        <button
                            onClick={() => router.push("/services")}
                            className="mt-2 bg-white text-[#249CFF] border border-[#249CFF] py-2.5 px-6 rounded-full flex items-center justify-center md:justify-start gap-2 transition-all hover:bg-[#249CFF] hover:text-white hover:shadow-md self-center md:self-start w-full md:w-auto hover:cursor-pointer"
                        >
                            <span className="font-medium text-[12px] lg:text-[14px]">ดูบริการเพิ่มเติม</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
