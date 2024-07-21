import Image from "next/image"
import trusted1 from "@assets/trusted1.svg"
import trusted2 from "@assets/trusted2.svg"
import trusted3 from "@assets/trusted3.svg"
import trusted4 from "@assets/trusted4.svg"

export default function TrustedBar() {
  return (
    <div className="flex justify-around">
      <Image src={trusted1} alt="logo"></Image>
      <Image src={trusted2} alt="logo"></Image>
      <Image src={trusted3} alt="logo"></Image>
      <Image src={trusted4} alt="logo"></Image>
    </div>
  )
}
