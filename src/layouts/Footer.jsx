"use client";

import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white text-black p-8 mt-8">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold">Let us stay <span className="text-blue-500">CONNECT</span>ed</h2>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <a href="mailto:hi@connectmurali.com">hi@connectmurali.com</a>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt className="mr-2" />
                            <span>+91 13245 13245</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            <address>
                                18 A/2, 5th Street, Sivanthi Nagar,<br />
                                Tirunelveli, Tamilnadu, India - 627001
                            </address>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center mt-8 lg:mt-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="grid grid-cols-2 justify-center items-center gap-6">
                        <a href="#" className="text-2xl"><FaFacebookF /></a>
                        <a href="#" className="text-2xl"><FaYoutube /></a>
                        <a href="#" className="text-2xl"><FaInstagram /></a>
                        <a href="#" className="text-2xl"><FaLinkedinIn /></a>
                        <a href="#" className="text-2xl"><FaTwitter /></a>
                        <a href="#" className="text-2xl"><FaWhatsapp /></a>
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 mt-8 lg:mt-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold">Quick <span className="text-blue-500">Links</span></h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#">Schedule Appointment</a></li>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Events & Gallery</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Podcasts</a></li>
                    </ul>
                </motion.div>
            </div>
            <div className="bg-yellow-400 h-8 mt-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)' }}></div>
        </footer>
    );
}