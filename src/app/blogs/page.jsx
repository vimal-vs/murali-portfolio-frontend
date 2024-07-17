import top from "@assets/secPagesTop.svg"
import Image from "next/image"
import Blogs from "@components/Blogs"

export default function page() {
  return (
    <div className="relative">
      <Image src={top} className="size-full"/>
        <Blogs/>
    </div>
  )
}
