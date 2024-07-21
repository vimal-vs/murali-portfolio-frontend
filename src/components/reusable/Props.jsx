import Image from "next/image"

export default function Props({ icon, text }) {
  return (
    <div>
      <Image src={icon} alt="logo" className="flex justify-auto"></Image>
      <p className="">{text}</p>
    </div>
  )
}