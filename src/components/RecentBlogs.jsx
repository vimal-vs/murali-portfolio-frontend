"use client";

import RecentBlogsCard from "@components/reusable/RecentBlogsCard";
import { useEffect, useState, useRef } from "react";
import { getAllBlogs } from "@actions/blogs";
import { motion, useAnimation, useInView } from "framer-motion";

export default function RecentBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogs();
      setBlogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-6">
      {blogs?.map((item, index) => (
        <BlogCard key={index} item={item} />
      ))}
    </div>
  );
}

function BlogCard({ item }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const staggerItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerItem}
      className="mb-6"
    >
      <RecentBlogsCard
        thumbnail={item.imageUrl}
        title={item.title}
        content={item.content.substring(0, 150) + '...'}
        date={item.date}
        url={item.link}
      />
    </motion.div>
  );
}