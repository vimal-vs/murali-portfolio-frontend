"use client"
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useCommonContext } from "@contexts/CommonContext";
import { motion } from "framer-motion";

const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FooterSocials({ grid3 = false }) {
    const LinksData = useCommonContext()?.data?.links;
    return (
        <motion.div
            className="flex md:justify-center mt-8 lg:mt-0"
            variants={staggerItem}
        >
            <motion.div className={`md:grid w-full md:grid-cols-2 justify-center items-center ${grid3 ? "grid grid-cols-3 gap-y-8" : "flex gap-8"}`}>
                {LinksData && Object.keys(LinksData).map((key, index) => (
                    <motion.a
                        key={index}
                        href={LinksData[key]}
                        className="text-2xl mx-auto"
                        variants={iconVariants}
                    >
                        {key === 'facebook' && <FaFacebookF />}
                        {key === 'youtube' && <FaYoutube />}
                        {key === 'instagram' && <FaInstagram />}
                        {key === 'linkedin' && <FaLinkedinIn />}
                        {key === 'twitter' && <FaTwitter />}
                        {key === 'whatsapp' && <FaWhatsapp />}
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    )
}