"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import logo from "@assets/logo.png";
import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    pathname !== "/" && { href: "/", label: "Home" },
    { href: "https://drive.google.com", label: "Downloads" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/gallery", label: "Gallery" },
  ].filter(Boolean);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[9999] flex justify-between items-center md:pr-8 transition-colors duration-300 ${isScrolled || pathname !== "/" ? 'bg-white text-black shadow-md' : 'bg-transparent text-white pt-1'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-medium md:px-7"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{
            opacity: isScrolled || pathname !== "/" ? 1 : 0,
            scale: isScrolled || pathname !== "/" ? 1 : 0.8
          }}
          transition={{
            duration: 0.7,
            ease: [0.68, -0.55, 0.27, 1.55]
          }}
        >
          {(isScrolled || pathname !== "/") && (
            <Link href={"/"} className={cn(satisfy.className, "flex items-center")}>
              <Image src={logo} className="size-16" alt="logo" />
              <p className="text-3xl block">uralidharan</p>
            </Link>
          )}
        </motion.h1>
        <div className="md:hidden flex items-center pr-3">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex md:gap-8 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 md:px-7 py-4 text-lg transition-colors duration-300 ${isScrolled || pathname !== "/" ? "hover:text-purple text-black" : "hover:text-yellow text-white hidden md:block"} ${pathname === item.href && 'text-yellow'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: (isMenuOpen && isScrolled) ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-[9998] flex flex-col items-center pt-20 shadow-lg md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xl font-medium mb-8 ${pathname === item.href ? 'text-yellow' : 'text-black'}`}
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </>
  );
}
