"use client";

import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "@/assets/whatsapp_avatar.png"
import footer_vector from "@/assets/footer_yellow.svg"
import close from "@/assets/close.svg"
import Image from 'next/image';
import { useState } from 'react';
import { useCommonContext } from '@contexts/CommonContext';

export default function Footer() {
    const [closeWhatsappPopup, setCloseWhatsappPopup] = useState(false);

    const footerData = useCommonContext()?.data?.footer;
    const LinksData = useCommonContext()?.data?.links;

    return (
        <>
            <footer className="bg-white text-black p-8 mt-8 border-t-2 border-black">
                <h2 className="text-2xl md:text-5xl font-bold flex gap-2 tracking-wide">Let us stay<span className="text-purple">CONNECT</span>ed</h2>
                <div className="mt-6 md:mt-0 flex flex-col lg:flex-row justify-between md:items-center pb-6">
                    <div className='md:w-2/4 flex flex-col md:flex-row justify-between md:items-center'>
                        <motion.div
                            className="flex flex-col gap-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-5">
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <a href="mailto:hi@connectmurali.com">{footerData?.email}</a>
                                </div>
                                <div className="flex items-center">
                                    <FaPhoneAlt className="mr-2" />
                                    <span>{footerData?.contactNumber}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <address className='max-w-[300px]'>
                                        {footerData?.address}
                                    </address>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="flex md:justify-center mt-8 lg:mt-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex md:grid md:grid-cols-2 justify-center items-center gap-6">
                                <a href={LinksData?.facebook} className="text-2xl"><FaFacebookF /></a>
                                <a href={LinksData?.youtube} className="text-2xl"><FaYoutube /></a>
                                <a href={LinksData?.instagram} className="text-2xl"><FaInstagram /></a>
                                <a href={LinksData?.linkedin} className="text-2xl"><FaLinkedinIn /></a>
                                <a href={LinksData?.twitter} className="text-2xl"><FaTwitter /></a>
                                <a href={LinksData?.whatsapp} className="text-2xl"><FaWhatsapp /></a>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="flex flex-col mt-8 md:mt-0 md:w-[2/4] md:mr-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold">Quick <span className="text-purple">Links</span></h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#">Schedule Appointment</a></li>
                            <li><a href="#">Media Kit</a></li>
                            <li><a href="#">Events & Gallery</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Podcasts</a></li>
                        </ul>
                    </motion.div>
                </div>
                <Image src={footer_vector} alt="logo" className='absolute w-screen left-0 -mt-20 h-[120px] object-cover' />
            </footer>
            {closeWhatsappPopup === false && (
                <FloatingWhatsApp
                    phoneNumber={footerData?.phoneNumber}
                    accountName="Murali Dharan R"
                    statusMessage="Available"
                    chatMessage='Hey there, want to connect?'
                    avatar={avatar.src}
                    notificationDelay={5}
                />
            )}
            {closeWhatsappPopup === false && (<button className="text-xl bg-white rounded-full font-semibold fixed z-10 bottom-20 right-[0.6rem]" onClick={() => { setCloseWhatsappPopup(true) }}><Image src={close} alt="logo" className='size-5' />
            </button>)}
        </>
    );
}