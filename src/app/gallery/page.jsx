import top from "@assets/secPagesTop.svg"
import Gallery from "@components/Gallery"
import Image from "next/image"


export default function page() {
  return (
    <div className="relative">
      <Image src={top} className="size-full"/>
        <Gallery/>
    </div>
  )
}
