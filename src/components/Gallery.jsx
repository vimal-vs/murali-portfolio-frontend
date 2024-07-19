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
        

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""></img>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""></img>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""></img>
              </div>
          </div>
          <div class="grid gap-4">
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""></img>
              </div>
              <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""></img>
              </div>
          </div>
      </div>

    </div> 
  )
}
