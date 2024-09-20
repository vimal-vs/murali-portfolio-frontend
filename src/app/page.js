import Downloads from "@components/Downloads";
import AboutMe from "@/components/AboutMe";
import RecentBlogs from "@components/RecentBlogs";
import LandingVideo from "@components/LandingVideo.jsx"
import Separator from "@components/reusable/Separator";
import TrustedBar from "@components/TrustedBar";
import Testimonials from "@components/Testimonials";
import dynamic from 'next/dynamic';
import PropsBar from "@components/PropsBar";
import MyPodcasts from "@components/MyPodcasts";
import Clickable from "@components/reusable/Clickable";
import Statistics from "@components/Statistics";

const MasonryGallery = dynamic(() => import('@components/reusable/MasonryGallery'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col">
      <AboutMe />
      <Statistics />
      <LandingVideo embedId={"WGvtr4SPGpw?si=7ktQKc03n6e-sfFm"} />
      <Separator text={"Trusted by the best"} bgColor={"#FDC435"} />
      <TrustedBar />
      <Testimonials />
      <div className="flex flex-col gap-5 mt-28 md:mt-16 mb-10">
        <MasonryGallery />
        <Clickable text="View Gallery" url="/gallery" />
      </div>
      <Separator text={"My recent blogs"} bgColor={"#fff"} />
      <RecentBlogs />
      <div className="flex justify-end md:mr-20">
        <Clickable text="View all blogs" url="/blogs" />
      </div>
      <MyPodcasts />
      <Separator text={"Want to make an appointment ?"} bgColor={"#8280F2"} />
      <Downloads />
    </main>
  );
}