"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bars from "@assets/bars.svg";
import clock from "@assets/clock.svg";
import mousePointer from "@assets/mousePointer.svg";
import shield from "@assets/shield.svg";
import Props from "./reusable/Props";

export default function PropsBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 gap-y-6 md:flex md:justify-around items-center my-32"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Props icon={mousePointer} text={"Instant online purchase"} />
      <Props icon={shield} text={"Secure Purchase"} />
      <Props icon={bars} text={"Compare costs and coverages"} />
      <Props icon={clock} text={"Available 24/7"} />
    </motion.div>
  );
}