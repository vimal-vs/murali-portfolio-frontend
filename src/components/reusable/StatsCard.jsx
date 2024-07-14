"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatsCard({ icon, stats, content }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-5xl mt-2">{stats}</h1>
        <motion.div
          className="absolute -z-10 bottom-6 right-8"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image src={icon} width={50} height={50} className="" />
        </motion.div>
      </div>
      <p className="mt-3 text-center max-w-[200px]">{content}</p>
    </div>
  );
}