"use client"

import RecentBlogsCard from "@components/reusable/RecentBlogsCard";
import filler from '@assets/fillerImg.svg'
import { useEffect, useState } from "react";
import { getAllBlogs } from "@actions/blogs"

export default function RecentBlogs() {

  const [Blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      const data = await getAllBlogs();
      console.log(data)
      setBlogs(data)
    } 
    fetchData()
  },[])

  return (
    <div className="gap-2">
        {Blogs?.map((item, index) =>
          <div>
            <RecentBlogsCard key={index} thumbnail = {filler} title={item.title} content ={item.content} bgColor = {"#516470"}/>
          </div>)}
    </div>
  )
}
