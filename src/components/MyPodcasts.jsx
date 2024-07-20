"use client"

import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import leftImg from "@assets/vinh.svg"
import podcastFiller from "@assets/podcastFiller.svg"
import Image from "next/image";
import Link from "next/link";
import Clickable from "./reusable/Clickable";
import { getAllPodcasts } from "@actions/podcasts";
import { useEffect, useState } from "react";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function MyPodcasts() {

    const [Podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
          const data = await getAllPodcasts();
          console.log(data)
          setPodcasts(data)
        } 
        fetchData()
      },[])


  return (
    <div className="flex justify-around relative">
        <Image src={leftImg}></Image>
        <div>
            <h1 className={cn(satisfy.className, "text-[3.50rem] p-2 flex gap-4 justify-center")}>My Podcasts</h1>
            <div className="flex gap-10 mt-10 z-10">
                {Podcasts?.map((item, index) =>
                    <div className="ml-6">
                        <iframe 
                            width="540"
                            height="295" 
                            src={item.url} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                        </iframe>
                    </div>
                )}
            </div>
            <div className="flex gap-10 mt-10 z-10">
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex gap-10 py-10">
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="flex gap-10">
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="540" height="295" src="https://www.youtube.com/embed/ZM4VMybQ3lI?si=Ilhq4xPNPpkW0XPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <Clickable text="View all podcasts"/>
        </div>
    </div>
  )
}

