"use client"

import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import RecentBlogsCard from "./reusable/RecentBlogsCard"
import { useState, useEffect } from "react"
import { getAllBlogs } from "@actions/blogs"
import filler from "@assets/fillerImg.svg"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Blogs() {

  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogs();
      setBlogs(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="absolute inset-20 z-10">
        <h1 className={cn(novamono.className, "text-center text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>BLOG</h1>
      </div>
      {Blogs?.map((item, index) =>
        <div>
          <RecentBlogsCard key={index} thumbnail={item.imageUrl} title={item.title} content={item.content} bgColor={"#516470"} />
        </div>)}
    </div>
  )
}
