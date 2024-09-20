"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@assets/logo.png";
import { cn } from "@utils/cn";
import { Satisfy } from "next/font/google";
import { useScreenSize } from "@hooks/useScreenSize";
import { useCommonContext } from "@contexts/CommonContext";
import FooterSocials from "@components/FooterSocials";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const width = useScreenSize();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const commonData = useCommonContext()?.data?.statistics;

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

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  const navItems = [
    pathname !== "/" && { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: commonData?.mediaKit, label: "Downloads" },
    { href: "/gallery", label: "Gallery" },
    { href: "/podcasts", label: "Podcasts" },
  ].filter(Boolean);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[9999] flex justify-between items-center md:pr-8 transition-colors duration-300 ${isScrolled || pathname !== "/" || width.isMobile
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white pt-1"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-medium md:px-7"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{
            opacity: isScrolled || pathname !== "/" || width.isMobile ? 1 : 0,
            scale: isScrolled || pathname !== "/" || width.isMobile ? 1 : 0.8,
          }}
          transition={{
            duration: 0.7,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        >
          {(isScrolled || pathname !== "/" || width.isMobile) && (
            <Link href={"/"} className={cn(satisfy.className, "flex items-center")}>
              <Image src={logo} className="size-16" alt="logo" />
              <p className="text-3xl md:block hidden">uralidharan</p>
            </Link>
          )}
        </motion.h1>

        <div className="md:hidden flex items-center pr-3">
          <button onClick={toggleMenu} className="relative w-6 h-6">
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className="hidden md:flex md:gap-8 font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 md:px-7 py-4 text-lg transition-colors duration-300 ${isScrolled || pathname !== "/"
                ? "hover:text-purple text-black"
                : "hover:text-yellow text-white hidden md:block"
                } ${pathname === item.href && "text-yellow"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[9997]"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-3/4 max-w-[350px] h-full bg-white z-[9998] flex flex-col items-center pt-28 shadow-lg md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xl font-medium mb-8 ${pathname === item.href ? "text-yellow" : "text-black"}`}
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}

        <hr className="w-full border-yellow border-t-2 mt-auto" />

        {/* Contact Info for Mobile */}
        <div className="space-y-5 pt-12 px-6 mb-10 text-base">
          <motion.div className="flex justify-start gap-6" variants={fadeInFromBottom}>
            <Link href={""} className="rounded bg-sm bg-yellow px-5 py-2 whitespace-nowrap">My Work</Link>
            <Link href={""} className="rounded bg-sm bg-purple text-white px-5 py-2">Contact</Link>
          </motion.div>
          <div className="mx-auto">
            <FooterSocials grid3={true} />
          </div>
        </div>
      </motion.div>
    </>
  );
}