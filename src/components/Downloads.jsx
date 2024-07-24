import DownloadCard from "@components/reusable/DownloadCard"
import pic1 from '../assets/downloadCard_icon_1.svg'
import pic2 from '../assets/downloadCard_icon_2.svg'
import pic3 from '../assets/downloadCard_icon_3.svg'

export default function downloads() {
  return (
    <div className="flex flex-col justify-center gap-6 md:gap-12 my-10">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
        <DownloadCard name={"Media Kit"} icon={pic1} link={"https://open.spotify.com/"} bgColor={"#8280F2"} />
        <DownloadCard name={"Guest Profile"} icon={pic2} link={"https://open.spotify.com/"} bgColor={"#FDC435"} />
      </div>
      <DownloadCard name={"Brochure"} icon={pic3} link={"https://open.spotify.com/"} bgColor={"#F3F3F3"} />
    </div>
  )
}
