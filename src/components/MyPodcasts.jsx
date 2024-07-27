"use client";

import Clickable from "./reusable/Clickable";
import { getAllPodcasts } from "@actions/podcasts";
import { useEffect, useState } from "react";
import getEmbedUrl from "./reusable/EmbedUrl";
import Seperator from "./reusable/Separator";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MyPodcasts() {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPodcasts();
            setPodcasts(data);
        };
        fetchData();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className="flex flex-col justify-start relative my-10">
            <div className="flex flex-col w-full space-y-6">
                <Seperator text="My recent podcasts" />
                <Carousel
                    swipeable
                    draggable
                    showDots
                    renderDotsOutside
                    responsive={responsive}
                    ssr
                    infinite
                    autoPlaySpeed={1000}
                    keyBoardControl
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="pl-32"
                >
                    {podcasts?.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md m-4 text-center h-[450px] max-w-[500px]">
                            <iframe
                                src={getEmbedUrl(item.url)}
                                title={`YouTube video player ${index}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-[300px]"
                            ></iframe>
                            <div className="mt-4 p-4 ">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-2 truncate">{item.description}</p>
                                {/* <p className="text-gray-400 text-sm">{new Date(item.date).toLocaleDateString()}</p> */}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex justify-end mt-2 mr-20">
                <Clickable text="View all podcasts" url="/podcasts" />
            </div>
        </div>
    );
}