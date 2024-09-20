"use client"

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import DownloadCard from "@components/reusable/DownloadCard";
import pic1 from '../assets/downloadCard_icon_1.svg';
import pic2 from '../assets/downloadCard_icon_2.svg';
import pic3 from '../assets/downloadCard_icon_3.svg';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Downloads() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className="flex flex-col justify-center gap-6 md:gap-12 my-10 px-4"
    >
      <motion.div
        variants={staggerItem}
        className="flex flex-col md:flex-row justify-center gap-6 md:gap-12"
      >
        <motion.div variants={staggerItem}>
          <DownloadCard
            name={"Media Kit"}
            icon={pic1}
            link={"https://open.spotify.com/"}
            bgColor={"#8280F2"}
          />
        </motion.div>
        <motion.div variants={staggerItem}>
          <DownloadCard
            name={"Guest Profile"}
            icon={pic2}
            link={"https://open.spotify.com/"}
            bgColor={"#FDC435"}
          />
        </motion.div>
      </motion.div>
      <motion.div variants={staggerItem}>
        <DownloadCard
          name={"Brochure"}
          icon={pic3}
          link={"https://open.spotify.com/"}
          bgColor={"#F3F3F3"}
        />
      </motion.div>
    </motion.div>
  );
}