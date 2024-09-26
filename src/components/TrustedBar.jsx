"use client";

import Image from "next/image"
import Marquee from "react-fast-marquee"
import { getAllClients } from "@actions/clients"
import { useEffect, useState } from "react";

export default function TrustedBar() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllClients();
      setClients(data?.imageUrls)
    }
    fetchData()
  }, [])

  return (
    <div className="gap-y-8 py-8 md:py-16 flex md:flex-row md:flex-wrap justify-center items-center gap-4 md:justify-around md:md-0">
      <Marquee
        pauseOnHover
        pauseOnClick
        speed={40}
        direction="right"
      >
        {clients?.map((item, index) => {
          return <Image key={index} src={item} width={100} height={100} alt="logo" className="w-28 mr-20"></Image>
        })}
      </Marquee>
    </div>
  )
}
