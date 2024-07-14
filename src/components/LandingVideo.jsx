"use client";

import { useEffect, useRef } from 'react';
import video from "@assets/video.mp4";

export default function LandingVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current.play().catch((error) => {
              console.error('Failed to autoplay video:', error);
            });
          } else {
            videoRef.current.pause();
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
  }, []);

  return (
    <div className="flex justify-center">
      <video ref={videoRef} className="border-[10px] border-black rounded-2xl w-[80%]" controls playsInline muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
