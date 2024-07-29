"use client"

import { cn } from "@utils/cn"
import { Nova_Mono } from "next/font/google"
import PodcastCard from "./reusable/PodcastCard"
import { useEffect, useState } from "react"
import getEmbedUrl from "./reusable/EmbedUrl"
import { getAllPodcasts } from "@actions/podcasts"
import { motion } from "framer-motion"

const novamono = Nova_Mono({ weight: '400', subsets: ['latin'] })

export default function Podcasts() {
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPodcasts()
      setPodcasts(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 w-full mx-auto"
      >
        <h1 className={cn(novamono.className, "text-center text-5xl md:text-9xl underline decoration-8 underline-offset-8 text-white decoration-[#FFCE31]")}>
          PODCASTS
        </h1>
      </motion.div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            className="grid grid-cols-2 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {podcasts?.map((item, index) => (
              <motion.div key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <PodcastCard title={item.title} description={item.description} url={getEmbedUrl(item.url)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}