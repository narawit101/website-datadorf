"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menu = [
        {
            label: "หน้าแรก", href: "/", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14" className="transition w-6 h-6 lg:w-10 lg:h-10">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
                        <path d="M.5 8L7 1.5L13.5 8"></path>
                        <path d="M2.5 6v6.5h9V6"></path>
                    </g>
                </svg>
            )
        },
        {
            label: "บริการ", href: "/services", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="transition w-6 h-6 lg:w-10 lg:h-10">
                    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"
                        d="m12 12l8.073-4.625M12 12v9.25M12 12L7.963 9.688m12.11-2.313a3.17 3.17 0 0 0-1.165-1.156L16.25 4.696m3.823 2.679c.275.472.427 1.015.427 1.58v6.09a3.15 3.15 0 0 1-1.592 2.736l-5.316 3.046A3.2 3.2 0 0 1 12 21.25M3.926 7.375a3.14 3.14 0 0 0-.426 1.58v6.09c0 1.13.607 2.172 1.592 2.736l5.316 3.046A3.2 3.2 0 0 0 12 21.25M3.926 7.375a3.17 3.17 0 0 1 1.166-1.156l5.316-3.046a3.2 3.2 0 0 1 3.184 0l2.658 1.523M3.926 7.375l4.037 2.313m0 0l8.287-4.992" />
                </svg>
            )
        },
        {
            label: "ผลงาน", href: "/products", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14" className="transition w-6 h-6 lg:w-10 lg:h-10">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                        d="M.625 12V2a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97.757L5.624 3h6.75a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1.625a1 1 0 0 1-1-1"></path>
                </svg>
            )
        },
        {
            label: "ติดต่อเรา", href: "/contact", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 14 14" className="transition w-6 h-6 lg:w-10 lg:h-10">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                        d="M3 7V4.37A3.93 3.93 0 0 1 7 .5a3.93 3.93 0 0 1 4 3.87V7M1.5 5.5h1A.5.5 0 0 1 3 6v3a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m11 4h-1A.5.5 0 0 1 11 9V6a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 12.25a2 2 0 0 0 2-2V8m-2 4.25a1.25 1.25 0 0 1-1.25 1.25h-1.5a1.25 1.25 0 0 1 0-2.5h1.5A1.25 1.25 0 0 1 9 12.25" />
                </svg>
            )
        },
    ];

    return (
        <>
            <nav className='flex justify-between items-center px-0 sm:px-8 lg:px-15 py-4 md:py-6 relative z-50'>
                <Link href="/">
                    <img className='w-18 h-18 lg:w-[100px] lg:h-[100px] object-contain' src='datadorfLogo.png' alt="Logo" />
                </Link>

                <div className='hidden sm:flex gap-4 md:gap-8 lg:gap-10 items-center'>
                    {menu.map(item => {
                        const isActive = path === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex flex-col lg:flex-row items-center gap-2 transition-all duration-100
                                    ${isActive ? "text-[#249CFF]" : "text-black hover:text-[#249CFF]"}`}>
                                <div className={`${isActive ? "text-[#249CFF]" : "text-black"} group-hover:text-[#249CFF]`}>
                                    {item.icon}
                                </div>
                                <p className={`group-hover:text-[#249CFF] text-[16px] lg:text-[18px]`}>
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* --- Hamburger Button (เปลี่ยนจาก lg เป็น sm) --- */}
                {/* ใช้ sm:hidden เพื่อซ่อนเมื่อจอ >= 640px (แสดงเฉพาะตอน < 640px) */}
                <button
                    onClick={toggleMenu}
                    className='sm:hidden text-black focus:outline-none'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </nav>

            {/* --- Mobile Drawer --- */}
            {/* Overlay: ใช้ sm:hidden เพื่อไม่ให้แสดงในจอใหญ่ */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 sm:hidden
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={toggleMenu}
            ></div>

            {/* Side Menu: ใช้ sm:hidden เพื่อไม่ให้แสดงในจอใหญ่ */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out sm:hidden
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-gray-500 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col gap-6 px-6 mt-4">
                    {menu.map(item => {
                        const isActive = path === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`group flex items-center gap-4 transition-all duration-100
                                    ${isActive ? "text-[#249CFF]" : "text-black hover:text-[#249CFF]"}`}
                            >
                                <div className={`${isActive ? "text-[#249CFF]" : "text-black"} group-hover:text-[#249CFF]`}>
                                    {item.icon}
                                </div>
                                <p className={`text-[16px] `}>
                                    {item.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}