"use client";

import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import leftImg from "@assets/vinh.svg";
import Image from "next/image";
import Clickable from "./reusable/Clickable";
import { getAllPodcasts } from "@actions/podcasts";
import { useEffect, useState } from "react";
import getEmbedUrl from "./reusable/EmbedUrl";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function MyPodcasts() {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPodcasts();
            setPodcasts(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex justify-start relative">
            <Image src={leftImg} alt="Left Image" />
            <div className="flex flex-col w-full">
                <h1 className={cn(satisfy.className, "text-[3.50rem] w-full text-center")}>
                    My Podcasts
                </h1>
                <div className="grid grid-cols-2 gap-2 -ml-20 mt-10 ">
                    {podcasts?.map((item, index) => (
                        <div key={index} className="ml-6">
                            <iframe
                                width="400"
                                height="250"
                                src={getEmbedUrl(item.url)}
                                title={`YouTube video player ${index}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Clickable text="View all podcasts" url="/podcasts"/>
                </div>
            </div>
        </div>
    );
}
