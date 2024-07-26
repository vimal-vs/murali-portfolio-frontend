import { Satisfy } from "next/font/google";
import star from "@assets/seperatorStar.svg"
import diamond from "@assets/seperatorDiamond.svg"
import bookmark from "@assets/seperatorBookmark.svg"
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Seperator({ text, bgColor, textColor }) {
  return (
    <div className="md:pt-6" style={{ backgroundColor: bgColor }}>
      <div className="flex justify-center items-center">
        <h1 className={cn(satisfy.className, "text-3xl md:text-[3.50rem] p-2 flex gap-4")}>{text}</h1>
        {text === "Trusted by the best" && <Image src={star} alt="logo" className="mb-12"></Image>}
        {text === "Customer Testimonials" && <Image src={diamond} alt="logo" className="mb-12"></Image>}
        {text === "My recent blogs" && <Image src={bookmark} alt="logo" className="mb-12"></Image>}
        {text === "My Podcasts" && <FaYoutube className="mb-12 text-2xl" />}
      </div>
      {text === "Want to make an appointment ?" &&
        <div className="flex justify-center pb-4 md:py-4">
          <Link href="https://www.spotify.com" className="flex justify-center font-medium rounded-xl bg-yellow w-[150px] md:w-[200px] py-2">Book Now</Link>
        </div>
      }
    </div>
  )
} 