import top from "@assets/secPagesTop.svg"
import Podcasts from "@components/Podcasts"
import Image from "next/image"

export const metadata = {
  title: 'Podcasts | Muralidharan'
}

export default function page() {
  return (
    <div>
      <Image src={top} alt="logo" className="size-full mt-12" />
      <Podcasts />
    </div>
  )
}
