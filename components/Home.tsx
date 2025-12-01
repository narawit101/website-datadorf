import React from 'react'
import Footer from '../components/footer'


export default function Home() {
    return (
        <div>
            <div className='mt-4 md:mt-16'>
                <div className='flex flex-col gap-5 px-6 md:p-0'>
                    <p className='text-4xl lg:text-5xl text-[#249CFF] font-bold text-center'>"เปลี่ยนข้อมูลเป็นพลังยกระดับธุรกิจ"</p>
                    <p className='text-center font-light text-sm lg:text-xl'>Datadorf ให้บริการ Business Intelligence & Data Solutions แบบครบวงจร <br />ตั้งแต่การออกแบบ Dashboard, วิเคราะห์ข้อมูลเชิงลึก <br />ไปจนถึงการวางกลยุทธ์ข้อมูลสำหรับองค์กรเราช่วยให้ธุรกิจตัดสินใจได้แม่นยำขึ้น </p>
                    <div className='flex justify-center items-center'>
                        <button>sadas</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
