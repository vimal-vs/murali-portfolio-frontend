"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function Props({ icon, text }) {
  const infiniteAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-5 justify-center items-center"
      variants={infiniteAnimation}
    >
      <motion.div animate={infiniteAnimation}>
        <Image src={icon} alt="logo" className="size-20" />
      </motion.div>
      <p className="text-center">{text}</p>
    </motion.div>
  );
}