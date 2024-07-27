"use client";

import { motion } from "framer-motion";

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

export default function MasonryGallery({ images }) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }} // Ensures the animation happens only once when 30% of the element is in view
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
            <div className="grid gap-4">
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                        alt=""
                    />
                </motion.div>
            </div>
            <div className="grid gap-4">
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                        alt=""
                    />
                </motion.div>
            </div>
            <div className="grid gap-4">
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                        alt=""
                    />
                </motion.div>
            </div>
            <div className="grid gap-4">
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                        alt=""
                    />
                </motion.div>
                <motion.div variants={staggerItem}>
                    <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                        alt=""
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
