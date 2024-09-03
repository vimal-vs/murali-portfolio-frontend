"use client"

import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import GalleryCard from "./reusable/GalleryCard"
import MasonryGallery from "./reusable/MasonryGallery"
import { getAllEvents } from "@actions/events"
import { useEffect, useState } from "react"


const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Gallery() {

  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllEvents();
      setEvents(data.filter(event => event.id !== 0))
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="absolute top-20 w-full mx-auto">
        <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>GALLERY</h1>
      </div>
      <div className="flex justify-around my-12">
        {Events?.map((item, index) =>
          <div>
            <GalleryCard key={index} content={item} />
          </div>
        )}
      </div>
      <MasonryGallery />
    </div>
  )
}
