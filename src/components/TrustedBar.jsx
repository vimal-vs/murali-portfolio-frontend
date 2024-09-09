import Image from "next/image"
import l1 from "@assets/clients/l1.jpeg"
import l2 from "@assets/clients/l2.png"
import l3 from "@assets/clients/l3.jpeg"
import l4 from "@assets/clients/l4.png"
import l5 from "@assets/clients/l5.png"
import l6 from "@assets/clients/l6.jpeg"
import l8 from "@assets/clients/l8.png"
import l9 from "@assets/clients/l9.png"


export default function TrustedBar() {
  return (
    <div className="grid grid-cols-2 gap-y-8 py-8 md:py-16 md:flex md:flex-row md:flex-wrap justify-center items-center gap-4 md:justify-around md:md-0">
      <Image src={l1} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l2} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l3} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l4} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l5} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l6} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l8} alt="logo" className="w-28 m-auto"></Image>
      <Image src={l9} alt="logo" className="w-28 m-auto"></Image>
    </div>
  )
}
