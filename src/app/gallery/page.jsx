import top from "@assets/secPagesTop.svg"
import Image from "next/image"
import Gallery from "@components/Gallery"

export default function page() {
  return (
    <div className="relative">
      <Image src={top} className="size-full"/>
        <Gallery/>
    </div>
  )
}
