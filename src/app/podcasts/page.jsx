import top from "@assets/secPagesTop.svg"
import Podcasts from "@components/Podcasts"
import Image from "next/image"


export default function page() {
  return (
    <div className="relative">
      <Image src={top} alt="logo" className="size-full" />
      <Podcasts />
    </div>
  )
}
