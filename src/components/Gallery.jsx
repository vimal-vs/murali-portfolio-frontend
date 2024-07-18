import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import GalleryCard from "./reusable/GalleryCard"
import MasonryGallery from "./reusable/MasonryGallery"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Gallery() {
  return (
    <div>
        <div className="absolute inset-20 z-10">
            <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>GALLERY</h1>
        </div>
        <GalleryCard />
        <MasonryGallery images={[
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&h=300",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&h=500",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&h=500",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=700&h=500",
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=600&h=400",
      ]}/>
    </div> 
  )
}
