"use client"
import React, { useState } from 'react'
import Footer from '../../components/footer'
import MockProduct from "@/data/mock-products.json"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function page() {
    const router = useRouter()

    const itemInPage = 6
    const [currentPage, setCurrentInPage] = useState(1)
    const totalPage = Math.ceil(MockProduct.length / itemInPage)
    const indexOfLastItem = itemInPage * currentPage
    const indexOfFirstItem = indexOfLastItem - itemInPage
    const currentItem = MockProduct.slice(indexOfFirstItem, indexOfLastItem)

    const pageNumber = () => {
        const page: (Number | String)[] = []
        if (totalPage <= 5) {
            for (let i = 1; i <= totalPage; i++)page.push(i)
        } else {
            page.push(1)
            if (currentPage > 3) page.push("...")

            const stratPage = Math.max(2, currentPage - 1)
            const endPage = Math.min(totalPage - 1, currentPage + 1)

            for (let i = stratPage; i <= endPage; i++)page.push(i)
            if (currentPage < totalPage - 2) page.push("...")

            page.push(totalPage)

        }
        return page
    }



    return (
        <div>
            <div className='px-1 md:px-5 lg:px-10'>
                <div className='p-6 flex flex-col '>
                    <p className='lg:text-5xl text-[#249CFF] font-bold text-center text-4xl'>ผลงานของเรา</p>
                    <p className='text-center text-sm font-light pt-6 lg:text-xl'>เราช่วยธุรกิจของคุณเปลี่ยนข้อมูลที่ซับซ้อนให้เป็นภาพรวมที่ชัดเจน ด้วยระบบ Business Intelligence, Data Visualization และ Dashboards <br />ที่ออกแบบมาเพื่อตอบโจทย์การตัดสินใจอย่างมีประสิทธิภาพ ชมตัวอย่างโซลูชันของเรา และค้นพบแนวทางใหม่ในการขับเคลื่อนธุรกิจด้วยข้อมูล</p>
                </div>
                <div className='grid grid-cols-2 gap-2 p-2 pt-10 pb-30 md:gap-6 lg:grid-cols-3 lg:gap-15 '>
                    {currentItem.map((item, index) => {

                        return (
                            <div key={index}>
                                <div className='shadow-[4px_4px_10px_#DBEFFF] rounded-md p-2 md:rounded-2xl' >
                                    <div className='aspect-video w-full overflow-hidden rounded-md md:rounded-2xl '>
                                        {item.images.map((img, index) => (
                                            <Image key={index} className='w-full h-full object-cover' src={img}
                                                width={250}
                                                height={200}
                                                alt={item.images[0] || "product image"} />
                                        ))}

                                    </div>
                                    <p className='text-[#249CFF] text-[12px] font-bold pt-5 line-clamp-2 md:text-[18px] md:line-clamp-1'>{item.content}</p>
                                    <p className='line-clamp-2 pt-4 text-[10px] md:text-base md:pt-2 font-light'>{item.title}</p>
                                    <div className='p-2 flex justify-center'>
                                        <button onClick={() => {
                                            router.push(`/productDetail/${item.id}`)
                                        }} className='shadow-[4px_4px_10px_#DBEFFF] py-2 rounded-full px-4 mt-4 text-[#249CFF] border border-[#249CFF] text-[10px] md:text-[16px]  cursor-pointer'>
                                            อ่านเพิ่มเติม
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center mb-5 gap-5'>
                <button onClick={() => setCurrentInPage(p => Math.max(p - 1, 1))}
                    className=' cursor-pointer'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clipRule="evenodd" /></svg>
                </button>

                {pageNumber().map((page, idx) =>
                    page === '…' ? (
                        <span key={idx} className="px-2 py-1">…</span>
                    ) : (
                        <button
                            key={Number(page)}
                            onClick={() => setCurrentInPage(Number(page))}
                            className={`rounded-full font-medium transition ${currentPage === page
                                ? ' text-[#249CFF]'
                                : ' text-gray-700 hover:text-gray-300 cursor-pointer '
                                }`}
                        >
                            {Number(page)}
                        </button>
                    )
                )}

                <button
                    onClick={() => setCurrentInPage(p => Math.min(p + 1, totalPage))}
                    className="cursor-pointer"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clipRule="evenodd"/></svg>
                </button>

            </div>

            </div>
            
            <Footer />
        </div >
    )
}
