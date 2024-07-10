import DownloadCard from "@/components/DownloadCard";
import TestimonialCard from "@/components/TestimonialCard";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import pic from '../assets/downloadCard_icon_1.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <AboutMe />
      <TestimonialCard name = {"John Doe"} designation = {"Student"} content = {"asdf asdfasdf asdf asdfakjsdfhas adfkajsdhf dsf !! "}/>
      <DownloadCard name = {"Media Kit"} icon = {pic} link={"https://open.spotify.com/"} bgColor={"#8280F2"}/>
    </main>
  );
}