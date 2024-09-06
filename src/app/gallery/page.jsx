import top from "@assets/secPagesTop.svg"
import Gallery from "@components/Gallery"
import Image from "next/image"

export const metadata = {
  title: 'Gallery | Muralidharan'
}

export default function page() {
  return (
    <div className="relative">
      <Image src={top} alt="logo" className="size-full mt-16 md:mt-12" />
      <Gallery />
    </div>
  )
}
