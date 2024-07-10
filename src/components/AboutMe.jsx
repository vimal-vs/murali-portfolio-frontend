import Image from "next/image"
import bg from "@/assets/lavenderBg1.svg"

export default function AboutMe() {
    return (
        <div className="pl-10">
            <div className="flex justify-end">
                <Image src={bg} className="absolute -top-16"></Image>
            </div>
            <div className="space-y-4">
                <h1 className="text-7xl pt-20">Murali Dharan R.</h1>
                <div className="font-bold text-xl text-[#8280F2]">
                    <p>CAREER COACH</p>
                    <p>FOUNDER - CONNECT TRAINING SOLUTIONS</p>
                </div>
                <div>
                    <p className="text-3xl py-7 break-inside-avoid-column">
                        Short text with details about you, what <br /> you do or your professional career. You <br /> can add more on the about page.
                    </p>
                </div>
            </div>
            <div className="flex justify-start gap-6">
                <button type="button" className="rounded bg-sm bg-yellow-500 px-5 py-2">My Work</button>
                <button type="button" className="rounded bg-sm bg-[#8280F2] text-white px-5 py-2 ">Contact</button>
            </div>
        </div>
    )
}
