import React from 'react'
import Footer from "@/components/footer";
import MockProduct from "@/data/mock-products.json"
import Image from 'next/image'

export default function page() {
    return (
        <div>
            <div>
                <div className='p-6 flex flex-col '>
                    <p className='lg:text-5xl text-[#249CFF] font-bold text-center'>ผลงานของเรา</p>
                    <p className='text-center font-light pt-6 lg:text-xl'>เราช่วยธุรกิจของคุณเปลี่ยนข้อมูลที่ซับซ้อนให้เป็นภาพรวมที่ชัดเจน ด้วยระบบ Business Intelligence, Data Visualization และ Dashboards <br />ที่ออกแบบมาเพื่อตอบโจทย์การตัดสินใจอย่างมีประสิทธิภาพ ชมตัวอย่างโซลูชันของเรา และค้นพบแนวทางใหม่ในการขับเคลื่อนธุรกิจด้วยข้อมูล</p>
                </div>
                <div className='grid grid-cols-3 gap-20'>
                    {MockProduct.map((item, index) => {
                        return (
                            <div key={index} >
                                <div >
                                    <div>
                                        <Image src={item.image} alt={item.image} />
                                    </div>
                                    <p>{item.content}</p>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}
