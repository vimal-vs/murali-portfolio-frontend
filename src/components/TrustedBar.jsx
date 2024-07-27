import Image from "next/image"
import trusted1 from "@assets/trusted1.svg"
import trusted2 from "@assets/trusted2.svg"
import trusted3 from "@assets/trusted3.svg"
import trusted4 from "@assets/trusted4.svg"

export default function TrustedBar() {
  return (
    <div className="grid grid-cols-2 gap-y-8 py-16 md:flex md:flex-row justify-center items-center gap-4 md:justify-around">
      <Image src={trusted1} alt="logo" className="w-40 md:w-auto  m-auto"></Image>
      <Image src={trusted2} alt="logo" className="w-20 md:w-auto  m-auto"></Image>
      <Image src={trusted3} alt="logo" className="w-20 md:w-auto  m-auto"></Image>
      <Image src={trusted4} alt="logo" className="w-20 md:w-auto  m-auto"></Image>
    </div>
  )
}
