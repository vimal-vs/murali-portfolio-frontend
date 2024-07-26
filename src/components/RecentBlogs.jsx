"use client"

import RecentBlogsCard from "@components/reusable/RecentBlogsCard";
import { useEffect, useState } from "react";
import { getAllBlogs } from "@actions/blogs"

export default function RecentBlogs() {

  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogs();
      setBlogs(data)
    }
    fetchData()
  }, [])

  return (
    <div className="mt-6">
      {Blogs?.map((item, index) =>
        <div>
          <RecentBlogsCard
            key={index}
            thumbnail={item.imageUrl}
            title={item.title}
            content={item.content.substring(0, 150) + '...'}
            date={item.date} u
            rl={item.link} />
        </div>)}
    </div>


  )
}
