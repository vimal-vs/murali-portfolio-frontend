"use client"

import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import RecentBlogsCard from "./reusable/RecentBlogsCard"
import { useState, useEffect } from "react"
import { getAllBlogs } from "@actions/blogs"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Blogs({ limit = true, padding }) {

  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogs({ limit });
      setBlogs(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="absolute top-5 md:top-32 w-full mx-auto">
        <h1
          className={cn(
            novamono.className,
            "text-center text-4xl md:text-9xl md:underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]"
          )}
        >
          BLOGS
        </h1>
      </div>
      <div className={`${padding ? "mx-5 md:mx-12" : ""} mt-5`}>
        {Blogs?.map((item, index) =>
          <RecentBlogsCard key={index} thumbnail={item.imageUrl} date={item.date} title={item.title} content={item.content} bgColor={"#516470"} />
        )}
      </div>
    </div>
  )
}
