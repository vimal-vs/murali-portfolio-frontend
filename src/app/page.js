import Downloads from "@components/Downloads";
import AboutMe from "@/components/AboutMe";
import StatsCard from "@components/reusable/StatsCard";
import RecentBlogs from "@components/RecentBlogs";
import LandingVideo from "@components/LandingVideo.jsx"
import Seperator from "@components/reusable/Seperator";
import TrustedBar from "@components/TrustedBar";
import iconHeart from '../assets/heart.svg'
import iconStar from '../assets/star.svg'
import iconTri from '../assets/triangle.svg'
import Testimonials from "@components/Testimonials";
import dynamic from 'next/dynamic';
import PropsBar from "@components/PropsBar";



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
      <Seperator text={"Trusted by the best"} bgColor={"#FDC435"} />
      <TrustedBar />
      <Testimonials />
      <MasonryGallery images={[
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&h=300",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&h=500",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=500&h=500",
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&h=400",
        "https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=700&h=500",
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=600&h=400",
      ]} />
      <Seperator text={"My recent blogs"} bgColor={"#fff"} />
      <RecentBlogs />
      <Seperator text={"Want to make an appointment ?"} bgColor={"#8280F2"} />
      <Downloads />
    </main>
  );
}