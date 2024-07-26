"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StatsCard({ icon, stats, content, marginLeft }) {
  const [count, setCount] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const end = stats;

    const easeOutQuad = (t) => t * (2 - t);

    let startTime;
    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const newValue = Math.floor(easedProgress * end);

      setCount(newValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setAnimationDone(true);
      }
    };

    requestAnimationFrame(update);
  }, [stats]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center relative">
        <motion.h1
          className="text-5xl mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {count}
        </motion.h1>
        <motion.div
          className={`absolute -z-10 bottom-9 -right-5 md:bottom-6 ${marginLeft ? "md:-right-7" : "md:-right-8"}`}
          initial={{ scale: 1, opacity: 0 }}
          animate={animationDone ? { scale: [1, 1.2, 1], opacity: [1, 1, 1] } : { opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }}
        >
          <Image src={icon} alt="logo" width={50} height={50} className="" />
        </motion.div>
      </div>
      <p className="mt-3 text-center md:max-w-[250px] text-lg md:text-2xl">{content}</p>
    </div>
  );
}