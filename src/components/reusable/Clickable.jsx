import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import arrow from "@assets/anotherArrow.svg"

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Clickable({ text }) {
  return (
    <div className="flex justify-end">
      <Link href={"#"} className={cn(satisfy.className, "text-3xl p-2 flex gap-4 justify-center underline decoration-[#FDC435]")}>{text}</Link>
      <Image src={arrow} className="size-15"></Image>
    </div>
  )
}
