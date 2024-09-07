import top from "@assets/secPagesTop.svg"
import Image from "next/image"
import Blogs from "@components/Blogs"

export const metadata = {
  title: 'Blogs | Muralidharan'
}

export default function page() {
  return (
    <div className="relative">
      <Image src={top} alt="logo" className="size-full mt-16 md:-mt-12" />
      <Blogs limit={false} padding />
    </div>
  )
}
