"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Downloads" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/gallery", label: "Gallery" }
  ];
  return (
    <nav className={`flex justify-between items-center pr-8 z-10 w-full fixed transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white pt-1'}`}>
      <motion.h1
        className="text-2xl font-medium px-7"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isScrolled && "Murali Dharan R."}
      </motion.h1>
      <div className="flex gap-8 font-semibold">
        {navItems.map(item => (
          <Link key={item.href} href={item.href} className={`px-7 py-4 text-lg ${isScrolled ? "hover:text-purple" : "hover:text-yellow"} ${router.pathname === item.href ? 'text-yellow' : ''}`}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}