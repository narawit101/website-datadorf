"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import bgProduct from "@/public/productBg.png";


interface StackCardItem {
    content: string;
    title: string[];
    images: string[];
    tools: string[];
}

interface StackCardProps {
    items: StackCardItem[];
}

const transitionStyles = `
    .stack-card-fade {
        animation: stackCardFade 0.45s ease;
    }

    @keyframes stackCardFade {
        0% {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;

export default function StackCard({ items }: StackCardProps) {
    const router = useRouter();
    const safeItems = useMemo(() => (items.length ? items : []), [items]);
    const carouselItems = useMemo(() => safeItems.slice(0, 3), [safeItems]);
    const displayItems = carouselItems.length ? carouselItems : safeItems;
    const [activeIndex, setActiveIndex] = useState(0);

    if (!displayItems.length) {
        return null;
    }

    const total = displayItems.length;
    const activeItem = displayItems[activeIndex];
    const prevItem = displayItems[(activeIndex - 1 + total) % total];
    const nextItem = displayItems[(activeIndex + 1) % total];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    return (
        <div className="relative w-full">
            <style jsx global>{transitionStyles}</style>
            <Image
                src={bgProduct}
                alt="Background"
                placeholder="blur"
                fill
                className="hidden xl:block object-contain object-right -z-10"
            />
            <div className="relative w-full">
                <p className="text-3xl lg:text-4xl font-bold text-center mb-10">
                    ผลงานของเรา
                </p>

                <div className="my-20">
                    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20  flex flex-col gap-8 lg:flex-row items-center justify-center ">

                        <div className="flex items-center justify-center gap-4 md:gap-9 ">
                            <button
                                aria-label="previous project"
                                onClick={handlePrev}
                                className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E2E8F0] text-[#5B5555] items-center justify-center hover:bg-[#e0dedead] transition-all duration-100 hover:cursor-pointer"
                            >
                                <svg width="35" height="35" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15.778 7.05L10.828 12l4.95 4.95l-1.414 1.414L8 12l6.364-6.364z" />
                                </svg>
                            </button>

                            <div className="stack-card-fade relative w-60 h-75 lg:w-64 lg:h-80 flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        <CardImage item={prevItem} className="-rotate-10 -translate-x-4 md:-translate-x-6 opacity-70 " />
                                        <CardImage item={activeItem} className="rotate-0 scale-105 z-20 shadow-2xl" />
                                        <CardImage item={nextItem} className="rotate-8 translate-x-4 md:translate-x-6 opacity-80" />
                                    </div>
                                </div>
                            </div>

                            <button
                                aria-label="next project"
                                onClick={handleNext}
                                className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#E2E8F0] text-[#5B5555] items-center justify-center hover:bg-[#e0dedead] transition-all duration-100 hover:cursor-pointer"
                            >
                                <svg width="35" height="35" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 6.05L14.95 12L9 17.95l1.414 1.414L17.778 12l-7.364-7.364z" />
                                </svg>
                            </button>
                        </div>

                        <div key={activeItem.title.join("-")} className="stack-card-fade flex flex-col gap-2 text-center lg:text-left max-w-2xl">
                            <p className="text-[#249CFF] font-bold text-xl md:text-2xl">
                                {activeItem.content}
                            </p>
                            <p className="text-black leading-relaxed text-[14px] md:text-lg">
                                {activeItem.title[0]}
                            </p>

                            <div className="flex flex-col gap-4 items-center justify-center lg:items-start">
                                <div className="flex flex-col gap-4 my-6 ">
                                    <button
                                        onClick={() => router.push('/services')}
                                        className='mt-2 bg-white text-[#249CFF] border border-[#249CFF] py-1 px-4 sm:py-2.5 sm:px-6 rounded-full flex items-center justify-center md:justify-start gap-2 transition-all hover:bg-[#249CFF] hover:text-white hover:shadow-md self-center md:self-start hover:cursor-pointer'>
                                        <p className="font-medium text-[12px] lg:text-[14px] ">ดูผลงานเพิ่มเติม</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {displayItems.length > 1 && (
                        <div className="flex items-center justify-center gap-2">
                            {displayItems.map((_, index) => (
                                <button
                                    key={index}
                                    aria-label={`jump to slide ${index + 1}`}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 w-8 rounded-full transition ${index === activeIndex ? "bg-[#249CFF]" : "bg-[#D4EAFE]"}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

function CardImage({ item, className }: { item: StackCardItem; className?: string }) {
    return (
        <div className={`absolute inset-0 transition-all duration-500 ease-out ${className ?? ""}`}>
            <Image
                src={item.images[0]}
                alt={item.content}
                fill
                className="rounded-3xl object-cover shadow-lg"
                sizes="(max-width: 768px) 200px, 320px"
            />
        </div>
    );
}