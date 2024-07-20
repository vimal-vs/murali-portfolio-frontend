"use client";

import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import leftImg from "@assets/vinh.svg";
import Image from "next/image";
import Clickable from "./reusable/Clickable";
import { getAllPodcasts } from "@actions/podcasts";
import { useEffect, useState } from "react";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    let videoId = '';

    if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
        videoId = urlObj.searchParams.get('v');
    } else if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
    }

    return `https://www.youtube.com/embed/${videoId}`;
};

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
            <div className="w-full">
                <h1 className={cn(satisfy.className, "text-[3.50rem] w-full text-center")}>
                    My Podcasts
                </h1>
                <div className="grid grid-cols-2 gap-2 -ml-20 mt-10 absolute ">
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
                    <Clickable text="View all podcasts" />
                </div>
            </div>
        </div>
    );
}