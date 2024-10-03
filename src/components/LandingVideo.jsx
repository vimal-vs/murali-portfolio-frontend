"use client";

import { useEffect, useRef, useState } from "react";
import tamilVideo from "@assets/about/tamil.mp4";
import englishVideo from "@assets/about/english.mp4";
import motion from "framer-motion";

export default function LandingVideo() {
  const videoRef = useRef(null);
  const [language, setLanguage] = useState("");

  const videoSource = language === "tamil" ? tamilVideo : englishVideo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && language) {
            videoRef.current?.play().catch((error) => {
              console.error("Failed to autoplay video:", error);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [language]);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    videoRef.current?.play();
  };

  const PlaySvg = () => {
    return (
      <svg fill="#ffffff" className="size-[60px] md:size-[100px] animate-pulse" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"></path> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path> </g> </g></svg>
    )
  }

  return (
    <div className="relative flex justify-center items-center my-20">
      <video
        ref={videoRef}
        key={videoSource}
        className="md:border-[10px] border-black md:rounded-2xl md:w-[90%]"
        controls={!!language}
        playsInline
        loop
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      {!language && (
        <div className="absolute inset-0 flex md:w-[90%] mx-auto">
          <div
            onClick={() => handleLanguageSelect("english")}
            className="w-1/2 bg-black bg-opacity-70 flex flex-col justify-center items-center cursor-pointer hover:bg-opacity-80 transition-all relative"
          >
            <PlaySvg />
            <span className="text-white text-2xl font-bold mt-8">English</span>
          </div>

          <div
            onClick={() => handleLanguageSelect("tamil")}
            className="w-1/2 bg-black bg-opacity-70 flex flex-col justify-center items-center cursor-pointer hover:bg-opacity-80 transition-all relative"
          >
            <PlaySvg />
            <span className="text-white text-2xl font-bold mt-8">தமிழ்</span>
          </div>
        </div>
      )}
    </div>
  );
}
