import DownloadCard from "@/components/reusable/DownloadCard";
import TestimonialCard from "@/components/reusable/TestimonialCard";
import AboutMe from "@/components/AboutMe";
import StatsCard from "@components/reusable/StatsCard";
import RecentBlogs from "@components/reusable/RecentBlogs";
import LandingVideo from "@components/LandingVideo.jsx"
import pic from '../assets/downloadCard_icon_1.svg'
import iconHeart from '../assets/heart.svg'
import iconStar from '../assets/star.svg'
import iconTri from '../assets/triangle.svg'


export default function Home() {
  return (
    <main className="flex flex-col">
      <AboutMe /> 
      <div className="flex justify-around">
        <StatsCard icon = {iconHeart} content = {"asdfasdfasdfasdfasd asdfasdfasd"} stats = {"10M"}/>
        <StatsCard icon = {iconStar} content = {"asdfasdfasdfasdfasd asdfasdfasd"} stats = {"21"}/>
        <StatsCard icon = {iconTri} content = {"asdfasdfasdfasdfasd asdfasdfasd"} stats = {"30%"}/>
      </div>
      <LandingVideo embedId={"WGvtr4SPGpw?si=7ktQKc03n6e-sfFm"}/> 
      <TestimonialCard name={"John Doe"} designation={"Student"} content={"asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !! "} />
      <RecentBlogs />
      <DownloadCard name={"Media Kit"} icon={pic} link={"https://open.spotify.com/"} bgColor={"#8280F2"} />
    </main>
  );
}