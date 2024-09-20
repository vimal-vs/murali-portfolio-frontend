"use client";

import { useEffect, useRef, useState } from "react";
import tamilVideo from "@assets/about/tamil.mp4";
import englishVideo from "@assets/about/english.mp4";


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

  return (
    <div className="relative flex justify-center items-center my-20">
      {/* Video Section */}
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
            className="w-1/2 bg-black bg-opacity-60 flex justify-center items-center cursor-pointer hover:bg-opacity-80 transition-all"
          >
            <span className="text-white text-2xl font-bold">English</span>
          </div>
          <div
            onClick={() => handleLanguageSelect("tamil")}
            className="w-1/2 bg-black bg-opacity-60 flex justify-center items-center cursor-pointer hover:bg-opacity-80 transition-all"
          >
            <span className="text-white text-2xl font-bold">தமிழ்</span>
          </div>
        </div>
      )}
    </div>
  );
}
