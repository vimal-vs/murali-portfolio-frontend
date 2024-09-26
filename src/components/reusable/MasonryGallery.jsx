"use client";

import { getAllEvents } from "@actions/events";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function MasonryGallery() {
    const [Images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllEvents();
            const commonData = data.filter(event => event.id === 1);
            setImages(commonData[0]?.imageUrls)
        }
        fetchData()
    }, [])

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full px-1"
        >
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {Images?.map((image, index) => {
                    return (
                        <div
                            key={index}
                            variants={staggerItem}
                            className="w-full h-full"
                        >
                            <Image
                                className="object-cover"
                                src={image}
                                alt={`Image ${index + 1}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '100%' }}
                                variants={staggerItem}
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
