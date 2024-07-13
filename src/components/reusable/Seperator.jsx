import { Satisfy } from "next/font/google";
import star from "@assets/seperatorStar.svg"
import diamond from "@assets/seperatorDiamond.svg"
import bookmark from "@assets/seperatorBookmark.svg"
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Seperator( {text, bgColor, textColor} ) {
  return (
    <div className="p-3" style={{ backgroundColor: bgColor }}>
        <div className="flex justify-center">
            <h1 className={cn(satisfy.className, "text-[3.50rem] p-2 flex gap-4")}>{text}</h1>
            {text == "Trusted by the best" && <Image src={ star } className="mb-12"></Image> }
            {text == "Customer Testimonials" && <Image src={ diamond } className="mb-12"></Image> }
            {text == "My recent blogs" && <Image src={ bookmark } className="mb-12"></Image> }
        </div>
        {text === "Want to make an appointment?" && 
          <div className="flex justify-center">
            <Link href="https://www.spotify.com" className="rounded bg-sm bg-yellow px-5 py-2">Book Now</Link>
          </div>
        }  
    </div>
  )
} 