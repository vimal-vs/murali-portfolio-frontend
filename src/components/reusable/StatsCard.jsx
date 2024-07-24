"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatsCard({ icon, stats, content, marginLeft }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-5xl mt-2">{stats}</h1>
        <motion.div
          className={`absolute -z-10 bottom-9 -right-5 md:bottom-6 ${marginLeft ? "md:-right-3" : "md:-right-4"}`}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={icon} alt="logo" width={50} height={50} className="" />
        </motion.div>
      </div>
      <p className="mt-3 text-center md:max-w-[250px] text-lg md:text-2xl">{content}</p>
    </div>
  );
}