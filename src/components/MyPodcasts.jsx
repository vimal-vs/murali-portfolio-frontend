import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import leftImg from "@assets/vinh.svg"
import podcastFiller from "@assets/podcastFiller.svg"
import Image from "next/image";
import Link from "next/link";
import arrow from "@assets/anotherArrow.svg"

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function MyPodcasts() {
  return (
    <div className="flex justify-around relative">
        <Image src={leftImg}></Image>
        <div>
            <h1 className={cn(satisfy.className, "text-[3.50rem] p-2 flex gap-4 justify-center")}>My Podcasts</h1>
            <div className="flex gap-10 mt-10">
                <Image src={podcastFiller}></Image>
                <Image src={podcastFiller}></Image>
            </div>
            <div className="flex gap-10 py-10">
                <Image src={podcastFiller}></Image>
                <Image src={podcastFiller}></Image>
            </div>
            <div className="flex gap-10">
                <Image src={podcastFiller}></Image>
                <Image src={podcastFiller}></Image>
            </div>
            <div className="flex justify-end">
                <Link href={"#"} className={cn(satisfy.className, "text-[3.50rem] p-2 flex gap-4 justify-center underline decoration-[#FDC435]")}>View all podcasts</Link>
                <Image src={arrow} className="size-20"></Image>
            </div>
        </div>
    </div>
  )
}
