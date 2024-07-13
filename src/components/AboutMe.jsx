"use client";
import Image from "next/image"
import bg from "@/assets/image.svg"
import { Typewriter } from 'react-simple-typewriter'
import { Satisfy } from "next/font/google";
import { cn } from "@/utils/cn";
import Link from "next/link";
import dynamic from 'next/dynamic';

// const VaraText = dynamic(() => import('@/utils/Vara'), { ssr: false });

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function AboutMe() {
    return (
        <div className="pl-10">
            <div className="hidden md:flex justify-end">
                <Image src={bg} width={600} height={600} className="absolute -top-3"></Image>
            </div>
            <div className="space-y-4 md:-mt-14">
                <h1 className={cn(satisfy.className, "text-[4.75rem] pt-20 flex gap-4")}>Murali Dharan <p className="-mt-1">R.</p></h1>
                {/* <VaraText text="Murali Dharan R." /> */}
                <div className="font-bold text-xl text-purple">
                    <Typewriter
                        words={['CAREER COACH', 'TRAINER', 'SPEAKER']}
                        loop
                        cursor
                        cursorStyle='|'
                        cursorColor='#FDC435'
                        cursorBlinking={false}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    <p>FOUNDER - CONNECT TRAINING SOLUTIONS</p>
                </div>
                <div>
                    <p className="text-3xl py-7 break-inside-avoid-column">
                        Short text with details about you, what <br /> you do or your professional career. You <br /> can add more on the about page.
                    </p>
                </div>
            </div>
            <div className="flex justify-start gap-6">
                <Link href={""} className="rounded bg-sm bg-yellow px-5 py-2">My Work</Link>
                <Link href={""} className="rounded bg-sm bg-purple text-white px-5 py-2 ">Contact</Link>
            </div>
        </div>
    )
}
