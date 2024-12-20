"use client";
import Image from "next/image";
import bg from "@/assets/image.svg";
import image_nobg from "@/assets/image_nobg.png";
import { Typewriter } from 'react-simple-typewriter';
import { Satisfy } from "next/font/google";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useCommonContext } from "@contexts/CommonContext";
import { motion } from "framer-motion";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 1 } },
};

export default function AboutMe() {
    const landingData = useCommonContext()?.data?.landing;
    return (
        <motion.div
            className=""
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="space-y-4 md:-mt-14" variants={containerVariants}>
                <motion.div className="flex md:hidden justify-self-center w-full mt-5" variants={fadeInFromBottom}>
                    <Image src={bg} alt="logo" width={300} height={300} className="w-full" />
                </motion.div>
                <motion.h1 className={cn(satisfy.className, "pl-6 md:pl-10 text-5xl md:text-[4.75rem] pt-8 md:pt-20 flex gap-4")} variants={fadeInFromBottom}>
                    Murali Dharan <p className="-mt-1">R.</p>
                </motion.h1>
                <motion.div className="pl-6 md:pl-10 font-bold text-xl text-purple" variants={fadeInFromBottom}>
                    <Typewriter
                        words={landingData?.header}
                        loop
                        cursor
                        cursorStyle='|'
                        cursorColor='#FDC435'
                        cursorBlinking={false}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                    <p>{landingData?.subHeader}</p>
                </motion.div>
                <motion.div variants={fadeInFromBottom}>
                    <p className="text-xl md:text-2xl py-4 md:py-7 max-w-[500px] pr-4 md:pr-0 pl-6 md:pl-10">
                        {landingData?.shortText}
                    </p>
                </motion.div>
                <motion.div className="flex justify-start gap-6 pl-6 md:pl-10" variants={fadeInFromBottom}>
                    <Link href={""} className="rounded bg-sm bg-yellow px-5 py-2">My Work</Link>
                    <Link href={""} className="rounded bg-sm bg-purple text-white px-5 py-2">Contact</Link>
                </motion.div>
            </motion.div>
            <motion.div className="hidden lg:flex justify-end" variants={fadeIn}>
                <Image src={bg} alt="logo" width={600} height={600} className="absolute -top-3" />
            </motion.div>
            <motion.div className="hidden md:flex lg:hidden justify-end" variants={fadeIn}>
                <Image src={image_nobg} alt="logo" width={350} height={350} className="absolute top-2" />
            </motion.div>
        </motion.div>
    );
}
