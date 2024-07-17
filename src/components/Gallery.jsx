import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Gallery() {
  return (
    <div>
        <div className="absolute inset-20 z-10">
            <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>GALLERY</h1>
        </div>
    </div>
  )
}
