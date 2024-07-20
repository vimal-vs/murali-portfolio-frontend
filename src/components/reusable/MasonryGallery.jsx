"use client";

import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function MasonryGallery({ images }) {
    return (
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 ">
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
    )
}
