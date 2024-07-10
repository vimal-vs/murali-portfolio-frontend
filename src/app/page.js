import DownloadCard from "@/components/DownloadCard";
import TestimonialCard from "@/components/TestimonialCard";
import AboutMe from "@/components/AboutMe";
import pic from '../assets/downloadCard_icon_1.svg'

export default function Home() {
  return (
    <main className="flex flex-col">
      <AboutMe />
      <TestimonialCard name={"John Doe"} designation={"Student"} content={"asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !! "} />
      <DownloadCard name={"Media Kit"} icon={pic} link={"https://open.spotify.com/"} bgColor={"#8280F2"} />
    </main>
  );
}