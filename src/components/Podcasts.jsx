"use client"

import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import PodcastCard from "./reusable/PodcastCard"
import { useEffect, useState } from "react";
import getEmbedUrl from "./reusable/EmbedUrl";
import { getAllPodcasts } from "@actions/podcasts";

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Podcasts() {

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPodcasts();
      console.log(data)
      setPodcasts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="absolute inset-20 z-10">
        <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>PODCASTS</h1>
      </div>

      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {podcasts?.map((item, index) => (
              <PodcastCard key={index} title={item.title} description={item.description} url={getEmbedUrl(item.url)} />
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}



