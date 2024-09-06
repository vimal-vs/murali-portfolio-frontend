"use client";

import { cn } from "@utils/cn";
import { Nova_Mono } from "next/font/google";
import GalleryCard from "./reusable/GalleryCard";
import MasonryGallery from "./reusable/MasonryGallery";
import { getAllEvents } from "@actions/events";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] });

export default function Gallery() {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllEvents();
      setEvents(data.filter((event) => event.id !== 0));
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="absolute top-5 md:top-20 w-full mx-auto">
        <h1
          className={cn(
            novamono.className,
            "text-center text-4xl md:text-9xl md:underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]"
          )}
        >
          GALLERY
        </h1>
      </div>

      <div className="my-12 md:my-20 min-w-0 md:w-[90%] md:mx-auto">
        {Events?.length > 0 && (
          <Slider {...settings}>
            {Events.map((item, index) => (
              <div key={index} className="px-8 md:h-[550px]">
                <GalleryCard content={item} />
              </div>
            ))}
          </Slider>
        )}
      </div>
      <MasonryGallery />
    </div>
  );
}