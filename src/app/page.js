import Downloads from "@components/Downloads";
import AboutMe from "@/components/AboutMe";
import StatsCard from "@components/reusable/StatsCard";
import RecentBlogs from "@components/RecentBlogs";
import LandingVideo from "@components/LandingVideo.jsx"
import Separator from "@components/reusable/Separator";
import TrustedBar from "@components/TrustedBar";
import iconHeart from '../assets/heart.svg'
import iconStar from '../assets/star.svg'
import iconTri from '../assets/triangle.svg'
import Testimonials from "@components/Testimonials";
import dynamic from 'next/dynamic';
import PropsBar from "@components/PropsBar";
import MyPodcasts from "@components/MyPodcasts";
import Clickable from "@components/reusable/Clickable";



const MasonryGallery = dynamic(() => import('@components/reusable/MasonryGallery'), { ssr: false });

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <AboutMe />
      <div className="flex justify-around mt-10">
        <StatsCard icon={iconHeart} content={"asdfa sdfasd fas dfasd asdfa sdfasd"} stats={"10M"} />
        <StatsCard icon={iconStar} content={"asdfa sdf asdfas dfasd asdfasdfasd"} stats={"21K"} />
        <StatsCard icon={iconTri} content={"asdf asdfasdf asdfasd asdf asdfasd"} stats={"30%"} />
      </div>
      <LandingVideo embedId={"WGvtr4SPGpw?si=7ktQKc03n6e-sfFm"} />
      <PropsBar />
      <Separator text={"Trusted by the best"} bgColor={"#FDC435"} />
      <TrustedBar />
      <Testimonials />
      <MasonryGallery />
      <Clickable text = "View Gallery"/>
      <Separator text={"My recent blogs"} bgColor={"#fff"} />
      <RecentBlogs />
      <MyPodcasts />
      <Separator text={"Want to make an appointment ?"} bgColor={"#8280F2"} />
      <Downloads />
    </main>
  );
}