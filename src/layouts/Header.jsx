"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@assets/logo.png";
import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "https://drive.google.com", label: "Downloads" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/gallery", label: "Gallery" }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[9999] flex justify-between items-center pr-8 transition-colors duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white pt-1'}`}
      initial={{ y: -100 }}
      animate={{ y: isScrolled ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.h1
        className="hidden md:block text-2xl font-medium px-7"
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0.8
        }}
        transition={{
          duration: 0.7,
          ease: [0.68, -0.55, 0.27, 1.55]
        }}
      >
        {isScrolled && (
          <Link href={"/"} className={cn(satisfy.className, "flex items-center")}>
            <Image src={logo} className="size-16" />
            <p className="text-3xl">uralidharan</p>
          </Link>
        )}
      </motion.h1>
      <div className="flex md:gap-8 font-semibold">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-7 py-4 text-lg transition-colors duration-300 ${isScrolled ? "hover:text-purple" : "hover:text-yellow"} ${router.pathname === item.href ? 'text-yellow' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
