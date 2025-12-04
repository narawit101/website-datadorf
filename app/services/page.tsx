import React from 'react'
import Footer from "@/components/footer";


export default function page() {
    return (
        <div>
            <div className='p-15'>
                <div className='p-6 flex flex-col '>
                    <p className='text-4xl lg:text-5xl text-[#249CFF] font-bold text-center'>บริการของเรา</p>
                    <p className='text-center font-light pt-6 lg:text-xl'>เดต้าดอร์ฟให้บริการออกแบบ พัฒนา และอิมพลิเมนต์ระบบ Business Intelligence (BI), Data Visualization และ Dashboards <br />เพื่อช่วยให้ธุรกิจของคุณสามารถ เปลี่ยนข้อมูลที่ซับซ้อนให้เป็น Insight เชิงลึกที่นำไปใช้ได้จริง</p>
                </div>
                <div className='grid grid-cols-1  gap-5  p-6  pt-15 '>
                    <div className='shadow-[4px_4px_10px_#DBEFFF] px-3 p-6  flex flex-col items-center  gap-5 rounded-2xl md:flex-row md:py-20 md:gap-40 md:pl-10 lg:py-35  lg:px-10'>
                        <div className='flex flex-col items-center gap-2 lg:w-85 md:w-65'>
                            <svg className='w-10 h-10 md:w-20 md:h-20 lg:w-35 lg:h-35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20H3q-.425 0-.712-.288T2 19t.288-.712T3 18h8q.425 0 .713.288T12 19t-.288.713T11 20m-6-3q-.825 0-1.412-.587T3 15V6q0-.825.588-1.412T5 4h14q.825 0 1.413.588T21 6h-5.5q-1.45 0-2.475 1.025T12 9.5V16q0 .425-.288.713T11 17zm10.5 3q-.625 0-1.062-.437T14 18.5v-9q0-.625.438-1.062T15.5 8h5q.625 0 1.063.438T22 9.5v9q0 .625-.437 1.063T20.5 20zm2.5-7.5q.325 0 .538-.225t.212-.525q0-.325-.213-.537T18 11q-.3 0-.525.213t-.225.537q0 .3.225.525T18 12.5" /></svg>
                            <p className='text-center text-4 font-bold text-[#249CFF] md:text-[18px] lg:text-[20px]'>BI Dashboard & Reporting Platform</p>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5 lg:gap-8 '>
                            <div className='flex gap-3 md:gap-5 '>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>ดูข้อมูลแบบเรียลไทม์ผ่าน Dashboard</p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>Dashboard ออกแบบเฉพาะธุรกิจ</p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light  md:text-[16px] lg:text-xl'>อัปเดตข้อมูลและสร้างรายงานอัตโนมัติ</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-[4px_4px_10px_#DBEFFF] px-3 p-6  flex flex-col items-center gap-5 rounded-2xl md:flex-row md:py-20 md:gap-40 md:pl-10 lg:py-35 lg:px-10 '>
                        <div className='flex flex-col items-center gap-2 lg:w-85 md:w-65'>
                            <svg className='w-10 h-10 md:w-20 md:h-20 lg:w-35 lg:h-35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zM3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z" /></svg>
                            <p className='text-center text-4 font-bold text-[#249CFF] md:text-[18px] lg:text-[20px]'>Custom Data Analytics & Insights</p>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5 lg:gap-8 '>
                            <div className='flex gap-3 md:gap-5 '>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>วิเคราะห์ข้อมูลเชิงลึกเพื่อค้นหา Insight </p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>คาดการณ์ยอดขายและวิเคราะห์พฤติกรรมลูกค้า</p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light  md:text-[16px] lg:text-xl'>จำแนกกลุ่มลูกค้าและวิเคราะห์ความเสี่ยง</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-[4px_4px_10px_#DBEFFF] px-3 p-6  flex flex-col items-center  gap-5 rounded-2xl md:flex-row md:py-20 md:gap-40 md:pl-10 lg:py-35  lg:px-10 '>
                        <div className='flex flex-col items-center gap-2 lg:w-85  md:w-65 '>
                            <svg className='w-10 h-10 md:w-20 md:h-20 lg:w-35 lg:h-35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 17.002a6 6 0 0 1-4.713 5.86l-.638-1.914A4 4 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10z" /></svg>
                            <p className='text-center text-4 font-bold text-[#249CFF] md:text-[18px] lg:text-[20px]'>Consulting & Training</p>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5 lg:gap-8  '>
                            <div className='flex gap-3 md:gap-5  '>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>ให้คำปรึกษาการนำ BI ไปใช้ในองค์กร</p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light md:text-[16px] lg:text-xl'>วิเคราะห์ความต้องการและออกแบบโซลูชัน BI</p>
                            </div>
                            <div className='flex gap-3 md:gap-5'>
                                <svg className='h-4 w-4 md:h-5 md:w-5 lg:h-8 lg:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21" /><path d="m16 20l10 8L41 7" /></g></svg>
                                <p className='text-[14px] font-light  md:text-[16px] lg:text-xl'>วางแผนและออกแบบ Data Architecture </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
