import DownloadCard from "@/components/reusable/DownloadCard";
import AboutMe from "@/components/AboutMe";
import StatsCard from "@components/reusable/StatsCard";
import RecentBlogs from "@components/reusable/RecentBlogs";
import LandingVideo from "@components/LandingVideo.jsx"
import Seperator from "@components/reusable/Seperator";
import pic from '../assets/downloadCard_icon_1.svg'
import iconHeart from '../assets/heart.svg'
import iconStar from '../assets/star.svg'
import iconTri from '../assets/triangle.svg'
import Testimonials from "@components/Testimonials";


export default function Home() {
  return (
    <main className="flex flex-col">
      <AboutMe />
      <div className="flex justify-around mt-20">
        <StatsCard icon={iconHeart} content={"asdfa sdfasd fas dfasd asdfa sdfasd"} stats={"10M"} />
        <StatsCard icon={iconStar} content={"asdfa sdf asdfas dfasd asdfasdfasd"} stats={"21"} />
        <StatsCard icon={iconTri} content={"asdf asdfasdf asdfasd asdf asdfasd"} stats={"30%"} />
      </div>
      <LandingVideo embedId={"WGvtr4SPGpw?si=7ktQKc03n6e-sfFm"} />
      <Seperator text={"Trusted by the best"} bgColor={"#FDC435"} />
      <Testimonials />
      <Seperator text={"My recent blogs"} bgColor={"#fff"} />
      <RecentBlogs />
      <Seperator text={"Want to make an appointment ?"} bgColor={"#8280F2"} />
      <DownloadCard name={"Media Kit"} icon={pic} link={"https://open.spotify.com/"} bgColor={"#8280F2"} />
    </main>
  );
}